import MainController from "./MainController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    @property(MainController)
    mainController:MainController;
    @property(cc.Node)
    crossBtn:cc.Node=null;
    @property(cc.Node)
    ZeroBtn:cc.Node= null;

    
    
    

    onLoad () {
        this.mainController= this.node.getComponent(MainController);
        
    }

   choosenZero(){
    // console.log("qwertyui")
    // var name  = parseInt(+(Math.random()*10),10);
     var name=Math.floor(Math.random()*9)
    console.log(name)
    const name1=[0,1,2,3,4,5,6,7,8]
    if( name in name1){
        if(name===0){
            this.crossBtn.active=true
            this.mainController.setSpriteX(0);
            if(this.mainController.writeO[0].active===true){
                this.mainController.writeX[0].active=false;
                this.choosenZero();
            }
        }
        if(name===2){
            this.crossBtn.active=true
            this.mainController.setSpriteX(2);
            if(this.mainController.writeO[2].active===true){
                this.mainController.writeX[2].active=false;
                this.choosenZero();
            }
        }
        if(name===1){
            this.crossBtn.active=true
            this.mainController.setSpriteX(1);
            if(this.mainController.writeO[1].active===true){
                this.mainController.writeX[1].active=false;
                this.choosenZero();
            }
        }
        if(name==3){
            this.crossBtn.active=true
            this.mainController.setSpriteX(3);
            if(this.mainController.writeO[4].active===true){
                this.mainController.writeX[3].active=false;
                this.choosenZero();
            }
        }
        if(name===4){
            this.crossBtn.active=true
            this.mainController.setSpriteX(4);
            if(this.mainController.writeO[3].active===true){
                this.mainController.writeX[3].active=false
                this.choosenZero();
            }
        }
        if(name===5){
            this.crossBtn.active=true
            this.mainController.setSpriteX(5);
            if(this.mainController.writeO[5].active===true){
                this.mainController.writeX[5].active=false
                this.choosenZero();
            }
        }
        if(name===6){
            this.crossBtn.active=true
            this.mainController.setSpriteX(6);
            if(this.mainController.writeO[7].active===true){
                this.mainController.writeX[6].active=false
                this.choosenZero();
            }
        }
        if(name===7){
            this.crossBtn.active=true
            this.mainController.setSpriteX(7);
            if(this.mainController.writeO[8].active===true){
                this.mainController.writeX[7].active=false
                this.choosenZero();
            }
        }
        if(name===8){
            this.crossBtn.active=true
            this.mainController.setSpriteX(8);
            if(this.mainController.writeO[6].active===true){
                this.mainController.writeX[8].active=false
                this.choosenZero();
            }
        }
        this.crossBtn.active=false
        name1.pop();
        console.log(name1.pop())

    }     
    

   }
    choosenCross(){
        var name=Math.floor(Math.random()*9)
        console.log(name)
        const name1=[0,1,2,3,4,5,6,7,8]
        if( name in name1){
            if(name===0){
                this.ZeroBtn.active=true
                this.mainController.setSpriteO(0)
                if(this.mainController.writeX[0].active===true){
                    this.mainController.writeO[0].active=false;
                    this.choosenCross();
                }
            }
            if(name===2){
                this.ZeroBtn.active=true
                this.mainController.setSpriteO(2)
                if(this.mainController.writeX[2].active===true){
                    this.mainController.writeO[2].active=false;
                    this.choosenCross();
                }
            }
            if(name===1){
                this.ZeroBtn.active=true
                this.mainController.setSpriteO(1)
                if(this.mainController.writeX[1].active===true){
                    this.mainController.writeO[1].active=false;
                    this.choosenCross();
                }
            }
            if(name==3){
                this.ZeroBtn.active=true
                this.mainController.setSpriteO(3)
                if(this.mainController.writeX[4].active===true){
                    this.mainController.writeO[3].active=false;
                    this.choosenCross();
                }
            }
            if(name===4){
                this.ZeroBtn.active=true
                this.mainController.setSpriteO(4)
                if(this.mainController.writeX[3].active===true){
                    this.mainController.writeO[4].active=false
                    this.choosenCross();
                }
            }
            if(name===5){
                this.ZeroBtn.active=true
                this.mainController.setSpriteO(5)
                if(this.mainController.writeX[5].active===true){
                    this.mainController.writeO[5].active=false
                    this.choosenCross();
                }
            }
            if(name===6){
                this.ZeroBtn.active=true
                this.mainController.setSpriteO(6)
                if(this.mainController.writeX[8].active===true){
                    this.mainController.writeO[6].active=false
                    this.choosenCross();
                }
            }
            if(name===7){
                this.ZeroBtn.active=true
                this.mainController.setSpriteO(7)
                if(this.mainController.writeX[6].active===true){
                    this.mainController.writeO[7].active=false
                    this.choosenCross();
                }
            }
            if(name===8){
                this.ZeroBtn.active=true
                this.mainController.setSpriteO(8)
                if(this.mainController.writeX[7].active===true){
                    this.mainController.writeO[8].active=false
                    this.choosenCross();
                }
            }
            this.ZeroBtn.active=false
            name1.pop();
            console.log(name1.pop())
    

    }
}
}