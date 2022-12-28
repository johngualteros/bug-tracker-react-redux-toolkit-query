import React, { ReactNode } from 'react'

import style from './Auth.module.css'

import imageAuth from "./auth.svg"

interface ChildrenProps {
  children?: ReactNode;
}

const Auth : React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className={style.container}>
        <div className={style.formContainer}>
          <div className={style.form}>
            {children}
          </div>
        </div>
        <div className={style.img}>
            <img src={imageAuth} alt="auth" />
        </div>
    </div>
  )
}

export default Auth