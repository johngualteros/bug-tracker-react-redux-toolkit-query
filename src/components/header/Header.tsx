import { useState, useEffect } from "react";

import style from "./Header.module.css";

import { RxHamburgerMenu as HamburguerIcon } from "react-icons/rx";
import { IoClose as CloseIcon } from "react-icons/io5";
import { store } from "../../app/store";

const Header = () => {
	const [iconMenu, setIconMenu] = useState(false); 
  	const [darkMode, setDarkMode] = useState<any>(false);

	const handleMenu = () => {
		const menu = document.getElementById("menu") as HTMLElement;

		setIconMenu(!iconMenu);

		if (iconMenu) {
			menu.style.transform = "translateX(100%)";
		} else {
			menu.style.transform = "translateX(0)";
		}
	};

	useEffect(() => {
		setDarkMode(localStorage.getItem("darkMode") == "true");
		subscribeDarkMode();
	}, [])

	const subscribeDarkMode = () => {
		store.subscribe(() => {
			setDarkMode(store.getState().darkMode.darkMode);
		});
	}

	

	return (
		<header className={darkMode ? style.headerDark : style.header}>
			<div className={style.logo}>Jbugs</div>

			<div className={style.links}>
				<a href="/">Home</a>
				<a href="/">About</a>
				<a href="/">Contact</a>
				<button>Log in</button>
			</div>

			<div className={style.openMenu} id="menu">
				<a href="/">Home</a>
				<a href="/">About</a>
				<a href="/">Contact</a>
				<button>Log in</button>
			</div>

			<div className={style.hamburger} onClick={handleMenu}>
				{iconMenu ? (
					<CloseIcon size={30} fill="#fff" />
				) : (
					<HamburguerIcon size={30} />
				)}
			</div>
		</header>
	);
};

export default Header;
