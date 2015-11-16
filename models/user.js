var Waterline = require('waterline');
var bcrypt = require('bcryptjs');

module.exports = Waterline.Collection.extend({
    identity: 'user',
    connection: 'disk',
    attributes: {
        user: {
            type: 'string',
            required: true,
            unique: true,
        },
        password: {
            type: 'string',
            required: true,
        },
        firstname: {
            type: 'string',
            required: true,
        },
        lastname: {
            type: 'string',
            required: true,
        },
        
        role: {
            type: 'string',
            enum: ['riporter', 'operator'],
            required: true,
            defaultsTo: 'riporter'
        },
        subjects: {
            collection: 'tantargy',
            via: 'user'
        },
        validPassword: function (password) {
            return bcrypt.compareSync(password, this.password);
        }
    },
    
    beforeCreate: function(values, next) {
        bcrypt.hash(values.password, 10, function(err, hash) {
            if (err) {
                return next(err);
            }
            values.password = hash;
            next();
        });
    }
});