import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = ({addToCart}) => {
    const [record,setRecord]=useState([]);
    const getRecord=async () => {
        try {
            const res=await axios.get(`https://fakestoreapi.com/products`);
            const store=res.data;
            setRecord(store);
            console.log(`All Record Fetched`);
            
        } catch (error) {
            console.error(`Failed To Fetch`);
            
        }
    }

    useEffect(()=>{
        getRecord();
    },[])

   

    return (
        <div style={{margin:'30px'}}>
            <div class="row row-cols-1 row-cols-md-4 g-4 container">
              {
                record.map((item,i)=>(
                      <div class="col" key={i}>
                    <div class="card h-100" style={{boxShadow:'10px 10px 10px'}}>
                        <img src={item.image} class="card-img-top" alt="Hollywood Sign on The Hill" style={{width:'50%',height:'40%',display:'block',margin:'auto'}} />
                        <div class="card-body" >
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">
                                {item.description.substring(0,90)}
                            </p>
                            <h5 class="card-title">${item.price}</h5>
                            <button type="button" class="btn btn-success" data-mdb-ripple-init onClick={()=>addToCart(item)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
                ))
              }
              
            </div>
        </div>
    )
}

export default Home
