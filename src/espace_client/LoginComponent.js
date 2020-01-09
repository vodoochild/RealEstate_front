import React from 'react';
import {Redirect} from "react-router";
export default class LoginComponent extends React.Component {

    constructor(){
        super();
        this.state= {
            username:"",
            password:"",
            agent:{},
            admin:{},
            isNotLoading: false,
            isNotLoading2: false,
            login: false
        }
    }

    handleUsernameChange(event){
        this.setState({username: event.target.value})
    }
    handlePasswordChange(event){
        this.setState({password: event.target.value})
    }
    submitForm(event){
        event.preventDefault();

         const {username, password} = this.state;
       /* fetch('/admin/getadmin/'+this.state.username).then(res => res.json())
            .then((data) => {
                this.setState({admin : data, isNotLoading2: true})
            });*/
     /*   fetch('/agent/getagent/'+username).then(res => res.json())
            .then((data) => {
                this.setState({agent : data, isNotLoading2: true})
                const agent=this.state.agent;
            });*/
      /*  if(this.state.agent === null) {
            this.state.login = false;
            console.log("non authentifier");
        }
        else {*/
      //if(this.state.isNotLoading2){
      // const agent = this.state.agent;
        if(password === "agent1pass" && username === "agent1@gmail.com"){
            this.setState({login: true});
            localStorage.setItem("agent_id",2);

        /*    console.log();*/
            console.log(localStorage.getItem("agent_id"));
         /*    localStorage.setItem("user_id",this.state.agent.id);
            console.log(localStorage.getItem("user_id"));
            console.log(localStorage.getItem("user_id"));*/
        }
        if(password === "agent2pass" && username === "agent2@gmail.com"){
            localStorage.setItem("agent_id",3);
            this.setState({login: true});
            console.log(password);
        }

        // }

      /*  if(this.state.admins.length === 1){
            this.state.admins.forEach(agent => localStorage.setItem("user_id",agent.id));
        }*/


       /* if(this.state.isNotLoading && this.state.isNotLoading2){
            this.agents.map(agent =>
                (agent.password === this.state.password && agent.email === this.state.username)
                    ? localStorage.setItem("user_id",agent.id) : this.setState({login: false}));


            this.admins.map(agent =>
                (agent.password === this.state.password && agent.email === this.state.username)
                    ? localStorage.setItem("user_id",agent.id) : this.setState({login: false}));
         }
*/
    }

    render(){
        if (this.state.login) {
            return <Redirect to={"/"}/>
        }
        console.log(this.state);
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100" style={{backgroundImage: "url('images/bg-02.jpeg')"}}>
                        <div className="wrap-login100 p-t-30 p-b-50">
				<span className="login100-form-title p-b-41">
					Agent Login
				</span>
                            <form className="login100-form validate-form p-b-33 p-t-5" onSubmit={this.submitForm.bind(this)}>

                                <div className="wrap-input100 validate-input" data-validate="Enter username">
                                    <input className="input100" type="text"
                                           value={this.state.username}
                                           onChange={this.handleUsernameChange.bind(this)}
                                           name="username" placeholder="User name"/>
                                        <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Enter password">
                                    <input className="input100" type="password"
                                           value={this.state.password}
                                           onChange={this.handlePasswordChange.bind(this)}
                                           name="pass" placeholder="Password"/>
                                        <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                </div>

                                <div className="container-login100-form-btn m-t-32">
                                    <button className="login100-form-btn">
                                        Login
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>


                <div id="dropDownSelect1"></div>
            </div>

        );
        }
        }
