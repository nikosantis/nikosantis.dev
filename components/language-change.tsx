import { Fragment } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import cx from 'clsx'
import { useLanguage } from 'lib/hooks/use-language'

export default function LanguageChange() {
  const language = useLanguage()

  return (
    <div className='order-2 lg:order-3 ml-3 mr-3 lg:mr-0'>
      <Menu as='div' className='relative inline-block text-center'>
        <div>
          <Menu.Button className='inline-flex justify-center w-full px-[22px] py-[12px] text-sm font-medium text-gray-500 rounded-md bg-opacity-20 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-100 focus-visible:ring-opacity-75'>
            {language}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 w-14 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                <Link href='/'>
                  <a
                    className={cx(
                      'group flex rounded-md items-center w-full px-2 py-2 text-sm justify-center text-gray-900 hover:bg-gray-100',
                      {
                        'bg-gray-200': language === 'ES'
                      }
                    )}
                  >
                    <span>ES</span>
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href='/en'>
                  <a
                    className={cx(
                      'group flex rounded-md items-center w-full px-2 py-2 text-sm justify-center text-gray-900 hover:bg-gray-100',
                      {
                        'bg-gray-200': language === 'EN'
                      }
                    )}
                  >
                    <span>EN</span>
                  </a>
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
