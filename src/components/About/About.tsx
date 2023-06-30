import Image from 'next/image'
import styles from './About.module.scss'

export const About = () => {
  return (
    <div className={styles.wrapper}>
        <h2>Это простой учебный проект - суши маркет</h2>
        <p>Сделано 30.06.2023</p>
    </div>
  )
}