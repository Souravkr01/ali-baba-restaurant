export interface CartItemType {
  image: string;
  name: string;
  category: string;
  description: string;
  price: string;
  rating: string | number;
}
interface ItemProps {
  item: CartItemType;
  setInViewItem: (item: CartItemType | null) => void;
  setCartItems: (item: CartItemType[] | null) => void;
  cartItem: null | CartItemType[];
}
export function Item(props: ItemProps) {
  const { item, setInViewItem, setCartItems, cartItem } = props;
  const { image, name } = item;
  const addToCart = (itemsCart: CartItemType) => {
    setCartItems([...(cartItem || []), item]);
  };
  const onItemClick = () => {
    setInViewItem(item);
  };
  return (
    <div className="item" onClick={onItemClick}>
      <img src={image} alt={item.name} className="item-image"></img>
      <div className="item-name" aria-details="name">{name}</div>
      <div className="detail-button-container">
        <button className="detail-button" aria-label="Item-details">Details</button>
        <button onClick={() => addToCart(item)} className="order-button" aria-label="Order-now">
          Order Now
        </button>
      </div>
    </div>
  );
}
export default Item;
