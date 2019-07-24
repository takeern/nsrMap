const getMap = () => {
    return fetch('http://47.103.12.134:8084/getMap', {
        method: 'get',
        mode: 'cors',
    });
};

export {
    getMap,
};