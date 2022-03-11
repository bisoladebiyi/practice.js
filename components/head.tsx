import Head from 'next/head'
import React from 'react'

interface PropType {
    title: string
}
const HeadComponent: React.FC<PropType>= ({ title }) => {
  return (
    <Head>
        <title>{title}</title>
    </Head>
  )
}

export default HeadComponent