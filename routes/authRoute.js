import express from 'express';
import {testController, loginController,registerController,forgotPasswordController,updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from '../controllers/authController.js';
import {isAdmin, requireSignIn} from '../middlewares/authMiddleware.js';

const router= express.Router();
// REGISTER || POST
router.post('/register',registerController);

//LOGIN || POST
router.post('/login',loginController);

//FORGOT PASSWORD || POST
router.post('/forgot-password',forgotPasswordController)

//test route
router.get('/test',requireSignIn,isAdmin, testController);

//protected route
router.get('/user-auth', requireSignIn, (req,res)=>{
    res.status(200).send({ok:true});
})

router.get('/admin-auth', requireSignIn, isAdmin, (req,res)=>{
    res.status(200).send({ok:true});
});

router.put('/profile',requireSignIn,updateProfileController);

router.get('/orders',requireSignIn,getOrdersController);

router.get('/all-orders',requireSignIn,isAdmin,getAllOrdersController);

router.put(
    "/order-status/:orderId",
    requireSignIn,
    isAdmin,
    orderStatusController
  );

export default router;