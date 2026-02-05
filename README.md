# 🎓 Sistema Acadêmico

Sistema completo de gestão escolar desenvolvido com React, Node.js e TypeScript.

## 👥 Equipe

- **Isac Ghilardi** - Backend Lead, coordenador do projeto
- **Ezequiel Francisco** - Frontend Lead  
- **Emyliu Felipe** - Fullstack/Support
- **Icaro Mairon** - Database support 
- **João Guilherme** - Fullstack/Support
## 🚀 Tecnologias

### Backend
- Node.js 20+
- TypeScript
- Express.js
- Prisma ORM
- PostgreSQL
- JWT

### Frontend
- React 18
- TypeScript
- Vite
- TailwindCSS
- React Query
- Axios

## 📋 Pré-requisitos

- Node.js 20 ou superior
- PostgreSQL 14 ou superior
- npm ou yarn

## 🔧 Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/SEU-USERNAME/sistema-academico.git
cd sistema-academico
```

### 2. Backend
```bash
cd backend
npm install

# Configure o .env
cp .env.example .env
# Edite o .env com suas configurações

# Execute as migrations
npx prisma migrate dev

# Inicie o servidor
npm run dev
```

### 3. Frontend
```bash
cd frontend
npm install

# Configure o .env
cp .env.example .env
# Edite o .env com a URL da API

# Inicie a aplicação
npm run dev
```

## 🌐 Acesso

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## 📚 Funcionalidades

- [ ] Autenticação e autorização
- [ ] Gestão de alunos
- [ ] Gestão de professores
- [ ] Gestão de turmas
- [ ] Sistema de matrículas
- [ ] Lançamento de notas
- [ ] Controle de frequência
- [ ] Boletim escolar

## 📅 Cronograma

- **Semana 1**: Setup e fundamentos ✅
- **Semana 2**: Autenticação
- **Semana 3**: Gestão de alunos
- **Semana 4**: Turmas e matrículas
- **Semana 5**: Notas e frequência
- **Semana 6-8**: Refinamento e deploy

## 🤝 Como Contribuir

1. Crie uma branch: `git checkout -b feature/nome-da-feature`
2. Commit suas mudanças: `git commit -m 'feat: descrição'`
3. Push para a branch: `git push origin feature/nome-da-feature`
4. Abra um Pull Request

## 📝 Licença

Este projeto é desenvolvido como trabalho acadêmico.

## 📧 Contato

- isac : isacghilardi@gmail.com


---

Desenvolvido com ❤️ por [AuraDevs]


