namespace bt {
    'use strict';

    interface $scope extends angular.IScope {

        hex: any,
        currentSpeechValue: ""
    }

    export class bluetoothCtrl {

        static $inject: Array<string> = [
            '$scope',
            'bt$bluetooth',
            'bt$speechRecognition',
            'bt$speechToColour'];

        constructor(
            public $scope: $scope,
            public bt$bluetooth: bt$bluetooth,
            private bt$speechRecognition: bt$speechRecognition,
            private bt$speechToColour: bt$speechToColour) {

            this.activate();
        }

        public activate(): void {

            var self = this;

            self.bt$speechRecognition.start().onresult = function (event) {

                self.$scope.currentSpeechValue = event.results[event.resultIndex][0].transcript.trim().toLowerCase();
                self.setColor(self.bt$speechToColour.get(self.$scope.currentSpeechValue));
                self.$scope.$apply();
            };
        }

        public setColor(hex): void {

            var self = this;

            if (hex.switchOff) {

                hex.red = 0;
                hex.green = 0;
                hex.blue = 0;
                self.$scope.hex.switchOff = false;
            }

            self.bt$bluetooth.setColor(hex.red, hex.green, hex.blue);
        }
    }

    angular
        .module('bt')
        .controller('bluetoothCtrl', bluetoothCtrl);
}