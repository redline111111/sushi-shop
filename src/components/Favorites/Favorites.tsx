'use client'
import { useEffect, useState } from 'react'
import { Cards } from '../Cards/Cards'
import { NavCircles } from '../NavCircles/NavCircles'
import styles from './Favorites.module.scss'
import { getFavorites } from '@/services/getItems'
import { Item } from '@/types/Item'

export const Favorites = () => {
  const [items, setItems] = useState<Item[]>([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    getFavorites(offset*4, 4).then(response => setItems(response))
}, [offset])

  return (
    items && <div className={styles.wrapper}>
        <div className={styles.header}>
            <span className={styles.text}><strong>ИЗБРАННОЕ</strong> КЛИЕНТОВ</span>
           <NavCircles offset={offset} setOffset={setOffset}/>
        </div>
        <Cards items={items} />
    </div>
  )
}

