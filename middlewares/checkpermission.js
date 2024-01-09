const Users=require("../models/users");
const Token=require("../models/token");
const checkpermission=async(req,res,next)=>{
    try{
        const id=req.session._idcheck||"";
        if(id){
            const user=await Users.findOne({_id:id});
            if(!user.verified){
                const token=await Token.findOne({userId:id});
                if(token){
                    req.session._idcheck="";
                    res.redirect(`/users/resetpassword/${id}`);
                    return;
                }
            }
        }
        if(!req.session.loggedin){
            res.redirect("/login"); 
            return;
        }
        next();
    }catch(error){
        return next(error);
    }
}
module.exports={checkpermission}