const fetchFunction = (method, url, responseBody, callback) => {
	if (!url) callback(new TypeError('Enter url'));
	if (!method) callback(new TypeError('Enter method'));
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange(() => {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				try {
					const response = JSON.parse(xhr.responseText);
					callback(null, response);

				} catch (error) {
					callback(error);
				}
			} else {
				callback(new TypeError('There is error in response'));
			}
		}
	})
	xhr.open('GET', url)
	xhr.send(responseBody);
}

const handleResponse = (error, response) => {
	if (error) console.log(error)//handle Error
	// else // handle Response
}
if (typeof module !== "undefined") {
	module.exports = { fetchFunction };
}
