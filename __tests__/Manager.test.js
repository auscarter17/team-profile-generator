const Manager = require('../lib/Manager')

test ('checks manager for office number', () => {
    const manager = new Manager('Master Chief', 1, 'overkill@unsc.net', 3)
    expect(manager.getOffice()).toEqual(expect.any(Number));
});

test ('checks role to output Manager', () => {
    const manager = new Manager('Master Chief', 1, 'overkill@unsc.net', 3)
    expect(manager.getRole()).toBe('Manager');
})