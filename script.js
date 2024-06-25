document.addEventListener('DOMContentLoaded', () => {
    const sketchArea = document.getElementById('sketchArea');
    const button = document.getElementById('gridSelector');

    function mouseOver(x) {
        x.target.style.backgroundColor = 'black';
    }

    function grid(x) {
        for (let i = 0; i < x; i++) {
            const containerRow = document.createElement('div');
            containerRow.classList.add('rows');
            containerRow.setAttribute('style', 'display: flex; flex: auto;');
    
            for (let j = 0; j < x; j++) {
                const div = document.createElement('div');
                div.setAttribute('style','flex: auto;');
                div.classList.add('pixels');
                containerRow.appendChild(div);
                div.addEventListener('mouseover', mouseOver);
            }
            sketchArea.appendChild(containerRow);
        }    
    }


    grid(16);

    button.addEventListener('click', () => {
        const input = prompt('Please enter gride size: ', '16');
        if (+input > 0) {
            const rows = document.querySelectorAll('.rows');
            const pixels = document.querySelectorAll('.pixels');
            pixels.forEach((pixel) => {
                pixel.removeEventListener('mouseover', mouseOver);
            });
            rows.forEach((row) => {
                row.remove();
            });
            grid(+input);
        }
    });
});