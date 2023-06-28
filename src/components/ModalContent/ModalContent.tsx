"use client"

import React, { useEffect, useState } from 'react'
import { ModalCard } from '../ModalCard/ModalCard'
import { useAppSelector } from '@/redux/hooks'
import { selectIds } from '@/redux/features/cartSlice'
import { getAllByIds } from '@/services/getItems'
import { Item } from '@/types/Item'
import styles from './ModalContent.module.scss'
type Props = {
    closeModal: () => void,
}
  
export const ModalContent = ({closeModal}: Props) => {
    const [items, setItems] = useState<Item[]>([]);
    const [summary, setSummary] = useState(0);
    const ids = useAppSelector(selectIds);

    useEffect(() => {
        getAllByIds(ids).then(i => setItems(i))
        
    }, [ids])

    useEffect(() => {
       items.forEach(i => setSummary(prev => prev + i.price))
        
    }, [items])

    return (
        <div className={styles.wrapper}>
            {items.length ? 
            <>
                <div className={styles.header}>
                <span>Ваш заказ</span>
                <button className={styles.exit} onClick={closeModal}>X</button>
                </div>
                {items.map(item => <ModalCard key={item.id} image={item.image} price={item.price} title={item.name} type={item.type}/>)}
                <div className={styles.summary}>
                    Всего: {summary}
                </div>
                <div className={styles.footer}>
                    <button className={styles.pay}>
                        Оплатить
                    </button>
                    <div className={styles.promo}>
                        <button className={styles.enter}>Применить</button>
                        <input className={styles.code} placeholder='ПРОМОКОД'/>
                    </div>
                </div>
            </> : <div className={styles.emptyHeader}>
                <div className={styles.empty}>Корзина пуста</div>  
                <button className={styles.exit} onClick={closeModal}>X</button>
                
            </div> 
            }
            
        </div>
    )
}