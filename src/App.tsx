import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { CartItemType } from "./Components/MenuComponent/Item";
import Routes from "./Components/MenuComponent/Routes";
export const itemsCart: CartItemType[] = [
  {
    image:
      "https://previews.123rf.com/images/tiverylucky/tiverylucky1201/tiverylucky120100034/12018582-american-fried-rice-egg-and-chicken.jpg",
    name: "American Fried Rice ",
    category: "Non Veg",
    description: "Exotic american taste",
    price: "$18",
    rating: 5,
  },
  {
    image:
      "https://recipesaresimple.com/wp-content/uploads/2013/08/Singapore-Chilli-Crab-Sauce.jpg",
    name: "Chilli Crab",
    category: "Non Veg",
    description: "Covered with chilly flakes",
    price: "$23",
    rating: 5,
  },
  {
    image:
      "https://www.bakingbusiness.com/ext/resources/2020/3/02_DonutTrends_Europastry6.jpg?t=1583251523&width=1080",
    name: "Donuts",
    category: "Sweet",
    description: "Glazed with a sugar icing, spread with chocolate on top",
    price: "$3",
    rating: 5,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMk8Qpi_MK15x4tgK6AvNuq4RC9OknZcshOw&usqp=CAU",
    name: "Piri-Piri Chicken",
    category: "Non Veg",
    description: "Hot n Sweety spicy",
    price: "$20",
    rating: 4,
  },
  {
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe-500x375.jpg",
    name: "Biryani",
    category: "Non Veg",
    description: "Exotic  indian spicy flavour",
    price: "$25",
    rating: 5,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg",
    name: "Hamburger",
    category: "Vegan",
    description: "Cheesy-Mexican",
    price: "$14",
    rating: 4,
  },
  {
    image:
      "https://st.depositphotos.com/1900347/4146/i/950/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg",
    name: "Neapolitan Pizza",
    category: "Vegan",
    description: "Mouthful taste",
    price: "$20",
    rating: 5,
  },
  {
    image:
      "https://www.contentednesscooking.com/wp-content/uploads/2018/10/Massaman-Curry-with-Roasted-Potatoes-9.jpg",
    name: "Massaman Curry",
    category: "Vegan",
    description: "Indian Curry",
    price: "$10",
    rating: 4,
  },
  {
    image:
      "https://www.9010nutrition.com/wp-content/uploads/2018/10/chicken-curry-tacos-2.jpg",
    name: "Tacos",
    category: "Vegan",
    description: "Indian Tacos",
    price: "$10",
    rating: 4,
  },
  {
    image:
      "https://sugargeekshow.com/wp-content/uploads/2020/03/rainbow-cake-featured-scaled.jpg",
    name: "Rainbow Cake",
    category: "Sweet",
    description: "All flavour",
    price: "$12",
    rating: 4,
  },
];
function App() {
  const [searchStr, setSearchStr] = useState("");
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setSearchStr(inputValue);
  };
  const [cartItem, setCartItems] = useState<CartItemType[] | null>(null);
  const [inViewItem, setInViewItem] = useState<CartItemType | null>(null);
  const filteredItems = itemsCart.filter((item) =>
    item.name.toLowerCase().includes(searchStr)
  );
  return (
    <>
      <Router>
        <Routes
          searchStr={searchStr}
          onInputChange={onInputChange}
          filteredItems={filteredItems}
          setInViewItem={setInViewItem}
          setCartItems={setCartItems}
          cartItem={cartItem}
        />
        {inViewItem ? <div> {inViewItem.name} </div> : null}
      </Router>
    </>
  );
}
export default App;