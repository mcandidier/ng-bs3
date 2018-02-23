export class Carousel {
  name: string;
  img: string;
  active: boolean;

  constructor(name: string, img: string) {
    this.name = name;
    this.img =  img;
    this.active = false
  }
}