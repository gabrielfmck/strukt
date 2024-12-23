<h1 align="center">Strukt - Plataforma de Aprendizado Interativo de Programação</h1>

<p align="center">
  <img src="https://i.imgur.com/laBlJkf.png" alt="Strukt" />
</p>

O **Strukt** é uma plataforma web educacional inovadora, focada no ensino de algoritmos e estruturas de dados.

Desenvolvido com tecnologias modernas como **React**, **TypeScript** e **Firebase**, o Strukt oferece uma experiência imersiva de aprendizado por meio de visualizações interativas, gamificação e um ambiente de prática em tempo real.

---

## ✨ Características

- **Visualizações Interativas**: Compreenda algoritmos e estruturas de dados com representações visuais dinâmicas.
- **Editor de Código em Tempo Real**: Ambiente integrado com execução de código e feedback imediato.
- **Sistema de Gamificação**: Alcance conquistas, progrida em níveis e mantenha a motivação.
- **Exercícios Personalizados**: Conquiste desafios e fortaleça seus conhecimentos.
- **Acessível em Diversos Dispositivos**: Experiência responsiva e adaptativa em qualquer tela.

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- React
- TypeScript
- Tailwind CSS
- Monaco Editor
- Framer Motion
- Recharts

### **Backend**
- Firebase (Authentication, Firestore, Storage)
- Piston API
- Netlify

### **Ferramentas de Desenvolvimento**
- Git, GitHub
- ESLint, Prettier
- Jest
- Figma

---

## 🔧 Primeiros Passos

### Pré-requisitos

Certifique-se de ter instalado:
- **Node.js** (versão 16 ou superior): [Baixar Node.js](https://nodejs.org/)
- **npm** (ou gerenciadores alternativos como pnpm ou yarn)
- **Git**: [Baixar Git](https://git-scm.com/)

---

### Instalação e Configuração

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/gabrielfmck/strukt.git
   cd strukt
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configuração do Firebase**:
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
   - Habilite os serviços **Authentication**, **Firestore** e **Storage**.
   - Baixe o arquivo de configuração do Firebase e configure as variáveis no arquivo `.env`.

4. **Configuração do arquivo `.env`**:
   Crie o arquivo `.env` na raiz do projeto:
   ```env
   VITE_FIREBASE_API_KEY=<sua-api-key>
   VITE_FIREBASE_AUTH_DOMAIN=<seu-auth-domain>
   VITE_FIREBASE_PROJECT_ID=<seu-project-id>
   VITE_FIREBASE_STORAGE_BUCKET=<seu-storage-bucket>
   VITE_FIREBASE_MESSAGING_SENDER_ID=<seu-messaging-sender-id>
   VITE_FIREBASE_APP_ID=<seu-app-id>
   ```

5. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

6. **Acesse o projeto**:
   Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## 🚀 Comandos Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera os arquivos otimizados para produção.
- `npm run lint`: Verifica a qualidade do código.
- `npm run test`: Executa os testes unitários.

---

## 🤝 Contribuições

Contribuições são bem-vindas! 🎉 

### Como Contribuir:
1. Faça um _fork_ do projeto.
2. Crie uma nova _branch_ para sua funcionalidade:
   ```bash
   git checkout -b feature/SuaFuncionalidade
   ```
3. Adicione suas mudanças:
   ```bash
   git commit -m "Add nova funcionalidade"
   ```
4. Envie para o repositório:
   ```bash
   git push origin feature/SuaFuncionalidade
   ```
5. Abra um _Pull Request_.

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

## 📬 Contato

- **LinkedIn:** [Gabriel Fernandes](https://www.linkedin.com/in/gabrielfernandesj/)
- **Email:** gabrielfernandes0625@gmail.com
