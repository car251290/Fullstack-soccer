import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModel';

const Player = mongoose.model('player', PlayerSchema);

export const addNewPlayer = (req, res) => {
    const newPlayer = new Player(req.body);

    newPlayer.save((err,Player) => {
        if(err) {
            res.send(err)  
        }
        res.json(Player);
    });
};
// the get request  for the player
// check the req to the database
export const getPlayers = (req, res) => {
    Player.find({},(err, Player) => {
        if(err) {
            res.send(err)  
        }
        res.json(Player);
    });
};
//Get the id of the player.
export const getPlayerWithId = (req,res) => {
    Player.findById(req.params.PlayerId,(err,Player) => {
        if(err){
            res.send(err)
        }
        res.json(Player)
    });
}
//Put method for the player
export const UpdatePlayer = (req,res) => {
    Player.findOneAndUpdate({ _id: req.params.PlayerId},req.body,{new:true},(err,Player) => {

        if(err){
            res.send(err)
        }
        res.json(Player)
    });
}

//to get the id of a specific player
export const delatePlayer = (req,res) => {
    Player.remove({ _id: req.params.PlayerId},(err,Player) => {
        if(err){
            res.send(err)
        }
        res.json(message(`successfully delated player`))
    });
}