import { formatPrivateValue } from "../format-private-value";

describe("format private value", () => {
  describe("입력타입이 name 이면", () => {
    it("첫번째 글자만 그대로 표시하고 나머지 글자는 '*'로 리턴한다", () => {
      const name = formatPrivateValue("name", "테스트용이름입니다");

      expect(name).toBe("테********");
    });
  });
  describe("입력타입이 phone 일때", () => {
    it("알맞은 인풋이 들어오면, xxx-x**(*)-*xxx 로 리턴한다", () => {
      const phoneNumber = formatPrivateValue("phone", "01012341234");

      expect(phoneNumber).toBe("010-1***-*234");

      const homeNumber = formatPrivateValue("phone", "0101231234");
      expect(homeNumber).toBe("010-1**-*234");
    });

    it("잘못된 인풋이 들어오면, null을 리턴한다", () => {
      const wrongNumber = formatPrivateValue("phone", "010123412");

      expect(wrongNumber).toBeNull();
    });
  });
});
