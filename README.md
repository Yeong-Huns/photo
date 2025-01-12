## 

###  📌 개발 환경

```json
{
    "dependencies": {
    "@types/node": "^22.10.5",
    "axios": "^1.7.9",
    "localforage": "^1.10.0",
    "match-sorter": "^8.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.1.1",
    "react-simple-toasts": "^6.0.1",
    "recoil": "^0.7.7",
    "sort-by": "^1.2.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.17.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.18.2",
    "vite": "^6.0.5"
  }
}
```

> 상태관리 : Recoil <br>
> 외부 오픈 API 통신 : Axios <br> 
> CSS 스타일링 : pnpm i -D tailwindcss postcss autoprefixer <br>
> vite : `pnpm create vite@latest` <br>
> React Router 설치 : 'pnpm i react-router-dom localforage match-sorter sort-by'  <br>
> TypeScript Node.js 모듈 사용 : 'pnpm i @types/node' <br>
> React Toast Popup 모듈 설치 : 'pnpm i react-simple-toasts'


### 📌`tsconfig.app.json` 

```json
{
     "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@assets/*": ["src/assets/*"],
      "@components/*": ["src/components/*"],
      "@pages": ["src/pages/*"],
      "@types": ["src/types/*"],
      "@recoil": ["src/recoil/*"],
      "@apis": ["src/apis/*"],
    },
    "noImplicitAny": false,
    "strictNullChecks": false
  },
  "include": ["src"]
}
```

### 📌 `vite.config.ts`

```json
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "node:url";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 경로 지정 alias 설정
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@recoil': fileURLToPath(new URL('./src/recoil', import.meta.url)),
      '@apis': fileURLToPath(new URL('./src/apis', import.meta.url)),
    }
  }
})

```