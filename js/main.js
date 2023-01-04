const header = document.querySelector('header');
const footer = document.querySelector('footer');

fetch('../include/header.html')
    .then(res => res.text())
    .then(headerHtml => header.innerHTML = headerHtml );

fetch('../include/footer.html')
    .then(res=>res.text())
    .then(footeHtml=> footer.innerHTML = footeHtml);