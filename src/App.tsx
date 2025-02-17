import './App.css'
import Header from './components/common/header'
import TableTasks from './components/modules/TableTasks';
import { useTheme } from './context/ThemeContext'

function App() {
  const { theme } = useTheme();

  return (
    <div className={`w-full h-full ${theme === 'light' ? 'white-theme' : 'dark-theme'}`}>
      <Header />
      <TableTasks />
    </div >
  )
}

export default App
