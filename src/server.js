const express = require('express');
const port = 8080; 
const app = express();


app.listen(port, ()=>console.log(`up and running on port, using node version 22.0.0 ${port}`))