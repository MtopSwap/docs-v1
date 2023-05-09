import React from 'react'
import Head from 'next/head'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import logopic from '/images/Horizon_OnBlack.png'
import nextralogo from '/public/nextralogo.svg'

const config: DocsThemeConfig = {
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://docs.mtopswap.com/' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return <>
      <link rel="icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="theme-color" content="#fff" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || 'MtopSwap - Documentation'} />
      <meta property="og:description" content={frontMatter.description || "Welcome to the MtopSwap documentation website, your go-to resource for learning about our platform. MtopSwap is the world's first MultiDEX, offering a unique & innovative way for users to trade on multiple decentralized exchanges (DEX) simultaneously. With our one-of-a-kind MultiDEX, users can seamlessly trade multiple tokens on multiple DEXes at the same time, on one screen. MtopSwap is integrated on 10 EVM chains"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/socialcard.png" />
      <meta name="twitter:site:domain" content="docs.mtopswap.com" />
      <meta name="twitter:url" content="https://docs.mtopswap.com/" />
      <meta name="og:image" content="/socialcard.png" />
      <meta name="apple-mobile-web-app-title" content="MtopSwap - Documentation" />
    </>
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
      return {
        titleTemplate: '%s – MtopSwap Documentation'
      }
    },
  logo:
    <span>
      <Image src={logopic} alt="logo" width="200" height="30"/>
    </span>,
  primaryHue: { dark: 50, light: 50 },
  project: {
    link: 'https://github.com/MtopSwap/docs-v1/',
  },
  chat: {
    link: 'https://discord.gg/mtopswap',
  },
  docsRepositoryBase: 'https://github.com/MtopSwap/docs-v1/blob/main/',

  footer: {
    text: (
      <div>
        <p>
          © {new Date().getFullYear()} built by MtopSwap Team.
        </p>
      </div>
    )
  },  
}

export default config
