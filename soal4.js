function changeStr(string) {
  string = prompt("masukkan string yang ingin diubah menjadi huruf kecil");
  let result = string.toLowerCase();
  return result;
}

alert(changeStr());
