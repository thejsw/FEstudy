const toggleBtn = document.querySelector(button);
const navContent = document.querySelector('.p-navbar--content-list');

toggleBtn.addEventListener('click', () => {
    navContent.classList.toggle('active');
});