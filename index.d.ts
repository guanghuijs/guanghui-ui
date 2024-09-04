import { CountDownProps, ToastOptions, UseCountDownType } from './type';

declare module 'guanghui-ui' {
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
    SwiperCell,
    Switch,
    Tree,
    VerificationCode,
    Upload,
  };
  export function toast(options: ToastOptions): void;
  export function hiddenToast(): void;
  export function useCountDown(props?: CountDownProps): UseCountDownType;

  export function install(app: any): void;
  export const version: '0.0.1';
  declare namespace _default {
    export { install };
    export { version };
  }
  export default _default;
}
