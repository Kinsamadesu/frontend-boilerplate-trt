import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const IconButton = ({
  icon,
  onClick,
}: {
  icon: IconProp
  onClick: Function
}) => {
  const onButtonClick = () => {
    onClick()
  }

  return (
    <button
      className="bg-transparent hover:bg-white hover:bg-opacity-10 w-12 h-12 rounded-full"
      onClick={onButtonClick}
    >
      <FontAwesomeIcon icon={icon} className="text-slate-200 text-2xl" />
    </button>
  )
}
