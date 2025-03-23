function addingEventListener() {
    const button = document.getElementById('button');
    if (button) {
        button.addEventListener('click', () => {
            console.log('Button clicked');
        });
    } else {
        console.error('Button element not found');
    }
}

module.exports = { addingEventListener };
