import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import '../css/01-gallery.css';
import '../css/common.css';

const container = document.querySelector(".gallery")
const markup = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item" style ='list-style: none'>
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>


`
)
container.insertAdjacentHTML('beforeend', markup.join(""))


 
const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionsDelay: 250,
 });