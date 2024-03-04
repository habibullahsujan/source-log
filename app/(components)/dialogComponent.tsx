'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ReactNode, useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface IDialogComponentProps {
    children: ReactNode
}

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
const DialogComponent = ({ children }: IDialogComponentProps) => {
    const [value, setValue] = useState('');



    const submitHandler = () => {
        console.log(value)

    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className=" bg-white h-full w-full">
                <DialogHeader>
                    <DialogTitle>Write your new blog!</DialogTitle>
                    <DialogDescription>
                        Make to write a blog is here. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <ReactQuill modules={{ toolbar: toolbarOptions }} value={value} onChange={setValue} />
                </div>
                <DialogFooter>
                    <Button onSubmit={submitHandler} type="submit" variant={'outline'} className='border bg-slate-200 cursor-pointer block'>Publish</Button>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DialogComponent