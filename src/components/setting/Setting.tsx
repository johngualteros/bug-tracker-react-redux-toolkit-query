import style from "./Setting.module.css";
import { FiSettings as SettingsIcon } from "react-icons/fi";
import { BsMoon as MoonIcon, BsSun as SunIcon } from "react-icons/bs";

import { useState } from "react";

import { store } from "../../app/store";

interface isOpenSettingsState {
  isOpenState: boolean;
}

const Setting = () => {
  const [isOpenSettings, setIsOpenSettings] = useState<isOpenSettingsState>({
    isOpenState: false,
  });

  const toggleMode = (mode: boolean) => {
    store.dispatch({ type: "theme/toggleMode", payload: mode });
    console.log(store.getState());
    setIsOpenSettings({ isOpenState: false });
  }

  if (isOpenSettings.isOpenState === false) {
    return (
      <div
        className={style.container}
        onClick={() => setIsOpenSettings({ isOpenState: true })}
      >
        <SettingsIcon className={style.icon} />
      </div>
    );
  }

  if (isOpenSettings.isOpenState === true) {
    return (
      <div
        className={style.containerOpen}
      >
        <h5>Select the theme</h5>
        <div className={style.buttons}>
          <button onClick={() => toggleMode(true)} className={style.buttonMode}>
            <MoonIcon />
          </button>
          <button onClick={() => toggleMode(false)} className={style.buttonMode}>
            <SunIcon />
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Setting;
