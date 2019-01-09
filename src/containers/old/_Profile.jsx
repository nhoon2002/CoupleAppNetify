import React from "react";
import "../css/Profile.css";
import SectionHeader from "../components/Common/SectionHeader.jsx";
import FullButton from "../components/Common/FullButton.jsx";
import {
  faCube,
  faLock,
  faMapMarkerAlt,
  faCreditCard,
  faSmile,
  faInfoCircle,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentCat: "", show: false };
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.categories !== prevState.categories) {
  //     return { categories: nextProps.categories };
  //   }
  //   return null;
  // }
  componentDidMount() {
    window.scrollTo(0, 0);
    const currentLocation = this.props.router.params.cat;
    // TODO: make request to api for populating content.
    this.setState({ currentCat: currentLocation, show: true });
  }
  componentWillUnmount() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div className="Profile-container">
        <SectionHeader title={"My Profile"} />
        <div className="Profile-links-container">
          <FullButton
            color="black"
            icon={faCube}
            classList="btn btn-full btn-profile-link"
            btnText="My Orders"
          />
          <FullButton
            color="black"
            icon={faLock}
            classList="btn btn-full btn-profile-link"
            btnText="Login & Security"
          />
          <FullButton
            color="black"
            icon={faMapMarkerAlt}
            classList="btn btn-full btn-profile-link"
            btnText="Addresses"
          />
          <FullButton
            color="black"
            icon={faCreditCard}
            classList="btn btn-full btn-profile-link"
            btnText="Payment"
          />
          <FullButton
            color="black"
            icon={faSmile}
            classList="btn btn-full btn-profile-link"
            btnText="Membership"
          />
          <FullButton
            color="black"
            icon={faInfoCircle}
            classList="btn btn-full btn-profile-link"
            btnText="Help"
          />
          <FullButton
            color="black"
            icon={faSignOutAlt}
            classList="btn btn-full btn-profile-link"
            btnText="Logout"
            action={this.props.signOut}
          />
        </div>
      </div>
    );
  }
}
export default Profile;
