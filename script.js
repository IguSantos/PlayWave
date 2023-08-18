window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      header.style.backgroundColor = '#a3000090';
   
    } else {
      header.style.backgroundColor = '#A30000';
      header.style.opacity = '1';
    }
  });
