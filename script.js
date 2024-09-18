const images = document.querySelectorAll('.image');
let draggedElement = null;

// Add event listeners for each image div
images.forEach(image => {
    image.addEventListener('dragstart', handleDragStart);
    image.addEventListener('dragover', handleDragOver);
    image.addEventListener('drop', handleDrop);
    image.addEventListener('dragend', handleDragEnd);
});

// When dragging starts, store the reference to the dragged element
function handleDragStart(e) {
    draggedElement = e.target;
    setTimeout(() => {
        e.target.classList.add('invisible');
    }, 0);
}

// Prevent the default behavior to allow dropping
function handleDragOver(e) {
    e.preventDefault();
}

// Handle the drop event by swapping the background image of the dragged and dropped elements
function handleDrop(e) {
    e.preventDefault();
    
    if (draggedElement !== e.target) {
        const draggedBackground = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = e.target.style.backgroundImage;
        e.target.style.backgroundImage = draggedBackground;
    }
}

// Remove the invisibility class when the drag ends
function handleDragEnd(e) {
    e.target.classList.remove('invisible');
}