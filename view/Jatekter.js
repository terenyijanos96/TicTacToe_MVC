import Elem from "./Elem.js";
class Jatekter {
  /* Előállítja a játékot  */
  constructor(szuloElem, n) {
    this.n = n;
    console.log(this.n);
    $(":root").css("--meret", this.n);

    for (let index = 0; index < this.n * this.n; index++) {
      new Elem(szuloElem);
    }


  }
}
export default Jatekter;
