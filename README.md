<p align="center"> 
        <h1 align="center">Expo-ocr</h1>
        <img src="https://img.shields.io/badge/Runs%20with%20Expo%20Go-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000"/>
</p>

An app using <a href="https://supabase.io/">`supabase`</a> and <a href="https://expo.io/">`expo`</a> along with my own gql based ocr api to summarize textbooks.

## usage

For now this app is in development. The code is fairly unsafe especially with how the env vars are configured.

1. Clone the repo
2. Install the Dependencies

```shell
yarn or npm install
```

3. Add a .env file

```
# add real credentials here
REACT_NATIVE_SUPABASE_URL=https://randomrand.supabase.co
REACT_NATIVE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRoaXMgaXMgYSBmYWtlIHN1cGFiYXNlIGtleSIsImlhdCI6MTUxNjIzOTAyMn0.L7c1tK7CEeOk7n24nCaScx4wVr508U-Shmfc3Sr5EuA
```

4. Run

```
yarn start or npm run start
```
