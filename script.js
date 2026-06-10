// ================================
// EFEITO DE ESCRITA NO TERMINAL
// ================================

const typingElement = document.querySelector(".shell-command");

const commands = [
    'echo "Portfolio do Jonas"',
    'whoami',
    'ls projects/',
    'cat certifications.log',
    'nano skills.txt'
];

let commandIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentCommand = commands[commandIndex];

    if (!deleting) {
        typingElement.textContent = currentCommand.substring(0, charIndex++);
    } else {
        typingElement.textContent = currentCommand.substring(0, charIndex--);
    }

    let speed = deleting ? 40 : 90;

    if (!deleting && charIndex === currentCommand.length + 1) {
        speed = 1800;
        deleting = true;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        commandIndex = (commandIndex + 1) % commands.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// ================================
// EFEITO DE ESCRITA NO TERMINAL
// ================================

const terminalLines = [
    {
        color: "green",
        text: "Offensive Security"
    },
    {
        color: "blue",
        text: "Blue Team"
    },
    {
        color: "orange",
        text: "Threat Intelligence"
    },
    {
        color: "yellow",
        text: "Vulnerability Management"
    },
    {
        color: "cyan",
        text: "Patch Management"
    },
    {
        color: "green",
        text: "Identity and Access Management"
    },
    {
        color: "red",
        text: "Cybersecurity Awareness"
    }
];

const terminalBody = document.querySelector(".terminal-body");

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeTerminalLines() {

    while (true) {

        terminalBody.innerHTML = "";

        // =========================
        // EFEITO DIGITAR SKILLS
        // =========================

        for (const line of terminalLines) {

            const p = document.createElement("p");

            p.innerHTML = `<span class="${line.color}">[+]</span> `;

            terminalBody.appendChild(p);

            for (let i = 0; i < line.text.length; i++) {

                p.innerHTML =
                    `<span class="${line.color}">[+]</span> ` +
                    line.text.substring(0, i + 1);

                await sleep(45);
            }

            await sleep(300);
        }

        // =========================
        // ESPERAR PARA LIMPAR
        // =========================

        await sleep(3000);

        // =========================
        // EFEITO DIGITANDO COMANDO CLEAR
        // =========================

        const clearLine = document.createElement("p");

        clearLine.classList.add("clear-command");

        terminalBody.appendChild(clearLine);

        const clearText =
            'root@pwkgod:~/portfolio$ clear';

        for (let i = 0; i < clearText.length; i++) {

            clearLine.innerHTML =
                clearText.substring(0, i + 1);

            await sleep(35);
        }

        // =========================
        // ESPERAR PARA LIMPAR
        // =========================

        await sleep(800);

        // =========================
        // EFEITO LIMPAR TERMINAL
        // =========================

        terminalBody.style.opacity = "0";

        await sleep(300);

        terminalBody.innerHTML = "";

        terminalBody.style.opacity = "1";

        // =========================
        // TEMPO PARA REINICIAR
        // =========================

        await sleep(1000);
    }
}

typeTerminalLines();

// ================================
// FADE-IN AO DAR SCROLL
// ================================

const hiddenElements = document.querySelectorAll(
    ".content-card, .project-card, .terminal-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

hiddenElements.forEach((el) => {

    el.classList.add("hidden");
    observer.observe(el);

});

// ================================
// EFEITO GLITCH
// ================================

const heroTitle = document.querySelector(".hero h2");

setInterval(() => {

    heroTitle.classList.add("glitch");

    setTimeout(() => {
        heroTitle.classList.remove("glitch");
    }, 180);

}, 5000);

// ================================
// NAV LINK
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }

    });

});

// ================================
// EFEITO DE LINHA DE SCAN
// ================================

const scanline = document.createElement("div");

scanline.classList.add("scanline");

document.body.appendChild(scanline);

// ================================
// MUDAR ANO DO RODAPÉ
// ================================

document.getElementById("year").textContent =
    new Date().getFullYear();
