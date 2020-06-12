let user = prompt("pilih salah satu (getCelsius/getFahrenheit): ");
if (user == "getCelsius") {
  function changeFahrenheit(fahrenheits) {
    fahrenheits = prompt("masukkan angka");
    return fahrenheits - 32;
  }

  function getCelsius(deg) {
    let a = (changeFahrenheit(deg) * 5) / 9;
    return a;
  }
  console.log(getCelsius());
  alert('lihat di console!');
} else if (user == "getFahrenheit") {
  function changeNumber(number) {
    return (number * 9) / 5;
  }

  function getFahrenheit(celsius) {
    return changeNumber(celsius) + 32;
  }
  alert('lihat di console!');
  console.log(getFahrenheit());
 
} else {
  alert("pilihan anda salah");
}
