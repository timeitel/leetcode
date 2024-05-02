const fs = require("fs");
const assert = require("assert");

const file = fs.readFileSync("tests.csv", "utf8");
const tests = file.split("\n").filter((x) => x !== "");

for (const test of tests) {
  const [input, answer] = test.split(",");
  const result = lengthOfLongestSubstring(input);

  assert.equal(result, Number(answer));
  console.info("Passed, result: ", result, "Answer: ", answer);
}

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const window = new Set();
  let longest = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];

    if (window.has(rightChar)) {
      let leftChar = s[left];

      while (leftChar !== rightChar) {
        window.delete(leftChar);
        left++;
        leftChar = s[left];
      }

      left++;
      continue;
    }

    window.add(rightChar);

    if (window.size > longest) {
      longest = window.size;
    }
  }

  return longest;
}
