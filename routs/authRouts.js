const express=require("express")
const router=express.Router()
const cors=require("cors")
const {test,register,loginUser} =require("../controllers/authController")
router.use(
    cors({
        credentials:true,
        //origin:'http://localhost:3000'
        origin:'https://frontend-c57j.onrender.com/'
    })
)


router.get("/",test)
router.post('/Register',register);
router.post('/Login',loginUser)
// router.get('/profile', getProfile)

module.exports=router
