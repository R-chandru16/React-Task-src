import React, { useEffect, useState } from 'react';
import './landingpage.css'
import {Modal,FormControl} from 'react-bootstrap'
import { UserDashBoard } from '../UserDashboard/UserDashboard';
export const LandingPage= (props:any) => {
    const [JsonAdmin,setJsonAdmin]:any=useState([])
    const [user,setUser]=useState({
        id:"",
        name:"",
        department:"",
        mailId:"",
        password:"",
        role:"",
        status:""
    })
    const [show,setShow]=useState(false)
    const [isEdit,setIsEdit]=useState(false)
    useEffect(()=>
    {
        if(props.data.length!==0 && props.role==='Admin')
        {
            setJsonAdmin(props.data)
        }
    },[])
    const onDeleteUsers=(id:any)=>
    {
        const updatedDataList = JsonAdmin.map((item:any) => {
            if (item.id === id) {
              return { ...item,status:"Deleted" };
            }
            return item;
          });
          setJsonAdmin(updatedDataList)
    }
    const onAddUsers=()=>
    {
        const updatedDataList=JsonAdmin
        updatedDataList.push(user)
        setJsonAdmin(updatedDataList)
        const userTemp={
            id:"",
            name:"",
            department:"",
            mailId:"",
            password:"",
            role:"",
            status:""
        }
        setUser(userTemp);
        setShow(false)
    }
    const onEditUsers=(id:string)=>
    {
        const updatedDataList = JsonAdmin.map((item:any) => {
            if (item.id === id) {
              return { ...item,name:user.name,department:user.department,mailId:user.mailId,status:user.status };
            }
            return item;
          });
          setJsonAdmin(updatedDataList)
          const userTemp={
            id:"",
            name:"",
            department:"",
            mailId:"",
            password:"",
            role:"",
            status:""
        }
        setUser(userTemp);
        setShow(false)
    }
    const onClickEdit=(id:any)=>
    {
        JsonAdmin.map((n:any)=>
        {
            if(n.id===id)
            {
                setUser(n)
            }
        })
        setIsEdit(true)
        setShow(true)
    }
    return(<>
    <div className='dash-container'>
        
    {props.role==='User'?
        <div className='dash-navbar'>
        <span>Kanini Bench</span>
        <span>User DashBoard</span>
        <span>EndTest</span>
        </div>
        :props.role==='Admin'?
        <div className='dash-navbar'>
        <span>Kanini Bench</span>
        <span>Admin DashBoard</span>
        <span>EndTest</span>
        </div>:''}
    <div className='dash-main'>
    {props.role==='Admin'?
    <div className='dash-admin-table-container'>
    <div className='dash-table-heading'>
        <span></span>
        <span>User Table</span>
        <span><button className='btn' onClick={()=>setShow(true)}>Add</button></span>
    </div>
    <table className="table">
<thead>
<tr>
  <th scope="col">Name</th>
  <th scope="col">Department</th>
  <th scope="col">Mail ID</th>
  <th scope='col'>Role</th>
  <th scope="col">Status</th>
  <th scope='col'>Edit</th>
  <th scope='col'>Delete</th>
</tr>
</thead>
<tbody>
{JsonAdmin.map((n:any)=>{
    return(
    <tr>
    <td>{n.name}</td>
    <td>{n.department}</td>
    <td>{n.mailId}</td>
    <td>{n.role}</td>
    <td>{n.status}</td>
    {n.role==='Admin'?<></>
    :<>
    <td><button className='btn' onClick={()=>onClickEdit(n.id)}>Edit</button></td>
    <td><button className='btn' onClick={()=>onDeleteUsers(n.id)}>Delete</button></td>
    </>}
    </tr>)
})}
</tbody>
</table>
<Modal show={show}>
    <Modal.Header>{isEdit?'Edit Form':'Add Form'}
        <button className='btn' onClick={()=>{setShow(false);setIsEdit(false);const userTemp={
            id:"",
            name:"",
            department:"",
            mailId:"",
            password:"",
            role:"",
            status:""
        }
        setUser(userTemp);}}>Close</button>
    </Modal.Header>
    <Modal.Body>
        <label>ID</label>
        <FormControl type='text' value={user.id} placeholder='Id' disabled={isEdit?true:false} onChange={(e:any)=>setUser({...user,id:e.target.value})}></FormControl>
        <br></br>
        <label>Name</label>
        <FormControl type='text' value={user.name} placeholder='Name' onChange={(e:any)=>setUser({...user,name:e.target.value})}></FormControl>
        <br></br>
        <label>Department</label>
        <FormControl type='text' value={user.department} placeholder='Department' onChange={(e:any)=>setUser({...user,department:e.target.value})}></FormControl>
        <br></br>
        <label>Mail ID</label>
        <FormControl type='text' value={user.mailId} placeholder='Mail ID' onChange={(e:any)=>setUser({...user,mailId:e.target.value})}></FormControl>
        <br></br>
        <label>Password</label>
        <FormControl type='password' value={user.password} placeholder='Password' disabled={isEdit?true:false} onChange={(e:any)=>setUser({...user,password:e.target.value})}></FormControl>
        <br></br>
        <label>Role</label>
        <FormControl type='text' value={user.role} placeholder='Role' disabled={isEdit?true:false} onChange={(e:any)=>setUser({...user,role:e.target.value})}></FormControl>
        <br></br>
        <label>Status</label>
        <FormControl type='text' value={user.status} placeholder='Status' onChange={(e:any)=>setUser({...user,status:e.target.value})}></FormControl>
        <br></br>
    </Modal.Body>
    <Modal.Footer>
        <span>{isEdit?
        <button className='btn btn-primary' onClick={()=>onEditUsers(user.id)}>Edit</button>:
            <button className='btn btn-primary' onClick={()=>onAddUsers()}>Add</button>
        }
        </span>
    </Modal.Footer>
</Modal>
</div>:
    props.role==='User'?
    <>
    <UserDashBoard data={props.data}/>
    </>
    :''
    }
    </div>
</div>
    </>)
}