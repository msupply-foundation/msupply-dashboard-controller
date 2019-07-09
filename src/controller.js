const axios = require('axios');

const config = {
    baseURL: 'localhost::3000',
    url: 'api/dashboards/db',
    auth: {
        username: 'admin',
        password: 'admin'
    },
    method: 'post',
    data: {
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
    }
}

axios(config).then(res => console.log(res)).catch(error => console.log(error));