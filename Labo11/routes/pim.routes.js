const express = require("express");

const router = express.Router();

router.get("/pimsito", (request, response, next) => {
  let html = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>FOTO DE PIM (MI PERRO)</h1>
                <div>
                    <img src="/pimsito.jpeg" alt="Pim">
                </div>
            </body>
        </html>
    `;

  response.send(html);
});

router.post("/pimsito", (request, response, next) => {
  console.log(request.body);

  response.send("ok");
});

module.exports = router;
