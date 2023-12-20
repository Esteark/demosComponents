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
