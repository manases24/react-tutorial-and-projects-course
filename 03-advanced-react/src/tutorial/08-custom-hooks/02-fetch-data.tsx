import { useFetch } from "./useFetch";

const url = "https://api.github.com/users/goncy";

export const FetchData = () => {
  const { user, error, loading } = useFetch(url);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>There was an error...</h2>;
  }

  if (!user) {
    return <h2>No user data available</h2>;
  }

  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>works at {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  );
};
