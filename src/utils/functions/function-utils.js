export const concatenar = (img) => `https://image.tmdb.org/t/p/w500/${img}`;

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

export const chamarLoading = (t = 1000) =>
    new Promise((resolve) => {
        setTimeout(resolve, t);
    });
