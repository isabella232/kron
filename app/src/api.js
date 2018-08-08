const API_URL = '/api/v1';

async function get(endpoint, query_params) {
	try {
		const response = await fetch(API_URL + endpoint + (query_params ? "?" + query_params : ""), {
			method: 'GET',
			headers: {
				'content-type': "application/json"
			}
		});
		const data = await response.json();
		return data;
	} catch(e) {
		console.error(e);
		return {err: e};
	}
}

async function post(endpoint, params) {
	try {
		const response = await fetch(API_URL + endpoint, {
			method: 'POST',
			headers: {
				'content-type': "application/json"
			},
			body: JSON.stringify(params)
		});
		const data = await response.json();
		return data;
	} catch(e) {
		console.error(e);
		return {err: e};
	}
}

export default {
	get,
	post
}