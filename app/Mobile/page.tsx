'use client'
import { useState, useEffect } from 'react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from "framer-motion"
import { Dialog, DialogPanel } from '@headlessui/react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import React from 'react';

const navigation = [
  { name: 'Latest', href: '/app', current: false },
  { name: 'Archive', href: '/Archive', current: false },
  { name: 'WEC/IMSA', href: '/Contact', current: false },
  { name: 'Formula 1', href: '/', current: true },
  { name: 'GTWC', href: "", current: false },
] 

export default function MobileApp() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const [showSplash, setShowSplash] = useState(true);

      useEffect(() => {
  const timer = setTimeout(() => setShowSplash(false), 2000); // 2 seconds
  return () => clearTimeout(timer);
}, []);

    return(
        <div className='bg-neutral-950 font-raleway'>
          {/* HIDE AFTER A RACE */}
<AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-950"
            initial={{ opacity: 1,}}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <motion.img
              src="/favicon.ico"
              alt="Benefactor Logo"
              className="w-32 h-32"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{ filter: 'drop-shadow(0 0 20px #ffffff)' }}
            />
            <motion.h1
              className="text-white absolute bottom-20 text-3xl font-orbitron text-center"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              benefactor Racing
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
        <div className={`bg-neutral-950 ${showSplash ? 'opacity-0 pointer-events-none' : 'opacity-100 transition-opacity duration-700'}`}>
        </div>

            <header className="relative inset-x-0 top-0 z-50">
                     <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 h-10 bg-gray-200 shadow-2xl shadow-white">
                      <div className='text-2xl text-neutral-950 font-edu-vic-wa-nt-beginner top-0 absolute left-18 pt-1'>
                        <h1 className='font-bold font-raleway'>benefactor Racing</h1>
                      </div>
                      <div className="absolute right-5 pt-10 pr-5 max-md:pr-0 max-md:right-0 max-md:pt-25">
                        <button
                        id='openBtn'
                          type="button"
                          onClick={() => setMobileMenuOpen(true)}
                          className="pb-25 icon-default inline-flex items-center justify-center rounded-md p-2.5 text-neutral-950 z-50 animation duration-300 transform transition-all"
                        >
                          <span className="sr-only">Open main menu</span>
                          <Bars3Icon aria-hidden="true" className="size-10 block hover:-scale-y-110  animation duration-300 transition-all transform" />
            
                        </button>
                      </div>
                    </nav>
                   <AnimatePresence>
                    {mobileMenuOpen && (
                    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 h-screen" />
            <motion.div
              initial={{ translateX: '-60%', opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              exit={{ translateX: '-100%', opacity: 1 }}
              transition={{ type:"keyframes", stiffness: 300, damping: 30, duration: 0.5 }}
              className="fixed inset-y-1 right-0 z-50 w-full overflow-y-auto opacity-10 text-center text-blue-500 bg-white px-6 py-6 sm:max-w-full sm:ring-1 sm:ring-gray-900/10"
            >
                <DialogPanel>
                  <div className="flex z-50 items-center justify-between">
                    <img src="/favicon.ico" className='w-15 pb-10'/>
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt=""
                        src="./mobileIcon-black.png"
                        className="h-20 w-auto"
                      />
                    </a>
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className=" rounded-md pr-4 pb-12 text-red-500 hover:text-neutral-950 transition-all duration-300"
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon aria-hidden="true" className="size-10 hover:rotate-180 duration-300" />
                    </button>
                  </div>
                  <div className=" flow-root">
                    <div className="divide-gray-500/10">
                      <div className="">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className=" block rounded-lg text-start font-semibold font-orbitron text-blue-500 mt-10 opacity-90 text-4xl hover:text-neutral-700 transition-all duration-250"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className='absolute bottom-10 text-start'>
                    <span>Benefactor Racing</span>
                    <br/>
                    <span className='opacity-50'>App version: 1.5.0</span><br/>
                    </div>
                  </div>
                  </DialogPanel>
                </motion.div>
              </Dialog>
                    )}
            </AnimatePresence>
            </header>
            <div className="grid grid-cols-1 grid-rows-1 ">
                  <Carousel className="max-md:left-0 max-md:w-90 rounded-2xl">
                  <h4
                  className='font-Exo-2 text-xl text-center pt-2 top-150 text-black z-10 h-11 bg-gray-200 absolute w-full'>Pics of the week</h4>
                  <CarouselContent>
                <CarouselItem className="left-36 cursor-grab active:cursor-grabbing">
                  <img src="/assets/Formula1/Testing-hungary-Chicane-mobile.jpg" className='object-cover h-full w-full'></img>
                  <div className="bg-gray-500 opacity-80"></div>
                </CarouselItem>
                <CarouselItem className="text-center left-36 cursor-grab active:cursor-grabbing">
                  <img src="assets/Formula1/Austria-T4.jpg" className="w-full h-full object-cover"></img>
                </CarouselItem>
                <CarouselItem className="text-center cursor-grab active:cursor-grabbing">
                  <img src="/assets/Formula1/testing-Hungary-T4-mobile.jpg" className='w-full h-160 object-cover'></img>
                </CarouselItem>
                </CarouselContent>
                  <CarouselPrevious className="left-0 hidden"/>
                  <CarouselNext className="right-0 hidden" />
                </Carousel>
                <div className="relative w-full h-100">
                    <img src="/assets/Formula1/Testing-Hungary-Chicane-mobile.jpg"
                    className='object-cover w-full h-full'/>
                    <div className='text-start bg-gray-200 top-99 h-20 w-full z-10 absolute'>
                    <h3 className='font-Exo-2 text-xl text-center text-black'>First testing done by Oliver in Hungary</h3>
                    <a href='/Articles/Formula-1/Hungary/Oliver-Goethe-Testing-In-Hungary'>
                        <button className='relative top-3 left-1/3 w-25 h-10 rounded-full text-black bg-white border shadow-4xl border-white hover:bg-white hover:border-white hover:text-white transition duration-300'>
                        See more</button>
                    </a>
                    </div>
                </div>
                <div className="relative w-full h-100">
                    <img src="/assets/Formula1/Austria-T4.jpg"
                    className='object-cover w-full h-full'/>
                    <div className='text-start bg-gray-200 top-99 h-20 w-full z-10 absolute'>
                    <h3 className='font-Exo-2 text-xl text-center text-black'>Successfull executed race in Austria</h3>
                    <a href='/'>
                        <button className='relative top-3 left-1/3 w-25 h-10 rounded-full text-black bg-white border shadow-4xl border-white hover:bg-white hover:border-white hover:text-white transition duration-300'>
                        See more</button>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
};