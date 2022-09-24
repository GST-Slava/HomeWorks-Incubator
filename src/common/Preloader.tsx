import React from 'react';
import preloader from "../assets/image/loader.gif";
import s from "./Preloader.module.css"

export const Preloader = () => {
    return (
        <div className={s.preloaderGif}>
            <img src={preloader} alt={'preloader'}/>
        </div>
    );
};