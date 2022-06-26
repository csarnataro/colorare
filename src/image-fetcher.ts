import { ResultItem } from "./ResultItem";

const URL = "https://api.qwant.com/v3/search/images";
const COLORING_PAGE_SUFFIX = 'da colorare';

function params(query, offset = 0) {
  return `?count=4&q=${query}+${COLORING_PAGE_SUFFIX}&safesearch=1&locale=it_it&offset=${offset}&device=desktop`;
};


const fetchImages = async (query): Promise<any> => {
  console.dir('******** BEGIN: image-fetcher:12 ********');
  console.dir(query, { depth: null, colors: true });
  console.dir('********   END: image-fetcher:12 ********');
  if (query === '') {
    return [];
  }
  const fullUrl = `${URL}${params(query)}`;
  return (await (await fetch(fullUrl)).json());
}


export { fetchImages };