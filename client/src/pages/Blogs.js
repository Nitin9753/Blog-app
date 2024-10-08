import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    //get blogs

    const baseURL = "https://blog-app-lk7f.onrender.com";
    const getAllBlogs = async() => {
        try {
            const { data } = await axios.get(`${baseURL}/api/v1/blog/all-blog`);
            if (data.success) {
                setBlogs(data.blogs);
            }
        } catch (error) {
            console.log('error in getAllblogs')
                // console.log(error);
        }
    };
    useEffect(() => {
        getAllBlogs();
    }, []);
    return ( <
        div > {
            blogs &&
            blogs.map((blog) => ( <
                BlogCard id = { blog._id }
                isUser = { localStorage.getItem("userId") === blog.user._id }
                title = { blog.title }
                description = { blog.description }
                image = { blog.image }
                username = { blog.user.username }
                time = { blog.createdAt }
                />
            ))
        } <
        /div>
    );
};

export default Blogs;