import { useAuth } from "@/features/auth/auth.context";

export default function Login() {
  const { user, signInWithGoogle, logout } = useAuth();

  console.log(user);
  return (
    <div>
      <input type="text" />
      <input type="text" />
      <button onClick={signInWithGoogle}>누르면 로그인</button>
      <button onClick={logout}>누르면 로그아웃</button>
    </div>
  );
}
