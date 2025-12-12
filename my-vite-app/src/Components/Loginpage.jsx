import "../Css/Login.css"

import bgImage from "../assets/lodo.jpeg";

function Loginpage(){
    return(
         <div class="container">
            
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="user name" required />
                    <i class='bx bxs-user-circle'></i>
                </div>
                <div class="input-box">
                    <input type="text" placeholder="password" required />
                    
                    <i class='bx bx-lock'></i>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit" class="btn">Login</button>
                <div className="register-link">
                    <p>Don't have account ? <a href="#">Register</a></p>
                </div>
            </div>
    );
}
export default Loginpage;