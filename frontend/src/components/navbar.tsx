import { FaHome, FaHeart } from "react-icons/fa";
import { BiSolidEditAlt } from "react-icons/bi";

const iconProps = {
  backgroundColor: "transparent",
  size: 30,
  color: "rgb(254 240 138)"
}

const Navbar = () => {
  return (
    <div className="bg-[#171D2F] h-[90vh] p-8 w-10 rounded-lg">
      <div className="flex flex-col gap-10">
        <FaHome {...iconProps}/>
        <BiSolidEditAlt {...iconProps}/>
        <FaHeart {...iconProps}/>
      </div>
    </div>
  )
}

export default Navbar;