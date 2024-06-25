document.addEventListener('DOMContentLoaded', () => {
    const sketchArea = document.getElementById('sketchArea');

    for (let i = 0; i < 16; i++) {
        const containerRow = document.createElement('div');
        containerRow.setAttribute('style', 'display: flex; flex: auto;');

        for (let j = 0; j < 16; j++) {
            const div = document.createElement('div');
            div.setAttribute('style','flex: auto;');
            div.classList.add('pixels');
            containerRow.appendChild(div);

            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'black';
            });
        }
        sketchArea.appendChild(containerRow);
    }
});