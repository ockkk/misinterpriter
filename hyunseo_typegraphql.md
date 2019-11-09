# GraphQL + TypeSCript = TypeGraphQL

- **본기사는 [Top 5 Reasons to Use GraphQL (MARCH 25, 2018 Michał Lytek)](https://medium.com/@MichalLytek/graphql-typescript-typegraphql-ba0225cb4bed) 을 번역한 기사입니다.**

<br/>

출저 : https://www.prisma.io/blog/top-5-reasons-to-use-graphql-b60cfa683511

<br/>

우리는 모두 GraphQL 을 사랑합니다! 이는 REST API 가 가지고 있는 underfetching 과 overfetching 같은
많은 문제들을 해결합니다.
그러나 가끔 TypeScript를 사용하여 Node.js에서 GraphQL API를 개발하는 것은 약간의 고통이 따릅니다.

<br/>

[TypegraphQL](https://typegraphql.ml/) 은 클래스와 약간의 데코레이터를 더한 마법으로 스키마를 정의함으로써
i.a.(정보구조설계 = information Architecture) 과정을 즐겁게 만듭니다.

![typegraphql logo](https://images.velog.io/post-images/augusty/ba039b40-e43c-11e9-a973-7f9bb13a5b0d/logo.png)

## **동기**

앞서 언급했듯이 TypeScript를 사용하여 Node.js에서 GraphQL API를 개발하는 것은 어려운 과정 일 수 있습니다.
왜 그럴까요? 이를 위해 보통 수행해야 할 단계를 살펴 보겠습니다.

첫번 째로 , 우리는 `schema.gql` SDL 을 사용하여 파일에 모든 GraphQL 타입을 만듭니다.
또한 db 구성을 위해 [ORM classes](https://github.com/typeorm/typeorm) 를 이용한 데이터 모델도 만듭니다.
그 다음으로 Query , Mutation 및 필드에 대한 resolver 를 작성하기 시작하지만 우리가 먼저 만든
모든 인수 , 입력 , 그리고 심지어 객체 유형에 대한 TS 인터페이스를 만들어야 합니다.

그래야만 유효성 검사, 권한 부여 및로드 종속성과 같은 일반적인 작업을 수동으로 수행하여 resolver 를 구현할 수 있습니다.
<br/>

```js
export const getRecipesResolver: GraphQLFieldResolver<
  void,
  Context,
  GetRecipesArgs
> = async (_, args, ctx) => {
  // 거의 모든 resolver 에 대해 반복 가능한 작업
  const auth = Container.get(AuthService);
  if (!auth.check(ctx.user)) {
    throw new NotAuthorizedError();
  }
  await joi.validate(getRecipesSchema, args);
  const repository = TypeORM.getRepository(Recipe);

  // our business logic, e.g.:
  return repository.find({ skip: args.offset, take: args.limit });
};
```

<br/>

### **가장 큰 문제는 코드베이스의 중복성입니다.**

이 경우 , 동기화를 유지하기가 어렵습니다. 원본에 새 필드를 추가하려면 모든 파일을 이동해야 하고 클래스를 수정한
다음 스키마뿐만 아니라 인터페이스의 일부를 수정해야합니다. 입력이나 인수도 마찬가지입니다.
이는 한 부분을 업데이트하거나 단일 유형으로 실수하는 것을 잊어 버리기 쉽습니다.
또한 필드 이름에 오타가 있다면? 이름 바꾸기 기능 (F2)이 올바르게 작동하지 않습니다.

TypeGraphQL 은 TypeScript 기반으로 십여개월에 걸친 GraphQL API 개발 경험을 바탕으로이 문제를 해결합니다.
메인 아이디어는 클래스와 약간의 데코레이터를 사용하여 스키마를 정의하여 하나의 진실 소스만을 갖는 것입니다.
이는 의존성 주입, 검증 또는 인증과 같은 우리가 스스로 처리해야하는 일반적인 작업을 도와줍니다.
<br/>

## **시작하기**

TypeGraphQL의 모든 강력한 기능을 탐색하기 위해 예시로 `Recipe` 에 대한 GraphQL API를 작성합니다.

우리의 API의 기초가 되는 Recipe 타입으로 시작해보겠습니다.
우리는 아래의 SDL에 설명 된 타입을 원합니다.

```js
type Recipe {
  id: ID!
  title: String!
  description: String
  creationDate: Date!
  ingredients: [String!]!
}
```

이제 `Recipe` 에 모든 타입과 요소를 class 형태로 만들겠습니다.

```js
class Recipe {
  id: string;
  title: string;
  description?: string;
  creationDate: Date;
  ingredients: string[];
}
```

그런 다음 클래스와 클래스의 속성에 데코레이터를 주석으로 추가합니다.

```js
@ObjectType()
class Recipe {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field(type => [String])
  ingredients: string[];
}
```

**nullable** 혹은 **[]** 등 을 사용하는 자세한 규칙은 [여기서](https://typegraphql.ml/docs/types-and-fields.html) 확인하실 수 있습니다.

<br/>

## **Resolvers**

이제 우리는 전형적인 queries 와 mutation 을 만들고 싶습니다.
이를 위해 `RecipeService` 생성자에 들어간 resolver (controller) 클래스를 만듭니다.

```js
@Resolver(Recipe)
class RecipeResolver {
  constructor(private recipeService: RecipeService) {}

  @Query(returns => Recipe)
  async recipe(@Arg("id") id: string) {
    const recipe = await this.recipeService.findById(id);
    if (recipe === undefined) {
      throw new RecipeNotFoundError(id);
    }
    return recipe;
  }

  @Query(returns => [Recipe])
  recipes(@Args() { skip, take }: RecipesArgs) {
    return this.recipeService.findAll({ skip, take });
  }

  @Mutation(returns => Recipe)
  @Authorized()
  addRecipe(
    @Arg("newRecipeData") newRecipeData: NewRecipeInput,
    @Ctx("user") user: User,
  ): Promise<Recipe> {
    return this.recipeService.addNew({ data: newRecipeData, user });
  }

  @Mutation(returns => Boolean)
  @Authorized(Roles.Admin)
  async removeRecipe(@Arg("id") id: string) {
    try {
      await this.recipeService.removeById(id);
      return true;
    } catch {
      return false;
    }
  }
}
```

우리는 `@Authorized()` 데코레이터를 인증 된 사용자 또는 요구사항을 충족하는 사용자에 대해서만 접속을 허용하기 위해
사용 합니다. `returns => Recipe` 함수와 다른 것들을 선언하는 시기와 이유에 대한 자세한 규칙은
[resolvers docs](https://typegraphql.ml/docs/resolvers.html) 에 설명되어 있습니다.

<br/>

## **입력과 인수**

좋습니다! 하지만 `NewRecipeInput` 과 `RecipesArgs` 는 무엇일까요?
물론 입력 유형과 인수를 선언하는 클래스가 있습니다.

```js
@InputType()
class NewRecipeDataInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field({ nullable: true })
  @Length(30, 255)
  description?: string;

  @Field(type => [String])
  @MaxArraySize(30)
  ingredients: string[];
}

@ArgsType()
class RecipesArgs {
  @Field(type => Int, { nullable: true })
  @Min(0)
  skip: number = 0;

  @Field(type => Int, { nullable: true })
  @Min(1) @Max(50)
  take: number = 25;
}
```

`@Length`, `@Min` 또는 `@MaxArraySize` 는 `class-validator` 에서 데코레이터로 가져오고
자동으로 TypeGraphQL 에 필드 유효성 검사를 수행합니다.

<br/>

### **스키마 작성하기**

마지막으로해야 할 단계는 실제로 TypeGraphQL 정의에서 스키마를 작성하는 것입니다.
우리는 이를 위해 `buildSchema` 기능을 사용합니다.

```js
const schema = await buildSchema({
  resolvers: [RecipeResolver]
});

// ...creating express server or sth
```

마침내! 이제 GraphQL 스키마가 완전히 작동했습니다!

If we print it, we would receive exactly this

```js
type Recipe {
  id: ID!
  title: String!
  description: String
  creationDate: Date!
  ingredients: [String!]!
}
input NewRecipeInput {
  title: String!
  description: String
  ingredients: [String!]!
}
type Query {
  recipe(id: ID!): Recipe
  recipes(skip: Int, take: Int): [Recipe!]!
}
type Mutation {
  addRecipe(newRecipeData: NewRecipeInput!): Recipe!
  removeRecipe(id: ID!): Boolean!
}
```

<br/>

### **더 원한다면 ?**

이는 빙산의 일각인 아주 기본적인 graphQL 타입에 예시입니다.
interfaces, enums, unions 혹은 custom scalars 를 사용하고 계신가요? 훌륭합니다!
TypeGraphQL 은 이 역시 완벽하게 지원합니다!

좀 더 복잡한 경우를 확인하려면 [예제 섹션](https://typegraphql.ml/docs/examples.html)으로
이동하여 TypeGraphQL이 TypeORM과 얼마나 잘 통합되는지 확인할 수 있습니다.

If you want to see how it looks in more complicated case, you can go to the Examples section where you can find how nice TypeGraphQL integrates with TypeORM. Want to learn about more advanced concepts like authorization checker, inheritance support, field resolvers or middlewares? Check out the Docs section.
