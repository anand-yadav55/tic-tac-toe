const app = require("express") ();
const http = require("http").createServer(app);

let PORT = process.env.PORT || 3011;
http.listen(PORT, ()=>{
    console.log("runningb port")
});

const socet = require("socket.io")(http);

socet.on("new", ()=>{
    console.log("hi");
})


app.get("/", (req, res)=>{
    res.sendFile("/public/home.html", {root:__dirname});
})
app.set('view engine', 'ejs');

app.get("/play", (req, res)=>{
    res.render("play");
})
app.get("/play.css", (req, res)=>{
    res.sendFile("style/play.css", {root:__dirname});
})
app.get("/play.js", (req, res)=>{
    res.sendFile("scripts/play.js", {root:__dirname});
})
