import { NativeModules } from 'react-native';

type PlugpagWrapperType = {
  multiply(a: number, b: number): Promise<number>;
};

const { PlugpagWrapper } = NativeModules;

export default PlugpagWrapper as PlugpagWrapperType;
