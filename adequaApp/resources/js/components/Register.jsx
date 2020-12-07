import React, {useState} from "react";
import Axios from "axios";


{/* Creating the form Component*/}
function Register() {

    const [name,setName] = useState("")

    const [email,setEmail] = useState("")

    const [password,setPassword] = useState("")

    const [cpassword,setcPassword] = useState("")

    const style = {

        display:"flex",
        flexDirection: "column",
        height: "150px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width : "400px",
    }

    const stylebtn = {

        width: "150px",
        height: "40px",
        margin: "20px auto auto auto",


    }

    {/*Make an ajax call to send data*/}
    const handleSubmit = () => {


        axios.post('/register',{name:name , email:email , password:password},{}).then((response)=>{ console.log("register complete")}).catch((response)=>{ console.log("register not complete")})

        alert('Le form a été soumis');

        event.preventDefault();

    }


    return (

        <form onSubmit={handleSubmit}>

            <div style={style}>
            <Name  title = {name} onchange = {setName} > </Name>
            <br/>
            <Email title = {email} onchange = {setEmail}> </Email>
            <br/>
            <Password title = {password} onchange = {setPassword}> </Password>
            <br/>
            <Cpassword title = {cpassword} onchange = {setcPassword}> </Cpassword>
            <br/>
            </div>

            <button style={stylebtn} type="submit">Register</button>
        </form> 
    );





}



{/*Creating the name component*/}
class Name extends React.Component {

    /* set default State in constructor and bind functions needed */
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    /* set the state with input */
    handleChange(event) {    this.props.onchange(event.target.value)  }

    render() {
        return (

                /* Creating label and Input*/
                <label style={{color: "white"}}>Nom : <input type="text" value={this.props.title} onChange={this.handleChange} required  autoFocus/></label>
        );
    }
}

{/*Creating the Email component*/}
class Email extends React.Component {

    /* set default State in constructor and bind functions needed */
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    /* set the state with input */
    handleChange(event) {    this.props.onchange(event.target.value)  }

    render() {
        return (

            /* Creating label and Input*/
            <label style={{color: "white"}}>Adresse Mail : <input type="email" value={this.props.title} onChange={this.handleChange}  required  autoFocus/></label>
        );
    }
}

{/*Creating the Password component*/}
class Password extends React.Component {

    /* set default State in constructor and bind functions needed */
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    /* set the state with input */
    handleChange(event) {    this.props.onchange(event.target.value)  }

    render() {
        return (

            /* Creating label and Input*/
            <label style={{color: "white"}}>Mot de passe : <input type="password" value={this.props.title} onChange={this.handleChange} required  autoFocus/>        </label>
        );
    }
}

{/*Creating the confirmation password component*/}
class Cpassword extends React.Component {

    /* set default State in constructor and bind functions needed */
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    /* set the state with input */
    handleChange(event) {   this.props.onchange(event.target.value)  }

    render() {
        return (

            /* Creating label and Input*/
            <label style={{color: "white"}}>Confirmation mot de passe : <input type="password" value={this.props.title} onChange={this.handleChange} required  autoFocus/>        </label>
        );
    }
}

{/*Export default form*/}
export default Register;


