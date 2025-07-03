'use client'

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState, useRef } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, Bars2Icon } from '@heroicons/react/24/outline'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import SplitText from "@/components/ui/SplitText";
import CountUp from '@/components/ui/CountUp'

const navigation = [
  { name: 'Racing', href: '/' },
  { name: 'WEC & IMSA', href: '/Endurance' },
  { name: 'GTWC', href: '#' },
  { name: 'Carrers', href: '#' },
];

const posts = [
  {
    id: 1,
    title: '24 Hours of Le Mans',
    href: '#',
    description:
      'Biggest race of the year with heartbroken ending for our hypercar crew.',
    date: '26/06/2025',
    datetime: '2025-06-26',
    category: { title: 'Prieview', href: '/' },
  },
    {
    id: 2,
    title: '6 Hours of Spa',
    href: '#',
    description:
    'productive and successfull days in fable Spa Francorchamps.',
    date: '23/06/2025',
    datetime: '2025-06-23',
    category: { title: 'Report', href: '/' },
  },
    {
    id: 3,
    title: 'Six Hours of The Glen',
    href: '#',
    image:"/assets/Formula1/Austria-T4.jpg",
    description:
    'Overall nice weekend for our crew in Watkins Glen.',
    date: '15/06/2025',
    datetime: '2025-06-15',
    category: { title: 'Report', href: '/' },
  },
];

export default function WecImsaPage() {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return(
    <div className="bg-white font-raleway">
            <img src="/assets/Hypercar/Brasil-2nd-Sector.jpg"
              className='absolute w-full h-full object-cover max-sm:hidden md:block'/>
              <img src="/assets/Hypercar/Le-Mans-Straight-mobile.jpg"
              className='max-sm:block md:hidden w-full object-cover absolute h-full'/>
              <header className="relative inset-x-0 z-50 h-screen">
                <nav aria-label="Global" className="flex w-full items-center justify-between p-6 lg:px-8 border-black">
                  <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt=""
                        src="/Benefactor-logo-white.webp"
                        className="h-8 w-auto text-white"
                      />
                    </a>
                  </div>
                  <div className="flex lg:hidden">
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(true)}
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-600 hover:text-white duration-300"
                    >
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                  <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="/Login" className="text-sm/6 font-semibold text-white">
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
                              className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <div className="py-6">
                          <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
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
        
              <div className="absolute z-40 max-sm:bottom-20 max-sm:left-0 sm:bottom-10 left-105 isolate px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                  <div className="max-sm:left-0 z-10 relative">
                    <h1 className="text-5xl font-semibold tracking-tight text-balance text-center text-white sm:text-7xl">
                      benefactor Endurance Racing
                    </h1>
                    <p className="mt-8 text-lg font-medium text-pretty text-center text-white sm:text-xl/8">
                    Official website of Benefactor Endurance Racing team
                    </p>
                  </div>
                </div>
              </div>

          <div className="h-screen">
            <section className="bg-white h-screen snap-start w-300 text-xl">
                  <h1 className="text-6xl pt-10 pl-5">Home of Benefactor Endurance Racing Team</h1>
                  <p className="text-wrap  pl-5 pt-15">
                    Our joruney in endurance racing begun in early 1970's were we achieved our first win at legendary 24 hours of Le Man's.
                  </p>
                  <p className="text-wrap  pl-5 pt-5">
                    In 1980's to 90's, our team was dominant in endurance racing. 18 wins across 10 years which 8 of them are Le Man's victories.
                  </p>
                  <p className="text-wrap pl-5 pt-5">
                    In 2000's we were forced to shutdown our endurance department because we focused more on formula 1.
                    Fortunately, In 2008 we were able to return and compete in endurance racing.
                    We started in Intercontinental Le Man's cup with few victories. Year after we entered the world of american motorsport with IMSA series.
                    In 2018, Benefactor started to focus on younger drivers to boost driver market outside of F1. That's why we entered ELMS (European le Man's Series), 
                    and ALMS(Asian Le Man's Series).
                  </p>
                  <p className="text-wrap pl-5 pt-5">
                    In 2025, Benefactor aims to conquer the world of endurance. In WEC Benefactor became 2020 World manufacturers champion and in 2023 runner-up.
                    In America, Benefactor successeded only in 2021 and 2024.
                    ELMS and ALMS, Benefactor ended up in both 8th in 2022 and 6th and 7th in 2024. 
                  </p>
            </section>
            <section className="bg-black h-screen">
                 <div className="bg-white py-24 sm:py-32 h-screen relative">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 h-screen">
                      <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900  sm:text-5xl">Latest News</h2>
                      </div>
                      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                          <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                              <time dateTime={post.datetime} className="text-gray-500">
                                {post.date}
                              </time>
                              <a
                                href={post.category.href}
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                              >
                                {post.category.title}
                              </a>
                            </div>
                            <div className="group relative">
                              <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                <a href={post.href}>
                                  <span className="absolute inset-0" />
                                  {post.title}
                                </a>
                              </h3>
                              <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
            </section>
              <div className="relative">
                    <h3 className='text-4xl font-bold text-pretty px-6 py-10 text-center absolute w-100 h-30 rounded-4xl z-50 left-1/3 m-5 bg-gray-200 text-blue-500'>
                    Upcoming Events
                    </h3>
                  <Carousel className="max-md:left-0 relative rounded-2xl h-screen" >
                    <CarouselContent>
                    <CarouselItem className="cursor-grab active:cursor-grabbing">
                    <img src="/assets/Hypercar/Le-Mans-straight-mobile.jpg" className="max-sm:block sm:hidden object-cover max-sm:size-160"/>
                    <img src="/assets/Formula1/Austria-T2.jpg" className='max-sm:hidden sm:block'/>
                    <div className="bg-white opacity-80 text-blue-500 rounded-full text-3xl absolute z-50 bottom-5 max-sm:w-90 sm:w-110 text-center sm:text-start sm:pl-5 sm:left-10">
                      <h3>4 Hours of Imola</h3>
                      <h5>04/07 - 06/07</h5>
                    </div>
                    </CarouselItem>
                    <CarouselItem className="text-center cursor-grab active:cursor-grabbing">
                    <img src="assets/Hypercar/Spa-kemmel-chicane.jpg" className="max-sm:block md:hidden max-sm:size-160 object-cover"/>
                    <img src="assets/Hypercar/Le-Mans-Dunlop.jpg" className="max-sm:hidden md:block"/>
                    <div className="bg-white opacity-80 text-blue-500 rounded-full text-3xl absolute z-50 bottom-5 max-sm:w-90 sm:w-110 text-center sm:text-start sm:pl-5 sm:left-385">
                      <h3>Chevrolet Grand Prix</h3>
                      <h5>11/07 - 13/07</h5>
                    </div>
                    </CarouselItem>
                    <CarouselItem className="text-center cursor-grab active:cursor-grabbing">
                    <img src="/assets/Hypercar/Brasil-2nd-Sector.jpg" className='max-sm:hidden md:block'/>
                    <img src="assets/Hypercar/Le-Mans-chicane.jpg" className="max-sm:block md:hidden max-sm:size-160 object-cover"/>
                    <div className="bg-white opacity-80 text-blue-500 rounded-full text-3xl absolute z-50 bottom-5 max-sm:w-90 sm:w-110 text-center sm:text-start sm:pl-5 sm:left-760">
                      <h3>6 Hours of Sao Paulo</h3>
                      <h5>11/07 - 13/07</h5>
                    </div>
                    </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-0 max-sm:hidden"/>
                    <CarouselNext className="right-0 max-sm:hidden" />
                  </Carousel>
                </div>

                <section className="h-screen relative top-18 bg-white">
                  <h1 className="text-black text-5xl m-5 pt-15 pl-3">Drivers Line-Up</h1>
                </section>

     <div className="bg-white relative sm:py-32 h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-900">
          Benefactor Racing Partners
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src="/assets/Sponsors/brembo.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:shadow-2xl hover:scale-105 duration-300"
          />
          <img
            alt="Reform"
            src="/assets/Sponsors/Exxon.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:shadow-2xl hover:scale-105 duration-300"
          />
          <img
            alt="Tuple"
            src="/assets/Sponsors/Fanatec.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:shadow-2xl hover:scale-105 duration-300"
          />
          <img
            alt="SavvyCal"
            src="/assets/Sponsors/GoPro.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 hover:shadow-2xl hover:scale-105 duration-300"
          />
          <img
            alt="Statamic"
            src="/assets/Sponsors/gulf.png"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 hover:shadow-2xl hover:scale-105 duration-300"
          />
            <img
            alt="Statamic"
            src="/assets/Sponsors/Mobil1.png"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 hover:shadow-2xl hover:scale-105 duration-300"
          />
            <img
            alt="Statamic"
            src="/assets/Sponsors/Shell.webp"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 hover:shadow-2xl hover:scale-105 duration-300"
          />
        </div>
       </div>
      </div>
     </div>
 <footer className="footer sm:footer-horizontal h-80 top-700 relative text-xl bg-base-200 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="w-80 ">
      <label>Enter your email address</label>
      <div className="join pt-5">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
        <aside className="max-sm:relative absolute bottom-1 flex items-baseline text-center max-sm:right-5 text-lg right-132">
        <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by Benefactor group</p>
      </aside>
</footer>
</div>
    )
}