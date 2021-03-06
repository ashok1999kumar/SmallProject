import { Button } from 'bootstrap';
import React,{useState} from 'react';
import { Navgation } from './Navgation';
export const Signup = () => {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [contact,setContact] = useState('');
    const [password,setPassword] = useState('');
    const [newuser, setNewuser] = useState([]);
    const handle = (e) => {
        e.preventDefault();
        // setNewuser(JSON.parse(localStorage.getItem('newuser') || '[]'))
        var usersData = JSON.parse(localStorage.getItem('usersData') || '[]')
        var user={
            name,email,contact,password
        }
        if(usersData.push(user))
        {
            localStorage.setItem('usersData',JSON.stringify(usersData))
            alert('successfully submit')
            setName('');
            setEmail('');
            setContact('');
            setPassword('');
        }
        else
            alert('not submit data')
    };

  return <div>
  <Navgation/>
      <div className='main-div'>
        <div className='child-div w-75'>
            <div className='row'>
                <div className='col-sm-6 col-md-6 col-lg-6'>
                <img src='../Image/Signup.jpg' className='img-fluid w-100'/>  
                </div>
                <div className='col-sm-6 col-md-6 col-lg-6 bg-light'>
                <div className='p-3'>
                    <h1 className='fs-3 text-center '>Sign-Up</h1>
                    <center><hr className='m-0 p-0 login-hr'></hr></center>
                </div>
                <form className='container w-75' method='' onSubmit=''>
                    <div className='my-3'>
                    <input
                        type='text'
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='form-control'
                    />
                    </div>
                    <div className='my-3'>
                    <input
                        type='email'
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='form-control'
                    />
                    </div>
                    <div className='my-3'>
                    <input
                        type='number'
                        placeholder="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className='form-control'
                    />
                    </div>
                    <div className='my-3'>
                    <input
                        type='number'
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='form-control'
                    />
                    </div>
                    
                    <div className='my-3'>
                        <button type='submit'  onClick={handle} className='form-control bg-success text-light'>SignUp</button>
                    </div>
                   
                    <div className='my-3'>
                        <p className='text-center'>create the account <span><a href='#'>click here</a></span></p>
                    </div>
                    <div className='my-3'>
                        <button type='submit' className='form-control bg-light text-black'>Signin</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
      </div>
  </div>;
};
