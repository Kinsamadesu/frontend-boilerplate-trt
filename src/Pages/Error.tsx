import { useNavigate } from 'react-router-dom'
import { Button } from '../Components/Button'

const Error = () => {
  const navigate = useNavigate()

  const onGotoHome = () => {
    navigate('/')
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <p className="text-slate-900 dark:text-slate-200 font-thin">
        Nothing to see here!
      </p>
      <Button onClick={onGotoHome}>Go to Homepage</Button>
    </div>
  )
}

export default Error
