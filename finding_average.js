function average(...numbers) {
    let sum =0
    for(num of numbers){
        sum=sum+num
        
    }
    return sum/numbers.length;
    
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
