export const concatenar = (img, width = 600, height = 900) =>
  `https://image.tmdb.org/t/p/w${width}_and_h${height}_bestv2${img}`;

export const isNotEmpty = (object) => {
  return object !== '' && object !== undefined && object !== null;
};

export const buildQueryParams = (api_url) => {
  const cleanQueryJson = Object.entries(api_url).reduce(
    (a, [k, v]) => (isNotEmpty(v) ? ((a[k] = v), a) : a),
    {}
  );
  return Object.entries(cleanQueryJson)
    .map((pair) => pair.map(encodeURIComponent).join('='))
    .join('&');
};
