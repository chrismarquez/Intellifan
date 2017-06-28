import Gpio from "rpi-gpio"

export default class Pin {

    private pin: number;

    public constructor(pin: number) {
        this.pin = pin;
    }

    public async read(): Promise<boolean> {
        return new Promise((resolve: (value?: boolean) => void, reject: (reason?: any) => void) => {
            Gpio.read(this.pin, (err: Error, data: boolean) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    public async write(): Promise<void> {

    }

}