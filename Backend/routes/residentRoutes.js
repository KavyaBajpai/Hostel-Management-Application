import express from 'express';
import {applyLeave, viewFines, viewBills, uploadDocs, fileComplaint, viewComplaints, markComplaintResolved} from '../controllers/residentControllers.js';
import { auth } from '../middlewares/auth.js';
import { checkRole } from '../middlewares/checkRole.js';

const residentRouter = express.Router()
residentRouter.post('/leave', auth, checkRole("resident"), applyLeave);
residentRouter.get('/fines', auth, viewFines);
residentRouter.get('/bill', auth, viewBills);
residentRouter.post('/docs', auth, uploadDocs);
residentRouter.post('/filecomplaint', auth, fileComplaint);
residentRouter.post('/viewcomplaint', auth, viewComplaints);
residentRouter.put('/resolvecomplaint', auth, markComplaintResolved);

export default residentRouter;