var express = require("express");
var routes = require("./routes");
var app = express();
var path = require('path');

app.set("view engine", 'ejs');
app.use(express.static('static/bootstrap'))
app.use('/static', express.static(path.join('static', 'bootstrap')))
app.set("view cache", true);

/*app.use(bodyParser.json());//������json��ʽ���ύ
app.use(bodyParser.urlencoded({//������form�������ύ
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
//未完成的页面/poolIntroduce  /pool /buyPower
app.get("/poolIntroduce",routes.poolIntroduce);
app.get("/buyPower",routes.buyPower);
//头部导航
app.get("/public_header", routes.public_header);


app.listen(8989);
console.log("espress start");
