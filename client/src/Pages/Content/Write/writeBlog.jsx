import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import './writeBlog.css'; // Your custom styles for the editor
import axios from 'axios'

// Image upload function
const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('https://blogbook-backend-t9wn.onrender.com/post/uploadblog', {
        method: 'POST',
        body: formData,
    });

    const data = await response.json();
    const imageUrl = `https://blogbook-backend-t9wn.onrender.com/post${data.imageUrl}`;
    return imageUrl;
};

// Quill custom image handler
const customModules = {
    toolbar: {
        container: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image','video'],
            ['clean'],
        ],
        handlers: {
            image: function () {
                const input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');
                input.click();

                input.onchange = async () => {
                    const file = input.files[0];
                    const imageUrl = await uploadImage(file);
                    const quill = this.quill;
                    const range = quill.getSelection();
                    quill.insertEmbed(range.index, 'image', imageUrl);
                };
            },
        },
    },
};

const BlogEditor = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const quillRef = useRef(null)

    const handlePublish = async () => {
        const blogData = { 
            title, 
            content };
        try {
            const response = await axios.post('https://blogbook-backend-t9wn.onrender.com/post/blog',blogData)
            console.log(response.data)
            // console.log('Blog published:', blogData);
            alert('Your blog has been published!');
        } catch (error) {
            console.error('Error while saving the blog:', error.response ? error.response.data : error.message);
        }    
        
    };

    return (
        <div className="writeblogcontainer">
            <div className="writeblogleftside">
                <h2>Create Your Blog</h2>
                <input
                    id="writeblogtitle"
                    type="text"
                    placeholder="Enter your Blog title here..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                {/* Quill Editor */}
                <ReactQuill
                    id='quillc'
                    ref={quillRef}
                    theme="snow"
                    value={content}
                    onChange={setContent}
                    modules={customModules}
                />


            </div>
            <div className='writeblogrightside'>
                <button
                    onClick={handlePublish}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '16px',
                        cursor: 'pointer',
                    }}
                >
                    Publish Blog
                </button>
            </div>
        </div>

    );
};

export default BlogEditor;
