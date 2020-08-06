var http=require('http');
var xlsx=require('xlsx');
const express = require('express');
const path=require("path");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine','pug');
app.get("/", (req, res) => {
    
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post("/readdata", (req, res) => {
    var filename=req.body.filename;
    var wb = xlsx.readFile(filename, { cellDates: true });
    var ws = wb.Sheets["Sheet1"];
    var data = xlsx.utils.sheet_to_json(ws);
    console.log(ws['!ref'])

    res.render('index1',{data:data});
});


const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));



