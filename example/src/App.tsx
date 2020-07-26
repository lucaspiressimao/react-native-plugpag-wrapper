import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PlugpagWrapper from 'react-native-plugpag-wrapper';

export default function App() {
  const [result, setResult] = React.useState<String | undefined>();

  React.useEffect(() => {
    PlugpagWrapper.getPlugPagVersion().then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
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
