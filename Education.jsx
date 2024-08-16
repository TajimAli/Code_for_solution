import { useState, useEffect } from "react";

import EdetailsForm from "./EdetailsForm"
import EducationTable from "./educationTable";

function Education() {
    const [data, setData] = useState([]);
    const [currentD, setCurrentD] = useState(null);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('EducationData')) || [];
        setData(storedData);
    }, []);

    const saveToLocalStorage = (data) => {
        localStorage.setItem('EducationData', JSON.stringify(data));
    };

    const addUpdate = (newData) => {
        if (currentD) {
            const updatedData = data.map((item, index) =>
                index === currentD.index ? newData : item
            );
            setData(updatedData);
            saveToLocalStorage(updatedData);
        } else { 
            const updatedData = [...data, newData];
            setData(updatedData);
            saveToLocalStorage(updatedData);
        }
        setCurrentD(null);
    };

    const editData = (index) => {
        setCurrentD({ ...data[index], index });
    };

    const deleteData = (index) => {
        if (window.confirm("Do You Want To Delete This Data?")) {
            const updatedData = data.filter((_, i) => i !== index);
            setData(updatedData);
            saveToLocalStorage(updatedData);
        }
    };

    const clearD = () => {
        setCurrentD(null);
    };

    return (
        <div>
            <EdetailsForm addUpdate={addUpdate} currentD={currentD} clearD={clearD} />
            <EducationTable data={data} editData={editData} deleteData={deleteData}/>
        </div>
    )
}
export default Education;