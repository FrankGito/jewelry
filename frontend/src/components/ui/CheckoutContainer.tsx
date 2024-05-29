/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: "Women's Basic Tee",
      href: '#',
      price: '$32.00',
      color: 'Gray',
      size: 'S',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-05-product-01.jpg',
      imageAlt: "Front of women's basic tee in heather gray.",
    },
    // More products...
  ]
  
  export default function CheckoutContainer() {
    return (
      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8 xl:px-2 xl:pt-14">
          <h1 className="sr-only">Checkout</h1>
  
          <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="mx-auto w-full max-w-lg">
              <h2 className="sr-only">Order summary</h2>
  
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {products.map((product) => (
                    <li key={product.id} className="flex space-x-6 py-6">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
                      />
                      <div className="flex-auto">
                        <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                          <div className="flex-auto space-y-1 text-sm font-medium">
                            <h3 className="text-gray-200">
                              <a href={product.href}>{product.name}</a>
                            </h3>
                            <p className="text-gray-200">{product.price}</p>
                            <p className="hidden text-gray-200 sm:block">{product.color}</p>
                            <p className="hidden text-gray-100 sm:block">{product.size}</p>
                          </div>

                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
  
              <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd className="text-gray-200">$104.00</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Taxes</dt>
                  <dd className="text-gray-200">$8.32</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Shipping</dt>
                  <dd className="text-gray-200">$14.00</dd>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-6 text-gray-200">
                  <dt className="text-base">Total</dt>
                  <dd className="text-base">$126.32</dd>
                </div>
              </dl>
            </div>
  
            <div className="mx-auto w-full max-w-lg">
  
              <div className="relative mt-8">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm font-medium text-gray-500">or</span>
                </div>
              </div>

                <h2 className="text-lg font-medium text-gray-200">Contact information</h2>
  
                <div className="mt-6">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div className="mt-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div className="mt-6 flex space-x-2">
                  <div className="flex h-5 items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <label htmlFor="terms" className="text-sm text-gray-500">
                    I have read the terms and conditions and agree to the sale of my personal information to the highest
                    bidder.
                  </label>
                </div>
  
                <button
                  type="submit"
                  disabled
                  className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
                >
                  Continue
                </button>
  
              <div className="mt-10 divide-y divide-gray-200 border-b border-t border-gray-200">
                <button
                  type="button"
                  disabled
                  className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
                >
                  Payment details
                </button>
                <button
                  type="button"
                  disabled
                  className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
                >
                  Shipping address
                </button>
                <button
                  type="button"
                  disabled
                  className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
                >
                  Billing address
                </button>
                <button
                  type="button"
                  disabled
                  className="w-full cursor-auto py-6 text-left text-lg font-medium text-gray-500"
                >
                  Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  