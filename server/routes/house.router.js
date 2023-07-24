const router = require('express').Router();
const {selectAllUsers,registerUser,AddHome,updateHome,getHome,deleteHome,logIn,getUser}=require('../controller/User.controller')
router.get("/",selectAllUsers)
router.get("/get",getHome)
router.get("/get/:email",getUser)
router.post('/rejister',registerUser)
router.post('/logIn',logIn)
router.post("/addHome",AddHome)
router.put('/up/:id',updateHome)
router.delete('/del/:id',deleteHome)
module.exports = router;
