namespace bt {
    'use strict';

    export class bt$bluetooth {

        private LBE: any = null;

        private getColorCode(red: number, green: number, blue: number): any {

            return new Uint8Array([0x56, red, green, blue, 0x00, 0xf0, 0xaa]);
        }

        public setColor(red: number, green: number, blue: number) {

            var self = this;

            if(!self.LBE){

                return self.requestPermission().then(function(){

                    self.setColor(red, green, blue);
                });
            }
 
            this.LBE.writeValue(this.getColorCode(red, green, blue))
        }

        public requestPermission(): any {

            var self = this;
            return navigator.bluetooth.requestDevice({

                //0xffe5 - send data service
                filters: [{ services: [0xffe5] }]
            })
                .then(function (device) {

                    console.log("connecting to " + device.name + "...")
                    return device.gatt.connect();
                })
                .then(function (server) {

                    console.log("getting the primary service ...");
                    return server.getPrimaryService(0xffe5);
                })
                .then(function (service) {

                    console.log("getting the 0xffe9 characteristic ...");
                    return service.getCharacteristic(0xffe9);
                })
                .then(function (characteristic) {

                    console.log("all done");
                    self.LBE = characteristic;
                    return characteristic;
                });
        }
    }

    angular
        .module('bt')
        .service('bt$bluetooth', bt$bluetooth);
}