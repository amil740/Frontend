const boxes = document.querySelectorAll('.box');
const dropZones = document.querySelectorAll('[data-zone]');
let draggedBox = null;

boxes.forEach(box => {
    box.draggable = true;

    box.addEventListener('dragstart', (e) => {
        draggedBox = box;
        box.style.opacity = '0.5';
    });

    box.addEventListener('dragend', (e) => {
        box.style.opacity = '1';
    });
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        zone.style.backgroundColor = 'rgba(255,255,255,0.3)';
    });

    zone.addEventListener('dragleave', (e) => {
        zone.style.backgroundColor = '';
    });

    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.style.backgroundColor = '';

        if (draggedBox) {
            const boxNum = parseInt(draggedBox.textContent);
            const zoneNum = parseInt(zone.getAttribute('data-zone'));

            const minBox = (zoneNum - 1) * 4 + 1;
            const maxBox = zoneNum * 4;

            if (boxNum >= minBox && boxNum <= maxBox) {
                zone.appendChild(draggedBox);
                draggedBox.style.position = 'static';
                draggedBox.style.margin = '10px';
            } else {
                Swal.fire({
                    title: "Error!",
                    text: `Box ${boxNum} can only be placed in BigBox${Math.ceil(boxNum / 4)}`,
                    icon: "error"
                });
            }
            draggedBox = null;
        }
    });
});

