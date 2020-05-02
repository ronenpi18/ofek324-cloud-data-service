var express = require('express');
var router = express.Router();
var mongoose    = require('mongoose');

var Events   = require('../models/events'); // get our mongoose model

router.get('/', function(req, res, next) {
    res.send('You Are @ /events/');
});

// ==================================
// events routes =======================
// ==================================

router.get('/allEvents', (req,res)=> {
    Events.find({}, function(err, events) {
        res.json(events);
    });

})

router.get('/leastEvents', (req,res)=> {
    Events.find({}).limit(5).exec( function(err, events) {
        res.json(events);
    });

})

router.get('/insertSampleData', (req,res)=> {
    var data = [
        {
        'user'   : {
            'name'  : "IaaS",
            'avatar': 'assets/images/avatars/alice.jpg'
        },
        'message': 'מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות שרתי זמזם הכסף',
        'time'   : new Date()
    },{
        'user'   : {
            'name'  : "IaaS",
            'avatar': 'assets/images/avatars/alice.jpg'
        },
        'message': 'מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות שרתי זמזם הכסף',
        'time'   : new Date()
    },{
        'user'   : {
            'name'  : "IaaS",
            'avatar': 'assets/images/avatars/alice.jpg'
        },
        'message': 'מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות שרתי זמזם הכסף',
        'time'   : new Date()
    },{
        'user'   : {
            'name'  : "IaaS",
            'avatar': 'assets/images/avatars/alice.jpg'
        },
        'message': 'מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות שרתי זמזם הכסף',
        'time'   : new Date()
    },{
        'user'   : {
            'name'  : "IaaS",
            'avatar': 'assets/images/avatars/alice.jpg'
        },
        'message': 'מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות שרתי זמזם הכסף',
        'time'   : new Date()
    },{
        'user'   : {
            'name'  : "IaaS",
            'avatar': 'assets/images/avatars/alice.jpg'
        },
        'message': 'מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות שרתי זמזם הכסף',
        'time'   : new Date()
    },{
        'user'   : {
            'name'  : "IaaS",
            'avatar': 'assets/images/avatars/alice.jpg'
        },
        'message': 'מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות שרתי זמזם הכסף',
        'time'   : new Date()
    },{
        'user'   : {
            'name'  : "IaaS",
            'avatar': 'assets/images/avatars/alice.jpg'
        },
        'message': 'מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות שרתי זמזם הכסף',
        'time'   : new Date()
    },{
        'user'   : {
            'name'  : "IaaS",
            'avatar': 'assets/images/avatars/alice.jpg'
        },
        'message': 'מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות שרתי זמזם הכסף',
        'time'   : new Date()
    },{
        'user'   : {
            'name'  : "IaaS",
            'avatar': 'assets/images/avatars/alice.jpg'
        },
        'message': 'מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות שרתי זמזם הכסף',
        'time'   : new Date()
    },{
        'user'   : {
            'name'  : "IaaS",
            'avatar': 'assets/images/avatars/alice.jpg'
        },
        'message': 'מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות שרתי זמזם הכסף',
        'time'   : new Date()
    },{
        'user'   : {
            'name'  : "IaaS",
            'avatar': 'assets/images/avatars/alice.jpg'
        },
        'message': 'מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות שרתי זמזם הכסף',
        'time'   : new Date()
    },{
        'user'   : {
            'name'  : "IaaS",
            'avatar': 'assets/images/avatars/alice.jpg'
        },
        'message': 'מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות שרתי זמזם הכסף',
        'time'   : new Date()
    },{
        'user'   : {
            'name'  : "IaaS",
            'avatar': 'assets/images/avatars/alice.jpg'
        },
        'message': 'מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות שרתי זמזם הכסף',
        'time'   : new Date()
    },{
        'user'   : {
            'name'  : "IaaS",
            'avatar': 'assets/images/avatars/alice.jpg'
        },
        'message': 'מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות מיגרציות שרתי זמזם הכסף',
        'time'   : new Date()
    }]
    data.forEach((item, index)=>{
        var ev = new Events(item)
        ev.save((err)=>{
            console.log("ok")
        })
    })
    res.json({"ok":true})
})

module.exports = router;
