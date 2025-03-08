/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();

    for(let i=0; i<nums.length; i++){
        let difNum = target - nums[i];
        if(map.has(difNum)) return [map.get(difNum), i];
        map.set(nums[i], i);
    }
};