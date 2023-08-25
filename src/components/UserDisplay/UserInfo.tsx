import UserInfoProps from "./types/userInfoProps";

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <>
      <p>
        <strong>Name: </strong>
        {`${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`}
      </p>
      <p>
        <strong>Email: </strong> {user?.email}
      </p>
      <p>
        <strong>DOB: </strong> {new Date(user?.dob?.date).toLocaleDateString()}
      </p>
    </>
  );
};

export default UserInfo;
