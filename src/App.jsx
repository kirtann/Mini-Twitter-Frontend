import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userExists, userNotExists } from "./redux/reducers/auth";
import axios from "axios";
import { server } from "./constants/config";
import { Toaster } from "react-hot-toast";

function App() {
  const { user, loader } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${server}/api/v1/user/me`, { withCredentials: true })
      .then((res) => {
        dispatch(userExists(res.data.user));
      })
      .catch((err) => {
        dispatch(userNotExists());
      });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectRoute user={!user} redirect="/">
              <Login />
            </ProtectRoute>
          }
        />
        <Route element={<ProtectRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to={"/"} replace={true} />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/:username" element={<Profile user={user} />} />
        </Route>
      </Routes>
      <Toaster position="bottom-center" />
    </BrowserRouter>
  );
}

export default App;
