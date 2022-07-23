import {React, useState} from "react";
import {
  DefaultUi,
  Settings,
  MenuItem,
  Submenu,
  MenuRadio,
  MenuRadioGroup,
} from "@vime/react";

const VideoPlayerControls = () => {
  const [value, setValue] = useState("1");

  const onMenuItem1Click = () => {
    console.log("Clicked menu item 1");
  };

  const onMenuItem2Click = () => {
    console.log("Clicked menu item 2");
  };

  const onCheck = event => {
    const radio = event.target;
    setValue(radio.value);
  };

  return (
    <DefaultUi noSettings>
      <Settings>
        <MenuItem
          label="Menu Item 1"
          badge="BADGE"
          onClick={onMenuItem1Click}
        />

        <MenuItem label="Menu Item 2" hint="Hint" onClick={onMenuItem2Click} />

        <Submenu label="Submenu 1" hint={value}>
          <MenuRadioGroup value={value} onVmCheck={onCheck}>
            <MenuRadio label="Option 1" value="1" />
            <MenuRadio label="Option 2" value="2" />
            <MenuRadio label="Option 3" value="3" />
          </MenuRadioGroup>
        </Submenu>

        <Submenu label="Submenu 2">Random content in here.</Submenu>
      </Settings>
    </DefaultUi>
  );
};

export default VideoPlayerControls;
