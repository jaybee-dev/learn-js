/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function sum (a = 0, b = 0) {
    return parseInt(a) + parseInt(b)
}

document.querySelectorAll('input').forEach(v => console.log(v.value))

const firstNumber = document.querySelector('#first')
const secondNumber = document.querySelector('#second')
const showResult = document.querySelector('.result')




firstNumber.addEventListener('input', (e) => {
    console.log('first:',e.currentTarget.value)
    showResult.innerText = "Result: "+(sum(firstNumber.value, secondNumber.value))
})

secondNumber.addEventListener('input', (e) => {
    console.log('second:',e.currentTarget.value)
    showResult.innerText = "Result: "+(sum(firstNumber.value, secondNumber.value))
})