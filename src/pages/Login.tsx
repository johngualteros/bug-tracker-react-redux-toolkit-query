import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Auth from "../components/auth/Auth";
import { UserLogin } from "../models/userLogin.model";

const Login = () => {
	const [user, setUser] = useState<UserLogin>({
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState<string[]>([]);

	const [disabledButton, setDisabledButton] = useState<boolean>(false);

	const handleChange = (e: React.ChangeEvent<any>) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});

		validateInputs(e.target.name, e.target.value);
	};

	const validateInputs = (name: string, value: string) => {
		if (name === "email") {
			const email = value;
			const emailRegex =
				/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			if (!emailRegex.test(email)) {
				if (!errors.includes("Email is not valid")) {
					setErrors([...errors, "Email is not valid"]);
				}
			} else {
				setErrors(
					errors.filter((error) => error !== "Email is not valid")
				);
			}
		}

		if (name === "password") {
			const password = value;
			const passwordRegex =
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
			if (!passwordRegex.test(password)) {
				if (
					!errors.includes(
						"Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter and one number"
					)
				) {
					setErrors([
						...errors,
						"Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter and one number",
					]);
				}
			} else {
				setErrors(
					errors.filter(
						(error) =>
							error !==
							"Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter and one number"
					)
				);
			}
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setDisabledButton(true);
	};

	useEffect(() => {
		if (user.email === "" || user.password === "") {
			setDisabledButton(true);
		} else {
			setDisabledButton(false);
		}
	}, [errors, user]);


	return (
		<Auth>
			<h1>Login</h1>
			<p>
				Doesn't have an account yet? <Link to="/register">signup</Link>.
			</p>

			{errors.length > 0 && (
				<div className="alert">
					{errors.map((error) => (
						<p> - {error}</p>
					))}
				</div>
			)}
			<form onSubmit={handleSubmit}>
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

				{/* remember me */}
				<div className="checbox">
					<input type="checkbox" name="remember" id="remember" />
					<label htmlFor="remember">Remember me</label>
				</div>

				<button type="submit" disabled={errors.length > 0 || disabledButton}>Login</button>
			</form>
		</Auth>
	);
};

export default Login;
