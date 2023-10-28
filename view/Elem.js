class Elem {
  /* az osztályban az addataokon végezzük a műveleteket! */
  /*  megjelenítse az oldalon az elemet */
  constructor(szuloElem, index) {
    /* beállítja az addattagokat */
    this.index = index
    this.allapot = true;
    this.szuloElem = szuloElem;
    this.#htmlOsszeallit(); /* this - a konkrét osztálypéldányra mutat */
    /* megfogjuk a html elemekhez */
    this.divElem = this.szuloElem.children("div:last-child");
    console.log(this.divElem);
    this.pElem = this.divElem.children("p");
    /*        console.log(this.divElem)
        console.log(this.pElem) */
    this.divElem.on("click", () => {
      if (this.allapot) {
        this.#esemenyTrigger("elemKivalaszt");
      }
      this.allapot = false;
    });
  }
  setErtek(ertek) {
    this.pElem.html(ertek);
  }
  #htmlOsszeallit() {
    let txt = "<div class='elem'><p></p></div>";
    this.szuloElem.append(txt);
  }
  /*  Saját esemény létrehozása 
    Az osztály tud elmondani magáról dolgokat
    Információkat ad át saját magáról
    */
  #esemenyTrigger(esemenyNev) {
    const esemenyem = new CustomEvent(esemenyNev, { detail: this });
    window.dispatchEvent(esemenyem);
  }
}
export default Elem;
