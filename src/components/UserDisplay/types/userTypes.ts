interface UserName {
  first: string;
  last: string;
  title: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface DOB {
  age: number;
  date: string;
}

interface User {
  name: UserName;
  email: string;
  picture: Picture;
  dob: DOB;
  // other properties if needed
}

export default User;
