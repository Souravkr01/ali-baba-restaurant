import React from "react";
import ItemsCart from "./ItemsCart";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import TelegramIcon from "@material-ui/icons/Telegram";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import { CartItemType } from "./Item";
import Menu from "./Menu";
interface HomeProps {
  searchStr: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredItems: CartItemType[];
  setInViewItem: (item: CartItemType | null) => void;
  setCartItems: (item: CartItemType[] | null) => void;
  cartItem: CartItemType[] | null;
}
function Home(props: HomeProps) {
  const {
    searchStr,
    onInputChange,
    filteredItems,
    setInViewItem,
    setCartItems,
    cartItem,
  } = props;
  return (
    <div className="container">
      <div className="header">
        <div className="header-name">
          <h1>Ali Baba Restaurant</h1>
          <LocalDiningIcon
            className="header-name-icon"
            style={{ fontSize: 40 }}
          />
        </div>
        <div className="header-detail">
          <div className="header-detail-icon">
            <NotificationsIcon />
          </div>
          <div className="header-detail-icon">
            <PersonAddIcon />
          </div>
          <div className="header-detail-icon">
            <TelegramIcon />
          </div>
          <div>
            <input
              type="text"
              value={searchStr}
              onChange={onInputChange}
              aria-label="Item-search"
            ></input>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="menu-list">
          <Menu />
        </div>
        <div className="itemsCart">
          <ItemsCart
            itemsCart={filteredItems}
            setInViewItem={setInViewItem}
            setCartItems={setCartItems}
            cartItem={cartItem}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
