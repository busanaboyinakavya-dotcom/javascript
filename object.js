let mobile={
    "mobile name":"iphone",
    "mobile_price":100000,
    RAM:16
}

// retrieve data

console.log(mobile["mobile name"])
console.log(mobile["mobile_price"])
console.log(mobile["RAM"])


// update the data

mobile["mobile_price"]=100000
console.log(mobile["mobile_price"])

// add new properties

mobile["storage"]="25Gb"
console.log(mobile)

// delete the data

delete mobile["RAM"]
console.log(mobile)