import { Alert, Nav } from "react-bootstrap";

const WarningSign = function (props) {
  return (
    <div>
      <Alert variant="danger">{props.content}</Alert>
    </div>
  );
};
export default WarningSign;
