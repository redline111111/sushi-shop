"use client"
import { CategoryItem } from '@/types/Item'
import styles from './Category.module.scss'

const translateCategory = {
    "roll": "РОЛЛЫ",
    "nigiri": "НИГИРИ",
    "handRoll": "РУЧНЫЕ РОЛЛЫ",
    "onigiri": "ОНИГИРИ"
}

export const Category = ({category}: {category: CategoryItem} ) => {
  return (typeof category === 'string' &&
        <div className={styles.header}>
            <span className={styles.text}>{translateCategory[category]}</span>
            <div className={styles.line}/>
        </div>
  )
}