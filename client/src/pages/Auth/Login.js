import React, {useState} from 'react'
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate,useLocation, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import "../../styles/AuthStyles.css";
const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate = useNavigate();
    const location=useLocation();
    const [auth,setAuth] = useAuth();

    const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
        const res= await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password});
        if(res.data.success){
          toast.success(res.data.message);
          setAuth({
            ...auth,
            user:res.data.user,
            token:res.data.token,
          })
          navigate(location.state ||'/');
        }else{
          toast.error(res.data.message);
        }
      }catch(error){
        // console.log(error);
        toast.error('Something went wrong');
      }
    }

  return (
    <Layout title={"Login - Engage Commerce"}>
        <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">Login</h4>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <p></p>
          <NavLink to='/forgot-password' style={{cursor:'pointer',textDecoration:'none'}}>Forgot Password?</NavLink>
        </form>
      </div>
    </Layout>
  )
}

export default Login;