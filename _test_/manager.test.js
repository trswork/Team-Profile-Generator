const Manager = require("./lib/manager.js");

test("creates a manager object", () => {
    const manager = new Manager();
  
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.ID).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
  });