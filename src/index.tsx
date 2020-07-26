import { NativeModules } from 'react-native';

type PlugpagWrapperType = {
  getPlugPagVersion(): Promise<String>;
};

const { PlugpagWrapper } = NativeModules;

export default PlugpagWrapper as PlugpagWrapperType;
