function fetchFunction(method, url, cb) {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange(() => {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				try {
					const response = JSON.parse(xhr.responseText);
					callback(null, response);
				} catch (error) {
					callback(error);
				}
			}
		} else cb(error);
	});
	xhr.open('GET', url);
	xhr.send();
}

function handleError(error, response) {
	if (error) {
		return "Error"
	}
}

if (typeof module !== "undefined") {
	module.exports = {
		fetchFunction
	};
}

