class InfoView {
  #szuloElem;
  constructor(szuloElem) {
    this.#szuloElem = szuloElem;
    this.#htmlOsszeallit();
    this.pElem = $(".info p");
  }

  setPelem(ertek) {
    let szoveg = "";

    switch (ertek) {
      case 1:
        szoveg = "X nyert!";
        break;
      case 2:
        szoveg = "O nyert!";
        break;
      case 3:
        szoveg = "Döntetlen!";
        break;
      case "X":
      case "O":
        szoveg = `${ertek} következik!`;
        break;
    }


    this.pElem.html(szoveg);
  }

  #htmlOsszeallit() {
    let txt = `<div class="info">
            <p>Ki következik</p>
        </div>
        `;
    this.#szuloElem.append(txt);
  }
}

export default InfoView;
