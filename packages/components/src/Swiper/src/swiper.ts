// 判断是否是移动端
export function useSwiper(
  el: HTMLDivElement,
  options = {
    auto: 1000,
    defaultIndex: 0,
    speed: 3000,
  }
) {
  const items = el.querySelectorAll('.swiper-slider');
  let timer: any;
  let index = options.defaultIndex;
  initTimer();
  // 初始化定时器
  function initTimer() {
    if (options.auto > 0 && !timer) {
      timer = setInterval(() => {
        if (index < items.length) {
          index += 1;
        }
        if (items.length === index) {
          index = 0;
        }
      }, options.auto);
    }
  }

  initPages();
  function initPages() {
    items.forEach((item, itemIndex) => {
      if (itemIndex === index) {
        item.classList.add('act');
      } else {
        item.classList.remove('act');
      }
    });
    return new Error('slider不能少于2');
  }

  // function doAnimate() {
  //   let prevPage, nextPage, currentPage, pageWidth, offsetLeft;
  //   const currentPage = items[index];
  //   pageWidth = currentPage.clientWidth;
  //   prevPage = items[index - 1];
  //   nextPage = items[index + 1];
  //
  //   if (!prevPage) {
  //     prevPage = items[items.length - 1];
  //   }
  //
  //   if (!nextPage) {
  //     nextPage = items[0];
  //   }
  //   items.forEach((item) => ((item as HTMLElement).style.display = 'none'));
  //   if (prevPage) {
  //     (prevPage as HTMLElement).style.display = 'block';
  //   }
  //   if (nextPage) {
  //     (nextPage as HTMLElement).style.display = 'block';
  //   }
  // }
}
