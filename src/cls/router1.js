import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

export default function Rounter1(){
    const navStyle = {
        backgroundColor:'#ced',
        padding:'7px',
        textAlign:'center',
    }

    const linkStyle={
        display:'inline-block',
        color:'blue',
        TextDecoration:'none',
    }

    return(
        <BrowserRouter>
            <nav style={navStyle}>
                <Link to="/" style={linkStyle}>Home</Link>&nbsp;
                <Link to="/product" style={linkStyle}>product</Link>&nbsp;
                <Link to="/member" style={linkStyle}>member</Link>&nbsp;
                <Link to="/contact" style={linkStyle}>contact</Link>&nbsp;
            </nav>
        </BrowserRouter>
    )
}