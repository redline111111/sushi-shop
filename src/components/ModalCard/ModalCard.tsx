"use client"

import Image from 'next/image'
import React from 'react'
import styles from './ModalCard.module.scss'
import { renderType } from '../Card/Card'
type Props = {
    title: string,
    price: number,
    image: string,
    type: 'none' | 'spicy' | 'hot'
}
  
export const ModalCard = ({title, price, image, type}:Props) => {
    return (
      <div className={styles.wrapper}>
          <Image src={image} alt={title} width={168} height={168} className={styles.img}/>
          {renderType[type]}
        <div className={styles.description}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.price}>Цена: {price}</div>
        </div>
      </div>
    )
}