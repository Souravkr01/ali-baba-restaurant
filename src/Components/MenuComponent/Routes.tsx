import { Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import Error from "./Error";
import Home from "./Home";
import { CartItemType } from "./Item";
import Overview from "./Overview";

interface RouteProps {
  searchStr: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredItems: CartItemType[];
  setInViewItem: (item: CartItemType | null) => void;
  setCartItems: (item: CartItemType[] | null) => void;
  cartItem: null | CartItemType[];
}
const Routes = (props: RouteProps) => {
  const {
    searchStr,
    onInputChange,
    filteredItems,
    setInViewItem,
    setCartItems,
    cartItem,
  } = props;
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home
              searchStr={searchStr}
              onInputChange={onInputChange}
              filteredItems={filteredItems}
              setInViewItem={setInViewItem}
              setCartItems={setCartItems}
              cartItem={cartItem}
            />
          )}
        />
        <Route path="/contact" component={Contact} />
        <Route
          path="/overview"
          component={() => <Overview cartItem={cartItem} />}
        />
        {/* <Route path='/cart' component={Cart} /> */}
        <Route component={Error} />
      </Switch>
    </>
  );
};
export default Routes;
