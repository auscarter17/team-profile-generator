const Manager = require('../lib/Manager')

test ('creates a manager object', () => {
    const manager = new Manager('Master Chief', 1, 'overkill@unsc.net', 3)

    expect (manager.office).toEqual(expect.any(Number));
});

test ('gets office number from manager');