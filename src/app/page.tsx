import styles from './page.module.css'
import { Banner } from '@/components/Banner/Banner'
import { Favorites } from '@/components/Favorites/Favorites'

export default function Home() {
  return (
    <main>
      <div className={styles.first_block}>
        <Banner/>
      </div>
      <Favorites/>
    </main>
  )
}