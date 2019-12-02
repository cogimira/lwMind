const soup_ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const uuid = function () {
    const length = 20;
    const soupLength = soup_.length;
    const id = [];
    for (let i = 0; i < length; i++) {
        id[i] = soup_.charAt(Math.random() * soupLength);
    }
    return id.join('');
};
export default uuid;
