if (window.innerWidth > 1024) {
  const section = document.querySelector('.h-scroll');
  const content = document.querySelector('.h-scroll__content');

  if (section && content) {
    let currentX = 0;
    let targetX = 0;

    function lerp(start, end, ease) {
      return start + (end - start) * ease;
    }

    function animate() {
      // всегда анимируем, если есть разница
      if (Math.abs(currentX - targetX) > 0.1) {
        currentX = lerp(currentX, targetX, 0.08);
        content.style.transform = `translateX(${-currentX}px)`;
      } else {
        currentX = targetX;
        content.style.transform = `translateX(${-currentX}px)`;
      }

      requestAnimationFrame(animate);
    }

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const start = section.offsetTop;
      const end = start + section.offsetHeight - window.innerHeight;

      const maxScroll = content.scrollWidth - window.innerWidth;

      if (scrollTop < start) {
        targetX = 0;
      } else if (scrollTop > end) {
        targetX = maxScroll; // гарантированно докручиваем до конца
      } else {
        const progress = (scrollTop - start) / (end - start);
        targetX = progress * maxScroll;
      }
    });

    animate();
  }
}


const videos = document.querySelectorAll('video');

if (window.innerWidth > 1024) {
  videos.forEach((el) => {
    el.addEventListener('mouseover', () => {
      el.play();
    })
    el.addEventListener('mouseleave', () => {
      el.pause();
    })

  })
} else {
  videos.forEach((el) => {

    el.play()
  })
}


const videoBlock = document.querySelectorAll('.video-block');

console.log(videoBlock)

if (videoBlock.length > 0) {
  videoBlock.forEach((el) => {
    el.addEventListener('mouseover', () => {
      el.classList.add('disable');
      el.querySelector('video').play();
    })
    el.addEventListener('mouseout', () => {
      el.classList.remove('disable');
      el.querySelector('video').pause();
    })

  })
}

const menu = document.querySelector('.menu')
const openMenu = document.querySelectorAll('.open-menu')
const closeMenu = document.querySelectorAll('.menu-close')

let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

openMenu.forEach((el) => {
  el.onclick = () => {
    menu.classList.add('active')
    document.querySelector('body, html').classList.add('no-scroll')
  }
})
closeMenu.forEach((el) => {
  el.onclick = () => {
    menu.classList.remove('active')
    document.querySelector('body, html').classList.remove('no-scroll')

  }
})

