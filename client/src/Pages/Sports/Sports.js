import React, { useEffect, useState } from "react";
// import DataArray from '../Data'
import axios from "axios";

const Sports = () => {
  const [allData, setAllData] = useState([]);
  const [addFormData, setAddFormData] = useState({
    _id: "",
    name: "",
    country: "",
    numOfPlayers: "",
    playIn: "",
    date: "",
  });
  const [editOn, setEditOn] = useState(false);

  const handleFormData = (e) => {
    setAddFormData({ ...addFormData, [e.target.name]: e.target.value });
  };

  const submitFormData = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/sports", {
        name: addFormData.name,
        country: addFormData.country,
        numOfPlayers: addFormData.numOfPlayers,
        playIn: addFormData.playIn,
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
      country: all.country,
      numOfPlayers: all.numOfPlayers,
      playIn: all.playIn,
      date: all.date,
    });
  };

  const handleUpdate = (updId) => {
    axios
      .put("http://localhost:8000/sports", {
        _id: addFormData._id,
        name: addFormData.name,
        country: addFormData.country,
        numOfPlayers: addFormData.numOfPlayers,
        playIn: addFormData.playIn,
        date: addFormData.date,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const handleDelete = (deltId) => {
    axios.delete(`http://localhost:8000/sports/${deltId}`).then((res) => {
      console.log(res);
    });
    console.log(deltId);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/sports").then((res) => {
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
                <th scope="col">country</th>
                <th scope="col">numOfPlayers</th>
                <th scope="col">playIn</th>
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
                    <td>{data.country}</td>
                    <td>{data.numOfPlayers}</td>
                    <td>{data.playIn}</td>
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
        <h3>{editOn ? "Update Sports" : "Add Sports"}</h3>
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
              name="country"
              onChange={handleFormData}
              placeholder={
                editOn ? addFormData.country : "Enter a country"
              }
            />
            <input
              type="text"
              name="numOfPlayers"
              onChange={handleFormData}
              placeholder={editOn ? addFormData.numOfPlayers : "Enter a numOfPlayers"}
            />
            <input
              type="text"
              name="playIn"
              onChange={handleFormData}
              placeholder={editOn ? addFormData.playIn : "Enter a playIn"}
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

export default Sports;
