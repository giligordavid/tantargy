var Waterline = require('waterline');


module.exports = Waterline.Collection.extend({
    identity: 'tantargy',
    connection: 'disk',
    attributes: {
        nev: {
        type: 'string',
        required: true
            
        },
        oktato: {
            type: 'string',
            required: true    
        },
        
        
       
        megjegyzes: {
            type: 'string',
            required: true
            
        },
        user: {
            model: 'user'
        },
        
        
    }
});