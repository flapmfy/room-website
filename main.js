const siteNav = document.querySelector('#site-nav');
const hamburgerBtn = siteNav.querySelector('.hamburger-btn');
const backdrop = siteNav.querySelector('.backdrop');

const heroImg = document.querySelector('.slide-img');
const heroContent = document.querySelector('.slide-description');
const nextSlide = document.querySelector('#slide-next');
const prevSlide = document.querySelector('#slide-prev');
let slideId = 0;

const slides = [
  {
    slideImg: '/images/desktop-image-hero-1.jpg',
    slideContent:
      '<h1>Discover innovative ways to decorate</h1><p>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your ownstyle with our collection and make your property a reflection of you and what you love.</p><a href="" class="shop-link flex"><span>Shop now</span><svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero" /></svg></a>',
  },
  {
    slideImg: '/images/desktop-image-hero-2.jpg',
    slideContent:
      '<h1>We are available all across the globe</h1><p>With stores all over the world, it is easy to find furniture for your home or place business. Locally, we are in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Do not hesitate to contact us today.</p><a href="" class="shop-link flex"><span>Shop now</span><svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero" /></svg></a>',
  },
  {
    slideImg: '/images/desktop-image-hero-3.jpg',
    slideContent:
      '<h1>Manufactured with the best materials</h1><p>Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.</p><a href="" class="shop-link flex"><span>Shop now</span><svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero" /></svg></a>',
  },
];

function setSlide(id) {
  heroImg.setAttribute('src', slides[id].slideImg);
  heroContent.innerHTML = slides[id].slideContent;
}

window.addEventListener('DOMContentLoaded', () => {
  const navHeight = siteNav.offsetHeight;
  siteNav.style.setProperty('--nav-height', `${navHeight}px`);
});

hamburgerBtn.addEventListener('click', () => {
  siteNav.setAttribute('aria-expanded', siteNav.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
});

backdrop.addEventListener('click', () => {
  siteNav.setAttribute('aria-expanded', 'false');
});

nextSlide.addEventListener('click', () => {
  slideId += 1;
  if (slideId > slides.length - 1) slideId = 0;
  setSlide(slideId);
});

prevSlide.addEventListener('click', () => {
  slideId -= 1;
  if (slideId < 0) slideId = slides.length - 1;
  setSlide(slideId);
});
