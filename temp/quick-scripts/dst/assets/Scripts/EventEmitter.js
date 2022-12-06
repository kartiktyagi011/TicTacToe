
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