let myGlobal = 10
function  fun1() {
    fiGlobal = 5


}

function fun2() {
    let output = ""
    if (typeof myGlobal != undefined) {
        output += " myGlobal " + myGlobal
    }
    if (typeof fiGlobal != undefined) {
        output += " fiGlobal " + fiGlobal
    }
    console.log(output)
}
fun1()
fun2()
