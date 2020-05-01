
app.get('/setup', function(req, res) {

    // create a sample user
    var user = new User({
        name: 'Ronen',
        password: 'password',
        admin: true
    });
    user.save(function(err) {
        if (err) throw err;

        console.log('User saved successfully');
        res.json({ success: true });
    });
});
app.post('/register',urlencodedParser, function (req,res) {
    var user = new User({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        admin:false,
        projects:[],
        countOfProjects: 0
    });
    user.save(function(err) {
        if (err) throw err;

        console.log('User saved successfully');
        res.json(user);
    });

});

// basic route (http://localhost:8080)
app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

// ---------------------------------------------------------
// get an instance of the router for api routes
// ---------------------------------------------------------
var apiRoutes = express.Router();
var token = '';
// ---------------------------------------------------------
// authentication (no middleware necessary since this isnt authenticated)
// ---------------------------------------------------------
// http://localhost:8080/api/authenticate
apiRoutes.post('/authenticate', urlencodedParser,function(req, res) {

    // find the user
    User.findOne({
        email: req.body.email
    }, function(err, user) {

        if (err) throw err;

        if (!user) {
            console.log(JSON.stringify(req.body.email))
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            // check if password matches
            if (user.password !== req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {

                // if user is found and password is right
                // create a token
                console.log(user)
                token = jwt.sign(user, app.get('superSecret'), {
                    expiresIn: 94900000 // expires in 24 hours
                });

                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });


            }

        }

    });
});

// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
apiRoutes.use(function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.param('token') || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }

});

// ---------------------------------------------------------
// authenticated routes
// ---------------------------------------------------------
apiRoutes.get('/', function(req, res) {
    res.json({ message: 'yay' });
});

apiRoutes.get('/users', function(req, res) {
    User.find({}, function(err, users) {
        res.json(users);
    });
});

apiRoutes.get('/check', function(req, res) {
    res.json(req.decoded);
});
apiRoutes.post('/add_project',function (req,res) {
    //db.scores.findOneAndUpdate
    if(req.decoded._doc.email === req.body.email) {
        var projectJson = {name: req.body.name, description:req.body.description , skills:req.body.skills }
        User.findOneAndUpdate({email: req.body.email}, {$push: {projects: projectJson}} ,function(err, users) {

            if (err)
                res.json({message: "fuck"});
            else
                res.json({message: "yay"})
        })


        var counter = 0;
        User.find({email: req.body.email}, function(err, users) {
            counter = users.countOfProjects;
        });

        User.findOneAndUpdate({email: req.body.email},{$inc: {countOfProjects:counter}})
    }

})

app.use('/api', apiRoutes);
