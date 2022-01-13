const Intern = require("./lib/Intern");

test("creates a intern object", () => {
    const intern = new Intern('Jessica', 24, 'Jessicatest@test.com', 'UNCC');
  
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.ID).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
  });

  test("gets intern name", () => {
    const intern = new Intern('Jessica', 24, 'Jessicatest@test.com', 'UNCC');
  
    expect(intern.getName()).toEqual(expect.any(String));
  });
  
  test("gets intern ID", () => {
    const intern = new Intern('Jessica', 24, 'Jessicatest@test.com', 'UNCC');
  
    expect(intern.getID()).toEqual(expect.any(Number));
  });

  test("gets intern Email", () => {
    const intern = new Intern('Jessica', 24, 'Jessicatest@test.com', 'UNCC');
  
    expect(intern.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
  });
  
  test("gets intern School", () => {
    const intern = new Intern('Jessica', 24, 'Jessicatest@test.com', 'UNCC');
  
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
  });

  test("gets intern Role", () => {
    const intern = new Intern('Jessica', 24, 'Jessicatest@test.com', 'UNCC');
  
    expect(intern.getRole()).toEqual("Intern");
  });