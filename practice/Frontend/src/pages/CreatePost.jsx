import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

const CreatePost = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            setIsSubmitting(true);
            await API.post("/create-post", formData);
            navigate("/feed");
        } catch (err) {
            console.error("Error creating post:", err);
            alert("Failed to create post");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="create-post-section">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" name="image" accept="image/*" required />
                <input type="text" name="caption" placeholder="Caption" required />
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </section>
    );
};

export default CreatePost;
