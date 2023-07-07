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
        <div className="profile-heading">My Profile</div>
        <div className="profile-items">
          <div>Name:</div>
          <div>{currentAccount.name}</div>
        </div>
        <div className="profile-items">
          <div>Email ID:</div>
          <div>{currentAccount.email}</div>
        </div>
        <div className="profile-items">
          <div>Account Type:</div>
          <div>{currentAccount.accountType}</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
