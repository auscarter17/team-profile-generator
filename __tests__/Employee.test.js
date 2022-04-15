const Employee = require('../lib/Employee')

// creates an employee with set parameters, expects input for each parameter
test ('creates an employee object', () => {
    const employee = new Employee('Flynn Taggart', 1, 'doomguy@bfg.net');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// uses getName() function to capture employee name and tests against expected value
test ('gets employee name', () => {
    const employee = new Employee('Flynn Taggart', 1, 'doomguy@bfg.net');
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
})

// uses getId() function to capture employee id and checks for numeric value
test ('gets employee id', () => {
    const employee = new Employee('Flynn Taggart', 1, 'doomguy@bfg.net');
    expect(employee.getId()).toEqual(expect.any(Number));
})

// uses getEmail() function to capture employee email and tests it for a string
test ('gets employee email', () => {
    const employee = new Employee('Flynn Taggart', 1, 'doomguy@bfg.net');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

// uses getRole() function to check that role is set as Employee
test('gets employee role', () => {
    const employee = new Employee('Flynn Taggart', 1, 'doomguy@bfg.net');
    expect(employee.getRole()).toBe('Employee');
})