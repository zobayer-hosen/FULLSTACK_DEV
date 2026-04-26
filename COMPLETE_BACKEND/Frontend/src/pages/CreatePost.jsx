import API from '../api'
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target)

    API.post("/create-post", formdata)
    .then((res) => {
      console.log(res);
      navigate("/feed");
    })
    .catch(err => {
      console.error("Error creating post:", err);
    })
  } 
  return(
    <section className='create-post-section'>
      <h1>Create Post</h1>
      
      <form onSubmit={handleSubmit} >
        <input type="file" name='image' accept='image/*' required />
        <input type="text" name='caption' placeholder='Caption' required />
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default CreatePost