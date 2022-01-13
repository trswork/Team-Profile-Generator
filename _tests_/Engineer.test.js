const Engineer = require("./lib/Engineer");


test("creates a engineer object", () => {
    const engineer = new Engineer('Edward', 20, 'Edtest@test.com', 'EDtest');
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.ID).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
  });

  test("gets employee name", () => {
    const engineer = new Engineer('Edward', 20, 'Edtest@test.com', 'EDtest');
  
    expect(engineer.getName()).toEqual(expect.any(String));
  });
  
  test("gets employee ID", () => {
    const engineer = new Engineer('Edward', 20, 'Edtest@test.com', 'EDtest');
  
    expect(engineer.getID()).toEqual(expect.any(Number));
  });

  test("gets employee Email", () => {
    const engineer = new Engineer('Edward', 20, 'Edtest@test.com', 'EDtest');
  
    expect(engineer.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
  });
  
  test("gets employee GitHub", () => {
    const engineer = new Engineer('Edward', 20, 'Edtest@test.com', 'EDtest');
  
    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
  });

  test("gets employee Role", () => {
    const engineer = new Engineer('Edward', 20, 'Edtest@test.com', 'EDtest');

    expect(engineer.getRole()).toEqual("Engineer");
  });