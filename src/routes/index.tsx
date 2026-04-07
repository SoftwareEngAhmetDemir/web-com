import { Routes, Route } from "react-router-dom";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import ForgetPinForm from "../components/PinForgotPassword/PinForgotPassword";
import ForgetPasswordForm from "../components/ForgotPassword/ForgotPassword";
import LoginForm from "../components/LoginForm/LoginForm";
import Announcements from "../components/Announcements";
import { CharacterOrderTable } from "../components/CharacterOrderTable/CharacterOrderTable";



export default function RouteView() {
  return (
    <Routes>
     <Route path="/" element={<LoginForm />} />
       <Route path="/register" element={<RegisterForm />} />
       <Route path="/forgot-pin" element={<ForgetPinForm />} />
       <Route path="/forgot-password" element={<ForgetPasswordForm />} />
        <Route path="/web" element={<Announcements/>} />
        <Route path="/ranking/player" element={<CharacterOrderTable/>} />
      {/* <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}