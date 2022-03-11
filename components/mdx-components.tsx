import { ReactNode } from 'react'
import NativeLink from 'next/link'
import cx from 'clsx'
import { MDXProvider } from '@mdx-js/react'
import Image, { ImageProps } from 'next/image'

type ComponentProps = {
  children: ReactNode
  id: string
}

function H1({ children, id }: ComponentProps) {
  return (
    <h1 id={id} className='mt-0 text-4xl'>
      {children}
    </h1>
  )
}

function H2({ children, id }: ComponentProps) {
  return (
    <h2 id={id} className='mt-8 mb-5 text-3xl break-words'>
      {children}
    </h2>
  )
}

function H3({ children, id }: ComponentProps) {
  return (
    <h3 id={id} className='mt-8 mb-5 text-2xl'>
      {children}
    </h3>
  )
}

type GenericLinkProps = {
  href: string
  children: ReactNode
  error?: boolean
  onClick?: () => void
}

function GenericLink(props: GenericLinkProps) {
  if (props.href.startsWith('/')) {
    return <InternalLink {...props} />
  }

  if (props.href.includes('@') || props.href.startsWith('#')) {
    return <AnchorLink {...props} />
  }

  return <ExternalLink {...props} />
}

type InternalLinkProps = {
  href: string
  children: ReactNode
  error?: boolean
}

function InternalLink({ href, children, error = false }: InternalLinkProps) {
  return (
    <NativeLink href={href}>
      <a
        aria-label={`Ir a ${String(children)}`}
        className={cx(
          'text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300',
          {
            underline: error,
            'no-underline': !error
          }
        )}
      >
        {children}
      </a>
    </NativeLink>
  )
}

type AnchorlLinkProps = {
  href: string
  onClick?: () => void
  children: ReactNode
}

function AnchorLink({ href, onClick, children }: AnchorlLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={`Ir a ${String(children)}`}
      className='text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 hover:no-underline border-dotted border'
    >
      {children}
    </a>
  )
}

type ExternalLinkProps = {
  href: string
  children: ReactNode
}

function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={`Ir a ${String(children)}`}
      className='text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 no-underline'
    >
      {children}
    </a>
  )
}

type BlockQuoteProps = {
  children: ReactNode
}

function Blockquote({ children }: BlockQuoteProps) {
  return (
    <blockquote className='italic transition-colors m-0 pl-4 border-l-[3px] border-gray-200'>
      {children}
    </blockquote>
  )
}

function Hr() {
  return (
    <div>
      <hr className='border-b border-gray-100 my-8' />
    </div>
  )
}

type TableProps = {
  children: ReactNode
}

function Table({ children }: TableProps) {
  return (
    <div className='flex justify-center mb-6'>
      <table className='block overflow-auto break-normal border-collapse'>
        {children}
      </table>
    </div>
  )
}

function Tr({ children }: TableProps) {
  return <tr className='border-t border-gray-300'>{children}</tr>
}

function Th({ children }: TableProps) {
  return (
    <th className='py-[6px] px-[13px] border border-gray-300'>{children}</th>
  )
}

function Td({ children }: TableProps) {
  return (
    <td className='py-[6px] px-[13px] border border-gray-300'>{children}</td>
  )
}

function ImageComp(props: ImageProps) {
  return (
    <div className='w-full relative mb-8'>
      <Image alt={props.alt} src={props.src} {...props} />
    </div>
  )
}

export const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  a: GenericLink,
  blockquote: Blockquote,
  hr: Hr,
  table: Table,
  tr: Tr,
  th: Th,
  td: Td,
  Image: ImageComp
}

type Props = {
  children: ReactNode
}

export default function MdxComponentsProvider({ children }: Props) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
