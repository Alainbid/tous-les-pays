import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const AuthPage = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <Logo />
      <Navigation />
      <div style={{ marginTop: "20px" }}>
        <span className="titr">Sign_UP Sign-IN</span>
        <span className="sgup">Sign-Up</span>
        <span className="sgin">Sign-In</span>
        <span className="lgout">Logout</span>
      </div>
      <span className="bloc">
        <form onSubmit={(e) => handelSubmit(e)}>
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" required placeholder="Nom *"></input>
          <br />

          <label htmlFor="mail">Email</label>
          <input type="email" id="mail" required placeholder="Email *" />
          <br />

          <label htmlFor="pass">Password</label>
          <input type="password" id="pass" required placeholder="PassWord *" />
          <br />

          <label htmlFor="repPass">Repeat password</label>
          <input
            type="password"
            id="repPass"
            required
            placeholder="PassWord *"
          />

          <br />
          <br />
          <input
            className="valider"
            type="submit"
            onMouseEnter={(e) => (e.target.style.fontWeight = "bold")}
            onMouseLeave={(e) => (e.target.style.fontWeight = "normal")}
            value="Valider"
          />
        </form>
      </span>
    </div>
  );
};

export default AuthPage;
