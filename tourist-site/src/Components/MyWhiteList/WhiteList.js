import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Orders from './Orders';


const WhiteList = () => {

    const {email}=useParams()
    const [myOrders,setorders]=useState([])
   

    useEffect(()=>{
        fetch(`https://pacific-falls-94383.herokuapp.com/orders/${email}`).then(res=>res.json()).then(data=>{

    setorders(data)
        })

    },[])

    return (
        <div>
            <h4>whitelist</h4>

            {

                myOrders.map(order=><Orders
                
                key={order._id}
                order={order}
                ></Orders>)
            }

        </div>
    );
};

export default WhiteList;