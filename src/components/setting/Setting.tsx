import style from "./Setting.module.css";
import { FiSettings as SettingsIcon } from "react-icons/fi";
import { BsMoon as MoonIcon, BsSun as SunIcon } from "react-icons/bs";

import { useState, useEffect } from "react";

import { store } from "../../app/store";
import { log } from "console";

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
    
    console.log('state in redux store' + store.getState().darkMode.darkMode);
    getDarkModeInLocalStorage();
  }

  /*useEffect(() => {
    const storeDarkMode = store.getState().darkMode;
    setDarkMode(storeDarkMode.darkMode);
    console.log(darkMode);
  }, [darkMode]);*/

  const getDarkModeInLocalStorage = () => {
    setDarkMode(localStorage.getItem("darkMode") === "true" ? true : false);
    console.log(darkMode);
  }

  if (isOpenSettings.isOpenState === false) {
    return (
      <div
        className={ darkMode? style.containerDark :style.container}
        onClick={() => setIsOpenSettings({ isOpenState: true })}
      >
        <SettingsIcon className={style.icon} />
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
            <MoonIcon />
          </button>
          <button onClick={() => toggleMode(false)} className={ darkMode ? style.buttonModeDark : style.buttonMode}>
            <SunIcon />
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Setting;
