# DevPay API

Projeto acadêmico desenvolvido para a disciplina de **Versionamento, Automação e CI**, com foco na aplicação de práticas DevOps utilizando GitHub.

---

## 📖 Objetivo

Demonstrar como o uso de:

* versionamento com Git
* estratégia de branches
* Pull Requests
* Integração Contínua (CI)
* automação com GitHub Actions

pode reduzir riscos, aumentar previsibilidade e melhorar a qualidade das entregas.

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express.js
* Jest
* Supertest
* ESLint
* GitHub Actions

---

## ⚙️ Pipeline de CI

Executado automaticamente em:

* `push`
* `pull_request`

### Etapas automatizadas:

* Checkout do repositório
* Configuração do Node.js
* Instalação de dependências
* Lint
* Build
* Testes automatizados

---

## ▶️ Executar localmente

```bash
npm install
npm start
```

Servidor disponível em:

```text
http://localhost:3000/health
```

---

## 🧪 Rodar testes

```bash
npm test
```

---

## 📂 Estrutura do Projeto

```text
src/
 ├── app.js
 └── server.js

tests/
 └── app.test.js

.github/workflows/
 └── ci.yml

docs/images/
```

---

## 📸 Evidências

Capturas de execução do pipeline disponíveis na pasta:

```text
docs/images/
```

Incluindo:

* Execução com sucesso na `main`
* Falha simulada em branch de desenvolvimento
* Detalhes do erro detectado
* Pipeline restaurado após correção

---

## 👥 Integrantes

* João Pedro Neves de Azevedo Melo
* Guilherme Carlos da Luz
* Marleide Alves de França

---

## 📘 Disciplina
DevOPS
