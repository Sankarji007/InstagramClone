import React from 'react'
import { useEffect, useState } from 'react';
import './mainpage.css';
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
            <div className="gallery-item" tabIndex="0">
                <img className='gallery-image' src={item.thumbnailUrl} alt={item.title} />
            </div>
        </div>
    ));
    return (
        <>
            <header>
                <div className="container">
                    <div className="profile">
                        <div className="profile-image">
                            <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" />
                        </div>
                        <div className="profile-user-settings">
                            <h1 className="profile-user-name">{data.username}</h1>
                            <button class=" profile-edit-btn">Follow</button>

				<button class=" profile-edit-btn" >Message</button>
                            <h2>{data.name}</h2>
                            <h2>{data.email}</h2>
                            <h2><a href={data.website}>{data.website}</a></h2>
                        </div>
                        <div className="profile-stats">
                            <ul>
                                <li><span className="profile-stat-count">164</span> posts</li>
                                <li><span className="profile-stat-count">188</span> followers</li>
                                <li><span className="profile-stat-count">206</span> following</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </header>
            <hr className='line'></hr>
            <main>
                <div className="container">
                    <div className="gallery">
                        {nameList}
                    </div>
                </div>

            </main>
        </>
    )
}
export default MainPage;
