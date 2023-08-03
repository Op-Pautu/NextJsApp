import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className='copyright'>©2023 Rufia. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={25} height={25} className={styles.icon} alt="facebook icon" />
        <Image src="/2.png" width={25} height={25} className={styles.icon} alt="insta icon" />
        <Image src="/3.png" width={25} height={25} className={styles.icon} alt="twitter icon" />
        <Image src="/4.png" width={25} height={25} className={styles.icon} alt="youtube icon" />
      </div>
    </div>
  )
}

export default Footer