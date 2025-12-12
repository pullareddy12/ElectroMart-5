import "../Css/Login.css"



function Loginpage(){
    return(
        <div className="Login">
        <h1>Electro_Mart</h1>
        <div className="box">
            <h2>Log in to Electrolmart</h2>
            <label htmlFor="">
                username:
                <input type="text" />
            </label><br />
            <label htmlFor="">
                password :
                <input type="text" />
            </label><br /><br />
            <button>Login</button>
        </div>
        </div>
    );
}
export default Loginpage;