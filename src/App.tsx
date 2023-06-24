import Home from './Pages/Home'
import Error from './Pages/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './store'

function App() {
  const lightMode = useSelector((state: RootState) => state.settings.mode)

  return (
    <div className={lightMode}>
      <div className="h-screen bg-white dark:bg-slate-900">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
