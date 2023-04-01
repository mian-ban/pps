var min = 1;
var max = 45;
function demo(minN, maxN) {
  generate();
  document.getElementById("random").innerHTML = randow(min, max);
}

function randow(minN, maxN) {
  switch (arguments.length) {
    case 1:
      const a = parseInt(Math.random() * (maxN - minN + 1) + minN, 10);
      return "${min}  到  ${max}  的随机数：${a}";
      break;
    case 2:
      const b = parseInt(Math.random() * (maxN - minN + 1) + minN, 10);
      return minN + " 到 " + maxN + " 的随机数：" + b;
      break;
    default:
      return 0;
      break;
  }
}
function generate() {
  min = document.getElementById("min").value;
  max = document.getElementById("max").value;
  document.getElementById("random").innerHTML = randow(min, max);
}
