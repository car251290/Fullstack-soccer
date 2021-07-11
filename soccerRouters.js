import { addNewPlayer,delatePlayer,getPlayers
    , getPlayerWithId
    , UpdatePlayer} from '../controller/playerControllers';

const routes = (app) => {
    app.route('players')
    //router getPlayers
    .get(getPlayers)
    //Post endpoint this is the post end point
    .post(addNewPlayer);
    //new route for the IDplayer 
    app.route('/player/:PlayerId')
    //this is to get an specific player
    .get(getPlayerWithId)
    //this is to get an specific player
    .put(UpdatePlayer)
    //for the delate of the player
    .delate(delatePlayer)
}

export default routes;
