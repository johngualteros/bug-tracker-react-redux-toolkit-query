import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate  } from "react-router-dom";
import Auth from "../components/auth/Auth";
import { User } from "../models/user.model";


const Register = () => {

  const [user, setUser] = useState<User>({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const redirect = useNavigate();

  const notify = () =>
    toast("Te enviamos un correo porfavor revisalo", {
      icon: "👏",
      style: {
        borderRadius: "5px",
        background: "#333",
        color: "#fff",
      },
    });
  
  const handleChange = (e: React.ChangeEvent<any>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(user);
    await notify();
    redirect("/login");
  };
  return (
    <Auth>
      <h1>Register</h1>
      <p>
        Already have an account? <Link to="/login">login</Link>.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Fisrt Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="your first name"
            autoComplete="off"
            onChange={handleChange}
            value={user.name}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="your last name"
            autoComplete="off"
            onChange={handleChange}
            value={user.lastname}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your@example.com"
            autoComplete="off"
            onChange={handleChange}
            value={user.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            autoComplete="off"
            onChange={handleChange}
            value={user.password}
          />
        </div>
        <button type="submit">Register Me</button>
      </form>
    </Auth>
  );
};

export default Register;
