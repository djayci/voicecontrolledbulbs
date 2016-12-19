var bt;
(function (bt) {
    'use strict';
    var bt$speechToColour = (function () {
        function bt$speechToColour() {
        }
        bt$speechToColour.prototype.get = function (command) {
            switch (command) {
                case "reuben":
                    return { red: 55, green: 0, blue: 0 };
                case "hell's kitchen":
                    return { red: 55, green: 55, blue: 55 };
                case "walking dead":
                    return { red: 0, green: 20, blue: 0 };
                case "switch off":
                    return { red: 0, green: 0, blue: 0 };
                case "switch on":
                    return { red: 255, green: 255, blue: 255 };
                default:
                    return {};
            }
        };
        return bt$speechToColour;
    }());
    bt.bt$speechToColour = bt$speechToColour;
    angular
        .module('bt')
        .service('bt$speechToColour', bt$speechToColour);
})(bt || (bt = {}));
