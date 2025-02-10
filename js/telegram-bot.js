async function sendTelegramMessage() {
    event.preventDefault();
    let message = document.getElementById("message").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let order = document.getElementById("orderpick").value;

    
    let formattedMessage = `
        Nama: ${name}
        Email: ${email}
        Order: ${order}
        Pesan: ${message}
    `;
    
    let botToken = "7732836954:AAFDYwN_TkF5GZW51FZ-lBZzb_ZKBIYZ9y4";
    let chatID = "1505004163";
    let telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
     try {
        let response = await fetch(telegramURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatID,
                text: formattedMessage,
                parse_mode: "Markdown"
            })
        });

        let result = await response.json();
        console.log(result);
        
        if (result.ok) {
            alert("Success!");
        } else {
            alert("Failed: " + result.description);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to sending a message. Please try again");
    }
}