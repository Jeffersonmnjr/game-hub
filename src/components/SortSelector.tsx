import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  layout,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (selectOrder: string) => void;
}

const SortSelector = ({ onSelectSortOrder }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        {sortOrder.map(({ value, label }) => (
          <MenuItem
            onClick={() => onSelectSortOrder(value)}
            value={value}
            key={label}
          >
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
