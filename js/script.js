// Greeting otomatis
let userName = "DEVIKA";
document.getElementById("greeting").innerText = `Hi ${userName}, Welcome To Website`;

// Validasi Form
const form = document.getElementById("contactForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("messageInput").value.trim();

    if (!name || !email || !phone || !message) {
        alert("Semua field wajib diisi!");
        return;
    }

    output.innerHTML = `
        <b>Nama:</b> ${name}<br>
        <b>Email:</b> ${email}<br>
        <b>Nomor Telepon:</b> ${phone}<br>
        <b>Pesan:</b> ${message}
    `;
});