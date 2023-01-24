/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import Button from "../ui/Button/button";
import { FormControl, FormLabel } from "../ui/Form";
import Input from "../ui/Input/input";
import { FormResult } from "./schema/address.schema";
import { useAddress } from "./use-address";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Text from "../ui/text";
interface AddressForm {
  onSubmit: (result: FormResult) => void;
}

export default function AddressForm({ onSubmit }: AddressForm) {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormResult>({
    resolver: zodResolver(FormResult),
    mode: "all",
  });

  const values = getValues();

  const { onSearch } = useAddress({
    onComplete: (data: PostData) => {
      setValue("roadNamecode", data.roadnameCode, { shouldValidate: true });
      setValue("roadAddress", data.roadAddress, { shouldValidate: true });
    },
  });

  const resolve: SubmitHandler<FieldValues> = (fields) => {
    onSubmit(fields as FormResult);
  };

  const isDisabled =
    !values.name ||
    !!errors.name ||
    !values.phone ||
    !!errors.phone ||
    !values.roadNamecode ||
    !values.roadAddress;

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(resolve)}
    >
      <FormControl>
        <FormLabel>이름</FormLabel>
        <Input
          type="text"
          {...register("name")}
        />
        {errors.name && (
          <Text
            color="red"
            size="xs"
          >
            {errors.name.message?.toString()}
          </Text>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>전화번호</FormLabel>
        <Input
          type="number"
          {...register("phone")}
        />
        {errors.phone && (
          <Text
            color="red"
            size="xs"
          >
            {errors.phone.message?.toString()}
          </Text>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>도로번호</FormLabel>
        <Input
          type="text"
          readOnly
          {...register("roadNamecode")}
        />
      </FormControl>

      <FormControl>
        <FormLabel>주소</FormLabel>
        <div className="flex">
          <Input
            type="text"
            readOnly
            {...register("roadAddress")}
          />
          <Button
            type="button"
            sx={tw`grow-0 basis-80pxr`}
            onClick={onSearch}
          >
            검색
          </Button>
        </div>
      </FormControl>
      <FormControl>
        <FormLabel>상세주소</FormLabel>
        <Input
          type="text"
          {...register("detailAddress")}
        />
      </FormControl>

      <Button
        disabled={isDisabled}
        type="submit"
      >
        저장
      </Button>
    </form>
  );
}
