function updateOutput() {
    var a = parseFloat(document.getElementById("aweather_base").value)
    var s = parseFloat(document.getElementById("steggie_base").value)
    var b = parseFloat(document.getElementById("shared_base").value)
    var t = parseFloat(document.getElementById("total").value)

    var v = roundUp(t*((s+b/2)/(a+b+s)-0.5))

    if (v > 0) {
      document.getElementById("output").innerHTML =
        "Steggie should directly pay Awaether " + roundFloat(v.toString()) + " dollars."
    } else {
      document.getElementById("output").innerHTML =
        "Awaether should directly pay Steggie " + -1 * roundFloat(v.toString()) + " dollars."
    }

    console.log(a)
    console.log(s)
    console.log(t)
    console.log(a+s)

}


function roundFloat(d) {
  return Math.round(d * 100) / 100
}
