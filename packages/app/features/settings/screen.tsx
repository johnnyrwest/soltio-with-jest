import { View, StyleSheet, Text } from 'react-native'
import { useSx } from 'dripsy'
import { TextLink } from 'solito/link'

export function SettingsScreen() {
  const sx = useSx()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
      <TextLink href="/" textProps={{ style: sx(styles.text) }}>
        👈 Go Home
      </TextLink>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
  },
  text: {
    color: '#fff',
  },
})
