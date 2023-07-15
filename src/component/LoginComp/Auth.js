import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function Authentication() {

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center header123 pb-5 pt-5'>
      <form >

        <div>

          <span className='m-0'><span style={{ color: "#D96838" }}>K</span><span className='text-white'>URM</span><span><span style={{ color: "#D96838" }} className='ms-1'>I</span><span className='text-white'>NFOTECH</span></span></span>
          <p className='signIn fs-20 fw-600 text-white mb-2'>Sign in</p>
        </div>

        <input type="email" placeholder="email" /><br />
        <input type="password" placeholder="password" />
        <p className='mt-1 text-white'>No account? <Link to="/create-account" style={{ color: "#D96838" }}>create one!</Link></p>
        <div className='buttonBN'>
          <Link to="/practice-ui"> <button type="submit" className='next'>Next</button></Link>

        </div>
      </form>
    </div>
  );
}

export default Authentication;
