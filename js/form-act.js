function handleClick1() {
    document.getElementById('orderpick').value ='Brand Logo';
}
function handleClick2() {
    document.getElementById('orderpick').value='Abstract';
}
function handleClick3() {
    document.getElementById('orderpick').value='Realistic Object';
}
function handleClick4() {
    document.getElementById('orderpick').value='Detailed Cartoon';
}
function handleClick5() {
    document.getElementById('orderpick').value='Emoticon Character';
}
function handleClick6() {
    document.getElementById('orderpick').value='Detailed Map';
}
function handleClick7() {
    document.getElementById('orderpick').value='Liquid';
}
function handleClick8() {
    document.getElementById('orderpick').value='User Interface';
}
function handleClick9() {
    document.getElementById('orderpick').value='Custom';
}
function handleClick10() {
    document.getElementById('orderpick').value='Buy Directly';
    document.getElementById('message').value='Related vector link : (required) #yourmessage';
}
function updateCharCount() {
    const textarea = document.getElementById("message");
    const charCount = document.getElementById("charCount");
    const maxLength = 500;
    const remaining = maxLength - textarea.value.length;
    
    charCount.textContent = remaining + " characters remaining";
    
    
    if (remaining < 50) {
        charCount.style.color = "red";
    } else {
        charCount.style.color = "black";
    }
}
function toggleDropdown() {
    let dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function selectOption(element) {
    document.getElementById("orderpick").value = element.innerText;
    document.getElementById("dropdown").style.display = "none";
}

function filterOptions() {
    let input = document.getElementById("orderpick").value.toLowerCase();
    let options = document.getElementById("dropdown").children;

    for (let option of options) {
        let text = option.innerText.toLowerCase();
        option.style.display = text.includes(input) ? "block" : "none";
    }
    
    document.getElementById("dropdown").style.display = "block";
}

document.addEventListener("click", function(event) {
    let comboBox = document.querySelector(".combo-box");
    if (!comboBox.contains(event.target)) {
        document.getElementById("dropdown").style.display = "none";
    }
});