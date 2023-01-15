import { ChildrenProps } from "../auth/Auth"
import HeaderDashboard from "../headerDashboard/HeaderDashboard";
import Sidebar from "../sidebar/Sidebar";

const Dashboard: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
        <Sidebar/>
        <HeaderDashboard/>
        <div className='containerContentDashboard'>
            {children}
        </div>
    </>
  )
}

export default Dashboard