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
            <div class="gallery-item" tabindex="0">
                <img src={item.thumbnailUrl} alt={item.name} />
            </div>
        </div>
    ));
    return (
        <>
            <header>
                <div class="container">
                    <div class="profile">
                        <div class="profile-image">
                            <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" />
                        </div>
                        <div class="profile-user-settings">
                            <h1 class="profile-user-name">{data.username}</h1>

                            <h2>{data.name}</h2>
                            <h2>{data.email}</h2>
                            <h2>{data.website}</h2>
                        </div>
                        <div class="profile-stats">
                            <ul>
                                <li><span class="profile-stat-count">164</span> posts</li>
                                <li><span class="profile-stat-count">188</span> followers</li>
                                <li><span class="profile-stat-count">206</span> following</li>
                            </ul>
                        </div>
                        <div class="profile-bio">
                            {/* <p><span class="profile-real-name">{data.name}  </span>{data.address.street}, {data.address.suite}</p> */}
                           
                        </div>
                    </div>

                </div>
            </header>
            <main>
                <div class="container">
                    <div class="gallery">
                        {nameList}
                    </div>
                </div>

            </main>
        </>
    )
}
export default MainPage;
