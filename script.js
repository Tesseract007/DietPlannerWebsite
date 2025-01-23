<script>
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 50) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
</script>
