export class GeneradorAleatorio {
    static enteroAleatorio() {
        return Math.ceil(Math.random() * 100);
    }

    static rangoAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}