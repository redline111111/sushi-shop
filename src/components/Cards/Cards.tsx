import React, { useEffect, useState } from 'react'
import styles from './Cards.module.scss'
import { getByCategory } from '@/services/getItems'
import { Card } from '../Card/Card'
import { CategoryItem, Item } from '@/types/Item'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {
    items?: Item[];
    category?: CategoryItem
}

export const Cards = ({items, category}: Props) => {
    const [menuItems, setMenuItems] = useState<Item[]>()

    useEffect(() => {
        if(items) {
            setMenuItems(items)
        }
        if(category) {
            getByCategory(category).then(response => setMenuItems(response))
        }
    }, [items, category])
    return (
        menuItems ? <div className={styles.cards}>
            {menuItems.map(item =>( 
                <Card id={item.id} image={item.image} name={item.name} price={item.price} type={item.type} key={item.id}/>
            ))}
        </div> : <div className={styles.cards}>
            <Skeleton className={styles.skeleton}/>
            <Skeleton className={styles.skeleton}/>
            <Skeleton className={styles.skeleton}/>
            <Skeleton className={styles.skeleton}/>
        </div> 
    )
}