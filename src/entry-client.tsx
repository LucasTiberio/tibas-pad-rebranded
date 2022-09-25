import ReactDOM from 'react-dom/client'
import App from './App'
import StateProviders from './state'

const rootComponent = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootComponent).render(
  <StateProviders>
    <App />
  </StateProviders>
)
