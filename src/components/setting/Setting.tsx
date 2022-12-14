import style from "./Setting.module.css";
import { FiSettings as SettingsIcon } from "react-icons/fi";
import { useState } from "react";

interface isOpenSettingsState {
  isOpenState: boolean;
}

const Setting = () => {
  const [isOpenSettings, setIsOpenSettings] = useState<isOpenSettingsState>({
    isOpenState: false,
  });

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
        onClick={() => setIsOpenSettings({ isOpenState: false })}
      >
        <h5>Select the theme</h5>
        <div className={style.buttons}>
          <button>
            <SettingsIcon />
          </button>
          <button>
            <SettingsIcon />
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Setting;
