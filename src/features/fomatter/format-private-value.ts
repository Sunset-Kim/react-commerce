type FormatType = "name" | "phone";

export function formatPrivateValue(
  type: FormatType,
  value: string
): string | null {
  if (type === "name") {
    const [first, ...rest] = value;
    return first + rest.map((v) => "*").join("");
  }

  if (type === "phone") {
    const phoneReg = new RegExp(/(\d{3})(\d{3,4})(\d{4})/);
    const result = value.match(phoneReg);

    if (result === null) {
      return null;
    }

    const second = Array.from(result?.[2])
      .map((v, i) => {
        return i === 0 ? v : "*";
      })
      .join("");

    const third = Array.from(result?.[3])
      .map((v, i) => {
        return i === 0 ? "*" : v;
      })
      .join("");

    return `${result?.[1]}-${second}-${third}`;
  }

  throw Error("match type이 없습니다");
}
