const URL_base = "../data/data.json";
export const getData = async () => {
  const response = await fetch(URL_base);
  const data = await response.json();
  const { documents } = data;
  let filters = [];
  let docs = [];
  let id = 0;
  documents.forEach((docu) => {
    if (!filters.some((item) => item.name === docu.Category)) {
      const newObj = {
        id,
        name: docu.Category,
      };
      filters.push(newObj);
      id += 1;
    }
    const newdoc = {
      Title: docu.Title,
      Description: docu.Description,
      Category: docu.Category,
      FileLeafRef: docu.FileLeafRef,
      FileSize: docu.File.FileSize,
      Created: docu.Created,
      Modified: docu.Modified,
    };
    docs.push(newdoc);
  });
  console.log(docs);
  return { filters, docs };
};
