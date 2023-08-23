import { useEffect, useState } from "react";

export function useFetch(endpointUrl) {
    const [errors, setErrors] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            try {
                const signal = controller.signal;
                const response = await fetch(endpointUrl, {
                    signal: signal
                });
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error);
                setErrors([
                    ...errors,
                    error
                ]);
            }
        })();

        return () => {
            controller.abort();
        };
    }, []);

    return [
        data,
        errors
    ]
}
