import { FaHome, FaHeart } from "react-icons/fa";
import { BiSolidEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const iconProps = {
  size: 32,
  color: "rgb(254 240 138)"
}

const Navbar = () => {
  return (
    <div className="bg-[#171D2F] h-[90vh] p-8 w-10 rounded-lg flex flex-col justify-start items-center">
      <div className="flex flex-col gap-14">
        <Link to='/'> <FaHome {...iconProps} className="hover:scale-90 transition ease-in-out delay-150"/> </Link>

        <Link to="/authors" className="hover:scale-90 transition ease-in-out delay-150"> <BiSolidEditAlt {...iconProps}/> </Link>
        
        <FaHeart {...iconProps} className="hover:scale-90 transition ease-in-out delay-150"/>
      </div>
    </div>
  )
}

export default Navbar;