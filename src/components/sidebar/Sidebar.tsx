import style from './Sidebar.module.css';

import { AiOutlineBug, AiOutlineTeam } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
 
const Sidebar = () => {
  return (
    <div className={style.containerSidebar}>
        <div className={style.logoSidebar}>
            <h1>JB</h1>
        </div>
        <div className={style.links}>
            <AiOutlineBug size={40} className={style.icon}/>
            <AiOutlineTeam size={40} className={style.icon}/>
        </div>
        <div className={style.logout}>
            <BiLogOutCircle size={40} className={style.icon} />
        </div>
    </div>
  )
}

export default Sidebar