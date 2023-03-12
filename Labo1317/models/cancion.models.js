const db = require("../util/database");
module.exports = class Canciones {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(cancion) {
    this.titulo = cancion.titulo || "Sunflower";
    this.description = cancion.description || "La cancion de spiderman";
    this.imagen =
      cancion.imagen ||
      "https://www.hoyesarte.com/constelac10n/files/2020/11/Post-Malone-Sunflower.jpg";
  }

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    return db.execute(
      `INSERT INTO cancion(titulo, description, imagen) 
            VALUES(?, ?, ?)`,
      [this.titulo, this.description, this.imagen]
    );
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetch(id) {
    let query = `SELECT * FROM cancion`;
    if (id) {
      query += " WHERE id = ?";
      return db.execute(query, [id]);
    }
    return db.execute(query);
  }
};
