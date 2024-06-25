document.addEventListener('DOMContentLoaded', () => {
    const sketchArea = document.getElementById('sketchArea');

    for (let i = 0; i < 16; i++) {
        const containerRow = document.createElement('div');
        containerRow.setAttribute('style',
            'display: flex;'
        );
        for (let j = 0; j < 16; j++) {
            const div = document.createElement('div');
        }
        sketchArea.appendChild(containerRow);
    }
});