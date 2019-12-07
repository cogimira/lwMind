import graphMind from './graph-mind';

class WorldTime {
    constructor(){
        this._targetTickSet = new Set();
        this._targetTickSet.add(graphMind);
    }
    addTickTarget(target){
        this._targetTickSet.add(target);
    }

    deleteTickTarget(target){
        this._targetTickSet.delete(target); 
    }
    tick(scale){
        // console.log(1);
        this._targetTickSet.forEach((target) => {
            if(target.tick &&  typeof target.tick === "function") {
                target.tick(scale);
            }
        });
    }
}

export default new WorldTime();