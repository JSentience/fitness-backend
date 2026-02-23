# Red Winter Backend — подробный обучающий гид

Проект на NestJS + GraphQL + Prisma/PostgreSQL. Этот файл даёт быстрый и ёмкий ликбез: что за технологии, как они связаны, что где лежит, и что попробовать в первую очередь. Подходит для первого бэкенд-проекта.

---

## Зачем проект

- Хранить пользователей, их профили и замеры тела (персонализация питания).
- Рецепты с шагами, ингредиентами, ценами и единицами измерения.
- Комментарии и лайки к рецептам.
- Заказы ингредиентов рецепта и доставка.

---

## Карта технологий (с мини-теорией)

### NestJS 11

- **Что это**: каркас поверх Node.js с модульной архитектурой и dependency injection (DI).
- **Ключевые декораторы**: `@Module`, `@Injectable`, `@Controller`/`@Resolver`, `@Query`, `@Mutation`, `@UseGuards`, `@UsePipes`.
- **Как работает**: вы описываете модули → модули объединяют провайдеры (сервисы) и резолверы → DI автоматически внедряет зависимости.
- **Что потрогать**: создать простую мутацию/квери, добавить guard/pipe, посмотреть как сервис инжектится через конструктор.

### GraphQL (Apollo)

- **Идея**: клиент сам формирует shape данных. Вместо множества REST-эндпоинтов — одна схема с типами, Query/Mutation/Subscription.
- **В проекте**: схема генерируется из декораторов (`autoSchemaFile: true`), playground включен в dev.
- **Что потрогать**: добавить Query `me`, Mutation `createRecipe`, задать аргументы и возвращаемые типы. Посмотреть на типы в Playground.

### TypeScript

- **Зачем**: типы ловят ошибки до рантайма и дают автодополнение.
- **Фокусы**: интерфейсы, типы, generics, `strictNullChecks`, типизация async/await.
- **Что потрогать**: описать типы входных данных (DTO), типы возвращаемых объектов, включить строгий режим.

### PostgreSQL

- **Что это**: реляционная БД с транзакциями, индексами и внешними ключами.
- **Связи**: 1:1 (Profile–User), 1:N (User–Recipe), уникальные составные ключи (Like: recipeId+userId).
- **Что потрогать**: понять базовые типы (text, int, decimal, timestamp), индексы/unique, внешние ключи.

### Prisma 7.3.0 (+ adapter-pg)

- **Что это**: type-safe ORM. Модели описываются в `schema.prisma`, миграции генерируются автоматически, клиент — в `prisma/generated/prisma/client`.
- **Схема**: `model` → таблица, `enum` → перечисление, `@relation` → связи. `@map` меняет имя столбца в БД, `@@map` — имя таблицы.
- **Adapter-pg**: позволяет использовать общий пул `pg` через `PrismaPg` в `prisma.service.ts`.
- **Что потрогать**: `prisma migrate dev`, `prisma generate`, запросы `findMany/create/update` с `include/select`, транзакции `prisma.$transaction`.

### Bun

- **Что это**: быстрый runtime + пакетный менеджер (аналог npm/yarn + node).
- **Команды**: `bun install`, `bun run <script>`, `bun prisma ...` (проксирует).
- **Что потрогать**: запуск скриптов из package.json через bun, измерить скорость установки.

### ESLint + Prettier

- **ESLint**: статический анализ, ловит ошибки и стилистические нарушения.
- **Prettier**: автоформатирование. Вместе дают единый стиль.
- **Что потрогать**: `bun run lint`, посмотреть предупреждения, настроить редактор на форматирование.

### Jest

- **Что это**: тестовый раннер для unit/e2e (с supertest).
- **Что потрогать**: написать тест сервиса (мокнуть Prisma), е2е-тест GraphQL запроса (supertest + nest testing module).

---

## Архитектура папок (что где лежит)

```
src/
├── main.ts                 # точка входа Nest
├── app.module.ts           # корневой модуль, подключает остальные
├── config/graphql.config.ts# конфиг GraphQL (autoSchemaFile, playground)
├── prisma/                 # prisma.module + prisma.service (адаптер pg)
├── auth/                   # заготовка под аутентификацию
├── users/                  # пользователи
├── recipes/                # рецепты
│   └── ingredients/        # подмодуль ингредиентов
└── orders/                 # заказы и доставка
```

Мини-назначение модулей:

- **app.module.ts** — собирает все модули, конфигурирует GraphQL и ConfigModule.
- **prisma.module/service** — создаёт `PrismaClient` с `PrismaPg` и пулом `pg`.
- **users** — сущность User, профиль, замеры (пока резолвер/сервис пустые — их надо заполнить).
- **recipes** — рецепты, шаги, ингредиенты (подмодуль ingredients).
- **orders** — заказы, позиции заказа, курьеры (заготовка).
- **auth** — будущая авторизация/аутентификация (JWT/guards).

---

## Модели данных и связи (Prisma, простыми словами)

### Пользователи

- **User**: email, пароль, роль. Связи: `profile` (1:1), `measurement` (1:1), `recipes`, `comments`, `likes`, `orders` (1:N).
- **Profile**: ФИО, возраст, пол, био. Уникально связано с `User`.
- **BodyMeasurement**: рост/вес/обхваты, уровень активности, цель питания. Уникально связано с `User`.

### Контент (рецепты)

- **Recipe**: название, описание, калории, время, сложность, автор (`User`). Имеет шаги, ингредиенты, комментарии, лайки.
- **Ingredient**: базовый ингредиент (название, базовая единица измерения).
- **RecipeIngredient**: ингредиент в контексте рецепта (количество, единица, цена, иконка). Связан с Recipe и Ingredient; может быть в OrderItem.
- **RecipeStep**: порядковый шаг рецепта (номер, заголовок, инструкция).

### Заказы

- **Order**: заказ пользователя, статус (PENDING → PROCESSING → COMPLETED/CANCELLED), список `orderItems`.
- **OrderItem**: позиция заказа, ссылается на `recipeIngredient`, хранит `quantity`.
- **Courier**: данные курьера (пока без связи, можно привязать к Order в будущем).

### Реакции

- **Comment**: текст, привязан к `recipe` и `author` (User).
- **Like**: уникален по `(recipeId, userId)` — один пользователь ставит один лайк на рецепт.

### Enum’ы (перечисления)

- **Role** (USER, ADMIN), **Gender**, **ActivityLevel**, **NutritionGoal**, **DifficultyLevel**, **Unit**, **OrderStatus**.

---

## Практические сценарии и как ими пользоваться

1. Регистрация → создаётся `User`, заполняется `Profile` и `BodyMeasurement`.
2. Автор создаёт `Recipe` → добавляет `RecipeIngredient` (кол-во, цена, единица) → добавляет `RecipeStep`.
3. Другие пользователи пишут `Comment`, ставят `Like` (уникальная пара recipe+user).
4. Заказ: пользователь выбирает `RecipeIngredient` → формируется `Order` с `OrderItem` → статус заказа обновляется по этапам.

---

## Теория по ключевым зависимостям (короткий конспект)

### NestJS: модульность и DI

- **Module**: описывает, какие провайдеры/резолверы принадлежат модулю и что экспортируется.
- **Service (provider)**: бизнес-логика, помечается `@Injectable`, инжектится через конструктор.
- **Resolver/Controller**: точка входа для GraphQL/REST; не содержит бизнес-логики, только координацию.
- **Guard/Pipe**: Guard проверяет доступ (например, JWT), Pipe валидирует/преобразует входные данные.

### GraphQL с Nest

- Схема → генерируется из декораторов. Типы и аргументы должны быть описаны классами/типами TS.
- Query для чтения, Mutation для записи. Можно комбинировать `@Args`, `@ResolveField` для вложенных полей.
- Ответы должны быть типизированы, иначе схема будет «любая» и потеряется автодополнение.

### Prisma: схема → миграции → клиент

- Пишете модели в `prisma/schema/*.prisma` (файл `schema.prisma` включает остальные через `prisma.config.ts`).
- Генерируете миграцию: `bun prisma migrate dev` (создаёт SQL и применяет в БД).
- Генерируете клиент: `bun prisma generate` (в `prisma/generated/prisma/client`).
- Запросы пишутся как `prisma.modelName.method({ where, data, include/select })`, типы подсказаны IDE.

### PostgreSQL (минимум для старта)

- Типы: `text`, `int`, `decimal`, `timestamp`. Prisma мапит их автоматически.
- Связи через внешние ключи: в Prisma это `@relation(fields: [...], references: [...])`.
- Уникальность: `@unique` или составное `@@unique([fieldA, fieldB])`.

### Bun

- Используйте как npm/yarn: `bun install`, `bun run build`, `bun start:dev`.
- `bun prisma ...` просто проксирует команды Prisma, это удобно и быстро.

### ESLint/Prettier

- Линт: `bun run lint` (у нас eslint с prettier). Исправляет формат и подсказывает ошибки.
- Настрой редактора: форматировать on save, чтобы не копить диффы.

### Jest (базово)

---

## Примеры (расширенные заготовки)

### 1) GraphQL Resolver (Query + Mutation)

```ts
@Resolver(() => Recipe)
export class RecipesResolver {
	constructor(private readonly recipes: RecipesService) {}

	@Query(() => [Recipe])
	async recipesAll() {
		return this.recipes.findAll()
	}

	@Mutation(() => Recipe)
	async createRecipe(@Args('data') data: CreateRecipeInput) {
		return this.recipes.create(data)
	}
}
```

### 2) Prisma CRUD-фрагменты

```ts
// recipes.service.ts
async findAll() {
  return this.prisma.recipe.findMany({
    include: { recipeIngredients: true, recipeSteps: true },
  });
}

async create(data: CreateRecipeInput) {
  return this.prisma.recipe.create({ data });
}
```

### 3) Prisma транзакция (создание заказа с позициями)

```ts
// orders.service.ts
async createOrder(userId: string, items: { recipeIngredientId: string; qty: number }[]) {
  return this.prisma.$transaction(async (tx) => {
    const order = await tx.order.create({ data: { userId, status: 'PENDING' } });

    await tx.orderItem.createMany({
      data: items.map((i) => ({
        orderId: order.id,
        recipeIngredientId: i.recipeIngredientId,
        quantity: i.qty,
      })),
    });

    return order;
  });
}
```

### 4) @ResolveField для вложенных данных

```ts
@Resolver(() => Recipe)
export class RecipesResolver {
  constructor(private readonly recipes: RecipesService) {}

  @ResolveField(() => [RecipeIngredient])
  ingredients(@Parent() recipe: Recipe) {
    return this.recipes.getIngredients(recipe.id);
  }
}

// recipes.service.ts
getIngredients(recipeId: string) {
  return this.prisma.recipeIngredient.findMany({ where: { recipeId } });
}
```

### 5) DTO c валидацией (class-validator)

```ts
@InputType()
export class CreateRecipeInput {
	@Field()
	@IsString()
	title: string

	@Field()
	@IsString()
	description: string
}
```

### 6) e2e тест GraphQL (supertest + Jest)

```ts
it('recipesAll returns array', async () => {
	const query = `{
    recipesAll { id title }
  }`

	const res = await request(app.getHttpServer())
		.post('/graphql')
		.send({ query })

	expect(res.status).toBe(200)
	expect(res.body.data.recipesAll).toBeInstanceOf(Array)
})
```

### 7) JWT-поток (скелет)

```ts
// auth.module.ts
@Module({
	imports: [
		JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1h' } }),
	],
	providers: [AuthService, JwtStrategy],
	exports: [JwtModule],
})
export class AuthModule {}

// jwt.strategy.ts
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: 'secret',
		})
	}

	async validate(payload: { sub: string; email: string }) {
		return { userId: payload.sub, email: payload.email }
	}
}

// guard для GraphQL
@Injectable()
export class GqlJwtAuthGuard extends AuthGuard('jwt') {
	getRequest(ctx: ExecutionContext) {
		return GqlExecutionContext.create(ctx).getContext().req
	}
}
```

## Как запустить и проверить себя (шаги)

1. `bun install`
2. Создать `.env` из `.env.example` (указать `DATABASE_URL`).
3. Поднять PostgreSQL (локально или Docker) → убедиться, что порт/логин совпадают с `.env`.
4. `bun prisma generate`
5. `bun prisma migrate dev`
6. `bun start:dev`
7. Открыть `http://localhost:3000/graphql` (playground, если MODE=development).

---

## Что дописать (план для новичка)

- Auth: регистрация/логин, JWT, guards на приватные операции.
- Тесты: unit (мокаем Prisma), e2e (GraphQL-запросы через supertest).

---

## Где лежит Prisma Client

- `prisma/generated/prisma/client` — импортируйте оттуда `PrismaClient` в сервисах.

---

## Если вы здесь впервые

- Начните с БД и миграций, чтобы таблицы появились.
- Посмотрите схему в Playground, чтобы понять типы.
- Реализуйте один модуль целиком (например, Users) — резолвер, сервис, типы/DTO.
- Затем двигайтесь к Recipes → Orders → Auth.

# Red Winter Backend — Обзор проекта

## Назначение

Серверная часть приложения для фитнеса и здорового питания: рецепты, комментарии и лайки, учет замеров тела, заказ ингредиентов и доставка.

## Технологии (теория и зачем они нужны)

- **NestJS 11 (GraphQL, Apollo)**
  - Фреймворк поверх Node.js с модульной архитектурой и DI (dependency injection).
  - Работает через декораторы (`@Module`, `@Injectable`, `@Resolver`, `@Query`, `@Mutation`).
  - В этом проекте Nest поднимает GraphQL-сервер (через Apollo) и организует модули Users/Recipes/Orders/Auth.
  - Учебная цель: понять модули, провайдеры (services), резолверы, пайпы/гуарды.

- **GraphQL (Apollo Server)**
  - Язык запросов «клиент формирует нужный shape данных сам» (вместо фиксированных REST-эндпоинтов).
  - Схема описывает типы, запросы (query), мутации (mutation) и подписки (subscription).
  - Автогенерация схемы из декораторов Nest (при `autoSchemaFile: true`). Playground доступен в dev.
  - Учебная цель: написать первый `@Resolver`, `@Query`, `@Mutation`, разобраться с аргументами и типами.

- **TypeScript**
  - Надстройка над JS с типами: ловит ошибки на этапе компиляции.
  - Ключевые фичи: интерфейсы, типы, generics, `strictNullChecks`, async/await с типами.
  - Учебная цель: описывать сущности типов (DTO/inputs) и получать автодополнение в IDE.

- **PostgreSQL**
  - Реляционная БД с транзакциями и строгими связями.
  - Подходит, когда нужны JOIN/агрегации и целостность данных.
  - Учебная цель: понять базовые типы, индексы, уникальные ключи, связи 1:1/1:N/N:M.

- **Prisma 7.3.0 (adapter-pg)**
  - Type-safe ORM: схема в `schema.prisma`, миграции, автогенерация клиента (`prisma/generated/prisma/client`).
  - Модели = таблицы; enum = перечисления; связи задаются через `@relation`.
  - adapter-pg позволяет использовать общий пул pg.
  - Учебная цель: CRUD через Prisma Client, миграции (`prisma migrate dev`), работа с relations.

- **Bun** (package manager/runtime)
  - Альтернатива npm/yarn + node: быстрее ставит пакеты и запускает скрипты.
  - Команды те же (`bun install`, `bun run ...`).
  - Учебная цель: научиться выполнять привычные npm-скрипты через bun.

- **ESLint + Prettier**
  - ESLint — статический анализ кода, ловит ошибки и несоответствия стайлгайду.
  - Prettier — автоформатирование. Вместе дают единый стиль и меньше споров в команде.
  - Учебная цель: запускать линт/фикс (`bun run lint`), читать предупреждения и исправлять.

- **Jest**
  - Тестовый раннер для JS/TS. Поддерживает unit, e2e (с supertest), снапшоты.
  - Учебная цель: написать простые тесты на сервисы/резолверы и мокать зависимости.

## Архитектура (коротко)

```
src/
├── main.ts              # вход
├── app.module.ts        # корневой модуль
├── config/graphql.config.ts
├── prisma/              # prisma.module, prisma.service (adapter-pg)
├── auth/                # (в разработке)
├── users/               # пользователи
├── recipes/             # рецепты
│   └── ingredients/     # ингредиенты
└── orders/              # заказы
```

## Модели БД (Prisma)

- User ↔ Profile (1:1),
  BodyMeasurement (1:1),
  Recipe/Comment/Like/Order (1:N)
- Recipe ↔ RecipeIngredient (1:N), RecipeStep (1:N), Comment, Like
- Ingredient ↔ RecipeIngredient (1:N)
- Order ↔ OrderItem (1:N), User (N:1)
- Comment (User, Recipe), Like (User+Recipe unique), Courier
- Enum: Role, Gender, ActivityLevel, NutritionGoal, DifficultyLevel, Unit, OrderStatus

## Основные сценарии

1. Регистрация → профиль → замеры тела → персонализация
2. Рецепты: шаги, ингредиенты (с количеством и ценой), лайки, комментарии
3. Заказы: выбор ингредиентов рецепта → Order/OrderItem → доставка курьером

## Команды

- Установка: `bun install`
- Генерация Prisma: `bun prisma generate`
- Миграции: `bun prisma migrate dev`
- Старт dev: `bun start:dev`
- Сборка: `bun run build`
- Линт: `bun run lint`
- Тесты: `bun test`

## Конфигурация

# Red Winter Backend — подробный разбор для первого проекта

Этот файл объясняет **зачем нужен проект, что внутри, как связаны сущности** и как его запустить. Подходит, если вы делаете свой первый backend на NestJS + Prisma.

## Что делает система

- Хранит пользователей, их профили и замеры тела (для персонализации питания).
- Хранит рецепты, шаги приготовления и ингредиенты с ценами и единицами измерения.
- Позволяет комментировать и лайкать рецепты.
- Позволяет собрать заказ из ингредиентов рецепта и оформить доставку.

## Технологии (зачем каждая)

- **NestJS 11 + GraphQL (Apollo)** — каркас приложения, модульная архитектура, декларативные резолверы.
- **TypeScript** — типобезопасность и автодополнение везде.
- **PostgreSQL + Prisma 7.3.0** — надежная БД и удобный type-safe ORM; adapter-pg для коннекта через пул.
- **Bun** — быстрый менеджер пакетов и рантайм (аналог npm/yarn + node).
- **ESLint + Prettier** — стиль кода и проверка ошибок.
- **Jest** — юнит и e2e тесты.

## Как устроен код (директории)

```
src/
├── main.ts                 # точка входа, поднимает Nest приложение
├── app.module.ts           # корневой модуль, подключает остальные
├── config/graphql.config.ts# настройки GraphQL (автогенерация схемы)
├── prisma/                 # модуль и сервис Prisma (подключение к БД через adapter-pg)
├── auth/                   # аутентификация (пока пустая заготовка)
├── users/                  # пользователи
├── recipes/                # рецепты
│   └── ingredients/        # подмодуль ингредиентов
└── orders/                 # заказы и доставка
```

## Модели данных и связи (Prisma)

Ниже — простое объяснение, как связаны таблицы.

### Пользователи и профиль

- **User** — учетная запись (email, пароль, роль). Связи:
  - `profile` (1:1) — подробные данные человека.
  - `measurement` (1:1) — замеры тела для персонализации.
  - `recipes` (1:N) — какие рецепты он создал.
  - `comments`, `likes`, `orders` (1:N) — активность пользователя.

- **Profile** — имя, возраст, пол, био. Привязан к одному `User` (уникальный `userId`).

- **BodyMeasurement** — рост, вес, целевой вес, обхваты, уровень активности, цель питания. Привязан к одному `User` (уникальный `userId`).

### Рецепты и контент

- **Recipe** — сам рецепт: название, описание, калории, время готовки, сложность.
  - `author` → `User` (кто создал).
  - `recipeIngredients` (1:N) — какие ингредиенты и в каких количествах нужны.
  - `recipeSteps` (1:N) — пошаговые инструкции.
  - `comments`, `likes` — обратная связь от других пользователей.

- **Ingredient** — базовый ингредиент (название, единица измерения по умолчанию). Используется многими рецептами.

- **RecipeIngredient** — «ингредиент в контексте рецепта» с количеством, единицей измерения, ценой и иконкой.
  - Ссылается на `Recipe` и на базовый `Ingredient`.
  - Может участвовать в заказах (`orderItems`).

- **RecipeStep** — шаг рецепта: номер, заголовок, текст инструкции.

### Заказы и доставка

- **Order** — заказ пользователя.
  - `user` — кто заказал.
  - `orderItems` (1:N) — позиции заказа.
  - `status` — PENDING / PROCESSING / COMPLETED / CANCELLED.

- **OrderItem** — одна позиция заказа.
  - `order` — к какому заказу относится.
  - `recipeIngredient` — какой ингредиент и его цена/единица/количество.
  - `quantity` — сколько штук (по умолчанию 1).

- **Courier** — данные курьера (имя, телефон). Пока не связан, но может использоваться для назначения доставки.

### Реакции

- **Comment** — комментарий к рецепту.
  - `recipe` — к какому рецепту.
  - `author` — какой пользователь написал.

- **Like** — лайк рецепта.
  - Уникален по паре `(recipeId, userId)`, чтобы один пользователь ставил один лайк на рецепт.

### Перечисления (enum)

- **Role** — USER | ADMIN (права доступа).
- **Gender** — MALE | FEMALE (для профиля).
- **ActivityLevel** — SEDENTARY…VERY_ACTIVE (для расчётов активности).
- **NutritionGoal** — WEIGHT_LOSS | MAINTENANCE | MUSCLE_GAIN (цель питания).
- **DifficultyLevel** — EASY | MEDIUM | HARD (сложность рецепта).
- **Unit** — GRAM, KILOGRAM, MILLILITER, LITER, CUP, TABLESPOON, TEASPOON, PIECE, CLOVES (единицы измерения).
- **OrderStatus** — PENDING, PROCESSING, COMPLETED, CANCELLED.

## Как данные связаны в сценариях

1. Пользователь регистрируется → получает `User`, заполняет `Profile` и `BodyMeasurement`.
2. Создаёт `Recipe` → добавляет `RecipeIngredient` (кол-во, цена, ед. изм.) → добавляет `RecipeStep`.
3. Другие пользователи оставляют `Comment` и `Like`.
4. Для покупки: выбираются нужные `RecipeIngredient` → создаётся `Order` с `OrderItem` → отслеживается `OrderStatus` → (опционально) назначается `Courier`.

## Настройка и запуск (шаг за шагом)

1. **Установить зависимости**
   ```bash
   bun install
   ```
2. **Создать .env** (на основе `.env.example`)
   ```env
   DATABASE_URL="postgresql://user:pass@localhost:5432/fitness_app_db?schema=public"
   MODE="development"
   PORT=3000
   ```
3. **Поднять PostgreSQL** (локально или в Docker) и убедиться, что `DATABASE_URL` корректен.
4. **Сгенерировать Prisma Client**
   ```bash
   bun prisma generate
   ```
5. **Применить миграции** (создать таблицы)
   ```bash
   bun prisma migrate dev
   ```
6. **Запустить в dev-режиме**
   ```bash
   bun start:dev
   ```
7. **Открыть GraphQL Playground** (если MODE=development)
   - По умолчанию на `http://localhost:3000/graphql`

## Полезные команды

- Линтер: `bun run lint`
- Сборка: `bun run build`
- Тесты: `bun test`
- Проверить миграции: `bun prisma migrate status` (если БД доступна)

## Что дописать в коде (следующие шаги)

- Реализовать резолверы и сервисы:
  - Users: CRUD, получение профиля, обновление замеров тела.
  - Recipes: список, детали, создание/редактирование, шаги, ингредиенты.
  - Orders: создание заказа из ингредиентов, смена статуса, назначение курьера.
  - Auth: регистрация/логин, JWT, guard-ы для приватных операций.
- Добавить валидацию входных данных (class-validator / pipes).
- Написать e2e-тесты (Jest + supertest) для ключевых сценариев.

## Где лежит сгенерированный Prisma Client

- `prisma/generated/prisma/client` — импортировать оттуда `PrismaClient`.

## Если вы здесь впервые

- Начните с запуска БД и миграций, чтобы таблицы создались.
- Затем поднимите `bun start:dev` и посмотрите схему в GraphQL Playground.
- Дальше реализуйте резолверы по одному модулю: Users → Recipes → Orders → Auth.
