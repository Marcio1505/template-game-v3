document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.js-link');
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
      const top = window.scrollY;

      sections.forEach(section => {
        const offset = section.offsetTop;
        const heightSection = section.offsetHeight;
        const idSection = section.getAttribute('id');

        if (top >= offset && top < offset + heightSection) {
          links.forEach(link => {
            link.classList.remove('active');
          });

          const activeLink = document.querySelector(`nav ul li a[href*='${idSection}']`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.gamesOptions a');

    links.forEach(link => {
      console.log(link);
      link.addEventListener('click', function (event) {
        console.log(link);

        // Remove a classe 'active' de todos os links
        links.forEach(l => l.classList.remove('active'));
        console.log(links);
        // Adiciona a classe 'active' ao link clicado
        link.classList.add('active');
      });
    });
  });
