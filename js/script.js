function btnClickKonversi() {
    var inputField = document.getElementById("input-field").value;
    var resultField = document.getElementById("result-field");
    var keteranganField = document.getElementById("keterangan-field");
    var pesanError = document.getElementById("pesanError");
    var labelInput1 = document.getElementById("labelInput1");

    if (inputField === "") {
        pesanError.textContent = "Input tidak boleh kosong!";
        resultField.value = "";
        keteranganField.value = "";
        return;
    } else {
        pesanError.textContent = "";
    }

    var inputNumber = parseFloat(inputField);

    if (isNaN(inputNumber)) {
        pesanError.textContent = "Input harus berupa angka!";
        resultField.value = "";
        keteranganField.value = "";
        return;
    }

    if (labelInput1.textContent.includes("Celcius")) {
        var hasil = (inputNumber * 9 / 5) + 32;
        resultField.value = hasil.toFixed(2);
        keteranganField.value = `(${inputNumber} * 9/5) + 32`;
    } else {
        var hasil = (inputNumber - 32) * 5 / 9;
        resultField.value = hasil.toFixed(2);
        keteranganField.value = `(${inputNumber} - 32) * 5/9`;
    }
}

function btnClickReset() {
    var inputField = document.getElementById("input-field");
    var resultField = document.getElementById("result-field");
    var keteranganField = document.getElementById("keterangan-field");

    inputField.value = "";
    resultField.value = "";
    keteranganField.value = "";
    pesanError.textContent = "";
}

function btnClickReverse() {
    var labelInput1 = document.getElementById("labelInput1");
    var labelInput2 = document.getElementById("labelInput2");

    if (labelInput1.textContent.includes("Celcius")) {
        labelInput1.textContent = "Fahrenheit \u00B0F:";
        labelInput2.textContent = "Celcius \u00B0C:";
    } else {
        labelInput1.textContent = "Celcius \u00B0C:";
        labelInput2.textContent = "Fahrenheit \u00B0F:";
    }
}

// Mendapatkan elemen subjudul dan paragraf
var caraKonversi = document.getElementById("caraKonversi");
var teksCaraKonversi = document.getElementById("teksCaraKonversi");

// Menambahkan event listener ke subjudul
caraKonversi.addEventListener("click", function () {
    // Memeriksa apakah paragraf sedang tersembunyi
    teksCaraKonversi.classList.toggle("hidden");
});

// Inisialisasi kondisi untuk btnClickReverse
btnClickReverse(true); // Kondisi X terjadi, maka fungsi baru dijalankan
// btnClickReverse(false); // Kondisi X tidak terjadi, maka fungsi lama dijalankan
