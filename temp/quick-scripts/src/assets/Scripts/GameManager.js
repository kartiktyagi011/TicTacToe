"use strict";
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