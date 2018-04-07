function updateOutput() {

    var taxRate = 0.0925
    var a = parseFloat(document.getElementById("aweather_base").value)
    var s = parseFloat(document.getElementById("steggie_base").value)
    var b = parseFloat(document.getElementById("shared_base").value)
    var sum = a + s + b
    var tax = roundFloat((sum*taxRate))
    var total = roundFloat((sum*(1 + taxRate)))
    var tipString = document.getElementById("tipPercentage").value
    var tipRate = parseFloat(tipString)/100
    var tip = roundFloat(sum*tipRate)
    var totalWithTip = roundFloat(total + tip)


    var v = roundFloat(totalWithTip*((s+b/2)/(a+b+s)-0.5))

    if (v > 0) {
      document.getElementById("output").innerHTML =
        "Steggie should directly pay Awaether " + roundFloat(v.toString()) + " dollars."
    } else {
      document.getElementById("output").innerHTML =
        "Awaether should directly pay Steggie " + -1 * roundFloat(v.toString()) + " dollars."
    }

    document.getElementById("sum").innerHTML =
        "Sum " + sum.toString()
    document.getElementById("tax").innerHTML =
        "Tax " + tax.toString()
    document.getElementById("total").innerHTML =
        "Total " + total.toString()
    document.getElementById("tipAmount").innerHTML =
        "Tip " + tip.toString()
    document.getElementById("totalWithTip").innerHTML =
        "Total with " + tipString + "% Tip " + totalWithTip.toString()

}


function roundFloat(d) {
  return Math.round(d * 100) / 100
}
