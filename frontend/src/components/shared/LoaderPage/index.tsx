import { BsImages } from 'react-icons/bs'

export const LoaderPage = () => {
  return (
    <div
      className={`bg-gradient-to-br from-[#394f68] to-blue absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center z-[100] text-white`}
    >
      <BsImages className="w-24 h-24 animate-bounce text-yellow-400" />
      <h1 className={`text-6xl font-bold text-center mb-10 animate-pulse`}>
        Loading Information
      </h1>
      <h2 className={`text-xl font-bold text-center mb-10 animate-pulse`}>
        Hold on, we are fetching the data!
      </h2>
    </div>
  )
}
