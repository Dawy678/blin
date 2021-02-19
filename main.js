
// const num = [1,2,3,5]
// const fibo = new Array(0, 1);

// function fibocr() {
//     console.log(fibo)
// for(let i = 1; i < fibo.length; i++) {
//     console.log(fibo[i])
//     if(fibo[i] > 88) {
//         return
//     }
//     if (fibo[i] + fibo[i - 1] === 1) {
//         fibo.push(2)
//     } else {
//         fibo.push(fibo[i] + fibo[i - 1]) 
//     }
// }
// }
// fibocr()
// console.log(fibo)


// let tablica = ['Dawid', 'Pavlo', 'Artur', 'Marta', 'Alicja', 'Alan', 'Fabian', 'Leon', 'Kacper', 'Kuba']
// tablica.pop(),tablica.pop(),tablica.pop(),tablica.pop(),tablica.pop(),tablica.pop(),tablica.pop(),tablica.pop(),tablica.pop(),tablica.pop()
// console.log(tablica)


const tablica1 = new Array()
function dodawanie() {
    for(let i = 0; i < 100; i++) {
    tablica1.push(i)
    }
}
dodawanie()
console.log(tablica1)
tablica1.reverse()
console.log(tablica1)
function popowanie() {
    for(let i = 0; i < 100; i++) {
        tablica1.pop(i)
    }
}
popowanie()
console.log(tablica1)


const tablica2 = new Array()
function rewersywnosc() {
    for(let i = 100; i > 0; i--) {
    tablica2.push(i)
    }
}
rewersywnosc()
console.log(tablica2)

const tablica3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
const xd2 = tablica3.filter(item => {
    if (item > 40 && item < 60) {
        return item
    }
})
console.log(xd2)

tablica3.forEach((item, index) => {
   if(item === 45) {
       return index
   } 
})
console.log(tablica3[45])

const razyTrzy = tablica3.map(item => item * 3)
console.log(razyTrzy)


function powyzej5() {
    tablica3.every(item => {
    if (item > 5) {
        return item 
    } 
})
}
powyzej5()
console.log(powyzej5)