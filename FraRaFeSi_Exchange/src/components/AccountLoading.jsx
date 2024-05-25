import { useAccount } from "./useAccount";

export default function AccountLoading({ username, password }) {
  const { username, email, isLoading, error } = useAccount({
    username,
    password,
  });

  if (isLoading) {
    return <div>Caricamento...</div>;
  }
  if (error) {
    return null;
  }
  return (
    <div className="flex flex-col gap-2">
      <h3>{username}</h3>
      <h3>{email}</h3>
    </div>
  );
}
