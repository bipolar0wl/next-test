import Link from "next/link";
import MainContainer from "../components/MainContainer";
import { IUser } from "../types/types";

const Users = ({ users }: {users: IUser[]}) => {
  return (
    <MainContainer keywords={"users next js"}>
      <h1>Cписок пользователей</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context: any) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
