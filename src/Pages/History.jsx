import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'

const History = () => {
  return (
    <div>
      <div className="d-flex justify-content-between px-3 py-3 ">
        <div className=""><h2>Watch History</h2></div>
        <div className=""><Link style={{textDecoration:"none"}} to={"/home"}>back to home</Link></div>
      </div>
      <div className="col-12">
      <Table 
      striped 
       
      hover 
      style={{ backgroundColor: 'black', color: 'white' }}
    >
      <thead>
        <tr style={{ backgroundColor: 'black', color: 'white' }}>
          <th className='text-center'>#</th>
          <th className='text-center'>Caption</th>
          <th className='text-center'>Link </th>
          <th className='text-center'>Time Stamp</th>
          <th className='text-center'>Clear</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='text-center'>1</td>
          <td className='text-center'>Mark</td>
          <td className='text-center'>Otto</td>
          <td className='text-center'>@mdo</td>
          <td className='text-center'><button className='btn text-danger '><i className="fa-solid fa-trash" ></i></button></td>
        </tr>
        
      </tbody>
    </Table>
      </div>
    </div>
  )
}

export default History