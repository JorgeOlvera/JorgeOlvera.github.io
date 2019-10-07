
/*
1. Función que muestra y esconde la sección para hacer comentarios
   al hacer click el botón 'Escribe una reseña'.
   on click!
   (5 puntos)
*/

$(document).ready(function(){
  $("#escribe_reseña").click(function(){
    $("#seccion_comentario").show();
  });
});

/*
2. Cargar los comentarios de el archivo comentarios.xml o bien de
  https://tc2026daw.github.io/instrucciones/misc/comentarios.xml
  (función ajax, 25 puntos)
*/

$.ajax({
  url: "https://tc2026daw.github.io/instrucciones/misc/comentarios.xml",
  type: "GET",
  dataType: "xml",
  success: function(data) {
    // console.log(data);
    let new_html = "";

    $(data).find("comments").each(function(event) {
      new_html += `
      <tr>
        <td>${$(this).find("name").text()}</td>
        <td>${$(this).find("text").text()}</td>

        <td>${$(this).find("stars").attr("total")}</td>
        <td>${$(this).find("date").text()}</td>
      </tr>
      `;
    });
    $("#seccion_reviews").append(new_html);
  },
  error: function(error_msg) {
    console.log(error_msg);
  }
});


/*
3. Funcion que apendiza el nuevo comentario al darle click a PUBLICAR
  on click!
  (función, 35 puntos)
  */

  $("#btn-publicar").click(function(){
    //publicar comentarios

    let new_htmlPlusUserComment = new_html;

    if(#nombre != "" && #email != "" && #comentario != ""){
      new_htmlPlusUserComment.append(#nombre);
      new_htmlPlusUserComment.append(#email);
      new_htmlPlusUserComment.append(#comentario);
    }
    else {
      new_htmlPlusUserComment.append("Error");
      new_htmlPlusUserComment.append("Error");
      new_htmlPlusUserComment.append("Error")
    }
  });

/*
4. Funcion que limpia el nombre, el email y el div "#comentarios" al darle
   click en "btn-limpiar" con leyenda de "CANCELAR"
   on click!
  (5 puntos)
*/


/*
Funcion que recibe un numero de stars y regresa los 5 spans
que simbolizan las estrellas del rating. por ejemplo:
let stars = 3;
let html = getStarsSpans(stars);

html = '
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
'
*/
function getStarsSpans(stars) {
  let new_html = '';
  for( let i = 0; i < stars; i++) {
    new_html += `
      <span class="fa fa-star checked"></span>
    `;
  }

  for ( let i = 0; i < 5 - stars; i++ ) {
    new_html += `
      <span class="fa fa-star"></span>
    `;
  }

  return new_html;
}
