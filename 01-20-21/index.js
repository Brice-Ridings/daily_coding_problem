// Given N, Taking 1 or 2 steps at a time, how many combinations of steps are there? Order matters.


/**
 * Returns an array of arrays of combinations
 * @param steps
 */
function computeStepCombinations(totalSteps, options){
    // combinations can be numbers instead of arrays for quick comparison
    // combinations can be stored under an object for quick comparison
    /**
     * 4 Steps would look like
     * {
     *     1111 : "",
     *     211 : "",
     *     121 : "",
     *     112 : "",
     *     22 : ""
     * }
     */

    // We have 4 slots to fill, how man times can we add 1 & 2 to get 4?
    // total: 4 , Options [1,2]


}

var arguments = process.argv.slice(2);
let steps = arguments[0]

let combinations = computeStepCombinations(steps)
console.log(`There are ${combinations.length}, combinations`)