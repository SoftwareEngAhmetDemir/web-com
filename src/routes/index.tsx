import { Routes, Route } from "react-router-dom";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import ForgetPinForm from "../components/PinForgotPassword/PinForgotPassword";
import ForgetPasswordForm from "../components/ForgotPassword/ForgotPassword";
import LoginForm from "../components/LoginForm/LoginForm";
import Announcements from "../components/Announcements";
import { CharacterOrderTable } from "../components/CharacterOrderTable/CharacterOrderTable";
import { GuildTable } from "../components/GuildTable/GuildTable";
import { Support } from "../components/Support/Support";
import ControlPanel from "../components/ControlPanel/ControlPanel";

export default function RouteView() {
  return (
    <Routes>
      <Route path="/"                element={<LoginForm />} />
      <Route path="/register"        element={<RegisterForm />} />
      <Route path="/forgot-pin"      element={<ForgetPinForm />} />
      <Route path="/forgot-password" element={<ForgetPasswordForm />} />
      <Route path="/web"             element={<Announcements />} />
      <Route path="/ranking/player"  element={<CharacterOrderTable />} />
      <Route path="/ranking/guild"   element={<GuildTable />} />
      <Route path="/support"         element={<Support />} />
      <Route path="/dashboard"       element={<ControlPanel />} />
    </Routes>
  );
}