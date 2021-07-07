import { addNewPlayer } from '../controller/playerControllers';

const routes = (app) => {
    app.route('players')

    //Post endpoint this is the post end point
    .post(addNewPlayer);
}

export default routes;