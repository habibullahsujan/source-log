'use client'
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import ReactQuill, { Quill } from 'react-quill';
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

const BlogWriting = () => {
    const [value, setValue] = useState('');



    const onSubmit = () => {
        console.log(value)

    }
    return (
        <div className='relative'>
            <ReactQuill  modules={{ toolbar: toolbarOptions }} value={value} onChange={setValue} />
            <Button variant={'outline'} className=' absolute top-2 right-5' onClick={onSubmit}>Publish</Button>
        </div>
    )
}

export default BlogWriting