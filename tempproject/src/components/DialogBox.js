import Dialog from "./dialog";
import { Box } from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";


const DialogBox = () => {
    return (
      <Box>
        <Box className="DialogBox">
          <Box className="dialogHeader">
            <span>Filter Data by</span>
            <span className="reset">
              <FontAwesomeIcon icon={faArrowsRotate} color="#03539" />
              Reset
            </span>
          </Box>
          <Dialog />
        </Box>
      </Box>
    );
};

export default DialogBox;