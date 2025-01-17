import AOS from "aos";
import "aos/dist/aos.css";
import React, {useEffect} from "react";

const products = [
  {
    id: 1,
    name: 'Casual',
    href: '/casual',
    imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4b24bc11-4ea0-4ee5-8d16-aa58b518475b/AIR+FORCE+1+%2707+FRESH.png',
    imageAlt: 'Casual Shoes',
  },
  {
    id: 2,
    name: 'Sports',
    href: '/sports',
    imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/05442d82-fde1-401f-a24e-33409f65c375/VAPOR+16+CLUB+FG%2FMG.png',
    imageAlt: 'Sports Shoes',
  },
  {
    id: 3,
    name: 'Skateboarding',
    href: '/skateboarding',
    imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/160469b0-9d14-452c-a153-c383259bd484/NIKE+SB+JANOSKI%2B+SLIP.png',
    imageAlt: 'Skaetboarding shoes',
  },
  {
    id: 4,
    name: 'Designer Shoes',
    href: '/designer',
    imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f76f73e-2578-4d62-abab-c5563ea4f78c/NIKE+DUNK+LOW+RETRO.png',
    imageAlt: 'Jordans',
  },
]

export default function ProductListing() {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        offset: 200,
        once: true,
      });
    }, []);

  return (
    <div className="bg-white" data-aos="fade-up">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-transparent-100 text-gray-700 py-4 pt-16 text-center" data-aos="fade-up">
          <p>&copy; 2025 <a href="https://www.linkedin.com/in/shivamdarekar2206/" target="_blank" rel="noopener noreferrer">Shivam Darekar</a>. All rights reserved.</p>
          <p className="mt-2 text-sm"> Images by <a href="https://www.nike.com" target="_blank" rel="noopener noreferrer" className="underline">Nike</a>.</p>
      </footer>
    </div>
  )
}
