const discord = document.getElementById('discord')
const whatsapp = document.getElementById('whatsapp')

function displayDiscord() {
    discord.style.display = 'flex';
    whatsapp.style.display = 'none'
}
function displayWhatsapp() {
    whatsapp.style.display = 'flex';
    discord.style.display = 'none'
}
function removeDiscord() {
    discord.style.display = 'none';
}
function removeWhatsapp() {
    whatsapp.style.display = 'none';
}