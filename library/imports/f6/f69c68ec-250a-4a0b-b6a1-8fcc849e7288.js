"use strict";
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