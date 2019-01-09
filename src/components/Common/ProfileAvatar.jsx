import React from "react";
class ProfileAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = "";
  }
  // handleClick = () => {
  //   let data = {
  //     pro_id: this.props.c_id,
  //     mem_id: this.props.currentUser.uid,
  //     pro_quantity: 1
  //   };
  //   this.props.addToCart(data);
  // };
  render() {
    return (
      <img
        className={this.props.className}
        src={this.props.imgSrc}
        alt="default"
      />
    );
  }
}

export default ProfileAvatar;
