const postDashboard = require('./requests/dashboard.js');

const baseURL = 'localhost::3000';
const auth = { 
  username: 'admin',
  password: 'admin'
};
const data = {
  dashboard: {
    id: null,
    uid: null,
    title: 'mSupply Demo',
    tags: [ 'mSupply' ],
    timezone: 'browser',
    schemaVersion: 1,
    version: 1
  },
  folderId: 0,
  overwrite: false
};

postDashboard(baseURL, auth, data).then(res => console.log(res)).catch(error => console.log(error));

