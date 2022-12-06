
const {ccclass, property} = cc._decorator;

@ccclass
export default class WriteXcontroller extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Node)
    writeX:cc.Node[]=[];


    onLoad () {
        
        // for(let child of this.writeX)
        //  {
        //     child.active=false;
        //  }

    }

    start () {

    }

    // update (dt) {}
}
