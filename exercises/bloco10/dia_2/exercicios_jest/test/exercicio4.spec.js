const getRepos = require('../src/exercicio4');

const url = 'https://api.github.com/orgs/tryber/repos';

describe('GetRepos', () => {
  it('Check if repositorie sd-01-week4-5-project-todo-list is in the list',
    () => expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-todo-list'));
    
  it('Check if repositorie sd-01-week4-5-project-meme-generator is in the list',
    () => expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-meme-generator'));
});