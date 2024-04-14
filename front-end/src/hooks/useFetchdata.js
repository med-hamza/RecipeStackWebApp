import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



function useFetchData(fetchDataAction, selector) {
    const dispatch = useDispatch();
    const fetchedData = useSelector(selector);

    console.log('Fetched Data:', fetchedData);
    const { data, status, error } = fetchedData || { data: null, status: 'idle', error: null };

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchDataAction());
        }
    }, [dispatch, fetchDataAction, status]);

    return { data, status, error };

}

export default useFetchData;