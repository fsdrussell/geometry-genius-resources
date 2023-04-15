document.getElementById("triangle-btn").addEventListener('click', function(){
const triangleFieldb = document.getElementById("triangle-b")
const triangleAmountb = triangleFieldb.value;

const triangleFieldh = document.getElementById("triangle-h")
const triangleAmounth = triangleFieldh.value;
triangleFieldb.value = '';
triangleFieldh.value = '';
if (isNaN(triangleAmountb) || triangleAmountb < 0 || triangleAmountb === "" || isNaN(triangleAmounth) || triangleAmounth < 0 || triangleAmounth === "")
  alert("The number must not be empty, string, or negative.");
  triangleCalculate = '';

const triangleCalculate = 0.5 * triangleAmountb * triangleAmounth;
document.getElementById("Triangle-result").innerText = triangleCalculate + "cm²";
})

// -----------------------rectangle calculation ------------------------

document.getElementById("btn-rectangle").addEventListener('click', function(){
const rectangleFieldw = document.getElementById("rectangle-w")
const rectangleAmountw = rectangleFieldw.value;

const rectangleFieldl = document.getElementById("rectangle-l")
const rectangleAmountl = rectangleFieldl.value;

if (isNaN(rectangleAmountw) || rectangleAmountw >0 || rectangleAmountw === "" || isNaN(rectangleAmountl) || rectangleAmountl > 0 || rectangleAmountl === "")
alert ("The numbert must not be empty, string or negetive");
rectangleFieldw.value = '';
rectangleFieldl.value = '';
rectangleCalculate = '';
const rectangleCalculate = 0.5 * rectangleAmountw * rectangleAmountl;
document.getElementById("rectangle-result").innerText = rectangleCalculate + "cm²";
rectangleCalculate = '';
})

//----------------------parallogram section ----------------------------------

document.getElementById("btn-parallelogram").addEventListener('click', function(){
const pValueOne = document.getElementById("p-Value-one")
const pValueFirstString = pValueOne.innerText;
const pValueFirst = parseFloat(pValueFirstString);

const pValueTwo = document.getElementById("p-value-two")
const pValueSecondString = pValueTwo.innerText;
const pValueSecond = parseFloat (pValueSecondString);
const pCalculate = 0.5 * pValueFirst * pValueSecond;

document.getElementById("parallelogram-result").innerText = pCalculate + "cm²";
})
// rohmbus section -------------------------------------------

document.getElementById("btn-rohmbus").addEventListener('click', function(){
const rohmbusValueOne = document.getElementById("ro-value-one")
const rohmbusFirstValueString = rohmbusValueOne.innerText;
const rohmbusFirstValue = parseFloat(rohmbusFirstValueString);

const rohmbusValueTwo = document.getElementById("ro-value-two")
const rohmbusSecondValueString = rohmbusValueTwo.innerText;
const rohmbusSecondValue = parseFloat(rohmbusSecondValueString);

const rCalculate = 0.5 * rohmbusFirstValue * rohmbusSecondValue;

document.getElementById("rohmbus-result").innerText = rCalculate + "cm²";
    })
// ===================pentagon section======================

document.getElementById("btn-pentagon").addEventListener('click', function(){
const penValueOne = document.getElementById("pen-value-one")
const penFirstValueString = penValueOne.innerText;
const penFirstValue = parseFloat(penFirstValueString);

const penValueTwo = document.getElementById("ro-value-two")
const penSecondValueString = penValueTwo.innerText;
const penSecondValue = parseFloat(penSecondValueString);

const penCalculate = 0.5 * penFirstValue * penSecondValue;

document.getElementById("pentagon-result").innerText = penCalculate + "cm²";
    })

    // ================= ellipse section =================


document.getElementById("btn-ellipse").addEventListener('click', function(){
const elValueOne = document.getElementById("el-value-one")
const elFirstValueString = elValueOne.innerText;
const elFirstValue = parseFloat(elFirstValueString);

const elValueTwo = document.getElementById("el-value-two")
const elSecondValueString = elValueTwo.innerText;
const elSecondValue = parseFloat(elSecondValueString);

const elCalculate = 3.14 * elFirstValue * elSecondValue;

document.getElementById("ellipse-result").innerText = elCalculate.toFixed(2) +"cm²";
})
  //  =============blog and new html page===================

  const blogButton = document.getElementById('btn-blog');

blogButton.addEventListener('click', () => {
  window.location.href = 'blog.html';
});
