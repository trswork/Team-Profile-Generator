const Employee = require("./lib/employee");

test("creates a employee object", () => {
    const employee = new Employee('Lisa', 25, 'Lisatest@test.com');
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.ID).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
  });

  test("gets employee name", () => {
    const employee = new Employee('Lisa', 25, 'Lisatest@test.com');
  
    expect(employee.getName()).toEqual(expect.any(String));
  });
  
  test("gets employee ID", () => {
    const employee = new Employee('Lisa', 25, 'Lisatest@test.com');
  
    expect(employee.getID()).toEqual(expect.any(String));
  });

  test("gets employee Email", () => {
    const employee = new Employee('Lisa', 25, 'Lisatest@test.com');
  
    expect(employee.getEmail()).toEqual(expect.any(String));
  });
  
  test("gets employee Role", () => {
    const employee = new Employee('Lisa', 25, 'Lisatest@test.com');
  
    expect(employee.getRole()).toEqual("Employee");
  });
  
  