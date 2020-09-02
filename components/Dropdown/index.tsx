import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            color="primary"
            {...bindTrigger(popupState)}
          >
            Quais tecnologias você mais gosta?
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>React</MenuItem>
            <MenuItem onClick={popupState.close}>Java</MenuItem>
            <MenuItem onClick={popupState.close}>Ruby</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
