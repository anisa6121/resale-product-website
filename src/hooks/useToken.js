import { useEffect, useState } from "react";

const useToken = (email) => {
	const [token, setToken] = useState("");

	useEffect(() => {
		if (email) {
			fetch(
				`https://product-server-sand.vercel.app/jwt?email=${email}`
			)
				.then((res) => res.json())
				.then((data) => {
					if (data.getToken) {
						localStorage.setItem(
							"getToken",
							data.getToken
						);
						setToken(data.getToken);
					}
				});
		}
	}, [email]);
	return [token];
};

export default useToken;
