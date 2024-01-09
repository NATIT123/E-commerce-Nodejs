// routes/customer.js

const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");
const {checkpermission}=require("../middlewares/checkpermission");
router.get("/",checkpermission, customerController.listCustomers);

router.get("/data",checkpermission, customerController.datalistCustomers);

router.put("/update/:id", customerController.updateCustomer);

router.delete("/delete/:id", customerController.deleteCustomer);

router.post("/store", customerController.storeCustomer);

router.get("/profile/:id",checkpermission, customerController.profile);

router.get("/orders/create",checkpermission, customerController.createOrder);

router.get("/pruchase",checkpermission, customerController.createPurchase);

router.post("/purchase/store", customerController.storePurchase);

router.get("/search/:phoneNumber",checkpermission, customerController.searchCustomerByPhoneNumber);

router.get("/search-product/:barcode",checkpermission, customerController.searchProduct);

module.exports = router;
