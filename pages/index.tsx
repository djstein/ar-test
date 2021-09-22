import Head from 'next/head'
import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'

const Main = styled.main`
  margin: 4rem;
`
const Title = styled.h1`
  color: var(--primary)};
`
const SubTitle = styled.h2`
  color: var(--primary)};
`
const StyledLink = styled.a`
  color: var(--primary)};
  text-decoration: none;
  padding: 0;
  margin-top: 0;
`

const Text = styled.p`color: var(--primary)};`

export default function Home() {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const [cart, setCart] = useState('')
  useEffect(() => {
    if (linkRef.current !== null) {
      linkRef.current.addEventListener(
        'message',
        (event) => {
          // @ts-ignore
          if (event.data == '_apple_ar_quicklook_button_tapped') {
            setCart('1 Alarm Clock')
          }
        },
        false
      )
    }
  }, [])

  return (
    <>
      <Head>
        <title>AR TEST</title>
        <meta name="description" content="AR TEST" />
      </Head>
      <Main>
        <Title>AR TEST</Title>
        {cart && <SubTitle>Cart: {cart}</SubTitle>}
        <a
          id="ar-link"
          rel="ar"
          ref={linkRef}
          href="/alarm-clock.usdz#callToAction=Add%20to%20cart&amp;checkoutTitle=Fresh%20Digs&amp;checkoutSubtitle=With%20built-in%20FM%20tuner&amp;price=$92.50"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Alarm Clock"
            src="/alarm-clock.png"
            style={{ height: '100%', width: '100%' }}
          />
        </a>
      </Main>
    </>
  )
}
