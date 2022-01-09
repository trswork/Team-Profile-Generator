const Manager = require("./lib/manager");
const Employee = require("./lib/employee");

test("creates a manager object", () => {
    const manager = new Manager('John', 26, 'Johntest@test.com', '(704)1234565');
  
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.ID).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
  });

  test("gets manager name", () => {
    const manager = new Manager('John', 26, 'Johntest@test.com', '(704)1234565');
  
    expect(manager.getName()).toEqual(expect.any(String));
  });
  
  test("gets manager ID", () => {
    const manager = new Manager('John', 26, 'Johntest@test.com', '(704)1234565');
  
    expect(manager.getID()).toEqual(expect.any(String));
  });

  test("gets manager Email", () => {
    const manager = new Manager('John', 26, 'Johntest@test.com', '(704)1234565');
  
    expect(manager.getEmail()).toEqual(expect.any(String));
  });
  
  test("gets manager Office Number", () => {
    const manager = new Manager('John', 26, 'Johntest@test.com', '(704)1234565');
  
    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
  });

  test("gets manager Role", () => {
    const manager = new Manager('John', 26, 'Johntest@test.com', '(704)1234565');
  
    expect(manager.getRole()).toEqual("Manager");
  });