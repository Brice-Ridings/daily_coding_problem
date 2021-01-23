

function comboEqualTotal(numList, total){
    let neededValues = {}
    let valid = false
    numList.forEach(num => {
        if(neededValues[num]){
            valid = true
        }
        neededValues[total-num] = num
    })
    return valid
}

let result = comboEqualTotal([10, 15, 3, 7], 18)
console.log(result)