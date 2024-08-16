const EducationTable = ({ data, editData, deleteData }) => {
    return (
        <div>
            <h1>Job Application Data</h1>
            <div className="tableData">
                <table border="1">
                    <thead>
                        <tr>
                            <th>Intermediate %</th>
                            <th>Graduation</th>
                            <th>Graduation Passing Year</th>
                            <th>Post Graduation</th>
                            <th>Post Graduate Passing Year?</th>
                            <th>Exprience in HTML,CSS?</th>
                            <th>Exprience in React?</th>
                            <th>Exprience in JavaScript?</th>
                            <th>Exprience in Python?</th>
                            <th>Exprience in Java?</th>
                            <th>Other Experience</th>
                            <th>Any Certification courses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.Persent_12Th}</td>
                                <td>{item.graduation}</td>
                                <td>{item.gpassingY}</td>
                                <td>{item.postgraduation}</td>
                                <td>{item.pgpassingY}</td>
                                <td>{item.htmlcssEx}</td>
                                <td>{item.reactEx}</td>
                                <td>{item.javascriptEx}</td>
                                <td>{item.pythonEx}</td>
                                <td>{item.javaEx}</td>
                                <td>{item.otherEx}</td>
                                <td>{item.other_coures}</td>
                                <td><button onClick={() => editData(index)} className='edit'>Edit</button></td>
                                <td><button onClick={() => deleteData(index)} className='Delete'>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default EducationTable;