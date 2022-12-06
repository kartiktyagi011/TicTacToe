
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