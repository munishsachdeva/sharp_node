const arr = ['apple', 'orange', '', 'mango', '', 'lemon'];

const transform = arr.map((element) => {
    if (element.trim() === ''){
        return 'empty string'
    }
    else{
        return element
    }
})

console.log(transform)