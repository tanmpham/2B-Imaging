interface Props {
  className?: string
}

const Logo = ({ className }: Props) => {
  return (
    <>
      <div
        onClick={() => {
          window.location.href = '/'
        }}
        className={`flex lg:hidden active:scale-95 transition-transform ease-in ${className}`}
      >
        <div className={`w-[117px] h-[58px] bg-green_2`}></div>
      </div>

      <div
        onClick={() => {
          window.location.href = '/'
        }}
        className={`hidden lg:flex active:scale-95 transition-transform ease-in ${className}`}
      >
        <div
          className={`w-full h-[60px] bg-green_2 rounded-[var(--rounded-default)]`}
        ></div>
      </div>
    </>
  )
}

export default Logo
