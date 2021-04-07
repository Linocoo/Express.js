const http = require("http");
const express = require("express");
const { pathToFileURL } = require("url");
const { time } = require("console");
const app = express();
const path = require("path");
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app.use(addReqUser);

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "Public")));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());


function addReqUser(req, res, next) {
    req.user = {name: "user has no name"};
    next();
};

app.get("/addReqUser", addReqUser, (req, res)=>{
    res.send(req.user,name);
});
app.get("/json", function (req, res){
    const obj = { message: "Hello Lino, I'm your Personal server. How can i help?"};
    res.send(obj);
});
app.get("/home", function (req, res){
    res.send("this is the Home page");
});
app.get("/about", function(req, res){
    res.send("This is the About page");
});
app.post("/", (req, res) =>{
    res.json(req.body);
});
app.post("/contact", (req, res) => {
    const name = req.body.name;
    const user = req.body.user;
    const time = req.body.time;
    const date = req.body.date;
    const email = req.body.email;

    res.render("contact", {
        name: name,
        user: user,
        time: time,
        date: date,
        email: email,
    });
});

app.get("/login", function (req, res) {
    res.send("This is the Login page");
});

app.listen(PORT, () => console.log("Server is finally running"));



/* Hello <name>, thanks for contacting us, we will set your appointment <user> at <time>.
We will contact<> you on your email <email> for updates.  */ 