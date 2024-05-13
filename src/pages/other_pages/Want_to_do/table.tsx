import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <article style={{width:'70%',marginLeft: '20px',marginTop:'30px'}}>
        <div>
            <p style={{fontSize:'25px'}}>目前想法 & 說明</p>
            <br />
        </div>
        <div>
        <div style={{width:'70%',marginLeft: '20px'}}>
            <Disclosure>
            {({ open }) => (
                <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>每周一題程式題目</span>
                    <ChevronUpIcon
                    className={`${
                        open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                    />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                    例如LeetCode、UVa
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
        </div>
        <br />
        <div style={{width:'70%',marginLeft: '20px'}}>
            <Disclosure>
            {({ open }) => (
                <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>學習Pytorch</span>
                    <ChevronUpIcon
                    className={`${
                        open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                    />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                    <a href='https://github.com/Atcold/NYU-DLSP20'>參考資料</a>
                    <ul>
                        <li>學習基礎python語法</li>
                        <li>理解如何編譯、架構好學習環境</li>
                        <li>分配閱讀進度</li>
                    </ul>
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
        </div>
        <br />
        <div style={{width:'70%',marginLeft: '20px'}}>
            <Disclosure>
            {({ open }) => (
                <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>學習SP</span>
                    <ChevronUpIcon
                    className={`${
                        open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                    />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                    每週開會問問題、報備<br/>
                    各自自己讀，掌握進度
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
        </div>
        
        <br />
        <div style={{width:'70%',marginLeft: '20px'}}>
            <Disclosure>
            {({ open }) => (
                <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>每週一個C++ function分享</span>
                    <ChevronUpIcon
                    className={`${
                        open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                    />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                    可以先從STL開始<br/>
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
        </div>        
        <br />
        <div style={{width:'70%',marginLeft: '20px'}}>
            <Disclosure>
            {({ open }) => (
                <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>CUDA、RUST</span>
                    <ChevronUpIcon
                    className={`${
                        open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                    />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                    老師推薦
                    Maybe 大四?
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
        </div>
        </div>
    </article>
  )
}
