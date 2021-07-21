import { ReactNode } from 'react'
import NativeLink from 'next/link'
import cs from 'classnames'
import { MDXProvider } from '@mdx-js/react'

type ComponentProps = {
  children: ReactNode
  id: string
}

function H1({ children, id }: ComponentProps) {
  return (
    <h1 id={id}>
      {children}
      <style jsx>
        {`
          h1 {
            margin-top: 0;
            font-size: 2rem;
          }
        `}
      </style>
    </h1>
  )
}

function H2({ children, id }: ComponentProps) {
  return (
    <h2 id={id}>
      {children}
      <style jsx>
        {`
          h2 {
            margin-top: 2rem;
            font-size: 1.875rem;
            word-break: break-word;
          }
        `}
      </style>
    </h2>
  )
}

function H3({ children, id }: ComponentProps) {
  return (
    <h3 id={id}>
      {children}
      <style jsx>
        {`
          h3 {
            margin-top: 2rem;
            font-size: 1.5rem;
          }
        `}
      </style>
    </h3>
  )
}

function Ul({ children }: ComponentProps) {
  return (
    <ul>
      {children}
      <style jsx>
        {`
          ul {
            list-style: none;
            margin-bottom: 2rem;
          }
        `}
      </style>
    </ul>
  )
}

function Li({ children }: ComponentProps) {
  return (
    <li>
      {children}
      <style jsx>
        {`
          li {
            margin-bottom: 0.35rem;
            font-size: 1.125rem;
            :before {
              content: '-';
              display: inline-block;
              color: #6d6d6d;
              position: absolute;
              margin-left: -25px;
            }
          }
        `}
      </style>
    </li>
  )
}

function P({ children }: ComponentProps) {
  return (
    <p>
      {children}
      <style jsx>
        {`
          p {
            font-size: 1.125rem;
            line-height: 1.8;
            margin-bottom: 1.5rem;

            & :global(a) {
              color: var(--ns-blue-link);
              &:hover {
                color: #68b5fb;
              }
            }
          }
        `}
      </style>
    </p>
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
      <a aria-label={`Ir a ${String(children)}`}>
        {children}

        <style jsx>
          {`
            a {
              text-decoration: ${error ? 'underline' : 'none'};
              font-size: inherit;
              color: var(--ns-blue-link);
            }
            a:hover {
              text-decoration: none;
              color: #68b5fb;
            }
          `}
        </style>
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
    <a href={href} onClick={onClick} aria-label={`Ir a ${String(children)}`}>
      {children}

      <style jsx>
        {`
          a {
            color: inherit;
            font-size: inherit;
            border-bottom: 1px dotted;
            color: var(--ns-blue-link);
          }
          a:hover {
            color: #68b5fb;
            text-decoration: none;
          }
        `}
      </style>
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
      aria-label={`Ir a ${String(children)}`}>
      {children}

      <style jsx>
        {`
          a {
            text-decoration: none;
            font-size: inherit;
            color: var(--ns-blue-link);
          }
          a:hover {
            color: #68b5fb;
          }
        `}
      </style>
    </a>
  )
}

type CodeProps = {
  children: ReactNode
  className: string
}

function Code({ children, className }: CodeProps) {
  return (
    <pre className={cs(className)}>
      <code>{children}</code>
      <style jsx>
        {`
          pre {
            background: var(--ns-code);
            color: #f8f8f2;
            white-space: pre;
            overflow: auto;
            padding: 1.5rem;
            margin: 40px 0;
            border-radius: 3px;
            -webkit-overflow-scrolling: touch;
          }
          code {
            font-size: 14px;
            line-height: 20px;
          }
        `}
      </style>
      <style global jsx>
        {`
          .token.comment,
          .token.prolog,
          .token.doctype,
          .token.cdata {
            color: #999;
          }
          .token.punctuation {
            color: #c5c8c6;
          }
          .namespace {
            opacity: 0.7;
          }
          .token.property,
          .token.keyword,
          .token.tag {
            color: #96cbfe;
          }
          .token.class-name {
            color: #ffffb6;
          }
          .token.boolean,
          .token.constant {
            color: #d19a66;
          }
          .token.symbol,
          .token.deleted {
            color: #f92672;
          }
          .token.number {
            color: #ff73fd;
          }
          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #a8ff60;
          }
          .token.variable {
            color: #c6c5fe;
          }
          .token.operator {
            color: #ededed;
          }
          .token.entity {
            color: #ffffb6;
            cursor: help;
          }
          .token.url {
            color: #96cbfe;
          }
          .language-css .token.string,
          .style .token.string {
            color: #87c38a;
          }
          .token.atrule,
          .token.attr-value {
            color: #f9ee98;
          }
          .token.function {
            color: #dad085;
          }
          .token.regex {
            color: #e9c062;
          }
          .token.important {
            color: #fd971f;
          }
          .token.important,
          .token.bold {
            font-weight: bold;
          }
          .token.italic {
            font-style: italic;
          }
        `}
      </style>
    </pre>
  )
}

function InlineCode({ children }: CodeProps) {
  return (
    <code>
      {children}
      <style jsx>
        {`
          code {
            font-size: 0.9em;
            white-space: pre-wrap;
            color: #f92672;
          }
          code.no-wrap {
            white-space: nowrap;
          }
          code::before {
            content: '\`';
          }
          code::after {
            content: '\`';
          }
        `}
      </style>
    </code>
  )
}

type BlockQuoteProps = {
  children: ReactNode
}

function Blockquote({ children }: BlockQuoteProps) {
  return (
    <blockquote>
      {children}
      <style jsx>
        {`
          blockquote {
            font-style: italic;
            margin: 0;
            padding-left: 1rem;
            border-left: 3px solid var(--ns-light-gray);
            transition: border-color 0.1s ease-in-out;
          }
        `}
      </style>
    </blockquote>
  )
}

function Hr() {
  return (
    <div>
      <hr />
      <style jsx>
        {`
          hr {
            margin: 2rem 0;
            border: none;
            border-bottom: 1px solid #eee;
          }
        `}
      </style>
    </div>
  )
}

type TableProps = {
  children: ReactNode
}

function Table({ children }: TableProps) {
  return (
    <div className='table-container'>
      <table>{children}</table>
      <style jsx>
        {`
          .table-container {
            display: flex;
            justify-content: center;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
            display: block;
            overflow: auto;
            word-break: normal;
            word-break: keep-all;
          }
        `}
      </style>
    </div>
  )
}

function Tr({ children }: TableProps) {
  return (
    <tr>
      {children}
      <style jsx>
        {`
          tr {
            border-top: 1px solid #ccc;
          }
        `}
      </style>
    </tr>
  )
}

function Th({ children }: TableProps) {
  return (
    <th>
      {children}
      <style jsx>
        {`
          th {
            padding: 6px 13px;
            border: 1px solid #ddd;
          }
        `}
      </style>
    </th>
  )
}

function Td({ children }: TableProps) {
  return (
    <td>
      {children}
      <style jsx>
        {`
          td {
            padding: 6px 13px;
            border: 1px solid #ddd;
          }
        `}
      </style>
    </td>
  )
}

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  ul: Ul,
  li: Li,
  code: Code,
  inlineCode: InlineCode,
  p: P,
  a: GenericLink,
  blockquote: Blockquote,
  hr: Hr,
  table: Table,
  tr: Tr,
  th: Th,
  td: Td
}

type Props = {
  children: ReactNode
}

export default function MdxComponentsProvider({ children }: Props) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
