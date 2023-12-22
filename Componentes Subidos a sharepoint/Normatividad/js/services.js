const URL_base = "./data/data.json";
export const getData = async () => {
  const response = await fetch(URL_base);
  const data = await response.json();
  const { documents } = data;
  let filters = [];
  let docs = [];

  documents.forEach((docu) => {
    if (!filters.some((item) => item.name === docu.Category)) {
      const newObj = {
        name: docu.Category,
      };
      filters.push(newObj);
    }
    const newdoc = {
      Title: docu.Title,
      Description: docu.Description,
      Category: docu.Category,
      FileLeafRef: docu.FileLeafRef,
      FileSize: docu.File.FileSize,
      Created: docu.Created,
      Modified: docu.Modified,
      Exp: docu.Modified,
      uri: docu.uri,
    };
    docs.push(newdoc);
  });

  return { filters, docs };
};

export const getDataService = () => {
  const url = `${location.protocol}//${location.host}/EstebanlaArdila/Normatividad/_api/web/lists/getbytitle('Documentos')/items?$select=*`;

  try {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Otros encabezados si es necesario
      },
      // body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Manipula los datos devueltos por el micrositio
        console.log(data);
      });
  } catch (error) {
    console.error("Error al obtener los documentos:", error);
  }
};
