import { IoMdAdd } from "react-icons/io";

const iconProps = {
  color: 'red',
  size: 40
}

const Button = () => {
  return (
    <div className="bg-yellow-200 w-[100px] h-[90px] rounded-[100%] sticky bottom-10 flex justify-center items-center">
      <IoMdAdd {...iconProps}/>
    </div>
  )
}

export default Button