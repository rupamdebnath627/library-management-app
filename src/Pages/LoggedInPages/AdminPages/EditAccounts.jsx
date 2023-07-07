import "./EditAccounts.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { accountActions } from "../../../Store/AccountSlice";
import ModalContainer from "../../../Components/Models/ModalContainer";
import EditAccountsForm from "../../../Components/Edit-Accounts/EditAccountsForm";

// const DUMMY_ACCOUNTS = [
//   {
//     userId: "A001",
//     name: "Abc",
//     email: "abc@123.com",
//     accountType: "accountant",
//   },
//   {
//     userId: "A002",
//     name: "Efg",
//     email: "efg@123.com",
//     accountType: "user",
//   },
//   {
//     userId: "A003",
//     name: "Hij",
//     email: "hij@123.com",
//     accountType: "accountant",
//   },
//   {
//     userId: "A004",
//     name: "Lmn",
//     email: "lmn@123.com",
//     accountType: "admin",
//   },
//   {
//     userId: "A005",
//     name: "Xyz",
//     email: "xyz@123.com",
//     accountType: "user",
//   },
//   {
//     userId: "A006",
//     name: "Tuv",
//     email: "tuv@123.com",
//     accountType: "manager",
//   },
// ];

const EditAccounts = () => {
  // const [accountList, setAccountList] = useState(DUMMY_ACCOUNTS);
  const [showModal, setShowModal] = useState(false);
  const [modalUserId, setModalUserId] = useState(1);
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.account.accounts);

  // console.log(accounts);

  const deleteAccountHandler = (userId) => {
    // setAccountList((prevList) =>
    //   prevList.filter((account) => account.userId !== userId)
    // );
    dispatch(accountActions.deleteAccount(userId));
  };

  const editAccountHandler = (userId) => {
    setModalUserId(userId);
    setShowModal(true);
  };

  const modalClose = () => {
    setShowModal(false);
  };

  const list_items = accounts.map((account) => (
    <div className="account-item" key={account.userId}>
      <div className="edit-account-blocks" key={account.userId}>
        <div>{account.name}</div>
        <div>Email Id: {account.email}</div>
        <div>Type: {account.accountType}</div>
      </div>
      <div className="edit-accounts-buttons">
        <div
          className="edit-accounts-buttons--edit"
          onClick={() => editAccountHandler(account.userId)}
        >
          Edit
        </div>
        <div
          onClick={() => deleteAccountHandler(account.userId)}
          className="edit-accounts-buttons--delete"
        >
          Delete
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="edit-accounts-container">
        <div className="edit-accounts-heading">Edit Accounts</div>
        <div className="account-list-container">{list_items}</div>
        <ModalContainer
          content={
            <EditAccountsForm
              accountId={modalUserId}
              accounts={accounts}
              onFormSubmit={modalClose}
            />
          }
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </>
  );
};

export default EditAccounts;
