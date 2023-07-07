import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import "./EditAccountsForm.css";
import { useState } from "react";
import { accountActions } from "../../Store/AccountSlice";

const EditAccountsForm = ({ accountId, onFormSubmit }) => {
  const currentAccount = useSelector((state) =>
    state.account.accounts.find((account) => account.userId === accountId)
  );
  //   const accounts = useSelector((state) => state.login.accounts);
  const dispatch = useDispatch();

  //   const currentAccount = accounts.find(
  //     (account) => account.userId === accountId
  //   );

  //   console.log(currentAccount);

  const options = [
    { value: "user", label: "User" },
    { value: "accountant", label: "Accountant" },
    { value: "manager", label: "Manager" },
    { value: "admin", label: "Admin" },
  ];

  const [selectOption, setSelectOption] = useState();

  const selectChangeHandler = (selectedOption) => {
    setSelectOption(selectedOption);
  };

  const submitHandler = () => {
    // console.log(selectOption.value);
    const tempAccount = { ...currentAccount };
    tempAccount.accountType = selectOption.value;
    dispatch(accountActions.updateAccount(tempAccount));
    onFormSubmit();
  };

  return (
    <>
      <div className="edit-accounts-form-container">
        <div className="edit-accounts-form-curr">
          Current Account Type: {currentAccount.accountType}
        </div>
        <div className="edit-accounts-form-seletor">
          Change Account
          <Select
            options={options}
            styles={{ padding: "10px" }}
            onChange={selectChangeHandler}
          ></Select>
        </div>
        <div className="edit-accounts-form-submit">
          <div onClick={submitHandler}>Submit</div>
        </div>
      </div>
    </>
  );
};

export default EditAccountsForm;
