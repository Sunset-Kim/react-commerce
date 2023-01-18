import { useAuth } from "@/features/auth/auth.context";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const { state } = useLocation();
  const { user, signInWithGoogle, logout } = useAuth();
  const path = state?.path ?? "/";

  if (user) {
    return (
      <Navigate
        to={path}
        replace
      />
    );
  }

  return (
    <div>
      <input type="text" />
      <input type="text" />
      <button onClick={signInWithGoogle}>누르면 로그인</button>
      <button onClick={logout}>누르면 로그아웃</button>
    </div>
  );
}
