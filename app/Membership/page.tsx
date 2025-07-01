'use client'

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState, useRef } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { supabase } from "@/lib/supabase";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import axios from "axios";

const navigation = [
  { name: 'Racing', href: '/' },
  { name: 'Articles', href: '#' },
  { name: 'Formula 1', href: '#' },
  { name: 'WEC/IMSA', href: '#' },
]

export default function Membership() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState<string | null>(null);

  const BREVO_API_KEY = process.env.NEXT_PUBLIC_BREVO_API_KEY;
  const BREVO_LIST_ID = process.env.NEXT_PUBLIC_BREVO_LIST_ID;

   const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSuccess(false);
    setNewsletterError(null);

    // Basic email validation
    if (!newsletterEmail || !/\S+@\S+\.\S+/.test(newsletterEmail)) {
      setNewsletterError("Please enter a valid email address.");
      return;
    }

    // 1. Save to Supabase
    const { error } = await supabase.from("newsletter").insert([{ email: newsletterEmail }]);
    if (error) {
      setNewsletterError("Failed to subscribe. Please try again.");
      return;
    }

    // 2. Send to Brevo (via secure API route)
    try {
      const res = await axios.post("/api/newsletter", { email: newsletterEmail });
      if (res.data.success) {
        setNewsletterSuccess(true);
        setNewsletterEmail("");
      } else {
        setNewsletterError(res.data.error || "Failed to add to newsletter. Please contact support.");
      }
    } catch (brevoError: any) {
      setNewsletterError(
        brevoError.response?.data?.error ||
        "Subscribed to database, but failed to add to newsletter. Please contact support."
      );
    }
  };
  
  return (
    <div className="font-raleway">
      <header className="inset-x-0 z-50">
        <nav aria-label="Global" className="flex w-full items-center justify-between p-6 lg:px-8 border-b border-black border shadow-2xl">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
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
                transition={{ type: "keyframes", stiffness: 300, damping: 30, duration: 0.5 }}
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
            <li className="my-10"><a href="#Programme">What is a maestros</a></li>
            <li className="my-10"><a href="#Benefits">Benefits</a></li>
            <li className="my-10"><a href="#Join">Join the programme</a></li>
            <li className="my-10"><a href="#Contact">Contact</a></li>
          </ul>
        </div>
        <div className="w-full h-screen bg-white">
          <img src="/assets/Formula1/Monaco-chicane.jpg" className="sharp-edge w-231 h-130 left-138.25 relative bottom-75" />
        </div>
      </div>
      <div className="relative h-screen bg-white pl-20">
        <h1 className="text-6xl pt-30 font-orbitron" id="Programme">What is maestros</h1>
        <p className="text-xl pt-5 text-start w-180">
          Maestros is a nickname for our fans and for our membership programme.
          It's purpose is to bring closer our fans and a team via many competitions and much more.
          We're often organize once in a lifetime opportunities across many categories and races.
          Also you can win many more things as our merch vouchers and more.
        </p>
      </div>
      <div className="relative h-screen bg-white pl-20">
        <h1 className="text-6xl pr-5 font-orbitron" id="Benefits">Benefits</h1>
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

      <div className="relative h-100 bg-white pl-20">
        <h1 className="text-6xl font-orbitron" id="Join">JOIN THE MAESTROS</h1>
        <p className="text-2xl pt-5 text-start w-180">
          Make a mark with us.
          Join the maestros
        </p>

        <form onSubmit={handleNewsletterSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              All we need is just your email
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Email address:
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="maestro@gmail.com"
                        value={newsletterEmail}
                        onChange={e => setNewsletterEmail(e.target.value)}
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-start pl-10 gap-x-6">
            <button
              type="button"
              className="text-sm/6 font-semibold text-gray-900"
              onClick={() => {
                setNewsletterEmail("");
                setNewsletterError(null);
                setNewsletterSuccess(false);
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
            {newsletterSuccess && (
               <motion.div
               initial={{ translateY: '-110%', opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                exit={{ translateX: '110%', opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.5 }}
               className="border rounded-4xl w-150 max-sm:w-80 text-center pt-10 h-50 absolute max-sm:left-0 left-105 text-3xl max-sm:text-2xl bg-white border-black transition-all duration-300 animate-out">
                thank you for subscribing our newsletter. Confirmation email will come shortly.
                </motion.div>
            )}
            {newsletterError && (
              <span className="text-red-400 ml-4 self-center">{newsletterError}</span>
            )}
          </div>
        </form>
      </div>

      <div className="bg-white py-24 sm:py-32">
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


    <footer className="footer sm:footer-horizontal h-80 text-xl bg-base-200 text-base-content p-10" id="Contact">
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
        <aside className="max-sm:relative absolute top-870 bottom-1 flex items-baseline text-center max-sm:right-5 text-lg right-120">
        <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by Benefactor group</p>
      </aside>
</footer>
    </div>
  );
}