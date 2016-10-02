function updateOutput() {
    var a = parseFloat(document.getElementById("aweather_base").value)
    var s = parseFloat(document.getElementById("steggie_base").value)
    var t = parseFloat(document.getElementById("total").value)

    var v = roundUp(t*(s/(a+s)-0.5))

    if (v > 0) {
      document.getElementById("output").innerHTML =
        "Steggie should directly pay Awaether " + roundUp(v.toString()) + " dollars."
    } else {
      document.getElementById("output").innerHTML =
        "Awaether should directly pay Steggie " + -1 * roundUp(v.toString()) + " dollars."
    }

    console.log(a)
    console.log(s)
    console.log(t)
    console.log(a+s)

}


function roundUp(d) {
  return Math.ceil(d * 100) / 100
}
