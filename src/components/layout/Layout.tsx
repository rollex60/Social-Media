
import type { PropsWithChildren } from 'react'
import { Sidebar } from './sidebar/Sidebar'
import styles from './Layout.module.scss'
import { Toaster } from 'react-hot-toast'
import MainProvider from './MainProvider'

export default function LayoutClient({ children }: 
PropsWithChildren<unknown>) {

 return (
  <MainProvider>
    <main className={styles.layout}>
      <Sidebar  />
      <section>{children}</section>
      <Toaster position='top-right' />
    </main>
  </MainProvider>
  )
}