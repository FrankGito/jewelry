import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Women's Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Gray",
    size: "S",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-05-product-01.jpg",
    imageAlt: "Front of women's basic tee in heather gray.",
  },
];

export default function CheckoutContainer() {
  const [shippingAddress, setShippingAddress] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    zip: "",
    city: "",
    state: "",
    country: "",
    terms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setShippingAddress((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(shippingAddress);
  };

  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8 xl:px-2">
        <h1 className="sr-only">Checkout</h1>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3">
          {/* First Grid - Product Information */}
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
                          <p className="hidden text-gray-200 sm:block">
                            {product.color}
                          </p>
                          <p className="hidden text-gray-100 sm:block">
                            {product.size}
                          </p>
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
                <dd className="text-gray-200">$32.00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Taxes</dt>
                <dd className="text-gray-200">$2.56</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd className="text-gray-200">$14.00</dd>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-6 text-gray-200">
                <dt className="text-base">Total</dt>
                <dd className="text-base">$48.56</dd>
              </div>
            </dl>
          </div>

          {/* Second Grid - Shipping Information */}
          <div className="mx-auto w-full max-w-lg">
            <form onSubmit={handleSubmit}>
              <h2 className="text-lg font-medium text-gray-200">
                Contact information
              </h2>

              <div className="mt-6 flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email"
                      autoComplete="email"
                      value={shippingAddress.email}
                      onChange={handleInputChange}
                      className="pl-4 pr-4 pb-2 pt-2 bg-black border rounded-md border-white text-gray-300 w-full"
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      value={shippingAddress.phone}
                      onChange={handleInputChange}
                      className="pl-4 pr-4 pb-2 pt-2 bg-black border rounded-md border-white text-gray-300 w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="firstName"
                      id="first-name"
                      autoComplete="given-name"
                      value={shippingAddress.firstName}
                      onChange={handleInputChange}
                      className="pl-4 pr-4 pb-2 pt-2 bg-black border rounded-md border-white text-gray-300 w-full"
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="lastName"
                      id="last-name"
                      autoComplete="family-name"
                      value={shippingAddress.lastName}
                      onChange={handleInputChange}
                      className="pl-4 pr-4 pb-2 pt-2 bg-black border rounded-md border-white text-gray-300 w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="address1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address 1
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="address1"
                      id="address1"
                      autoComplete="address-line1"
                      value={shippingAddress.address1}
                      onChange={handleInputChange}
                      className="pl-4 pr-4 pb-2 pt-2 bg-black border rounded-md border-white text-gray-300 w-full"
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="address2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address 2
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="address2"
                      id="address2"
                      autoComplete="address-line2"
                      value={shippingAddress.address2}
                      onChange={handleInputChange}
                      className="pl-4 pr-4 pb-2 pt-2 bg-black border rounded-md border-white text-gray-300 w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      value={shippingAddress.city}
                      onChange={handleInputChange}
                      className="pl-4 pr-4 pb-2 pt-2 bg-black border rounded-md border-white text-gray-300 w-full"
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      autoComplete="address-level1"
                      value={shippingAddress.state}
                      onChange={handleInputChange}
                      className="pl-4 pr-4 pb-2 pt-2 bg-black border rounded-md border-white text-gray-300 w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium text-gray-700"
                >
                  Zip
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    autoComplete="postal-code"
                    value={shippingAddress.zip}
                    onChange={handleInputChange}
                    className="pl-4 pr-4 pb-2 pt-2 bg-black border rounded-md border-white text-gray-300 w-full"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="country"
                    id="country"
                    autoComplete="country"
                    value={shippingAddress.country}
                    onChange={handleInputChange}
                    className="pl-4 pr-4 pb-2 pt-2 bg-black border rounded-md border-white text-gray-300 w-full"
                  />
                </div>
              </div>

              <div className="mt-6 flex space-x-2">
                <div className="flex h-5 items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={shippingAddress.terms}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <label htmlFor="terms" className="text-sm text-gray-500">
                  I have read the terms and conditions and agree to the sale of
                  my personal information to the highest bidder.
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-md border border-gray-300 bg-gray-900/10 pl-4 pr-4 pb-2 pt-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Continue
              </button>
            </form>

            <div className="mt-10 divide-y divide-gray-200 border-b border-t border-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
