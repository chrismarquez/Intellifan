import Pin from "./Pin"

class Index {

    public static async main(): Promise<void> {
        console.log("Hello World");
        let pin: Pin = new Pin(10);
        let value: boolean = await pin.read();
    }
}

Index.main();