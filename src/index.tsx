import { NativeModules } from 'react-native';

type PlugpagWrapperType = {
  getApplicationCode(): Promise<String>;
  getLibVersion(): Promise<String>;
  getAbsolutePath(): Promise<String>;
};

const { PlugpagWrapper } = NativeModules;

export default PlugpagWrapper as PlugpagWrapperType;
