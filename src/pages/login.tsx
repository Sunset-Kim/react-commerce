import { useAuth } from "@/features/auth/auth.context";
import Button from "@/features/ui/Button/button";
import { FormControl, FormLabel } from "@/features/ui/Form";
import { Input } from "@/features/ui/Input";
import Text from "@/features/ui/text";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import tw from "twin.macro";

export default function Login() {
  const { state } = useLocation();
  const { user, signInWithGoogle, logout } = useAuth();
  const path = state?.path ?? "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  if (user) {
    return (
      <Navigate
        to={path}
        replace
      />
    );
  }

  const onSubmit = () => {
    if (errors) return;
  };

  return (
    <div>
      <form
        className="mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl className="mb-1">
          <FormLabel>아이디</FormLabel>
          <Input
            type="text"
            {...register("email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: "정확한 이메일을 입력해주세요",
              },
            })}
          />
          <Text
            size="xs"
            sx={tw`text-red-400 h-16pxr mt-0.5`}
          >
            {errors.email?.message}
          </Text>
        </FormControl>
        <FormControl className="mb-2">
          <FormLabel>비밀번호</FormLabel>
          <Input
            type="password"
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              minLength: {
                value: 8,
                message: "비밀번호는 최소 8자 이상입니다",
              },
            })}
          />
          <Text
            size="xs"
            sx={tw`text-red-400 h-16pxr mt-0.5`}
          >
            {errors.password?.message}
          </Text>
        </FormControl>

        <Button
          sx={tw`bg-stone-900 text-white hover:brightness-125 disabled:bg-stone-200 border-0`}
          disabled={!!errors.email || !!errors.password}
          onClick={() => {}}
        >
          로그인
        </Button>
      </form>

      <Button
        color="sky"
        onClick={signInWithGoogle}
      >
        <IconBrandGoogle
          className="mr-1"
          size="20"
          stroke={3}
        />
        구글 로그인
      </Button>
    </div>
  );
}
