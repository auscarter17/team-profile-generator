const Engineer = require('../lib/Engineer')

test ('creates an engineer object', () => {
    const engineer = new Engineer('John Shepard', 2, 'spectrezrule@citadel.net', 'thecommandern7')

    expect(engineer.github).toEqual(expect.any(String));
});