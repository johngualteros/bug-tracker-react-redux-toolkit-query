import React, { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast';

import style from './Auth.module.css'

import imageAuth from "./auth.svg"

interface ChildrenProps {
  children?: ReactNode;
}

const Auth : React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className={style.container}>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
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