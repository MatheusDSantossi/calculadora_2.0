// AQUI É PARA PEGAR OS NÚMEROS DO INPUT

// if(num1 != NaN && num2 != NaN){
//     setTimeout(() => {
//         num1.foc()
//     }, 3000)

function calcular(){
    var num1 = window.document.getElementById("numero1").value
    var num2 = window.document.getElementById("numero2").value
    var option = window.document.getElementsByName("somar_sub")
    // var option2 = window.document.getElementsByName("somar_sub")
    // window.alert(typeof(num1))
        var n1 = parseInt(num1)
        var n2 = parseInt(num2)
    
    if(option[0].checked){
        // alert("VAI CARAI")
        var soma = n1 + n2
        window.alert(`A soma entre ${n1} e ${n2} é ${soma}`)
    }else if(option[1].checked){
        var subt = n1 - n2
        window.alert(`A subtração entre ${n1} e ${n2} é ${subt}`)
    }
// var msg = window.document.getElementById("msg")

    // window.alert(soma)

// console.log(num1)

}
