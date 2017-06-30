import Pin from "./Pin"

class Index {

    public static async main(): Promise<void> {
        console.log("Hello World");
        let pin: Pin = new Pin(10);
        setInterval(() => pin.pulse(1000), 1000);
    }
}

Index.main();