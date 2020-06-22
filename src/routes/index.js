import { Router } from  'express';
import Controller from '../controllers/upload';
const app = new Router();


app.get('/status', Controller.default.onStatus);
app.post('/upload', Controller.default.onUpload);

export default app;
