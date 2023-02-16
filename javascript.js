function clk(val) {
  document.getElementById("screen2").value = document.getElementById("screen2").value + val;
}
function clrdisp() {
  document.getElementById("screen2").value = ""
  document.getElementById("screen1").value = ""

}
function sqrt() {
  var val = document.getElementById("screen2").value;

  document.getElementById("screen2").value = "Math.sqrt( " + val + ")";

}
function eql() {
  var text = document.getElementById("screen2").value;
  var result = eval(text);
  document.getElementById("screen2").value = result;
  document.getElementById("screen1").value = text;
}
function back() {
  var value = document.getElementById("screen2").value;
  document.getElementById("screen2").value = value.substr(0, value.length - 1);
}
function opposite() {
  var b = document.getElementById("screen2");
  var n = b.value;
  n = n * -1;
  b.value = n;

}