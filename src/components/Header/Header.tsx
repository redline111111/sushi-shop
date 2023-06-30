import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import Logo from 'public/Logo.png'
import Link from 'next/link'
import { Cart } from '../Cart/Cart'

export const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.wrapper}>
            <Link className={styles.logo} href={'/'}>
                <Image
                    className={styles.logo_image}
                    src={Logo} 
                    alt='logo'
                />
                <span>SUSHI.</span>
            </Link>
            <div className={styles.nav}>
                <Link href={'/'}>ГЛАВНАЯ</Link>
                <Link href={'/promotions'}>АКЦИИ</Link>
                <Link href={'/menu'}>МЕНЮ</Link>
                <Link href={'/about'}>О НАС</Link>
            </div>
            <Cart/>
        </div>
    </div>
  )
}