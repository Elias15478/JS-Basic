let array = [1,4,2,12];
let max = array[0];
for (let i=1; i<array.length; i++) {
    if (array[i] > max) {
        max = array[i]
    }
}
console.log(max);
