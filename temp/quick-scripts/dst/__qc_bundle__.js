
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/EventEmitter');
require('./assets/Scripts/GameManager');
require('./assets/Scripts/MainController');
require('./assets/Scripts/WriteXcontroller');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MainController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0dcee5iONAsY9zLZQMpTWn', 'MainController');
// Scripts/MainController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameManager_1 = require("./GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainController = /** @class */ (function (_super) {
    __extends(MainController, _super);
    function MainController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.endMenu = null;
        _this.startMenu = null;
        _this.writeO = [];
        _this.writeX = [];
        _this.activeZeroBtn = null;
        _this.activeCrossBtn = null;
        _this.winner = null;
        return _this;
    }
    // gameStatus:GAMESTATUS=GAMESTATUS.GAMEREADY
    MainController.prototype.onLoad = function () {
        this.gameManager = this.node.getComponent(GameManager_1.default);
        this.endMenu.active = false;
        this.startMenu.active = true;
        this.activeZeroBtn.active = false;
        this.activeCrossBtn.active = false;
        for (var _i = 0, _a = this.writeX; _i < _a.length; _i++) {
            var child = _a[_i];
            child.active = false;
        }
        for (var _b = 0, _c = this.writeO; _b < _c.length; _b++) {
            var child = _c[_b];
            child.active = false;
        }
    };
    MainController.prototype.onClickPlayerZero = function () {
        this.startMenu.active = false;
        this.activeZeroBtn.active = true;
        this.activeCrossBtn.active = false;
    };
    MainController.prototype.onClickPlayerCross = function () {
        this.startMenu.active = false;
        this.activeCrossBtn.active = true;
        this.activeZeroBtn.active = false;
    };
    MainController.prototype.onClickAllZero = function (event, CustomEventData) {
        var BtnZero = this.writeO[CustomEventData].active = true;
        this.checkZero();
        this.gameManager.choosenZero();
    };
    MainController.prototype.onClickAllCross = function (event, CustomEventData) {
        var BtnCross = this.writeX[CustomEventData].active = true;
        this.checkCross();
        this.gameManager.choosenCross();
    };
    MainController.prototype.setSpriteX = function (n) {
        var spriteFrame = this.writeX[n].active = true;
        this.checkCross();
    };
    MainController.prototype.setSpriteO = function (n) {
        var spriteFrame = this.writeO[n].active = true;
        this.checkZero();
    };
    MainController.prototype.checkZero = function () {
        if ((this.writeO[6].active === true && this.writeO[2].active === true && this.writeO[8].active === true)
            || (this.writeO[4].active === true && this.writeO[0].active === true && this.writeO[3].active === true)
            || (this.writeO[5].active === true && this.writeO[1].active === true && this.writeO[7].active === true)
            || (this.writeO[6].active === true && this.writeO[4].active === true && this.writeO[5].active === true)
            || (this.writeO[2].active === true && this.writeO[0].active === true && this.writeO[1].active === true)
            || (this.writeO[8].active === true && this.writeO[3].active === true && this.writeO[7].active === true)
            || (this.writeO[6].active === true && this.writeO[0].active === true && this.writeO[7].active === true)
            || (this.writeO[8].active === true && this.writeO[0].active === true && this.writeO[5].active === true))
            this.GameOverZero();
    };
    MainController.prototype.checkCross = function () {
        if ((this.writeX[8].active === true && this.writeX[3].active === true && this.writeX[5].active === true)
            || (this.writeX[2].active === true && this.writeX[0].active === true && this.writeX[1].active === true)
            || (this.writeX[7].active === true && this.writeX[4].active === true && this.writeX[6].active === true)
            || (this.writeX[8].active === true && this.writeX[2].active === true && this.writeX[7].active === true)
            || (this.writeX[3].active === true && this.writeX[0].active === true && this.writeX[4].active === true)
            || (this.writeX[5].active === true && this.writeX[1].active === true && this.writeX[6].active === true)
            || (this.writeX[8].active === true && this.writeX[0].active === true && this.writeX[6].active === true)
            || (this.writeX[7].active === true && this.writeX[5].active === true && this.writeX[0].active === true))
            this.GameOverCross();
    };
    MainController.prototype.GameOverZero = function () {
        this.endMenu.active = true;
        console.log("qwertyuiop");
        this.activeCrossBtn.active = false;
        this.activeZeroBtn.active = false;
        this.winner.string = "Player Zero";
    };
    MainController.prototype.GameOverCross = function () {
        this.endMenu.active = true;
        console.log("qwertyuiop");
        this.activeCrossBtn.active = false;
        this.activeZeroBtn.active = false;
        this.winner.string = "Player Cross";
    };
    MainController.prototype.onClickAgainPlaybtn = function () {
        cc.director.loadScene("ZeroCross");
    };
    __decorate([
        property(cc.Label)
    ], MainController.prototype, "label", void 0);
    __decorate([
        property
    ], MainController.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], MainController.prototype, "endMenu", void 0);
    __decorate([
        property(cc.Node)
    ], MainController.prototype, "startMenu", void 0);
    __decorate([
        property(cc.Node)
    ], MainController.prototype, "writeO", void 0);
    __decorate([
        property(cc.Node)
    ], MainController.prototype, "writeX", void 0);
    __decorate([
        property(cc.Node)
    ], MainController.prototype, "activeZeroBtn", void 0);
    __decorate([
        property(cc.Node)
    ], MainController.prototype, "activeCrossBtn", void 0);
    __decorate([
        property(cc.Label)
    ], MainController.prototype, "winner", void 0);
    MainController = __decorate([
        ccclass
    ], MainController);
    return MainController;
}(cc.Component));
exports.default = MainController;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTWFpbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBR2xDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBcUhDO1FBbEhHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUV2QixhQUFPLEdBQVUsSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBVSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUVwQixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBRXBCLG1CQUFhLEdBQVMsSUFBSSxDQUFDO1FBRTNCLG9CQUFjLEdBQVMsSUFBSSxDQUFDO1FBRTVCLFlBQU0sR0FBVSxJQUFJLENBQUM7O0lBaUd6QixDQUFDO0lBOUZHLDZDQUE2QztJQUU3QywrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO1FBQ2pDLEtBQWlCLFVBQVcsRUFBWCxLQUFBLElBQUksQ0FBQyxNQUFNLEVBQVgsY0FBVyxFQUFYLElBQVcsRUFDNUI7WUFESSxJQUFJLEtBQUssU0FBQTtZQUVWLEtBQUssQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO1NBQ3JCO1FBQ0QsS0FBaUIsVUFBVyxFQUFYLEtBQUEsSUFBSSxDQUFDLE1BQU0sRUFBWCxjQUFXLEVBQVgsSUFBVyxFQUM1QjtZQURJLElBQUksS0FBSyxTQUFBO1lBRVYsS0FBSyxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBQ0QsMENBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUNELDJDQUFrQixHQUFsQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFDRCx1Q0FBYyxHQUFkLFVBQWUsS0FBSyxFQUFDLGVBQXNCO1FBQ3ZDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsd0NBQWUsR0FBZixVQUFnQixLQUFLLEVBQUMsZUFBc0I7UUFDeEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFDRCxtQ0FBVSxHQUFWLFVBQVcsQ0FBUTtRQUNmLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNELG1DQUFVLEdBQVYsVUFBVyxDQUFRO1FBQ2YsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0Qsa0NBQVMsR0FBVDtRQUNLLElBQ0csQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFHLElBQUksQ0FBRTtlQUM1RixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUcsSUFBSSxDQUFFO2VBQy9GLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBRyxJQUFJLENBQUU7ZUFDL0YsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFHLElBQUksQ0FBQztlQUMvRixDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUcsSUFBSSxDQUFDO2VBQzlGLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBRyxJQUFJLENBQUU7ZUFDL0YsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFHLElBQUksQ0FBQztlQUM5RixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUcsSUFBSSxDQUFFO1lBRXRHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUd4QixDQUFDO0lBQ0QsbUNBQVUsR0FBVjtRQUNLLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFHLElBQUksQ0FBRTtlQUM1RixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUcsSUFBSSxDQUFDO2VBQzlGLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBRyxJQUFJLENBQUM7ZUFDOUYsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFHLElBQUksQ0FBQztlQUM5RixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUcsSUFBSSxDQUFDO2VBQzlGLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBRyxJQUFJLENBQUM7ZUFDL0YsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFHLElBQUksQ0FBQztlQUM5RixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUcsSUFBSSxDQUFDO1lBQ2xHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUc1QixDQUFDO0lBQ0QscUNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQTtRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUE7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsYUFBYSxDQUFDO0lBRXJDLENBQUM7SUFDRCxzQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFBO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQTtRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxjQUFjLENBQUM7SUFHdEMsQ0FBQztJQUNELDRDQUFtQixHQUFuQjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFoSEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDSTtJQUd2QjtRQURDLFFBQVE7Z0RBQ2M7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDRTtJQXBCSixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBcUhsQztJQUFELHFCQUFDO0NBckhELEFBcUhDLENBckgyQyxFQUFFLENBQUMsU0FBUyxHQXFIdkQ7a0JBckhvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL0dhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuL0V2ZW50RW1pdHRlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Db250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kTWVudTpjYy5Ob2RlPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzdGFydE1lbnU6Y2MuTm9kZT0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd3JpdGVPOmNjLk5vZGVbXT1bXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd3JpdGVYOmNjLk5vZGVbXT1bXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYWN0aXZlWmVyb0J0bjpjYy5Ob2RlPW51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFjdGl2ZUNyb3NzQnRuOmNjLk5vZGU9bnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHdpbm5lcjpjYy5MYWJlbD1udWxsO1xyXG5cclxuICAgIGdhbWVNYW5hZ2VyOkdhbWVNYW5hZ2VyO1xyXG4gICAgLy8gZ2FtZVN0YXR1czpHQU1FU1RBVFVTPUdBTUVTVEFUVVMuR0FNRVJFQURZXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyPXRoaXMubm9kZS5nZXRDb21wb25lbnQoR2FtZU1hbmFnZXIpO1xyXG4gICAgICAgIHRoaXMuZW5kTWVudS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGFydE1lbnUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVaZXJvQnRuLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUNyb3NzQnRuLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICBmb3IobGV0IGNoaWxkIG9mIHRoaXMud3JpdGVYKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICBjaGlsZC5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgY2hpbGQgb2YgdGhpcy53cml0ZU8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIGNoaWxkLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrUGxheWVyWmVybygpe1xyXG4gICAgICAgIHRoaXMuc3RhcnRNZW51LmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICB0aGlzLmFjdGl2ZVplcm9CdG4uYWN0aXZlPXRydWU7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVDcm9zc0J0bi5hY3RpdmU9ZmFsc2U7XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrUGxheWVyQ3Jvc3MoKXtcclxuICAgICAgICB0aGlzLnN0YXJ0TWVudS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVDcm9zc0J0bi5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICB0aGlzLmFjdGl2ZVplcm9CdG4uYWN0aXZlPWZhbHNlO1xyXG4gICAgfVxyXG4gICAgb25DbGlja0FsbFplcm8oZXZlbnQsQ3VzdG9tRXZlbnREYXRhOm51bWJlcil7XHJcbiAgICAgICAgdmFyIEJ0blplcm8gPSB0aGlzLndyaXRlT1tDdXN0b21FdmVudERhdGFdLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIHRoaXMuY2hlY2taZXJvKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5jaG9vc2VuWmVybygpO1xyXG4gICAgfVxyXG4gICAgb25DbGlja0FsbENyb3NzKGV2ZW50LEN1c3RvbUV2ZW50RGF0YTpudW1iZXIpe1xyXG4gICAgICAgIHZhciBCdG5Dcm9zcyA9IHRoaXMud3JpdGVYW0N1c3RvbUV2ZW50RGF0YV0uYWN0aXZlPXRydWU7XHJcbiAgICAgICAgdGhpcy5jaGVja0Nyb3NzKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlci5jaG9vc2VuQ3Jvc3MoKTtcclxuICAgIH1cclxuICAgIHNldFNwcml0ZVgobjpudW1iZXIpe1xyXG4gICAgICAgIGxldCBzcHJpdGVGcmFtZSA9IHRoaXMud3JpdGVYW25dLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIHRoaXMuY2hlY2tDcm9zcygpO1xyXG4gICAgfVxyXG4gICAgc2V0U3ByaXRlTyhuOm51bWJlcil7XHJcbiAgICAgICAgbGV0IHNwcml0ZUZyYW1lID0gdGhpcy53cml0ZU9bbl0uYWN0aXZlPXRydWU7XHJcbiAgICAgICAgdGhpcy5jaGVja1plcm8oKTtcclxuICAgIH1cclxuICAgIGNoZWNrWmVybygpe1xyXG4gICAgICAgICBpZihcclxuICAgICAgICAgICAgKHRoaXMud3JpdGVPWzZdLmFjdGl2ZT09PXRydWUgJiYgdGhpcy53cml0ZU9bMl0uYWN0aXZlPT09dHJ1ZSAmJiB0aGlzLndyaXRlT1s4XS5hY3RpdmU9PT10cnVlIClcclxuICAgICAgICAgICAgfHwgKHRoaXMud3JpdGVPWzRdLmFjdGl2ZT09PXRydWUgJiYgdGhpcy53cml0ZU9bMF0uYWN0aXZlPT09dHJ1ZSAmJiB0aGlzLndyaXRlT1szXS5hY3RpdmU9PT10cnVlIClcclxuICAgICAgICAgICAgfHwgKHRoaXMud3JpdGVPWzVdLmFjdGl2ZT09PXRydWUgJiYgdGhpcy53cml0ZU9bMV0uYWN0aXZlPT09dHJ1ZSAmJiB0aGlzLndyaXRlT1s3XS5hY3RpdmU9PT10cnVlIClcclxuICAgICAgICAgICAgfHwgKHRoaXMud3JpdGVPWzZdLmFjdGl2ZT09PXRydWUgJiYgdGhpcy53cml0ZU9bNF0uYWN0aXZlPT09dHJ1ZSAmJiB0aGlzLndyaXRlT1s1XS5hY3RpdmU9PT10cnVlKVxyXG4gICAgICAgICAgICB8fCggdGhpcy53cml0ZU9bMl0uYWN0aXZlPT09dHJ1ZSAmJiB0aGlzLndyaXRlT1swXS5hY3RpdmU9PT10cnVlICYmIHRoaXMud3JpdGVPWzFdLmFjdGl2ZT09PXRydWUpIFxyXG4gICAgICAgICAgICB8fCAodGhpcy53cml0ZU9bOF0uYWN0aXZlPT09dHJ1ZSAmJiB0aGlzLndyaXRlT1szXS5hY3RpdmU9PT10cnVlICYmIHRoaXMud3JpdGVPWzddLmFjdGl2ZT09PXRydWUgKVxyXG4gICAgICAgICAgICB8fCAodGhpcy53cml0ZU9bNl0uYWN0aXZlPT09dHJ1ZSAmJiB0aGlzLndyaXRlT1swXS5hY3RpdmU9PT10cnVlICYmIHRoaXMud3JpdGVPWzddLmFjdGl2ZT09PXRydWUpXHJcbiAgICAgICAgICAgIHx8ICh0aGlzLndyaXRlT1s4XS5hY3RpdmU9PT10cnVlICYmIHRoaXMud3JpdGVPWzBdLmFjdGl2ZT09PXRydWUgJiYgdGhpcy53cml0ZU9bNV0uYWN0aXZlPT09dHJ1ZSApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB0aGlzLkdhbWVPdmVyWmVybygpO1xyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuICAgIGNoZWNrQ3Jvc3MoKXtcclxuICAgICAgICAgaWYoKHRoaXMud3JpdGVYWzhdLmFjdGl2ZT09PXRydWUgJiYgdGhpcy53cml0ZVhbM10uYWN0aXZlPT09dHJ1ZSAmJiB0aGlzLndyaXRlWFs1XS5hY3RpdmU9PT10cnVlIClcclxuICAgICAgICAgICAgfHwgKHRoaXMud3JpdGVYWzJdLmFjdGl2ZT09PXRydWUgJiYgdGhpcy53cml0ZVhbMF0uYWN0aXZlPT09dHJ1ZSAmJiB0aGlzLndyaXRlWFsxXS5hY3RpdmU9PT10cnVlKSBcclxuICAgICAgICAgICAgfHwgKHRoaXMud3JpdGVYWzddLmFjdGl2ZT09PXRydWUgJiYgdGhpcy53cml0ZVhbNF0uYWN0aXZlPT09dHJ1ZSAmJiB0aGlzLndyaXRlWFs2XS5hY3RpdmU9PT10cnVlKSBcclxuICAgICAgICAgICAgfHwgKHRoaXMud3JpdGVYWzhdLmFjdGl2ZT09PXRydWUgJiYgdGhpcy53cml0ZVhbMl0uYWN0aXZlPT09dHJ1ZSAmJiB0aGlzLndyaXRlWFs3XS5hY3RpdmU9PT10cnVlKVxyXG4gICAgICAgICAgICB8fCAodGhpcy53cml0ZVhbM10uYWN0aXZlPT09dHJ1ZSAmJiB0aGlzLndyaXRlWFswXS5hY3RpdmU9PT10cnVlICYmIHRoaXMud3JpdGVYWzRdLmFjdGl2ZT09PXRydWUpIFxyXG4gICAgICAgICAgICB8fCAodGhpcy53cml0ZVhbNV0uYWN0aXZlPT09dHJ1ZSAmJiB0aGlzLndyaXRlWFsxXS5hY3RpdmU9PT10cnVlICYmIHRoaXMud3JpdGVYWzZdLmFjdGl2ZT09PXRydWUpIFxyXG4gICAgICAgICAgICB8fCggdGhpcy53cml0ZVhbOF0uYWN0aXZlPT09dHJ1ZSAmJiB0aGlzLndyaXRlWFswXS5hY3RpdmU9PT10cnVlICYmIHRoaXMud3JpdGVYWzZdLmFjdGl2ZT09PXRydWUpXHJcbiAgICAgICAgICAgIHx8ICh0aGlzLndyaXRlWFs3XS5hY3RpdmU9PT10cnVlICYmIHRoaXMud3JpdGVYWzVdLmFjdGl2ZT09PXRydWUgJiYgdGhpcy53cml0ZVhbMF0uYWN0aXZlPT09dHJ1ZSkgKVxyXG4gICAgICAgICAgIHRoaXMuR2FtZU92ZXJDcm9zcygpO1xyXG4gICAgICAgICAgIFxyXG5cclxuICAgIH1cclxuICAgIEdhbWVPdmVyWmVybygpe1xyXG4gICAgICAgIHRoaXMuZW5kTWVudS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInF3ZXJ0eXVpb3BcIilcclxuICAgICAgICB0aGlzLmFjdGl2ZUNyb3NzQnRuLmFjdGl2ZT1mYWxzZVxyXG4gICAgICAgIHRoaXMuYWN0aXZlWmVyb0J0bi5hY3RpdmU9ZmFsc2VcclxuICAgICAgICB0aGlzLndpbm5lci5zdHJpbmc9XCJQbGF5ZXIgWmVyb1wiO1xyXG5cclxuICAgIH1cclxuICAgIEdhbWVPdmVyQ3Jvc3MoKXtcclxuICAgICAgICB0aGlzLmVuZE1lbnUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJxd2VydHl1aW9wXCIpXHJcbiAgICAgICAgdGhpcy5hY3RpdmVDcm9zc0J0bi5hY3RpdmU9ZmFsc2VcclxuICAgICAgICB0aGlzLmFjdGl2ZVplcm9CdG4uYWN0aXZlPWZhbHNlXHJcbiAgICAgICAgdGhpcy53aW5uZXIuc3RyaW5nPVwiUGxheWVyIENyb3NzXCI7XHJcblxyXG5cclxuICAgIH1cclxuICAgIG9uQ2xpY2tBZ2FpblBsYXlidG4oKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJaZXJvQ3Jvc3NcIik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/WriteXcontroller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a9de5YT4VFFp7KzJI4O+wM', 'WriteXcontroller');
// Scripts/WriteXcontroller.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WriteXcontroller = /** @class */ (function (_super) {
    __extends(WriteXcontroller, _super);
    function WriteXcontroller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.writeX = [];
        return _this;
        // update (dt) {}
    }
    WriteXcontroller.prototype.onLoad = function () {
        // for(let child of this.writeX)
        //  {
        //     child.active=false;
        //  }
    };
    WriteXcontroller.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], WriteXcontroller.prototype, "label", void 0);
    __decorate([
        property
    ], WriteXcontroller.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], WriteXcontroller.prototype, "writeX", void 0);
    WriteXcontroller = __decorate([
        ccclass
    ], WriteXcontroller);
    return WriteXcontroller;
}(cc.Component));
exports.default = WriteXcontroller;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcV3JpdGVYY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQTBCQztRQXZCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFHdkIsWUFBTSxHQUFXLEVBQUUsQ0FBQzs7UUFnQnBCLGlCQUFpQjtJQUNyQixDQUFDO0lBZEcsaUNBQU0sR0FBTjtRQUVJLGdDQUFnQztRQUNoQyxLQUFLO1FBQ0wsMEJBQTBCO1FBQzFCLEtBQUs7SUFFVCxDQUFDO0lBRUQsZ0NBQUssR0FBTDtJQUVBLENBQUM7SUFwQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDSTtJQUd2QjtRQURDLFFBQVE7a0RBQ2M7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDRTtJQVRILGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBMEJwQztJQUFELHVCQUFDO0NBMUJELEFBMEJDLENBMUI2QyxFQUFFLENBQUMsU0FBUyxHQTBCekQ7a0JBMUJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXcml0ZVhjb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHdyaXRlWDpjYy5Ob2RlW109W107XHJcblxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZm9yKGxldCBjaGlsZCBvZiB0aGlzLndyaXRlWClcclxuICAgICAgICAvLyAge1xyXG4gICAgICAgIC8vICAgICBjaGlsZC5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgLy8gIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37100CoMxpBzbwcOQ5sjMRe', 'GameManager');
// Scripts/GameManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var MainController_1 = require("./MainController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.crossBtn = null;
        _this.ZeroBtn = null;
        return _this;
    }
    GameManager.prototype.onLoad = function () {
        this.mainController = this.node.getComponent(MainController_1.default);
    };
    GameManager.prototype.choosenZero = function () {
        // console.log("qwertyui")
        // var name  = parseInt(+(Math.random()*10),10);
        var name = Math.floor(Math.random() * 9);
        console.log(name);
        var name1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        if (name in name1) {
            if (name === 0) {
                this.crossBtn.active = true;
                this.mainController.setSpriteX(0);
                if (this.mainController.writeO[0].active === true) {
                    this.mainController.writeX[0].active = false;
                    this.choosenZero();
                }
            }
            if (name === 2) {
                this.crossBtn.active = true;
                this.mainController.setSpriteX(2);
                if (this.mainController.writeO[2].active === true) {
                    this.mainController.writeX[2].active = false;
                    this.choosenZero();
                }
            }
            if (name === 1) {
                this.crossBtn.active = true;
                this.mainController.setSpriteX(1);
                if (this.mainController.writeO[1].active === true) {
                    this.mainController.writeX[1].active = false;
                    this.choosenZero();
                }
            }
            if (name == 3) {
                this.crossBtn.active = true;
                this.mainController.setSpriteX(3);
                if (this.mainController.writeO[4].active === true) {
                    this.mainController.writeX[3].active = false;
                    this.choosenZero();
                }
            }
            if (name === 4) {
                this.crossBtn.active = true;
                this.mainController.setSpriteX(4);
                if (this.mainController.writeO[3].active === true) {
                    this.mainController.writeX[3].active = false;
                    this.choosenZero();
                }
            }
            if (name === 5) {
                this.crossBtn.active = true;
                this.mainController.setSpriteX(5);
                if (this.mainController.writeO[5].active === true) {
                    this.mainController.writeX[5].active = false;
                    this.choosenZero();
                }
            }
            if (name === 6) {
                this.crossBtn.active = true;
                this.mainController.setSpriteX(6);
                if (this.mainController.writeO[7].active === true) {
                    this.mainController.writeX[6].active = false;
                    this.choosenZero();
                }
            }
            if (name === 7) {
                this.crossBtn.active = true;
                this.mainController.setSpriteX(7);
                if (this.mainController.writeO[8].active === true) {
                    this.mainController.writeX[7].active = false;
                    this.choosenZero();
                }
            }
            if (name === 8) {
                this.crossBtn.active = true;
                this.mainController.setSpriteX(8);
                if (this.mainController.writeO[6].active === true) {
                    this.mainController.writeX[8].active = false;
                    this.choosenZero();
                }
            }
            this.crossBtn.active = false;
            name1.pop();
            console.log(name1.pop());
        }
    };
    GameManager.prototype.choosenCross = function () {
        var name = Math.floor(Math.random() * 9);
        console.log(name);
        var name1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        if (name in name1) {
            if (name === 0) {
                this.ZeroBtn.active = true;
                this.mainController.setSpriteO(0);
                if (this.mainController.writeX[0].active === true) {
                    this.mainController.writeO[0].active = false;
                    this.choosenCross();
                }
            }
            if (name === 2) {
                this.ZeroBtn.active = true;
                this.mainController.setSpriteO(2);
                if (this.mainController.writeX[2].active === true) {
                    this.mainController.writeO[2].active = false;
                    this.choosenCross();
                }
            }
            if (name === 1) {
                this.ZeroBtn.active = true;
                this.mainController.setSpriteO(1);
                if (this.mainController.writeX[1].active === true) {
                    this.mainController.writeO[1].active = false;
                    this.choosenCross();
                }
            }
            if (name == 3) {
                this.ZeroBtn.active = true;
                this.mainController.setSpriteO(3);
                if (this.mainController.writeX[4].active === true) {
                    this.mainController.writeO[3].active = false;
                    this.choosenCross();
                }
            }
            if (name === 4) {
                this.ZeroBtn.active = true;
                this.mainController.setSpriteO(4);
                if (this.mainController.writeX[3].active === true) {
                    this.mainController.writeO[4].active = false;
                    this.choosenCross();
                }
            }
            if (name === 5) {
                this.ZeroBtn.active = true;
                this.mainController.setSpriteO(5);
                if (this.mainController.writeX[5].active === true) {
                    this.mainController.writeO[5].active = false;
                    this.choosenCross();
                }
            }
            if (name === 6) {
                this.ZeroBtn.active = true;
                this.mainController.setSpriteO(6);
                if (this.mainController.writeX[8].active === true) {
                    this.mainController.writeO[6].active = false;
                    this.choosenCross();
                }
            }
            if (name === 7) {
                this.ZeroBtn.active = true;
                this.mainController.setSpriteO(7);
                if (this.mainController.writeX[6].active === true) {
                    this.mainController.writeO[7].active = false;
                    this.choosenCross();
                }
            }
            if (name === 8) {
                this.ZeroBtn.active = true;
                this.mainController.setSpriteO(8);
                if (this.mainController.writeX[7].active === true) {
                    this.mainController.writeO[8].active = false;
                    this.choosenCross();
                }
            }
            this.ZeroBtn.active = false;
            name1.pop();
            console.log(name1.pop());
        }
    };
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "label", void 0);
    __decorate([
        property
    ], GameManager.prototype, "text", void 0);
    __decorate([
        property(MainController_1.default)
    ], GameManager.prototype, "mainController", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "crossBtn", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "ZeroBtn", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBRXhDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBa01DO1FBL0xHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUl2QixjQUFRLEdBQVMsSUFBSSxDQUFDO1FBRXRCLGFBQU8sR0FBVSxJQUFJLENBQUM7O0lBc0wxQixDQUFDO0lBaExHLDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHdCQUFjLENBQUMsQ0FBQztJQUVoRSxDQUFDO0lBRUYsaUNBQVcsR0FBWDtRQUNDLDBCQUEwQjtRQUMxQixnREFBZ0Q7UUFDL0MsSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUE7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNqQixJQUFNLEtBQUssR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7UUFDL0IsSUFBSSxJQUFJLElBQUksS0FBSyxFQUFDO1lBQ2QsSUFBRyxJQUFJLEtBQUcsQ0FBQyxFQUFDO2dCQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQTtnQkFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xD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QjtRQURDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDO3VEQUNLO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSTtJQVpMLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FrTS9CO0lBQUQsa0JBQUM7Q0FsTUQsQUFrTUMsQ0FsTXdDLEVBQUUsQ0FBQyxTQUFTLEdBa01wRDtrQkFsTW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbkNvbnRyb2xsZXIgZnJvbSBcIi4vTWFpbkNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG4gICAgQHByb3BlcnR5KE1haW5Db250cm9sbGVyKVxyXG4gICAgbWFpbkNvbnRyb2xsZXI6TWFpbkNvbnRyb2xsZXI7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNyb3NzQnRuOmNjLk5vZGU9bnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgWmVyb0J0bjpjYy5Ob2RlPSBudWxsO1xyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMubWFpbkNvbnRyb2xsZXI9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoTWFpbkNvbnRyb2xsZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgY2hvb3Nlblplcm8oKXtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwicXdlcnR5dWlcIilcclxuICAgIC8vIHZhciBuYW1lICA9IHBhcnNlSW50KCsoTWF0aC5yYW5kb20oKSoxMCksMTApO1xyXG4gICAgIHZhciBuYW1lPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo5KVxyXG4gICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgIGNvbnN0IG5hbWUxPVswLDEsMiwzLDQsNSw2LDcsOF1cclxuICAgIGlmKCBuYW1lIGluIG5hbWUxKXtcclxuICAgICAgICBpZihuYW1lPT09MCl7XHJcbiAgICAgICAgICAgIHRoaXMuY3Jvc3NCdG4uYWN0aXZlPXRydWVcclxuICAgICAgICAgICAgdGhpcy5tYWluQ29udHJvbGxlci5zZXRTcHJpdGVYKDApO1xyXG4gICAgICAgICAgICBpZih0aGlzLm1haW5Db250cm9sbGVyLndyaXRlT1swXS5hY3RpdmU9PT10cnVlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkNvbnRyb2xsZXIud3JpdGVYWzBdLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hvb3Nlblplcm8oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihuYW1lPT09Mil7XHJcbiAgICAgICAgICAgIHRoaXMuY3Jvc3NCdG4uYWN0aXZlPXRydWVcclxuICAgICAgICAgICAgdGhpcy5tYWluQ29udHJvbGxlci5zZXRTcHJpdGVYKDIpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm1haW5Db250cm9sbGVyLndyaXRlT1syXS5hY3RpdmU9PT10cnVlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkNvbnRyb2xsZXIud3JpdGVYWzJdLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hvb3Nlblplcm8oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihuYW1lPT09MSl7XHJcbiAgICAgICAgICAgIHRoaXMuY3Jvc3NCdG4uYWN0aXZlPXRydWVcclxuICAgICAgICAgICAgdGhpcy5tYWluQ29udHJvbGxlci5zZXRTcHJpdGVYKDEpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm1haW5Db250cm9sbGVyLndyaXRlT1sxXS5hY3RpdmU9PT10cnVlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkNvbnRyb2xsZXIud3JpdGVYWzFdLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hvb3Nlblplcm8oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihuYW1lPT0zKXtcclxuICAgICAgICAgICAgdGhpcy5jcm9zc0J0bi5hY3RpdmU9dHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm1haW5Db250cm9sbGVyLnNldFNwcml0ZVgoMyk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubWFpbkNvbnRyb2xsZXIud3JpdGVPWzRdLmFjdGl2ZT09PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udHJvbGxlci53cml0ZVhbM10uYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VuWmVybygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG5hbWU9PT00KXtcclxuICAgICAgICAgICAgdGhpcy5jcm9zc0J0bi5hY3RpdmU9dHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm1haW5Db250cm9sbGVyLnNldFNwcml0ZVgoNCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubWFpbkNvbnRyb2xsZXIud3JpdGVPWzNdLmFjdGl2ZT09PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udHJvbGxlci53cml0ZVhbM10uYWN0aXZlPWZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNob29zZW5aZXJvKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobmFtZT09PTUpe1xyXG4gICAgICAgICAgICB0aGlzLmNyb3NzQnRuLmFjdGl2ZT10cnVlXHJcbiAgICAgICAgICAgIHRoaXMubWFpbkNvbnRyb2xsZXIuc2V0U3ByaXRlWCg1KTtcclxuICAgICAgICAgICAgaWYodGhpcy5tYWluQ29udHJvbGxlci53cml0ZU9bNV0uYWN0aXZlPT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250cm9sbGVyLndyaXRlWFs1XS5hY3RpdmU9ZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hvb3Nlblplcm8oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihuYW1lPT09Nil7XHJcbiAgICAgICAgICAgIHRoaXMuY3Jvc3NCdG4uYWN0aXZlPXRydWVcclxuICAgICAgICAgICAgdGhpcy5tYWluQ29udHJvbGxlci5zZXRTcHJpdGVYKDYpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm1haW5Db250cm9sbGVyLndyaXRlT1s3XS5hY3RpdmU9PT10cnVlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkNvbnRyb2xsZXIud3JpdGVYWzZdLmFjdGl2ZT1mYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VuWmVybygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG5hbWU9PT03KXtcclxuICAgICAgICAgICAgdGhpcy5jcm9zc0J0bi5hY3RpdmU9dHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm1haW5Db250cm9sbGVyLnNldFNwcml0ZVgoNyk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubWFpbkNvbnRyb2xsZXIud3JpdGVPWzhdLmFjdGl2ZT09PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udHJvbGxlci53cml0ZVhbN10uYWN0aXZlPWZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNob29zZW5aZXJvKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobmFtZT09PTgpe1xyXG4gICAgICAgICAgICB0aGlzLmNyb3NzQnRuLmFjdGl2ZT10cnVlXHJcbiAgICAgICAgICAgIHRoaXMubWFpbkNvbnRyb2xsZXIuc2V0U3ByaXRlWCg4KTtcclxuICAgICAgICAgICAgaWYodGhpcy5tYWluQ29udHJvbGxlci53cml0ZU9bNl0uYWN0aXZlPT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250cm9sbGVyLndyaXRlWFs4XS5hY3RpdmU9ZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hvb3Nlblplcm8oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyb3NzQnRuLmFjdGl2ZT1mYWxzZVxyXG4gICAgICAgIG5hbWUxLnBvcCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUxLnBvcCgpKVxyXG5cclxuICAgIH0gICAgIFxyXG4gICAgXHJcblxyXG4gICB9XHJcbiAgICBjaG9vc2VuQ3Jvc3MoKXtcclxuICAgICAgICB2YXIgbmFtZT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOSlcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lKVxyXG4gICAgICAgIGNvbnN0IG5hbWUxPVswLDEsMiwzLDQsNSw2LDcsOF1cclxuICAgICAgICBpZiggbmFtZSBpbiBuYW1lMSl7XHJcbiAgICAgICAgICAgIGlmKG5hbWU9PT0wKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuWmVyb0J0bi5hY3RpdmU9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udHJvbGxlci5zZXRTcHJpdGVPKDApXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLm1haW5Db250cm9sbGVyLndyaXRlWFswXS5hY3RpdmU9PT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250cm9sbGVyLndyaXRlT1swXS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VuQ3Jvc3MoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihuYW1lPT09Mil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlplcm9CdG4uYWN0aXZlPXRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkNvbnRyb2xsZXIuc2V0U3ByaXRlTygyKVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5tYWluQ29udHJvbGxlci53cml0ZVhbMl0uYWN0aXZlPT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udHJvbGxlci53cml0ZU9bMl0uYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hvb3NlbkNyb3NzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobmFtZT09PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5aZXJvQnRuLmFjdGl2ZT10cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250cm9sbGVyLnNldFNwcml0ZU8oMSlcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubWFpbkNvbnRyb2xsZXIud3JpdGVYWzFdLmFjdGl2ZT09PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbkNvbnRyb2xsZXIud3JpdGVPWzFdLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNob29zZW5Dcm9zcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG5hbWU9PTMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5aZXJvQnRuLmFjdGl2ZT10cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250cm9sbGVyLnNldFNwcml0ZU8oMylcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubWFpbkNvbnRyb2xsZXIud3JpdGVYWzRdLmFjdGl2ZT09PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbkNvbnRyb2xsZXIud3JpdGVPWzNdLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNob29zZW5Dcm9zcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG5hbWU9PT00KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuWmVyb0J0bi5hY3RpdmU9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udHJvbGxlci5zZXRTcHJpdGVPKDQpXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLm1haW5Db250cm9sbGVyLndyaXRlWFszXS5hY3RpdmU9PT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250cm9sbGVyLndyaXRlT1s0XS5hY3RpdmU9ZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNob29zZW5Dcm9zcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG5hbWU9PT01KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuWmVyb0J0bi5hY3RpdmU9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udHJvbGxlci5zZXRTcHJpdGVPKDUpXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLm1haW5Db250cm9sbGVyLndyaXRlWFs1XS5hY3RpdmU9PT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250cm9sbGVyLndyaXRlT1s1XS5hY3RpdmU9ZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNob29zZW5Dcm9zcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG5hbWU9PT02KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuWmVyb0J0bi5hY3RpdmU9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udHJvbGxlci5zZXRTcHJpdGVPKDYpXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLm1haW5Db250cm9sbGVyLndyaXRlWFs4XS5hY3RpdmU9PT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250cm9sbGVyLndyaXRlT1s2XS5hY3RpdmU9ZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNob29zZW5Dcm9zcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG5hbWU9PT03KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuWmVyb0J0bi5hY3RpdmU9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udHJvbGxlci5zZXRTcHJpdGVPKDcpXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLm1haW5Db250cm9sbGVyLndyaXRlWFs2XS5hY3RpdmU9PT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250cm9sbGVyLndyaXRlT1s3XS5hY3RpdmU9ZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNob29zZW5Dcm9zcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG5hbWU9PT04KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuWmVyb0J0bi5hY3RpdmU9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluQ29udHJvbGxlci5zZXRTcHJpdGVPKDgpXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLm1haW5Db250cm9sbGVyLndyaXRlWFs3XS5hY3RpdmU9PT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5Db250cm9sbGVyLndyaXRlT1s4XS5hY3RpdmU9ZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNob29zZW5Dcm9zcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuWmVyb0J0bi5hY3RpdmU9ZmFsc2VcclxuICAgICAgICAgICAgbmFtZTEucG9wKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5hbWUxLnBvcCgpKVxyXG4gICAgXHJcblxyXG4gICAgfVxyXG59XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/EventEmitter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f69c6jsJQpKC7ahj8yEnnKI', 'EventEmitter');
// Scripts/EventEmitter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = void 0;
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.events = {};
        this.hosts = {};
    }
    EventEmitter.prototype.on = function (event, listener, host) {
        if (typeof this.events[event] !== 'object') {
            this.events[event] = [];
            this.hosts[event] = [];
        }
        this.events[event].push(listener);
        this.hosts[event].push(host);
    };
    EventEmitter.prototype.removeListener = function (event, listener, host) {
        var idx;
        // cc.log(this.events);
        // cc.log(this.hosts);
        if (typeof this.events[event] === 'object' && typeof this.hosts[event] === 'object') {
            idx = this.events[event].indexOf(listener);
            // id = Array.indexOf(this.hosts[event], host);
            // cc.log(idx);
            // cc.log(this.events[event].length);
            if (idx > -1) {
                this.events[event].splice(idx, 1);
                this.hosts[event].splice(idx, 1);
            }
            // cc.log(this.events[event].length);
        }
    };
    EventEmitter.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var i, hosts, listeners, length;
        if (typeof this.events[event] === 'object') {
            listeners = this.events[event].slice();
            hosts = this.hosts[event].slice();
            length = listeners.length;
            for (i = 0; i < length; i++) {
                if (this.events[listeners[i]] !== null) {
                    listeners[i].apply(hosts[i], args);
                }
                else {
                    listeners[i].apply(this, args);
                }
            }
        }
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
var event = new EventEmitter();
window.EventEmitter = event;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRXZlbnRFbWl0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBSUk7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUVwQixDQUFDO0lBRUQseUJBQUUsR0FBRixVQUFHLEtBQWEsRUFBRSxRQUFhLEVBQUUsSUFBUztRQUN0QyxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDMUI7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQscUNBQWMsR0FBZCxVQUFlLEtBQWEsRUFBRSxRQUFhLEVBQUUsSUFBUztRQUNsRCxJQUFJLEdBQUcsQ0FBQztRQUNSLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDakYsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLCtDQUErQztZQUMvQyxlQUFlO1lBQ2YscUNBQXFDO1lBRXJDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3BDO1lBQ0QscUNBQXFDO1NBRXhDO0lBQ0wsQ0FBQztJQUVELDJCQUFJLEdBQUosVUFBSyxLQUFhO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDOUIsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUM7UUFFaEMsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQ3hDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xDLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBRTFCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO29CQUNwQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDdEM7cUJBQ0k7b0JBQ0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ2xDO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFVTCxtQkFBQztBQUFELENBbEVBLEFBa0VDLElBQUE7QUFsRVksb0NBQVk7QUFvRXpCLElBQU0sS0FBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7QUFPOUIsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcclxuICAgIGV2ZW50czogYW55O1xyXG4gICAgaG9zdHM6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaG9zdHMgPSB7fTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvbihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogYW55LCBob3N0OiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZXZlbnRzW2V2ZW50XSAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdHNbZXZlbnRdID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChsaXN0ZW5lcik7XHJcbiAgICAgICAgdGhpcy5ob3N0c1tldmVudF0ucHVzaChob3N0KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVMaXN0ZW5lcihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogYW55LCBob3N0OiBhbnkpIHtcclxuICAgICAgICB2YXIgaWR4O1xyXG4gICAgICAgIC8vIGNjLmxvZyh0aGlzLmV2ZW50cyk7XHJcbiAgICAgICAgLy8gY2MubG9nKHRoaXMuaG9zdHMpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ldmVudHNbZXZlbnRdID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdGhpcy5ob3N0c1tldmVudF0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGlkeCA9IHRoaXMuZXZlbnRzW2V2ZW50XS5pbmRleE9mKGxpc3RlbmVyKTtcclxuICAgICAgICAgICAgLy8gaWQgPSBBcnJheS5pbmRleE9mKHRoaXMuaG9zdHNbZXZlbnRdLCBob3N0KTtcclxuICAgICAgICAgICAgLy8gY2MubG9nKGlkeCk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLmV2ZW50c1tldmVudF0ubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpZHggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0c1tldmVudF0uc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZXZlbnRzW2V2ZW50XS5sZW5ndGgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW1pdChldmVudDogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHZhciBpLCBob3N0cywgbGlzdGVuZXJzLCBsZW5ndGg7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ldmVudHNbZXZlbnRdID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50c1tldmVudF0uc2xpY2UoKTtcclxuICAgICAgICAgICAgaG9zdHMgPSB0aGlzLmhvc3RzW2V2ZW50XS5zbGljZSgpO1xyXG4gICAgICAgICAgICBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ldmVudHNbbGlzdGVuZXJzW2ldXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyc1tpXS5hcHBseShob3N0c1tpXSwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb25jZShldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogYW55LCBob3N0OiBhbnkpIHtcclxuICAgIC8vICAgICB0aGlzLm9uKGV2ZW50LCAoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBob3N0KTtcclxuICAgIC8vICAgICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIC8vICAgICB9LCBob3N0KTtcclxuICAgIC8vIH1cclxuICAgIFxyXG5cclxufVxyXG5cclxuY29uc3QgZXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgICBFdmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjtcclxuICAgIH0gXHJcbiAgfVxyXG4gIHdpbmRvdy5FdmVudEVtaXR0ZXIgPSBldmVudFxyXG4iXX0=
//------QC-SOURCE-SPLIT------
