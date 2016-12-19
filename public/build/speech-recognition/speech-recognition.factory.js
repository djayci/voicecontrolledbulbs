var bt;
(function (bt) {
    'use strict';
    var bt$speechRecognition = (function () {
        function bt$speechRecognition() {
            this.currentSpeech = "";
        }
        bt$speechRecognition.prototype.start = function () {
            var recognition = new webkitSpeechRecognition();
            recognition.continuous = true;
            recognition.start();
            return recognition;
        };
        return bt$speechRecognition;
    }());
    bt.bt$speechRecognition = bt$speechRecognition;
    angular
        .module('bt')
        .service('bt$speechRecognition', bt$speechRecognition);
})(bt || (bt = {}));
