"use client";
import Navbar from "@/components/Notes/notes-nav-bar";
import Footer from "@/components/headAndFoot/Footer";
import MainNotes from "@/components/Notes/main-notes";
import { useState } from "react";

function Notes()
{
    const [currentPdf,setcurrentPdf]=useState('Cpp');
    const notes=['Cpp','C','HTML','CSS'];
    return (
        <div>
            <Navbar notes={notes} control={{currentPdf,setcurrentPdf}}/>
            <MainNotes currentPdf={currentPdf}/>
            <Footer/>
        </div>
    );
}

export default Notes;