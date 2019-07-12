import requests from './requests'
import { demo } from './dashboards'

const host: string = "localhost";
const port: string = "3000";
const username: string = "admin";
const password: string = "admin";

const config = {
  baseURL: host + "::" + port,
  auth: { username, password }
}

const { createDashboard } = requests.configRequests(config);

createDashboard(demo).then(res => console.log(res)).catch(err => console.log(err));  
