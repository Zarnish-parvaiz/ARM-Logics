 function toggleMobileNav() {
      const nav = document.getElementById('mobileNav');
      const overlay = document.getElementById('navOverlay');
      const isOpen = nav.classList.contains('show');
      nav.classList.toggle('show');
      overlay.style.display = isOpen ? 'none' : 'block';
    }

    document.getElementById('navOverlay').addEventListener('click', toggleMobileNav);

    document.getElementById("currentYear").textContent = new Date().getFullYear();

