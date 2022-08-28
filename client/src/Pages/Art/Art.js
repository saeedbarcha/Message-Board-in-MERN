import React, { useEffect, useState } from "react";
// import DataArray from '../Data'
import axios from "axios";

const Art = () => {
  const [allData, setAllData] = useState([]);
  const [addFormData, setAddFormData] = useState({
    _id: "",
    name: "",
    artistName: "",
    type: "",
    price: "",
    date: "",
  });
  const [editOn, setEditOn] = useState(false);

  const handleFormData = (e) => {
    setAddFormData({ ...addFormData, [e.target.name]: e.target.value });
  };

  const submitFormData = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/art", {
        name: addFormData.name,
        artistName: addFormData.artistName,
        type: addFormData.type,
        price: addFormData.price,
        date: addFormData.date,
      })
      .then((res) => {
        console.log(res);
      });
      
  };

  const handleEdit = (all) => {
    setEditOn(true);
    setAddFormData({
      _id: all._id,
      name: all.name,
      artistName: all.artistName,
      type: all.type,
      price: all.price,
      date: all.date,
    });
  };

  const handleUpdate = (updId) => {
    axios
      .put("http://localhost:8000/art", {
        _id: addFormData._id,
        name: addFormData.name,
        artistName: addFormData.artistName,
        type: addFormData.type,
        price: addFormData.price,
        date: addFormData.date,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const handleDelete = (deltId) => {
    axios.delete(`http://localhost:8000/art/${deltId}`).then((res) => {
      console.log(res);
    });
    console.log(deltId);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/art").then((res) => {
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
                <th scope="col">name</th>
                <th scope="col">artistName</th>
                <th scope="col">type</th>
                <th scope="col">price</th>
                <th scope="col">date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {allData.map((data) => {
              return (
                <tbody key={data._id}>
                  <tr>
                    <th scope="row">{data._id}</th>
                    <td>{data.name}</td>
                    <td>{data.artistName}</td>
                    <td>{data.type}</td>
                    <td>{data.price}</td>
                    <td>{data.date}</td>
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
        <h3>{editOn ? "Update Art" : "Add Art"}</h3>
        <div className="form-div">
          <form className="fome">
          <div>
            <input
              type="text"
              name="name"
              onChange={handleFormData}
              placeholder={editOn ? addFormData.name : "Enter a name"}
            />
            <input
              type="text"
              name="artistName"
              onChange={handleFormData}
              placeholder={
                editOn ? addFormData.artistName : "Enter a artistName"
              }
            />
            <input
              type="text"
              name="type"
              onChange={handleFormData}
              placeholder={editOn ? addFormData.type : "Enter a type"}
            />
            <input
              type="text"
              name="price"
              onChange={handleFormData}
              placeholder={editOn ? addFormData.price : "Enter a price"}
            />
            <input
              type="text"
              name="date"
              onChange={handleFormData}
              placeholder={editOn ? addFormData.date : "Enter a date"}

              
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

export default Art;
