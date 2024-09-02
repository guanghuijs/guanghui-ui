import type { App } from 'vue';

import { Button } from './Button';
import { Calendar } from './Calendar';
import { Card } from './Card';
import { Checkbox } from './Checkbox';
import { CountDown } from './CountDown';
import { Collapse, CollapseItem } from './Collapse';
export { useCountDown } from './CountDown';
import { Divider } from './Divider';
import { Empty } from './Empty';
import { Icon } from './Icon';
import { Loading } from './Loading';
import { NavBar } from './NavBar';
import { Popup } from './Popup';
import { ProgressBar } from './ProgressBar';
import { Space } from './Space';
import { Stepper } from './Stepper';
// import { Swiper } from './Swiper';
import { SwiperCell } from './SwiperCell';
import { Switch } from './Switch';
import { Tree } from './Tree';
export * from './Toast';
export * from './Notify';
import { VerificationCode } from './VerificationCode';
import { Upload } from './Upload';

// 实现组件库全局注册
const HUI = {
  install: (app: App) => {
    [
      Button,
      Calendar,
      Card,
      Checkbox,
      CountDown,
      Collapse,
      CollapseItem,
      Divider,
      Empty,
      Icon,
      Loading,
      NavBar,
      Popup,
      ProgressBar,
      Space,
      Stepper,
      // Swiper,
      SwiperCell,
      Switch,
      Tree,
      VerificationCode,
      Upload,
    ].forEach((item) => {
      app.component(item.name, item);
    });
  },
};

// 使用组件库时可局部导出
export {
  Button,
  Calendar,
  Card,
  Checkbox,
  CountDown,
  Collapse,
  CollapseItem,
  Divider,
  Empty,
  Icon,
  Loading,
  NavBar,
  Popup,
  ProgressBar,
  Space,
  Stepper,
  // Swiper,
  SwiperCell,
  Switch,
  Tree,
  VerificationCode,
  Upload,
};

export default HUI;
