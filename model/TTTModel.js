class TTTModel {
  #lepes;
  #ertek;
  #lista = [];
  constructor() {
    this.#lepes = 0;
    this.n = 3;
    for (let i = 0; i < this.n * this.n; i++) {
      this.#lista.push(".");
    }
  }

  aktualisAllapot(index) {
    this.#ertek = this.#lepes++ % 2 == 0 ? "X" : "O";
    this.#lista[index] = this.#ertek;
    console.log(this.#lista);

    return this.#ertek;
  }

  #visszEll() {
    let szoveg = "";
    this.#lista.forEach((elem, i) => {
      szoveg += `${elem}`;

      if (i % this.n == this.n - 1) {
        szoveg += "@";
      }
    });
    console.log(szoveg);
    return szoveg;
  }

  #fuggEll() {
    let szoveg = "";
    console.log(szoveg);
    return szoveg;
  }

  #atlEll() {
    let szoveg = "";
    console.log(szoveg);
    return szoveg;
  }

  ell() {
    let szoveg = this.#visszEll() + this.#fuggEll() + this.#atlEll();

    if (szoveg.indexOf("XXX") >= 0) {
      return 1;
    } else if (szoveg.indexOf("OOO") >= 0) {
      return 2;
    } else if (szoveg.indexOf(".") === -1) {
      return 3;
    } else {
      return 0;
    }
  }

  kovetkezoJatekos() {
    let kovJatekos = this.ell();
    if (kovJatekos === 0) {
      kovJatekos = this.#lepes % 2 == 0 ? "O" : "X";
    }
    return kovJatekos;
  }
}

export default TTTModel;
