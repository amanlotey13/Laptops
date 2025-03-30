import React from 'react'

function Login() {
  return (
    <>
    <div className='login-page'>
    <div className='wrapper'>
    <div className="form">
      <form action="">
        <center><h1>Login</h1></center> 
        <div className="input-box">
          <input type='text' placeholder='Username' required/><i class="fa-solid fa-user"></i>
        </div>
        <div className="input-box">
          <input type='text' placeholder='Password' required/><i class="fa-solid fa-lock"></i>
        </div>
        <div className="remember-forget">
          <label htmlFor=""> <input type="checkbox" />Remember me</label>
        <a href="#">Forgot password</a>
        </div>
        <button type='submit'>Login</button>
      <div className="register-link">
       <center> <p>Don't have an account? <a href="#">Register</a></p></center>
      </div>
      </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default Login