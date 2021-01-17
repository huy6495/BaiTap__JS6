/**
 * Nguoi tao: Nguyen Quoc Huy
 * Ngay tao: 12/01/2021
 * Bai tap JS buoi 6
 */

function getEle(ele) {
  return document.getElementById(ele);
}

/**Bai tap 1: Tim so nguyen duong nho nhat */
getEle("btn_kQ1").addEventListener("click", function () {
  var tong = 0;
  var n = 0;
  for (i = 0; tong < 10000; i++) {
    tong += i;
    n = i - 1;
  }
  getEle("kQ1").innerHTML = n;
});

/**
 * Bai tap 2: Tinh tong:
 */
getEle("btn_kQ2").addEventListener("click", function () {
  var tongTich = 0;
  var luyThua = 0;
  var x = parseInt(getEle("txt_x").value);
  var n = parseInt(getEle("txt_n").value);
  for (i = 1; i <= n; i++) {
    luyThua = Math.pow(x, i);
    tongTich += luyThua;
  }
  getEle("kQ2").innerHTML = tongTich;
});

/**
 * Bai tap 3: Tinh giai thua:
 */
getEle("btn_kQ3").addEventListener("click", function () {
  var tich = 1;
  var n = parseInt(getEle("txt_n2").value);
  for (i = 1; i <= n; i++) {
    tich = tich * i;
  }
  getEle("kQ3").innerHTML = tich;
});

/**
 * Bai tap 4: Tao the div
 */
function taoTheDiv(i) {
  var div = document.createElement("div");
  if (i % 2 !== 0) {
    div.style = "display: block; background-color:blue; height: 50px;";
  } else {
    div.style = "display: block; background-color:red; height: 50px;";
  }
  getEle("bai4").appendChild(div);
}

getEle("btn_kQ4").addEventListener("click", function () {
  const soThe = 10;
  for (i = 0; i < soThe; i++) {
    taoTheDiv(i);
  }
});

/** Het */
