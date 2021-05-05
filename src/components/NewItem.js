import { withRouter } from "react-router";
import { Button } from "@material-ui/core";
function NewItem(match) {
  return (
    <>
      <Button
        onClick={() => {
          match.history.goBack();
        }}
      >
        Back
      </Button>
      <h1>New Item</h1>
    </>
  );
}
export default withRouter(NewItem);
