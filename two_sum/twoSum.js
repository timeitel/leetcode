/**
 * @param {number[]} nums - The array of numbers.
 * @returns {number[]} The two indexes of the values that add to target
 */
function twoSum(nums, target) {
  // number is key, index is value
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;

    if (diff in map) {
      return [map[diff], i];
    }

    map[num] = i;
  }
}
