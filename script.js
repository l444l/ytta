document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll(".page");

    function changePage(page) {
        // Sembunyikan semua section
        sections.forEach((section) => {
            section.classList.remove("active-section");
        });

        // Tampilkan section yang sesuai
        const activeSection = document.getElementById(page);
        if (activeSection) {
            activeSection.classList.add("active-section");
        }

        // Update navigasi aktif
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("data-page") === page) {
                link.classList.add("active");
            }
        });
    }

    // Tambahkan event listener ke tautan navigasi
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const page = link.getAttribute("data-page");
            changePage(page);
        });
    });

    // Set default halaman aktif
    changePage("home");
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("gallery-modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".modal .close");

    document.querySelectorAll(".gallery-item img").forEach((img) => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.textContent = img.alt;
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");

    function showAnimation() {
        galleryItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("show");
            }, index * 200); // Penundaan per item
        });
    }

    // Tampilkan animasi saat halaman galeri dibuka
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            const page = link.getAttribute("data-page");
            if (page === "galeri") {
                setTimeout(showAnimation, 300); // Mulai animasi saat galeri aktif
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".class-logo img");

    function animateLogo() {
        logo.style.opacity = "0";
        logo.style.transform = "scale(0.8)";
        setTimeout(() => {
            logo.style.transition = "all 0.5s ease";
            logo.style.opacity = "1";
            logo.style.transform = "scale(1)";
        }, 300);
    }

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            const page = link.getAttribute("data-page");
            if (page === "biodata") {
                setTimeout(animateLogo, 300); // Animasi muncul ketika halaman biodata aktif
            }
        });
    });
});