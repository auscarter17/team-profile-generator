const Intern = require("../lib/Intern");

test ('checks for intern school', () => {
    const intern = new Intern('Peter Parker', 4, 'notasuperhero@avengers.net', 'NYCU')
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test ('checks role for Intern', () => {
    const intern = new Intern('Peter Parker', 4, 'notasuperhero@avengers.net', 'NYCU')
    expect(intern.getRole()).toBe('Intern');
});