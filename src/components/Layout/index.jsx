import React from 'react'
import Header from '../Header';

import styles from './Layout.module.scss';

function Layout({children}) {
  return (
    <div className={styles.Layout}>
      <Header />
      <div className={styles.Layout_content}>{children}</div>
    </div>
    
  )
}

export default Layout