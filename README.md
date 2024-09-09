# Guia de Instalação e Configuração

## 1. Instalação de Pacotes

1. Crie um novo projeto com Vite:
    ```bash
    npm create vite@latest
    ```

2. Selecione o framework:
    - **Framework**: React
    - **Variant**: TypeScript

3. Instale as dependências do projeto:
    ```bash
    npm install
    ```

## 2. Instalação do React Router

Instale o React Router DOM:
```bash
npm install react-router-dom
```

## 3. Instalação do TailwindCSS

### 3.1 Instale o TailwindCSS e suas dependências:
```bash
npm install -D tailwindcss postcss autoprefixer
```

### 3.2 Gere o arquivo de configuração do TailwindCSS::
```bash
npx tailwindcss init -p
```

### 3.3  Configure o arquivo tailwind.config.js:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3.4 Adicione as diretivas do TailwindCSS ao seu arquivo index.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 4. Instalação do Axios
### Instale o Axios para requisições HTTP:
npm install axios

## 5. Rodar o Projeto
```bash
npm install
npm run dev
```

## 6. Extensões Recomendadas
* vscode-icons
* Prettier
* Tailwind CSS
