import { PromoCard } from '../PromoCard/PromoCard'
import styles from './PromotionPage.module.scss'

const promos = [
    {
        id: 1,
        title: 'Добро пожаловать!',
        description: 'Это тестовый проект, никаких суши и роллов мы не продаем.',
        image: '/promo/welcome.jpg'
    },
    {
        id: 2,
        title: 'Дополнительный набор суши',
        description: 'При оплате заказа на сумму больше 1999 рублей, вы можете получить дополнительный набор суши на выбор.',
        image: '/promo/set-1.jpg'
    },
    {
        id: 3,
        title: 'Скидка 15%',
        description: 'Снизу предоставлен промокод на 15% скидку при покупке. Вводите промокод до оплаты заказа',
        image: '/promo/promo15.png',
        promocode: 'free'
    }
]

export const PromotionPage = () => {

    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>ПРОМОКОДЫ И АКЦИИ</span>
            <div className={styles.promotions}>
                {promos.map(promo => <PromoCard title={promo.title} description={promo.description} image={promo.image} key={promo.id} promocode={promo.promocode}/>)}
            </div>
        </div>
    )
}

