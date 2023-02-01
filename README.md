# 개요
- commerce 사이트의 주요기능을 구현하며 아래의 도전과제를 고려한다

# install

```
yarn install
yarn dlx @yarnpkg/sdks vscode
```

# 도전과제
1. ui framwork 없이 tailwind 사용하여 재사용가능한 ui 컴포넌트를 만들기 
2. [folder structure](https://profy.dev/article/react-folder-structure) 참고해서 폴더구조 사용해보기
3. zod - react hook form 으로 사용하는 사용자 validation
4. script로 삽입하는 cdn service를 typescript로 정의하기
5. firebase admin sdk, node crawler를 활용한 no-sql base db 구조
6. frontend layered architecture  
7. 최신화된 tanstack query 사용


# 주요기능 정리

## products
- 상품필터링을 URLSearch param을 통해 history api를 사용할 수 있게 한다.
<img width="320" alt="product" src="https://user-images.githubusercontent.com/77092632/216049510-aa86ad14-bf96-4c81-a51a-292f8ba70731.png" />
<img width="320" alt="product1" src="https://user-images.githubusercontent.com/77092632/216049519-b6cfe80a-8ccd-4f60-9cab-7ff57e5494b5.png" />

> category=keyword 

## carts 
- 상품을 카트에 추가/삭제 할 수 있다
<img src="https://user-images.githubusercontent.com/77092632/216049314-80b1456c-71fd-40d8-a09c-2b57fda32329.png" width="320" alt="carts" />

## My
- 개인정보 수정 및 배송정보를 추가 / 삭제할 수 있다.
<img width="320" alt="my" src="https://user-images.githubusercontent.com/77092632/216049965-3bcdf2a2-0aa1-4c8f-8f49-a1522f3eed8e.png">

## Address
- 주소를 추가 / 삭제 할 수 있다
<img width="320" alt="address1" src="https://user-images.githubusercontent.com/77092632/216048938-827e5877-d02f-4419-b0ae-587d22890588.png"> 
<img width="320" alt="address" src="https://user-images.githubusercontent.com/77092632/216048930-82ff12be-8951-4d64-8144-4a53b505bc27.png">
