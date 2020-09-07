var express = require("express");
var app = express();

app.get('/', (req,res)=>{
 res.send("Hello - Welcome to PSA");
});


app.listen(8900,(err)=>{
    console.log("Server Running....")
});

/*
var express = require("express");
var app = express();
app.get();
app.listen(8900);
*/
/*C R U D */