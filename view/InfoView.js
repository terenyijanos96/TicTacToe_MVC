class InfoView {
    #szuloElem
    constructor(szuloElem){
        this.#szuloElem = szuloElem
        this.#htmlOsszeallit()
        this.pElem = $(".info p")
    }


    setPelem(ertek){
        this.pElem.html(ertek + " következik")
    }

    #htmlOsszeallit(){
        let txt = `<div class="info">
            <p>Ki következik</p>
        </div>
        `
        this.#szuloElem.append(txt)
    }
}

export default InfoView
