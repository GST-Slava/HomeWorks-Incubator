import React from 'react'
import cs from './Affairs.module.css';
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

export const Affair = (props: AffairPropsType) => {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    const priorityClass = cs.item + ' ' + cs[props.affair.priority]

    return (
        <div className={cs.affair}>

            <div className={cs.item}>{props.affair.name}</div>
            <div className={priorityClass}>[{props.affair.priority}]</div>
            <button className={cs.buttonDeleteAffairs} onClick={deleteCallback}>X</button>
        </div>
    )
}


