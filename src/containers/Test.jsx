import React, { Component } from "react";
import { Link } from "react-router";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.categories !== prevState.categories) {
      return { categories: nextProps.categories}
    }
  }
  componentDidMount() {
    this.props.getCategories();
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("-----------");
    console.log("should update?");
    console.log("-----------");
    return 1;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("-----------");
    console.log("updated");
    console.log("-----------");
  }
  componentWillUnmount() {
    console.log("-----------");
    console.log("unmounted");
    console.log("-----------");
  }

  render() {
    let items = this.state.categories;
    const Person = props => <h3>{props.name}</h3>;
    return (
      <div>
        <Link to="/">Yo</Link>

          {items.map(dt => <Person key={dt.id} name={dt.name} />)}
      </div>
    );
  }
}
export default Test;
