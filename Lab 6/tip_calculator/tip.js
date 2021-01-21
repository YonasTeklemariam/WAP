let calcTip = function () {
  let subTotal = document.getElementById("subtotal").value;
  let tip = document.getElementById("tip").value;
  console.log(subTotal);
  console.log(tip);

  subTotal = subTotal == "" ? 0 : parseInt(subTotal);
  tip = tip == "" ? 0 : parseInt(tip);
  let totalTip = subTotal * (tip / 100);
  console.log(totalTip);

  let output = document.getElementById("total");
  output.innerHTML = "$" + (totalTip + subTotal);
};
