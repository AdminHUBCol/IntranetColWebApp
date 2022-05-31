const authHeader = () => {
    const user = localStorage.getItem("AUTHTOKEN");
    if (user) {
        return {
            Authorization: `Bearer ${user}`,
            "Access-Control-Allow-Origin": "*",
        };
    } else {
        return {};
    }
}

export default authHeader