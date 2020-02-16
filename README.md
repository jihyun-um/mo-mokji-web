# 뭐 먹지? - axios로 REST API 호출하기

## Objective
axios를 사용하여 React에서 간단하게 REST API를 호출하는 방법 배워보기.
- [axios](https://github.com/axios/axios)
- [axios vs. fetch](https://blog.logrocket.com/axios-or-fetch-api/)

## Recap
`string list`로 되어 있는 `items`를 `key-value object list`로 변경해 사용할 수 있도록 `OptionList`와 `Option` 컴포넌트 변경 ([sample output](https://my-json-server.typicode.com/jihyun-um/mo-mokji-server/menus))

## To-do
1. [json-server](https://github.com/typicode/json-server)를 이용한 Menu API 만들기.
	- `port 3001` 사용.
	- `db.json` 초기 데이타 세팅을 위해 [sample data](https://my-json-server.typicode.com/jihyun-um/mo-mokji-server/db) 사용.
	- `items` 초기 세팅 시 내 `json-server`의 `GET /menus` API를 사용하도록 수정.
2. `삭제` 버튼 클릭 시 `json-server`의 `DELETE /menus/{id}` API를 호출하여 실제 `db.json`에서 메뉴 데이타를 삭제하도록 수정.
	- Hint: `id`는 어디서 올까요?
3. `추가` 버튼 클릭 시 `json-server`의 `POST /menus` API를 호출하여  실제 `db.json`에 메뉴 데이타를 추가하도록 수정.
	- Hint: 신규 메뉴의 `id`는 어떻게 지정할까요?

## Optional Task
`나 이제 배불러` 버튼 클릭 시 `json-server`의 `db.json`에서 모든 메뉴 데이타 삭제하도록 수정.
