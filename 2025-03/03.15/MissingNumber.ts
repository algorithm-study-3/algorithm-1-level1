function missingNumber(nums: number[]): number {
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    const allSum = Array.from({ length: nums.length + 1 }, (_, index) => index).reduce((acc, cur) => acc + cur, 0);

    return allSum - sum;
};