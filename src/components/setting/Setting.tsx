import { useState, useEffect } from "react";

import { store } from "../../app/store";

import style from "./Setting.module.css";

import { FiSettings as SettingsIcon } from "react-icons/fi";
import { BsMoon as MoonIcon, BsSun as SunIcon } from "react-icons/bs";



interface isOpenSettingsState {
  isOpenState: boolean;
}

const Setting = () => {
  const [isOpenSettings, setIsOpenSettings] = useState<isOpenSettingsState>({
    isOpenState: false,
  });

  const [darkMode, setDarkMode] = useState<any>(false);

  const toggleMode = (mode: boolean) => {
    store.dispatch({ type: "darkMode/toggle", payload: mode });
    setIsOpenSettings({ isOpenState: false });

    document.body.classList.toggle("dark", mode);

    getDarkModeInLocalStorageAndAddBodyClass();
  }

  useEffect(() => {
    getDarkModeInLocalStorageAndAddBodyClass();
  }, []);

  const getDarkModeInLocalStorageAndAddBodyClass = () => {
    // eslint-disable-next-line eqeqeq
    setDarkMode(localStorage.getItem("darkMode") == "true" ? true : false);

    if (localStorage.getItem("darkMode") == "true") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }

  if (isOpenSettings.isOpenState === false) {
    return (
      <div
        className={ darkMode? style.containerDark :style.container}
        onClick={() => setIsOpenSettings({ isOpenState: true })}
      >
        <SettingsIcon className={style.icon} color={darkMode ? 'white' : 'black'}/>
      </div>
    );
  }

  if (isOpenSettings.isOpenState === true) {
    return (
      <div
        className={ darkMode ? style.containerOpenDark : style.containerOpen }
      >
        <h5>Select the theme</h5>
        <div className={style.buttons}>
          <button onClick={() => toggleMode(true)} className={ darkMode ? style.buttonModeDark : style.buttonMode}>
            <MoonIcon fill={darkMode ? 'white' : 'black'}/>
          </button>
          <button onClick={() => toggleMode(false)} className={ darkMode ? style.buttonModeDark : style.buttonMode}>
            <SunIcon fill={darkMode ? 'white' : 'black'}/>
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Setting;
