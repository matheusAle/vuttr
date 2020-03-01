const BASE_API = process.env.REACT_APP_API_HOST;
const API_AUTH = process.env.REACT_APP_API__AUTHORIZATION;

const execRequest = ({ url, method, body} = {}) => {
    return fetch(`${BASE_API}${url}`, {
        method,
        body: JSON.stringify(body),
        mode: "cors",
        headers: new Headers({
            authorization: API_AUTH,
            'Content-Type': 'Application/json'
        })
    })
        .then(res => res.json())
};

export const Tools = {
    getAll() {
        return execRequest({ method: 'GET', url: '/tools' });
    },
    create(data) {
        return execRequest({ method: 'POST', url: '/tools', body: data });
    },
    delete(id) {
        return execRequest({ method: 'DELETE', url: '/tools/' + id });
    },
    async searchFor(string) {
        const results = await execRequest({ method: 'GET', url: '/tools?q=' + string });
        return results.map((result) => ({
            title: highlighterText(string, result.title),
            description: highlighterText(string, result.description),
            tags: result.tags.map(tag => highlighterText(string, tag))
        }))
    },
    async searchForTag(string) {
        const results = await execRequest({ method: 'GET', url: '/tools?tags_like=' + string });
        return results.map((result) => ({
            ...result,
            tags: result.tags.map(tag => highlighterText(string, tag))
        }))
    }
};

function highlighterText(searchFor, source) {
    if (!searchFor) return source;

    return String(source).replace(new RegExp(searchFor, 'ig'), (match) => {
        return `<span class="highlight">${match}</span>`
    })
}
