import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const products = [
  {
    name: "useState",
    description: "Learn about the useState hook",
    to: "/usestate",
    icon: ChartPieIcon,
  },
  {
    name: "useEffect",
    description: "Learn about the useEffect hook",
    to: "/useeffect",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "CustomHook",
    description: "Learn about the useEffect hook",
    to: "/CustomHook",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "useContext",
    description: "Learn about the useEffect hook",
    to: "/UseContextHook",
    icon: CursorArrowRaysIcon,
  },
  // Add more items as needed
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#222831]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link
            to="/"
            className="text-2xl font-semibold text-gray-100 hover:text-gray-300 transition-colors duration-300"
          >
            React Basics
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#EEEEEE]"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-[#EEEEEE]">
              Hooks
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-[#00ADB5]"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#222831] shadow-lg ring-1 ring-[#393E46]/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <Link className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#393E46]"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#393E46] group-hover:bg-[#222831]">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-[#EEEEEE] group-hover:text-[#00ADB5]"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        to={item.to}
                        className="block font-semibold text-[#EEEEEE]"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-[#00ADB5]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </Link>
            </PopoverPanel>
          </Popover>

          <Link
            to="/LifecycleMethods"
            className="text-sm font-semibold leading-6 text-[#EEEEEE] hover:text-[#00ADB5]"
          >
            Lifecycle Methods
          </Link>
          <Link
           to="/EventLoop"
            className="text-sm font-semibold leading-6 text-[#EEEEEE] hover:text-[#00ADB5]"
          >
            EventLoopHandler
          </Link>
          <Link
            to={"/Promies"}
            className="text-sm font-semibold leading-6 text-[#EEEEEE] hover:text-[#00ADB5]"
          >
            Promises in react
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#222831] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#393E46]">
          <div className="flex items-center justify-between">
            <a to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-[#EEEEEE]"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-[#393E46]/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-[#EEEEEE] hover:bg-[#393E46]">
                    Hooks
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-[#EEEEEE] hover:bg-[#393E46]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  to="/LifecycleMethods"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#EEEEEE] hover:bg-[#393E46]"
                >
                  Lifecycle Methods
                </Link>
                <Link
                  to="/EventLoop"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#EEEEEE] hover:bg-[#393E46]"
                >
                  EventLoopHandler
                </Link>
                <Link
                  to={"/Promies"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#EEEEEE] hover:bg-[#393E46]"
                >
                  Promises in react
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
