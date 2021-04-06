const bookmarks = () => {
    const bookmarks = document.querySelectorAll('.content__bookmark');
  
    
    if (!bookmarks) {
        return;
      }

      bookmarks.forEach((element) => {     
        element.addEventListener('click', () => {
          console.log( element.closest('.content__reviews-item'));
          element.closest('.content__reviews-item').classList.toggle('content__reviews-item--active');
        });
      })
}

export {bookmarks};
