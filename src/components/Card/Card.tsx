import React, { useState } from 'react'
import Image from 'next/image'
import cartIcon from 'public/icons/cart-icon.png'
import styles from './Card.module.scss'
import { Item } from '@/types/Item'
import hotIcon from 'public/icons/hot.png'
import spicyIcon from 'public/icons/spicy.png'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectIds, toggle } from '@/redux/features/cartSlice'

export const renderType = {
    'none': null,
    'hot': <Image className={styles.type} width={38} height={38} src={hotIcon} alt='Горячее' />,
    'spicy': <Image className={styles.type} width={38} height={38} src={spicyIcon} alt='Острое' />,
}

export const Card = ({id, name, price, image, type}: Item) => {
    const dispatch = useAppDispatch();
    const [isActive, setIsActive] = useState(useAppSelector(state => state.cart.ids.includes(id)));

    const handler = () => {
        setIsActive(!isActive)
        dispatch(toggle(id))
    }
    
    return (
        <div className={styles.card} key={id}>
        <Image alt={name} src={image} width={280} height={187}/>
        {renderType[type]}
        <div className={styles.description}>
            <div className={styles.text}>
                <div className={styles.title}>{name}</div>
                <div className={styles.price}>{price}₽</div>
            </div>
            <div className={`${styles.cart} ${isActive ? styles.active : ''}`} onClick={() => handler()}>
                <Image src={cartIcon} alt='cart' className={styles.cart_icon} />
            </div>
        </div>
        </div>
    )
}