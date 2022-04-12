function eliminatingNegativeNumber(arr) {
    var result = [];
for(let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        result[i] = 0;
    }    
    else {
        result[i] = arr[i];
    };
}
console.log(result);
}

var X = [1, -4, 0, -3];
//var X = [-1,-2, 7,7, -9, -9]

eliminatingNegativeNumber(X)
