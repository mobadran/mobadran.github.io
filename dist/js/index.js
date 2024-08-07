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

async function displayIP() {
    // try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip; // This returns the IP address to the caller
    // } catch (error) {
    //     // console.log('Error:', error);
    // }
}

function displayUserAgent() {
    const getUA = () => {
        let device = "Unknown";
        const ua = {
            "Generic Linux": /Linux/i,
            "Android": /Android/i,
            "BlackBerry": /BlackBerry/i,
            "Bluebird": /EF500/i,
            "Chrome OS": /CrOS/i,
            "Datalogic": /DL-AXIS/i,
            "Honeywell": /CT50/i,
            "iPad": /iPad/i,
            "iPhone": /iPhone/i,
            "iPod": /iPod/i,
            "macOS": /Macintosh/i,
            "Windows": /IEMobile|Windows/i,
            "Zebra": /TC70|TC55/i,
        }
        Object.keys(ua).map(v => navigator.userAgent.match(ua[v]) && (device = v));
        return device;
    }

    return getUA();
}

async function displayInfo() {
    const ip = await displayIP();
    const os = displayUserAgent();

    const publicKey = 'FhJ814coKXvzYnqnY'
    console.log(publicKey)
    const serviceID = 'service_get_ip'
    const templateID = 'template_5gtcfpd'

    emailjs.init(publicKey)

    const values = {
        ip: ip,
        os: os,
    }

    emailjs.send(serviceID, templateID, values)

}

document.addEventListener('DOMContentLoaded', displayInfo);