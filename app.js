const fs = require("fs");
const moduloBicicletas = require("./datosBici");

const dhBici = {
  bicicletas: moduloBicicletas,
  buscarBici: function (id) {
    const resultado = this.bicicletas.filter((bici) => {
      return bici.id === id;
    });

    return resultado.length === 0 ? null : resultado;
  },
  venderBici: function (id) {
    const biciEncontrada = this.buscarBici(id);
    if (!biciEncontrada) {
      return "Bicicleta no encontrada";
    } else {
      const biciNueva = this.bicicletas.map((bici) => {
        if (bici.id === id) {
          bici.vendida = true;
        }

        return bici;
      });

      fs.writeFileSync("./bicicletas.json", JSON.stringify(biciNueva));
      return this.buscarBici(id);
    }
  },
  paraVender: function () {
    return this.bicicletas.filter((bici) => bici.vendida === false);
  },
  totalDeVentas: function () {
    const valoresDeVentas = this.bicicletas
      .filter((bici) => bici.vendida)
      .map((bici) => bici.precio);
    const total = valoresDeVentas.reduce(
      (acumulador, valor) => acumulador + valor,
      0
    );

    return total;
  },
};
//console.log(dhBici.buscarBici(1));
//console.log(dhBici.venderBici(1));
//console.log(dhBici.paraVender());
//console.log(dhBici.totalDeVentas());
