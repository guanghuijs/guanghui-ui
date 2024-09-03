import type { App } from 'vue';

import { Button } from './src/Button';
import { Calendar } from './src/Calendar';
import { Card } from './src/Card';
import { Checkbox } from './src/Checkbox';
import { CountDown } from './src/CountDown';
import { Collapse, CollapseItem } from './src/Collapse';
export { useCountDown } from './src/CountDown';
import { Divider } from './src/Divider';
import { Empty } from './src/Empty';
import { Icon } from './src/Icon';
import { Loading } from './src/Loading';
import { NavBar } from './src/NavBar';
import { Popup } from './src/Popup';
import { ProgressBar } from './src/ProgressBar';
import { Rate } from './src/Rate';
import { Space } from './src/Space';
import { Stepper } from './src/Stepper';
// import { Swiper } from './src/Swiper';
import { SwiperCell } from './src/SwiperCell';
import { Switch } from './src/Switch';
import { Tree } from './src/Tree';
export * from './src/Toast';
export * from './src/Notify';
import {
  VerificationCode,
  type TVerificationCode,
} from './src/VerificationCode';
import { Upload } from './src/Upload';

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
      Rate,
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
  Rate,
  Space,
  Stepper,
  // Swiper,
  SwiperCell,
  Switch,
  Tree,
  VerificationCode,
  Upload,
  type TVerificationCode,
};

export default HUI;
