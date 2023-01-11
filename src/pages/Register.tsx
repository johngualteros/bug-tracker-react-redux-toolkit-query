import { errorMonitor } from "events";
import { useEffect, useState } from "react";
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

  const [errors, setErrors] = useState<string[]>([]);

  const [disabledButton, setDisabledButton] = useState<boolean>(false);

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

    validateInputs(e.target.name, e.target.value);
  }

  const validateInputs = (name: string, value: string) => {
    if (name === "email") {
      const email = value;
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
      if (!emailRegex.test(email)) {
        if (!errors.includes("Email is not valid")){
          setErrors([...errors, "Email is not valid"]);
        }
      } else {
        setErrors(errors.filter((error) => error !== "Email is not valid"));
      }
    }

    if (name === "password") {
      const password = value;
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      if (!passwordRegex.test(password)) {
        if (!errors.includes("Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter and one number")){
          setErrors([...errors, "Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter and one number"]);
        }
      } else {
        setErrors(errors.filter((error) => error !== "Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter and one number"));
      }
    }

    if (name === "name") {
      const name = value;
      const nameRegex = /^[a-zA-Z]+$/;
      if (!nameRegex.test(name)) {
        if(!errors.includes("Name must be only letters")){
          setErrors([...errors, "Name must be only letters"]);
        }
      } else {
        setErrors(errors.filter((error) => error !== "Name must be only letters"));
      }
    }

    if (name === "lastname") {
      const lastname = value;
      const lastnameRegex = /^[a-zA-Z]+$/;
      if (!lastnameRegex.test(lastname)) {
        if(!errors.includes("Lastname must be only letters")){
          setErrors([...errors, "Lastname must be only letters"]);
        }
      }
      else {
        setErrors(errors.filter((error) => error !== "Lastname must be only letters"));
      }
    }

    if (user.name === "" || user.lastname === "" || user.email === "" || user.password === "") {
      setDisabledButton(true);
    }else{
      setDisabledButton(false);
    }
  }

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    await notify();
    redirect("/login");
  };

  useEffect(() => {
    setDisabledButton(true);
  }, []);

  return (
    <Auth>
      <h1>Register</h1>
      <p>
        Already have an account? <Link to="/login">login</Link>.
      </p>

      {
          errors.length > 0 && (
            <div className="alert">
              {errors.map((error) => <p> - {error}</p>)}
            </div>
          )
      }

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
            required
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
            required
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
            required
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
            required
          />
        </div>
        <button type="submit" disabled={errors.length >= 1 || disabledButton}>Register Me</button>
      </form>
    </Auth>
  );
};

export default Register;
