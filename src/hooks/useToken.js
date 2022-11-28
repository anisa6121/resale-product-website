import { useEffect, useState } from "react";

const useToken = (email) => {
	const [token, setToken] = useState("");

	useEffect(() => {
		if (email) {
			fetch(`http://localhost:8000/jwt?email=${email}`)
		.then((res) => res.json())
		.then((data) => {
	if (data.getToken) {localStorage.setItem("getToken",data.getToken);
						setToken(data.getToken);
					}
				});
		}
	}, [email]);
	return [token];
};

export default useToken;
