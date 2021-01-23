
function productArray(inputs){
    let currentProduct = 1
    let products = []
    inputs.forEach(num => {
        // multiply all previousProducts by current
        products = products.map(p => p*num)
        products.push(currentProduct)
        currentProduct = currentProduct * num
    })
    return products
}

console.log(productArray([1,2,3,4,5]))

