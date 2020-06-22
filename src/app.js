import '@babel/polyfill'
import { Server } from 'node-static';
import express from 'express';
import routes from './routes';


let app = new express();
let fileServer = new Server('./src/public');


app.use('/api/v1', routes);
app.use('/', (req, res) => {
    fileServer.serve(req, res);
})
app.listen(8080, (req, res) => {
    console.log('running on 8080');
});
