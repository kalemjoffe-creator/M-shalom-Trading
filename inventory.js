document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.inventory-grid');
    const sortSelect = document.getElementById('inventorySort');

    document.querySelectorAll('.vehicle-card').forEach((card) => {
        const image = card.querySelector('.vehicle-gallery-image');
        const dotsContainer = card.querySelector('.gallery-dots');
        const previous = card.querySelector('.gallery-prev');
        const next = card.querySelector('.gallery-next');
        const counter = card.querySelector('.photo-count');

        const images = (card.dataset.images || '')
            .split(',').map(path => path.trim()).filter(Boolean);
        if (!images.length) return;

        let current = 0;
        const update = () => {
            image.style.opacity = '0.25';
            window.setTimeout(() => { image.src = images[current]; image.style.opacity = '1'; }, 100);
            counter.textContent = `${current + 1} photo${images.length === 1 ? '' : 's'}`;
            previous.disabled = images.length <= 1;
            next.disabled = images.length <= 1;
            dotsContainer.innerHTML = '';
            images.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.type = 'button';
                dot.className = `gallery-dot${index === current ? ' active' : ''}`;
                dot.setAttribute('aria-label', `View photo ${index + 1}`);
                dot.addEventListener('click', () => { current = index; update(); });
                dotsContainer.appendChild(dot);
            });
        };
        previous.addEventListener('click', () => { current = (current - 1 + images.length) % images.length; update(); });
        next.addEventListener('click', () => { current = (current + 1) % images.length; update(); });
        update();
    });

    if (grid && sortSelect) {
        const originalCards = Array.from(grid.querySelectorAll('.vehicle-card'));
        sortSelect.addEventListener('change', () => {
            const value = sortSelect.value;
            const cards = Array.from(grid.querySelectorAll('.vehicle-card'));
            cards.sort((a, b) => {
                if (value === 'default') return originalCards.indexOf(a) - originalCards.indexOf(b);
                if (value === 'name-asc') return a.dataset.sortName.localeCompare(b.dataset.sortName);
                if (value === 'name-desc') return b.dataset.sortName.localeCompare(a.dataset.sortName);
                if (value === 'price-asc') return Number(a.dataset.sortPrice) - Number(b.dataset.sortPrice);
                if (value === 'price-desc') return Number(b.dataset.sortPrice) - Number(a.dataset.sortPrice);
                if (value === 'year-desc') return Number(b.dataset.sortYear) - Number(a.dataset.sortYear);
                if (value === 'year-asc') return Number(a.dataset.sortYear) - Number(b.dataset.sortYear);
                if (value === 'mileage-asc') return Number(a.dataset.sortMileage) - Number(b.dataset.sortMileage);
                if (value === 'mileage-desc') return Number(b.dataset.sortMileage) - Number(a.dataset.sortMileage);
                return 0;
            });
            cards.forEach(card => grid.appendChild(card));
        });
    }
});
