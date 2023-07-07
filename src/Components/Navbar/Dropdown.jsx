import { useNavigate } from "react-router-dom";
import "./Dropdown.css";
import { useDispatch, useSelector } from "react-redux";
import { accountActions } from "../../Store/AccountSlice";

const Dropdown = () => {
  const accountId = sessionStorage.getItem("userId");

  const currentAccount = useSelector((state) =>
    state.account.accounts.find((account) => account.userId === accountId)
  );

  const AccountType = currentAccount.accountType;

  let options = [
    {
      id: 1,
      value: "Close Account",
    },
  ];

  if (
    AccountType == "accountant" ||
    AccountType == "manager" ||
    AccountType == "admin"
  ) {
    options.push({
      id: 2,
      value: "Edit User Library",
    });
  }
  if (AccountType == "manager" || AccountType == "admin") {
    options.push({
      id: 3,
      value: "Edit Books",
    });
  }
  if (AccountType == "admin") {
    options.push({
      id: 4,
      value: "Edit Accounts",
    });
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dropdownClickHandler = (id) => {
    if (id === 1) {
      dispatch(accountActions.deleteAccount(sessionStorage.getItem("userId")));
      sessionStorage.removeItem("userId");
      navigate("/");
    } else if (id === 2) {
      navigate("edit-user-library");
    } else if (id === 3) {
      navigate("edit-books");
    } else {
      navigate("edit-accounts");
    }
  };

  const optionList = options.map((option) => (
    <div key={option.id} onClick={() => dropdownClickHandler(option.id)}>
      <div className="dropdown-options">{option.value}</div>
    </div>
  ));

  return (
    <>
      <div className="dropdown">{optionList}</div>
    </>
  );
};

export default Dropdown;
