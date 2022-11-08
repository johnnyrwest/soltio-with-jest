import { View, Text } from 'dripsy'
import { TextLink } from 'solito/link'
import { useFormattedDate } from 'app/hooks/useFormattedDate'

export function TestScreen() {
  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}>
        Just testing out adding a new screen! Neat!
      </Text>
      <Text sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}>
        Today's date is {useFormattedDate(new Date())}.
      </Text>

      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
