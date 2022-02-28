const navToggle = document.querySelector('.toggle');
const navLinks = document.querySelector('.links');

const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

navToggle.addEventListener('click', () => {
    // if (navLinks.classList.contains('show-links')) {
    //     navLinks.classList.remove('show-links');
    // } else {
    //     navLinks.classList.add('show-links');
    // }
    // navLinks.classList.toggle('show-links');
    sidebar.classList.toggle('show-sidebar');
    navToggle.classList.toggle('toggle-drop');
})

toggleBtn.addEventListener('click', () => {
    // if (sidebar.classList.contains('show-sidebar')) {
    //     sidebar.classList.remove('show-sidebar');
    // } else {
    //     sidebar.classList.add('show-sidebar');
    // }
    sidebar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
})