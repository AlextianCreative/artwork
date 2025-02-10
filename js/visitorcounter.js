document.getElementById("adminPassword").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Mencegah baris baru
        checkPassword(); // Eksekusi fungsi password
    }
});

function checkPassword() {
    const passwordInput = document.getElementById("adminPassword").value;
    const correctPassword = "123456"; // Ganti dengan password Anda

    if (passwordInput === correctPassword) {
        document.getElementById("visitorCounter").style.display = "block"; // Tampilkan counter
        document.getElementById("errorMsg").style.display = "none";
        fetchVisitorData(); // Panggil data visitor
    } else {
        document.getElementById("errorMsg").style.display = "block";
    }
}

function fetchVisitorData() {
    fetch('https://arunhitcounter.com/hit_tracker.php?website_name=alextiancreative')
        .then(response => response.json())
        .then(data => {
            document.getElementById('todayHits').textContent = data.today_hits;
            document.getElementById('yesterdayHits').textContent = data.yesterday_hits;
            document.getElementById('totalHits').textContent = data.total_hits;
            document.getElementById('onlineHits').textContent = data.online_users;
        })
        .catch(error => console.error("Error fetching visitor data:", error));
}