import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerList from './Components/Player/PlayerList';
import PlayerForm from './Components/Player/PlayerForm';
import PlayerSingle from './Components/Player/PlayerSingle';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {},
    }
    //inicialitation for the update of my player
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }
  componentDidMount() {
    //the api or the URL of the localhost
    const url = 'http:localhost:4000/players';
    axios.get(url)
    .then((Response)=> {
      this.setState({
        // to set the data for be display in the browser
        players: Response.data
      })
    })
    // to catch the error 
    .catch((error) => {
      console.log('please let me know the error')
    })
  }

  updateCurrentPlayer (item){
    this.setState({
      currentPlayer:item,
    })
  }
  render () {
    return (
      <div className="container-fluid">
        <div className ="row">
          <nav>
            <div className="nav-wrapper blue darken-1">
              <a href="/" className ="brand-logo">Soccer Management</a>
            </div>
          </nav>
  
        </div>
        <div className="row">
          <div className="col s3"><PlayerList players={this.state.players}
          updateCurrentPlayer={this.updateCurrentPlayer}/>
          </div>
          <div className="col s9"><PlayerSingle player={this.state.currentPlayer}/></div>
        </div>
        <div className="row">
          <div className ="col s12"><PlayerForm/></div>
        </div>
     
      </div>
    );
  }
  }

export default App;
