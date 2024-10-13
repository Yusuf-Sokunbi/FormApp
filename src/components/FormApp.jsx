import React, { useRef } from 'react'

export default function FormApp() {
    const email = useRef();
    const password = useRef();
   let Email;
   let Password;
function handleSubmit(e){
    e.preventDefault()
     Email = email.current.value;
     Password = password.current.value;
    console.log('email:' + Email, 'password:'+ Password)
}
  return (
    <form  onSubmit={handleSubmit}>
    <h2>Login</h2>
   <div>
    <div>
      <label htmlFor="email">Email:</label>
      <input type="email" name='email' ref={email}
       id='email' placeholder='Enter your mail'
       />
    </div>
    <div>
      <label htmlFor="password">Password:</label>
      <input type="password" name='password' ref={password}
       id='password' />
    </div>
    </div>
      <p>{Email.current.value}
      </p>
      <p>{Password}
      </p>
    <p>
      <button type='reset'>Reset</button>
      <button type=''>Login</button>
    </p>

  </form>
  )
}
