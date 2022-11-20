import React from "react"
import photos_grid from '../photo-grid.png';

export default function Hero() {
    return (
        <section className="hero">
            <img src = {photos_grid} className="hero--photo" alt="photos-grid"/>
            <h1 className="hero--header"> Online Expereinces</h1>
            <p className="hero--text ">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
          

            
        </section>
    )
}