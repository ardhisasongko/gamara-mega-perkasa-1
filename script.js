const header = document.getElementById("header");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

function onScroll() {
  header.classList.toggle("scrolled", window.scrollY > 40);
}

function toggleMenu(open) {
  navLinks.classList.toggle("open", open);
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
}

navToggle.addEventListener("click", () => {
  toggleMenu(!navLinks.classList.contains("open"));
});

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") toggleMenu(false);
});

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  status.textContent = "";
  status.className = "form-status";

  let valid = true;
  const nama = form.nama.value.trim();
  const email = form.email.value.trim();
  const pesan = form.pesan.value.trim();

  form.nama.classList.toggle("error", !nama);
  form.email.classList.toggle("error", !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  form.pesan.classList.toggle("error", !pesan);

  if (!nama || !email || !pesan) {
    valid = false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    valid = false;
  }

  if (!valid) {
    status.textContent = "Mohon lengkapi nama, email valid, dan pesan.";
    status.classList.add("error");
    return;
  }

  status.textContent = "Pesan terkirim, terima kasih. Kami balas di jam kerja.";
  status.classList.add("success");
  form.reset();
});
