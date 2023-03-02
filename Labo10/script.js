console.log("Iniciar servidor");

//el módulo filesystem sirve para acceder al sistema de archivos de la computadora
const filesystem = require("fs");

filesystem.writeFileSync("info.txt", "Documento de registro");

// http es un módulo que permite crear servidores web y manejar las peticiones y respuestas
const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === "/") {
    response.setHeader("Content-Type", "text/html");
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write('<head><meta charset="utf-8"></head><body>');
    response.write("<h1>Laboratorio 11</h1>");
    response.write('<a href="/dos">Da click aquí</a>');
    response.write("</body></html>");
    response.end();
  } else if (request.url === "/dos" && request.method === "GET") {
    response.setHeader("Content-Type", "text/html");
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write('<head><meta charset="utf-8"></head><body>');
    response.write("<h1>Laboratorio 11</h1>");
    response.write('<a href="/holi">Picale aquí</a>');
    response.write("</body></html>");
    response.end();
  } else if (request.url === "/holi" && request.method === "GET") {
    response.setHeader("Content-Type", "text/html");
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write('<head><meta charset="utf-8"></head><body>');
    response.write("<h1>Laboratorio 11</h1>");
    response.write('<form action="/registro" method="POST">');

    let form = `
            <fieldset>
            <ul>
              <li>
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="user_name" />
              </li>
              <li>
                <label for="mail">Email:</label>
                <input type="email" id="mail" name="user_email" />
              </li>
              <li>
                <label for="msg">Mensaje:</label>
                <textarea id="msg" name="user_message"></textarea>
              </li>
            </ul>
            </fieldset>
            <br>
            <input type="submit" value="Registrarme">
        `;

    response.write(form);
    response.write("</form>");
    response.write("</body></html>");
    response.end();
  } else if (request.url === "/registro" && request.method === "POST") {
    const datos = [];

    request.on("data", (dato) => {
      console.log(dato);
      datos.push(dato);
    });

    return request.on("end", () => {
      const datos_completos = Buffer.concat(datos).toString();
      console.log(datos_completos);

      response.setHeader("Content-Type", "text/html");
      response.write("<!DOCTYPE html>");
      response.write("<html>");
      response.write('<head><meta charset="utf-8"></head><body>');
      response.write("<h1>Tus Datos de Registro</h1>");

      let respuesta = "<ul>";

      const name = datos_completos.split("&")[0].split("=")[1];
      const email = datos_completos.split("&")[1].split("=")[1];
      const msg = datos_completos.split("&")[2].split("=")[1];
      respuesta += "<li> Tu nombre de usuario es: " + name + "</li>";
      respuesta += "<li> Tu email es: " + email + "</li>";
      respuesta += "<li> Tu mensaje fue: " + msg + "</li>";
      respuesta += "</ul>";
      response.write(respuesta);
      filesystem.writeFileSync("info.txt", respuesta);
      return response.end();
    });
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html");
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write('<head><meta charset="utf-8"></head><body>');
    response.write(
      "<h1>Le sentimos, el menú que estás buscando no existe</h1>"
    );
    response.write("</body></html>");
    response.end();
  }
});

server.listen(3000);
