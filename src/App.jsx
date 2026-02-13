import { useState } from 'react'
import Products from './components/Products';
import Navbar from './components/Navbar';



function App() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("All");
  const [query, setQuery] = useState("");
  const [products, setProduct] = useState([
    {
      id: 1,
      name: "Carrylux Women's Hand Held Shoulder Bag",
      price: 538,
      category: 'Bag',
      rating: 4.5,
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ34dBN9DJlxdT1np2jeWZKvTw8aAHnp05g8gxK-G3eHpyKkul8HVaZX-SWufyvBdWg2qgzqNsH7286PAOtWaYfgyJS7R8SNQ',
    },
    {
      id: 2,
      name: 'FUR JADEN Unisex Brand Logo Backpack (Onesize) by Myntra',
      price: 679,
      category: 'Bag',
      rating: 4.0,
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRTkLv5wMRNpj2qgdSyZpk9z-bqGTKOMliR9HeUYVekLk0dH03UL3tPj08_OAeluT9o2UEvPEX2Yj-KRrD-BIpbLXo-eWXRugCTr_oHF2tHUBn3ycPRbkrl3w',
    },
    {
      id: 3,
      name: 'Personalised Dayton Watch',
      price: 10990,
      category: 'Watch',
      rating: 4.0,
      image: 'https://etchcraftemporium.in/cdn/shop/products/daytonfinal.jpg?v=1678593471&width=1000',
    },
    {
      id: 4,
      name: 'Vaku Luxos ® Advanced Bluetooth Calling SmartWatch',
      price: 3999,
      category: 'Watch',
      rating: 4.0,
      image: 'https://vaku.in/cdn/shop/files/xtor_jpgArtboard_26_1024x1024.jpg?v=1769510215',
    },
    {
      id: 5,
      name: 'Galaxy S25 Ultra 5G ( 256 GB | 12 GB )',
      price: 129999,
      category: 'Phone',
      rating: 4.0,
      image: 'https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s25-ultra/buy/S25_Titanium_PDP_1600x864.jpg?imbypass=true',
    },
    {
      id: 6,
      name: 'Samsung S24 Ultra 5G',
      price: 81400,
      category: 'Phone',
      rating: 4.0,
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS_Fy4hdwyIQZXTCWmpOp0l7en3LHDvHxgIa836PSsF7HlgJNsjGuUszPm2q2i55sG6EmEPvjTX4GRZRJhRxV7lZe5E6KO7',
    },
    {
      id: 7,
      name: 'Louis Vuitton LV Trainer White Black White BLACK / UK 7 Sneaker',
      price: 138999,
      category: 'Shoe',
      rating: 3.7,
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS8ftsqEa6gQsn143AOvyZlNwGSTbnDepzez8v76_J4cqgXX5dmDtI57G3gA7KFuFitX93QkmFzzCz45qQM-G9zc8wQlC_CiKc9N-HnTNvHYI34dGwM_Vc7928',
    },
    {
      id: 8,
      name: "Puma Men's Galaxis Pro Performance Boost Running Shoes",
      price: 3500,
      category: 'Shoe',
      rating: 4.4,
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8-mvx8GySUixRmJakw9L-g0aSDmLWbfXeVm8yNGYoLMWD0Py_4RwcwvHdoX4gLqtHg1LwbUE4_2BNw6jIxzOZR-8FQ15wLPdvI-jcnmfqd6mfF5RZXVaxpA',
    },
    {
      id: 9,
      name: "SPARX Men's Mesh Running Shoes",
      price: 839,
      category: 'Shoe',
      rating: 4.0,
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTCenJy8Vh-G5D8rq8EN9bDYCW2e4RzEjAOVJi4wfUXE8mMWpk_0n0lVVAxUJC5E5NL-CEwjjg7K02YnqmRn-j7sG9ZhNjoldvoZKXhujz9oKIukFRehUFeiQ',
    },

  ])


  const filteredProducts = products.filter((product) => selectedCategory === "All" ? product : product.category === selectedCategory)
    .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "price-low-high") {
        console.log("price-low-high");
        return a.price - b.price;

      }
      else if (sortBy === "price-high-low") {
        console.log("price-high-low");
        return b.price - a.price;
      }
      if (sortBy === "rating-low-high") {
        console.log("rating-low-high");
        return a.rating - b.rating;

      }
      else if (sortBy === "rating-high-low") {
        console.log("rating-high-low");
        return b.rating - a.rating;
      }
      return 0;
    });

  return (
    <>

      <nav className="bg-white shadow-md px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-blue-600">
            Products
          </div>

          <div className="hidden md:flex">
            <input onInput={(e) => { setQuery(e.target.value) }} placeholder="Search ...." type="search" className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div className="hidden md:flex">
            <select onChange={(e) => {
              setSelectedCategory(e.target.value);
            }} name="" id="" value={selectedCategory} className="hover:text-blue-600 cursor-pointer">
              <option value="All">Category</option>
              <option value="Bag">Bag</option>
              <option value="Phone">Phone</option>
              <option value="Shoe">Shoe</option>
              <option value="Watch">Watch</option>
            </select>
          </div>
          <div className="hidden md:flex">
            <select onChange={(e) => {
              setSortBy(e.target.value);
            }} name="sort" id="" value={sortBy} className=" hover:text-blue-600 cursor-pointer">
              <option value="All">Sort</option>
              <option value="price-low-high">Price--Low to High</option>
              <option value="price-high-low">Price--High to Low</option>
              <option value="rating-low-high">Rating--Low to High</option>
              <option value="rating-high-low">Rating--High to Low</option>
            </select>
          </div>

          <button
            className="md:hidden text-2xl  "
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          <ul
            className={`md:flex md:items-center md:gap-6 absolute md:static bg-white w-full md:w-auto left-0 top-14 p-4 md:p-0 shadow-md md:shadow-none ${open ? "block" : "hidden"
              }`}
          >
            <li className="md:hidden mt-3">
              <input
                onInput={(e) => { setQuery(e.target.value) }} type="search"
                placeholder="Search..."
                className="border rounded-lg px-3 py-1 w-full focus:outline-none"
              />
            </li>
            <li className="md:hidden mt-6">
              <select onChange={(e) => {
                setSelectedCategory(e.target.value);
              }} name="" id="" value={selectedCategory} className="hover:text-blue-600 cursor-pointer">
                <option value="All">Category</option>
                <option value="Bag">Bag</option>
                <option value="Phone">Phone</option>
                <option value="Shoe">Shoe</option>
                <option value="Watch">Watch</option>
              </select>
            </li>
            <li className="md:hidden mt-9">
              <select onChange={(e) => {
                setSortBy(e.target.value);
              }} name="sort" id="" value={sortBy} className="hover:text-blue-600 cursor-pointer">
                <option value="All">Sort</option>
                <option value="price-low-high">Price--Low to High</option>
                <option value="price-high-low">Price--High to Low</option>
                <option value="rating-low-high">Rating--Low to High</option>
                <option value="rating-high-low">Rating--High to Low</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
      <div className={`container mx-auto p-4   ${open ? 'sm:mt-50 md:mt-0' : 'sm:mt-0'}`}>


        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {
            filteredProducts.map((product) => {
              return <div>
                <Products product={product} key={product.id} />
              </div>

            })

          }
        </div>
      </div>



    </>
  )
}

export default App
