"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requests_1 = require("./requests");
var dashboards_1 = require("./dashboards");
var host = "localhost";
var port = "3000";
var username = "admin";
var password = "admin";
var config = {
    baseURL: host + "::" + port,
    auth: { username: username, password: password }
};
var createDashboard = requests_1.default.configRequests(config).createDashboard;
createDashboard(dashboards_1.demo).then(function (res) { return console.log(res); }).catch(function (err) { return console.log(err); });
