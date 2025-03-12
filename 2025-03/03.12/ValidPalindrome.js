/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let filteredStr = [...s.toLowerCase()].filter(c=>/[a-z0-9]/.test(c)).join('');

    return filteredStr === [...filteredStr].reverse().join('');
};