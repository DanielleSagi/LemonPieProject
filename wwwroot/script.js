document.addEventListener('DOMContentLoaded', () => {
    loadSharedHeaderAndFooter();    
});

function loadSharedHeaderAndFooter() {
    var placeForHeader = document.getElementById('shared-header');
    var placeForFooter = document.getElementById('shared-footer');

    fetch('/header.html')
        .then((response) => {
            return response.text();
        })
        .then((textFromServer) => {
            placeForHeader.innerHTML = textFromServer;
            setActiveNavLink();
        });

    fetch('/footer.html')
        .then((response) => {
            return response.text();
        })
        .then((textFromServer) => {
            placeForFooter.innerHTML = textFromServer;
        });
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('nav a');

    links.forEach( (link) => {
        const linkPage = link.getAttribute('href');

        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}