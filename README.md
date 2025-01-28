# Cursos App

Feito com Next.js, TypeScript e Context API para gerenciamento de estado.

## Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Yarn](https://yarnpkg.com/)

---

## Como rodar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/miguelzinh3/cursos-app.git
   cd cursos-app
   ```

2. Instale as dependências do projeto:

   ```bash
   yarn install
   ```

3. Rode o servidor de dev:

   ```bash
   yarn dev
   ```

   O servidor estará acessível em [http://localhost:3000](http://localhost:3000).

---

## Como rodar os testes

Para rodar os testes do projeto:

```bash
yarn test
```

---

## Estrutura de arquivos

- **`src`**: Diretório principal contendo o código-fonte.
  - **`context/CourseContext.tsx`**: Gerencia o estado relacionado aos cursos e ao progresso do usuário.
  - **`components/`**: Componentes reutilizáveis do aplicativo.
  - **`pages/`**: Páginas do aplicativo (seguindo a estrutura do Next.js).
  - **`styles/`**: Estilos globais e específicos do aplicativo.
- **`public/`**: Arquivos estáticos servidos diretamente pelo Next.js.
- **`jest.config.ts`**: Configuração do Jest para os testes.
- **`package.json`**: Lista de dependências e scripts do projeto.

---

## `CourseContext.tsx`

O arquivo `CourseContext.tsx` gerencia o estado global dos cursos e do progresso dos usuários. Ele utiliza a Context API do React para compartilhar informações em toda a aplicação.

- **Estado Inicial**:
  - `initialCourses`: Array contendo os cursos disponíveis.
  - `initialUserCourses`: Cursos nos quais o usuário está inscrito.

- **Funções principais**:
  - `hasPurchasedCourse(courseId)`: Verifica se o usuário comprou um curso.
  - `purchaseCourse(courseId)`: Adiciona um curso ao progresso do usuário.

- **Provedor de Contexto**:
  O componente `CourseProvider` encapsula os componentes filhos e fornece os estados e funções relacionadas aos cursos via Context API.

- **Hook personalizado**:
  - `useCourseContext()`: Facilita o acesso aos dados do contexto. Ele lança um erro caso seja usado fora do `CourseProvider`.

### Exemplo de uso do contexto:

```tsx
import { useCourseContext } from "@/context/CourseContext";

const MyComponent = () => {
  const { courses, hasPurchasedCourse, purchaseCourse } = useCourseContext();

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          {hasPurchasedCourse(course.id) ? (
            <p>Você já comprou este curso!</p>
          ) : (
            <button onClick={() => purchaseCourse(course.id)}>
              Comprar Curso
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
```