import { CustomPopOver, ListItem, GroupItem, HelperText } from "./style";
import { redCross, greenCheck } from "../../assets/Icons";
import { ValidityConditions } from "./helper";
import { ValidityType } from "./type";

interface ValidityProps {
  input?: string;
  isOpen?: boolean;
}

const PasswordValidate = ({ input, isOpen = false }: ValidityProps) => {
  return isOpen ? (
    <CustomPopOver>
      {ValidityConditions.map((cond: ValidityType) => {
        return (
          <ListItem>
            <GroupItem>
              <img
                src={input?.match(cond.regex) ? greenCheck : redCross}
                alt=""
                className="validateLogo"
              />
              <div>{cond.label}</div>
            </GroupItem>
            <HelperText>{cond.example}</HelperText>
          </ListItem>
        );
      })}
    </CustomPopOver>
  ) : (
    <></>
  );
};

export default PasswordValidate;
