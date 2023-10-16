import React, { useState } from 'react';
import './loginpage.css';
import Json from './users.json'
import {useNavigate} from 'react-router-dom'
const LoginPage= (props:any) => {
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const toggleForm = () => {
    setShowLogin(!showLogin);
    setEmail('');
    setPassword('');
    setName('');
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login Email:', email);
    console.log('Login Password:', password);
    console.log(Json);
    const navigate=useNavigate();
    Json.map((n)=>
    {
        if(n.mailId===email && n.password===password)
        {
          if(n.role==='Admin')
          {
            props.role(n.role,Json)
            navigate('/landingPage') 
          }
          else
          {
            const departmentsCount:any={}
            const rolesCount:any={}
            Json.forEach((users:any)=>
            {
              const {department}=users
              
              if(departmentsCount[department])
              {
                departmentsCount[department]++;
              }
              else
              {
                departmentsCount[department]=1
              }
              const {role}=users
              if(rolesCount[role])
              {
                rolesCount[role]++;
              }
              else
              {
                rolesCount[role]=1
              }
            })
            props.role(n.role,[departmentsCount,rolesCount])
            navigate('/landingPage') 

          }
        }
    })
  };

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Signup Name:', name);
    console.log('Signup Email:', email);
    console.log('Signup Password:', password);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='container-body'>
    <div className="container">
      <h2>{showLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={showLogin ? handleLoginSubmit : handleSignupSubmit}>
        {!showLogin && (
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Name"
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" className="submit-button">
            {showLogin ? 'Login' : 'Signup'}
          </button>
          <button type="button" onClick={toggleForm} className="toggle-button">
            {showLogin ? 'Switch to Signup' : 'Switch to Login'}
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
