'use client'

import { useNavigate } from 'react-router-dom';
import logo from './assets/logo1.png';
import { Fragment, useState, useEffect } from 'react';
import {
  PopoverGroup,
} from '@headlessui/react'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

const navigation = {
  categories: [
    {
      id: 'product',
      name: 'Products',
      featured: [
        {
          name: 'Jordans',
          href: '/designer',
          imageSrc: 'https://5.imimg.com/data5/ANDROID/Default/2021/12/RS/LO/UU/19051907/product-jpeg.jpg',
          imageAlt: 'Nike1',
        },
        {
          name: 'Casual Shoes',
          href: '/casual',
          imageSrc: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/f14bd267-64ea-4cb0-903d-01760b32b9eb/W+NIKE+V2K+RUN.png',
          imageAlt: 'Nike2',
        },
      ],
      sections: [
        {
          id: 'shoes',
          name: 'Shoes',
          items: [
            { name: 'Casual', href: '/casual' },
            { name: 'Skateboarding', href: '/skateboarding' },
            { name: 'Designer', href: '/designer' },
            { name: 'Sports', href: '/sports' },
          ],
        },
        {
          id: 'jordans',
          name: 'Jordans',
          items: [
            { name: 'Jordan 1s', href: '/designer' },
            { name: 'Jordan 4s', href: '/designer' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Products', href: '/products' },
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/aboutus' },
  ],
}

export default function Header() {
  const navigate = useNavigate(); // Initialize navigate function

  // Check if user is logged in (i.e., if a JWT token exists in localStorage)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Get the token from localStorage
    if (token) {
      setIsLoggedIn(true); // If token exists, the user is logged in
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsLoggedIn(false); // Update state
    navigate("/");
  };

  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">FootFolio</span>
                  <img src={logo} alt="Logo" className="logo-img" />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {isLoggedIn ? (
                    <>
                      <button
                        onClick={handleLogout}
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Logout
                      </button>
                      {/* Cart Icon */}
                      <div className="ml-4 flow-root lg:ml-6">
                        <a href="/cart" className="group -m-2 flex items-center p-2">
                          <ShoppingBagIcon
                            aria-hidden="true"
                            className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                          />
                          <span className="sr-only">items in cart, view bag</span>
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
                      <a href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                        Log in
                      </a>
                      <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                      <a href="/register" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                        Create account
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
