import { useEffect, useState } from 'react';
import classes from './FeedView.module.scss';

import NewPostForm from '../../components/Feed/NewPostForm/NewPostForm';
import Posts from '../../components/Feed/Posts/Posts';
import SideButtons from '../../components/Feed/SideButtons/SideButtons';
 
import { toast } from 'react-toastify';
import axios from 'axios';
import { useConfigContext } from '../../contexts/ConfigContext';
import { useUserContext } from '../../contexts/UserContext';

const FeedView = () => {
    const [posts, setPosts] = useState([]);
    const { startLoading, stopLoading } = useConfigContext();
    const { token, user } = useUserContext();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            startLoading();
            //const response = await fetch("http://localhost:3500/api/post/");
            const { data } = await axios.get("/post");
            setPosts(data.posts)

        } catch (error) {
            toast.error("Unexpected error!")
        } finally{
            stopLoading();
        }
    }


    //Funcion para guardar post en la API
    
    const savePost = async (title, description, image) =>{
        try {

            startLoading();

            await axios.post("/post", {title, description, image});
            toast.success ("Post saved!");

        } catch (error) {
            const { status } = error.response || { status: 500};
            const msg = {
                "400": "Wrong fields",
                "404": "Not Found",
                "500": "Something went wrong!"
            }

            toast.error(msg[status.toString()] || "Unexpected error!")
        } finally{
            stopLoading();
        }
    }

    const onAddPostHandler = async (title, description, image) => {
        // const _posts = [ ...posts, {
        //     _id: new Date().getTime().toString(),
        //     title: title,
        //     description: description,
        //     image: image
        // }];

        // _posts.push({
        //     _id: new Date().getTime().toString(),
        //     title: title,
        //     description: description,
        //     image: image
        // });

        // setPosts(_posts);

        await savePost(title, description, image);
        fetchPosts();

    }


    return(
        <div className= { classes [ "feed-wrapper" ]} >

            { /* Side Buttons */ }

            <SideButtons />

            <section>
                {/* Formulario */}
                {
                    user &&
                    <NewPostForm onAddPost={onAddPostHandler} />
                }
                {/*  Main Feed*/}
                <Posts posts={posts} />
            </section>


        </div>
        
    )
}

export default FeedView;