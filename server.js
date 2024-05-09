import express from 'express';
import { engine } from 'express-handlebars';
import mongoose from 'mongoose';

const mongoConnectionUrl='mongodb://localhost:27017/project';
mongoose.connect(mongoConnectionUrl);
const app = express();
const port = 5000;
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.listen(port, () => {
    console.log('Started the application on http://localhost:${port}');

});