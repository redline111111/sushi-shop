import Image from 'next/image'
import styles from './Banner.module.scss'
import banner from 'public/banner.png'
import Link from 'next/link'


export const Banner = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.content}>
            <div className={styles.info}>
                <div className={styles.title}>ТЕ САМЫЕ <span className={styles.legendary}>ЛЕГЕНДАРНЫЕ</span>  СУШИ</div>    
                <div className={styles.description}>
                    Наше разнообразие в суши с заботой подготовлено для вас. Мы используем продукты высочайшего качества, привезенные из Японии и Норвегии на нашу кухню
                </div>
                <Link href={'/'} className={styles.explore}>
                  <span>
                    ОФОРМИТЬ ЗАКАЗ 
                  </span>
                  <span className={styles.arrow}>→</span>
                </Link>
            </div>
              <Image
                width={800}
                alt='Sushi'
                src={banner}
              />
        </div>
    </div>
  )
}