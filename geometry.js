function calculate(id)
{
    const input = document.getElementById(id);
    const inputvalue = input.value;
    return inputvalue;
}
const calculateResult = document.getElementById('result');
const result = document.getElementById('small');

function areaTraingleCal() {
    const basetriangleValue = calculate('triangle-base');
    const heighttrianglevalue = calculate('triangle-height');
    calculateResult.innerText = 0.5 * parseFloat(basetriangleValue) * parseFloat(heighttrianglevalue);
    result.innerText = 0.5 * parseFloat(basetriangleValue) * parseFloat(heighttrianglevalue);
 
}

function areaReactangleCal() {
    const rectangleLength = calculate('rectangle-length');
    const rectanglebase = calculate('rectangle-base'); 
    calculateResult.innerText = parseFloat(rectangleLength) * parseFloat(rectanglebase); 
    result.innerText = parseFloat(rectangleLength) * parseFloat(rectanglebase); 
}

function areaRhomobusCal() {
    const rhomobusdiagonal1 = calculate('diagonal1');
    const rhomobusdiagonal2 = calculate('diagonal2');
    calculateResult.innerText = 0.5 *  parseFloat(rhomobusdiagonal1) * parseFloat(rhomobusdiagonal2);
    result.innerText = 0.5 *  parseFloat(rhomobusdiagonal1) * parseFloat(rhomobusdiagonal2);

}

