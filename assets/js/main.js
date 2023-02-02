/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
     const header = document.getElementById('header');
     /* 
      *when the scroll is greater than 50 viewport height,
      *add the scroll-header class to the header tag
    */
   if(this.scrollY >= 50){
     header.classList.add('scroll-header');
   }
}

window.addEventListener('scroll', scrollHeader);

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item')

accordionItems.forEach(item => {
    const accordionHeader = item.querySelector('.value__accordion-header')
    accordionHeader.addEventListener('click', () => {
      const openAccordionItem = document.querySelector('.accordion-open')
      toggleAccordion(item)

      if(openAccordionItem && openAccordionItem !== item){
         toggleAccordion(openAccordionItem)
      }
    })
})

const toggleAccordion = (item) => {
   const accordionContent = item.querySelector('.value__accordion-content');
   
   if(item.classList.contains('accordion-open')){
      accordionContent.removeAttribute('style')
      item.classList.remove('accordion-open')
   } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
   }
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
