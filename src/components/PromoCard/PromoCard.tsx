'use client'
import Image from 'next/image'
import styles from './PromoCard.module.scss'

type Props = {
    title: string,
    description: string,
    image: string,
    promocode?: string,
}

export const PromoCard = ({title, description, image, promocode}: Props) => {


    return (
        <div className={`${styles.wrapper} ${promocode ? styles.promo : ''}`}>
            <Image className={styles.image} src={image} alt={title} width={260} height={180}/>
            <div>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
                {promocode && <button className={styles.promocode} onClick={() => {navigator.clipboard.writeText(promocode)}}>{promocode}</button>}
            </div>
        </div>
    )
}

