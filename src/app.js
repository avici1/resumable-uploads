import { Server } from 'node-static';
import express from 'express';
import Uploader from './controllers/upload';


let app = new express();
let fileServer = new Server('./src/public');


app.use('/api/v1', Uploader);
app.use('/files', fileServer.serve(req, res))
app.listen(8080, (req, res) => {
    console.log('running on 8080');
});
