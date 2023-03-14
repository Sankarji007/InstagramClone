import React from 'react'
import { useEffect, useState } from 'react';
import './style.css';

const MainPage = () => {
    const [data, setData] = useState([]);
    const [posts, setPosts] = useState([]);
    const apiGet = async () => {
        const response = await fetch("http://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log(data.name);
        setData(data)
    }
    useEffect(() => {
        apiGet();
        Posts();
    }, []);
    const Posts = async () => {
        const response = await fetch("http://jsonplaceholder.typicode.com/photos");
        const data = await response.json();
        console.log(data);
        setPosts(data)
    }
    const nameList = posts.map((item) => (
        <div key={item.id}>

            <div class="card">
                <img src={item.thumbnailUrl} alt={item.name} />
            </div>



            {/* <p>{item.thumbnailUrl}</p> */}
        </div>
    ));
    return (
        <>
        <div className='top'>
            <div className='mainpage'>
                <div className='profile'>
                    <img src='https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/05/24/685839-virat-kohli-reuters.jpg' alt="Avatar" />
                </div>
                <span>
                    <h1>{data.name}</h1>
                    <h2>{data.username}</h2>
                    <h2>{data.email}</h2>
                </span>

            </div>
        </div>
            
            <hr className='end'></hr>
            <div className="card-container">
                {nameList}
            </div>
        </>

    )
}
export default MainPage;


