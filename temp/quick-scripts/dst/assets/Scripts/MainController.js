
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