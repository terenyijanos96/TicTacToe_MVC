import TTTModel from "../model/TTTModel.js";
import Jatekter from "../view/Jatekter.js";
import InfoView from "../view/InfoView.js";

class TTTController {
  constructor() {
    new Jatekter($(".jatekter"), 3);
    this.tttModel = new TTTModel();

    this.infoView = new InfoView($(".info"))

    $(window).on("elemKivalaszt", (event) => {
      //itt hívom meg a modellt és megkérem, hogy számolja ki, hogy ki következik
      let aktObj = event.detail

      console.log(aktObj)
      let index = aktObj.index

      let ertek = this.tttModel.aktualisAllapot(index);
      let kiKovetkezik = this.tttModel.kovetkezoJatekos()
      aktObj.setErtek(ertek);
      this.infoView.setPelem(kiKovetkezik)

    });
  }
}

export default TTTController;
