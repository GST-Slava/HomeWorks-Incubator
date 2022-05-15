import React from 'react'
import {Affair} from './Affair'
import {AffairType, FilterType} from './HW2'
import cs from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

export const Affairs = (props: AffairsPropsType) => {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>
            {mappedAffairs}
            <button className={cs.buttonFilter} onClick={setAll}><span>All</span></button>
            <button className={cs.buttonFilter} onClick={setHigh}><span>High</span></button>
            <button className={cs.buttonFilter} onClick={setMiddle}><span>Middle</span></button>
            <button className={cs.buttonFilter} onClick={setLow}><span>Low</span></button>
        </div>
    )
}

