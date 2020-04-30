import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
  CardHeader,
} from "reactstrap";
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
    const response = await axios.get("https://reqres.in/api/users?page=2");
    try {
      if (response.data) {
        this.setState({ userData: response.data.data });
        return response;
      }
    } catch (err) {
      console.log("catcherror");

      return err;
    }
  };

  render() {
    console.log("userData", this.state.userData[0]);

    return (
      <Container className="themed-container" fluid="sm">

        <div className="heading3">
          Profile List
        </div>
        <div className="sub-heading">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,{" "}
        </div>

        <Card>
          {this.state.userData.map((user, index) => (
            <ListItem item={{ image: user.avatar, name: user.first_name + " " + user.last_name, contact: user.email }} />
          ))}
        </Card>
      </Container>
    );
  }
}
export default ListData;
