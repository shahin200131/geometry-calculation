function calculate(id) {
    const input = document.getElementById(id);
    const inputvalue = input.value;
    return inputvalue;
}
const calculateResult = document.getElementById('result');

const list = document.getElementById('list');

function areaTraingleCal() {
    const basetriangleValue = calculate('triangle-base');
    const heighttrianglevalue = calculate('triangle-height');
    const triangleArea = 0.5 * parseFloat(basetriangleValue) * parseFloat(heighttrianglevalue);
    calculateResult.innerText = triangleArea;
    const triangleresult = document.getElementById('triangle-small-area');
    triangleresult.innerText = triangleArea;
    const li = document.createElement('li');
    const triangleName = document.getElementById('triangle-name');
    const triangleShape = triangleName.innerText;
    const count = list.childElementCount;
    li.innerHTML = `${count+1} . ${triangleShape}  ${triangleArea} cm<sup>2</sup> <button class = "btn btn-sm btn-success m-2"> Convert </button>`;
    list.appendChild(li);

}

function areaReactangleCal() {
    const rectangleLength = calculate('rectangle-length');
    const rectanglebase = calculate('rectangle-base');
    const rectangleArea = parseFloat(rectangleLength) * parseFloat(rectanglebase);
    calculateResult.innerText = rectangleArea;
    const rectangleresult = document.getElementById('rectangle-small-area');
    rectangleresult.innerText = rectangleArea;
    const lii = document.createElement('li');
    const rectangleName = document.getElementById('rectangle-name');
    const rectangleShape = rectangleName.innerText;
    const count = list.childElementCount;
    lii.innerHTML = `${count+1} . ${rectangleShape}  ${rectangleArea} cm<sup>2</sup> <button class = "btn btn-sm btn-success m-2"> Convert </button>`;
    list.appendChild(lii);
}

function areaRhomobusCal() {
    const rhomobusdiagonal1 = calculate('diagonal1');
    const rhomobusdiagonal2 = calculate('diagonal2');
    const rhomobusArea = 0.5 * parseFloat(rhomobusdiagonal1) * parseFloat(rhomobusdiagonal2);
    calculateResult.innerText = rhomobusArea; 
    const rhomobusresult = document.getElementById('rhomobus-small-area');
    rhomobusresult.innerText = rhomobusArea;
    const liii = document.createElement('li');
    const rhomobusName = document.getElementById('rhombus-name');
    const rhomobusShape = rhomobusName.innerText;
    const count = list.childElementCount;
    liii.innerHTML = `${count+1} . ${rhomobusShape}  ${rhomobusArea} cm<sup>2</sup> <button class = "btn btn-sm btn-success m-2"> Convert </button>`;
    list.appendChild(liii);
}

