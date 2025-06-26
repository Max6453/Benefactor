'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, Bars2Icon } from '@heroicons/react/24/outline'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";

const navigation = [
  { name: 'Formula 1', href: '/acount' },
  { name: 'WEC & IMSA', href: '#' },
  { name: 'GTWC', href: '#' },
  { name: 'Carrers', href: '#' },
]

const posts = [
  {
    id: 1,
    title: 'Austrian Grand Prix Preview',
    href: '#',
    description:
      'Everything you need to know about 2025 Austrian Grand Prix',
    date: '26/06/2025',
    datetime: '2025-06-26',
    category: { title: 'Prieview', href: '/' },
  },
    {
    id: 2,
    title: '24 Hours of Nurburgring',
    href: '#',
    description:
    'The 24 Hours of Nurburgring was abundant with controversies and beautifull overtakes and many more stories',
    date: '23/06/2025',
    datetime: '2025-06-23',
    category: { title: 'Report', href: '/' },
  },
    {
    id: 3,
    title: '24 Hours of Le Mans',
    href: '#',
    description:
    'The legendary 24 hours of Le Mans came once again and it didnt dissapoint',
    date: '15/06/2025',
    datetime: '2025-06-15',
    category: { title: 'Report', href: '/' },
  },
    {
    id: 4,
    title: 'Canadian Grand Prix',
    href: '#',
    description:
    'Hear from our drivers and CEO about recent Canadian Grand Prix',
    date: '15/06/2025',
    datetime: '2025-06-15',
    category: { title: 'Report', href: '#' },
  },
    {
    id: 5,
    title: 'GTWC - Monza',
    href: '#',
    description:'Nothing is easy at temple of speed in Monza',
    date: '01/06/2025',
    datetime: '2025-01-06',
    category: { title: 'Report', href: '/' },
  },
{
    id: 6,
    title: 'Spanish Grand Prix',
    href: '#',
    description:'Hear from our drivers and team principal about Spanish grand prix',   
    date: '01/06/2025',
    datetime: '2025-01-06',
    category: { title: 'Report', href: '#' },
},
  // More posts...
]

const links = [
  { name: 'How does this work', href: '#' },
  { name: 'Benefits', href: '#' },
  { name: 'Become member', href: '#' },
]
const stats = [
  { name: 'Official memebers', value: '120 000' },
  { name: 'benefits given', value: '1200+' },
  { name: 'overall experience', value: '9/10' },
]


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
                    <img
      src="/assets/Hypercar/Spa-Eau-Rouge.jpg"
      className='absolute h-full w-full object-cover max-sm:hidden md:block'/>
      <img src="/assets/hypercar/Le-Mans-Straight-mobile.jpg"
      className='max-sm:block md:hidden w-full object-cover absolute h-full'/>
      <header className="relative inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex switchNav items-center justify-between p-6 lg:px-8 border-b border-black">
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
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
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
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="aboslute lg:left-100 max-sm:left-0 top-50 z-10">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-center text-blue-500 sm:text-7xl">
              Benefactor Racing
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-center text-white sm:text-xl/8">
            Official website of Benefactor racing team
            </p>
          </div>
        </div>
      </div>

 <div className="bg-white py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Latest News</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Learn how your favourite teams ended their race weekends</p>
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

    <div className="grid grid-cols-1 grid-rows-1 ">
      <h3 className='max-sm:text-4xl text-5xl py-24 relative pb-5 font-bold'>Upcoming Events</h3>
       <Carousel className="max-md:left-0 max-md:w-90 rounded-2xl">
      <CarouselContent>
     <CarouselItem className="left-36 cursor-grab active:cursor-grabbing">
      <img src="/assets/Hypercar/Le-Mans-straight-mobile.jpg" className='max-sm:w-full max-sm:h-full max-sm:block max-sm:object-cover sm:hidden'/>
      <img src="/assets/Hypercar/Le-Mans-side.jpg" className='w-full h-full max-sm:hidden sm:block'/>
      <div className="bg-gray-500 opacity-80"></div>
     </CarouselItem>
     <CarouselItem className="text-center left-36 cursor-grab active:cursor-grabbing">
      <img src="assets/Hypercar/Spa-kemmel-chicane.jpg" className="w-full h-full object-cover"></img>
     </CarouselItem>
     <CarouselItem className="text-center cursor-grab active:cursor-grabbing">
      <img src="/assets/Formula1/Austria-T10.jpg" className='h-160'></img>
     </CarouselItem>
     </CarouselContent>
      <CarouselPrevious className="left-0 hidden"/>
      <CarouselNext className="right-0 hidden" />
    </Carousel>
  </div>


  <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src="/assets/Formula1/Monaco-chicane.jpg"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center max-sm:hidden md:block"
      />
      <img
      alt=''
      src="/assets/Hypercar/Le-Mans-straight-mobile.jpg"
      className="absolute inset-0 -z-10 size-full object-cover md:object-center max-sm:block md:hidden"/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Become a member</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            We appreciate every support you giving us. Thats why we decided to make a "partnership" with you.

          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>


<div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src="/assets/sponsors/brembo.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Reform"
            src="/assets/sponsors/Exxon.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Tuple"
            src="/assets/sponsors/fanatec.jpg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="SavvyCal"
            src="/assets/sponsors/GoPro.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Statamic"
            src="/assets/sponsors/gulf.png"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
            <img
            alt="Statamic"
            src="/assets/sponsors/Mobil1.jpg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
            <img
            alt="Statamic"
            src="/assets/sponsors/Shell.webp"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>


    <footer className="footer sm:footer-horizontal h-80 text-xl bg-base-200 text-base-content p-10">
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
</footer>
      <aside className="absolute flex items-baseline right-145">
        <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by Benefactor group</p>
      </aside>
</div>
  )
}
