import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { server } from "../../constants/config";
import { userNotExists } from "../../redux/reducers/auth";
import SideNavbar from "../specific/SideNavbar";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const dispatch = useDispatch();

    const handleLogout = async () => {
      try {
        const { data } = await axios.get(`${server}/api/v1/user/logout`, {
          withCredentials: true,
        });
        dispatch(userNotExists());
        toast.success(data.message);
      } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
      }
    };
    return (
      <div className="h-screen w-screen flex">
        <div className=" basis-[30%] bg-black">
          <div className="flex flex-col h-full w-[60%] ms-[20%] me-[40%]">
            <SideNavbar />
            <div className=" h-[15%] w-full">
              <div
                onClick={handleLogout}
                className="flex justify-center items-center mt-4 w-full bg-emerald-900 rounded-xl hover:bg-emerald-950 cursor-pointer"
              >
                <div
                  className={
                    "text-white font-medium text-2xl flex justify-start items-center rounded-full w-max px-2 h-[10%]"
                  }
                >
                  <span className="ms-4">Logout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-[70%] bg-red-900">
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  };
};

export default AppLayout;
