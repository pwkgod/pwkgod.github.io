// ================================
// TERMINAL TYPING EFFECT
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
// TERMINAL BODY WRITING EFFECT
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
        // TYPE SKILLS
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
        // WAIT BEFORE CLEAR
        // =========================

        await sleep(3000);

        // =========================
        // TYPE CLEAR COMMAND
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
        // WAIT AFTER CLEAR COMMAND
        // =========================

        await sleep(800);

        // =========================
        // CLEAR TERMINAL
        // =========================

        terminalBody.style.opacity = "0";

        await sleep(300);

        terminalBody.innerHTML = "";

        terminalBody.style.opacity = "1";

        // =========================
        // WAIT BEFORE RESTART
        // =========================

        await sleep(1000);
    }
}

typeTerminalLines();

// ================================
// FADE-IN ON SCROLL
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
// GLITCH EFFECT
// ================================

const heroTitle = document.querySelector(".hero h2");

setInterval(() => {

    heroTitle.classList.add("glitch");

    setTimeout(() => {
        heroTitle.classList.remove("glitch");
    }, 180);

}, 5000);

// ================================
// PARALLAX GRID
// ================================

window.addEventListener("scroll", () => {

    const grid = document.querySelector(".background-grid");

    let offset = window.scrollY * 0.15;

    grid.style.transform = `translateY(${offset}px)`;

});

// ================================
// ACTIVE NAV LINK
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
// SCANLINE EFFECT
// ================================

const scanline = document.createElement("div");

scanline.classList.add("scanline");

document.body.appendChild(scanline);