import { Router } from  'express';
import Controller from '../controllers/upload';
const app =  Router();


app.get('/status', Controller.onStatus);
app.post('/upload', Controller.onUpload);

export default app;
