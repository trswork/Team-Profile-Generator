const Intern = require("./lib/intern.js");

test("creates a intern object", () => {
    const intern = new Intern();
  
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.ID).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
  });