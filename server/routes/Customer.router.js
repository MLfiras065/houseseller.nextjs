const router = require('express').Router();
const {  logInCostumer,
    registerCustomer,
    selectAllCustomer,
    selectCustomer,}=require('../controller/Customer.conttroller')
router.get("/",selectAllCustomer)
router.get("/get",selectCustomer)
router.post('/rejister',registerCustomer)
router.post("/addHome",logInCostumer)

module.exports = router;