const User = require('../models/user');


module.exports.signUp = async (req,res) =>
{
    try{
        let {name,email,password,role} = req.body;
        let user = await User.findOne({email});
        if(user){
            return res.redirect('back');
        }else{
            user = await User.create({
                name,
                email,
                password,
                role
            })
            return res.redirect('/');
        }

    }catch(err){
        console.log("Error in Sign Up", err);
        return res.status(404).redirect('back');
    }
    
}