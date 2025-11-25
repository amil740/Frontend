
const submitBtn = document.querySelector('#submitBtn');
const usernameInput = document.querySelector('#usernameInput');
const output = document.querySelector('#output');
const openSidebar = document.querySelector('#openSidebar');
const closeSidebar = document.querySelector('#closeSidebar');
const sidebar = document.querySelector('#sidebar');

const sidebarItems = document.querySelectorAll('.sidebar-item');

submitBtn.addEventListener('click', function() {
    const number = parseInt(usernameInput.value);
    
    let result = '';
    for (let i = 1; i <= number; i++) {
        result += i + '<br>';
    }
    
    output.innerHTML = result;
    usernameInput.value = '';
});

openSidebar.addEventListener('click', function() {
    sidebar.classList.add('show');
});

closeSidebar.addEventListener('click', function() {
    sidebar.classList.remove('show');
});

sidebarItems.forEach(function(item, index) {
    item.addEventListener('click', function() {
        alert('You clicked item ' + (index + 1) + ': ' + item.textContent);
    });
});

sidebarItems.forEach(function(item) {
    item.style.cursor = 'pointer';
    item.addEventListener('mouseover', function() {
        this.style.color = 'white';
        this.style.fontWeight = 'bold';
    });
    
    item.addEventListener('mouseout', function() {
        this.style.color = 'lightblue';
        this.style.fontWeight = 'normal';
    });
});
console.log('Button text: ', submitBtn.textContent);
console.log('Input placeholder: ', usernameInput.getAttribute('placeholder'));

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        sidebar.classList.remove('show');
    }
});
