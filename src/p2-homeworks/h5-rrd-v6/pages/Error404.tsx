import React from 'react'
import s from './Error404.module.css'
import FirstImage from './../../../assets/image/back1.png'

export const Error404 = () => {

    return (
        <div>
            <div className={s.notfound}>404</div>
            <div className={s.textInfo}>Page not found!</div>
            <div className={s.font}><img src={FirstImage} alt="title 404"/></div>

        </div>
    )
}
