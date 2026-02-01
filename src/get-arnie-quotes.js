const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const requests = urls.map(async (url) => {
    const response = await httpGet(url);
    console.log('Response:', response);
  });
  
};


getArnieQuotes(['http://www.smokeballdev.com/arnie0', 'http://www.smokeballdev.com/arnie1', 'http://www.smokeballdev.com/arnie2']);
module.exports = {
  getArnieQuotes,
};
