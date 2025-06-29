'use client'

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState, useRef } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, Bars2Icon } from '@heroicons/react/24/outline'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const navigation = [
  { name: 'Racing', href: '/' },
  { name: 'Articles', href: '#' },
  { name: 'Formula 1', href: '#' },
  { name: 'WEC/IMSA', href: '#' },
]


export default function Membership() {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return(
        <div className="font-raleway">
            <header className="inset-x-0 z-50">
        <nav aria-label="Global" className="flex w-full items-center justify-between p-6 lg:px-8  border-b border-black border shadow-2xl">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/favicon.ico"
                className="h-8 w-auto text-white"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex -m-2.5 p-3.5 items-center justify-center rounded-md text-blue-600 hover:text-black duration-300"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-black">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/Login" className="text-sm/6 font-semibold text-black">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
            <motion.div
              initial={{ translateX: '-60%', opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              exit={{ translateX: '-100%', opacity: 1 }}
              transition={{ type:"keyframes", stiffness: 300, damping: 30, duration: 0.5 }}
              className="fixed inset-y-1 right-0 z-50 w-full overflow-y-auto opacity-10 text-center text-white px-6 py-6 sm:max-w-full sm:ring-1 sm:ring-gray-900/10"
            >
          <DialogPanel className="fixed inset-y-0 left-0 z-50 w-70 overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-red-500"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7  font-semibold text-black hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-black hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
            </DialogPanel>
          </motion.div>
        </Dialog>
              )}
      </AnimatePresence>
      </header>

        <div className="h-screen relative">
        <div className="flex-1/4 relative botom-50 top-25">
            <h1 className="pl-5 botom-1/2 text-5xl font-orbitron relative">MAESTROS </h1>
                <ul className="list-none relative pl-5 text-3xl pt-15">
                    <li className="my-10">What is a maestros</li>
                    <li className="my-10">Benefits</li>
                    <li className="my-10">Join the programme</li>
                    <li className="my-10">Contact</li>
                </ul>
              </div>
                <div className="w-full h-screen bg-white">
                <img src="/assets/Formula1/Monaco-chicane.jpg" className="sharp-edge w-231 h-130 left-138.25 relative bottom-75"/>
            </div>
        </div>
        <div className="relative h-screen bg-white pl-20">
            <h1 className="text-6xl pt-30 font-orbitron">What is maestros</h1>
            <p className="text-xl pt-5 text-start w-180">
              Maestros is a nickname for our fans and for our membership programme.
              It's purpose is to bring closer our fans and a team via many competitions and much more.
              We're often organize once in a lifetime opportunities across many categories and races.
              Also you can win many more things as our merch vouchers and more.
            </p>
        </div>
         <div className="relative h-screen bg-white pl-20">
            <h1 className="text-6xl pt-30 pr-5 font-orbitron">Benefits</h1>
              <Accordion
                    type="single"
                    collapsible
                    className="w-200 right-0 relative text-3xl pt-5" 
                    defaultValue="item-1"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-xl">Once in a lifetime opportunities</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                        <p>
                          We offer you to win HQ tour, paid race weekend to random race, meet & greet with drivers and team.
                        </p>
                        <p>
                          Key features include advanced processing capabilities, and an
                          intuitive user interface designed for both beginners and experts.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-xl">Vouchers and Discounts</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                        <p>
                          Discounts and vouchers for various products in our shop from shirts to Posters.
                          And from time to time you can win in our competition a signed piece of our merch by our drivers
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-xl">News and updates</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                        <p>
                          You will be first to hear about new collection of our merch our any other competition which you can win.
                          </p>
                          <p>Rumours of paddock will get to you first with newsletter updates
                          </p>
                          <p>
                          You will get also a personalize page in mobile app where you can customize you app as you like.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
             </div>

            <div className="relative h-screen bg-white pl-20">
            <h1 className="text-6xl pt-30 font-orbitron">JOIN THE MAESTROS</h1>
            <p className="text-xl pt-5 text-start w-180">
              Make a mark with us
            </p>
        </div>
  </div>
    )
}