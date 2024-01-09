const express=require("express");
const router=express.Router();
const {checkpermission}=require("../middlewares/checkpermission");
const {getuser,processlogin,adduser,getdetail,getprofile,changepassword,processadd,upload,getupdate,updateuser,deleteuser,processchangepassword,resendemail,changestatus,changeavatar,updateprofile,watchsales}=require("../controllers/UserController");
router.get("/",checkpermission,getuser);


router.post("/login",processlogin);


router.get("/profile/:id",checkpermission,getprofile);

router.get("/resetpassword/:id",changepassword);

router.post ("/resetpassword/:id",processchangepassword);


router.post("/add",upload.single("avatar"),processadd);

router.get("/update/:id",checkpermission,getupdate);

router.post("/update/:id",upload.single("avatar"),updateuser);

router.post("/delete/:id",deleteuser);

router.get("/detail/:id",checkpermission,getdetail);

router.get("/add",checkpermission,adduser);

router.get("/resendemail/:id",checkpermission,resendemail);

router.get("/changestatus/:id",checkpermission,changestatus);

router.post("/changeavatar/:id",upload.single("avatar"),changeavatar);

router.post("/changeprofile/:id",updateprofile);

router.get("/watchsales/:id/",checkpermission,watchsales);

module.exports=router;
