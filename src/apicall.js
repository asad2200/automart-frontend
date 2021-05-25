const url = 'http://127.0.0.1:8000'
export const getCompanyNames = () => {
    var response = fetch(`${url}/glass/companys/`)
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
    return response;
};

export const getCarNames = (id) => {
    var response = fetch(`${url}/glass/cars/?company=${id}`)
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
    return response;
};

export const getCarModels = (id) => {
    var response = fetch(`${url}/glass/models/?car=${id}`)
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
    return response;
};

export const getGlass = (cid, mid) => {
    var response = fetch(`${url}/glass/glass-list/?car=${cid}&model=${mid}`)
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
    return response;
};

export const getSearchGlass = (carname) => {
    return fetch(`${url}/glass/glass-list/?search=${carname}`)
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};
