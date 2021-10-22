import Bloglist from './BlogList';
import useFetch from './useFetch';


const HomePage = () => {

    const { data, isPending, error } = useFetch('http://localhost:8000/blogs')
    
    return ( 
        <div className="homepage">
            {error && <div> {error} </div>}
            {isPending && <div> Loading... </div>}
            {data && <Bloglist blogs={data} title="All the Latest blogs!" />}
        </div>
    );
}
 
export default HomePage;