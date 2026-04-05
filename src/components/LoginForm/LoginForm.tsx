import React, { useState } from "react";
import "./style.scss";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, password, pin, captchaChecked });
  };

  return (
    <div className="login-form">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Pin Kodu"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        <label className="captcha">
          <input
            type="checkbox"
            checked={captchaChecked}
            onChange={(e) => setCaptchaChecked(e.target.checked)}
            required
          />
          Ben robot değilim
        </label>
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default LoginForm;