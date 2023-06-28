"use client"
import React,{ useEffect, useState } from 'react'
import { CategoryItem } from '@/types/Item'
import { Cards } from '../Cards/Cards'
import styles from './Menu.module.scss'
import { getCategories } from '@/services/getItems'
import { Category } from '../Category/Category'


export const MenuPage = () => {
    const [categories, setCategories] = useState<CategoryItem[]>([])

    useEffect(() => {
        getCategories().then(response => setCategories(response))
  }, [])
  console.log()
  return (
        <div className={styles.wrapper}>
            {categories.map((category, index) =>
                
                (<React.Fragment key={index}>
                    <Category category={category}/>
                    <Cards category={category}/>
                </React.Fragment>)
            )}
           
        </div>
  )
}