import { x, SystemProps } from '@xstyled/emotion'
import Image from 'next/image'

export const Footer: React.VFC<SystemProps> = (props) => {
  return (
    <x.footer color="primary" textAlign="center" {...props}>
      <x.a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        bg={{ hover: 'white', hove: 'red' }}
        ringColor="primary"
      >
        Powered by{' '}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </x.a>
    </x.footer>
  )
}
