import "./Profile.css";

import { useSelector } from "react-redux";

const Profile = () => {
  const currentAccount = useSelector((state) =>
    state.account.accounts.find(
      (account) => account.userId === sessionStorage.getItem("userId")
    )
  );

  return (
    <>
      <div className="profile-container">
        <div>
          <div>Name:</div>
          <div>{currentAccount.name}</div>
        </div>
        <div>
          <div>Email ID:</div>
          <div>{currentAccount.email}</div>
        </div>
        <div>
          <div>Account Type:</div>
          <div>{currentAccount.accountType}</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
