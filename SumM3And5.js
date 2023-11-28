function sumM3And5(num) {
    let result = 0;

    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result = result + i;
        }
    }
    
    return result;
}