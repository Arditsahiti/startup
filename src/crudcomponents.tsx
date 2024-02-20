import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface IData {
    id: number;
    title: string;
    description: string;
}

const CrudComponent: React.FC = () => {
    const [data, setData] = useState<IData[] | null>(null);

    const fetchData = async () => {
        const response: AxiosResponse<IData[]> = await axios.get('http://localhost:3000/data');
        setData(response.data);
    };

    const createData = async () => {
        const response: AxiosResponse<IData> = await axios.post('http://localhost:3000/data', {
            // Your data here
        });
        setData(prevData => prevData ? [...prevData, response.data] : [response.data]);
    };

    const updateData = async (id: number) => {
        const response: AxiosResponse<IData> = await axios.put(`http://localhost:3000/data/${id}`, {
            // Your updated data here
        });
        const updatedData = data?.map(item => item.id === id ? response.data : item) || [];
        setData(updatedData);
    };

    const deleteData = async (id: number) => {
        await axios.delete(`http://localhost:3000/data/${id}`);
        const filteredData = data?.filter(item => item.id !== id) || [];
        setData(filteredData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {data ? data.map((item, index) => (
                <div key={index}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <button onClick={() => updateData(item.id)}>Update</button>
                    <button onClick={() => deleteData(item.id)}>Delete</button>
                </div>
            )) : 'Loading...'}
        </div>
    );
};

export default CrudComponent;