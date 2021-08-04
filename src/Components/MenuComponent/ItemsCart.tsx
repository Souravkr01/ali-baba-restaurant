import Item, { CartItemType } from "./Item";
interface ItemCartProps {
  itemsCart: CartItemType[];
  setInViewItem: (item: CartItemType | null) => void;
  setCartItems: (item: CartItemType[] | null) => void;
  cartItem: null | CartItemType[];
}
function ItemsCart(props: ItemCartProps) {
  const { itemsCart, setInViewItem, setCartItems, cartItem } = props;
  return (
    <>
      {itemsCart.map((item) => (
        <Item
          item={item}
          setInViewItem={setInViewItem}
          setCartItems={setCartItems}
          cartItem={cartItem}
        />
      ))}
    </>
  );
}
export default ItemsCart;
