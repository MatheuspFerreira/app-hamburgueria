import { SafeAreaView } from '../styles/_layout'
import { ThemeProvider } from 'styled-components/native'
import { Theme } from '../theme/default'
import { Slot } from 'expo-router'
import { StatusBar } from 'react-native'

export default function Layout() {
  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaView>
        <StatusBar translucent={true} barStyle={'light-content'} />
        <Slot />
      </SafeAreaView>
    </ThemeProvider>
  )
}
