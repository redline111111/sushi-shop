'use client'
import { useEffect, useState } from 'react'
import styles from './NavCircles.module.scss'
import { getCountItems } from '@/services/getItems'

type Props = {
    offset: number
    setOffset: (e: number) => void
}

export const NavCircles = ({offset, setOffset}: Props) => {
    const [countCircles, setCountCircles] = useState(1)
    useEffect(() => {
        getCountItems(true).then((count) => setCountCircles(Math.ceil(count/4)))
    })
    return (
        <div className={styles.nav}>
            {Array(countCircles).fill(0).map((_, index) => {
            return <div onClick={() => setOffset(index)} key={index} className={`${styles.round} ${offset === index ? `${styles.active}` : ''}`}
            />})}
        </div>
    )
}

