import Navbar from "@/components/Navbar";
import SideBar from "@/components/Sidebar";

const MainLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <>
            <Navbar/>
          <div className="flex">
            <div className=" hidden md:block h-[100vh] w-[300px] "> <SideBar/> </div>
            <div className="p-5 w-full md:max-w-[1140px]"> {children} </div>
          </div>
          </>
     );
}
 
export default MainLayout;

