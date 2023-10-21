class TTTModel {
  #lepes;
  constructor() {
    this.#lepes = 0;
  }

  aktualJatekos() {
    return (this.#lepes++ % 2 == 0) ? "X" : "O";
  }

  kovetkezoJatekos() {
    return (this.#lepes % 2 == 0) ? "O" : "X";
  }
}

export default TTTModel;
