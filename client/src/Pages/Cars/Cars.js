import React, { useEffect, useState } from "react";
// import DataArray from '../Data'
import axios from "axios";

const Cars = () => {
  const [allData, setAllData] = useState([]);
  const [addFormData, setAddFormData] = useState({
    _id: "",
    name: "",
    model: "",
    price: "",
    speed: "",
    date: "",
  });
  const [editOn, setEditOn] = useState(false);

  const handleFormData = (e) => {
    setAddFormData({ ...addFormData, [e.target.name]: e.target.value });
  };

  const submitFormData = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/car", {
        name: addFormData.name,
        model: addFormData.model,
        price: addFormData.price,
        speed: addFormData.speed,
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
      model: all.model,
      price: all.price,
      speed: all.speed,
      date: all.date,
    });
  };

  const handleUpdate = (updId) => {
    axios
      .put("http://localhost:8000/car", {
        _id: addFormData._id,
        name: addFormData.name,
        model: addFormData.model,
        price: addFormData.price,
        speed: addFormData.speed,
        date: addFormData.date,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const handleDelete = (deltId) => {
    axios.delete(`http://localhost:8000/car/${deltId}`).then((res) => {
      console.log(res);
    });
    console.log(deltId);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/car").then((res) => {
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
                <th scope="col">model</th>
                <th scope="col">price</th>
                <th scope="col">speed</th>
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
                    <td>{data.model}</td>
                    <td>{data.price}</td>
                    <td>{data.speed}</td>
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
        <h3>{editOn ? "Update Cars" : "Add Cars"}</h3>
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
              name="model"
              onChange={handleFormData}
              placeholder={
                editOn ? addFormData.model : "Enter a model"
              }
            />
            <input
              type="text"
              name="price"
              onChange={handleFormData}
              placeholder={editOn ? addFormData.price : "Enter a price"}
            />
            <input
              type="text"
              name="speed"
              onChange={handleFormData}
              placeholder={editOn ? addFormData.speed : "Enter a speed"}
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

export default Cars;
