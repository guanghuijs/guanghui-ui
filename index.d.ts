import { CountDownProps, ToastOptions, UseCountDownType } from './type';

declare module 'guanghui-ui' {
  export {
    HButton,
    HCalendar,
    HCard,
    HCheckbox,
    HCountDown,
    HDivider,
    HIcon,
    HLoading,
    HPopup,
    HProgressBar,
    HSpace,
    HStepper,
    HSwitch,
    HTree,
    HVerificationCode,
  } from '#/components';
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
