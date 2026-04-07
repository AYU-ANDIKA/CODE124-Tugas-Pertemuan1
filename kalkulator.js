function hitungKalkulator(angka1, operator, angka2) {
  let hasil;

  switch (operator) {
    case "+":
      hasil = angka1 + angka2;
      break;
    case "-":
      hasil = angka1 - angka2;
      break;
    case "*":
      hasil = angka1 * angka2;
      break;
    case "/":
      if (angka2 === 0) {
        return "Error: Tidak bisa membagi dengan angka 0!";
      }
      hasil = angka1 / angka2;
      break;
    default:
      return "Error: Operator tidak valid!";
  }

  return `Hasil dari ${angka1} ${operator} ${angka2} adalah ${hasil}`;
}
console.log("=== Demo Kalkulator Backend ===");
console.log(hitungKalkulator(10, "+", 5));
console.log(hitungKalkulator(20, "-", 8));
console.log(hitungKalkulator(4, "*", 6));
console.log(hitungKalkulator(15, "/", 3));
console.log(hitungKalkulator(10, "/", 0));