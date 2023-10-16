import { toasterStyle } from '@/constants/toasterStyle'
import toast from 'react-hot-toast'

type Props = {
  src?: string
}

function Initial() {
  return (
    <div className="mx-auto">
      <div
        onClick={() =>
          toast('Click an image on the left to preview', toasterStyle)
        }
        className={`w-[600px] h-[400px] mt-[130px] flex items-center justify-center text-grey border-[2px] border-dashed border-grey text-[80px] rounded-[10px] hover:text-green hover:border-green transition-colors ease-linear cursor-pointer`}
      >
        Preview
      </div>
    </div>
  )
}

function Preview({ src }: Props) {
  return (
    <>
      {!src ? (
        <Initial />
      ) : (
        <div className="mx-auto space-y-[24px]">
          <div
            className={`w-[600px] h-[400px] mt-[130px] ${
              src && 'bg-grey'
            } flex items-center justify-center text-stone-600 text-[80px]`}
          >
            img
          </div>

          <div className="space-y-[24px]">
            <div>
              <div>Patient ID:</div>
              <div>Last Name:</div>
              <div>First Name:</div>
              <div>DOB:</div>
            </div>

            <div>
              <div>OD/OS (right / left eye):</div>
              <div>tags#:</div>
            </div>

            <div>notes:</div>
          </div>
        </div>
      )}
    </>
  )
}
export default Preview
