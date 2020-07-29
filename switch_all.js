function switch_all() {
  if (apex.item("P64_MUNICIPIO").getValue() === "") {
      console.log(1);
    //apex.item('P64_RECUPERADOS').setValue('')    
    map.removeLayer("ps-covid");
    map.addLayer({
              id: "ps-covid",
              type: "symbol",
              source: "p-covid",
              layout: {
                //"icon-image": "{pacientes}",
                "icon-image": "{pacientes}",
                "icon-allow-overlap": true,
                "icon-size": iconSize,
              },
            });
    map.removeLayer("ps-covid_2");
    map.addLayer({
              id: "ps-covid_2",
              type: "symbol",
              source: "p-covid_2",
              layout: {
                //"icon-image": "{pacientes}",
                "icon-image": "{pacientes_2}",
                "icon-allow-overlap": true,
                "icon-size": iconSize,
              },
            });
    switch (true) {
      case apex.item("P64_FALLECIO").getValue() === "1" &&
        apex.item("P64_RESULTADO").getValue() === "0":
        map.setFilter("ps-covid", [
          "any",
          ["==", "pacientes", "pulsing-dotAzules"],
        ]);
        map.setFilter("ps-covid_2", [
          "any",
          ["==", "pacientes", "pulsing-dotAzules"],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "2" &&
        apex.item("P64_RESULTADO").getValue() === "0":
        map.setFilter("ps-covid", [
          "any",
          ["!=", "pacientes", "pulsing-dotAzules"],
        ]);
        map.setFilter("ps-covid_2", [
          "any",
          ["!=", "pacientes", "pulsing-dotAzules"],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "3" &&
        apex.item("P64_RESULTADO").getValue() === "0":
        map.setFilter("ps-covid", ["any", ["!=", "pacientes", ""]]);
        map.setFilter("ps-covid_2", ["any", ["!=", "pacientes", ""]]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "3" &&
        apex.item("P64_RESULTADO").getValue() === "1":
        map.setFilter("ps-covid", [
          "any",
          ["==", "pacientes", "pulsing-dot"],
          ["==", "resultado", "Positivo SARS-CoV-2"],
        ]);
        map.setFilter("ps-covid_2", [
          "any",
          ["==", "pacientes", "pulsing-dot"],
          ["==", "resultado", "Positivo SARS-CoV-2"],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "3" &&
        apex.item("P64_RESULTADO").getValue() === "2":
        map.setFilter("ps-covid", [
          "all",
          [
            "any",
            ["==", "pacientes", "pulsing-dotAzules"],
            ["==", "pacientes", "pulsing-dotVerdes"],
          ],
          ["==", "resultado", "Negativo SARS-CoV-2"],
        ]);
        map.setFilter("ps-covid_2", [
          "all",
          [
            "any",
            ["==", "pacientes", "pulsing-dotAzules"],
            ["==", "pacientes", "pulsing-dotVerdes"],
          ],
          ["==", "resultado", "Negativo SARS-CoV-2"],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "3" &&
        apex.item("P64_RESULTADO").getValue() === "3":
        map.setFilter("ps-covid", [
          "any",
          ["==", "pacientes", "pulsing-dotNaranjas"],
          ["==", "resultado", "Resultado pendiente"],
        ]);
        map.setFilter("ps-covid_2", [
          "any",
          ["==", "pacientes", "pulsing-dotNaranjas"],
          ["==", "resultado", "Resultado pendiente"],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "2" &&
        apex.item("P64_RESULTADO").getValue() === "1":
        map.setFilter("ps-covid", [
          "all",
          ["==", "resultado", "Positivo SARS-CoV-2"],
          ["==", "pacientes", "pulsing-dot"],
        ]);
        map.setFilter("ps-covid_2", [
          "all",
          ["==", "resultado", "Positivo SARS-CoV-2"],
          ["==", "pacientes", "pulsing-dot"],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "2" &&
        apex.item("P64_RESULTADO").getValue() === "2":
        //map.setFilter('ps-covid', ['all',['==', 'pacientes', 'pulsing-dotAzules'],['==', 'resultado', 'No positivo SARS-CoV-2']]);
        map.setFilter("ps-covid", [
          "all",
          ["==", "pacientes", "pulsing-dotVerdes"],
        ]);
        map.setFilter("ps-covid_2", [
          "all",
          ["==", "pacientes", "pulsing-dotVerdes"],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "2" &&
        apex.item("P64_RESULTADO").getValue() === "3":
        map.setFilter("ps-covid", [
          "any",
          ["==", "pacientes", "pulsing-dotNaranjas"],
          ["==", "resultado", "Pendiente"],
        ]);
        map.setFilter("ps-covid_2", [
          "any",
          ["==", "pacientes", "pulsing-dotNaranjas"],
          ["==", "resultado", "Pendiente"],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "1" &&
        apex.item("P64_RESULTADO").getValue() === "1":
        map.setFilter("ps-covid", [
          "all",
          ["==", "pacientes", "pulsing-dotAzules"],
          ["==", "resultado", "Positivo SARS-CoV-2"],
        ]);
        map.setFilter("ps-covid_2", [
          "all",
          ["==", "pacientes", "pulsing-dotAzules"],
          ["==", "resultado", "Positivo SARS-CoV-2"],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "1" &&
        apex.item("P64_RESULTADO").getValue() === "2":
        map.setFilter("ps-covid", [
          "all",
          ["==", "pacientes", "pulsing-dotAzules"],
          ["==", "resultado", "Negativo SARS-CoV-2"],
        ]);
        map.setFilter("ps-covid_2", [
          "all",
          ["==", "pacientes", "pulsing-dotAzules"],
          ["==", "resultado", "Negativo SARS-CoV-2"],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "1" &&
        apex.item("P64_RESULTADO").getValue() === "3":
        map.setFilter("ps-covid", [
          "all",
          ["==", "pacientes", "pulsing-dotAzules"],
          ["==", "resultado", "Resultado pendiente"],
        ]);
        map.setFilter("ps-covid_2", [
          "all",
          ["==", "pacientes", "pulsing-dotAzules"],
          ["==", "resultado", "Resultado pendiente"],
        ]);
        break;
    }
  } else if (apex.item("P64_MUNICIPIO").getValue() != "") {
    //apex.item('P64_RECUPERADOS').setValue('')    
    map.removeLayer("ps-covid");
    map.addLayer({
              id: "ps-covid",
              type: "symbol",
              source: "p-covid",
              layout: {
                //"icon-image": "{pacientes}",
                "icon-image": "{pacientes}",
                "icon-allow-overlap": true,
                "icon-size": iconSize,
              },
            });
    map.removeLayer("ps-covid_2");
    map.addLayer({
              id: "ps-covid_2",
              type: "symbol",
              source: "p-covid_2",
              layout: {
                //"icon-image": "{pacientes}",
                "icon-image": "{pacientes_2}",
                "icon-allow-overlap": true,
                "icon-size": iconSize,
              },
            });
      console.log(2);
    switch (true) {
      case apex.item("P64_FALLECIO").getValue() === "1" &&
        apex.item("P64_RESULTADO").getValue() === "0":
        map.setFilter("ps-covid", [
          "all",
          ["==", "pacientes", "pulsing-dotAzules"],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        map.setFilter("ps-covid_2", [
          "all",
          ["==", "pacientes", "pulsing-dotAzules"],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "2" &&
        apex.item("P64_RESULTADO").getValue() === "0":
        map.setFilter("ps-covid", [
          "all",
          ["!=", "pacientes", "pulsing-dotAzules"],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        map.setFilter("ps-covid_2", [
          "all",
          ["!=", "pacientes", "pulsing-dotAzules"],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "3" &&
        apex.item("P64_RESULTADO").getValue() === "0":
        map.setFilter("ps-covid", [
          "all",
          ["!=", "pacientes", ""],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        map.setFilter("ps-covid_2", [
          "all",
          ["!=", "pacientes", ""],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "3" &&
        apex.item("P64_RESULTADO").getValue() === "1":
        map.setFilter("ps-covid", [
          "all",
          [
            "any",
            ["==", "pacientes", "pulsing-dot"],
            ["==", "resultado", "Positivo SARS-CoV-2"],
          ],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        map.setFilter("ps-covid_2", [
          "all",
          [
            "any",
            ["==", "pacientes", "pulsing-dot"],
            ["==", "resultado", "Positivo SARS-CoV-2"],
          ],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "3" &&
        apex.item("P64_RESULTADO").getValue() === "2":
        map.setFilter("ps-covid", [
          "all",
          [
            "any",
            ["==", "pacientes", "pulsing-dotAzules"],
            ["==", "pacientes", "pulsing-dotVerdes"],
          ],
          ["==", "resultado", "Negativo SARS-CoV-2"],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        map.setFilter("ps-covid_2", [
          "all",
          [
            "any",
            ["==", "pacientes", "pulsing-dotAzules"],
            ["==", "pacientes", "pulsing-dotVerdes"],
          ],
          ["==", "resultado", "Negativo SARS-CoV-2"],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "3" &&
        apex.item("P64_RESULTADO").getValue() === "3":
        map.setFilter("ps-covid", [
          "all",
          [
            "any",
            ["==", "pacientes", "pulsing-dotNaranjas"],
            ["==", "resultado", "Resultado pendiente"],
          ],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        map.setFilter("ps-covid_2", [
          "all",
          [
            "any",
            ["==", "pacientes", "pulsing-dotNaranjas"],
            ["==", "resultado", "Resultado pendiente"],
          ],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "2" &&
        apex.item("P64_RESULTADO").getValue() === "1":
        map.setFilter("ps-covid", [
          "all",
          [
            "all",
            ["==", "resultado", "Positivo SARS-CoV-2"],
            ["==", "pacientes", "pulsing-dot"],
          ],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        map.setFilter("ps-covid_2", [
          "all",
          [
            "all",
            ["==", "resultado", "Positivo SARS-CoV-2"],
            ["==", "pacientes", "pulsing-dot"],
          ],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "2" &&
        apex.item("P64_RESULTADO").getValue() === "2":
        map.setFilter("ps-covid", [
          "all",
          [
            "all",
            ["==", "resultado", "Positivo SARS-CoV-2"],
            ["==", "pacientes", "pulsing-dot"],
          ],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        map.setFilter("ps-covid_2", [
          "all",
          [
            "all",
            ["==", "resultado", "Positivo SARS-CoV-2"],
            ["==", "pacientes", "pulsing-dot"],
          ],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "2" &&
        apex.item("P64_RESULTADO").getValue() === "3":
        map.setFilter("ps-covid", [
          "all",
          [
            "any",
            ["==", "pacientes", "pulsing-dotNaranjas"],
            ["==", "resultado", "Pendiente"],
          ],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        map.setFilter("ps-covid_2", [
          "all",
          [
            "any",
            ["==", "pacientes", "pulsing-dotNaranjas"],
            ["==", "resultado", "Pendiente"],
          ],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "1" &&
        apex.item("P64_RESULTADO").getValue() === "1":
        map.setFilter("ps-covid", [
          "all",
          ["==", "pacientes", "pulsing-dotAzules"],
          ["==", "resultado", "Positivo SARS-CoV-2"],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        map.setFilter("ps-covid_2", [
          "all",
          ["==", "pacientes", "pulsing-dotAzules"],
          ["==", "resultado", "Positivo SARS-CoV-2"],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "1" &&
        apex.item("P64_RESULTADO").getValue() === "2":
        map.setFilter("ps-covid", [
          "all",
          ["==", "pacientes", "pulsing-dotAzules"],
          ["==", "resultado", "Negativo SARS-CoV-2"],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        map.setFilter("ps-covid_2", [
          "all",
          ["==", "pacientes", "pulsing-dotAzules"],
          ["==", "resultado", "Negativo SARS-CoV-2"],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        break;
      case apex.item("P64_FALLECIO").getValue() === "1" &&
        apex.item("P64_RESULTADO").getValue() === "3":
        map.setFilter("ps-covid", [
          "all",
          ["==", "pacientes", "pulsing-dotAzules"],
          ["==", "resultado", "Resultado pendiente"],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        map.setFilter("ps-covid_2", [
          "all",
          ["==", "pacientes", "pulsing-dotAzules"],
          ["==", "resultado", "Resultado pendiente"],
          ["==", "municipio", parseInt(apex.item("P64_MUNICIPIO").getValue())],
        ]);
        break;
    }
  }
}
 