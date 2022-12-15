import { regUser,loginUsers, updateDeposit,ViewAll, updateWithdraw} from "../controller/user.js";
import express from 'express'
import auth from '../middleware/auth.js'
import user from '../middleware/user.js'

const router=express.Router()

router.post('/register',regUser)
router.post('/login',loginUsers)
router.put('/deposit',[auth,user],updateDeposit)
router.post('/credit',[auth,user],updateWithdraw)
router.get('/viewall',ViewAll)

export default router