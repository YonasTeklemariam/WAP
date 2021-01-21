const timer = function () {
  let min = document.getElementById("min").value;
  let sec = document.getElementById("sec").value;
  let time1 =
    (min == "" ? 0 : parseInt(min) * 60) + (sec == "" ? 0 : parseInt(sec));

  let time = time1;
  let Id = setInterval(function () {
    document.getElementById("min").value = Math.trunc(time / 60);
    document.getElementById("sec").value = time % 60;
    time--;
    if (time === -1) {
      clearInterval(Id);
      document.getElementById("min").value = "";
      document.getElementById("sec").value = "";
    }
  }, 1000);
};
