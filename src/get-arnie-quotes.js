const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const requests = urls.map(async (url) => {
    const response = await httpGet(url);
    const { message } = JSON.parse(response.body);
    if (response.status === 200) {
      return { 'Arnie Quote': message };
    } else {
      return { 'FAILURE': message };
    }
  });
  return Promise.all(requests);
};

module.exports = {
  getArnieQuotes,
};
