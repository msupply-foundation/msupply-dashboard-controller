const axios = require('axios');

const postDashboard = async (baseURL, auth, data) => {
  const url = 'api/dashboards/db'
  const method = 'post'
  const config = { baseURL, url, auth, method, data }

  return axios(config);
}

module.exports = postDashboard;