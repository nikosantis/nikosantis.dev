import { GetStaticProps } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { allAbouts } from 'contentlayer/generated'
import type { About } from 'contentlayer/generated'

import AboutWrap from 'components/layout/about-en'
import { components } from 'components/mdx-components'

type Props = {
  about: About
}

export default function AboutPage({ about }: Props) {
  const Component = useMDXComponent(about.body.code)
  return (
    <AboutWrap>
      <Component components={{ ...components }} />
    </AboutWrap>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const about = allAbouts.find(x => x.slug === 'about')
  return { props: { about } }
}
