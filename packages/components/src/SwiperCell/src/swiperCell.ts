const isTouch = 'ontouchstart' in window;

export function useSwiperCell(el: HTMLElement) {
  const btn = el.querySelector('.swiper-cell-btn') as HTMLElement;
  const content = el.querySelector('.swiper-cell-content') as HTMLElement;

  let starX = 0;
  let currentX = 0;
  let offset = 0;

  if (isTouch) {
    content.addEventListener('touchstart', (event) => {
      const touch = (event as TouchEvent).touches[0];
      starX = touch.pageX;
    });

    content.addEventListener('touchmove', (event) => {
      const touch = (event as TouchEvent).touches[0];
      currentX = touch.pageX;
      offset = currentX - starX;
      if (offset <= -btn!.clientWidth) {
        offset = -btn!.clientWidth;
      }
      if (offset > 0) {
        offset = 0;
      }

      offset = Math.min(Math.max(-btn.clientWidth, offset), 0);

      content.style.transform = `translateX(${offset}px)`;
    });

    content.addEventListener('touchend', () => {
      if (Math.abs(offset) >= btn!.clientWidth / 2) {
        content.style.transform = `translateX(${-btn!.clientWidth}px)`;
      } else {
        content.style.transform = `translateX(${0}px)`;
      }
    });
  } else {
    content.addEventListener('mousedown', (event) => {
      event.stopPropagation();
      starX = event.clientX;
    });
    content.addEventListener('mousemove', (event) => {
      event.stopPropagation();
      offset = event.clientX - starX;
      if (offset <= -btn!.clientWidth) {
        offset = -btn!.clientWidth;
      }
      if (offset >= 0) {
        offset = 0;
      }
      content.style.transform = `translateX(${offset}px)`;
    });
    document.addEventListener('mouseup', () => {
      if (Math.abs(offset) >= btn!.clientWidth / 2) {
        content.style.transform = `translateX(${-btn!.clientWidth}px)`;
      } else {
        content.style.transform = `translateX(${0}px)`;
      }
      document.removeEventListener('mousedown', () => {});
      document.removeEventListener('mousemove', () => {});
    });
  }
}
