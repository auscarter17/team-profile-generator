const Employee = require('../lib/Employee')

test ('creates an employee object', () => {
    const employee = new Employee('Flynn Taggart', 1, 'doomguy@bfg.net');

    expect(employee.name).toBe('Flynn Taggart');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});