import React from 'react';
import axios from 'axios';
class PlayerForm extends React.Component {
   submitPlayer (event) {
       event.preventDefault();
       //the Api for the URl OF THE application
       axios.post('https//localhost:4000/players',{
           //for the innitali for each object
           firstName: this.firstaName.value,
           lastName: this.lastName.value,
           phone: this.Phone.value,
           email: this.Email.value,
           iscoach: this.iscoach.value,
           team: this.team.iscoach.value,
           speed : this.team.value,
           strength: this.strength.value
       })
       .then((response)=> {
           console.log(response);
       })
       .catch ((error)=> {
           console.log(error);
       })

       
   }
    render() { 
        return ( 
            <div className="row">
                <h1 className="center">Add a new player</h1>
                <form className ="col s12" onSubmit={this.submitPlayer.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="firstName" ref="firstName" type="text" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="lastName" ref="lastName" type="text" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div class="input-field col s6">
                            <input id="phone" ref="phone" type="text" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" ref="email" type="text" />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="iscoach" ref="iscoach" type="text" />
                            <label htmlFor="email">IsCoach</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="team" ref="team" type="text" />
                            <label htmlFor="team">Team:</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="team" ref="team" type="text" />
                            <label htmlFor="team">Speed</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="team" ref="team" type="text" />
                            <label htmlFor="team">Strength:</label>
                        </div>


                    </div>
                    <button className="btn waves-effect waves-light" type="submit"
                    nme="action">Add player</button>
                </form>
            </div>
        );
    }
}
export default PlayerForm;