// Local Component. Can only use in "/" route (excluding sub routes)

type Props = {}

const style = {
  line: `h-[16px] w-[1px] bg-white`,
}

function PatientSelection({}: Props) {
  return (
    <div className="relative">
      <div className="mt-[100px] ml-[50px] text-[20px] h-fit flex items-center gap-x-[3rem]">
        <div className="">ID</div>
        <div className={style.line} />
        <div className="">Last</div>
        <div className={style.line} />
        <div className="">First</div>
        <div className={style.line} />
        <div>DOB</div>
      </div>
    </div>
  )
}
export default PatientSelection
