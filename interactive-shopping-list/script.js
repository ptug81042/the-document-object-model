const form = document.getElementById('add-item-form');
const input = document.getElementById('item-input');
const list = document.getElementById('shopping-list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = input.value.trim();
    if (value) {
        addItem(value);
        input.value = '';
        input.focus();
    }
});

function addItem(text) {
    const li = document.createElement('li');
    li.textContent = text;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '✕';
    removeBtn.className = 'remove-btn';
    removeBtn.setAttribute('aria-label', 'Remove item');
    li.appendChild(removeBtn);

    list.appendChild(li);
}

// Event delegation for remove and toggle purchased
list.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-btn')) {
        e.target.parentElement.remove();
    } else if (e.target.tagName === 'LI') {
        e.target.classList.toggle('purchased');
    }
});