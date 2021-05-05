import { Link } from "react-router-dom";
import { withRouter } from "react-router";
function ListItem({ match }) {
  return (
    <>
      <Link to={match.path + "/new"}>New Item</Link>
      <h1>List Item</h1>
    </>
  );
}

export default withRouter(ListItem);
