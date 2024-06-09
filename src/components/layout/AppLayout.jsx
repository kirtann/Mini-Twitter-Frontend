import NavbarLinks from "../specific/NavbarLinks";
import SideNavbar from "../specific/SideNavbar";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <div className="h-screen w-screen flex">
        <div className=" basis-[23%] bg-black">
          <div className="flex flex-col h-full w-[60%] ms-[20%] me-[40%]">
            <SideNavbar />
            <div className=" h-[15%] w-full">
              <NavbarLinks display="Logout" link="/" />
            </div>
          </div>
        </div>
        <div className="basis-[44%] bg-red-900">
          <WrappedComponent />
        </div>
        <div className="basis-[33%] bg-blue-900"></div>
      </div>
    );
  };
};

export default AppLayout;
