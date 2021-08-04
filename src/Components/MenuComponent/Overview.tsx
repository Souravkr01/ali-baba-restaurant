import { CartItemType } from "./Item";

interface OverviewProps {
  cartItem: null | CartItemType[];
}
function Overview(props: OverviewProps) {
  const { cartItem } = props;
  if (!cartItem) {
    return <div>No Items in cart</div>;
  }
  return (
    <>
      {cartItem.map((item) => (
        <h2>{item.name}</h2>
      ))}
    </>
  );
}
export default Overview;
