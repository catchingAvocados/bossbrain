import Head from 'next/head'
import { ReactNode } from 'react'

interface LayoutProps {
  pageTitle?: string
  className?: string
  children?: ReactNode
}

export default function Layout({ pageTitle = '', className = '', children }: LayoutProps) {
  const appTitle = 'BossBrain'
  const classes = `prose m-auto px-4 lg:max-w-lg lg:px-0 ${className}`
  
  return (
    <>
      <Head>
        <title>{appTitle} | {pageTitle}</title>
      </Head>
      <header className='p-2'>{appTitle}</header>
      <main className={classes}>
        {children}
      </main>
    </>
  )
}