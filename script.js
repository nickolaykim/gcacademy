// Accordion for Example
const examples = document.querySelectorAll('.example');
examples.forEach(example => {
    const content = example.querySelector('.example-content');
    example.addEventListener('click', () => {
        const isActive = content.classList.contains('active');
        if (!isActive) {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.classList.add('active');
        } else {
            content.style.maxHeight = '0';
            content.classList.remove('active');
        }
        example.setAttribute('aria-expanded', !isActive);
    });
    example.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            example.click();
        }
    });
});

// To-Top Button Smooth Scroll
const toTopButton = document.querySelector('.to-top');
toTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Search Functionality
const searchInput = document.getElementById('search');
const terms = document.querySelectorAll('.term');
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    terms.forEach(term => {
        const title = term.querySelector('h2').textContent.toLowerCase();
        const content = term.textContent.toLowerCase();
        term.classList.toggle('hidden', !title.includes(query) && !content.includes(query));
    });
});