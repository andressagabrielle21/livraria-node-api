import { IoMdAdd } from "react-icons/io";

const iconProps = {
  color: 'red',
  size: 60
}

const Button = () => {
  return (
    <div className="bg-yellow-200 w-[90px] h-[90px] rounded-[100%] flex justify-center items-center transition ease-in-out delay-150 hover:scale-105 hover:-translate-y-1 duration-300">
      <IoMdAdd {...iconProps}/>
    </div>
  )
}

export default Button