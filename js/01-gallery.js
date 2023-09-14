import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(item => `
    <li data-preview=${item.preview} class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
        </a>
    </li>
`).join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

galleryList.addEventListener('click', e => {
    e.preventDefault();
    const largeImageSrc = e.target.dataset.source;
    const imgAlt = e.target.alt;

    const lightbox = basicLightbox.create(`
        <img src="${largeImageSrc}" alt="${e.target.alt}" />
    `);

    lightbox.show();
});
