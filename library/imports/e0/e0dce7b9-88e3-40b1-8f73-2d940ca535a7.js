"use strict";
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