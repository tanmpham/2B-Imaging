import Img from '@/components/shared/Img/Img'
import { toasterStyle } from '@/constants/toasterStyle'
import { useGlobalContext } from '@/context/global-context'
import { PatientDto } from '@/interfaces/patient.dto'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Tilt from 'react-parallax-tilt'

interface Props {}

function Initial() {
  return (
    <Tilt
      scale={0.98}
      tiltMaxAngleX={2}
      tiltMaxAngleY={2}
      transitionSpeed={450}
      className="w-fit h-fit"
    >
      <div
        onClick={() =>
          toast('Click an image on the left to preview', toasterStyle)
        }
        className={`w-[600px] h-[400px] mt-[130px] flex items-center justify-center text-grey_2 border-[2px] border-dashed border-grey_2 text-[80px] rounded-[10px] hover:text-green_2 hover:border-green_2 transition-colors ease-linear cursor-pointer`}
      >
        Preview
      </div>
    </Tilt>
  )
}

const style = {
  title: `text-stone-300 font-semibold`,
}

function Preview() {
  const [patient, setPatient] = useState<PatientDto>({
    PatientID: -1,
    LastName: '',
    FirstName: '',
    DateofBirth: '',
  })
  const { previewMedia } = useGlobalContext()
  const { id, src, fileType, IsRightEye } = previewMedia
  useEffect(() => {
    const getPatient = async () => {
      if (id !== 0) {
        try {
          const res = await fetch(`api/patients/${id}`)
          if (!res.ok) {
            toast.error('Failed to fetch data', toasterStyle)
          }
          const patientData = (await res.json()) as PatientDto
          setPatient(patientData)
        } catch (error) {
          console.error('Failed to fetch patient:', error)
          toast.error('Failed to fetch data', toasterStyle)
        }
      }
    }

    getPatient()
  }, [id])

  // console.log(patient)
  return (
    <>
      {!src ? (
        <div
          className={`overflow-hidden mx-auto active:scale-[0.99] transition-transform ease-linear`}
        >
          <Initial />
        </div>
      ) : (
        <div className="mx-auto space-y-[24px]">
          <div
            className={`relative w-[600px] h-[400px] mt-[130px] flex items-center justify-center text-stone-600 text-[80px]`}
          >
            {fileType === 'jpg' && <Img src={src} className="rounded-[10px]" />}
            {fileType === 'mp4' && (
              <video controls>
                <source src={src} />
              </video>
            )}
          </div>

          <div className="space-y-[24px]">
            <div>
              <div>
                <span className={style.title}>Patient ID:</span> {id}
              </div>
              <div>
                <span className={style.title}>Last Name:</span>{' '}
                {patient.LastName}
              </div>
              <div>
                <span className={style.title}>First Name:</span>{' '}
                {patient.FirstName}
              </div>
              <div>
                <span className={style.title}>Date of Birth:</span>{' '}
                {patient.DateofBirth &&
                  format(new Date(patient.DateofBirth), 'MM/dd/yyyy')}
              </div>
            </div>

            <div>
              <div>
                <span className={style.title}>OD/OS (right / left eye):</span>{' '}
                {IsRightEye ? 'Oculus Sinister' : 'Oculus Dextrus'}
              </div>
              <div>
                <span className={style.title}>tags#:</span>
              </div>
            </div>

            <div>
              <span className={style.title}>notes:</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Preview
