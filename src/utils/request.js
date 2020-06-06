const axios = require('axios');
export default axios.create({
    baseURL: '',
    timeout: 5000
});
