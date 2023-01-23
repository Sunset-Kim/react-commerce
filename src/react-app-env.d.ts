/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
    REACT_APP_FIREBASE_APIKEY: string;
    REACT_APP_FIREBASE_AUTHDOMAIN: string;
    REACT_APP_FIREBASE_PROJECTID: string;
    REACT_APP_FIREBASE_STORAGEBUCKET: string;
    REACT_APP_FIREBASE_MESSAGINGSENDERID: string;
    REACT_APP_FIREBASE_APPID: string;
  }
}

type AddressType = "R" | "J";
interface PostData {
  address: string;
  addressType: AddressType;
  userSelectedType: AddressType;
  roadAddress: string;
  roadnameCode: number;
}

interface Window {
  daum: {
    Postcode: new ({
      oncomplete,
    }: {
      oncomplete: (data: PostData) => void;
    }) => {
      open: () => void;
    };
  };
}
