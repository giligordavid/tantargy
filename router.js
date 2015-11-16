var express = require('express');
var router = new express.Router;
var passport = require('passport');

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    req.flash('info', 'A kért tartalom megjelenítéséhez bejelentkezés szükséges');
    res.redirect('/auth/login');
}

router.route('/auth/login')
    .get(function (req, res) {
        res.render('auth/login');
    })
    .post(passport.authenticate('local-login', {
        successRedirect:    '/list',
        failureRedirect:    '/auth/login',
        failureFlash:       true,
        badRequestMessage:  'Hiányzó adatok'
    }));

router.route('/auth/signup')
    .get(function (req, res) {
        res.render('auth/signup');
    })
    .post(passport.authenticate('local-signup', {
        successRedirect:    '/add',
        failureRedirect:    '/auth/signup',
        failureFlash:       true,
        badRequestMessage:  'Hiányzó adatok'
    }));

router.use('/auth/logout', function (req, res) {
    req.logout();
    res.redirect('/auth/login');
});

// Itt kellene megoldani a végpontokat
router.get('/', function (req, res) {
    res.render('info', {
       title: 'GD'
    });
});

router.route('/list')
    .get(ensureAuthenticated, function (req, res) {
        var result;
        
            
            result = req.app.Models.tantargy.find({

                 user: req.user.id
            });

        result
            // Ha nem volt hiba fusson le ez
            .then(function (data) {
                res.render('list', {
                    title: 'GD',
                    data: data,
                    query: req.query.query,
                    uzenetek: req.flash()
                });
            })
            // Ha volt hiba fusson le ez
            .catch(function () {
                console.log('Hiba!!');
                throw 'error';
            });
        //console.log(req.session.data);
    });
    
router.route('/list/:id')
    .get(ensureAuthenticated, function (req, res) {
        req.app.Models.tantargy.find({ id: req.params.id })
        .then(function (data) {
            res.render('list', {
                title: 'GD',
                data: data,
                uzenetek: req.flash()
            });  
        })
        .catch(function () {
            console.log('Hiba!!');
            throw 'error';
        });
    });
router.route('/add')
    .get(ensureAuthenticated, function (req, res) {
        res.render('add', {
            title: 'GD',
            uzenetek: req.flash()
        });
    })
    .post(ensureAuthenticated, function (req, res) {
        
        req.checkBody('nev', 'Hiba a névvel')
            .notEmpty();
       
        
        if (req.validationErrors()) {
            req.validationErrors().forEach(function (error) {
                req.flash('error', error.msg);
            });
            res.redirect('/add');
        } else {
            req.app.Models.tantargy.create({
                nev: req.body.nev,
                oktato: req.body.oktato,
                megjegyzes: req.body.megjegyzes,
                user: req.user.id
            })
            .then(function () {
                req.flash('success', 'Tantárgy felvéve');
                res.redirect('/add');
            })
            .catch(function () {
                req.flash('error', 'Tantárgy felvétele sikertelen!');
                res.redirect('/add');
            });
        }
        //console.log(req.session.data);
    });
    
router.use('/delete/:id', ensureAuthenticated, function (req, res) {
        
        req.app.Models.tantargy.destroy({ id: req.params.id })
        .then(function () {
            req.flash('success', 'Tantárgy törölve');
            res.redirect('/list'); 
        })
        .catch(function () {
            req.flash('error', 'Tantárgy törlése sikertelen');
            res.redirect('/list');
        });;
    });


router.route('/edit/:id')
    .get(ensureAuthenticated, function (req, res) {
        
         var id = req.params.id;

    req.app.Models.tantargy.findOne({ id: id}).then(function (data) {
        res.render('edit', {
            data: data,
        }); 
    });
    })
    .post(ensureAuthenticated, function (req, res) {
        var id = req.params.id;
        if(req.body.nev != null){
            var nev = req.body.nev;
            req.app.Models.tantargy.update({id: id},{nev: nev})
            .then(function (tantargy){
                //
            })
            .catch(function (err){
                console.log(err);
            })
        }
        if(req.body.oktato != null){
            var oktato = req.body.oktato;
            req.app.Models.tantargy.update({id: id},{oktato: oktato})
            .then(function (tantargy){
                //
            })
            .catch(function (err){
                console.log(err);
            })
        }
        if(req.body.datum != null){
            var datum = req.body.datum;
            
            req.app.Models.tantargy.update({id: id},{datum: datum})
            .then(function (tantargy){
                //
            })
            .catch(function (err){
                console.log(err);
            })
        }
        if(req.body.megjegyzes != null){
            var megjegyzes = req.body.megjegyzes;
            req.app.Models.tantargy.update({id: id},{megjegyzes: megjegyzes})
            .then(function (tantargy){
                //
            })
            .catch(function (err){
                console.log(err);
            })
        }
        
        req.flash('success', 'Tantárgy sikeresen módosítva!');
        res.redirect('/list');

    });



module.exports = router;