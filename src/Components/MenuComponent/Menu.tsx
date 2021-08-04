import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import FavoriteIcon from "@material-ui/icons/Favorite";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import EventIcon from "@material-ui/icons/Event";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import MapIcon from "@material-ui/icons/Map";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="menu">
      <div className="menu-icon">
        <ViewCarouselIcon className="menu-ic" />
        <Link to="/overview" role="Overview">Overview</Link>
      </div>
      <div className="menu-icon">
        <AddShoppingCartIcon className="menu-ic" />
        Order List
      </div>
      <div className="menu-icon">
        <ViewComfyIcon className="menu-ic" />
        Menu
      </div>
      <div className="menu-icon">
        <FavoriteIcon className="menu-ic" />
        Favourite List
      </div>
      <div className="menu-icon">
        <QuestionAnswerIcon className="menu-ic" />
        Message
      </div>
      <div className="menu-icon">
        <EventIcon className="menu-ic" />
        Calendar
      </div>
      <div className="menu-icon">
        <SupervisedUserCircleIcon className="menu-ic" />
        Customer
      </div>
      <div className="menu-icon">
        <TrendingUpIcon className="menu-ic" />
        Charts
      </div>
      <div className="menu-icon">
        <MapIcon className="menu-ic" />
        Map
      </div>
      <div className="menu-icon">
        <SettingsIcon className="menu-ic" />
        settings
      </div>
      <div className="menu-icon">
        <ExitToAppIcon className="menu-ic" />
        Sign Out
      </div>
    </div>
  );
}
export default Menu;
