// ========================
// SIDEBAR NAVIGASI
// ========================

// Panggil elemen html mengunakan id dan class
const areaTriangle = document.getElementById("area-triangle");
const circumferencetriangle = document.getElementById("circumference-triangle");
const btnAreaTriangle = document.querySelector(".btn-area-triangle");
const btnCircumferenceTriangle = document.querySelector(".btn-circumference-triangle");

// Default
circumferencetriangle.style.display = "none";
btnAreaTriangle.classList.add("btn-active");

// Navigasi hitung luas segitiga
const navAreaTriangle = () => {
    areaTriangle.style.display = "block";
    circumferencetriangle.style.display = "none";
    btnAreaTriangle.classList.add("btn-active");
    btnCircumferenceTriangle.classList.remove("btn-active");
}

// Navigasi hitung keliling segitiga
const navCircumferenceTriangle = () => {
    areaTriangle.style.display = "none";
    circumferencetriangle.style.display = "block";
    btnCircumferenceTriangle.classList.add("btn-active");
    btnAreaTriangle.classList.remove("btn-active");
}



// ========================
// ERROR HANDLING
// ========================

// Fungsi menampilkna pesan error pada input
const handleError = (id, message) => {
    const error = document.getElementById(`error-message-${id}`)
    error.textContent = message;
}

// ========================
// HITUNG LUAS SEGITIGA
// ========================

// Panggil elemen html mengunakan id dan class
const formAreaTriangle = document.getElementById("form-area-triangle");
const base = document.getElementById("base");
const height = document.getElementById("height");
const resultArea = document.querySelector(".result-area");

const calculateArea = () => {
    // Ambil nilai dari input
    const baseValue = parseFloat(base.value);
    const heightValue = parseFloat(height.value);

    // Validasi input
    if(!baseValue || !heightValue || isNaN(baseValue) || isNaN(heightValue)) {
        handleError("area", "Masukkan nilai alas dan tinggi segitiga!");
        return;
    }else {
        handleError("area", "");
    }

    // Rumus hitung luas segitiga
    const wide = 1/2 * baseValue * heightValue;

    // Tampilkan hasil
    const resultText = `
        <li>L = 1/2 x a x t</li>
        <li>L = 1/2 x ${baseValue} x ${heightValue}</li>
        <li>L = ${wide}</li>
    `
    resultArea.innerHTML = resultText;
}

// Menambahkan event submit pada form
formAreaTriangle.addEventListener("submit", (e) => {
    e.preventDefault(); // Mencegah reload form
    calculateArea();
});



// ========================
// HITUNG KELILING SEGITIGA
// ========================

// Panggil elemen html mengunakan id dan class
const formCircumferenceTriangles = document.getElementById("form-circumference-triangle");
const sideA = document.getElementById("side-a");
const sideB = document.getElementById("side-b");
const sideC = document.getElementById("side-c");
const resultCircumference = document.querySelector(".result-circumference");

const calculateCircumference = () => {
    // Ambil niali input
    const sideAValue = parseFloat(sideA.value);
    const sideBValue = parseFloat(sideB.value);
    const sideCValue = parseFloat(sideC.value);

    // Validasi input
    if(!sideAValue || !sideBValue || !sideCValue || isNaN(sideAValue) || isNaN(sideBValue) || isNaN(sideCValue)) {
        handleError("circumference", "Masukkan nilai semua sisi segitiga!");
        return;
    }else {
        handleError("circumference", "");
    }

    // Rumus hitung keliling segitiga
    const circumference = sideAValue + sideBValue + sideCValue;

    // Tampilkan hasil
    const resultText = `
        <li>K = a + b + c</li>
        <li>K = ${sideAValue} + ${sideBValue} + ${sideCValue}</li>
        <li>K = ${circumference}</li>
    `
    resultCircumference.innerHTML = resultText;
}

// Menambhakn event submit pada form
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
