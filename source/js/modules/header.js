const breakpointLg = window.matchMedia('(min-width: 1024px)');
const breakpointSm = window.matchMedia('(max-width: 767px)');

const header = document.querySelector('.header');
const isHeaderOpened = () => {
  return header.classList.contains('header--opened');
};

const closeMenu = () => {
  header.classList.remove('header--opened');
  window.enableBodyScroll(menu);
  setTimeout(() => {
    document.activeElement.blur();
  }, 300);

  if (breakpointLg.matches) {
    toggle.style.marginRight = null;
  }
};

const initHeader = () => {
  if (!header) {
    return;
  }

  const toggle = header ? header.querySelector('.header__toggle') : null;
  const menu = header ? header.querySelector('.main-navigation') : null;
  // const mainNavWrapper = header ? header.querySelector('.header__wrapper') : null; 

  
  toggle.addEventListener('click', () => {
    if (isHeaderOpened()) {
      closeMenu();
    } else {
      header.classList.add('header--opened');
      window.disableBodyScroll(menu);

      setTimeout(() => {
        document.activeElement.blur();
      }, 300);
    }
  });
  
//   const setHeader = () => {
//     if (breakpointLg.matches) {
//       if (isHeaderOpened()) {
//         closeMenu();
//       }
//     } else {
//       mainNavWrapper.style.display = 'none';
//       setTimeout(() => {
//         mainNavWrapper.removeAttribute('style');
//       }, 100);
//     }
//   };

//   setHeader();
//   breakpointLg.addListener(setHeader);
  
};

export {initHeader};

