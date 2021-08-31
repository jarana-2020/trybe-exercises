const fetch = require('node-fetch');

function getRepos(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name));
} 

async function getNames() {
  const listNames = await getRepos('https://api.github.com/orgs/tryber/repos');
  console.log(listNames[0]);
}
getNames();
module.exports = getRepos;