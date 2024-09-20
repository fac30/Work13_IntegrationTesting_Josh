// Utility functions for testing
function test(name, testFunction) {
    console.group(name);
    testFunction();
    console.groupEnd(name);
  }
  
  function equal(actual, expected, message) {
    if (actual === expected) {
      const defaultMessage = `Expected ${expected} and received ${actual}`;
      console.info("Pass: " + (message || defaultMessage));
    } else {
      const defaultMessage = `Expected ${expected} but received ${actual} instead`;
      console.error("Fail: " + (message || defaultMessage));
    }
  }
  
  // Tests
  test("addition", () => {
    const result = calculate(2, "+", 3);
    const expected = 5;
    equal(result, expected, "Adding 2 and 3 should result in 5");
  });
  
  test("subtraction", () => {
    const result = calculate(10, "-", 4);
    const expected = 6;
    equal(result, expected, "Subtracting 4 from 10 should result in 6");
  });
  
  test("multiplication", () => {
    const result = calculate(4, "*", 5);
    const expected = 20;
    equal(result, expected, "Multiplying 4 and 5 should result in 20");
  });
  
  test("division", () => {
    const result = calculate(10, "/", 2);
    const expected = 5;
    equal(result, expected, "Dividing 10 by 2 should result in 5");
  });
  
  test("invalid operator", () => {
    const result = calculate(10, "%", 2);
    const expected = "Please enter a valid sign (+, -, *, /)";
    equal(result, expected, "Using an invalid operator should return an error message");
  });
  