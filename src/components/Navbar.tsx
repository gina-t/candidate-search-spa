import { Link } from 'react-router-dom';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import beat from '../assets/beat.svg';
import portrait from '../assets/portrait.jpg';


const Navbar: React.FC = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {/* toggle visibility of mobile menu button icons */}
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2 lg:px-0">
                <div className="shrink-0">
                  <img
                  alt="logo"
                  src= {beat}
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden lg:ml-6 lg:block">
                <div className="flex space-x-4">
                  <Link 
                    to="/" className="rounded-md bg-gray-900 px-3 py-2 text-m font-medium text-gray-200">
                    Home
                  </Link>
                  <Link
                    to="/userSearch"
                    className="rounded-md px-3 py-2 text-m font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    User Search
                  </Link>
                  <Link
                    to="/savedUsers"
                    className="rounded-md px-3 py-2 text-m font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                   Saved Users
                  </Link>
                  <Link
                    to="/projects"
                    className="rounded-md px-3 py-2 text-m font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Projects
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex lg:hidden">
            {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                ) : (
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:block" />
                )}
              </DisclosureButton>
            </div>
            <div className="hidden lg:ml-4 lg:block">
              <div className="flex items-center">
                <button
                  type="button"
                  className="relative shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4 shrink-0">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt="portrait"
                        src={portrait}
                        className="h-8 w-auto rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                      >
                        Profile
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/projects"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                      >
                        Projects
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/signOut"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                        >
                          Sign Out
                      </Link>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <DisclosureButton
              as={Link}
              to="/"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            >
              Home
            </DisclosureButton>
            <DisclosureButton
            as={Link}
            to="/userSearch"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              User Search
            </DisclosureButton>
            <DisclosureButton
            as={Link}
            to="/savedUsers"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Saved Users
            </DisclosureButton>
            <DisclosureButton
              as={Link}
              to="/projects"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </DisclosureButton>
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="shrink-0">
                <img
                  alt="portrait"
                  src={portrait}
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">Dr Gina Tsanaktsidis</div>
                <div className="text-sm font-medium text-gray-400">ginadrcoder@gmail.com</div>
              </div>
              <button
                type="button"
                className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <DisclosureButton
              as={Link}
              to="/profile"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Profile
              </DisclosureButton>
              <DisclosureButton
                as={Link}
                to="/projects"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Projects
              </DisclosureButton>
              <DisclosureButton
                as={Link}
                to="/signOut"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Sign Out
              </DisclosureButton>
            </div>
          </div>
        </DisclosurePanel>
      </>
      )}
    </Disclosure>
  )
}

export default Navbar