'use client'
import { Button } from '@/components/ui/button';
import { useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote'],
    ['link', 'image', 'video'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];
const WriteBlog = () => {

    const [value, setValue] = useState('');



    const submitHandler = () => {
        const blogData = {
            author: '',
            isPublished: false,
            publishedDate: '',
            blogContent: value,
        }
        console.log(blogData)

    }
    return (
        <div className='h-screen w-4/5 mx-auto my-auto' >
            <div>
                <ReactQuill modules={{ toolbar: toolbarOptions }} value={value} onChange={setValue} />
            </div>
            <div className='flex items-center justify-end'>
                <Button variant={'ghost'} className='border border-blue-600 my-4' onClick={submitHandler}>Publish</Button>
            </div>
        </div>
    )
}

export default WriteBlog