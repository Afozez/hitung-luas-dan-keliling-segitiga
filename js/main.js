// ========================
// SIDEBAR NAVIGASI
// ========================
const areaTriangle = document.getElementById("area-triangle");
const circumferencetriangle = document.getElementById("circumference-triangle");
const btnAreaTriangle = document.querySelector(".btn-area-triangle");
const btnCircumferenceTriangle = document.querySelector(".btn-circumference-triangle");

circumferencetriangle.style.display = "none";
btnAreaTriangle.classList.add("btn-active");

const navAreaTriangle = () => {
    areaTriangle.style.display = "block";
    circumferencetriangle.style.display = "none";
    btnAreaTriangle.classList.add("btn-active");
    btnCircumferenceTriangle.classList.remove("btn-active");
}

const navCircumferenceTriangle = () => {
    areaTriangle.style.display = "none";
    circumferencetriangle.style.display = "block";
    btnCircumferenceTriangle.classList.add("btn-active");
    btnAreaTriangle.classList.remove("btn-active");
}



// ========================
// ERROR HANDLING
// ========================
const handleError = (id, message) => {
    const error = document.getElementById(`error-message-${id}`)
    error.textContent = message;
}

// ========================
// HITUNG LUAS SEGITIGA
// ========================
const formAreaTriangle = document.getElementById("form-area-triangle");
const base = document.getElementById("base");
const height = document.getElementById("height");
const resultArea = document.querySelector(".result-area");

const calculateArea = () => {

    const baseValue = parseFloat(base.value);
    const heightValue = parseFloat(height.value);

    if(!baseValue || !heightValue || isNaN(baseValue) || isNaN(heightValue)) {
        handleError("area", "Masukkan nilai alas dan tinggi segitiga!");
        return;
    }else {
        handleError("area", "");
    }

    const wide = 1/2 * baseValue * heightValue;

    const resultText = `
        <li>L = 1/2 x a x t</li>
        <li>L = 1/2 x ${baseValue} x ${heightValue}</li>
        <li>L = ${wide}</li>
    `
    resultArea.innerHTML = resultText;
}

formAreaTriangle.addEventListener("submit", (e) => {
    e.preventDefault();
    calculateArea();
});



// ========================
// HITUNG KELILING SEGITIGA
// ========================
const formCircumferenceTriangles = document.getElementById("form-circumference-triangle");
const sideA = document.getElementById("side-a");
const sideB = document.getElementById("side-b");
const sideC = document.getElementById("side-c");
const resultCircumference = document.querySelector(".result-circumference");

const calculateCircumference = () => {
    const sideAValue = parseFloat(sideA.value);
    const sideBValue = parseFloat(sideB.value);
    const sideCValue = parseFloat(sideC.value);

    if(!sideAValue || !sideBValue || !sideCValue || isNaN(sideAValue) || isNaN(sideBValue) || isNaN(sideCValue)) {
        handleError("circumference", "Masukkan nilai semua sisi segitiga!");
        return;
    }else {
        handleError("circumference", "");
    }

    const circumference = sideAValue + sideBValue + sideCValue;

    const resultText = `
        <li>K = a + b + c</li>
        <li>K = ${sideAValue} + ${sideBValue} + ${sideCValue}</li>
        <li>K = ${circumference}</li>
    `
    resultCircumference.innerHTML = resultText;
}

formCircumferenceTriangles.addEventListener("submit", (e) => {
    e.preventDefault();
    calculateCircumference();
});


// ========================
// RESET FORM DAN HASIL
// ========================
const resetFormAndResult = () => {
    formAreaTriangle.reset();
    formCircumferenceTriangles.reset();
    resultArea.innerHTML = "";
    resultCircumference.innerHTML = "";
    handleError("area", "");
    handleError("circumference", "");
}

// ========================
// CLOSE INFORMATION
// ========================
const closeInformation = () => {
    const information = document.querySelector(".information");
    const overlay = document.querySelector(".overlay");
    overlay.classList.remove("overlay");
    information.style.display = "none";
}
