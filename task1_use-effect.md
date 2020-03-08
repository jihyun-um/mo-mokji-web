# 뭐 먹지? - useEffect로 side-effect 이용하기 by Heath

## 이 세션의 과제

같은 디바이스에서 브라우저를 껐다 켜거나 Refresh를 해도 유저가 예전에 선택해 놓은 먹거리들이 저장되어 있어야 함.

1. `useEffect`를 사용해서 `items` 상태가 바뀌었을 때 `localStorage`에 현재 `items`를 저장하기
2. `useEffect`를 사용해서 앱 시작시에 `localStorage`에 저장되어 있는 `items`가 있을 경우 그걸로 `items` 상태 설정하기

### 주의할 부분
- `useEffect`의 dependency를 잘 설정하여 무한루프에 빠지거나 불필요한 호출을 최소화 할 것

## Sample Solution
- [View Code](https://github.com/heathryu/mo-mokji-web/commit/5c7f2755fe4bbc11eae4119ed8f860939ffbb512)
