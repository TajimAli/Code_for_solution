import { useState, useEffect } from "react";

function EdetailsForm({ addUpdate, currentD, clearD }) {
    const [education, setEducation] = useState({
        Persent_Th: "", graduation: "", gpassingY: "", postgraduation: "", pgpassingY: "", htmlcssEx: "",
        reactEx: "", javascriptEx: "", pythonEx: "", javaEx: "", otherEx: "", other_coures: "",
    })

    useEffect(() => {
        if (currentD) {
            setEducation(currentD);
        }
    }, [currentD]);


    const handleChange = (e) => {
        const { name, value } = e.target
        setEducation({ ...education, [name]: value, })
    };

    const handleSubmit = (e) => {
        e.preventdefault()
        addUpdate(education)
    }

    setEducation({
        Persent_Th: "", graduation: "", gpassingY: "", postgraduation: "", pgpassingY: "", htmlcssEx: "",
        reactEx: "", javascriptEx: "", pythonEx: "", javaEx: "", otherEx: "", other_coures: "",
    });
    clearD();
    

    return (
        <div className="container">
            <h1>Employee Information</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Persent_Th">Persentage in Intermediate.?</label>
                    <input type="Persent_Th" name="Persent_Th" value={education.Persent_Th} placeholder="Intermediate Persentage" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="graduation">What is Your Graduation:</label>
                    <select name="graduation" value={education.graduation} id="graduation" onChange={handleChange}>
                        <option value="graduation">--Select Graduation--</option>
                        <option value="btech">B Tech</option>
                        <option value="ba">Bachelor of Arts</option>
                        <option value="bca">Bachelor of Computer Applications</option>
                        <option value="bcon">Bachelor of Commerce</option>
                        <option value="bsc">Bachelor of Science.</option>
                        <option value="barch">Bachelor of Architecture</option>
                        <option value="bdes">Bachelor of Design</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="gpassingY">Graduation Passing Year?</label>
                    <input type="gpassingY" name="gpassingY" value={education.gpassingY} placeholder="Enter Graduate Passing Year" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="postgraduation">What is Your Post Graduation:</label>
                    <select name="postgraduation" value={education.postgraduation} id="postgraduation" onChange={handleChange}>
                        <option value="coures">--Select Post Graduation--</option>
                        <option value="mtech">M Tech</option>
                        <option value="ma">Master of Arts</option>
                        <option value="mca"> Master of Computer Applications</option>
                        <option value="mcom">Master of Commerce</option>
                        <option value="msc">Master of Science</option>
                        <option value="march">Masters in Architecture</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="pgpassingY">Post Graduate Passing Year?</label>
                    <input type="pgpassingY" name="pgpassingY" value={education.pgpassingY} placeholder="Enter Post Graduate Passing Year" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="htmlcssEx">Exprience in HTML,CSS?</label>
                    <input type="htmlcssEx" name="htmlcssEx" value={education.htmlcssEx} placeholder="Exprience in HTML,CSS" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="reactEx">Exprience in React?</label>
                    <input type="reactEx" name="reactEx" value={education.reactEx} placeholder="Exprience in React" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="javascriptEx">Exprience in JavaScript?</label>
                    <input type="javascriptEx" name="javascriptEx" value={education.javascriptEx} placeholder="Exprience in JavaScript" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="pythonEx">Exprience in Python?</label>
                    <input type="pythonEx" name="pythonEx" value={education.pythonEx} placeholder="Exprience in Python" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="javaEx">Exprience in Java?</label>
                    <input type="javaEx" name="javaEx" value={education.javaEx} placeholder="Exprience in javaEx" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="otherEx">Exprience in Other Programing Language?</label>
                    <input type="otherEx" name="otherEx" value={education.otherEx} placeholder="Exprience in otherEx" onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="other_coures">Any Certification courses:</label>
                    <input type="other_coures" name="other_coures" value={education.other_coures} onChange={handleChange} />
                </div>

                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default EdetailsForm;