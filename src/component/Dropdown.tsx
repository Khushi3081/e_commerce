import { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

function DropdownData({ ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"down"}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu {...args}>
          {args &&
            args.data &&
            args.data.length > 0 &&
            args.data.map((item:{key:string,value:number}, index:number) => <DropdownItem key={index} onChange={args.handleCategoryData}>{item.key}</DropdownItem>)}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

DropdownData.propTypes = {
  direction: PropTypes.string,
};

export default DropdownData;
