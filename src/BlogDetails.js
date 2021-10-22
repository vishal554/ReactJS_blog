import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id} = useParams()
    const { data:blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()

    function deleteBlog(){
        fetch('http://localhost:8000/blogs/' + id,{
            method: "DELETE"
        })
        .then(() => {
            history.push('/')
        })
        
    }
    return (
        <div >
            { isPending && <div> Loading.. </div>}
            {error && <div> {error} </div>}
            { blog && 
                <div className="blog-preview">
                    <h2>{blog.title}</h2>
                    <h4>{blog.body}</h4>
                    <p>Written By {blog.author}</p>
                    <button onClick={deleteBlog}> Delete </button>
                </div>
            }
        </div>
    );
}
 
export default BlogDetails;