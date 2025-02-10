function validateAndSend() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Name and Email cannot be empty!");
        return; // Menghentikan eksekusi jika kosong
    }

    sendTelegramMessage(); // Panggil fungsi jika validasi lolos
}