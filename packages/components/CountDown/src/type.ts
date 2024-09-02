export type RegisterFn = (compInstance: CountDownType) => void;

export type CountDownType = {
  // 继续
  resume: () => Promise<void>;
  // 暂停
  pause: () => Promise<void>;
  setProps: (props: CountDownProps) => Promise<void>;
};

export type UseCountDownType = [RegisterFn, CountDownType];

export type CountDownProps = {
  time: number | string;
  format?: string;
};
