const express = require ('express');
const bodyParser = require('body-parser');
const router = express.Router();
const PORT = 3000;
const PACKAGE = require("./package.json");

const responseUtils = require('./utils/response.utils');

let app = express();
app.use(bodyParser.json({ extended: false }));
app.use(router);

router.get('/', function(req,res){ 
    responseUtils.success(req,res,200,`Module ${PACKAGE.name} is up at ${PORT}`);
});

router.get('/ping', function(req,res){ 
    responseUtils.success(req,res,200,'Pong');
});

router.post('/test/body', function(req,res){ 
    responseUtils.success(req,res,req.body);
});

router.get('/test/query', function(req,res){ 
    responseUtils.success(req,res,req.query);
});

app.listen(PORT);

console.log(`Listening to http://localhost:${PORT}`);