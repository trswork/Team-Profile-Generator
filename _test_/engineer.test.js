const Engineer = require("./lib/engineer.js");

test("creates a engineer object", () => {
    const engineer = new Engineer();
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.ID).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
  });