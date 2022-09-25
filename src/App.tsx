import { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import BulletPointCursor from './components/BulletPointCursor'
import WelcomeTransitionComponent from './components/WelcomeTransitionComponent'
import Router from './router'
import { useAppContext } from './state/app/app'
import GlobalStyle from './styles/GlobalStyle'
import DSTheme from './styles/theme'

function App() {
  const { isTouchableDevice } = useAppContext();

  return (
    <ThemeProvider theme={DSTheme}>
      <GlobalStyle hideCursor />
      {!isTouchableDevice && <BulletPointCursor />}
      <Suspense fallback={<WelcomeTransitionComponent loading={true} />}>
        <Router />
      </Suspense>
    </ThemeProvider>
  )
}

export default App
