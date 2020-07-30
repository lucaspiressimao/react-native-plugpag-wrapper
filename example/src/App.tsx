import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PlugpagWrapper from 'react-native-plugpag-wrapper';

export default function App() {
  const [applicationCode, setapplicationCode] = React.useState<String | undefined>();
  const [libversion, setlibversion] = React.useState<String | undefined>();
  const [absolutePath, setabsolutePath] = React.useState<String | undefined>();

  React.useEffect(() => {
    PlugpagWrapper.getApplicationCode().then(setapplicationCode);
    PlugpagWrapper.getLibVersion().then(setlibversion);
    PlugpagWrapper.getAbsolutePath().then(setabsolutePath);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Application Code: {applicationCode}</Text>
      <Text>Lib Version: {libversion}</Text>
      <Text>Absolute Path: {absolutePath}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
