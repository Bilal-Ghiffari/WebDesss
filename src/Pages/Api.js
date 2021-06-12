import React, { useEffect, useState } from 'react';

const Api = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/api")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((jsonRes) => setData(jsonRes.newsitem))
            .catch((err) => setError(err));
    }, []);

    return ( 
        <div>
            {error && <h1>error</h1>}
            {data.map((dataz) => {
                return (
                    <li key={dataz.id}>
                        <span>{dataz.title}</span>
                        <br/>
                        <span>{dataz.description}</span>
                        <br/>
                    </li>
                );
            })}
        </div>
    );
}
 
export default Api;