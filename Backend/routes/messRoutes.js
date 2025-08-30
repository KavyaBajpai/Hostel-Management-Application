import express from 'express';
import {getOptOutCounts, uploadMessExpenseWithBill} from '../controllers/messControllers.js';
import { auth } from '../middlewares/auth.js';
import { upload } from '../config/multer.js';
import { checkRole } from '../middlewares/checkRole.js';
const messRouter = express.Router();

messRouter.post('/upload',
  auth,
  checkRole("mess-incharge"),
  upload.single("bill"), // name="bill" in form
  uploadMessExpenseWithBill);
messRouter.get('/count', getOptOutCounts);

export default messRouter;