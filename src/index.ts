import {Pin} from "./Pin"

class Index {

    public static async main(): Promise<void> {
        console.log("Hello World");
        let pin: Pin = new Pin(5);
        setInterval(() => pin.pulse(500), 1000);
    }
}

Index.main();