import { useDispatch } from 'react-redux'
import { IconButton } from './IconButton'
import { switchMode } from '../Features/settingsSlice'

const Topbar = () => {
  const dispatch = useDispatch()
  const onThemeMode = () => {
    dispatch(switchMode())
  }

  return (
    <div className="bg-blue-600 dark:bg-slate-800 h-16 px-6 flex flex-row items-center justify-between shadow-md">
      <p className="text-slate-200 text-xl">My Application</p>
      <div>
        <IconButton icon={'lightbulb'} onClick={onThemeMode}></IconButton>
      </div>
    </div>
  )
}

export default Topbar
