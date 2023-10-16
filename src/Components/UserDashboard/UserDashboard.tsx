import React, { useEffect } from 'react';
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJs,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js'
ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,Tooltip,Legend
)
export const options={
    responsive:true,
    plugins:{
        legend:{
            display:false
        },
        title:
        {
            display:true,
            text:'Count of Department'
        }
    }
};
export const options1={
    responsive:true,
    plugins:{
        legend:{
            display:false
        },
        title:
        {
            display:true,
            text:'Count of Roles'
        }
    }
};
export const UserDashBoard= (props:any) => {
    
const labels=Object.keys(props.data[0])
const labels1=Object.keys(props.data[1])
    const data=
{
    labels,
    datasets:[
        {
            label:'Departments',
            data:props.data[0],
            backgroundColor:['orange','green','blue','bisque']
        }
    ]
}
const data1=
{
    labels1,
    datasets:[
        {
            label:'Role',
            data:props.data[1],
            backgroundColor:['blue','green']  
        }
    ]
}
    return(<>
    <Bar options={options} data={data}/>
    <Bar options={options1} data={data1}/>
    </>)

}