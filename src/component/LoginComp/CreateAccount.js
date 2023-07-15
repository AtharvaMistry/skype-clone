// import microsoft from './images/microsoft (1).png';
import './CreateAccount.css';
// import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

function CreateAccount() {
    return (
        <>
            <div className='container-fluid  d-flex justify-content-center align-items-center header1234 pb-5 pt-5 m-0'>
                <form className=''>

                    <div className="">
                        <span className='m-0'><span style={{ color: "#D96838" }}>K</span><span className='text-white'>URM</span><span><span style={{ color: "#D96838" }} className='ms-1'>I</span><span className='text-white'>NFOTECH</span></span></span>
                        <p className='fs-20 fw-600 text-white'>Create Account</p>

                    </div>
                    <input type="email" placeholder="someone@gmail.com" /><br />
                    <input type="password" placeholder="password" className='mb-3' />
                    {/* <a href="/" className='mb-2 mt-2' style={{ color: "#D96838" }}>Use a phone number instead</a> */}


                    <div className='mt-3'>
                        <Link to="/"><button type="submit" className='back' style={{ backgroundColor: "gray", color: "black" }}>Back</button></Link>
                        <Link to="/"><button type="submit" className='next' style={{ backgroundColor: "#f9e6df", color: "white" }}>Next</button></Link>

                    </div>
                </form>
            </div>
        </>
    )
}
export default CreateAccount;