import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModel';

const Player = mongoose.model('player', PlayerSchema);

export const addNewPlayer = (req,res) => {
    const newPlayer = new Player(req.body);

    newPlayer.save((err,Player) => {
        if(err){
            res.send(err)
            
        }
        res.json(Player);
    });
};

