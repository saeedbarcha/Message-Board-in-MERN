import React from 'react'
import DataArray from '../Data'

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard row d-flex">
        <div className="left-dashboard col-2 text-center">
         
        </div>
        <div className="right-dashboard col-10">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User Name</th>
                <th scope="col">Message</th>
                <th scope="col">Email</th>
                <th scope="col">Board</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
        {
          DataArray.map((data) => {
            return(
            <tbody key={data.id}>
              <tr>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>{data.message}</td>
                <td>{data.email}</td>
                <td>{data.board}</td>
                <td>{data.date}</td>
              </tr>

            </tbody>)
          })
        }
          </table>
        </div>
      </div>
  {console.log(DataArray)}
    </div>
  )
}

export default Dashboard
