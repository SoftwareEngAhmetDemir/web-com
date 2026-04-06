import React from "react";
import { CustomForm, type FormField } from "../common/CustomForm/CustomForm";
import { Link } from "react-router-dom";

const registerFields: FormField[] = [
  {
    name: "realName",
    type: "text",
    placeholder: "Your name (between 5 and 20 characters)",
    required: true
  },
  {
    name: "account_name",
    type: "text",
    placeholder: "Account Name (Between 5-15 Characters)",
    required: true
  },
  {
    name: "e-mail",
    type: "text",
    placeholder: "Email Address",
    required: true
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password (Between 8-15 Characters)",
    required: true
  },
  {
    name: "passwordTwo",
    type: "password",
    placeholder: "Repeat Password (Between 8-15 Characters)",
    required: true
  },
  {
    name: "pinPassword",
    type: "password",
    placeholder: "Pin Code (4 Digits)",
    required: true
  },
  {
    name: "phone",
    type: "text",
    placeholder: "Your Phone Number",
    required: true
  },
  {
    name: "deleteCode",
    type: "text",
    placeholder: "Character Delete Code (7 Digits)",
    required: true
  },
  {
    name: "referans",
    type: "select",
    options: [
      "Where Did You Find Us?",
      "Capo2 Kitle",
      "Metin2 Tartışma Sohbet",
      "SMS",
      "Turkmmo",
      "Capoeiraa",
      "BonusGamer",
      "Berserker",
      "Rause",
      "Claus",
      "JantiPlayer",
      "HATRED",
      "Peria",
      "AuswitchTR",
      "Lusian",
      "Luxx",
      "İrolika",
      "Pentagram",
      "Swayzewn",
      "FurkanPektaş",
      "Acapella",
      "Sumina",
      "Recould",
      "AuswitchTR",
      "realOxygeN",
      "MATKAP",
      "itemci",
      "OhaMenace",
      "TURSUSUYU",
      "PamukŞeker",
      "DEDE1881",
      "TEDDYMONTANA",
      "HuaTV",
      "sansarkerem",
      "CHASTER"
    ],
    required: true
  },
  {
    name: "check",
    type: "checkbox",
    isCheckbox: true,
    placeholder: "Membership Agreement I have read and accept",
    required: true
  }
];

export default function RegisterForm() {
  const handleRegister = (data: Record<string, string | boolean>) => {
    console.log("Form submitted:", data);
  };

  return (
    <>
      <h1>Register</h1>
      <CustomForm
        fields={registerFields}
        submitText="Register"
        onSubmit={handleRegister}
      />
      Already have an account? Now{" "}
      <Link to="/" className="text-blue-500 hover:underline">
        log in
      </Link>
      . Forgot your password?{" "}
      <Link to="/forgot-password" className="text-blue-500 hover:underline">
        Reset your password
      </Link>
      . Forgot your pin?{" "}
      <Link to="/forgot-pin" className="text-blue-500 hover:underline">
        Reset your pin password
      </Link>
      .
    </>
  );
}
