// Add your functions here

function map(arr, fn) {
    let working = []
    arr.forEach(element => {
        working.push(fn(element))
    });
    return working
}

function reduce(arr, fn, start) {
    
    if (start) {
       arr.forEach(element => {
            start = fn(element, start)
        })
    } else {
        start = arr[0]
        for (let i = 1; i < arr.length; i++) {
            start = fn(arr[i], start)
        }
    }
    return start
}
