import GameManager from "./GameManager";
import { EventEmitter } from "./EventEmitter";

const {ccclass, property} = cc._decorator;
@ccclass
export default class MainController extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    @property(cc.Node)
    endMenu:cc.Node= null;
    @property(cc.Node)
    startMenu:cc.Node= null;
    @property(cc.Node)
    writeO:cc.Node[]=[];
    @property(cc.Node)
    writeX:cc.Node[]=[];
    @property(cc.Node)
    activeZeroBtn:cc.Node=null;
    @property(cc.Node)
    activeCrossBtn:cc.Node=null;
    @property(cc.Label)
    winner:cc.Label=null;

    gameManager:GameManager;
    // gameStatus:GAMESTATUS=GAMESTATUS.GAMEREADY

    onLoad () {
        this.gameManager=this.node.getComponent(GameManager);
        this.endMenu.active=false;
        this.startMenu.active=true;
        this.activeZeroBtn.active=false;
        this.activeCrossBtn.active=false;
        for(let child of this.writeX)
        {
           child.active=false;
        }
        for(let child of this.writeO)
        {
           child.active=false;
        }
    }
    onClickPlayerZero(){
        this.startMenu.active=false;
        this.activeZeroBtn.active=true;
        this.activeCrossBtn.active=false;
    }
    onClickPlayerCross(){
        this.startMenu.active=false;
        this.activeCrossBtn.active=true;
        this.activeZeroBtn.active=false;
    }
    onClickAllZero(event,CustomEventData:number){
        var BtnZero = this.writeO[CustomEventData].active=true;
        this.checkZero();
        this.gameManager.choosenZero();
    }
    onClickAllCross(event,CustomEventData:number){
        var BtnCross = this.writeX[CustomEventData].active=true;
        this.checkCross();
        this.gameManager.choosenCross();
    }
    setSpriteX(n:number){
        let spriteFrame = this.writeX[n].active=true;
        this.checkCross();
    }
    setSpriteO(n:number){
        let spriteFrame = this.writeO[n].active=true;
        this.checkZero();
    }
    checkZero(){
         if(
            (this.writeO[6].active===true && this.writeO[2].active===true && this.writeO[8].active===true )
            || (this.writeO[4].active===true && this.writeO[0].active===true && this.writeO[3].active===true )
            || (this.writeO[5].active===true && this.writeO[1].active===true && this.writeO[7].active===true )
            || (this.writeO[6].active===true && this.writeO[4].active===true && this.writeO[5].active===true)
            ||( this.writeO[2].active===true && this.writeO[0].active===true && this.writeO[1].active===true) 
            || (this.writeO[8].active===true && this.writeO[3].active===true && this.writeO[7].active===true )
            || (this.writeO[6].active===true && this.writeO[0].active===true && this.writeO[7].active===true)
            || (this.writeO[8].active===true && this.writeO[0].active===true && this.writeO[5].active===true )
            )
        this.GameOverZero();
        

    }
    checkCross(){
         if((this.writeX[8].active===true && this.writeX[3].active===true && this.writeX[5].active===true )
            || (this.writeX[2].active===true && this.writeX[0].active===true && this.writeX[1].active===true) 
            || (this.writeX[7].active===true && this.writeX[4].active===true && this.writeX[6].active===true) 
            || (this.writeX[8].active===true && this.writeX[2].active===true && this.writeX[7].active===true)
            || (this.writeX[3].active===true && this.writeX[0].active===true && this.writeX[4].active===true) 
            || (this.writeX[5].active===true && this.writeX[1].active===true && this.writeX[6].active===true) 
            ||( this.writeX[8].active===true && this.writeX[0].active===true && this.writeX[6].active===true)
            || (this.writeX[7].active===true && this.writeX[5].active===true && this.writeX[0].active===true) )
           this.GameOverCross();
           

    }
    GameOverZero(){
        this.endMenu.active=true;
        console.log("qwertyuiop")
        this.activeCrossBtn.active=false
        this.activeZeroBtn.active=false
        this.winner.string="Player Zero";

    }
    GameOverCross(){
        this.endMenu.active=true;
        console.log("qwertyuiop")
        this.activeCrossBtn.active=false
        this.activeZeroBtn.active=false
        this.winner.string="Player Cross";


    }
    onClickAgainPlaybtn(){
        cc.director.loadScene("ZeroCross");
    }

}

