import { Outlet } from "react-router";
import {SidebarComponent} from "@syncfusion/ej2-react-navigations" 
import { MobileSidebar, NavItems } from "../../../components";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <MobileSidebar/>

      <aside className="w-full max-w-[270px] hidden lg:block">
          <SidebarComponent className = "width={270} enableGesture={false}">
            <NavItems/>
          </SidebarComponent>
      </aside>
      
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  )
}

export default AdminLayout
