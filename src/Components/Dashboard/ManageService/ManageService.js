import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [manageService,setManageService]=useState([]);
    const [id,setId]=useState();

    const handleDelete = (id,e) => {
        fetch(`http://localhost:5000/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result) {

                      e.target.parentNode.parentNode.remove()
                    }
                })
        console.log(e.target.parentNode);
       
      }

    useEffect (() =>{
        fetch('http://localhost:5000/getAddManage')
      .then(res => res.json())
      .then(data => setManageService(data))

    },[])
    console.log(setManageService);
    return (
        <table class="table">
        <thead>
            <tr>
                <th scope="col"> Service Name</th>
                <th scope="col">Description</th>
                <th scope="col">Delete</th>
                
            </tr>
        </thead>
        <tbody>
            {
                manageService.map(ms => {
                    return <tr>
                        <td>{ms.serviceName}</td>
                        <td>{ms.description}</td>
                        <td><button className="btn btn-danger" onClick={(e) => handleDelete(ms._id,e)}>
                            delete</button></td>
                       
                        

                    </tr>
                })
            }

        </tbody>
    </table>
    );
};

export default ManageService;