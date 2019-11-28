try {
    var a = new Date().getFullYear();
    var m = new Date().getMonth();
    $('#sel-anio').empty();
    for (var i = 2015; i <= (m == 11 ? a + 1 : a); i++) {
      $('#sel-anio').append("<option value='" + i + "' " + (i == a ? "selected" : "") + ">" + i + "</option>");
    }
    $('#sel-mes').empty();
    $('#sel-mes').append("<option value='1' " + (m == 0 ? "selected" : "") + ">Enero</option>");
    $('#sel-mes').append("<option value='2' " + (m == 1 ? "selected" : "") + ">Febrero</option>");
    $('#sel-mes').append("<option value='3' " + (m == 2 ? "selected" : "") + ">Marzo</option>");
    $('#sel-mes').append("<option value='4' " + (m == 3 ? "selected" : "") + ">Abril</option>");
    $('#sel-mes').append("<option value='5' " + (m == 4 ? "selected" : "") + ">Mayo</option>");
    $('#sel-mes').append("<option value='6' " + (m == 5 ? "selected" : "") + ">Junio</option>");
    $('#sel-mes').append("<option value='7' " + (m == 6 ? "selected" : "") + ">Julio</option>");
    $('#sel-mes').append("<option value='8' " + (m == 7 ? "selected" : "") + ">Agosto</option>");
    $('#sel-mes').append("<option value='9' " + (m == 8 ? "selected" : "") + ">Septiembre</option>");
    $('#sel-mes').append("<option value='10' " + (m == 9 ? "selected" : "") + ">Octubre</option>");
    $('#sel-mes').append("<option value='11' " + (m == 10 ? "selected" : "") + ">Noviembre</option>");
    $('#sel-mes').append("<option value='12' " + (m == 11 ? "selected" : "") + ">Diciembre</option>");
  }
  catch (err) { alert(err) }

  function getData() {
    $('#xnombre').empty();
    $('#lista').empty();
    var nip = $('#nip').val();
    var mes = $('#sel-mes').val();
    var anio = $('#sel-anio').val();
    var url = "http://cpff.haciendachiapas.gob.mx/Formato/api/incidencias";
    if (nip != "") {
      $.ajax({
        type: 'POST',
        url: url,
        headers: { 'Access-Control-Allow-Origin': '*' },
        dataType: "json",
        data: { "NIP": nip, "Mes": mes, "Anio": anio },
        success: function (data) {
          $('#xnombre').append(data[0].Nombre);
          $.each(data, function (i, incidencia) {
            $('#lista').append("<tr class='" + incidencia.Clave + "'><td>" + incidencia.Inicio + "</td><td>" + incidencia.Incidencia + "</td><td>" + incidencia.Entrada + "/" + incidencia.Salida + "</td></tr>");
          });
        },
        error: function (jqXHR, textStatus, errorThrown) {
          alert(textStatus);
        }
      });
    }
    else {
      alert("Agregar NIP");
    }
  }