export const Button = ({
  children,
  onClick,
}: {
  children: string
  onClick: Function
}) => {
  const onButtonClick = () => {
    onClick()
  }

  return (
    <button
      className="bg-transparent hover:bg-white hover:bg-opacity-10 text-blue-400 p-2 h-12 rounded-md"
      onClick={onButtonClick}
    >
      {children}
    </button>
  )
}
