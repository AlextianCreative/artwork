document.getElementById("adminPassword").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Mencegah pembuatan baris baru
        checkPassword(); // Eksekusi fungsi password
    }
});

function checkPassword() {
    const passwordInput = document.getElementById("adminPassword").value;
    const correctPassword = "admin123"; // Ganti dengan password rahasia Anda

    if (passwordInput === correctPassword) {
        document.getElementById("visitorCounter").style.display = "block";
        document.getElementById("errorMsg").style.display = "none";
    } else {
        document.getElementById("errorMsg").style.display = "block";
    }
}

function updateVisitorCounter() {
    let today = new Date().toLocaleDateString();
    let storedDate = localStorage.getItem("visitorDate");
    let todayHits = parseInt(localStorage.getItem("todayHits")) || 0;
    let yesterdayHits = parseInt(localStorage.getItem("yesterdayHits")) || 0;
    let totalHits = parseInt(localStorage.getItem("totalHits")) || 0;

    if (storedDate !== today) {
        localStorage.setItem("yesterdayHits", todayHits);
        localStorage.setItem("todayHits", 1);
        localStorage.setItem("visitorDate", today);
    } else {
        localStorage.setItem("todayHits", todayHits + 1);
    }

    localStorage.setItem("totalHits", totalHits + 1);

    document.getElementById("todayHits").innerText = localStorage.getItem("todayHits");
    document.getElementById("yesterdayHits").innerText = localStorage.getItem("yesterdayHits");
    document.getElementById("totalHits").innerText = localStorage.getItem("totalHits");
}

updateVisitorCounter();