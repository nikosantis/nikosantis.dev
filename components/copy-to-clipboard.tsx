'use client'

import { ClipboardCopyIcon } from 'lucide-react'

export default function CopyToClipboard({ code }: { code: string }) {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      console.log('Copied to clipboard')
    } catch (error) {
      console.error('Error copying to clipboard', error)
    } finally {
      setTimeout(() => {
        // do something
      }, 2000)
    }
  }

  return (
    <button onClick={copyToClipboard}>
      <ClipboardCopyIcon />
    </button>
  )
}
