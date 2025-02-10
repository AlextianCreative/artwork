function updateVisitorCounter() {
    let today = new Date().toLocaleDateString();
    let storedDate = localStorage.getItem("visitorDate");
    let todayHits = parseInt(localStorage.getItem("todayHits")) || 0;
    let yesterdayHits = parseInt(localStorage.getItem("yesterdayHits")) || 0;
    let totalHits = parseInt(localStorage.getItem("totalHits")) || 0;

    if (storedDate !== today) {
        // Jika hari berganti, simpan data kemarin dan reset todayHits
        localStorage.setItem("yesterdayHits", todayHits);
        localStorage.setItem("todayHits", 1);
        localStorage.setItem("visitorDate", today);
    } else {
        // Jika masih di hari yang sama, tambahkan hitungan
        localStorage.setItem("todayHits", todayHits + 1);
    }

    // Tambahkan total kunjungan
    localStorage.setItem("totalHits", totalHits + 1);

    // Update tampilan
    document.getElementById("todayHits").innerText = localStorage.getItem("todayHits");
    document.getElementById("yesterdayHits").innerText = localStorage.getItem("yesterdayHits");
    document.getElementById("totalHits").innerText = localStorage.getItem("totalHits");
}

updateVisitorCounter();