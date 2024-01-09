const express=require("express");
const router=express.Router();
const {checkpermission}=require("../middlewares/checkpermission");
const {getproduct,getupdate,deleteproduct,createproduct,getcreate,updateproduct,getdetailproduct,upload}=require("../controllers/ProductController");
router.get("/",checkpermission,getproduct);

router.get("/add",checkpermission,getcreate);

router.post("/add",upload.single("image"),createproduct);

router.get("/update/:id",checkpermission,getupdate);

router.post("/update/:id",upload.single("image"),updateproduct)

router.post("/delete/:id",deleteproduct);

router.get("/detail",checkpermission,getdetailproduct);

module.exports=router;
