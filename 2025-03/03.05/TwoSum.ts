function twoSum1(nums: number[], target: number): number[] {
    for(let first = 0; first < nums.length - 1; first++) {
        for(let second = first + 1; second < nums.length; second++) {
            if(nums[first] + nums[second] === target) return [first, second];
        }
    }
    return [];
};

function twoSum2(nums: number[], target: number): number[] {
    const seen = new Map();
    for (const [index, number] of nums.entries()) {
        if(seen.has(target - number)) {
            return [seen.get(target - number), index];
        }
        seen.set(number, index);
    }
    return [];
}