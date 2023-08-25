interface UserName {
  title: string;
  first: string;
  last: string;
}

interface User {
  name: UserName;
  email: string;
  dob: {
    date: string;
  };
}

interface UserInfoProps {
  user: User;
}

export default UserInfoProps;
