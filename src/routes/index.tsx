import { Navigate, Routes, Route } from "react-router-dom";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import ForgetPinForm from "../components/PinForgotPassword/PinForgotPassword";
import ForgetPasswordForm from "../components/ForgotPassword/ForgotPassword";
import ChangeEmail from "../components/ChangeEmail/ChangeEmail";
import LoadEP from "../components/LoadEP/LoadEP";
import UseEPCoupon from "../components/UseEPCoupon/UseEPCoupon";
import Announcements from "../components/Announcements";
import { CharacterOrderTable } from "../components/CharacterOrderTable/CharacterOrderTable";
import { GuildTable } from "../components/GuildTable/GuildTable";
import { Support } from "../components/Support/Support";
import ControlPanel from "../components/ControlPanel/ControlPanel";
import { PanelLogTable } from "../components/PanelLogTable/PanelLogTable";
import Download from "../components/Download/Download";

export default function RouteView() {
  return (
    <Routes>
      <Route path="/"                element={<Navigate to="/web" replace />} />
      <Route path="/web"             element={<Announcements />} />
      <Route path="/register"        element={<RegisterForm />} />
      <Route path="/forgot-pin"      element={<ForgetPinForm />} />
      <Route path="/forgot-password" element={<ForgetPasswordForm />} />
      <Route path="/change-email"    element={<ChangeEmail />} />
      <Route path="/Payment/Buy"     element={<LoadEP />} />
      <Route path="/Coupon/Index"    element={<UseEPCoupon />} />
      <Route path="/ranking/player"  element={<CharacterOrderTable />} />
      <Route path="/ranking/guild"   element={<GuildTable />} />
      <Route path="/support"           element={<Support />} />
      <Route path="/controlPanel"     element={<ControlPanel />} />
      <Route path="/ControlPanel/Log" element={<PanelLogTable />} />
      <Route path="/download"         element={<Download />} />
    </Routes>
  );
}