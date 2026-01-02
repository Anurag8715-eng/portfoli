// NAVBAR smooth scroll + active link
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        document
            .querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });

        document.querySelectorAll(".nav-link")
            .forEach(l => l.classList.remove("active"));

        link.classList.add("active");
    });
});

// View Projects
document.getElementById("projectBtn").addEventListener("click", () => {
    document.getElementById("projects")
        .scrollIntoView({ behavior: "smooth" });
});

// Resume download
document.getElementById("resumeBtn").addEventListener("click", () => {
    window.location.href = "resume/anurag_resume.pdf";
});

// Hire Me email
document.getElementById("hireBtn").addEventListener("click", () => {
    window.location.href =
        "mailto:anuragshri529@gmail.com?subject=Hiring Opportunity";
});
