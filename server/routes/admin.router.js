const router = require('express').Router();
const { logInAdmin,
    registerAdmin,
    selectAllAdmin,
    acceptCustomer,
    acceptUser,
    deleteCustomer,
    deleteUser,
    addCategory,}=require('../controller/Admin.controller')
router.get("/",selectAllAdmin)
router.post("/addcat",addCategory)
router.put("/put/:id",acceptCustomer)
router.put("/put/:id",acceptUser)
router.post('/register',registerAdmin)
router.post("/login",logInAdmin)
router.delete("/delC/:id",deleteCustomer)
router.delete("/delU/:id",deleteUser)

module.exports = router;