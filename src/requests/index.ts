import axios from 'axios';

const endpoints = {
  'dashboards': 'api/dashboards/db'
}

const getCreateDashboard = ({ baseURL, auth }) => {
  const createDashboard = async (dashboard) => {
    const url = endpoints.dashboards
    const config = { baseURL, auth }
    return axios.post(url, { dashboard }, config );
  }
  return createDashboard;
}

const configRequests = config => ({
  "createDashboard": getCreateDashboard(config)
})

export default { configRequests };