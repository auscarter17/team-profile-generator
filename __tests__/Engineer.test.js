const Engineer = require('../lib/Engineer')

test ('checks for Engineer github', () => {
    const engineer = new Engineer('John Shepard', 2, 'spectrezrule@citadel.net', 'thecommandern7')
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test ('checks role for Engineer', () => {
    const engineer = new Engineer('John Shepard', 2, 'spectrezrule@citadel.net', 'thecommandern7')
    expect(engineer.getRole()).toBe('Engineer');
});