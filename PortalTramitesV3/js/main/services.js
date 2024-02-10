const URL_API = "./../data/data.json";

export const getData = async () => {
  const response = await fetch(URL_API);
  const data = await response.json();
  return data.tramites;
};
