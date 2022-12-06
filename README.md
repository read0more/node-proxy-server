# node-proxy-server

## 준비
1. npm i
2. npm install -g mkcert
3. mkcert create-ca
4. mkcert create-cert
- 4번 까지 했다면 3에서 생성된 ca.key, ca.crt는 삭제해도 무방

## 실행
``` 
node server.js 도메인
예시) node server.js https://read.test.com
```