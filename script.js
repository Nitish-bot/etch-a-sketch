document.addEventListener('DOMContentLoaded', () => {
    const sketchArea = document.getElementById('sketchArea');
    const button = document.getElementById('gridSelector');

    function grid(x) {
        for (let i = 0; i < x; i++) {
            const containerRow = document.createElement('div');
            containerRow.setAttribute('style', 'display: flex; flex: auto;');
    
            for (let j = 0; j < x; j++) {
                const div = document.createElement('div');
                div.setAttribute('style','flex: auto;');
                div.classList.add('pixels');
                containerRow.appendChild(div);
            }
            sketchArea.appendChild(containerRow);
        }    
    }

    grid(16);

    button.addEventListener('click', () => {
        const input = prompt('Please enter gride size: ', '16');
        if (+input > 0) grid(+input);
    });

    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    });
});