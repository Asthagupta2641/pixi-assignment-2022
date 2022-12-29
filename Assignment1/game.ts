import {Application } from "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/6.5.2/browser/pixi.mjs";
// import { start as gameStart} from "./js/game.mjs";
// import { loadAssets } from "./js/loader.mjs";

export function createGame(div) {
    const game = new Application({
        width:innerWidth,
        height:innerHeight,
        
       
        
        //backgroundColor:0x2266FF,
        backgroundColor:0x27DDE4,
        //resizeTo: div
    });
    // game.x=800;
    console.log('game', game);
    div.appendChild(game.view);
    return game;
    
}
