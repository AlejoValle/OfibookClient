import SinglePost from '../SinglePost/SinglePost';
import classes from './Posts.module.scss';
import { MdReorder } from 'react-icons/md';


const Posts = ({ posts = [] }) => {
    const mappedPost = posts.map(post =>{
        return (
            <SinglePost 
            key = { post._id }
            title = {post.title}
            description = {post.description}
            user = {post.user.email}
            image = {post.image}
            />
        );
    })

    return(
        <section className= {classes["feed-posts-section"]} >
            <h3> <MdReorder /> Oportunidades </h3>

            <div className = {classes["posts"]}>
                { mappedPost }
            </div>
        </section>
    );
}

export default Posts;