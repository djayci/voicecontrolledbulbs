namespace bt {
    'use strict';

    export class bt$speechRecognition {
        constructor() {}

        public currentSpeech:string = "";

        public start():any {

            var recognition = new webkitSpeechRecognition();
            recognition.continuous = true;
            recognition.start();

            return recognition;
        }
    }

    angular
        .module('bt')
        .service('bt$speechRecognition', bt$speechRecognition);
}