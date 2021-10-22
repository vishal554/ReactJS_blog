import { useState } from "react"
import { useHistory } from "react-router-dom"

const CreateBlog = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    function AddNewBlog(e){
        e.preventDefault()
        setIsPending(true)
        const blog = { title, body, author }

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(response => {
            setIsPending(false)
            history.push('/')
        })
    }

    return (
        <div class="create">
            <h2> Create new Blog.</h2>
            <form onSubmit={(e) => AddNewBlog(e)}>
                <label>Title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <label>Body: </label>
                <textarea
                    type="text"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Author: </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="me">Me</option>
                    <option value="myself"> Myself </option>
                    <option value="I"> I </option>
                </select>
                { isPending && <button> Adding blog. Wait.. </button>}
                { !isPending && <button> Add blog. </button>}
                
            </form>
        </div>
    );
}
 
export default CreateBlog;