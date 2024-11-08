 function createShape() {
            const width = document.getElementById('width').value;
            const height = document.getElementById('height').value;
            const color = document.getElementById('color').value;
            const radius = document.getElementById('radius').value;

            const shape = document.getElementById('shape');
            shape.style.width = width + 'px';
            shape.style.height = height + 'px';
            shape.style.backgroundColor = color;

            if (radius) {
                shape.style.borderRadius = radius + 'px';
            } else {
                shape.style.borderRadius = '0';
            }

            shape.style.display = 'block';
        }


document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const Number = document.getElementById('name').value;
    document.getElementById('output').innerText = `NAME: ${Number}`; 

    document.getElementById('dataForm').reset();
});
