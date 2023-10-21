import TTTModel from "../model/TTTModel.js";
import Jatekter from "../view/Jatekter.js";
import InfoView from "../view/InfoView.js";

class TTTController {
  constructor() {
    new Jatekter($(".jatekter"), 3);
    this.tttModel = new TTTModel();

    this.infoView = new InfoView($(".info"))

    $(window).on("elemKivalaszt", (event) => {
      //console.log(event.detail);
      //itt hívom meg a modellt és megkérem, hogy számolja ki, hogy ki következik
      let ertek = this.tttModel.aktualJatekos();
      let kiKovetkezik = this.tttModel.kovetkezoJatekos()
      event.detail.setErtek(ertek);
      this.infoView.setPelem(kiKovetkezik)

    });
  }
}

export default TTTController;
