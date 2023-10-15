// Local Component. Can only use in "/" route (excluding sub routes)

import { Button } from '@/components/shared/Buttons/Button'

type Props = {}

const style = {
  row: {
    line: `h-[16px] w-[1px] bg-white`,
    container: `mt-[100px] ml-[50px] h-fit flex items-center gap-x-[3.4rem]`,
  },
}

function PatientSelection({}: Props) {
  return (
    <div className="relative">
      <div className={style.row.container}>
        <div className="">ID</div>
        <div className={style.row.line} />
        <div className="">Last</div>
        <div className={style.row.line} />
        <div className="">First</div>
        <div className={style.row.line} />
        <div>DOB</div>
      </div>

      <Button className="absolute bottom-0 right-0 mb-[60px]">Select</Button>
    </div>
  )
}
export default PatientSelection
