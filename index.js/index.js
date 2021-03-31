const http = require("http");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(addReqUser);

function addReqUser(req, res, next) {
    req.user = {name: "user has no name"};
    next();
}  
app.get("/addReqUser", addReqUser, (req, res)=>{
    res.send(req.user,name);
});
app.get("/json, function (req,res"){
    const obj ={ message: "Hello World"};
    res.send(obj);
});

app.listen(PORT, () => console.log("Server is running"));