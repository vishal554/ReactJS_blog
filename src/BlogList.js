import { Link } from "react-router-dom";

const Bloglist = (props) => {

    const blogs = props.blogs;
    const title = props.title;
    return ( 
        <div>
            <h2 style={{ marginLeft: '20px', color: 'orange', }}> {title} </h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written By {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default Bloglist;