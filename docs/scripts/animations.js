const scrollElements = document.querySelectorAll(".js-scroll");

scrollElements.forEach((el) => {
    el.style.opacity = 0
})

// const elementInView = (el, percentageScroll = 100) => {
//     const elementTop = el.getBoundingClientRect().top;
//     return (
//         elementTop <=
//         ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
//     );
// };

const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    if((elementTop <=((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))) && (elementTop+el.offsetHeight)>=0){
        return true
    }
    else if((elementTop+el.offsetHeight)<0){
        return false

    }
};



const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    })
}
window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })  
  
//   window.addEventListener('DOMContentLoaded', () => {
//     handleScrollAnimation();
//   })

  setTimeout(function() {
    handleScrollAnimation();
  }, 6700);