import Head from 'next/head'
import { ReactNode } from 'react'

interface LayoutProps {
  pageTitle?: string
  className?: string
  children?: ReactNode
}

export default function Layout({ pageTitle = '', className = '', children }: LayoutProps) {
  const appTitle = 'BossBrain'
  
  return (
    <>
      <Head>
        <title>{appTitle} | {pageTitle}</title>
      </Head>
      <header>{appTitle}</header>
      <main className={className}>
        {children}
      </main>
    </>
  )
}