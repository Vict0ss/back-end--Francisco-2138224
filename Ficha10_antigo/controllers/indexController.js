const User = require("../db_sequelize").Users;


exports.signup = function (req,res){
    var { email, password } = req.body;
    
    User.findOne({where: {email:email}})
    .then(result => {
        if (result == null){
            User.create(req.body)
            .then(user =>{
                res.redirect('/profile');
            });
            
        }
        else{
            req.flash('signupMessage','that e-mail is already taken.');
            res.redirect('/signup');
        }

    } )
    .catch(function(err) {
        req.flash('signupMessage', err); 
        res.redirect('/signup');
    });
};  