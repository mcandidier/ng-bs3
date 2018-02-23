export class Joke {
    setup: string;
    punch: string;
    hide: boolean;

    constructor(setup: string, punch: string) {
      this.setup = setup;
      this.punch = punch;
      this.hide = true;
    }

    toggle() {
      this.hide = !this.hide;
    }
}