var bt;
(function (bt) {
    'use strict';
    var bluetoothCtrl = (function () {
        function bluetoothCtrl($scope, bt$bluetooth, bt$speechRecognition, bt$speechToColour) {
            this.$scope = $scope;
            this.bt$bluetooth = bt$bluetooth;
            this.bt$speechRecognition = bt$speechRecognition;
            this.bt$speechToColour = bt$speechToColour;
            this.activate();
        }
        bluetoothCtrl.prototype.activate = function () {
            var self = this;
            self.bt$speechRecognition.start().onresult = function (event) {
                self.$scope.currentSpeechValue = event.results[event.resultIndex][0].transcript.trim().toLowerCase();
                self.setColor(self.bt$speechToColour.get(self.$scope.currentSpeechValue));
                self.$scope.$apply();
            };
        };
        bluetoothCtrl.prototype.setColor = function (hex) {
            var self = this;
            if (hex.switchOff) {
                hex.red = 0;
                hex.green = 0;
                hex.blue = 0;
                self.$scope.hex.switchOff = false;
            }
            self.bt$bluetooth.setColor(hex.red, hex.green, hex.blue);
        };
        bluetoothCtrl.$inject = [
            '$scope',
            'bt$bluetooth',
            'bt$speechRecognition',
            'bt$speechToColour'];
        return bluetoothCtrl;
    }());
    bt.bluetoothCtrl = bluetoothCtrl;
    angular
        .module('bt')
        .controller('bluetoothCtrl', bluetoothCtrl);
})(bt || (bt = {}));
