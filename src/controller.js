const { getData } = require('./data/data.js')
const { getRequests } = require('./requests/requests.js');

const data = getData('demo.json');

const { host, port, username, password, dashboards } = data;

const config = {
  baseURL: host + "::" + port,
  auth: { username, password }
}

const { createDashboard } = getRequests(config);

dashboards.forEach(dashboard => {
  console.log(dashboard);
  createDashboard(dashboard).then(res => console.log(res)).catch(err => console.log(err));  
});