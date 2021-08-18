import {Router} from 'express'
import {signup,signin, getusers, deleteuser} from '../controllers/auth.controller';

const router = Router();
router.post('/signup',signup);
router.post('/signin',signin);
router.get('/getusers',getusers);
router.delete('/deleteuser',deleteuser);

export default router;