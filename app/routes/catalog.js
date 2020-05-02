var express = require('express');
var router = express.Router();
var mongoose    = require('mongoose');

var Catalog   = require('../models/catalog'); // get our mongoose model

router.get('/', function(req, res, next) {
    res.send('You Are @ /events/');
});

// ==================================
// catalog routes =======================
// ==================================

router.get('/all', (req,res)=> {
    Catalog.find({}, function(err, events) {
        res.json(events);
    });

})


router.get('/insertSampleData', (req,res)=> {
    var data = [
        {
        'id'      : '15459251a6d6b397565',
        'title'   : 'יצירת Linux VM',
        'slug'    : 'basics-of-angular',
        'category': 'IaaS',
        'length'  : 7,
        'updated' : 'Jun 28, 2017'
    },
        {
            'id'      : '1542d75d929a603125',
            'title'   : 'Build a PWA Using Workbox',
            'slug'    : 'build-a-pwa-using-workbox',
            'category': 'web',
            'length'  : 120,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '1542d75d929a603125',
            'title'   : 'Build a PWA Using Workbox',
            'slug'    : 'build-a-pwa-using-workbox',
            'category': 'web',
            'length'  : 120,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '154588a0864d2881124',
            'title'   : 'יצירת סגמנט',
            'slug'    : 'basics-of-typeScript',
            'category': 'תקשורת',
            'length'  : 4,
            'updated' : 'Nov 01, 2017'
        },
        {
            'id'      : '15453ba60d3baa5daaf',
            'title'   : 'התעסקות DP',
            'slug'    : 'android-n-quick-settings',
            'category': 'C2B',
            'length'  : 120000,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '15453a06c08fb021776',
            'title'   : 'Keep Sensitive Data Safe and Private',
            'slug'    : 'keep-sensitive-data-safe-and-private',
            'category': 'android',
            'length'  : 45,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '15427f4c1b7f3953234',
            'title'   : 'Building a gRPC Service with Java',
            'slug'    : 'building-a-grpc-service-with-java',
            'category': 'cloud',
            'length'  : 30,
            'updated' : 'Jun 28, 2017'
        },
        {
            'id'      : '1542d75d929a603125',
            'title'   : 'Build a PWA Using Workbox',
            'slug'    : 'build-a-pwa-using-workbox',
            'category': 'web',
            'length'  : 120,
            'updated' : 'Jun 28, 2017'
        }
    ];
    data.forEach((item, index)=>{
        var catalog = new Catalog(item)
        catalog.save((err)=>{
            console.log("ok")
        })
    })
    res.json({"ok":true})
})


module.exports = router;
