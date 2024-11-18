
// 1
var numberMin = (n1 = Number(prompt('Введите первое число')), n2 = Number(prompt('Введите второе число')) ) => {

  console.log(Math.min(n1, n2))
}

numberMin()

//2
var stringLenght = (m1 = prompt('введите страку')) => {
 console.log(m1.length)
}

stringLenght()


//3
var kalkulator = (a = Number(prompt('Введите первое число')),b = prompt('выберите +,-,*,/') , c = Number(prompt('Введите второе число'))) => {


    if(b === '/' && c === 0){
     alert('На ноль делить нельзя')
 }
 else if (b === '+'){
    alert(a + c)
 }else if (b === '-'){
    alert(a-c)
 }else if (b ==='*'){
     alert(a * c)
 }else if (b === '/'){
      alert(a / b)
 }

 else {
   alert('выберите +,-,*,/')
 }

}

kalkulator()