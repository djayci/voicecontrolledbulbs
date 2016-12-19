namespace bt {
    'use strict';

    export class bt$speechToColour {

        constructor() { }

        public get(command: string): Object {

            switch(command){

                case "reuben":
                    return { red:55, green:0, blue:0 };
                
                case "hell's kitchen":
                    return { red:55, green:55, blue:55 };

                case "walking dead":
                    return { red:0, green:20, blue:0 };

                case "switch off":
                    return { red:0, green:0, blue:0 };

                case "switch on":
                    return { red:255, green:255, blue:255 };
                default:
                    return {};
            } 
        } 
    }

    angular
        .module('bt')
        .service('bt$speechToColour', bt$speechToColour);
}