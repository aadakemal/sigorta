const HTTP = axios.create({
	baseURL: '',
	headers: {
		Authorization: ``
	},
	timeout: 0
});

function ilGetir() {
	return new Promise((resolve, reject) => {
		return HTTP.get(`/service/IlGetir`)
			.then(response => resolve(response))
			.catch(error => reject(error))
	});
}

function servisIlGetir(servicetype = '', brand = '', subservicetype = '') {
	return new Promise((resolve, reject) => {
		return HTTP.get(`/service/ServisIlGetir/${servicetype}/${brand}/${subservicetype}`)
			.then(response => resolve(response))
			.catch(error => reject(error))
	});
}

function ilceGetir(city = "") {
	return new Promise((resolve, reject) => {
		return HTTP.get(`/service/IlceGetir/${city}`)
			.then(response => resolve(response))
			.catch(error => reject(error))
	});
}


function servisIlceGetir(city = "", servicetype = '', brand = '', subservicetype = '') {
	return new Promise((resolve, reject) => {
		return HTTP.get(`/service/ServisIlceGetir/${city}/${servicetype}/${brand}/${subservicetype}`)
			.then(response => resolve(response))
			.catch(error => reject(error))
	});
}

function markalariGetir(param) {
	return new Promise((resolve, reject) => {
		return HTTP.get(`/service/MarkalariGetir/${param}`)
			.then(response => resolve(response))
			.catch(error => reject(error))
	});
}
