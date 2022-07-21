const textSlides = (direction) => {
    let currentSlide = document.querySelector('.slides__container-slide--active');
    let nextSlide;
    direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling;
  
    if (nextSlide && !nextSlide.classList.contains('main__section-explore')) {
  
  
      const tl = gsap.timeline({
        defaults: { ease: easing },
      });
  
      tl.to(currentSlide.querySelector('.slides__container-title'), 0.6, {
        opacity: 0,
        y: 100
      })
      .to(currentSlide.querySelector('.designers__info'), 0.6, {
        opacity: 0,
        y: 100
      }, '-=0.6')
      .to(nextSlide.querySelector('.slides__container-title'), 0.6, {
        opacity: 1,
        y: 0
      }, '-=0.1')
      .to(nextSlide.querySelector('.designers__info'), 0.6, {
        opacity: 1,
        y: 0
      }, '-=0.5');
  
      currentSlide.classList.remove('slides__container-slide--active');
      nextSlide.classList.add('slides__container-slide--active');
    }
  };