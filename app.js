var express = require("express");
var routes = require("./routes");
var app = express();
var path = require('path');

app.set("view engine", 'ejs');
app.use(express.static('static/bootstrap'))
app.use('/static', express.static(path.join('static', 'bootstrap')))
app.set("view cache", true);

/*app.use(bodyParser.json());//处理以json格式的提交
app.use(bodyParser.urlencoded({//处理以form表单的提交
	extended: true
}))*/

//app.use('/lotus', express.static(path.join('views')))
//app.set('views', path.join(_dirname, 'views'));
//app.use(express.static(path.join(__dirname, "static")));

app.get("/", routes.index);
app.get("/signall", routes.signall);
app.get("/pool", routes.pool);
app.get("/poolregist", routes.poolregist);
app.get("/poolsign", routes.poolsign);
app.get("/pooluser", routes.pooluser);
app.get("/power", routes.power);
app.get("/powerregist", routes.powerregist);
app.get("/powersign", routes.powersign);
app.get("/poweruser", routes.poweruser);
app.get("/registall", routes.registall);




app.listen(8989);
console.log("espress start");
