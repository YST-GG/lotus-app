exports.index = function (req, res) {
    res.render("index", { title: '首页' });
};
exports.signall = function (req, res) {
    res.render("signall", { title: '登录' })
};
exports.powersign = function (req, res) {
    res.render("powersign", { title: '算力用户登录' })
};
exports.poolsign = function (req, res) {
    res.render("poolsign", { title: '矿池用户登录' })
};
exports.registall = function (req, res) {
    res.render("registall", { title: '注册' })
};
exports.poolregist = function (req, res) {
    res.render("poolregist", { title: '矿池用户注册' })
};
exports.powerregist = function (req, res) {
    res.render("powerregist", { title: '算力用户注册' })
};
exports.power = function (req, res) {
    res.render("power", { title: '算力详情' })
};
exports.pool = function (req, res) {
    res.render("pool", { title: '矿池详情' })
};
exports.pooluser = function (req, res) {
    res.render("pooluser", { title: '矿池用户详情' })
};
exports.poweruser = function (req, res) {
    res.render("poweruser", { title: '算力用户详情' })
};
exports.poolIntroduce = function (req, res) {
    res.render("poolIntroduce", { title: '矿池介绍' })
};
exports.buyPower = function (req, res) {
    res.render("buyPower", { title: '购买算力介绍' })
};
exports.public_header= function (req, res) {
    res.render("public_header", { title: '头部导航' })
};



