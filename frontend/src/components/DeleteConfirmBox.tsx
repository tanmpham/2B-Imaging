interface Props {}
function DeleteConfirmBox({}: Props) {
  return (
    <div className="px-[1.6rem] py-[.4rem] bg-red_1 border-t-[2px] border-b-[2px] border-dashed border-red-900">
      <div className="text-[20px]">Drag here to delete</div>
      <div className="text-end mt-[.2rem]">Confirm</div>
    </div>
  )
}
export default DeleteConfirmBox
