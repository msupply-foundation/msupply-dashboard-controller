const fs = require('fs');
const path = require('path');

const demo = require('./dashboards/demo.js')
const { getRequests } = require('./requests/requests.js');

const host = "localhost";
const port = "3000";
const username = "admin";
const password = "admin";

const getJSON = (filename) => {
  const filepath = path.join(__dirname, filename);
  const dataRaw = fs.readFileSync(filepath);
  const dataJson = JSON.parse(dataRaw);

  return dataJson;
}

const config = {
  baseURL: host + "::" + port,
  auth: { username, password }
}

const { createDashboard } = getRequests(config);

const dashboard = { "dashboard": demo };

console.log(dashboard);

createDashboard(dashboard).then(res => console.log(res)).catch(err => console.log(err));  
