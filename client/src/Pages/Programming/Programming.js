import React, { useEffect, useState } from "react";
// import DataArray from '../Data'
import axios from "axios";

const Programming = () => {
  const [allData, setAllData] = useState([]);
  const [addFormData, setAddFormData] = useState({
    _id: "",
    language: "",
    applications: "",
    category: "",
    level: "",
    duration: "",
  });
  const [editOn, setEditOn] = useState(false);

  const handleFormData = (e) => {
    setAddFormData({ ...addFormData, [e.target.name]: e.target.value });
  };

  const submitFormData = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/pro", {
        language: addFormData.language,
        applications: addFormData.applications,
        category: addFormData.category,
        level: addFormData.level,
        duration: addFormData.duration,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const handleEdit = (all) => {
    setEditOn(true);
    setAddFormData({
      _id: all._id,
      language: all.language,
      applications: all.applications,
      category: all.category,
      level: all.level,
      duration: all.duration,
    });
  };

  const handleUpdate = (updId) => {
    axios
      .put("http://localhost:8000/pro", {
        _id: addFormData._id,
        language: addFormData.language,
        applications: addFormData.applications,
        category: addFormData.category,
        level: addFormData.level,
        duration: addFormData.duration,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const handleDelete = (deltId) => {
    axios.delete(`http://localhost:8000/pro/${deltId}`).then((res) => {
      console.log(res);
    });
    console.log(deltId);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/pro").then((res) => {
      setAllData(res.data);
    });
  }, []);

  return (
    <div>
      <div className="dashboard row d-flex">
        <div className="ml-2 right-dashboard col-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">language</th>
                <th scope="col">applications</th>
                <th scope="col">category</th>
                <th scope="col">level</th>
                <th scope="col">duration</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {allData.map((data) => {
              return (
                <tbody key={data._id}>
                  <tr>
                    <th scope="row">{data._id}</th>
                    <td>{data.language}</td>
                    <td>{data.applications}</td>
                    <td>{data.category}</td>
                    <td>{data.level}</td>
                    <td>{data.duration}</td>
                    <td>
                      <button
                        className="editBtn btnSClass bg-primary m-1"
                        key={data._id}
                        onClick={() => handleEdit(data)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="delBtn btnSClass bg-danger"
                        key={data._id}
                        onClick={() => handleDelete(data._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        <h3>{editOn ? "Update Programmer" : "Add Programmer"}</h3>
        <div className="form-div">
          <form className="fome">
          <div>
            <input
              type="text"
              name="language"
              onChange={handleFormData}
              placeholder={editOn ? addFormData.language : "Enter a language"}
            />
            <input
              type="text"
              name="applications"
              onChange={handleFormData}
              placeholder={
                editOn ? addFormData.applications : "Enter a applications"
              }
            />
            <input
              type="text"
              name="category"
              onChange={handleFormData}
              placeholder={editOn ? addFormData.category : "Enter a category"}
            />
            <input
              type="text"
              name="level"
              onChange={handleFormData}
              placeholder={editOn ? addFormData.level : "Enter a level"}
            />
            <input
              type="text"
              name="duration"
              onChange={handleFormData}
              placeholder={editOn ? addFormData.duration : "Enter a duration"}

              
            />
          </div>
            
            <div>
              {editOn ? (
                <button
                  className="button1 addBtn btnSClass bg-primary mt-3"
                  key={addFormData._id}
                  onClick={handleUpdate(addFormData._id)}
                >
                  Update
                </button>
              ) : (
                <button
                  className="button1 addBtn btnSClass bg-success mt-3"
                  onClick={submitFormData}
                >
                  Add
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Programming;
