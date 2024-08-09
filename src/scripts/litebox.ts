import "photoswipe/style.css";
import pswpModule from "photoswipe";
import PhotoSwipeLightbox from "photoswipe/lightbox";

const lightbox = new PhotoSwipeLightbox({
  pswpModule,
  children: "a",
  gallery: "#gallery",
  showAnimationDuration: 0,
  hideAnimationDuration: 0,
});

document.addEventListener(
  "astro:page-load",
  () => {
    if (lightbox) lightbox.init();
  },
  { once: false }
);