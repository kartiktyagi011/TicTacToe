"use strict";
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