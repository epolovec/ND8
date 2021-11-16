let selectedNumber = 10;

if (selectedNumber>=1 && selectedNumber<=4) {
    console.log("Skaičius žemas");
} else if (selectedNumber===5 || selectedNumber===6) {
    console.log("Skaičius vidutinis");
} else if (selectedNumber===7) {
    console.log("Skaičius aukščiau vidurkio");
} else if (selectedNumber>=8 && selectedNumber<=10) {
    console.log("Skaičius aukštas");
}