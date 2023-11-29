"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/image/logo.svg'
import menu from '../assets/image/menu.svg'

const navigation = [
    { name: 'Creon Pass', href: '#', soon: false },
    { name: 'Token', href: '#', soon: true },
    { name: 'AI Revenue', href: '#', soon: true },
    { name: 'AI Launchpad', href: '#', soon: true },
]

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="">
            <header className="">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <Image src={logo} alt='' width={120} height={39} />
                        </a>
                    </div>
                    <div className='flex flex-row gap-[15px]'>
                        <div className='flex flex-row items-center gap-[50px]'>
                            <div className="hidden lg:flex lg:gap-x-12">
                                {navigation.map((item) => (
                                    <div key={item.name} className={`h-[40px] py-1`}>
                                        <a href={item.href} className={`text-md font-medium font-satoshi leading-6 text-white`}>
                                            <div className={`${item.soon && 'flex flex-row items-start gap-1'}`}>
                                                <div>{item.name}</div>
                                                {
                                                    item.soon && <div className='text-[#AB23FF] font-satoshi text-[10px] px-1 leading-[15px] mt-[-1px] bg-black inline rounded-[100px]'>SOON</div>
                                                }
                                            </div>
                                        </a>
                                    </div>

                                ))}
                            </div>
                            {/* connect button */}
                            <div className='border-2 px-5 w-[110px] h-[40px] py-1 rounded-[6px] border-white'>
                                <div className='text-md font-medium font-satoshi leading-6 text-white inline'>
                                    Connect
                                </div>
                            </div>
                        </div>

                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Image src={menu} alt='' />
                            </button>
                        </div>
                    </div>


                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Creon</span>
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className='sr-only'>Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}

export default Navbar