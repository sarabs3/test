import React from "react";
import axios from "axios";
import {ListItem} from "../components/ListItem";

class ListData extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
    };
  }
  componentDidMount = async () => {
    this.setState({ loading: true });
    const response = await axios.get("https://reqres.in/api/users?per_page=15");
    try {
      if (response.data) {
        const userData = response.data.data.sort((a, b) => {
          if (a.first_name < b.first_name) return -1;
          return 1;
        });
        this.setState({ userData });
        return;
      }
      this.setState({ error: 'Something went wrong!' });
    } catch (err) {
      this.setState({ error: 'Something went wrong!' });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {

    return (
      <div>
        <div className="heading3">
          Profile List
        </div>
        <div className="sub-heading">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,{" "}
        </div>
          {this.state.userData.map((user, index) => (
            <ListItem item={{ image: user.avatar, name: user.first_name + " " + user.last_name, contact: user.email }} />
          ))}
      </div>
    );
  }
}
export default ListData;
