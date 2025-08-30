import express from 'express';
import {viewLeaves, approveLeave, rejectLeave, viewComplaints, issueNotice} from '../controllers/wardenControllers.js'
import { upload } from '../config/multer.js';
import { checkRole } from '../middlewares/checkRole.js';
import { auth } from '../middlewares/auth.js';
const wardenRouter = express.Router();

wardenRouter.get('/leaves', auth, checkRole("warden"), viewLeaves);
wardenRouter.get('/complaints', auth, checkRole("warden"), viewComplaints);
//wardenRouter.get('/count', viewCount);
wardenRouter.patch('/approve', auth, checkRole("warden"), approveLeave);
wardenRouter.patch('/reject', auth, checkRole("warden"), rejectLeave);
wardenRouter.post('/notice', auth, checkRole("warden"), upload.single("noticeFile"), issueNotice);

export default wardenRouter;
