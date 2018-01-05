const loader = require("./index");
const expect = require("expect");

const source = `
/**
 * add two numbers
 *
 * @param {number} a - some number
 * @param {number} b - another number
 * @returns {number} - a + b
 */
function demo(a, b) {
  return a + b;
}`;

const expected = [
  {
    "comment": "/**\n * add two numbers\n *\n * @param {number} a - some number\n * @param {number} b - another number\n * @returns {number} - a + b\n */",
    "description": "add two numbers",
    "params": [
      {
        "type": {
          "names": [
            "number"
          ]
        },
        "description": "some number",
        "name": "a"
      },
      {
        "type": {
          "names": [
            "number"
          ]
        },
        "description": "another number",
        "name": "b"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "number"
          ]
        },
        "description": "- a + b"
      }
    ],
    "name": "demo",
    "longname": "demo",
    "kind": "function",
    "scope": "global"
  }
];

describe("loader", () => {
  it("should describe the return values", () => {
    const description = loader(source);
    expect(description[0].returns).toEqual(expected[0].returns);
  });

  it("should describe the parameters", () => {
    const description = loader(source);
    expect(description[0].params).toEqual(expected[0].params);
  });
});
