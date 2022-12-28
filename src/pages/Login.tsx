import React from 'react'
import Auth from '../components/auth/Auth'

const Login = () => {
  return (
    <Auth>
      <h1>Login</h1>
      <p>Doesn't have an account yet? <a href="/">signup</a>.</p>

      <form>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" placeholder='your@example.com' autoComplete='off'/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder='********' autoComplete='off'/>
        </div>

        {/* remember me */}
        <div className='checbox'>
          <input type="checkbox" name="remember" id="remember"/>
          <label htmlFor="remember">Remember me</label>
        </div>

        <button type="submit">Login</button>
      </form>
    </Auth>
  )
}

export default Login