import React, { useEffect, useState } from "react"
import './Form.css'

const Form1 = (props) => {
    if (!props.formAvailable) return null;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setpasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Поле не может быть пустым')
    const [passwordError, setPasswordError] = useState('Поле не может быть пустым')
    const [formValid, setFormValid] = useState(false)
    
  
    useEffect(() => {
      if (passwordError) {
        setFormValid(false)
      } else {
        setFormValid(true)
      }
    }, [passwordError])
  
    const emailHandler = (e) => {
      setEmail(e.target.value)
      if (!e.target.value) {
        setEmailError("не может быть пустыым")
      } else {
        setEmailError("")
      }
    }
    const passwordHandler = (e) => {
      setPassword(e.target.value)
      if (e.target.value.length < 3 || e.target.value.length > 8) {
        setPasswordError('Пароль должен быть длиннее 3х и короче 8 символов')
        if (!e.target.value) {
          setPasswordError('Поле не может быть пустым')
        }  
      } else {
        setPasswordError('')
      }
  // const re = 
  // if (!re.test(String(e.target.value).toLowerCase())){setEmailError}
  
    }
  
    const blurHandler = (e) => {
      switch (e.target.name) {
        case 'mail':
          setEmailDirty(true)
          break
        case 'pass': 
          setpasswordDirty(true)
          break
      }
    }
  
    return (
      <div>
        <div class="background">
          <div class="shape"></div>
          <div class="shape"></div>
        </div>
        <form>
          {/* <h3>Login Here</h3>
          <label for="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username"/>
  
          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password"/>
  
          <button>Log In</button> */}
          <h1>Регистрация</h1>
          {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
          <input value={email} onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} name='mail' type='email' placeholder='Enter your email...'></input>
          {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
          <input value={password} onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} name='pass' type='password' placeholder='Enter your password...'></input>
          <button disabled={!formValid} type='submit'>Registration</button>
        </form>
      </div>
    );
}

export default Form1