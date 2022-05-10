export const query = async function (queryPath: string) {
  let PROJECT_ID = "indexq78";
  let DATASET = "production";
  let QUERY = encodeURIComponent(queryPath);

  const url = `https://${PROJECT_ID}.api.sanity.io/v2022-05-10/data/query/${DATASET}?query=${QUERY}`;
  const response = await fetch(url);
  const result = await response.json();

  return result;
};
