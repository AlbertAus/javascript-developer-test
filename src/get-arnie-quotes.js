const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const requests = urls.map(async (url) => {
    const response = await httpGet(url);
     console.log('Response:', response);
    const { message } = JSON.parse(response.body);
    
    if (response.status === 200) {
      return { 'Arnie Quote': message };
    } else {
      return { 'FAILURE': message };
    }
  });
  
  return Promise.all(requests);
};

(async () => {
  const results = await getArnieQuotes(['http://www.smokeballdev.com/arnie0', 'http://www.smokeballdev.com/arnie1', 'http://www.smokeballdev.com/arnie2']);
  console.log(results);
})();

module.exports = {
  getArnieQuotes,
};
