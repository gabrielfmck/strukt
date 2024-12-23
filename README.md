
# 🚀 Strukt - Plataforma de Aprendizado Interativo de Programação

O **Strukt** é uma plataforma web educacional que visa revolucionar o ensino de programação, com foco em algoritmos e estruturas de dados. 🌟

Desenvolvido com tecnologias modernas, como **React**, **TypeScript** e **Firebase**, o Strukt combina **visualizações interativas**, **gamificação** e um **ambiente de prática em tempo real** para criar uma experiência de aprendizado envolvente e eficaz. 🎯

## 🌟 Recursos Principais

- **🔍 Visualizações Interativas:** Representações visuais dinâmicas de algoritmos e estruturas de dados, permitindo compreender o funcionamento interno desses conceitos.
- **💻 Editor de Código Integrado:** Ambiente de desenvolvimento com execução em tempo real, feedback imediato e testes automatizados.
- **🏆 Sistema de Gamificação:** Progresso em níveis, conquistas e recompensas para aumentar engajamento e motivação.
- **📚 Ambiente de Prática:** Exercícios progressivos e desafiadores para consolidar os conhecimentos adquiridos.
- **📱 Suporte Multiplataforma:** Acesso responsivo e adaptativo em diversos dispositivos.

## 🛠️ Tecnologias Utilizadas

**Frontend:**
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Monaco Editor
- Recharts

**Backend e Infraestrutura:**
- Firebase (Authentication, Firestore, Storage)
- Piston API
- Netlify

**Ferramentas de Desenvolvimento:**
- Git, GitHub
- ESLint, Prettier
- Jest
- Figma

---

## ⚙️ Instalação e Configuração

### Pré-requisitos
Antes de começar, certifique-se de ter instalado:
- **Node.js** (versão 16 ou superior): [Download Node.js](https://nodejs.org/)
- **npm** (gerenciado com o Node.js)
- **Git**: [Download Git](https://git-scm.com/)

### Configuração do Ambiente

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
   - Ative **Authentication**, **Firestore** e **Storage** no Firebase.
   - Baixe o arquivo `firebase-config.json` e insira as informações no arquivo `.env`.

4. **Crie o arquivo `.env`**:
   Crie um arquivo `.env` na raiz do projeto e configure as variáveis necessárias:
   ```
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

6. **Acesse no navegador**:
   [http://localhost:3000](http://localhost:3000)

---

## 🚀 Comandos Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria uma versão otimizada para produção.
- `npm run lint`: Executa o linter para verificar problemas no código.
- `npm run test`: Executa os testes unitários.

---

## 🤝 Contribuição

Contribuições são super bem-vindas! 🎉 Se você encontrar algum problema ou tiver uma sugestão de melhoria, sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_. 🚀

### Passo a passo para contribuir:
1. Faça um _fork_ do repositório.
2. Crie sua _branch_ de feature:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. _Commit_ suas mudanças:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Faça o _push_ para a sua _branch_:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Abra um _Pull Request_.

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT. 📜

---

## 📬 Contato

- **GitHub:** [gabrielfmck](https://github.com/gabrielfmck)
- **LinkedIn:** [Gabriel Fernandes](https://www.linkedin.com/in/gabrielfernandesj/)
- **Email:** gabrielfernandes0625@gmail.com