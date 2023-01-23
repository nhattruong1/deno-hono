
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  userName: string | null
  email: string
  firstName: string | null
  surName: string | null
  fullName: string | null
  gender: Gender | null
  birth: Date | null
  avatar: string | null
  cover: string | null
  information: Prisma.JsonValue | null
  password: string
  isActive: boolean
  isDelete: boolean
  createdAt: Date
  updatedAt: Date
}

/**
 * Model relationship
 * 
 */
export type relationship = {
  id: number
  content: string
  userId: number | null
  friendId: number | null
  relationType: RelationType
  isActive: boolean
  isDelete: boolean
  createdAt: Date
  updatedAt: Date
}

/**
 * Model userThreads
 * 
 */
export type userThreads = {
  id: number
  userId: number | null
  threadId: number | null
  isActive: boolean
  isDelete: boolean
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Thread
 * 
 */
export type Thread = {
  id: number
  content: string
  totalReact: number | null
  totalComment: number | null
  authorId: number | null
  privacy: ThreadPrivacy
  destination: DestinationThread
  isActive: boolean
  isDelete: boolean
  createdAt: Date
  updatedAt: Date
}

/**
 * Model threadAttachments
 * 
 */
export type threadAttachments = {
  id: number
  link: string
  type: AttachmentType
  threadId: number | null
  isActive: boolean
  isDelete: boolean
  createdAt: Date
  updatedAt: Date
}

/**
 * Model reaction
 * 
 */
export type reaction = {
  id: number
  react: ReactType
  threadId: number | null
  commentId: number | null
  userId: number | null
  isActive: boolean
  isDelete: boolean
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Comment
 * 
 */
export type Comment = {
  id: number
  content: string
  threadId: number | null
  userId: number | null
  parentId: number | null
  isActive: boolean
  isDelete: boolean
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Session
 * 
 */
export type Session = {
  id: number
  refreshToken: string
  sign: string
  userId: number
  ip: string | null
  location: string | null
  device: string | null
  expireAt: Date
  isActive: boolean
  isDelete: boolean
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Monitoring
 * 
 */
export type Monitoring = {
  id: number
  userId: number
  type: LogType
  detail: Prisma.JsonValue | null
  isActive: boolean
  isDelete: boolean
  createdAt: Date
  updatedAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const AttachmentType: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  DOCUMENT: 'DOCUMENT',
  OTHER_FILE: 'OTHER_FILE'
};

export type AttachmentType = (typeof AttachmentType)[keyof typeof AttachmentType]


export const DestinationThread: {
  GROUP: 'GROUP',
  PERSONAL: 'PERSONAL',
  FRIEND: 'FRIEND'
};

export type DestinationThread = (typeof DestinationThread)[keyof typeof DestinationThread]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  CUSTOM: 'CUSTOM'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const LogType: {
  LOGIN: 'LOGIN',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
  LOGOUT: 'LOGOUT'
};

export type LogType = (typeof LogType)[keyof typeof LogType]


export const ReactType: {
  LIKE: 'LIKE',
  HAHA: 'HAHA',
  LOVE: 'LOVE',
  SAD: 'SAD',
  ANGRY: 'ANGRY',
  WOW: 'WOW'
};

export type ReactType = (typeof ReactType)[keyof typeof ReactType]


export const RelationType: {
  FOLLOW: 'FOLLOW',
  FRIEND: 'FRIEND',
  BLOCK: 'BLOCK'
};

export type RelationType = (typeof RelationType)[keyof typeof RelationType]


export const ThreadPrivacy: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
};

export type ThreadPrivacy = (typeof ThreadPrivacy)[keyof typeof ThreadPrivacy]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.relationship`: Exposes CRUD operations for the **relationship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relationships
    * const relationships = await prisma.relationship.findMany()
    * ```
    */
  get relationship(): Prisma.relationshipDelegate<GlobalReject>;

  /**
   * `prisma.userThreads`: Exposes CRUD operations for the **userThreads** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserThreads
    * const userThreads = await prisma.userThreads.findMany()
    * ```
    */
  get userThreads(): Prisma.userThreadsDelegate<GlobalReject>;

  /**
   * `prisma.thread`: Exposes CRUD operations for the **Thread** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Threads
    * const threads = await prisma.thread.findMany()
    * ```
    */
  get thread(): Prisma.ThreadDelegate<GlobalReject>;

  /**
   * `prisma.threadAttachments`: Exposes CRUD operations for the **threadAttachments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ThreadAttachments
    * const threadAttachments = await prisma.threadAttachments.findMany()
    * ```
    */
  get threadAttachments(): Prisma.threadAttachmentsDelegate<GlobalReject>;

  /**
   * `prisma.reaction`: Exposes CRUD operations for the **reaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reactions
    * const reactions = await prisma.reaction.findMany()
    * ```
    */
  get reaction(): Prisma.reactionDelegate<GlobalReject>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<GlobalReject>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;

  /**
   * `prisma.monitoring`: Exposes CRUD operations for the **Monitoring** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monitorings
    * const monitorings = await prisma.monitoring.findMany()
    * ```
    */
  get monitoring(): Prisma.MonitoringDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.0
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    relationship: 'relationship',
    userThreads: 'userThreads',
    Thread: 'Thread',
    threadAttachments: 'threadAttachments',
    reaction: 'reaction',
    Comment: 'Comment',
    Session: 'Session',
    Monitoring: 'Monitoring'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    threadCreated: number
    session: number
    user: number
    relations: number
    monitoring: number
    userThreads: number
    reaction: number
    Comment: number
  }

  export type UserCountOutputTypeSelect = {
    threadCreated?: boolean
    session?: boolean
    user?: boolean
    relations?: boolean
    monitoring?: boolean
    userThreads?: boolean
    reaction?: boolean
    Comment?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type ThreadCountOutputType
   */


  export type ThreadCountOutputType = {
    user: number
    attachment: number
    reaction: number
    Comment: number
  }

  export type ThreadCountOutputTypeSelect = {
    user?: boolean
    attachment?: boolean
    reaction?: boolean
    Comment?: boolean
  }

  export type ThreadCountOutputTypeGetPayload<S extends boolean | null | undefined | ThreadCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ThreadCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ThreadCountOutputTypeArgs)
    ? ThreadCountOutputType 
    : S extends { select: any } & (ThreadCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ThreadCountOutputType ? ThreadCountOutputType[P] : never
  } 
      : ThreadCountOutputType




  // Custom InputTypes

  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ThreadCountOutputType
     * 
    **/
    select?: ThreadCountOutputTypeSelect | null
  }



  /**
   * Count Type CommentCountOutputType
   */


  export type CommentCountOutputType = {
    children: number
    reaction: number
  }

  export type CommentCountOutputTypeSelect = {
    children?: boolean
    reaction?: boolean
  }

  export type CommentCountOutputTypeGetPayload<S extends boolean | null | undefined | CommentCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CommentCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CommentCountOutputTypeArgs)
    ? CommentCountOutputType 
    : S extends { select: any } & (CommentCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CommentCountOutputType ? CommentCountOutputType[P] : never
  } 
      : CommentCountOutputType




  // Custom InputTypes

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     * 
    **/
    select?: CommentCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    userName: string | null
    email: string | null
    firstName: string | null
    surName: string | null
    fullName: string | null
    gender: Gender | null
    birth: Date | null
    avatar: string | null
    cover: string | null
    password: string | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userName: string | null
    email: string | null
    firstName: string | null
    surName: string | null
    fullName: string | null
    gender: Gender | null
    birth: Date | null
    avatar: string | null
    cover: string | null
    password: string | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userName: number
    email: number
    firstName: number
    surName: number
    fullName: number
    gender: number
    birth: number
    avatar: number
    cover: number
    information: number
    password: number
    isActive: number
    isDelete: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    firstName?: true
    surName?: true
    fullName?: true
    gender?: true
    birth?: true
    avatar?: true
    cover?: true
    password?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    firstName?: true
    surName?: true
    fullName?: true
    gender?: true
    birth?: true
    avatar?: true
    cover?: true
    password?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    firstName?: true
    surName?: true
    fullName?: true
    gender?: true
    birth?: true
    avatar?: true
    cover?: true
    information?: true
    password?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    userName: string | null
    email: string
    firstName: string | null
    surName: string | null
    fullName: string | null
    gender: Gender | null
    birth: Date | null
    avatar: string | null
    cover: string | null
    information: JsonValue | null
    password: string
    isActive: boolean
    isDelete: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    userName?: boolean
    email?: boolean
    firstName?: boolean
    surName?: boolean
    fullName?: boolean
    gender?: boolean
    birth?: boolean
    avatar?: boolean
    cover?: boolean
    information?: boolean
    password?: boolean
    threadCreated?: boolean | UserThreadCreatedArgs
    isActive?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | UserSessionArgs
    user?: boolean | UserUserArgs
    relations?: boolean | UserRelationsArgs
    monitoring?: boolean | UserMonitoringArgs
    userThreads?: boolean | UserUserThreadsArgs
    reaction?: boolean | UserReactionArgs
    Comment?: boolean | UserCommentArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    threadCreated?: boolean | UserThreadCreatedArgs
    session?: boolean | UserSessionArgs
    user?: boolean | UserUserArgs
    relations?: boolean | UserRelationsArgs
    monitoring?: boolean | UserMonitoringArgs
    userThreads?: boolean | UserUserThreadsArgs
    reaction?: boolean | UserReactionArgs
    Comment?: boolean | UserCommentArgs
    _count?: boolean | UserCountOutputTypeArgs
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'threadCreated' ? Array < ThreadGetPayload<S['include'][P]>>  :
        P extends 'session' ? Array < SessionGetPayload<S['include'][P]>>  :
        P extends 'user' ? Array < relationshipGetPayload<S['include'][P]>>  :
        P extends 'relations' ? Array < relationshipGetPayload<S['include'][P]>>  :
        P extends 'monitoring' ? Array < MonitoringGetPayload<S['include'][P]>>  :
        P extends 'userThreads' ? Array < userThreadsGetPayload<S['include'][P]>>  :
        P extends 'reaction' ? Array < reactionGetPayload<S['include'][P]>>  :
        P extends 'Comment' ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'threadCreated' ? Array < ThreadGetPayload<S['select'][P]>>  :
        P extends 'session' ? Array < SessionGetPayload<S['select'][P]>>  :
        P extends 'user' ? Array < relationshipGetPayload<S['select'][P]>>  :
        P extends 'relations' ? Array < relationshipGetPayload<S['select'][P]>>  :
        P extends 'monitoring' ? Array < MonitoringGetPayload<S['select'][P]>>  :
        P extends 'userThreads' ? Array < userThreadsGetPayload<S['select'][P]>>  :
        P extends 'reaction' ? Array < reactionGetPayload<S['select'][P]>>  :
        P extends 'Comment' ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    threadCreated<T extends UserThreadCreatedArgs= {}>(args?: Subset<T, UserThreadCreatedArgs>): PrismaPromise<Array<ThreadGetPayload<T>>| Null>;

    session<T extends UserSessionArgs= {}>(args?: Subset<T, UserSessionArgs>): PrismaPromise<Array<SessionGetPayload<T>>| Null>;

    user<T extends UserUserArgs= {}>(args?: Subset<T, UserUserArgs>): PrismaPromise<Array<relationshipGetPayload<T>>| Null>;

    relations<T extends UserRelationsArgs= {}>(args?: Subset<T, UserRelationsArgs>): PrismaPromise<Array<relationshipGetPayload<T>>| Null>;

    monitoring<T extends UserMonitoringArgs= {}>(args?: Subset<T, UserMonitoringArgs>): PrismaPromise<Array<MonitoringGetPayload<T>>| Null>;

    userThreads<T extends UserUserThreadsArgs= {}>(args?: Subset<T, UserUserThreadsArgs>): PrismaPromise<Array<userThreadsGetPayload<T>>| Null>;

    reaction<T extends UserReactionArgs= {}>(args?: Subset<T, UserReactionArgs>): PrismaPromise<Array<reactionGetPayload<T>>| Null>;

    Comment<T extends UserCommentArgs= {}>(args?: Subset<T, UserCommentArgs>): PrismaPromise<Array<CommentGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User.threadCreated
   */
  export type UserThreadCreatedArgs = {
    /**
     * Select specific fields to fetch from the Thread
     * 
    **/
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThreadInclude | null
    where?: ThreadWhereInput
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ThreadScalarFieldEnum>
  }


  /**
   * User.session
   */
  export type UserSessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * User.user
   */
  export type UserUserArgs = {
    /**
     * Select specific fields to fetch from the relationship
     * 
    **/
    select?: relationshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: relationshipInclude | null
    where?: relationshipWhereInput
    orderBy?: Enumerable<relationshipOrderByWithRelationInput>
    cursor?: relationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RelationshipScalarFieldEnum>
  }


  /**
   * User.relations
   */
  export type UserRelationsArgs = {
    /**
     * Select specific fields to fetch from the relationship
     * 
    **/
    select?: relationshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: relationshipInclude | null
    where?: relationshipWhereInput
    orderBy?: Enumerable<relationshipOrderByWithRelationInput>
    cursor?: relationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RelationshipScalarFieldEnum>
  }


  /**
   * User.monitoring
   */
  export type UserMonitoringArgs = {
    /**
     * Select specific fields to fetch from the Monitoring
     * 
    **/
    select?: MonitoringSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MonitoringInclude | null
    where?: MonitoringWhereInput
    orderBy?: Enumerable<MonitoringOrderByWithRelationInput>
    cursor?: MonitoringWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MonitoringScalarFieldEnum>
  }


  /**
   * User.userThreads
   */
  export type UserUserThreadsArgs = {
    /**
     * Select specific fields to fetch from the userThreads
     * 
    **/
    select?: userThreadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userThreadsInclude | null
    where?: userThreadsWhereInput
    orderBy?: Enumerable<userThreadsOrderByWithRelationInput>
    cursor?: userThreadsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserThreadsScalarFieldEnum>
  }


  /**
   * User.reaction
   */
  export type UserReactionArgs = {
    /**
     * Select specific fields to fetch from the reaction
     * 
    **/
    select?: reactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: reactionInclude | null
    where?: reactionWhereInput
    orderBy?: Enumerable<reactionOrderByWithRelationInput>
    cursor?: reactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ReactionScalarFieldEnum>
  }


  /**
   * User.Comment
   */
  export type UserCommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model relationship
   */


  export type AggregateRelationship = {
    _count: RelationshipCountAggregateOutputType | null
    _avg: RelationshipAvgAggregateOutputType | null
    _sum: RelationshipSumAggregateOutputType | null
    _min: RelationshipMinAggregateOutputType | null
    _max: RelationshipMaxAggregateOutputType | null
  }

  export type RelationshipAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
  }

  export type RelationshipSumAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
  }

  export type RelationshipMinAggregateOutputType = {
    id: number | null
    content: string | null
    userId: number | null
    friendId: number | null
    relationType: RelationType | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RelationshipMaxAggregateOutputType = {
    id: number | null
    content: string | null
    userId: number | null
    friendId: number | null
    relationType: RelationType | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RelationshipCountAggregateOutputType = {
    id: number
    content: number
    userId: number
    friendId: number
    relationType: number
    isActive: number
    isDelete: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RelationshipAvgAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
  }

  export type RelationshipSumAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
  }

  export type RelationshipMinAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    friendId?: true
    relationType?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RelationshipMaxAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    friendId?: true
    relationType?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RelationshipCountAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    friendId?: true
    relationType?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RelationshipAggregateArgs = {
    /**
     * Filter which relationship to aggregate.
     * 
    **/
    where?: relationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of relationships to fetch.
     * 
    **/
    orderBy?: Enumerable<relationshipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: relationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` relationships from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` relationships.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned relationships
    **/
    _count?: true | RelationshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RelationshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RelationshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelationshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelationshipMaxAggregateInputType
  }

  export type GetRelationshipAggregateType<T extends RelationshipAggregateArgs> = {
        [P in keyof T & keyof AggregateRelationship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelationship[P]>
      : GetScalarType<T[P], AggregateRelationship[P]>
  }




  export type RelationshipGroupByArgs = {
    where?: relationshipWhereInput
    orderBy?: Enumerable<relationshipOrderByWithAggregationInput>
    by: Array<RelationshipScalarFieldEnum>
    having?: relationshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelationshipCountAggregateInputType | true
    _avg?: RelationshipAvgAggregateInputType
    _sum?: RelationshipSumAggregateInputType
    _min?: RelationshipMinAggregateInputType
    _max?: RelationshipMaxAggregateInputType
  }


  export type RelationshipGroupByOutputType = {
    id: number
    content: string
    userId: number | null
    friendId: number | null
    relationType: RelationType
    isActive: boolean
    isDelete: boolean
    createdAt: Date
    updatedAt: Date
    _count: RelationshipCountAggregateOutputType | null
    _avg: RelationshipAvgAggregateOutputType | null
    _sum: RelationshipSumAggregateOutputType | null
    _min: RelationshipMinAggregateOutputType | null
    _max: RelationshipMaxAggregateOutputType | null
  }

  type GetRelationshipGroupByPayload<T extends RelationshipGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RelationshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelationshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelationshipGroupByOutputType[P]>
            : GetScalarType<T[P], RelationshipGroupByOutputType[P]>
        }
      >
    >


  export type relationshipSelect = {
    id?: boolean
    content?: boolean
    userId?: boolean
    friendId?: boolean
    user?: boolean | UserArgs
    friend?: boolean | UserArgs
    relationType?: boolean
    isActive?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type relationshipInclude = {
    user?: boolean | UserArgs
    friend?: boolean | UserArgs
  } 

  export type relationshipGetPayload<S extends boolean | null | undefined | relationshipArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? relationship :
    S extends undefined ? never :
    S extends { include: any } & (relationshipArgs | relationshipFindManyArgs)
    ? relationship  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :
        P extends 'friend' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (relationshipArgs | relationshipFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :
        P extends 'friend' ? UserGetPayload<S['select'][P]> | null :  P extends keyof relationship ? relationship[P] : never
  } 
      : relationship


  type relationshipCountArgs = Merge<
    Omit<relationshipFindManyArgs, 'select' | 'include'> & {
      select?: RelationshipCountAggregateInputType | true
    }
  >

  export interface relationshipDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Relationship that matches the filter.
     * @param {relationshipFindUniqueArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends relationshipFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, relationshipFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'relationship'> extends True ? Prisma__relationshipClient<relationshipGetPayload<T>> : Prisma__relationshipClient<relationshipGetPayload<T> | null, null>

    /**
     * Find one Relationship that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {relationshipFindUniqueOrThrowArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends relationshipFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, relationshipFindUniqueOrThrowArgs>
    ): Prisma__relationshipClient<relationshipGetPayload<T>>

    /**
     * Find the first Relationship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relationshipFindFirstArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends relationshipFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, relationshipFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'relationship'> extends True ? Prisma__relationshipClient<relationshipGetPayload<T>> : Prisma__relationshipClient<relationshipGetPayload<T> | null, null>

    /**
     * Find the first Relationship that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relationshipFindFirstOrThrowArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends relationshipFindFirstOrThrowArgs>(
      args?: SelectSubset<T, relationshipFindFirstOrThrowArgs>
    ): Prisma__relationshipClient<relationshipGetPayload<T>>

    /**
     * Find zero or more Relationships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relationshipFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relationships
     * const relationships = await prisma.relationship.findMany()
     * 
     * // Get first 10 Relationships
     * const relationships = await prisma.relationship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relationshipWithIdOnly = await prisma.relationship.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends relationshipFindManyArgs>(
      args?: SelectSubset<T, relationshipFindManyArgs>
    ): PrismaPromise<Array<relationshipGetPayload<T>>>

    /**
     * Create a Relationship.
     * @param {relationshipCreateArgs} args - Arguments to create a Relationship.
     * @example
     * // Create one Relationship
     * const Relationship = await prisma.relationship.create({
     *   data: {
     *     // ... data to create a Relationship
     *   }
     * })
     * 
    **/
    create<T extends relationshipCreateArgs>(
      args: SelectSubset<T, relationshipCreateArgs>
    ): Prisma__relationshipClient<relationshipGetPayload<T>>

    /**
     * Create many Relationships.
     *     @param {relationshipCreateManyArgs} args - Arguments to create many Relationships.
     *     @example
     *     // Create many Relationships
     *     const relationship = await prisma.relationship.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends relationshipCreateManyArgs>(
      args?: SelectSubset<T, relationshipCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Relationship.
     * @param {relationshipDeleteArgs} args - Arguments to delete one Relationship.
     * @example
     * // Delete one Relationship
     * const Relationship = await prisma.relationship.delete({
     *   where: {
     *     // ... filter to delete one Relationship
     *   }
     * })
     * 
    **/
    delete<T extends relationshipDeleteArgs>(
      args: SelectSubset<T, relationshipDeleteArgs>
    ): Prisma__relationshipClient<relationshipGetPayload<T>>

    /**
     * Update one Relationship.
     * @param {relationshipUpdateArgs} args - Arguments to update one Relationship.
     * @example
     * // Update one Relationship
     * const relationship = await prisma.relationship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends relationshipUpdateArgs>(
      args: SelectSubset<T, relationshipUpdateArgs>
    ): Prisma__relationshipClient<relationshipGetPayload<T>>

    /**
     * Delete zero or more Relationships.
     * @param {relationshipDeleteManyArgs} args - Arguments to filter Relationships to delete.
     * @example
     * // Delete a few Relationships
     * const { count } = await prisma.relationship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends relationshipDeleteManyArgs>(
      args?: SelectSubset<T, relationshipDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relationships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relationshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relationships
     * const relationship = await prisma.relationship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends relationshipUpdateManyArgs>(
      args: SelectSubset<T, relationshipUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Relationship.
     * @param {relationshipUpsertArgs} args - Arguments to update or create a Relationship.
     * @example
     * // Update or create a Relationship
     * const relationship = await prisma.relationship.upsert({
     *   create: {
     *     // ... data to create a Relationship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relationship we want to update
     *   }
     * })
    **/
    upsert<T extends relationshipUpsertArgs>(
      args: SelectSubset<T, relationshipUpsertArgs>
    ): Prisma__relationshipClient<relationshipGetPayload<T>>

    /**
     * Count the number of Relationships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relationshipCountArgs} args - Arguments to filter Relationships to count.
     * @example
     * // Count the number of Relationships
     * const count = await prisma.relationship.count({
     *   where: {
     *     // ... the filter for the Relationships we want to count
     *   }
     * })
    **/
    count<T extends relationshipCountArgs>(
      args?: Subset<T, relationshipCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelationshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relationship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RelationshipAggregateArgs>(args: Subset<T, RelationshipAggregateArgs>): PrismaPromise<GetRelationshipAggregateType<T>>

    /**
     * Group by Relationship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RelationshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelationshipGroupByArgs['orderBy'] }
        : { orderBy?: RelationshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RelationshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelationshipGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for relationship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__relationshipClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    friend<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * relationship base type for findUnique actions
   */
  export type relationshipFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the relationship
     * 
    **/
    select?: relationshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: relationshipInclude | null
    /**
     * Filter, which relationship to fetch.
     * 
    **/
    where: relationshipWhereUniqueInput
  }

  /**
   * relationship findUnique
   */
  export interface relationshipFindUniqueArgs extends relationshipFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * relationship findUniqueOrThrow
   */
  export type relationshipFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the relationship
     * 
    **/
    select?: relationshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: relationshipInclude | null
    /**
     * Filter, which relationship to fetch.
     * 
    **/
    where: relationshipWhereUniqueInput
  }


  /**
   * relationship base type for findFirst actions
   */
  export type relationshipFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the relationship
     * 
    **/
    select?: relationshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: relationshipInclude | null
    /**
     * Filter, which relationship to fetch.
     * 
    **/
    where?: relationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of relationships to fetch.
     * 
    **/
    orderBy?: Enumerable<relationshipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for relationships.
     * 
    **/
    cursor?: relationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` relationships from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` relationships.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of relationships.
     * 
    **/
    distinct?: Enumerable<RelationshipScalarFieldEnum>
  }

  /**
   * relationship findFirst
   */
  export interface relationshipFindFirstArgs extends relationshipFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * relationship findFirstOrThrow
   */
  export type relationshipFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the relationship
     * 
    **/
    select?: relationshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: relationshipInclude | null
    /**
     * Filter, which relationship to fetch.
     * 
    **/
    where?: relationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of relationships to fetch.
     * 
    **/
    orderBy?: Enumerable<relationshipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for relationships.
     * 
    **/
    cursor?: relationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` relationships from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` relationships.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of relationships.
     * 
    **/
    distinct?: Enumerable<RelationshipScalarFieldEnum>
  }


  /**
   * relationship findMany
   */
  export type relationshipFindManyArgs = {
    /**
     * Select specific fields to fetch from the relationship
     * 
    **/
    select?: relationshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: relationshipInclude | null
    /**
     * Filter, which relationships to fetch.
     * 
    **/
    where?: relationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of relationships to fetch.
     * 
    **/
    orderBy?: Enumerable<relationshipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing relationships.
     * 
    **/
    cursor?: relationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` relationships from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` relationships.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RelationshipScalarFieldEnum>
  }


  /**
   * relationship create
   */
  export type relationshipCreateArgs = {
    /**
     * Select specific fields to fetch from the relationship
     * 
    **/
    select?: relationshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: relationshipInclude | null
    /**
     * The data needed to create a relationship.
     * 
    **/
    data: XOR<relationshipCreateInput, relationshipUncheckedCreateInput>
  }


  /**
   * relationship createMany
   */
  export type relationshipCreateManyArgs = {
    /**
     * The data used to create many relationships.
     * 
    **/
    data: Enumerable<relationshipCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * relationship update
   */
  export type relationshipUpdateArgs = {
    /**
     * Select specific fields to fetch from the relationship
     * 
    **/
    select?: relationshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: relationshipInclude | null
    /**
     * The data needed to update a relationship.
     * 
    **/
    data: XOR<relationshipUpdateInput, relationshipUncheckedUpdateInput>
    /**
     * Choose, which relationship to update.
     * 
    **/
    where: relationshipWhereUniqueInput
  }


  /**
   * relationship updateMany
   */
  export type relationshipUpdateManyArgs = {
    /**
     * The data used to update relationships.
     * 
    **/
    data: XOR<relationshipUpdateManyMutationInput, relationshipUncheckedUpdateManyInput>
    /**
     * Filter which relationships to update
     * 
    **/
    where?: relationshipWhereInput
  }


  /**
   * relationship upsert
   */
  export type relationshipUpsertArgs = {
    /**
     * Select specific fields to fetch from the relationship
     * 
    **/
    select?: relationshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: relationshipInclude | null
    /**
     * The filter to search for the relationship to update in case it exists.
     * 
    **/
    where: relationshipWhereUniqueInput
    /**
     * In case the relationship found by the `where` argument doesn't exist, create a new relationship with this data.
     * 
    **/
    create: XOR<relationshipCreateInput, relationshipUncheckedCreateInput>
    /**
     * In case the relationship was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<relationshipUpdateInput, relationshipUncheckedUpdateInput>
  }


  /**
   * relationship delete
   */
  export type relationshipDeleteArgs = {
    /**
     * Select specific fields to fetch from the relationship
     * 
    **/
    select?: relationshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: relationshipInclude | null
    /**
     * Filter which relationship to delete.
     * 
    **/
    where: relationshipWhereUniqueInput
  }


  /**
   * relationship deleteMany
   */
  export type relationshipDeleteManyArgs = {
    /**
     * Filter which relationships to delete
     * 
    **/
    where?: relationshipWhereInput
  }


  /**
   * relationship without action
   */
  export type relationshipArgs = {
    /**
     * Select specific fields to fetch from the relationship
     * 
    **/
    select?: relationshipSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: relationshipInclude | null
  }



  /**
   * Model userThreads
   */


  export type AggregateUserThreads = {
    _count: UserThreadsCountAggregateOutputType | null
    _avg: UserThreadsAvgAggregateOutputType | null
    _sum: UserThreadsSumAggregateOutputType | null
    _min: UserThreadsMinAggregateOutputType | null
    _max: UserThreadsMaxAggregateOutputType | null
  }

  export type UserThreadsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    threadId: number | null
  }

  export type UserThreadsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    threadId: number | null
  }

  export type UserThreadsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    threadId: number | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserThreadsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    threadId: number | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserThreadsCountAggregateOutputType = {
    id: number
    userId: number
    threadId: number
    isActive: number
    isDelete: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserThreadsAvgAggregateInputType = {
    id?: true
    userId?: true
    threadId?: true
  }

  export type UserThreadsSumAggregateInputType = {
    id?: true
    userId?: true
    threadId?: true
  }

  export type UserThreadsMinAggregateInputType = {
    id?: true
    userId?: true
    threadId?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserThreadsMaxAggregateInputType = {
    id?: true
    userId?: true
    threadId?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserThreadsCountAggregateInputType = {
    id?: true
    userId?: true
    threadId?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserThreadsAggregateArgs = {
    /**
     * Filter which userThreads to aggregate.
     * 
    **/
    where?: userThreadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userThreads to fetch.
     * 
    **/
    orderBy?: Enumerable<userThreadsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: userThreadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userThreads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userThreads.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userThreads
    **/
    _count?: true | UserThreadsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserThreadsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserThreadsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserThreadsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserThreadsMaxAggregateInputType
  }

  export type GetUserThreadsAggregateType<T extends UserThreadsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserThreads]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserThreads[P]>
      : GetScalarType<T[P], AggregateUserThreads[P]>
  }




  export type UserThreadsGroupByArgs = {
    where?: userThreadsWhereInput
    orderBy?: Enumerable<userThreadsOrderByWithAggregationInput>
    by: Array<UserThreadsScalarFieldEnum>
    having?: userThreadsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserThreadsCountAggregateInputType | true
    _avg?: UserThreadsAvgAggregateInputType
    _sum?: UserThreadsSumAggregateInputType
    _min?: UserThreadsMinAggregateInputType
    _max?: UserThreadsMaxAggregateInputType
  }


  export type UserThreadsGroupByOutputType = {
    id: number
    userId: number | null
    threadId: number | null
    isActive: boolean
    isDelete: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserThreadsCountAggregateOutputType | null
    _avg: UserThreadsAvgAggregateOutputType | null
    _sum: UserThreadsSumAggregateOutputType | null
    _min: UserThreadsMinAggregateOutputType | null
    _max: UserThreadsMaxAggregateOutputType | null
  }

  type GetUserThreadsGroupByPayload<T extends UserThreadsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserThreadsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserThreadsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserThreadsGroupByOutputType[P]>
            : GetScalarType<T[P], UserThreadsGroupByOutputType[P]>
        }
      >
    >


  export type userThreadsSelect = {
    id?: boolean
    userId?: boolean
    threadId?: boolean
    user?: boolean | UserArgs
    thread?: boolean | ThreadArgs
    isActive?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type userThreadsInclude = {
    user?: boolean | UserArgs
    thread?: boolean | ThreadArgs
  } 

  export type userThreadsGetPayload<S extends boolean | null | undefined | userThreadsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? userThreads :
    S extends undefined ? never :
    S extends { include: any } & (userThreadsArgs | userThreadsFindManyArgs)
    ? userThreads  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :
        P extends 'thread' ? ThreadGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (userThreadsArgs | userThreadsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :
        P extends 'thread' ? ThreadGetPayload<S['select'][P]> | null :  P extends keyof userThreads ? userThreads[P] : never
  } 
      : userThreads


  type userThreadsCountArgs = Merge<
    Omit<userThreadsFindManyArgs, 'select' | 'include'> & {
      select?: UserThreadsCountAggregateInputType | true
    }
  >

  export interface userThreadsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one UserThreads that matches the filter.
     * @param {userThreadsFindUniqueArgs} args - Arguments to find a UserThreads
     * @example
     * // Get one UserThreads
     * const userThreads = await prisma.userThreads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userThreadsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, userThreadsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'userThreads'> extends True ? Prisma__userThreadsClient<userThreadsGetPayload<T>> : Prisma__userThreadsClient<userThreadsGetPayload<T> | null, null>

    /**
     * Find one UserThreads that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userThreadsFindUniqueOrThrowArgs} args - Arguments to find a UserThreads
     * @example
     * // Get one UserThreads
     * const userThreads = await prisma.userThreads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userThreadsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, userThreadsFindUniqueOrThrowArgs>
    ): Prisma__userThreadsClient<userThreadsGetPayload<T>>

    /**
     * Find the first UserThreads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userThreadsFindFirstArgs} args - Arguments to find a UserThreads
     * @example
     * // Get one UserThreads
     * const userThreads = await prisma.userThreads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userThreadsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, userThreadsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'userThreads'> extends True ? Prisma__userThreadsClient<userThreadsGetPayload<T>> : Prisma__userThreadsClient<userThreadsGetPayload<T> | null, null>

    /**
     * Find the first UserThreads that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userThreadsFindFirstOrThrowArgs} args - Arguments to find a UserThreads
     * @example
     * // Get one UserThreads
     * const userThreads = await prisma.userThreads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userThreadsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, userThreadsFindFirstOrThrowArgs>
    ): Prisma__userThreadsClient<userThreadsGetPayload<T>>

    /**
     * Find zero or more UserThreads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userThreadsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserThreads
     * const userThreads = await prisma.userThreads.findMany()
     * 
     * // Get first 10 UserThreads
     * const userThreads = await prisma.userThreads.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userThreadsWithIdOnly = await prisma.userThreads.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userThreadsFindManyArgs>(
      args?: SelectSubset<T, userThreadsFindManyArgs>
    ): PrismaPromise<Array<userThreadsGetPayload<T>>>

    /**
     * Create a UserThreads.
     * @param {userThreadsCreateArgs} args - Arguments to create a UserThreads.
     * @example
     * // Create one UserThreads
     * const UserThreads = await prisma.userThreads.create({
     *   data: {
     *     // ... data to create a UserThreads
     *   }
     * })
     * 
    **/
    create<T extends userThreadsCreateArgs>(
      args: SelectSubset<T, userThreadsCreateArgs>
    ): Prisma__userThreadsClient<userThreadsGetPayload<T>>

    /**
     * Create many UserThreads.
     *     @param {userThreadsCreateManyArgs} args - Arguments to create many UserThreads.
     *     @example
     *     // Create many UserThreads
     *     const userThreads = await prisma.userThreads.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userThreadsCreateManyArgs>(
      args?: SelectSubset<T, userThreadsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserThreads.
     * @param {userThreadsDeleteArgs} args - Arguments to delete one UserThreads.
     * @example
     * // Delete one UserThreads
     * const UserThreads = await prisma.userThreads.delete({
     *   where: {
     *     // ... filter to delete one UserThreads
     *   }
     * })
     * 
    **/
    delete<T extends userThreadsDeleteArgs>(
      args: SelectSubset<T, userThreadsDeleteArgs>
    ): Prisma__userThreadsClient<userThreadsGetPayload<T>>

    /**
     * Update one UserThreads.
     * @param {userThreadsUpdateArgs} args - Arguments to update one UserThreads.
     * @example
     * // Update one UserThreads
     * const userThreads = await prisma.userThreads.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userThreadsUpdateArgs>(
      args: SelectSubset<T, userThreadsUpdateArgs>
    ): Prisma__userThreadsClient<userThreadsGetPayload<T>>

    /**
     * Delete zero or more UserThreads.
     * @param {userThreadsDeleteManyArgs} args - Arguments to filter UserThreads to delete.
     * @example
     * // Delete a few UserThreads
     * const { count } = await prisma.userThreads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userThreadsDeleteManyArgs>(
      args?: SelectSubset<T, userThreadsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserThreads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userThreadsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserThreads
     * const userThreads = await prisma.userThreads.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userThreadsUpdateManyArgs>(
      args: SelectSubset<T, userThreadsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserThreads.
     * @param {userThreadsUpsertArgs} args - Arguments to update or create a UserThreads.
     * @example
     * // Update or create a UserThreads
     * const userThreads = await prisma.userThreads.upsert({
     *   create: {
     *     // ... data to create a UserThreads
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserThreads we want to update
     *   }
     * })
    **/
    upsert<T extends userThreadsUpsertArgs>(
      args: SelectSubset<T, userThreadsUpsertArgs>
    ): Prisma__userThreadsClient<userThreadsGetPayload<T>>

    /**
     * Count the number of UserThreads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userThreadsCountArgs} args - Arguments to filter UserThreads to count.
     * @example
     * // Count the number of UserThreads
     * const count = await prisma.userThreads.count({
     *   where: {
     *     // ... the filter for the UserThreads we want to count
     *   }
     * })
    **/
    count<T extends userThreadsCountArgs>(
      args?: Subset<T, userThreadsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserThreadsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserThreads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserThreadsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserThreadsAggregateArgs>(args: Subset<T, UserThreadsAggregateArgs>): PrismaPromise<GetUserThreadsAggregateType<T>>

    /**
     * Group by UserThreads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserThreadsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserThreadsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserThreadsGroupByArgs['orderBy'] }
        : { orderBy?: UserThreadsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserThreadsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserThreadsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for userThreads.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__userThreadsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    thread<T extends ThreadArgs= {}>(args?: Subset<T, ThreadArgs>): Prisma__ThreadClient<ThreadGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * userThreads base type for findUnique actions
   */
  export type userThreadsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the userThreads
     * 
    **/
    select?: userThreadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userThreadsInclude | null
    /**
     * Filter, which userThreads to fetch.
     * 
    **/
    where: userThreadsWhereUniqueInput
  }

  /**
   * userThreads findUnique
   */
  export interface userThreadsFindUniqueArgs extends userThreadsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * userThreads findUniqueOrThrow
   */
  export type userThreadsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the userThreads
     * 
    **/
    select?: userThreadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userThreadsInclude | null
    /**
     * Filter, which userThreads to fetch.
     * 
    **/
    where: userThreadsWhereUniqueInput
  }


  /**
   * userThreads base type for findFirst actions
   */
  export type userThreadsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the userThreads
     * 
    **/
    select?: userThreadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userThreadsInclude | null
    /**
     * Filter, which userThreads to fetch.
     * 
    **/
    where?: userThreadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userThreads to fetch.
     * 
    **/
    orderBy?: Enumerable<userThreadsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userThreads.
     * 
    **/
    cursor?: userThreadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userThreads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userThreads.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userThreads.
     * 
    **/
    distinct?: Enumerable<UserThreadsScalarFieldEnum>
  }

  /**
   * userThreads findFirst
   */
  export interface userThreadsFindFirstArgs extends userThreadsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * userThreads findFirstOrThrow
   */
  export type userThreadsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the userThreads
     * 
    **/
    select?: userThreadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userThreadsInclude | null
    /**
     * Filter, which userThreads to fetch.
     * 
    **/
    where?: userThreadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userThreads to fetch.
     * 
    **/
    orderBy?: Enumerable<userThreadsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userThreads.
     * 
    **/
    cursor?: userThreadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userThreads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userThreads.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userThreads.
     * 
    **/
    distinct?: Enumerable<UserThreadsScalarFieldEnum>
  }


  /**
   * userThreads findMany
   */
  export type userThreadsFindManyArgs = {
    /**
     * Select specific fields to fetch from the userThreads
     * 
    **/
    select?: userThreadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userThreadsInclude | null
    /**
     * Filter, which userThreads to fetch.
     * 
    **/
    where?: userThreadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userThreads to fetch.
     * 
    **/
    orderBy?: Enumerable<userThreadsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userThreads.
     * 
    **/
    cursor?: userThreadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userThreads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userThreads.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserThreadsScalarFieldEnum>
  }


  /**
   * userThreads create
   */
  export type userThreadsCreateArgs = {
    /**
     * Select specific fields to fetch from the userThreads
     * 
    **/
    select?: userThreadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userThreadsInclude | null
    /**
     * The data needed to create a userThreads.
     * 
    **/
    data: XOR<userThreadsCreateInput, userThreadsUncheckedCreateInput>
  }


  /**
   * userThreads createMany
   */
  export type userThreadsCreateManyArgs = {
    /**
     * The data used to create many userThreads.
     * 
    **/
    data: Enumerable<userThreadsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * userThreads update
   */
  export type userThreadsUpdateArgs = {
    /**
     * Select specific fields to fetch from the userThreads
     * 
    **/
    select?: userThreadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userThreadsInclude | null
    /**
     * The data needed to update a userThreads.
     * 
    **/
    data: XOR<userThreadsUpdateInput, userThreadsUncheckedUpdateInput>
    /**
     * Choose, which userThreads to update.
     * 
    **/
    where: userThreadsWhereUniqueInput
  }


  /**
   * userThreads updateMany
   */
  export type userThreadsUpdateManyArgs = {
    /**
     * The data used to update userThreads.
     * 
    **/
    data: XOR<userThreadsUpdateManyMutationInput, userThreadsUncheckedUpdateManyInput>
    /**
     * Filter which userThreads to update
     * 
    **/
    where?: userThreadsWhereInput
  }


  /**
   * userThreads upsert
   */
  export type userThreadsUpsertArgs = {
    /**
     * Select specific fields to fetch from the userThreads
     * 
    **/
    select?: userThreadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userThreadsInclude | null
    /**
     * The filter to search for the userThreads to update in case it exists.
     * 
    **/
    where: userThreadsWhereUniqueInput
    /**
     * In case the userThreads found by the `where` argument doesn't exist, create a new userThreads with this data.
     * 
    **/
    create: XOR<userThreadsCreateInput, userThreadsUncheckedCreateInput>
    /**
     * In case the userThreads was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<userThreadsUpdateInput, userThreadsUncheckedUpdateInput>
  }


  /**
   * userThreads delete
   */
  export type userThreadsDeleteArgs = {
    /**
     * Select specific fields to fetch from the userThreads
     * 
    **/
    select?: userThreadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userThreadsInclude | null
    /**
     * Filter which userThreads to delete.
     * 
    **/
    where: userThreadsWhereUniqueInput
  }


  /**
   * userThreads deleteMany
   */
  export type userThreadsDeleteManyArgs = {
    /**
     * Filter which userThreads to delete
     * 
    **/
    where?: userThreadsWhereInput
  }


  /**
   * userThreads without action
   */
  export type userThreadsArgs = {
    /**
     * Select specific fields to fetch from the userThreads
     * 
    **/
    select?: userThreadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userThreadsInclude | null
  }



  /**
   * Model Thread
   */


  export type AggregateThread = {
    _count: ThreadCountAggregateOutputType | null
    _avg: ThreadAvgAggregateOutputType | null
    _sum: ThreadSumAggregateOutputType | null
    _min: ThreadMinAggregateOutputType | null
    _max: ThreadMaxAggregateOutputType | null
  }

  export type ThreadAvgAggregateOutputType = {
    id: number | null
    totalReact: number | null
    totalComment: number | null
    authorId: number | null
  }

  export type ThreadSumAggregateOutputType = {
    id: number | null
    totalReact: number | null
    totalComment: number | null
    authorId: number | null
  }

  export type ThreadMinAggregateOutputType = {
    id: number | null
    content: string | null
    totalReact: number | null
    totalComment: number | null
    authorId: number | null
    privacy: ThreadPrivacy | null
    destination: DestinationThread | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ThreadMaxAggregateOutputType = {
    id: number | null
    content: string | null
    totalReact: number | null
    totalComment: number | null
    authorId: number | null
    privacy: ThreadPrivacy | null
    destination: DestinationThread | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ThreadCountAggregateOutputType = {
    id: number
    content: number
    totalReact: number
    totalComment: number
    authorId: number
    privacy: number
    destination: number
    isActive: number
    isDelete: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ThreadAvgAggregateInputType = {
    id?: true
    totalReact?: true
    totalComment?: true
    authorId?: true
  }

  export type ThreadSumAggregateInputType = {
    id?: true
    totalReact?: true
    totalComment?: true
    authorId?: true
  }

  export type ThreadMinAggregateInputType = {
    id?: true
    content?: true
    totalReact?: true
    totalComment?: true
    authorId?: true
    privacy?: true
    destination?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ThreadMaxAggregateInputType = {
    id?: true
    content?: true
    totalReact?: true
    totalComment?: true
    authorId?: true
    privacy?: true
    destination?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ThreadCountAggregateInputType = {
    id?: true
    content?: true
    totalReact?: true
    totalComment?: true
    authorId?: true
    privacy?: true
    destination?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ThreadAggregateArgs = {
    /**
     * Filter which Thread to aggregate.
     * 
    **/
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     * 
    **/
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Threads
    **/
    _count?: true | ThreadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThreadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThreadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThreadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThreadMaxAggregateInputType
  }

  export type GetThreadAggregateType<T extends ThreadAggregateArgs> = {
        [P in keyof T & keyof AggregateThread]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThread[P]>
      : GetScalarType<T[P], AggregateThread[P]>
  }




  export type ThreadGroupByArgs = {
    where?: ThreadWhereInput
    orderBy?: Enumerable<ThreadOrderByWithAggregationInput>
    by: Array<ThreadScalarFieldEnum>
    having?: ThreadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThreadCountAggregateInputType | true
    _avg?: ThreadAvgAggregateInputType
    _sum?: ThreadSumAggregateInputType
    _min?: ThreadMinAggregateInputType
    _max?: ThreadMaxAggregateInputType
  }


  export type ThreadGroupByOutputType = {
    id: number
    content: string
    totalReact: number | null
    totalComment: number | null
    authorId: number | null
    privacy: ThreadPrivacy
    destination: DestinationThread
    isActive: boolean
    isDelete: boolean
    createdAt: Date
    updatedAt: Date
    _count: ThreadCountAggregateOutputType | null
    _avg: ThreadAvgAggregateOutputType | null
    _sum: ThreadSumAggregateOutputType | null
    _min: ThreadMinAggregateOutputType | null
    _max: ThreadMaxAggregateOutputType | null
  }

  type GetThreadGroupByPayload<T extends ThreadGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ThreadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThreadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThreadGroupByOutputType[P]>
            : GetScalarType<T[P], ThreadGroupByOutputType[P]>
        }
      >
    >


  export type ThreadSelect = {
    id?: boolean
    content?: boolean
    totalReact?: boolean
    totalComment?: boolean
    authorId?: boolean
    author?: boolean | UserArgs
    privacy?: boolean
    destination?: boolean
    isActive?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ThreadUserArgs
    attachment?: boolean | ThreadAttachmentArgs
    reaction?: boolean | ThreadReactionArgs
    Comment?: boolean | ThreadCommentArgs
    _count?: boolean | ThreadCountOutputTypeArgs
  }


  export type ThreadInclude = {
    author?: boolean | UserArgs
    user?: boolean | ThreadUserArgs
    attachment?: boolean | ThreadAttachmentArgs
    reaction?: boolean | ThreadReactionArgs
    Comment?: boolean | ThreadCommentArgs
    _count?: boolean | ThreadCountOutputTypeArgs
  } 

  export type ThreadGetPayload<S extends boolean | null | undefined | ThreadArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Thread :
    S extends undefined ? never :
    S extends { include: any } & (ThreadArgs | ThreadFindManyArgs)
    ? Thread  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'author' ? UserGetPayload<S['include'][P]> | null :
        P extends 'user' ? Array < userThreadsGetPayload<S['include'][P]>>  :
        P extends 'attachment' ? Array < threadAttachmentsGetPayload<S['include'][P]>>  :
        P extends 'reaction' ? Array < reactionGetPayload<S['include'][P]>>  :
        P extends 'Comment' ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends '_count' ? ThreadCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ThreadArgs | ThreadFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? UserGetPayload<S['select'][P]> | null :
        P extends 'user' ? Array < userThreadsGetPayload<S['select'][P]>>  :
        P extends 'attachment' ? Array < threadAttachmentsGetPayload<S['select'][P]>>  :
        P extends 'reaction' ? Array < reactionGetPayload<S['select'][P]>>  :
        P extends 'Comment' ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends '_count' ? ThreadCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Thread ? Thread[P] : never
  } 
      : Thread


  type ThreadCountArgs = Merge<
    Omit<ThreadFindManyArgs, 'select' | 'include'> & {
      select?: ThreadCountAggregateInputType | true
    }
  >

  export interface ThreadDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Thread that matches the filter.
     * @param {ThreadFindUniqueArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ThreadFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ThreadFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Thread'> extends True ? Prisma__ThreadClient<ThreadGetPayload<T>> : Prisma__ThreadClient<ThreadGetPayload<T> | null, null>

    /**
     * Find one Thread that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ThreadFindUniqueOrThrowArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ThreadFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ThreadFindUniqueOrThrowArgs>
    ): Prisma__ThreadClient<ThreadGetPayload<T>>

    /**
     * Find the first Thread that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindFirstArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ThreadFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ThreadFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Thread'> extends True ? Prisma__ThreadClient<ThreadGetPayload<T>> : Prisma__ThreadClient<ThreadGetPayload<T> | null, null>

    /**
     * Find the first Thread that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindFirstOrThrowArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ThreadFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ThreadFindFirstOrThrowArgs>
    ): Prisma__ThreadClient<ThreadGetPayload<T>>

    /**
     * Find zero or more Threads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Threads
     * const threads = await prisma.thread.findMany()
     * 
     * // Get first 10 Threads
     * const threads = await prisma.thread.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const threadWithIdOnly = await prisma.thread.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ThreadFindManyArgs>(
      args?: SelectSubset<T, ThreadFindManyArgs>
    ): PrismaPromise<Array<ThreadGetPayload<T>>>

    /**
     * Create a Thread.
     * @param {ThreadCreateArgs} args - Arguments to create a Thread.
     * @example
     * // Create one Thread
     * const Thread = await prisma.thread.create({
     *   data: {
     *     // ... data to create a Thread
     *   }
     * })
     * 
    **/
    create<T extends ThreadCreateArgs>(
      args: SelectSubset<T, ThreadCreateArgs>
    ): Prisma__ThreadClient<ThreadGetPayload<T>>

    /**
     * Create many Threads.
     *     @param {ThreadCreateManyArgs} args - Arguments to create many Threads.
     *     @example
     *     // Create many Threads
     *     const thread = await prisma.thread.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ThreadCreateManyArgs>(
      args?: SelectSubset<T, ThreadCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Thread.
     * @param {ThreadDeleteArgs} args - Arguments to delete one Thread.
     * @example
     * // Delete one Thread
     * const Thread = await prisma.thread.delete({
     *   where: {
     *     // ... filter to delete one Thread
     *   }
     * })
     * 
    **/
    delete<T extends ThreadDeleteArgs>(
      args: SelectSubset<T, ThreadDeleteArgs>
    ): Prisma__ThreadClient<ThreadGetPayload<T>>

    /**
     * Update one Thread.
     * @param {ThreadUpdateArgs} args - Arguments to update one Thread.
     * @example
     * // Update one Thread
     * const thread = await prisma.thread.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ThreadUpdateArgs>(
      args: SelectSubset<T, ThreadUpdateArgs>
    ): Prisma__ThreadClient<ThreadGetPayload<T>>

    /**
     * Delete zero or more Threads.
     * @param {ThreadDeleteManyArgs} args - Arguments to filter Threads to delete.
     * @example
     * // Delete a few Threads
     * const { count } = await prisma.thread.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ThreadDeleteManyArgs>(
      args?: SelectSubset<T, ThreadDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Threads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Threads
     * const thread = await prisma.thread.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ThreadUpdateManyArgs>(
      args: SelectSubset<T, ThreadUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Thread.
     * @param {ThreadUpsertArgs} args - Arguments to update or create a Thread.
     * @example
     * // Update or create a Thread
     * const thread = await prisma.thread.upsert({
     *   create: {
     *     // ... data to create a Thread
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thread we want to update
     *   }
     * })
    **/
    upsert<T extends ThreadUpsertArgs>(
      args: SelectSubset<T, ThreadUpsertArgs>
    ): Prisma__ThreadClient<ThreadGetPayload<T>>

    /**
     * Count the number of Threads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadCountArgs} args - Arguments to filter Threads to count.
     * @example
     * // Count the number of Threads
     * const count = await prisma.thread.count({
     *   where: {
     *     // ... the filter for the Threads we want to count
     *   }
     * })
    **/
    count<T extends ThreadCountArgs>(
      args?: Subset<T, ThreadCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThreadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThreadAggregateArgs>(args: Subset<T, ThreadAggregateArgs>): PrismaPromise<GetThreadAggregateType<T>>

    /**
     * Group by Thread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThreadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThreadGroupByArgs['orderBy'] }
        : { orderBy?: ThreadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThreadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThreadGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Thread.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ThreadClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    user<T extends ThreadUserArgs= {}>(args?: Subset<T, ThreadUserArgs>): PrismaPromise<Array<userThreadsGetPayload<T>>| Null>;

    attachment<T extends ThreadAttachmentArgs= {}>(args?: Subset<T, ThreadAttachmentArgs>): PrismaPromise<Array<threadAttachmentsGetPayload<T>>| Null>;

    reaction<T extends ThreadReactionArgs= {}>(args?: Subset<T, ThreadReactionArgs>): PrismaPromise<Array<reactionGetPayload<T>>| Null>;

    Comment<T extends ThreadCommentArgs= {}>(args?: Subset<T, ThreadCommentArgs>): PrismaPromise<Array<CommentGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Thread base type for findUnique actions
   */
  export type ThreadFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Thread
     * 
    **/
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThreadInclude | null
    /**
     * Filter, which Thread to fetch.
     * 
    **/
    where: ThreadWhereUniqueInput
  }

  /**
   * Thread findUnique
   */
  export interface ThreadFindUniqueArgs extends ThreadFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Thread findUniqueOrThrow
   */
  export type ThreadFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Thread
     * 
    **/
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThreadInclude | null
    /**
     * Filter, which Thread to fetch.
     * 
    **/
    where: ThreadWhereUniqueInput
  }


  /**
   * Thread base type for findFirst actions
   */
  export type ThreadFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Thread
     * 
    **/
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThreadInclude | null
    /**
     * Filter, which Thread to fetch.
     * 
    **/
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     * 
    **/
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Threads.
     * 
    **/
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Threads.
     * 
    **/
    distinct?: Enumerable<ThreadScalarFieldEnum>
  }

  /**
   * Thread findFirst
   */
  export interface ThreadFindFirstArgs extends ThreadFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Thread findFirstOrThrow
   */
  export type ThreadFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Thread
     * 
    **/
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThreadInclude | null
    /**
     * Filter, which Thread to fetch.
     * 
    **/
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     * 
    **/
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Threads.
     * 
    **/
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Threads.
     * 
    **/
    distinct?: Enumerable<ThreadScalarFieldEnum>
  }


  /**
   * Thread findMany
   */
  export type ThreadFindManyArgs = {
    /**
     * Select specific fields to fetch from the Thread
     * 
    **/
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThreadInclude | null
    /**
     * Filter, which Threads to fetch.
     * 
    **/
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     * 
    **/
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Threads.
     * 
    **/
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ThreadScalarFieldEnum>
  }


  /**
   * Thread create
   */
  export type ThreadCreateArgs = {
    /**
     * Select specific fields to fetch from the Thread
     * 
    **/
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThreadInclude | null
    /**
     * The data needed to create a Thread.
     * 
    **/
    data: XOR<ThreadCreateInput, ThreadUncheckedCreateInput>
  }


  /**
   * Thread createMany
   */
  export type ThreadCreateManyArgs = {
    /**
     * The data used to create many Threads.
     * 
    **/
    data: Enumerable<ThreadCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Thread update
   */
  export type ThreadUpdateArgs = {
    /**
     * Select specific fields to fetch from the Thread
     * 
    **/
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThreadInclude | null
    /**
     * The data needed to update a Thread.
     * 
    **/
    data: XOR<ThreadUpdateInput, ThreadUncheckedUpdateInput>
    /**
     * Choose, which Thread to update.
     * 
    **/
    where: ThreadWhereUniqueInput
  }


  /**
   * Thread updateMany
   */
  export type ThreadUpdateManyArgs = {
    /**
     * The data used to update Threads.
     * 
    **/
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyInput>
    /**
     * Filter which Threads to update
     * 
    **/
    where?: ThreadWhereInput
  }


  /**
   * Thread upsert
   */
  export type ThreadUpsertArgs = {
    /**
     * Select specific fields to fetch from the Thread
     * 
    **/
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThreadInclude | null
    /**
     * The filter to search for the Thread to update in case it exists.
     * 
    **/
    where: ThreadWhereUniqueInput
    /**
     * In case the Thread found by the `where` argument doesn't exist, create a new Thread with this data.
     * 
    **/
    create: XOR<ThreadCreateInput, ThreadUncheckedCreateInput>
    /**
     * In case the Thread was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ThreadUpdateInput, ThreadUncheckedUpdateInput>
  }


  /**
   * Thread delete
   */
  export type ThreadDeleteArgs = {
    /**
     * Select specific fields to fetch from the Thread
     * 
    **/
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThreadInclude | null
    /**
     * Filter which Thread to delete.
     * 
    **/
    where: ThreadWhereUniqueInput
  }


  /**
   * Thread deleteMany
   */
  export type ThreadDeleteManyArgs = {
    /**
     * Filter which Threads to delete
     * 
    **/
    where?: ThreadWhereInput
  }


  /**
   * Thread.user
   */
  export type ThreadUserArgs = {
    /**
     * Select specific fields to fetch from the userThreads
     * 
    **/
    select?: userThreadsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userThreadsInclude | null
    where?: userThreadsWhereInput
    orderBy?: Enumerable<userThreadsOrderByWithRelationInput>
    cursor?: userThreadsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserThreadsScalarFieldEnum>
  }


  /**
   * Thread.attachment
   */
  export type ThreadAttachmentArgs = {
    /**
     * Select specific fields to fetch from the threadAttachments
     * 
    **/
    select?: threadAttachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: threadAttachmentsInclude | null
    where?: threadAttachmentsWhereInput
    orderBy?: Enumerable<threadAttachmentsOrderByWithRelationInput>
    cursor?: threadAttachmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ThreadAttachmentsScalarFieldEnum>
  }


  /**
   * Thread.reaction
   */
  export type ThreadReactionArgs = {
    /**
     * Select specific fields to fetch from the reaction
     * 
    **/
    select?: reactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: reactionInclude | null
    where?: reactionWhereInput
    orderBy?: Enumerable<reactionOrderByWithRelationInput>
    cursor?: reactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ReactionScalarFieldEnum>
  }


  /**
   * Thread.Comment
   */
  export type ThreadCommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Thread without action
   */
  export type ThreadArgs = {
    /**
     * Select specific fields to fetch from the Thread
     * 
    **/
    select?: ThreadSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ThreadInclude | null
  }



  /**
   * Model threadAttachments
   */


  export type AggregateThreadAttachments = {
    _count: ThreadAttachmentsCountAggregateOutputType | null
    _avg: ThreadAttachmentsAvgAggregateOutputType | null
    _sum: ThreadAttachmentsSumAggregateOutputType | null
    _min: ThreadAttachmentsMinAggregateOutputType | null
    _max: ThreadAttachmentsMaxAggregateOutputType | null
  }

  export type ThreadAttachmentsAvgAggregateOutputType = {
    id: number | null
    threadId: number | null
  }

  export type ThreadAttachmentsSumAggregateOutputType = {
    id: number | null
    threadId: number | null
  }

  export type ThreadAttachmentsMinAggregateOutputType = {
    id: number | null
    link: string | null
    type: AttachmentType | null
    threadId: number | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ThreadAttachmentsMaxAggregateOutputType = {
    id: number | null
    link: string | null
    type: AttachmentType | null
    threadId: number | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ThreadAttachmentsCountAggregateOutputType = {
    id: number
    link: number
    type: number
    threadId: number
    isActive: number
    isDelete: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ThreadAttachmentsAvgAggregateInputType = {
    id?: true
    threadId?: true
  }

  export type ThreadAttachmentsSumAggregateInputType = {
    id?: true
    threadId?: true
  }

  export type ThreadAttachmentsMinAggregateInputType = {
    id?: true
    link?: true
    type?: true
    threadId?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ThreadAttachmentsMaxAggregateInputType = {
    id?: true
    link?: true
    type?: true
    threadId?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ThreadAttachmentsCountAggregateInputType = {
    id?: true
    link?: true
    type?: true
    threadId?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ThreadAttachmentsAggregateArgs = {
    /**
     * Filter which threadAttachments to aggregate.
     * 
    **/
    where?: threadAttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of threadAttachments to fetch.
     * 
    **/
    orderBy?: Enumerable<threadAttachmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: threadAttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` threadAttachments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` threadAttachments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned threadAttachments
    **/
    _count?: true | ThreadAttachmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThreadAttachmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThreadAttachmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThreadAttachmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThreadAttachmentsMaxAggregateInputType
  }

  export type GetThreadAttachmentsAggregateType<T extends ThreadAttachmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateThreadAttachments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThreadAttachments[P]>
      : GetScalarType<T[P], AggregateThreadAttachments[P]>
  }




  export type ThreadAttachmentsGroupByArgs = {
    where?: threadAttachmentsWhereInput
    orderBy?: Enumerable<threadAttachmentsOrderByWithAggregationInput>
    by: Array<ThreadAttachmentsScalarFieldEnum>
    having?: threadAttachmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThreadAttachmentsCountAggregateInputType | true
    _avg?: ThreadAttachmentsAvgAggregateInputType
    _sum?: ThreadAttachmentsSumAggregateInputType
    _min?: ThreadAttachmentsMinAggregateInputType
    _max?: ThreadAttachmentsMaxAggregateInputType
  }


  export type ThreadAttachmentsGroupByOutputType = {
    id: number
    link: string
    type: AttachmentType
    threadId: number | null
    isActive: boolean
    isDelete: boolean
    createdAt: Date
    updatedAt: Date
    _count: ThreadAttachmentsCountAggregateOutputType | null
    _avg: ThreadAttachmentsAvgAggregateOutputType | null
    _sum: ThreadAttachmentsSumAggregateOutputType | null
    _min: ThreadAttachmentsMinAggregateOutputType | null
    _max: ThreadAttachmentsMaxAggregateOutputType | null
  }

  type GetThreadAttachmentsGroupByPayload<T extends ThreadAttachmentsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ThreadAttachmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThreadAttachmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThreadAttachmentsGroupByOutputType[P]>
            : GetScalarType<T[P], ThreadAttachmentsGroupByOutputType[P]>
        }
      >
    >


  export type threadAttachmentsSelect = {
    id?: boolean
    link?: boolean
    type?: boolean
    threadId?: boolean
    thread?: boolean | ThreadArgs
    isActive?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type threadAttachmentsInclude = {
    thread?: boolean | ThreadArgs
  } 

  export type threadAttachmentsGetPayload<S extends boolean | null | undefined | threadAttachmentsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? threadAttachments :
    S extends undefined ? never :
    S extends { include: any } & (threadAttachmentsArgs | threadAttachmentsFindManyArgs)
    ? threadAttachments  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'thread' ? ThreadGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (threadAttachmentsArgs | threadAttachmentsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'thread' ? ThreadGetPayload<S['select'][P]> | null :  P extends keyof threadAttachments ? threadAttachments[P] : never
  } 
      : threadAttachments


  type threadAttachmentsCountArgs = Merge<
    Omit<threadAttachmentsFindManyArgs, 'select' | 'include'> & {
      select?: ThreadAttachmentsCountAggregateInputType | true
    }
  >

  export interface threadAttachmentsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ThreadAttachments that matches the filter.
     * @param {threadAttachmentsFindUniqueArgs} args - Arguments to find a ThreadAttachments
     * @example
     * // Get one ThreadAttachments
     * const threadAttachments = await prisma.threadAttachments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends threadAttachmentsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, threadAttachmentsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'threadAttachments'> extends True ? Prisma__threadAttachmentsClient<threadAttachmentsGetPayload<T>> : Prisma__threadAttachmentsClient<threadAttachmentsGetPayload<T> | null, null>

    /**
     * Find one ThreadAttachments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {threadAttachmentsFindUniqueOrThrowArgs} args - Arguments to find a ThreadAttachments
     * @example
     * // Get one ThreadAttachments
     * const threadAttachments = await prisma.threadAttachments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends threadAttachmentsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, threadAttachmentsFindUniqueOrThrowArgs>
    ): Prisma__threadAttachmentsClient<threadAttachmentsGetPayload<T>>

    /**
     * Find the first ThreadAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threadAttachmentsFindFirstArgs} args - Arguments to find a ThreadAttachments
     * @example
     * // Get one ThreadAttachments
     * const threadAttachments = await prisma.threadAttachments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends threadAttachmentsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, threadAttachmentsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'threadAttachments'> extends True ? Prisma__threadAttachmentsClient<threadAttachmentsGetPayload<T>> : Prisma__threadAttachmentsClient<threadAttachmentsGetPayload<T> | null, null>

    /**
     * Find the first ThreadAttachments that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threadAttachmentsFindFirstOrThrowArgs} args - Arguments to find a ThreadAttachments
     * @example
     * // Get one ThreadAttachments
     * const threadAttachments = await prisma.threadAttachments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends threadAttachmentsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, threadAttachmentsFindFirstOrThrowArgs>
    ): Prisma__threadAttachmentsClient<threadAttachmentsGetPayload<T>>

    /**
     * Find zero or more ThreadAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threadAttachmentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ThreadAttachments
     * const threadAttachments = await prisma.threadAttachments.findMany()
     * 
     * // Get first 10 ThreadAttachments
     * const threadAttachments = await prisma.threadAttachments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const threadAttachmentsWithIdOnly = await prisma.threadAttachments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends threadAttachmentsFindManyArgs>(
      args?: SelectSubset<T, threadAttachmentsFindManyArgs>
    ): PrismaPromise<Array<threadAttachmentsGetPayload<T>>>

    /**
     * Create a ThreadAttachments.
     * @param {threadAttachmentsCreateArgs} args - Arguments to create a ThreadAttachments.
     * @example
     * // Create one ThreadAttachments
     * const ThreadAttachments = await prisma.threadAttachments.create({
     *   data: {
     *     // ... data to create a ThreadAttachments
     *   }
     * })
     * 
    **/
    create<T extends threadAttachmentsCreateArgs>(
      args: SelectSubset<T, threadAttachmentsCreateArgs>
    ): Prisma__threadAttachmentsClient<threadAttachmentsGetPayload<T>>

    /**
     * Create many ThreadAttachments.
     *     @param {threadAttachmentsCreateManyArgs} args - Arguments to create many ThreadAttachments.
     *     @example
     *     // Create many ThreadAttachments
     *     const threadAttachments = await prisma.threadAttachments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends threadAttachmentsCreateManyArgs>(
      args?: SelectSubset<T, threadAttachmentsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ThreadAttachments.
     * @param {threadAttachmentsDeleteArgs} args - Arguments to delete one ThreadAttachments.
     * @example
     * // Delete one ThreadAttachments
     * const ThreadAttachments = await prisma.threadAttachments.delete({
     *   where: {
     *     // ... filter to delete one ThreadAttachments
     *   }
     * })
     * 
    **/
    delete<T extends threadAttachmentsDeleteArgs>(
      args: SelectSubset<T, threadAttachmentsDeleteArgs>
    ): Prisma__threadAttachmentsClient<threadAttachmentsGetPayload<T>>

    /**
     * Update one ThreadAttachments.
     * @param {threadAttachmentsUpdateArgs} args - Arguments to update one ThreadAttachments.
     * @example
     * // Update one ThreadAttachments
     * const threadAttachments = await prisma.threadAttachments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends threadAttachmentsUpdateArgs>(
      args: SelectSubset<T, threadAttachmentsUpdateArgs>
    ): Prisma__threadAttachmentsClient<threadAttachmentsGetPayload<T>>

    /**
     * Delete zero or more ThreadAttachments.
     * @param {threadAttachmentsDeleteManyArgs} args - Arguments to filter ThreadAttachments to delete.
     * @example
     * // Delete a few ThreadAttachments
     * const { count } = await prisma.threadAttachments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends threadAttachmentsDeleteManyArgs>(
      args?: SelectSubset<T, threadAttachmentsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ThreadAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threadAttachmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ThreadAttachments
     * const threadAttachments = await prisma.threadAttachments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends threadAttachmentsUpdateManyArgs>(
      args: SelectSubset<T, threadAttachmentsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ThreadAttachments.
     * @param {threadAttachmentsUpsertArgs} args - Arguments to update or create a ThreadAttachments.
     * @example
     * // Update or create a ThreadAttachments
     * const threadAttachments = await prisma.threadAttachments.upsert({
     *   create: {
     *     // ... data to create a ThreadAttachments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ThreadAttachments we want to update
     *   }
     * })
    **/
    upsert<T extends threadAttachmentsUpsertArgs>(
      args: SelectSubset<T, threadAttachmentsUpsertArgs>
    ): Prisma__threadAttachmentsClient<threadAttachmentsGetPayload<T>>

    /**
     * Count the number of ThreadAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {threadAttachmentsCountArgs} args - Arguments to filter ThreadAttachments to count.
     * @example
     * // Count the number of ThreadAttachments
     * const count = await prisma.threadAttachments.count({
     *   where: {
     *     // ... the filter for the ThreadAttachments we want to count
     *   }
     * })
    **/
    count<T extends threadAttachmentsCountArgs>(
      args?: Subset<T, threadAttachmentsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThreadAttachmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ThreadAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadAttachmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThreadAttachmentsAggregateArgs>(args: Subset<T, ThreadAttachmentsAggregateArgs>): PrismaPromise<GetThreadAttachmentsAggregateType<T>>

    /**
     * Group by ThreadAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadAttachmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThreadAttachmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThreadAttachmentsGroupByArgs['orderBy'] }
        : { orderBy?: ThreadAttachmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThreadAttachmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThreadAttachmentsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for threadAttachments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__threadAttachmentsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    thread<T extends ThreadArgs= {}>(args?: Subset<T, ThreadArgs>): Prisma__ThreadClient<ThreadGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * threadAttachments base type for findUnique actions
   */
  export type threadAttachmentsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the threadAttachments
     * 
    **/
    select?: threadAttachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: threadAttachmentsInclude | null
    /**
     * Filter, which threadAttachments to fetch.
     * 
    **/
    where: threadAttachmentsWhereUniqueInput
  }

  /**
   * threadAttachments findUnique
   */
  export interface threadAttachmentsFindUniqueArgs extends threadAttachmentsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * threadAttachments findUniqueOrThrow
   */
  export type threadAttachmentsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the threadAttachments
     * 
    **/
    select?: threadAttachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: threadAttachmentsInclude | null
    /**
     * Filter, which threadAttachments to fetch.
     * 
    **/
    where: threadAttachmentsWhereUniqueInput
  }


  /**
   * threadAttachments base type for findFirst actions
   */
  export type threadAttachmentsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the threadAttachments
     * 
    **/
    select?: threadAttachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: threadAttachmentsInclude | null
    /**
     * Filter, which threadAttachments to fetch.
     * 
    **/
    where?: threadAttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of threadAttachments to fetch.
     * 
    **/
    orderBy?: Enumerable<threadAttachmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for threadAttachments.
     * 
    **/
    cursor?: threadAttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` threadAttachments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` threadAttachments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of threadAttachments.
     * 
    **/
    distinct?: Enumerable<ThreadAttachmentsScalarFieldEnum>
  }

  /**
   * threadAttachments findFirst
   */
  export interface threadAttachmentsFindFirstArgs extends threadAttachmentsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * threadAttachments findFirstOrThrow
   */
  export type threadAttachmentsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the threadAttachments
     * 
    **/
    select?: threadAttachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: threadAttachmentsInclude | null
    /**
     * Filter, which threadAttachments to fetch.
     * 
    **/
    where?: threadAttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of threadAttachments to fetch.
     * 
    **/
    orderBy?: Enumerable<threadAttachmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for threadAttachments.
     * 
    **/
    cursor?: threadAttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` threadAttachments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` threadAttachments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of threadAttachments.
     * 
    **/
    distinct?: Enumerable<ThreadAttachmentsScalarFieldEnum>
  }


  /**
   * threadAttachments findMany
   */
  export type threadAttachmentsFindManyArgs = {
    /**
     * Select specific fields to fetch from the threadAttachments
     * 
    **/
    select?: threadAttachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: threadAttachmentsInclude | null
    /**
     * Filter, which threadAttachments to fetch.
     * 
    **/
    where?: threadAttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of threadAttachments to fetch.
     * 
    **/
    orderBy?: Enumerable<threadAttachmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing threadAttachments.
     * 
    **/
    cursor?: threadAttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` threadAttachments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` threadAttachments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ThreadAttachmentsScalarFieldEnum>
  }


  /**
   * threadAttachments create
   */
  export type threadAttachmentsCreateArgs = {
    /**
     * Select specific fields to fetch from the threadAttachments
     * 
    **/
    select?: threadAttachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: threadAttachmentsInclude | null
    /**
     * The data needed to create a threadAttachments.
     * 
    **/
    data: XOR<threadAttachmentsCreateInput, threadAttachmentsUncheckedCreateInput>
  }


  /**
   * threadAttachments createMany
   */
  export type threadAttachmentsCreateManyArgs = {
    /**
     * The data used to create many threadAttachments.
     * 
    **/
    data: Enumerable<threadAttachmentsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * threadAttachments update
   */
  export type threadAttachmentsUpdateArgs = {
    /**
     * Select specific fields to fetch from the threadAttachments
     * 
    **/
    select?: threadAttachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: threadAttachmentsInclude | null
    /**
     * The data needed to update a threadAttachments.
     * 
    **/
    data: XOR<threadAttachmentsUpdateInput, threadAttachmentsUncheckedUpdateInput>
    /**
     * Choose, which threadAttachments to update.
     * 
    **/
    where: threadAttachmentsWhereUniqueInput
  }


  /**
   * threadAttachments updateMany
   */
  export type threadAttachmentsUpdateManyArgs = {
    /**
     * The data used to update threadAttachments.
     * 
    **/
    data: XOR<threadAttachmentsUpdateManyMutationInput, threadAttachmentsUncheckedUpdateManyInput>
    /**
     * Filter which threadAttachments to update
     * 
    **/
    where?: threadAttachmentsWhereInput
  }


  /**
   * threadAttachments upsert
   */
  export type threadAttachmentsUpsertArgs = {
    /**
     * Select specific fields to fetch from the threadAttachments
     * 
    **/
    select?: threadAttachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: threadAttachmentsInclude | null
    /**
     * The filter to search for the threadAttachments to update in case it exists.
     * 
    **/
    where: threadAttachmentsWhereUniqueInput
    /**
     * In case the threadAttachments found by the `where` argument doesn't exist, create a new threadAttachments with this data.
     * 
    **/
    create: XOR<threadAttachmentsCreateInput, threadAttachmentsUncheckedCreateInput>
    /**
     * In case the threadAttachments was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<threadAttachmentsUpdateInput, threadAttachmentsUncheckedUpdateInput>
  }


  /**
   * threadAttachments delete
   */
  export type threadAttachmentsDeleteArgs = {
    /**
     * Select specific fields to fetch from the threadAttachments
     * 
    **/
    select?: threadAttachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: threadAttachmentsInclude | null
    /**
     * Filter which threadAttachments to delete.
     * 
    **/
    where: threadAttachmentsWhereUniqueInput
  }


  /**
   * threadAttachments deleteMany
   */
  export type threadAttachmentsDeleteManyArgs = {
    /**
     * Filter which threadAttachments to delete
     * 
    **/
    where?: threadAttachmentsWhereInput
  }


  /**
   * threadAttachments without action
   */
  export type threadAttachmentsArgs = {
    /**
     * Select specific fields to fetch from the threadAttachments
     * 
    **/
    select?: threadAttachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: threadAttachmentsInclude | null
  }



  /**
   * Model reaction
   */


  export type AggregateReaction = {
    _count: ReactionCountAggregateOutputType | null
    _avg: ReactionAvgAggregateOutputType | null
    _sum: ReactionSumAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  export type ReactionAvgAggregateOutputType = {
    id: number | null
    threadId: number | null
    commentId: number | null
    userId: number | null
  }

  export type ReactionSumAggregateOutputType = {
    id: number | null
    threadId: number | null
    commentId: number | null
    userId: number | null
  }

  export type ReactionMinAggregateOutputType = {
    id: number | null
    react: ReactType | null
    threadId: number | null
    commentId: number | null
    userId: number | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReactionMaxAggregateOutputType = {
    id: number | null
    react: ReactType | null
    threadId: number | null
    commentId: number | null
    userId: number | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReactionCountAggregateOutputType = {
    id: number
    react: number
    threadId: number
    commentId: number
    userId: number
    isActive: number
    isDelete: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReactionAvgAggregateInputType = {
    id?: true
    threadId?: true
    commentId?: true
    userId?: true
  }

  export type ReactionSumAggregateInputType = {
    id?: true
    threadId?: true
    commentId?: true
    userId?: true
  }

  export type ReactionMinAggregateInputType = {
    id?: true
    react?: true
    threadId?: true
    commentId?: true
    userId?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReactionMaxAggregateInputType = {
    id?: true
    react?: true
    threadId?: true
    commentId?: true
    userId?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReactionCountAggregateInputType = {
    id?: true
    react?: true
    threadId?: true
    commentId?: true
    userId?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReactionAggregateArgs = {
    /**
     * Filter which reaction to aggregate.
     * 
    **/
    where?: reactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reactions to fetch.
     * 
    **/
    orderBy?: Enumerable<reactionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: reactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reactions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reactions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reactions
    **/
    _count?: true | ReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReactionMaxAggregateInputType
  }

  export type GetReactionAggregateType<T extends ReactionAggregateArgs> = {
        [P in keyof T & keyof AggregateReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReaction[P]>
      : GetScalarType<T[P], AggregateReaction[P]>
  }




  export type ReactionGroupByArgs = {
    where?: reactionWhereInput
    orderBy?: Enumerable<reactionOrderByWithAggregationInput>
    by: Array<ReactionScalarFieldEnum>
    having?: reactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReactionCountAggregateInputType | true
    _avg?: ReactionAvgAggregateInputType
    _sum?: ReactionSumAggregateInputType
    _min?: ReactionMinAggregateInputType
    _max?: ReactionMaxAggregateInputType
  }


  export type ReactionGroupByOutputType = {
    id: number
    react: ReactType
    threadId: number | null
    commentId: number | null
    userId: number | null
    isActive: boolean
    isDelete: boolean
    createdAt: Date
    updatedAt: Date
    _count: ReactionCountAggregateOutputType | null
    _avg: ReactionAvgAggregateOutputType | null
    _sum: ReactionSumAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  type GetReactionGroupByPayload<T extends ReactionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReactionGroupByOutputType[P]>
            : GetScalarType<T[P], ReactionGroupByOutputType[P]>
        }
      >
    >


  export type reactionSelect = {
    id?: boolean
    react?: boolean
    threadId?: boolean
    thread?: boolean | ThreadArgs
    commentId?: boolean
    comment?: boolean | CommentArgs
    userId?: boolean
    user?: boolean | UserArgs
    isActive?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type reactionInclude = {
    thread?: boolean | ThreadArgs
    comment?: boolean | CommentArgs
    user?: boolean | UserArgs
  } 

  export type reactionGetPayload<S extends boolean | null | undefined | reactionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? reaction :
    S extends undefined ? never :
    S extends { include: any } & (reactionArgs | reactionFindManyArgs)
    ? reaction  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'thread' ? ThreadGetPayload<S['include'][P]> | null :
        P extends 'comment' ? CommentGetPayload<S['include'][P]> | null :
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (reactionArgs | reactionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'thread' ? ThreadGetPayload<S['select'][P]> | null :
        P extends 'comment' ? CommentGetPayload<S['select'][P]> | null :
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :  P extends keyof reaction ? reaction[P] : never
  } 
      : reaction


  type reactionCountArgs = Merge<
    Omit<reactionFindManyArgs, 'select' | 'include'> & {
      select?: ReactionCountAggregateInputType | true
    }
  >

  export interface reactionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Reaction that matches the filter.
     * @param {reactionFindUniqueArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends reactionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, reactionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'reaction'> extends True ? Prisma__reactionClient<reactionGetPayload<T>> : Prisma__reactionClient<reactionGetPayload<T> | null, null>

    /**
     * Find one Reaction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {reactionFindUniqueOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends reactionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, reactionFindUniqueOrThrowArgs>
    ): Prisma__reactionClient<reactionGetPayload<T>>

    /**
     * Find the first Reaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reactionFindFirstArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends reactionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, reactionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'reaction'> extends True ? Prisma__reactionClient<reactionGetPayload<T>> : Prisma__reactionClient<reactionGetPayload<T> | null, null>

    /**
     * Find the first Reaction that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reactionFindFirstOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends reactionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, reactionFindFirstOrThrowArgs>
    ): Prisma__reactionClient<reactionGetPayload<T>>

    /**
     * Find zero or more Reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reactions
     * const reactions = await prisma.reaction.findMany()
     * 
     * // Get first 10 Reactions
     * const reactions = await prisma.reaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reactionWithIdOnly = await prisma.reaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends reactionFindManyArgs>(
      args?: SelectSubset<T, reactionFindManyArgs>
    ): PrismaPromise<Array<reactionGetPayload<T>>>

    /**
     * Create a Reaction.
     * @param {reactionCreateArgs} args - Arguments to create a Reaction.
     * @example
     * // Create one Reaction
     * const Reaction = await prisma.reaction.create({
     *   data: {
     *     // ... data to create a Reaction
     *   }
     * })
     * 
    **/
    create<T extends reactionCreateArgs>(
      args: SelectSubset<T, reactionCreateArgs>
    ): Prisma__reactionClient<reactionGetPayload<T>>

    /**
     * Create many Reactions.
     *     @param {reactionCreateManyArgs} args - Arguments to create many Reactions.
     *     @example
     *     // Create many Reactions
     *     const reaction = await prisma.reaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends reactionCreateManyArgs>(
      args?: SelectSubset<T, reactionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Reaction.
     * @param {reactionDeleteArgs} args - Arguments to delete one Reaction.
     * @example
     * // Delete one Reaction
     * const Reaction = await prisma.reaction.delete({
     *   where: {
     *     // ... filter to delete one Reaction
     *   }
     * })
     * 
    **/
    delete<T extends reactionDeleteArgs>(
      args: SelectSubset<T, reactionDeleteArgs>
    ): Prisma__reactionClient<reactionGetPayload<T>>

    /**
     * Update one Reaction.
     * @param {reactionUpdateArgs} args - Arguments to update one Reaction.
     * @example
     * // Update one Reaction
     * const reaction = await prisma.reaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends reactionUpdateArgs>(
      args: SelectSubset<T, reactionUpdateArgs>
    ): Prisma__reactionClient<reactionGetPayload<T>>

    /**
     * Delete zero or more Reactions.
     * @param {reactionDeleteManyArgs} args - Arguments to filter Reactions to delete.
     * @example
     * // Delete a few Reactions
     * const { count } = await prisma.reaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends reactionDeleteManyArgs>(
      args?: SelectSubset<T, reactionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reactions
     * const reaction = await prisma.reaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends reactionUpdateManyArgs>(
      args: SelectSubset<T, reactionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Reaction.
     * @param {reactionUpsertArgs} args - Arguments to update or create a Reaction.
     * @example
     * // Update or create a Reaction
     * const reaction = await prisma.reaction.upsert({
     *   create: {
     *     // ... data to create a Reaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reaction we want to update
     *   }
     * })
    **/
    upsert<T extends reactionUpsertArgs>(
      args: SelectSubset<T, reactionUpsertArgs>
    ): Prisma__reactionClient<reactionGetPayload<T>>

    /**
     * Count the number of Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reactionCountArgs} args - Arguments to filter Reactions to count.
     * @example
     * // Count the number of Reactions
     * const count = await prisma.reaction.count({
     *   where: {
     *     // ... the filter for the Reactions we want to count
     *   }
     * })
    **/
    count<T extends reactionCountArgs>(
      args?: Subset<T, reactionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReactionAggregateArgs>(args: Subset<T, ReactionAggregateArgs>): PrismaPromise<GetReactionAggregateType<T>>

    /**
     * Group by Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReactionGroupByArgs['orderBy'] }
        : { orderBy?: ReactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReactionGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for reaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__reactionClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    thread<T extends ThreadArgs= {}>(args?: Subset<T, ThreadArgs>): Prisma__ThreadClient<ThreadGetPayload<T> | Null>;

    comment<T extends CommentArgs= {}>(args?: Subset<T, CommentArgs>): Prisma__CommentClient<CommentGetPayload<T> | Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * reaction base type for findUnique actions
   */
  export type reactionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the reaction
     * 
    **/
    select?: reactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: reactionInclude | null
    /**
     * Filter, which reaction to fetch.
     * 
    **/
    where: reactionWhereUniqueInput
  }

  /**
   * reaction findUnique
   */
  export interface reactionFindUniqueArgs extends reactionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reaction findUniqueOrThrow
   */
  export type reactionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the reaction
     * 
    **/
    select?: reactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: reactionInclude | null
    /**
     * Filter, which reaction to fetch.
     * 
    **/
    where: reactionWhereUniqueInput
  }


  /**
   * reaction base type for findFirst actions
   */
  export type reactionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the reaction
     * 
    **/
    select?: reactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: reactionInclude | null
    /**
     * Filter, which reaction to fetch.
     * 
    **/
    where?: reactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reactions to fetch.
     * 
    **/
    orderBy?: Enumerable<reactionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reactions.
     * 
    **/
    cursor?: reactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reactions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reactions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reactions.
     * 
    **/
    distinct?: Enumerable<ReactionScalarFieldEnum>
  }

  /**
   * reaction findFirst
   */
  export interface reactionFindFirstArgs extends reactionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reaction findFirstOrThrow
   */
  export type reactionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the reaction
     * 
    **/
    select?: reactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: reactionInclude | null
    /**
     * Filter, which reaction to fetch.
     * 
    **/
    where?: reactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reactions to fetch.
     * 
    **/
    orderBy?: Enumerable<reactionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reactions.
     * 
    **/
    cursor?: reactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reactions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reactions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reactions.
     * 
    **/
    distinct?: Enumerable<ReactionScalarFieldEnum>
  }


  /**
   * reaction findMany
   */
  export type reactionFindManyArgs = {
    /**
     * Select specific fields to fetch from the reaction
     * 
    **/
    select?: reactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: reactionInclude | null
    /**
     * Filter, which reactions to fetch.
     * 
    **/
    where?: reactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reactions to fetch.
     * 
    **/
    orderBy?: Enumerable<reactionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reactions.
     * 
    **/
    cursor?: reactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reactions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reactions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ReactionScalarFieldEnum>
  }


  /**
   * reaction create
   */
  export type reactionCreateArgs = {
    /**
     * Select specific fields to fetch from the reaction
     * 
    **/
    select?: reactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: reactionInclude | null
    /**
     * The data needed to create a reaction.
     * 
    **/
    data: XOR<reactionCreateInput, reactionUncheckedCreateInput>
  }


  /**
   * reaction createMany
   */
  export type reactionCreateManyArgs = {
    /**
     * The data used to create many reactions.
     * 
    **/
    data: Enumerable<reactionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * reaction update
   */
  export type reactionUpdateArgs = {
    /**
     * Select specific fields to fetch from the reaction
     * 
    **/
    select?: reactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: reactionInclude | null
    /**
     * The data needed to update a reaction.
     * 
    **/
    data: XOR<reactionUpdateInput, reactionUncheckedUpdateInput>
    /**
     * Choose, which reaction to update.
     * 
    **/
    where: reactionWhereUniqueInput
  }


  /**
   * reaction updateMany
   */
  export type reactionUpdateManyArgs = {
    /**
     * The data used to update reactions.
     * 
    **/
    data: XOR<reactionUpdateManyMutationInput, reactionUncheckedUpdateManyInput>
    /**
     * Filter which reactions to update
     * 
    **/
    where?: reactionWhereInput
  }


  /**
   * reaction upsert
   */
  export type reactionUpsertArgs = {
    /**
     * Select specific fields to fetch from the reaction
     * 
    **/
    select?: reactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: reactionInclude | null
    /**
     * The filter to search for the reaction to update in case it exists.
     * 
    **/
    where: reactionWhereUniqueInput
    /**
     * In case the reaction found by the `where` argument doesn't exist, create a new reaction with this data.
     * 
    **/
    create: XOR<reactionCreateInput, reactionUncheckedCreateInput>
    /**
     * In case the reaction was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<reactionUpdateInput, reactionUncheckedUpdateInput>
  }


  /**
   * reaction delete
   */
  export type reactionDeleteArgs = {
    /**
     * Select specific fields to fetch from the reaction
     * 
    **/
    select?: reactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: reactionInclude | null
    /**
     * Filter which reaction to delete.
     * 
    **/
    where: reactionWhereUniqueInput
  }


  /**
   * reaction deleteMany
   */
  export type reactionDeleteManyArgs = {
    /**
     * Filter which reactions to delete
     * 
    **/
    where?: reactionWhereInput
  }


  /**
   * reaction without action
   */
  export type reactionArgs = {
    /**
     * Select specific fields to fetch from the reaction
     * 
    **/
    select?: reactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: reactionInclude | null
  }



  /**
   * Model Comment
   */


  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    threadId: number | null
    userId: number | null
    parentId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    threadId: number | null
    userId: number | null
    parentId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    content: string | null
    threadId: number | null
    userId: number | null
    parentId: number | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    content: string | null
    threadId: number | null
    userId: number | null
    parentId: number | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    threadId: number
    userId: number
    parentId: number
    isActive: number
    isDelete: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    threadId?: true
    userId?: true
    parentId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    threadId?: true
    userId?: true
    parentId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    threadId?: true
    userId?: true
    parentId?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    threadId?: true
    userId?: true
    parentId?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    threadId?: true
    userId?: true
    parentId?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs = {
    /**
     * Filter which Comment to aggregate.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs = {
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByWithAggregationInput>
    by: Array<CommentScalarFieldEnum>
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }


  export type CommentGroupByOutputType = {
    id: number
    content: string
    threadId: number | null
    userId: number | null
    parentId: number | null
    isActive: boolean
    isDelete: boolean
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect = {
    id?: boolean
    content?: boolean
    threadId?: boolean
    thread?: boolean | ThreadArgs
    userId?: boolean
    user?: boolean | UserArgs
    parentId?: boolean
    parent?: boolean | CommentArgs
    children?: boolean | CommentChildrenArgs
    isActive?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reaction?: boolean | CommentReactionArgs
    _count?: boolean | CommentCountOutputTypeArgs
  }


  export type CommentInclude = {
    thread?: boolean | ThreadArgs
    user?: boolean | UserArgs
    parent?: boolean | CommentArgs
    children?: boolean | CommentChildrenArgs
    reaction?: boolean | CommentReactionArgs
    _count?: boolean | CommentCountOutputTypeArgs
  } 

  export type CommentGetPayload<S extends boolean | null | undefined | CommentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Comment :
    S extends undefined ? never :
    S extends { include: any } & (CommentArgs | CommentFindManyArgs)
    ? Comment  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'thread' ? ThreadGetPayload<S['include'][P]> | null :
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :
        P extends 'parent' ? CommentGetPayload<S['include'][P]> | null :
        P extends 'children' ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'reaction' ? Array < reactionGetPayload<S['include'][P]>>  :
        P extends '_count' ? CommentCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CommentArgs | CommentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'thread' ? ThreadGetPayload<S['select'][P]> | null :
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :
        P extends 'parent' ? CommentGetPayload<S['select'][P]> | null :
        P extends 'children' ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'reaction' ? Array < reactionGetPayload<S['select'][P]>>  :
        P extends '_count' ? CommentCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Comment ? Comment[P] : never
  } 
      : Comment


  type CommentCountArgs = Merge<
    Omit<CommentFindManyArgs, 'select' | 'include'> & {
      select?: CommentCountAggregateInputType | true
    }
  >

  export interface CommentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Comment'> extends True ? Prisma__CommentClient<CommentGetPayload<T>> : Prisma__CommentClient<CommentGetPayload<T> | null, null>

    /**
     * Find one Comment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CommentFindUniqueOrThrowArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Comment'> extends True ? Prisma__CommentClient<CommentGetPayload<T>> : Prisma__CommentClient<CommentGetPayload<T> | null, null>

    /**
     * Find the first Comment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs>
    ): PrismaPromise<Array<CommentGetPayload<T>>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs>(
      args?: SelectSubset<T, CommentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommentClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    thread<T extends ThreadArgs= {}>(args?: Subset<T, ThreadArgs>): Prisma__ThreadClient<ThreadGetPayload<T> | Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    parent<T extends CommentArgs= {}>(args?: Subset<T, CommentArgs>): Prisma__CommentClient<CommentGetPayload<T> | Null>;

    children<T extends CommentChildrenArgs= {}>(args?: Subset<T, CommentChildrenArgs>): PrismaPromise<Array<CommentGetPayload<T>>| Null>;

    reaction<T extends CommentReactionArgs= {}>(args?: Subset<T, CommentReactionArgs>): PrismaPromise<Array<reactionGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Comment base type for findUnique actions
   */
  export type CommentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUnique
   */
  export interface CommentFindUniqueArgs extends CommentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment base type for findFirst actions
   */
  export type CommentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     * 
    **/
    distinct?: Enumerable<CommentScalarFieldEnum>
  }

  /**
   * Comment findFirst
   */
  export interface CommentFindFirstArgs extends CommentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     * 
    **/
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comments to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The data needed to create a Comment.
     * 
    **/
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs = {
    /**
     * The data used to create many Comments.
     * 
    **/
    data: Enumerable<CommentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The data needed to update a Comment.
     * 
    **/
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs = {
    /**
     * The data used to update Comments.
     * 
    **/
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     * 
    **/
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The filter to search for the Comment to update in case it exists.
     * 
    **/
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     * 
    **/
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter which Comment to delete.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs = {
    /**
     * Filter which Comments to delete
     * 
    **/
    where?: CommentWhereInput
  }


  /**
   * Comment.children
   */
  export type CommentChildrenArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment.reaction
   */
  export type CommentReactionArgs = {
    /**
     * Select specific fields to fetch from the reaction
     * 
    **/
    select?: reactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: reactionInclude | null
    where?: reactionWhereInput
    orderBy?: Enumerable<reactionOrderByWithRelationInput>
    cursor?: reactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ReactionScalarFieldEnum>
  }


  /**
   * Comment without action
   */
  export type CommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    refreshToken: string | null
    sign: string | null
    userId: number | null
    ip: string | null
    location: string | null
    device: string | null
    expireAt: Date | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    refreshToken: string | null
    sign: string | null
    userId: number | null
    ip: string | null
    location: string | null
    device: string | null
    expireAt: Date | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    refreshToken: number
    sign: number
    userId: number
    ip: number
    location: number
    device: number
    expireAt: number
    isActive: number
    isDelete: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    refreshToken?: true
    sign?: true
    userId?: true
    ip?: true
    location?: true
    device?: true
    expireAt?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    refreshToken?: true
    sign?: true
    userId?: true
    ip?: true
    location?: true
    device?: true
    expireAt?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    refreshToken?: true
    sign?: true
    userId?: true
    ip?: true
    location?: true
    device?: true
    expireAt?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: Array<SessionScalarFieldEnum>
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: number
    refreshToken: string
    sign: string
    userId: number
    ip: string | null
    location: string | null
    device: string | null
    expireAt: Date
    isActive: boolean
    isDelete: boolean
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect = {
    id?: boolean
    refreshToken?: boolean
    sign?: boolean
    userId?: boolean
    user?: boolean | UserArgs
    ip?: boolean
    location?: boolean
    device?: boolean
    expireAt?: boolean
    isActive?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type SessionInclude = {
    user?: boolean | UserArgs
  } 

  export type SessionGetPayload<S extends boolean | null | undefined | SessionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Session :
    S extends undefined ? never :
    S extends { include: any } & (SessionArgs | SessionFindManyArgs)
    ? Session  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SessionArgs | SessionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Session ? Session[P] : never
  } 
      : Session


  type SessionCountArgs = Merge<
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }
  >

  export interface SessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? Prisma__SessionClient<SessionGetPayload<T>> : Prisma__SessionClient<SessionGetPayload<T> | null, null>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? Prisma__SessionClient<SessionGetPayload<T>> : Prisma__SessionClient<SessionGetPayload<T> | null, null>

    /**
     * Find the first Session that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): PrismaPromise<Array<SessionGetPayload<T>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Session base type for findUnique actions
   */
  export type SessionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUnique
   */
  export interface SessionFindUniqueArgs extends SessionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session base type for findFirst actions
   */
  export type SessionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     * 
    **/
    distinct?: Enumerable<SessionScalarFieldEnum>
  }

  /**
   * Session findFirst
   */
  export interface SessionFindFirstArgs extends SessionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     * 
    **/
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Sessions to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to create a Session.
     * 
    **/
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    /**
     * The data used to create many Sessions.
     * 
    **/
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to update a Session.
     * 
    **/
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    /**
     * The data used to update Sessions.
     * 
    **/
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The filter to search for the Session to update in case it exists.
     * 
    **/
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     * 
    **/
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter which Session to delete.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    /**
     * Filter which Sessions to delete
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
  }



  /**
   * Model Monitoring
   */


  export type AggregateMonitoring = {
    _count: MonitoringCountAggregateOutputType | null
    _avg: MonitoringAvgAggregateOutputType | null
    _sum: MonitoringSumAggregateOutputType | null
    _min: MonitoringMinAggregateOutputType | null
    _max: MonitoringMaxAggregateOutputType | null
  }

  export type MonitoringAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MonitoringSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MonitoringMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: LogType | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonitoringMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: LogType | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonitoringCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    detail: number
    isActive: number
    isDelete: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MonitoringAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MonitoringSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MonitoringMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonitoringMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonitoringCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    detail?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MonitoringAggregateArgs = {
    /**
     * Filter which Monitoring to aggregate.
     * 
    **/
    where?: MonitoringWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitorings to fetch.
     * 
    **/
    orderBy?: Enumerable<MonitoringOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MonitoringWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitorings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitorings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Monitorings
    **/
    _count?: true | MonitoringCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonitoringAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonitoringSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonitoringMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonitoringMaxAggregateInputType
  }

  export type GetMonitoringAggregateType<T extends MonitoringAggregateArgs> = {
        [P in keyof T & keyof AggregateMonitoring]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonitoring[P]>
      : GetScalarType<T[P], AggregateMonitoring[P]>
  }




  export type MonitoringGroupByArgs = {
    where?: MonitoringWhereInput
    orderBy?: Enumerable<MonitoringOrderByWithAggregationInput>
    by: Array<MonitoringScalarFieldEnum>
    having?: MonitoringScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonitoringCountAggregateInputType | true
    _avg?: MonitoringAvgAggregateInputType
    _sum?: MonitoringSumAggregateInputType
    _min?: MonitoringMinAggregateInputType
    _max?: MonitoringMaxAggregateInputType
  }


  export type MonitoringGroupByOutputType = {
    id: number
    userId: number
    type: LogType
    detail: JsonValue | null
    isActive: boolean
    isDelete: boolean
    createdAt: Date
    updatedAt: Date
    _count: MonitoringCountAggregateOutputType | null
    _avg: MonitoringAvgAggregateOutputType | null
    _sum: MonitoringSumAggregateOutputType | null
    _min: MonitoringMinAggregateOutputType | null
    _max: MonitoringMaxAggregateOutputType | null
  }

  type GetMonitoringGroupByPayload<T extends MonitoringGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MonitoringGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonitoringGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonitoringGroupByOutputType[P]>
            : GetScalarType<T[P], MonitoringGroupByOutputType[P]>
        }
      >
    >


  export type MonitoringSelect = {
    id?: boolean
    userId?: boolean
    user?: boolean | UserArgs
    type?: boolean
    detail?: boolean
    isActive?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type MonitoringInclude = {
    user?: boolean | UserArgs
  } 

  export type MonitoringGetPayload<S extends boolean | null | undefined | MonitoringArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Monitoring :
    S extends undefined ? never :
    S extends { include: any } & (MonitoringArgs | MonitoringFindManyArgs)
    ? Monitoring  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MonitoringArgs | MonitoringFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Monitoring ? Monitoring[P] : never
  } 
      : Monitoring


  type MonitoringCountArgs = Merge<
    Omit<MonitoringFindManyArgs, 'select' | 'include'> & {
      select?: MonitoringCountAggregateInputType | true
    }
  >

  export interface MonitoringDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Monitoring that matches the filter.
     * @param {MonitoringFindUniqueArgs} args - Arguments to find a Monitoring
     * @example
     * // Get one Monitoring
     * const monitoring = await prisma.monitoring.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MonitoringFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MonitoringFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Monitoring'> extends True ? Prisma__MonitoringClient<MonitoringGetPayload<T>> : Prisma__MonitoringClient<MonitoringGetPayload<T> | null, null>

    /**
     * Find one Monitoring that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MonitoringFindUniqueOrThrowArgs} args - Arguments to find a Monitoring
     * @example
     * // Get one Monitoring
     * const monitoring = await prisma.monitoring.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MonitoringFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MonitoringFindUniqueOrThrowArgs>
    ): Prisma__MonitoringClient<MonitoringGetPayload<T>>

    /**
     * Find the first Monitoring that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringFindFirstArgs} args - Arguments to find a Monitoring
     * @example
     * // Get one Monitoring
     * const monitoring = await prisma.monitoring.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MonitoringFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MonitoringFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Monitoring'> extends True ? Prisma__MonitoringClient<MonitoringGetPayload<T>> : Prisma__MonitoringClient<MonitoringGetPayload<T> | null, null>

    /**
     * Find the first Monitoring that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringFindFirstOrThrowArgs} args - Arguments to find a Monitoring
     * @example
     * // Get one Monitoring
     * const monitoring = await prisma.monitoring.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MonitoringFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MonitoringFindFirstOrThrowArgs>
    ): Prisma__MonitoringClient<MonitoringGetPayload<T>>

    /**
     * Find zero or more Monitorings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Monitorings
     * const monitorings = await prisma.monitoring.findMany()
     * 
     * // Get first 10 Monitorings
     * const monitorings = await prisma.monitoring.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monitoringWithIdOnly = await prisma.monitoring.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MonitoringFindManyArgs>(
      args?: SelectSubset<T, MonitoringFindManyArgs>
    ): PrismaPromise<Array<MonitoringGetPayload<T>>>

    /**
     * Create a Monitoring.
     * @param {MonitoringCreateArgs} args - Arguments to create a Monitoring.
     * @example
     * // Create one Monitoring
     * const Monitoring = await prisma.monitoring.create({
     *   data: {
     *     // ... data to create a Monitoring
     *   }
     * })
     * 
    **/
    create<T extends MonitoringCreateArgs>(
      args: SelectSubset<T, MonitoringCreateArgs>
    ): Prisma__MonitoringClient<MonitoringGetPayload<T>>

    /**
     * Create many Monitorings.
     *     @param {MonitoringCreateManyArgs} args - Arguments to create many Monitorings.
     *     @example
     *     // Create many Monitorings
     *     const monitoring = await prisma.monitoring.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MonitoringCreateManyArgs>(
      args?: SelectSubset<T, MonitoringCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Monitoring.
     * @param {MonitoringDeleteArgs} args - Arguments to delete one Monitoring.
     * @example
     * // Delete one Monitoring
     * const Monitoring = await prisma.monitoring.delete({
     *   where: {
     *     // ... filter to delete one Monitoring
     *   }
     * })
     * 
    **/
    delete<T extends MonitoringDeleteArgs>(
      args: SelectSubset<T, MonitoringDeleteArgs>
    ): Prisma__MonitoringClient<MonitoringGetPayload<T>>

    /**
     * Update one Monitoring.
     * @param {MonitoringUpdateArgs} args - Arguments to update one Monitoring.
     * @example
     * // Update one Monitoring
     * const monitoring = await prisma.monitoring.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MonitoringUpdateArgs>(
      args: SelectSubset<T, MonitoringUpdateArgs>
    ): Prisma__MonitoringClient<MonitoringGetPayload<T>>

    /**
     * Delete zero or more Monitorings.
     * @param {MonitoringDeleteManyArgs} args - Arguments to filter Monitorings to delete.
     * @example
     * // Delete a few Monitorings
     * const { count } = await prisma.monitoring.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MonitoringDeleteManyArgs>(
      args?: SelectSubset<T, MonitoringDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monitorings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Monitorings
     * const monitoring = await prisma.monitoring.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MonitoringUpdateManyArgs>(
      args: SelectSubset<T, MonitoringUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Monitoring.
     * @param {MonitoringUpsertArgs} args - Arguments to update or create a Monitoring.
     * @example
     * // Update or create a Monitoring
     * const monitoring = await prisma.monitoring.upsert({
     *   create: {
     *     // ... data to create a Monitoring
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Monitoring we want to update
     *   }
     * })
    **/
    upsert<T extends MonitoringUpsertArgs>(
      args: SelectSubset<T, MonitoringUpsertArgs>
    ): Prisma__MonitoringClient<MonitoringGetPayload<T>>

    /**
     * Count the number of Monitorings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringCountArgs} args - Arguments to filter Monitorings to count.
     * @example
     * // Count the number of Monitorings
     * const count = await prisma.monitoring.count({
     *   where: {
     *     // ... the filter for the Monitorings we want to count
     *   }
     * })
    **/
    count<T extends MonitoringCountArgs>(
      args?: Subset<T, MonitoringCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonitoringCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Monitoring.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonitoringAggregateArgs>(args: Subset<T, MonitoringAggregateArgs>): PrismaPromise<GetMonitoringAggregateType<T>>

    /**
     * Group by Monitoring.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonitoringGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonitoringGroupByArgs['orderBy'] }
        : { orderBy?: MonitoringGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonitoringGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonitoringGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Monitoring.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MonitoringClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Monitoring base type for findUnique actions
   */
  export type MonitoringFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Monitoring
     * 
    **/
    select?: MonitoringSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MonitoringInclude | null
    /**
     * Filter, which Monitoring to fetch.
     * 
    **/
    where: MonitoringWhereUniqueInput
  }

  /**
   * Monitoring findUnique
   */
  export interface MonitoringFindUniqueArgs extends MonitoringFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Monitoring findUniqueOrThrow
   */
  export type MonitoringFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Monitoring
     * 
    **/
    select?: MonitoringSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MonitoringInclude | null
    /**
     * Filter, which Monitoring to fetch.
     * 
    **/
    where: MonitoringWhereUniqueInput
  }


  /**
   * Monitoring base type for findFirst actions
   */
  export type MonitoringFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Monitoring
     * 
    **/
    select?: MonitoringSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MonitoringInclude | null
    /**
     * Filter, which Monitoring to fetch.
     * 
    **/
    where?: MonitoringWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitorings to fetch.
     * 
    **/
    orderBy?: Enumerable<MonitoringOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monitorings.
     * 
    **/
    cursor?: MonitoringWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitorings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitorings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monitorings.
     * 
    **/
    distinct?: Enumerable<MonitoringScalarFieldEnum>
  }

  /**
   * Monitoring findFirst
   */
  export interface MonitoringFindFirstArgs extends MonitoringFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Monitoring findFirstOrThrow
   */
  export type MonitoringFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Monitoring
     * 
    **/
    select?: MonitoringSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MonitoringInclude | null
    /**
     * Filter, which Monitoring to fetch.
     * 
    **/
    where?: MonitoringWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitorings to fetch.
     * 
    **/
    orderBy?: Enumerable<MonitoringOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monitorings.
     * 
    **/
    cursor?: MonitoringWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitorings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitorings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monitorings.
     * 
    **/
    distinct?: Enumerable<MonitoringScalarFieldEnum>
  }


  /**
   * Monitoring findMany
   */
  export type MonitoringFindManyArgs = {
    /**
     * Select specific fields to fetch from the Monitoring
     * 
    **/
    select?: MonitoringSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MonitoringInclude | null
    /**
     * Filter, which Monitorings to fetch.
     * 
    **/
    where?: MonitoringWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitorings to fetch.
     * 
    **/
    orderBy?: Enumerable<MonitoringOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Monitorings.
     * 
    **/
    cursor?: MonitoringWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitorings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitorings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MonitoringScalarFieldEnum>
  }


  /**
   * Monitoring create
   */
  export type MonitoringCreateArgs = {
    /**
     * Select specific fields to fetch from the Monitoring
     * 
    **/
    select?: MonitoringSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MonitoringInclude | null
    /**
     * The data needed to create a Monitoring.
     * 
    **/
    data: XOR<MonitoringCreateInput, MonitoringUncheckedCreateInput>
  }


  /**
   * Monitoring createMany
   */
  export type MonitoringCreateManyArgs = {
    /**
     * The data used to create many Monitorings.
     * 
    **/
    data: Enumerable<MonitoringCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Monitoring update
   */
  export type MonitoringUpdateArgs = {
    /**
     * Select specific fields to fetch from the Monitoring
     * 
    **/
    select?: MonitoringSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MonitoringInclude | null
    /**
     * The data needed to update a Monitoring.
     * 
    **/
    data: XOR<MonitoringUpdateInput, MonitoringUncheckedUpdateInput>
    /**
     * Choose, which Monitoring to update.
     * 
    **/
    where: MonitoringWhereUniqueInput
  }


  /**
   * Monitoring updateMany
   */
  export type MonitoringUpdateManyArgs = {
    /**
     * The data used to update Monitorings.
     * 
    **/
    data: XOR<MonitoringUpdateManyMutationInput, MonitoringUncheckedUpdateManyInput>
    /**
     * Filter which Monitorings to update
     * 
    **/
    where?: MonitoringWhereInput
  }


  /**
   * Monitoring upsert
   */
  export type MonitoringUpsertArgs = {
    /**
     * Select specific fields to fetch from the Monitoring
     * 
    **/
    select?: MonitoringSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MonitoringInclude | null
    /**
     * The filter to search for the Monitoring to update in case it exists.
     * 
    **/
    where: MonitoringWhereUniqueInput
    /**
     * In case the Monitoring found by the `where` argument doesn't exist, create a new Monitoring with this data.
     * 
    **/
    create: XOR<MonitoringCreateInput, MonitoringUncheckedCreateInput>
    /**
     * In case the Monitoring was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MonitoringUpdateInput, MonitoringUncheckedUpdateInput>
  }


  /**
   * Monitoring delete
   */
  export type MonitoringDeleteArgs = {
    /**
     * Select specific fields to fetch from the Monitoring
     * 
    **/
    select?: MonitoringSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MonitoringInclude | null
    /**
     * Filter which Monitoring to delete.
     * 
    **/
    where: MonitoringWhereUniqueInput
  }


  /**
   * Monitoring deleteMany
   */
  export type MonitoringDeleteManyArgs = {
    /**
     * Filter which Monitorings to delete
     * 
    **/
    where?: MonitoringWhereInput
  }


  /**
   * Monitoring without action
   */
  export type MonitoringArgs = {
    /**
     * Select specific fields to fetch from the Monitoring
     * 
    **/
    select?: MonitoringSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MonitoringInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    threadId: 'threadId',
    userId: 'userId',
    parentId: 'parentId',
    isActive: 'isActive',
    isDelete: 'isDelete',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const MonitoringScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    detail: 'detail',
    isActive: 'isActive',
    isDelete: 'isDelete',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MonitoringScalarFieldEnum = (typeof MonitoringScalarFieldEnum)[keyof typeof MonitoringScalarFieldEnum]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ReactionScalarFieldEnum: {
    id: 'id',
    react: 'react',
    threadId: 'threadId',
    commentId: 'commentId',
    userId: 'userId',
    isActive: 'isActive',
    isDelete: 'isDelete',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReactionScalarFieldEnum = (typeof ReactionScalarFieldEnum)[keyof typeof ReactionScalarFieldEnum]


  export const RelationshipScalarFieldEnum: {
    id: 'id',
    content: 'content',
    userId: 'userId',
    friendId: 'friendId',
    relationType: 'relationType',
    isActive: 'isActive',
    isDelete: 'isDelete',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RelationshipScalarFieldEnum = (typeof RelationshipScalarFieldEnum)[keyof typeof RelationshipScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    refreshToken: 'refreshToken',
    sign: 'sign',
    userId: 'userId',
    ip: 'ip',
    location: 'location',
    device: 'device',
    expireAt: 'expireAt',
    isActive: 'isActive',
    isDelete: 'isDelete',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const ThreadAttachmentsScalarFieldEnum: {
    id: 'id',
    link: 'link',
    type: 'type',
    threadId: 'threadId',
    isActive: 'isActive',
    isDelete: 'isDelete',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ThreadAttachmentsScalarFieldEnum = (typeof ThreadAttachmentsScalarFieldEnum)[keyof typeof ThreadAttachmentsScalarFieldEnum]


  export const ThreadScalarFieldEnum: {
    id: 'id',
    content: 'content',
    totalReact: 'totalReact',
    totalComment: 'totalComment',
    authorId: 'authorId',
    privacy: 'privacy',
    destination: 'destination',
    isActive: 'isActive',
    isDelete: 'isDelete',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ThreadScalarFieldEnum = (typeof ThreadScalarFieldEnum)[keyof typeof ThreadScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    email: 'email',
    firstName: 'firstName',
    surName: 'surName',
    fullName: 'fullName',
    gender: 'gender',
    birth: 'birth',
    avatar: 'avatar',
    cover: 'cover',
    information: 'information',
    password: 'password',
    isActive: 'isActive',
    isDelete: 'isDelete',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserThreadsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    threadId: 'threadId',
    isActive: 'isActive',
    isDelete: 'isDelete',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserThreadsScalarFieldEnum = (typeof UserThreadsScalarFieldEnum)[keyof typeof UserThreadsScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    userName?: StringNullableFilter | string | null
    email?: StringFilter | string
    firstName?: StringNullableFilter | string | null
    surName?: StringNullableFilter | string | null
    fullName?: StringNullableFilter | string | null
    gender?: EnumGenderNullableFilter | Gender | null
    birth?: DateTimeNullableFilter | Date | string | null
    avatar?: StringNullableFilter | string | null
    cover?: StringNullableFilter | string | null
    information?: JsonNullableFilter
    password?: StringFilter | string
    threadCreated?: ThreadListRelationFilter
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    session?: SessionListRelationFilter
    user?: RelationshipListRelationFilter
    relations?: RelationshipListRelationFilter
    monitoring?: MonitoringListRelationFilter
    userThreads?: UserThreadsListRelationFilter
    reaction?: ReactionListRelationFilter
    Comment?: CommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    surName?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    avatar?: SortOrder
    cover?: SortOrder
    information?: SortOrder
    password?: SortOrder
    threadCreated?: ThreadOrderByRelationAggregateInput
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    session?: SessionOrderByRelationAggregateInput
    user?: relationshipOrderByRelationAggregateInput
    relations?: relationshipOrderByRelationAggregateInput
    monitoring?: MonitoringOrderByRelationAggregateInput
    userThreads?: userThreadsOrderByRelationAggregateInput
    reaction?: reactionOrderByRelationAggregateInput
    Comment?: CommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    userName?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    surName?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    avatar?: SortOrder
    cover?: SortOrder
    information?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userName?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
    firstName?: StringNullableWithAggregatesFilter | string | null
    surName?: StringNullableWithAggregatesFilter | string | null
    fullName?: StringNullableWithAggregatesFilter | string | null
    gender?: EnumGenderNullableWithAggregatesFilter | Gender | null
    birth?: DateTimeNullableWithAggregatesFilter | Date | string | null
    avatar?: StringNullableWithAggregatesFilter | string | null
    cover?: StringNullableWithAggregatesFilter | string | null
    information?: JsonNullableWithAggregatesFilter
    password?: StringWithAggregatesFilter | string
    isActive?: BoolWithAggregatesFilter | boolean
    isDelete?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type relationshipWhereInput = {
    AND?: Enumerable<relationshipWhereInput>
    OR?: Enumerable<relationshipWhereInput>
    NOT?: Enumerable<relationshipWhereInput>
    id?: IntFilter | number
    content?: StringFilter | string
    userId?: IntNullableFilter | number | null
    friendId?: IntNullableFilter | number | null
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    friend?: XOR<UserRelationFilter, UserWhereInput> | null
    relationType?: EnumRelationTypeFilter | RelationType
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type relationshipOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    user?: UserOrderByWithRelationInput
    friend?: UserOrderByWithRelationInput
    relationType?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type relationshipWhereUniqueInput = {
    id?: number
  }

  export type relationshipOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    relationType?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: relationshipCountOrderByAggregateInput
    _avg?: relationshipAvgOrderByAggregateInput
    _max?: relationshipMaxOrderByAggregateInput
    _min?: relationshipMinOrderByAggregateInput
    _sum?: relationshipSumOrderByAggregateInput
  }

  export type relationshipScalarWhereWithAggregatesInput = {
    AND?: Enumerable<relationshipScalarWhereWithAggregatesInput>
    OR?: Enumerable<relationshipScalarWhereWithAggregatesInput>
    NOT?: Enumerable<relationshipScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    content?: StringWithAggregatesFilter | string
    userId?: IntNullableWithAggregatesFilter | number | null
    friendId?: IntNullableWithAggregatesFilter | number | null
    relationType?: EnumRelationTypeWithAggregatesFilter | RelationType
    isActive?: BoolWithAggregatesFilter | boolean
    isDelete?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type userThreadsWhereInput = {
    AND?: Enumerable<userThreadsWhereInput>
    OR?: Enumerable<userThreadsWhereInput>
    NOT?: Enumerable<userThreadsWhereInput>
    id?: IntFilter | number
    userId?: IntNullableFilter | number | null
    threadId?: IntNullableFilter | number | null
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    thread?: XOR<ThreadRelationFilter, ThreadWhereInput> | null
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type userThreadsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    threadId?: SortOrder
    user?: UserOrderByWithRelationInput
    thread?: ThreadOrderByWithRelationInput
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userThreadsWhereUniqueInput = {
    id?: number
  }

  export type userThreadsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    threadId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userThreadsCountOrderByAggregateInput
    _avg?: userThreadsAvgOrderByAggregateInput
    _max?: userThreadsMaxOrderByAggregateInput
    _min?: userThreadsMinOrderByAggregateInput
    _sum?: userThreadsSumOrderByAggregateInput
  }

  export type userThreadsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<userThreadsScalarWhereWithAggregatesInput>
    OR?: Enumerable<userThreadsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<userThreadsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntNullableWithAggregatesFilter | number | null
    threadId?: IntNullableWithAggregatesFilter | number | null
    isActive?: BoolWithAggregatesFilter | boolean
    isDelete?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ThreadWhereInput = {
    AND?: Enumerable<ThreadWhereInput>
    OR?: Enumerable<ThreadWhereInput>
    NOT?: Enumerable<ThreadWhereInput>
    id?: IntFilter | number
    content?: StringFilter | string
    totalReact?: IntNullableFilter | number | null
    totalComment?: IntNullableFilter | number | null
    authorId?: IntNullableFilter | number | null
    author?: XOR<UserRelationFilter, UserWhereInput> | null
    privacy?: EnumThreadPrivacyFilter | ThreadPrivacy
    destination?: EnumDestinationThreadFilter | DestinationThread
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: UserThreadsListRelationFilter
    attachment?: ThreadAttachmentsListRelationFilter
    reaction?: ReactionListRelationFilter
    Comment?: CommentListRelationFilter
  }

  export type ThreadOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    totalReact?: SortOrder
    totalComment?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
    privacy?: SortOrder
    destination?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: userThreadsOrderByRelationAggregateInput
    attachment?: threadAttachmentsOrderByRelationAggregateInput
    reaction?: reactionOrderByRelationAggregateInput
    Comment?: CommentOrderByRelationAggregateInput
  }

  export type ThreadWhereUniqueInput = {
    id?: number
  }

  export type ThreadOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    totalReact?: SortOrder
    totalComment?: SortOrder
    authorId?: SortOrder
    privacy?: SortOrder
    destination?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ThreadCountOrderByAggregateInput
    _avg?: ThreadAvgOrderByAggregateInput
    _max?: ThreadMaxOrderByAggregateInput
    _min?: ThreadMinOrderByAggregateInput
    _sum?: ThreadSumOrderByAggregateInput
  }

  export type ThreadScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ThreadScalarWhereWithAggregatesInput>
    OR?: Enumerable<ThreadScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ThreadScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    content?: StringWithAggregatesFilter | string
    totalReact?: IntNullableWithAggregatesFilter | number | null
    totalComment?: IntNullableWithAggregatesFilter | number | null
    authorId?: IntNullableWithAggregatesFilter | number | null
    privacy?: EnumThreadPrivacyWithAggregatesFilter | ThreadPrivacy
    destination?: EnumDestinationThreadWithAggregatesFilter | DestinationThread
    isActive?: BoolWithAggregatesFilter | boolean
    isDelete?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type threadAttachmentsWhereInput = {
    AND?: Enumerable<threadAttachmentsWhereInput>
    OR?: Enumerable<threadAttachmentsWhereInput>
    NOT?: Enumerable<threadAttachmentsWhereInput>
    id?: IntFilter | number
    link?: StringFilter | string
    type?: EnumAttachmentTypeFilter | AttachmentType
    threadId?: IntNullableFilter | number | null
    thread?: XOR<ThreadRelationFilter, ThreadWhereInput> | null
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type threadAttachmentsOrderByWithRelationInput = {
    id?: SortOrder
    link?: SortOrder
    type?: SortOrder
    threadId?: SortOrder
    thread?: ThreadOrderByWithRelationInput
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type threadAttachmentsWhereUniqueInput = {
    id?: number
  }

  export type threadAttachmentsOrderByWithAggregationInput = {
    id?: SortOrder
    link?: SortOrder
    type?: SortOrder
    threadId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: threadAttachmentsCountOrderByAggregateInput
    _avg?: threadAttachmentsAvgOrderByAggregateInput
    _max?: threadAttachmentsMaxOrderByAggregateInput
    _min?: threadAttachmentsMinOrderByAggregateInput
    _sum?: threadAttachmentsSumOrderByAggregateInput
  }

  export type threadAttachmentsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<threadAttachmentsScalarWhereWithAggregatesInput>
    OR?: Enumerable<threadAttachmentsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<threadAttachmentsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    link?: StringWithAggregatesFilter | string
    type?: EnumAttachmentTypeWithAggregatesFilter | AttachmentType
    threadId?: IntNullableWithAggregatesFilter | number | null
    isActive?: BoolWithAggregatesFilter | boolean
    isDelete?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type reactionWhereInput = {
    AND?: Enumerable<reactionWhereInput>
    OR?: Enumerable<reactionWhereInput>
    NOT?: Enumerable<reactionWhereInput>
    id?: IntFilter | number
    react?: EnumReactTypeFilter | ReactType
    threadId?: IntNullableFilter | number | null
    thread?: XOR<ThreadRelationFilter, ThreadWhereInput> | null
    commentId?: IntNullableFilter | number | null
    comment?: XOR<CommentRelationFilter, CommentWhereInput> | null
    userId?: IntNullableFilter | number | null
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type reactionOrderByWithRelationInput = {
    id?: SortOrder
    react?: SortOrder
    threadId?: SortOrder
    thread?: ThreadOrderByWithRelationInput
    commentId?: SortOrder
    comment?: CommentOrderByWithRelationInput
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type reactionWhereUniqueInput = {
    id?: number
  }

  export type reactionOrderByWithAggregationInput = {
    id?: SortOrder
    react?: SortOrder
    threadId?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: reactionCountOrderByAggregateInput
    _avg?: reactionAvgOrderByAggregateInput
    _max?: reactionMaxOrderByAggregateInput
    _min?: reactionMinOrderByAggregateInput
    _sum?: reactionSumOrderByAggregateInput
  }

  export type reactionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<reactionScalarWhereWithAggregatesInput>
    OR?: Enumerable<reactionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<reactionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    react?: EnumReactTypeWithAggregatesFilter | ReactType
    threadId?: IntNullableWithAggregatesFilter | number | null
    commentId?: IntNullableWithAggregatesFilter | number | null
    userId?: IntNullableWithAggregatesFilter | number | null
    isActive?: BoolWithAggregatesFilter | boolean
    isDelete?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CommentWhereInput = {
    AND?: Enumerable<CommentWhereInput>
    OR?: Enumerable<CommentWhereInput>
    NOT?: Enumerable<CommentWhereInput>
    id?: IntFilter | number
    content?: StringFilter | string
    threadId?: IntNullableFilter | number | null
    thread?: XOR<ThreadRelationFilter, ThreadWhereInput> | null
    userId?: IntNullableFilter | number | null
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    parentId?: IntNullableFilter | number | null
    parent?: XOR<CommentRelationFilter, CommentWhereInput> | null
    children?: CommentListRelationFilter
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    reaction?: ReactionListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    threadId?: SortOrder
    thread?: ThreadOrderByWithRelationInput
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    parentId?: SortOrder
    parent?: CommentOrderByWithRelationInput
    children?: CommentOrderByRelationAggregateInput
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reaction?: reactionOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = {
    id?: number
  }

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CommentScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    content?: StringWithAggregatesFilter | string
    threadId?: IntNullableWithAggregatesFilter | number | null
    userId?: IntNullableWithAggregatesFilter | number | null
    parentId?: IntNullableWithAggregatesFilter | number | null
    isActive?: BoolWithAggregatesFilter | boolean
    isDelete?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: IntFilter | number
    refreshToken?: StringFilter | string
    sign?: StringFilter | string
    userId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    ip?: StringNullableFilter | string | null
    location?: StringNullableFilter | string | null
    device?: StringNullableFilter | string | null
    expireAt?: DateTimeFilter | Date | string
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    sign?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    ip?: SortOrder
    location?: SortOrder
    device?: SortOrder
    expireAt?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionWhereUniqueInput = {
    id?: number
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    sign?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    location?: SortOrder
    device?: SortOrder
    expireAt?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    refreshToken?: StringWithAggregatesFilter | string
    sign?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    ip?: StringNullableWithAggregatesFilter | string | null
    location?: StringNullableWithAggregatesFilter | string | null
    device?: StringNullableWithAggregatesFilter | string | null
    expireAt?: DateTimeWithAggregatesFilter | Date | string
    isActive?: BoolWithAggregatesFilter | boolean
    isDelete?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type MonitoringWhereInput = {
    AND?: Enumerable<MonitoringWhereInput>
    OR?: Enumerable<MonitoringWhereInput>
    NOT?: Enumerable<MonitoringWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    type?: EnumLogTypeFilter | LogType
    detail?: JsonNullableFilter
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type MonitoringOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    type?: SortOrder
    detail?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonitoringWhereUniqueInput = {
    id?: number
  }

  export type MonitoringOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    detail?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MonitoringCountOrderByAggregateInput
    _avg?: MonitoringAvgOrderByAggregateInput
    _max?: MonitoringMaxOrderByAggregateInput
    _min?: MonitoringMinOrderByAggregateInput
    _sum?: MonitoringSumOrderByAggregateInput
  }

  export type MonitoringScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MonitoringScalarWhereWithAggregatesInput>
    OR?: Enumerable<MonitoringScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MonitoringScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    type?: EnumLogTypeWithAggregatesFilter | LogType
    detail?: JsonNullableWithAggregatesFilter
    isActive?: BoolWithAggregatesFilter | boolean
    isDelete?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    user?: relationshipCreateNestedManyWithoutUserInput
    relations?: relationshipCreateNestedManyWithoutFriendInput
    monitoring?: MonitoringCreateNestedManyWithoutUserInput
    userThreads?: userThreadsCreateNestedManyWithoutUserInput
    reaction?: reactionCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    user?: relationshipUncheckedCreateNestedManyWithoutUserInput
    relations?: relationshipUncheckedCreateNestedManyWithoutFriendInput
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutUserInput
    userThreads?: userThreadsUncheckedCreateNestedManyWithoutUserInput
    reaction?: reactionUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    user?: relationshipUpdateManyWithoutUserNestedInput
    relations?: relationshipUpdateManyWithoutFriendNestedInput
    monitoring?: MonitoringUpdateManyWithoutUserNestedInput
    userThreads?: userThreadsUpdateManyWithoutUserNestedInput
    reaction?: reactionUpdateManyWithoutUserNestedInput
    Comment?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    user?: relationshipUncheckedUpdateManyWithoutUserNestedInput
    relations?: relationshipUncheckedUpdateManyWithoutFriendNestedInput
    monitoring?: MonitoringUncheckedUpdateManyWithoutUserNestedInput
    userThreads?: userThreadsUncheckedUpdateManyWithoutUserNestedInput
    reaction?: reactionUncheckedUpdateManyWithoutUserNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type relationshipCreateInput = {
    content: string
    user?: UserCreateNestedOneWithoutUserInput
    friend?: UserCreateNestedOneWithoutRelationsInput
    relationType: RelationType
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type relationshipUncheckedCreateInput = {
    id?: number
    content: string
    userId?: number | null
    friendId?: number | null
    relationType: RelationType
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type relationshipUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutUserNestedInput
    friend?: UserUpdateOneWithoutRelationsNestedInput
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type relationshipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    friendId?: NullableIntFieldUpdateOperationsInput | number | null
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type relationshipCreateManyInput = {
    id?: number
    content: string
    userId?: number | null
    friendId?: number | null
    relationType: RelationType
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type relationshipUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type relationshipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    friendId?: NullableIntFieldUpdateOperationsInput | number | null
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userThreadsCreateInput = {
    user?: UserCreateNestedOneWithoutUserThreadsInput
    thread?: ThreadCreateNestedOneWithoutUserInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userThreadsUncheckedCreateInput = {
    id?: number
    userId?: number | null
    threadId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userThreadsUpdateInput = {
    user?: UserUpdateOneWithoutUserThreadsNestedInput
    thread?: ThreadUpdateOneWithoutUserNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userThreadsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userThreadsCreateManyInput = {
    id?: number
    userId?: number | null
    threadId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userThreadsUpdateManyMutationInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userThreadsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadCreateInput = {
    content: string
    totalReact?: number | null
    totalComment?: number | null
    author?: UserCreateNestedOneWithoutThreadCreatedInput
    privacy?: ThreadPrivacy
    destination?: DestinationThread
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userThreadsCreateNestedManyWithoutThreadInput
    attachment?: threadAttachmentsCreateNestedManyWithoutThreadInput
    reaction?: reactionCreateNestedManyWithoutThreadInput
    Comment?: CommentCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateInput = {
    id?: number
    content: string
    totalReact?: number | null
    totalComment?: number | null
    authorId?: number | null
    privacy?: ThreadPrivacy
    destination?: DestinationThread
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userThreadsUncheckedCreateNestedManyWithoutThreadInput
    attachment?: threadAttachmentsUncheckedCreateNestedManyWithoutThreadInput
    reaction?: reactionUncheckedCreateNestedManyWithoutThreadInput
    Comment?: CommentUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    totalReact?: NullableIntFieldUpdateOperationsInput | number | null
    totalComment?: NullableIntFieldUpdateOperationsInput | number | null
    author?: UserUpdateOneWithoutThreadCreatedNestedInput
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userThreadsUpdateManyWithoutThreadNestedInput
    attachment?: threadAttachmentsUpdateManyWithoutThreadNestedInput
    reaction?: reactionUpdateManyWithoutThreadNestedInput
    Comment?: CommentUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    totalReact?: NullableIntFieldUpdateOperationsInput | number | null
    totalComment?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userThreadsUncheckedUpdateManyWithoutThreadNestedInput
    attachment?: threadAttachmentsUncheckedUpdateManyWithoutThreadNestedInput
    reaction?: reactionUncheckedUpdateManyWithoutThreadNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ThreadCreateManyInput = {
    id?: number
    content: string
    totalReact?: number | null
    totalComment?: number | null
    authorId?: number | null
    privacy?: ThreadPrivacy
    destination?: DestinationThread
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ThreadUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    totalReact?: NullableIntFieldUpdateOperationsInput | number | null
    totalComment?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    totalReact?: NullableIntFieldUpdateOperationsInput | number | null
    totalComment?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type threadAttachmentsCreateInput = {
    link: string
    type: AttachmentType
    thread?: ThreadCreateNestedOneWithoutAttachmentInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type threadAttachmentsUncheckedCreateInput = {
    id?: number
    link: string
    type: AttachmentType
    threadId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type threadAttachmentsUpdateInput = {
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    thread?: ThreadUpdateOneWithoutAttachmentNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type threadAttachmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type threadAttachmentsCreateManyInput = {
    id?: number
    link: string
    type: AttachmentType
    threadId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type threadAttachmentsUpdateManyMutationInput = {
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type threadAttachmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reactionCreateInput = {
    react: ReactType
    thread?: ThreadCreateNestedOneWithoutReactionInput
    comment?: CommentCreateNestedOneWithoutReactionInput
    user?: UserCreateNestedOneWithoutReactionInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reactionUncheckedCreateInput = {
    id?: number
    react: ReactType
    threadId?: number | null
    commentId?: number | null
    userId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reactionUpdateInput = {
    react?: EnumReactTypeFieldUpdateOperationsInput | ReactType
    thread?: ThreadUpdateOneWithoutReactionNestedInput
    comment?: CommentUpdateOneWithoutReactionNestedInput
    user?: UserUpdateOneWithoutReactionNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    react?: EnumReactTypeFieldUpdateOperationsInput | ReactType
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reactionCreateManyInput = {
    id?: number
    react: ReactType
    threadId?: number | null
    commentId?: number | null
    userId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reactionUpdateManyMutationInput = {
    react?: EnumReactTypeFieldUpdateOperationsInput | ReactType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    react?: EnumReactTypeFieldUpdateOperationsInput | ReactType
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    content: string
    thread?: ThreadCreateNestedOneWithoutCommentInput
    user?: UserCreateNestedOneWithoutCommentInput
    parent?: CommentCreateNestedOneWithoutChildrenInput
    children?: CommentCreateNestedManyWithoutParentInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reaction?: reactionCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    content: string
    threadId?: number | null
    userId?: number | null
    parentId?: number | null
    children?: CommentUncheckedCreateNestedManyWithoutParentInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reaction?: reactionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    thread?: ThreadUpdateOneWithoutCommentNestedInput
    user?: UserUpdateOneWithoutCommentNestedInput
    parent?: CommentUpdateOneWithoutChildrenNestedInput
    children?: CommentUpdateManyWithoutParentNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: reactionUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    children?: CommentUncheckedUpdateManyWithoutParentNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: reactionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: number
    content: string
    threadId?: number | null
    userId?: number | null
    parentId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    refreshToken: string
    sign: string
    user: UserCreateNestedOneWithoutSessionInput
    ip?: string | null
    location?: string | null
    device?: string | null
    expireAt: Date | string
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    refreshToken: string
    sign: string
    userId: number
    ip?: string | null
    location?: string | null
    device?: string | null
    expireAt: Date | string
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string
    sign?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSessionNestedInput
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    sign?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: number
    refreshToken: string
    sign: string
    userId: number
    ip?: string | null
    location?: string | null
    device?: string | null
    expireAt: Date | string
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string
    sign?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    sign?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringCreateInput = {
    user: UserCreateNestedOneWithoutMonitoringInput
    type: LogType
    detail?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonitoringUncheckedCreateInput = {
    id?: number
    userId: number
    type: LogType
    detail?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonitoringUpdateInput = {
    user?: UserUpdateOneRequiredWithoutMonitoringNestedInput
    type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    detail?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    detail?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringCreateManyInput = {
    id?: number
    userId: number
    type: LogType
    detail?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonitoringUpdateManyMutationInput = {
    type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    detail?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    detail?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type EnumGenderNullableFilter = {
    equals?: Gender | null
    in?: Enumerable<Gender> | null
    notIn?: Enumerable<Gender> | null
    not?: NestedEnumGenderNullableFilter | Gender | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type ThreadListRelationFilter = {
    every?: ThreadWhereInput
    some?: ThreadWhereInput
    none?: ThreadWhereInput
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type RelationshipListRelationFilter = {
    every?: relationshipWhereInput
    some?: relationshipWhereInput
    none?: relationshipWhereInput
  }

  export type MonitoringListRelationFilter = {
    every?: MonitoringWhereInput
    some?: MonitoringWhereInput
    none?: MonitoringWhereInput
  }

  export type UserThreadsListRelationFilter = {
    every?: userThreadsWhereInput
    some?: userThreadsWhereInput
    none?: userThreadsWhereInput
  }

  export type ReactionListRelationFilter = {
    every?: reactionWhereInput
    some?: reactionWhereInput
    none?: reactionWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type ThreadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type relationshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonitoringOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userThreadsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    surName?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    avatar?: SortOrder
    cover?: SortOrder
    information?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    surName?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    avatar?: SortOrder
    cover?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    surName?: SortOrder
    fullName?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    avatar?: SortOrder
    cover?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type EnumGenderNullableWithAggregatesFilter = {
    equals?: Gender | null
    in?: Enumerable<Gender> | null
    notIn?: Enumerable<Gender> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter | Gender | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumGenderNullableFilter
    _max?: NestedEnumGenderNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EnumRelationTypeFilter = {
    equals?: RelationType
    in?: Enumerable<RelationType>
    notIn?: Enumerable<RelationType>
    not?: NestedEnumRelationTypeFilter | RelationType
  }

  export type relationshipCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    relationType?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type relationshipAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type relationshipMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    relationType?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type relationshipMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    relationType?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type relationshipSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type EnumRelationTypeWithAggregatesFilter = {
    equals?: RelationType
    in?: Enumerable<RelationType>
    notIn?: Enumerable<RelationType>
    not?: NestedEnumRelationTypeWithAggregatesFilter | RelationType
    _count?: NestedIntFilter
    _min?: NestedEnumRelationTypeFilter
    _max?: NestedEnumRelationTypeFilter
  }

  export type ThreadRelationFilter = {
    is?: ThreadWhereInput | null
    isNot?: ThreadWhereInput | null
  }

  export type userThreadsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    threadId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userThreadsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    threadId?: SortOrder
  }

  export type userThreadsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    threadId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userThreadsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    threadId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userThreadsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    threadId?: SortOrder
  }

  export type EnumThreadPrivacyFilter = {
    equals?: ThreadPrivacy
    in?: Enumerable<ThreadPrivacy>
    notIn?: Enumerable<ThreadPrivacy>
    not?: NestedEnumThreadPrivacyFilter | ThreadPrivacy
  }

  export type EnumDestinationThreadFilter = {
    equals?: DestinationThread
    in?: Enumerable<DestinationThread>
    notIn?: Enumerable<DestinationThread>
    not?: NestedEnumDestinationThreadFilter | DestinationThread
  }

  export type ThreadAttachmentsListRelationFilter = {
    every?: threadAttachmentsWhereInput
    some?: threadAttachmentsWhereInput
    none?: threadAttachmentsWhereInput
  }

  export type threadAttachmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThreadCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    totalReact?: SortOrder
    totalComment?: SortOrder
    authorId?: SortOrder
    privacy?: SortOrder
    destination?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ThreadAvgOrderByAggregateInput = {
    id?: SortOrder
    totalReact?: SortOrder
    totalComment?: SortOrder
    authorId?: SortOrder
  }

  export type ThreadMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    totalReact?: SortOrder
    totalComment?: SortOrder
    authorId?: SortOrder
    privacy?: SortOrder
    destination?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ThreadMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    totalReact?: SortOrder
    totalComment?: SortOrder
    authorId?: SortOrder
    privacy?: SortOrder
    destination?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ThreadSumOrderByAggregateInput = {
    id?: SortOrder
    totalReact?: SortOrder
    totalComment?: SortOrder
    authorId?: SortOrder
  }

  export type EnumThreadPrivacyWithAggregatesFilter = {
    equals?: ThreadPrivacy
    in?: Enumerable<ThreadPrivacy>
    notIn?: Enumerable<ThreadPrivacy>
    not?: NestedEnumThreadPrivacyWithAggregatesFilter | ThreadPrivacy
    _count?: NestedIntFilter
    _min?: NestedEnumThreadPrivacyFilter
    _max?: NestedEnumThreadPrivacyFilter
  }

  export type EnumDestinationThreadWithAggregatesFilter = {
    equals?: DestinationThread
    in?: Enumerable<DestinationThread>
    notIn?: Enumerable<DestinationThread>
    not?: NestedEnumDestinationThreadWithAggregatesFilter | DestinationThread
    _count?: NestedIntFilter
    _min?: NestedEnumDestinationThreadFilter
    _max?: NestedEnumDestinationThreadFilter
  }

  export type EnumAttachmentTypeFilter = {
    equals?: AttachmentType
    in?: Enumerable<AttachmentType>
    notIn?: Enumerable<AttachmentType>
    not?: NestedEnumAttachmentTypeFilter | AttachmentType
  }

  export type threadAttachmentsCountOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    type?: SortOrder
    threadId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type threadAttachmentsAvgOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
  }

  export type threadAttachmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    type?: SortOrder
    threadId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type threadAttachmentsMinOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    type?: SortOrder
    threadId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type threadAttachmentsSumOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
  }

  export type EnumAttachmentTypeWithAggregatesFilter = {
    equals?: AttachmentType
    in?: Enumerable<AttachmentType>
    notIn?: Enumerable<AttachmentType>
    not?: NestedEnumAttachmentTypeWithAggregatesFilter | AttachmentType
    _count?: NestedIntFilter
    _min?: NestedEnumAttachmentTypeFilter
    _max?: NestedEnumAttachmentTypeFilter
  }

  export type EnumReactTypeFilter = {
    equals?: ReactType
    in?: Enumerable<ReactType>
    notIn?: Enumerable<ReactType>
    not?: NestedEnumReactTypeFilter | ReactType
  }

  export type CommentRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type reactionCountOrderByAggregateInput = {
    id?: SortOrder
    react?: SortOrder
    threadId?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type reactionAvgOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type reactionMaxOrderByAggregateInput = {
    id?: SortOrder
    react?: SortOrder
    threadId?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type reactionMinOrderByAggregateInput = {
    id?: SortOrder
    react?: SortOrder
    threadId?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type reactionSumOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type EnumReactTypeWithAggregatesFilter = {
    equals?: ReactType
    in?: Enumerable<ReactType>
    notIn?: Enumerable<ReactType>
    not?: NestedEnumReactTypeWithAggregatesFilter | ReactType
    _count?: NestedIntFilter
    _min?: NestedEnumReactTypeFilter
    _max?: NestedEnumReactTypeFilter
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    sign?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    location?: SortOrder
    device?: SortOrder
    expireAt?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    sign?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    location?: SortOrder
    device?: SortOrder
    expireAt?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    sign?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    location?: SortOrder
    device?: SortOrder
    expireAt?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumLogTypeFilter = {
    equals?: LogType
    in?: Enumerable<LogType>
    notIn?: Enumerable<LogType>
    not?: NestedEnumLogTypeFilter | LogType
  }

  export type MonitoringCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    detail?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonitoringAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MonitoringMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonitoringMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonitoringSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumLogTypeWithAggregatesFilter = {
    equals?: LogType
    in?: Enumerable<LogType>
    notIn?: Enumerable<LogType>
    not?: NestedEnumLogTypeWithAggregatesFilter | LogType
    _count?: NestedIntFilter
    _min?: NestedEnumLogTypeFilter
    _max?: NestedEnumLogTypeFilter
  }

  export type ThreadCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutAuthorInput>, Enumerable<ThreadUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutAuthorInput>
    createMany?: ThreadCreateManyAuthorInputEnvelope
    connect?: Enumerable<ThreadWhereUniqueInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type relationshipCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<relationshipCreateWithoutUserInput>, Enumerable<relationshipUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<relationshipCreateOrConnectWithoutUserInput>
    createMany?: relationshipCreateManyUserInputEnvelope
    connect?: Enumerable<relationshipWhereUniqueInput>
  }

  export type relationshipCreateNestedManyWithoutFriendInput = {
    create?: XOR<Enumerable<relationshipCreateWithoutFriendInput>, Enumerable<relationshipUncheckedCreateWithoutFriendInput>>
    connectOrCreate?: Enumerable<relationshipCreateOrConnectWithoutFriendInput>
    createMany?: relationshipCreateManyFriendInputEnvelope
    connect?: Enumerable<relationshipWhereUniqueInput>
  }

  export type MonitoringCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<MonitoringCreateWithoutUserInput>, Enumerable<MonitoringUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<MonitoringCreateOrConnectWithoutUserInput>
    createMany?: MonitoringCreateManyUserInputEnvelope
    connect?: Enumerable<MonitoringWhereUniqueInput>
  }

  export type userThreadsCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<userThreadsCreateWithoutUserInput>, Enumerable<userThreadsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<userThreadsCreateOrConnectWithoutUserInput>
    createMany?: userThreadsCreateManyUserInputEnvelope
    connect?: Enumerable<userThreadsWhereUniqueInput>
  }

  export type reactionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<reactionCreateWithoutUserInput>, Enumerable<reactionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<reactionCreateOrConnectWithoutUserInput>
    createMany?: reactionCreateManyUserInputEnvelope
    connect?: Enumerable<reactionWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type ThreadUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutAuthorInput>, Enumerable<ThreadUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutAuthorInput>
    createMany?: ThreadCreateManyAuthorInputEnvelope
    connect?: Enumerable<ThreadWhereUniqueInput>
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type relationshipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<relationshipCreateWithoutUserInput>, Enumerable<relationshipUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<relationshipCreateOrConnectWithoutUserInput>
    createMany?: relationshipCreateManyUserInputEnvelope
    connect?: Enumerable<relationshipWhereUniqueInput>
  }

  export type relationshipUncheckedCreateNestedManyWithoutFriendInput = {
    create?: XOR<Enumerable<relationshipCreateWithoutFriendInput>, Enumerable<relationshipUncheckedCreateWithoutFriendInput>>
    connectOrCreate?: Enumerable<relationshipCreateOrConnectWithoutFriendInput>
    createMany?: relationshipCreateManyFriendInputEnvelope
    connect?: Enumerable<relationshipWhereUniqueInput>
  }

  export type MonitoringUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<MonitoringCreateWithoutUserInput>, Enumerable<MonitoringUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<MonitoringCreateOrConnectWithoutUserInput>
    createMany?: MonitoringCreateManyUserInputEnvelope
    connect?: Enumerable<MonitoringWhereUniqueInput>
  }

  export type userThreadsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<userThreadsCreateWithoutUserInput>, Enumerable<userThreadsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<userThreadsCreateOrConnectWithoutUserInput>
    createMany?: userThreadsCreateManyUserInputEnvelope
    connect?: Enumerable<userThreadsWhereUniqueInput>
  }

  export type reactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<reactionCreateWithoutUserInput>, Enumerable<reactionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<reactionCreateOrConnectWithoutUserInput>
    createMany?: reactionCreateManyUserInputEnvelope
    connect?: Enumerable<reactionWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: Gender | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ThreadUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutAuthorInput>, Enumerable<ThreadUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ThreadUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ThreadCreateManyAuthorInputEnvelope
    set?: Enumerable<ThreadWhereUniqueInput>
    disconnect?: Enumerable<ThreadWhereUniqueInput>
    delete?: Enumerable<ThreadWhereUniqueInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
    update?: Enumerable<ThreadUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ThreadUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ThreadScalarWhereInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type relationshipUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<relationshipCreateWithoutUserInput>, Enumerable<relationshipUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<relationshipCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<relationshipUpsertWithWhereUniqueWithoutUserInput>
    createMany?: relationshipCreateManyUserInputEnvelope
    set?: Enumerable<relationshipWhereUniqueInput>
    disconnect?: Enumerable<relationshipWhereUniqueInput>
    delete?: Enumerable<relationshipWhereUniqueInput>
    connect?: Enumerable<relationshipWhereUniqueInput>
    update?: Enumerable<relationshipUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<relationshipUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<relationshipScalarWhereInput>
  }

  export type relationshipUpdateManyWithoutFriendNestedInput = {
    create?: XOR<Enumerable<relationshipCreateWithoutFriendInput>, Enumerable<relationshipUncheckedCreateWithoutFriendInput>>
    connectOrCreate?: Enumerable<relationshipCreateOrConnectWithoutFriendInput>
    upsert?: Enumerable<relationshipUpsertWithWhereUniqueWithoutFriendInput>
    createMany?: relationshipCreateManyFriendInputEnvelope
    set?: Enumerable<relationshipWhereUniqueInput>
    disconnect?: Enumerable<relationshipWhereUniqueInput>
    delete?: Enumerable<relationshipWhereUniqueInput>
    connect?: Enumerable<relationshipWhereUniqueInput>
    update?: Enumerable<relationshipUpdateWithWhereUniqueWithoutFriendInput>
    updateMany?: Enumerable<relationshipUpdateManyWithWhereWithoutFriendInput>
    deleteMany?: Enumerable<relationshipScalarWhereInput>
  }

  export type MonitoringUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<MonitoringCreateWithoutUserInput>, Enumerable<MonitoringUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<MonitoringCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<MonitoringUpsertWithWhereUniqueWithoutUserInput>
    createMany?: MonitoringCreateManyUserInputEnvelope
    set?: Enumerable<MonitoringWhereUniqueInput>
    disconnect?: Enumerable<MonitoringWhereUniqueInput>
    delete?: Enumerable<MonitoringWhereUniqueInput>
    connect?: Enumerable<MonitoringWhereUniqueInput>
    update?: Enumerable<MonitoringUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<MonitoringUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<MonitoringScalarWhereInput>
  }

  export type userThreadsUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<userThreadsCreateWithoutUserInput>, Enumerable<userThreadsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<userThreadsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<userThreadsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: userThreadsCreateManyUserInputEnvelope
    set?: Enumerable<userThreadsWhereUniqueInput>
    disconnect?: Enumerable<userThreadsWhereUniqueInput>
    delete?: Enumerable<userThreadsWhereUniqueInput>
    connect?: Enumerable<userThreadsWhereUniqueInput>
    update?: Enumerable<userThreadsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<userThreadsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<userThreadsScalarWhereInput>
  }

  export type reactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<reactionCreateWithoutUserInput>, Enumerable<reactionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<reactionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<reactionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: reactionCreateManyUserInputEnvelope
    set?: Enumerable<reactionWhereUniqueInput>
    disconnect?: Enumerable<reactionWhereUniqueInput>
    delete?: Enumerable<reactionWhereUniqueInput>
    connect?: Enumerable<reactionWhereUniqueInput>
    update?: Enumerable<reactionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<reactionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<reactionScalarWhereInput>
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ThreadUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutAuthorInput>, Enumerable<ThreadUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ThreadUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ThreadCreateManyAuthorInputEnvelope
    set?: Enumerable<ThreadWhereUniqueInput>
    disconnect?: Enumerable<ThreadWhereUniqueInput>
    delete?: Enumerable<ThreadWhereUniqueInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
    update?: Enumerable<ThreadUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ThreadUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ThreadScalarWhereInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type relationshipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<relationshipCreateWithoutUserInput>, Enumerable<relationshipUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<relationshipCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<relationshipUpsertWithWhereUniqueWithoutUserInput>
    createMany?: relationshipCreateManyUserInputEnvelope
    set?: Enumerable<relationshipWhereUniqueInput>
    disconnect?: Enumerable<relationshipWhereUniqueInput>
    delete?: Enumerable<relationshipWhereUniqueInput>
    connect?: Enumerable<relationshipWhereUniqueInput>
    update?: Enumerable<relationshipUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<relationshipUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<relationshipScalarWhereInput>
  }

  export type relationshipUncheckedUpdateManyWithoutFriendNestedInput = {
    create?: XOR<Enumerable<relationshipCreateWithoutFriendInput>, Enumerable<relationshipUncheckedCreateWithoutFriendInput>>
    connectOrCreate?: Enumerable<relationshipCreateOrConnectWithoutFriendInput>
    upsert?: Enumerable<relationshipUpsertWithWhereUniqueWithoutFriendInput>
    createMany?: relationshipCreateManyFriendInputEnvelope
    set?: Enumerable<relationshipWhereUniqueInput>
    disconnect?: Enumerable<relationshipWhereUniqueInput>
    delete?: Enumerable<relationshipWhereUniqueInput>
    connect?: Enumerable<relationshipWhereUniqueInput>
    update?: Enumerable<relationshipUpdateWithWhereUniqueWithoutFriendInput>
    updateMany?: Enumerable<relationshipUpdateManyWithWhereWithoutFriendInput>
    deleteMany?: Enumerable<relationshipScalarWhereInput>
  }

  export type MonitoringUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<MonitoringCreateWithoutUserInput>, Enumerable<MonitoringUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<MonitoringCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<MonitoringUpsertWithWhereUniqueWithoutUserInput>
    createMany?: MonitoringCreateManyUserInputEnvelope
    set?: Enumerable<MonitoringWhereUniqueInput>
    disconnect?: Enumerable<MonitoringWhereUniqueInput>
    delete?: Enumerable<MonitoringWhereUniqueInput>
    connect?: Enumerable<MonitoringWhereUniqueInput>
    update?: Enumerable<MonitoringUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<MonitoringUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<MonitoringScalarWhereInput>
  }

  export type userThreadsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<userThreadsCreateWithoutUserInput>, Enumerable<userThreadsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<userThreadsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<userThreadsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: userThreadsCreateManyUserInputEnvelope
    set?: Enumerable<userThreadsWhereUniqueInput>
    disconnect?: Enumerable<userThreadsWhereUniqueInput>
    delete?: Enumerable<userThreadsWhereUniqueInput>
    connect?: Enumerable<userThreadsWhereUniqueInput>
    update?: Enumerable<userThreadsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<userThreadsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<userThreadsScalarWhereInput>
  }

  export type reactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<reactionCreateWithoutUserInput>, Enumerable<reactionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<reactionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<reactionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: reactionCreateManyUserInputEnvelope
    set?: Enumerable<reactionWhereUniqueInput>
    disconnect?: Enumerable<reactionWhereUniqueInput>
    delete?: Enumerable<reactionWhereUniqueInput>
    connect?: Enumerable<reactionWhereUniqueInput>
    update?: Enumerable<reactionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<reactionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<reactionScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutUserInput = {
    create?: XOR<UserCreateWithoutUserInput, UserUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRelationsInput = {
    create?: XOR<UserCreateWithoutRelationsInput, UserUncheckedCreateWithoutRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRelationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserCreateWithoutUserInput, UserUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserInput
    upsert?: UserUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUserInput, UserUncheckedUpdateWithoutUserInput>
  }

  export type UserUpdateOneWithoutRelationsNestedInput = {
    create?: XOR<UserCreateWithoutRelationsInput, UserUncheckedCreateWithoutRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRelationsInput
    upsert?: UserUpsertWithoutRelationsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutRelationsInput, UserUncheckedUpdateWithoutRelationsInput>
  }

  export type EnumRelationTypeFieldUpdateOperationsInput = {
    set?: RelationType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutUserThreadsInput = {
    create?: XOR<UserCreateWithoutUserThreadsInput, UserUncheckedCreateWithoutUserThreadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserThreadsInput
    connect?: UserWhereUniqueInput
  }

  export type ThreadCreateNestedOneWithoutUserInput = {
    create?: XOR<ThreadCreateWithoutUserInput, ThreadUncheckedCreateWithoutUserInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutUserInput
    connect?: ThreadWhereUniqueInput
  }

  export type UserUpdateOneWithoutUserThreadsNestedInput = {
    create?: XOR<UserCreateWithoutUserThreadsInput, UserUncheckedCreateWithoutUserThreadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserThreadsInput
    upsert?: UserUpsertWithoutUserThreadsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUserThreadsInput, UserUncheckedUpdateWithoutUserThreadsInput>
  }

  export type ThreadUpdateOneWithoutUserNestedInput = {
    create?: XOR<ThreadCreateWithoutUserInput, ThreadUncheckedCreateWithoutUserInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutUserInput
    upsert?: ThreadUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: ThreadWhereUniqueInput
    update?: XOR<ThreadUpdateWithoutUserInput, ThreadUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutThreadCreatedInput = {
    create?: XOR<UserCreateWithoutThreadCreatedInput, UserUncheckedCreateWithoutThreadCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type userThreadsCreateNestedManyWithoutThreadInput = {
    create?: XOR<Enumerable<userThreadsCreateWithoutThreadInput>, Enumerable<userThreadsUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<userThreadsCreateOrConnectWithoutThreadInput>
    createMany?: userThreadsCreateManyThreadInputEnvelope
    connect?: Enumerable<userThreadsWhereUniqueInput>
  }

  export type threadAttachmentsCreateNestedManyWithoutThreadInput = {
    create?: XOR<Enumerable<threadAttachmentsCreateWithoutThreadInput>, Enumerable<threadAttachmentsUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<threadAttachmentsCreateOrConnectWithoutThreadInput>
    createMany?: threadAttachmentsCreateManyThreadInputEnvelope
    connect?: Enumerable<threadAttachmentsWhereUniqueInput>
  }

  export type reactionCreateNestedManyWithoutThreadInput = {
    create?: XOR<Enumerable<reactionCreateWithoutThreadInput>, Enumerable<reactionUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<reactionCreateOrConnectWithoutThreadInput>
    createMany?: reactionCreateManyThreadInputEnvelope
    connect?: Enumerable<reactionWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutThreadInput = {
    create?: XOR<Enumerable<CommentCreateWithoutThreadInput>, Enumerable<CommentUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutThreadInput>
    createMany?: CommentCreateManyThreadInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type userThreadsUncheckedCreateNestedManyWithoutThreadInput = {
    create?: XOR<Enumerable<userThreadsCreateWithoutThreadInput>, Enumerable<userThreadsUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<userThreadsCreateOrConnectWithoutThreadInput>
    createMany?: userThreadsCreateManyThreadInputEnvelope
    connect?: Enumerable<userThreadsWhereUniqueInput>
  }

  export type threadAttachmentsUncheckedCreateNestedManyWithoutThreadInput = {
    create?: XOR<Enumerable<threadAttachmentsCreateWithoutThreadInput>, Enumerable<threadAttachmentsUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<threadAttachmentsCreateOrConnectWithoutThreadInput>
    createMany?: threadAttachmentsCreateManyThreadInputEnvelope
    connect?: Enumerable<threadAttachmentsWhereUniqueInput>
  }

  export type reactionUncheckedCreateNestedManyWithoutThreadInput = {
    create?: XOR<Enumerable<reactionCreateWithoutThreadInput>, Enumerable<reactionUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<reactionCreateOrConnectWithoutThreadInput>
    createMany?: reactionCreateManyThreadInputEnvelope
    connect?: Enumerable<reactionWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutThreadInput = {
    create?: XOR<Enumerable<CommentCreateWithoutThreadInput>, Enumerable<CommentUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutThreadInput>
    createMany?: CommentCreateManyThreadInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type UserUpdateOneWithoutThreadCreatedNestedInput = {
    create?: XOR<UserCreateWithoutThreadCreatedInput, UserUncheckedCreateWithoutThreadCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadCreatedInput
    upsert?: UserUpsertWithoutThreadCreatedInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutThreadCreatedInput, UserUncheckedUpdateWithoutThreadCreatedInput>
  }

  export type EnumThreadPrivacyFieldUpdateOperationsInput = {
    set?: ThreadPrivacy
  }

  export type EnumDestinationThreadFieldUpdateOperationsInput = {
    set?: DestinationThread
  }

  export type userThreadsUpdateManyWithoutThreadNestedInput = {
    create?: XOR<Enumerable<userThreadsCreateWithoutThreadInput>, Enumerable<userThreadsUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<userThreadsCreateOrConnectWithoutThreadInput>
    upsert?: Enumerable<userThreadsUpsertWithWhereUniqueWithoutThreadInput>
    createMany?: userThreadsCreateManyThreadInputEnvelope
    set?: Enumerable<userThreadsWhereUniqueInput>
    disconnect?: Enumerable<userThreadsWhereUniqueInput>
    delete?: Enumerable<userThreadsWhereUniqueInput>
    connect?: Enumerable<userThreadsWhereUniqueInput>
    update?: Enumerable<userThreadsUpdateWithWhereUniqueWithoutThreadInput>
    updateMany?: Enumerable<userThreadsUpdateManyWithWhereWithoutThreadInput>
    deleteMany?: Enumerable<userThreadsScalarWhereInput>
  }

  export type threadAttachmentsUpdateManyWithoutThreadNestedInput = {
    create?: XOR<Enumerable<threadAttachmentsCreateWithoutThreadInput>, Enumerable<threadAttachmentsUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<threadAttachmentsCreateOrConnectWithoutThreadInput>
    upsert?: Enumerable<threadAttachmentsUpsertWithWhereUniqueWithoutThreadInput>
    createMany?: threadAttachmentsCreateManyThreadInputEnvelope
    set?: Enumerable<threadAttachmentsWhereUniqueInput>
    disconnect?: Enumerable<threadAttachmentsWhereUniqueInput>
    delete?: Enumerable<threadAttachmentsWhereUniqueInput>
    connect?: Enumerable<threadAttachmentsWhereUniqueInput>
    update?: Enumerable<threadAttachmentsUpdateWithWhereUniqueWithoutThreadInput>
    updateMany?: Enumerable<threadAttachmentsUpdateManyWithWhereWithoutThreadInput>
    deleteMany?: Enumerable<threadAttachmentsScalarWhereInput>
  }

  export type reactionUpdateManyWithoutThreadNestedInput = {
    create?: XOR<Enumerable<reactionCreateWithoutThreadInput>, Enumerable<reactionUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<reactionCreateOrConnectWithoutThreadInput>
    upsert?: Enumerable<reactionUpsertWithWhereUniqueWithoutThreadInput>
    createMany?: reactionCreateManyThreadInputEnvelope
    set?: Enumerable<reactionWhereUniqueInput>
    disconnect?: Enumerable<reactionWhereUniqueInput>
    delete?: Enumerable<reactionWhereUniqueInput>
    connect?: Enumerable<reactionWhereUniqueInput>
    update?: Enumerable<reactionUpdateWithWhereUniqueWithoutThreadInput>
    updateMany?: Enumerable<reactionUpdateManyWithWhereWithoutThreadInput>
    deleteMany?: Enumerable<reactionScalarWhereInput>
  }

  export type CommentUpdateManyWithoutThreadNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutThreadInput>, Enumerable<CommentUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutThreadInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutThreadInput>
    createMany?: CommentCreateManyThreadInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutThreadInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutThreadInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type userThreadsUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: XOR<Enumerable<userThreadsCreateWithoutThreadInput>, Enumerable<userThreadsUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<userThreadsCreateOrConnectWithoutThreadInput>
    upsert?: Enumerable<userThreadsUpsertWithWhereUniqueWithoutThreadInput>
    createMany?: userThreadsCreateManyThreadInputEnvelope
    set?: Enumerable<userThreadsWhereUniqueInput>
    disconnect?: Enumerable<userThreadsWhereUniqueInput>
    delete?: Enumerable<userThreadsWhereUniqueInput>
    connect?: Enumerable<userThreadsWhereUniqueInput>
    update?: Enumerable<userThreadsUpdateWithWhereUniqueWithoutThreadInput>
    updateMany?: Enumerable<userThreadsUpdateManyWithWhereWithoutThreadInput>
    deleteMany?: Enumerable<userThreadsScalarWhereInput>
  }

  export type threadAttachmentsUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: XOR<Enumerable<threadAttachmentsCreateWithoutThreadInput>, Enumerable<threadAttachmentsUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<threadAttachmentsCreateOrConnectWithoutThreadInput>
    upsert?: Enumerable<threadAttachmentsUpsertWithWhereUniqueWithoutThreadInput>
    createMany?: threadAttachmentsCreateManyThreadInputEnvelope
    set?: Enumerable<threadAttachmentsWhereUniqueInput>
    disconnect?: Enumerable<threadAttachmentsWhereUniqueInput>
    delete?: Enumerable<threadAttachmentsWhereUniqueInput>
    connect?: Enumerable<threadAttachmentsWhereUniqueInput>
    update?: Enumerable<threadAttachmentsUpdateWithWhereUniqueWithoutThreadInput>
    updateMany?: Enumerable<threadAttachmentsUpdateManyWithWhereWithoutThreadInput>
    deleteMany?: Enumerable<threadAttachmentsScalarWhereInput>
  }

  export type reactionUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: XOR<Enumerable<reactionCreateWithoutThreadInput>, Enumerable<reactionUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<reactionCreateOrConnectWithoutThreadInput>
    upsert?: Enumerable<reactionUpsertWithWhereUniqueWithoutThreadInput>
    createMany?: reactionCreateManyThreadInputEnvelope
    set?: Enumerable<reactionWhereUniqueInput>
    disconnect?: Enumerable<reactionWhereUniqueInput>
    delete?: Enumerable<reactionWhereUniqueInput>
    connect?: Enumerable<reactionWhereUniqueInput>
    update?: Enumerable<reactionUpdateWithWhereUniqueWithoutThreadInput>
    updateMany?: Enumerable<reactionUpdateManyWithWhereWithoutThreadInput>
    deleteMany?: Enumerable<reactionScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutThreadInput>, Enumerable<CommentUncheckedCreateWithoutThreadInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutThreadInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutThreadInput>
    createMany?: CommentCreateManyThreadInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutThreadInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutThreadInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type ThreadCreateNestedOneWithoutAttachmentInput = {
    create?: XOR<ThreadCreateWithoutAttachmentInput, ThreadUncheckedCreateWithoutAttachmentInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutAttachmentInput
    connect?: ThreadWhereUniqueInput
  }

  export type EnumAttachmentTypeFieldUpdateOperationsInput = {
    set?: AttachmentType
  }

  export type ThreadUpdateOneWithoutAttachmentNestedInput = {
    create?: XOR<ThreadCreateWithoutAttachmentInput, ThreadUncheckedCreateWithoutAttachmentInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutAttachmentInput
    upsert?: ThreadUpsertWithoutAttachmentInput
    disconnect?: boolean
    delete?: boolean
    connect?: ThreadWhereUniqueInput
    update?: XOR<ThreadUpdateWithoutAttachmentInput, ThreadUncheckedUpdateWithoutAttachmentInput>
  }

  export type ThreadCreateNestedOneWithoutReactionInput = {
    create?: XOR<ThreadCreateWithoutReactionInput, ThreadUncheckedCreateWithoutReactionInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutReactionInput
    connect?: ThreadWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutReactionInput = {
    create?: XOR<CommentCreateWithoutReactionInput, CommentUncheckedCreateWithoutReactionInput>
    connectOrCreate?: CommentCreateOrConnectWithoutReactionInput
    connect?: CommentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReactionInput = {
    create?: XOR<UserCreateWithoutReactionInput, UserUncheckedCreateWithoutReactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionInput
    connect?: UserWhereUniqueInput
  }

  export type EnumReactTypeFieldUpdateOperationsInput = {
    set?: ReactType
  }

  export type ThreadUpdateOneWithoutReactionNestedInput = {
    create?: XOR<ThreadCreateWithoutReactionInput, ThreadUncheckedCreateWithoutReactionInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutReactionInput
    upsert?: ThreadUpsertWithoutReactionInput
    disconnect?: boolean
    delete?: boolean
    connect?: ThreadWhereUniqueInput
    update?: XOR<ThreadUpdateWithoutReactionInput, ThreadUncheckedUpdateWithoutReactionInput>
  }

  export type CommentUpdateOneWithoutReactionNestedInput = {
    create?: XOR<CommentCreateWithoutReactionInput, CommentUncheckedCreateWithoutReactionInput>
    connectOrCreate?: CommentCreateOrConnectWithoutReactionInput
    upsert?: CommentUpsertWithoutReactionInput
    disconnect?: boolean
    delete?: boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<CommentUpdateWithoutReactionInput, CommentUncheckedUpdateWithoutReactionInput>
  }

  export type UserUpdateOneWithoutReactionNestedInput = {
    create?: XOR<UserCreateWithoutReactionInput, UserUncheckedCreateWithoutReactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionInput
    upsert?: UserUpsertWithoutReactionInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutReactionInput, UserUncheckedUpdateWithoutReactionInput>
  }

  export type ThreadCreateNestedOneWithoutCommentInput = {
    create?: XOR<ThreadCreateWithoutCommentInput, ThreadUncheckedCreateWithoutCommentInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutCommentInput
    connect?: ThreadWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutChildrenInput = {
    create?: XOR<CommentCreateWithoutChildrenInput, CommentUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CommentCreateOrConnectWithoutChildrenInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<CommentCreateWithoutParentInput>, Enumerable<CommentUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutParentInput>
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type reactionCreateNestedManyWithoutCommentInput = {
    create?: XOR<Enumerable<reactionCreateWithoutCommentInput>, Enumerable<reactionUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<reactionCreateOrConnectWithoutCommentInput>
    createMany?: reactionCreateManyCommentInputEnvelope
    connect?: Enumerable<reactionWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<CommentCreateWithoutParentInput>, Enumerable<CommentUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutParentInput>
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type reactionUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<Enumerable<reactionCreateWithoutCommentInput>, Enumerable<reactionUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<reactionCreateOrConnectWithoutCommentInput>
    createMany?: reactionCreateManyCommentInputEnvelope
    connect?: Enumerable<reactionWhereUniqueInput>
  }

  export type ThreadUpdateOneWithoutCommentNestedInput = {
    create?: XOR<ThreadCreateWithoutCommentInput, ThreadUncheckedCreateWithoutCommentInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutCommentInput
    upsert?: ThreadUpsertWithoutCommentInput
    disconnect?: boolean
    delete?: boolean
    connect?: ThreadWhereUniqueInput
    update?: XOR<ThreadUpdateWithoutCommentInput, ThreadUncheckedUpdateWithoutCommentInput>
  }

  export type UserUpdateOneWithoutCommentNestedInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    upsert?: UserUpsertWithoutCommentInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>
  }

  export type CommentUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<CommentCreateWithoutChildrenInput, CommentUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CommentCreateOrConnectWithoutChildrenInput
    upsert?: CommentUpsertWithoutChildrenInput
    disconnect?: boolean
    delete?: boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<CommentUpdateWithoutChildrenInput, CommentUncheckedUpdateWithoutChildrenInput>
  }

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutParentInput>, Enumerable<CommentUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutParentInput>
    createMany?: CommentCreateManyParentInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type reactionUpdateManyWithoutCommentNestedInput = {
    create?: XOR<Enumerable<reactionCreateWithoutCommentInput>, Enumerable<reactionUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<reactionCreateOrConnectWithoutCommentInput>
    upsert?: Enumerable<reactionUpsertWithWhereUniqueWithoutCommentInput>
    createMany?: reactionCreateManyCommentInputEnvelope
    set?: Enumerable<reactionWhereUniqueInput>
    disconnect?: Enumerable<reactionWhereUniqueInput>
    delete?: Enumerable<reactionWhereUniqueInput>
    connect?: Enumerable<reactionWhereUniqueInput>
    update?: Enumerable<reactionUpdateWithWhereUniqueWithoutCommentInput>
    updateMany?: Enumerable<reactionUpdateManyWithWhereWithoutCommentInput>
    deleteMany?: Enumerable<reactionScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutParentInput>, Enumerable<CommentUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutParentInput>
    createMany?: CommentCreateManyParentInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type reactionUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<Enumerable<reactionCreateWithoutCommentInput>, Enumerable<reactionUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<reactionCreateOrConnectWithoutCommentInput>
    upsert?: Enumerable<reactionUpsertWithWhereUniqueWithoutCommentInput>
    createMany?: reactionCreateManyCommentInputEnvelope
    set?: Enumerable<reactionWhereUniqueInput>
    disconnect?: Enumerable<reactionWhereUniqueInput>
    delete?: Enumerable<reactionWhereUniqueInput>
    connect?: Enumerable<reactionWhereUniqueInput>
    update?: Enumerable<reactionUpdateWithWhereUniqueWithoutCommentInput>
    updateMany?: Enumerable<reactionUpdateManyWithWhereWithoutCommentInput>
    deleteMany?: Enumerable<reactionScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserCreateNestedOneWithoutMonitoringInput = {
    create?: XOR<UserCreateWithoutMonitoringInput, UserUncheckedCreateWithoutMonitoringInput>
    connectOrCreate?: UserCreateOrConnectWithoutMonitoringInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMonitoringNestedInput = {
    create?: XOR<UserCreateWithoutMonitoringInput, UserUncheckedCreateWithoutMonitoringInput>
    connectOrCreate?: UserCreateOrConnectWithoutMonitoringInput
    upsert?: UserUpsertWithoutMonitoringInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutMonitoringInput, UserUncheckedUpdateWithoutMonitoringInput>
  }

  export type EnumLogTypeFieldUpdateOperationsInput = {
    set?: LogType
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumGenderNullableFilter = {
    equals?: Gender | null
    in?: Enumerable<Gender> | null
    notIn?: Enumerable<Gender> | null
    not?: NestedEnumGenderNullableFilter | Gender | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedEnumGenderNullableWithAggregatesFilter = {
    equals?: Gender | null
    in?: Enumerable<Gender> | null
    notIn?: Enumerable<Gender> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter | Gender | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumGenderNullableFilter
    _max?: NestedEnumGenderNullableFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumRelationTypeFilter = {
    equals?: RelationType
    in?: Enumerable<RelationType>
    notIn?: Enumerable<RelationType>
    not?: NestedEnumRelationTypeFilter | RelationType
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedEnumRelationTypeWithAggregatesFilter = {
    equals?: RelationType
    in?: Enumerable<RelationType>
    notIn?: Enumerable<RelationType>
    not?: NestedEnumRelationTypeWithAggregatesFilter | RelationType
    _count?: NestedIntFilter
    _min?: NestedEnumRelationTypeFilter
    _max?: NestedEnumRelationTypeFilter
  }

  export type NestedEnumThreadPrivacyFilter = {
    equals?: ThreadPrivacy
    in?: Enumerable<ThreadPrivacy>
    notIn?: Enumerable<ThreadPrivacy>
    not?: NestedEnumThreadPrivacyFilter | ThreadPrivacy
  }

  export type NestedEnumDestinationThreadFilter = {
    equals?: DestinationThread
    in?: Enumerable<DestinationThread>
    notIn?: Enumerable<DestinationThread>
    not?: NestedEnumDestinationThreadFilter | DestinationThread
  }

  export type NestedEnumThreadPrivacyWithAggregatesFilter = {
    equals?: ThreadPrivacy
    in?: Enumerable<ThreadPrivacy>
    notIn?: Enumerable<ThreadPrivacy>
    not?: NestedEnumThreadPrivacyWithAggregatesFilter | ThreadPrivacy
    _count?: NestedIntFilter
    _min?: NestedEnumThreadPrivacyFilter
    _max?: NestedEnumThreadPrivacyFilter
  }

  export type NestedEnumDestinationThreadWithAggregatesFilter = {
    equals?: DestinationThread
    in?: Enumerable<DestinationThread>
    notIn?: Enumerable<DestinationThread>
    not?: NestedEnumDestinationThreadWithAggregatesFilter | DestinationThread
    _count?: NestedIntFilter
    _min?: NestedEnumDestinationThreadFilter
    _max?: NestedEnumDestinationThreadFilter
  }

  export type NestedEnumAttachmentTypeFilter = {
    equals?: AttachmentType
    in?: Enumerable<AttachmentType>
    notIn?: Enumerable<AttachmentType>
    not?: NestedEnumAttachmentTypeFilter | AttachmentType
  }

  export type NestedEnumAttachmentTypeWithAggregatesFilter = {
    equals?: AttachmentType
    in?: Enumerable<AttachmentType>
    notIn?: Enumerable<AttachmentType>
    not?: NestedEnumAttachmentTypeWithAggregatesFilter | AttachmentType
    _count?: NestedIntFilter
    _min?: NestedEnumAttachmentTypeFilter
    _max?: NestedEnumAttachmentTypeFilter
  }

  export type NestedEnumReactTypeFilter = {
    equals?: ReactType
    in?: Enumerable<ReactType>
    notIn?: Enumerable<ReactType>
    not?: NestedEnumReactTypeFilter | ReactType
  }

  export type NestedEnumReactTypeWithAggregatesFilter = {
    equals?: ReactType
    in?: Enumerable<ReactType>
    notIn?: Enumerable<ReactType>
    not?: NestedEnumReactTypeWithAggregatesFilter | ReactType
    _count?: NestedIntFilter
    _min?: NestedEnumReactTypeFilter
    _max?: NestedEnumReactTypeFilter
  }

  export type NestedEnumLogTypeFilter = {
    equals?: LogType
    in?: Enumerable<LogType>
    notIn?: Enumerable<LogType>
    not?: NestedEnumLogTypeFilter | LogType
  }

  export type NestedEnumLogTypeWithAggregatesFilter = {
    equals?: LogType
    in?: Enumerable<LogType>
    notIn?: Enumerable<LogType>
    not?: NestedEnumLogTypeWithAggregatesFilter | LogType
    _count?: NestedIntFilter
    _min?: NestedEnumLogTypeFilter
    _max?: NestedEnumLogTypeFilter
  }

  export type ThreadCreateWithoutAuthorInput = {
    content: string
    totalReact?: number | null
    totalComment?: number | null
    privacy?: ThreadPrivacy
    destination?: DestinationThread
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userThreadsCreateNestedManyWithoutThreadInput
    attachment?: threadAttachmentsCreateNestedManyWithoutThreadInput
    reaction?: reactionCreateNestedManyWithoutThreadInput
    Comment?: CommentCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateWithoutAuthorInput = {
    id?: number
    content: string
    totalReact?: number | null
    totalComment?: number | null
    privacy?: ThreadPrivacy
    destination?: DestinationThread
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userThreadsUncheckedCreateNestedManyWithoutThreadInput
    attachment?: threadAttachmentsUncheckedCreateNestedManyWithoutThreadInput
    reaction?: reactionUncheckedCreateNestedManyWithoutThreadInput
    Comment?: CommentUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadCreateOrConnectWithoutAuthorInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput>
  }

  export type ThreadCreateManyAuthorInputEnvelope = {
    data: Enumerable<ThreadCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    refreshToken: string
    sign: string
    ip?: string | null
    location?: string | null
    device?: string | null
    expireAt: Date | string
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: number
    refreshToken: string
    sign: string
    ip?: string | null
    location?: string | null
    device?: string | null
    expireAt: Date | string
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: Enumerable<SessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type relationshipCreateWithoutUserInput = {
    content: string
    friend?: UserCreateNestedOneWithoutRelationsInput
    relationType: RelationType
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type relationshipUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    friendId?: number | null
    relationType: RelationType
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type relationshipCreateOrConnectWithoutUserInput = {
    where: relationshipWhereUniqueInput
    create: XOR<relationshipCreateWithoutUserInput, relationshipUncheckedCreateWithoutUserInput>
  }

  export type relationshipCreateManyUserInputEnvelope = {
    data: Enumerable<relationshipCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type relationshipCreateWithoutFriendInput = {
    content: string
    user?: UserCreateNestedOneWithoutUserInput
    relationType: RelationType
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type relationshipUncheckedCreateWithoutFriendInput = {
    id?: number
    content: string
    userId?: number | null
    relationType: RelationType
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type relationshipCreateOrConnectWithoutFriendInput = {
    where: relationshipWhereUniqueInput
    create: XOR<relationshipCreateWithoutFriendInput, relationshipUncheckedCreateWithoutFriendInput>
  }

  export type relationshipCreateManyFriendInputEnvelope = {
    data: Enumerable<relationshipCreateManyFriendInput>
    skipDuplicates?: boolean
  }

  export type MonitoringCreateWithoutUserInput = {
    type: LogType
    detail?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonitoringUncheckedCreateWithoutUserInput = {
    id?: number
    type: LogType
    detail?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonitoringCreateOrConnectWithoutUserInput = {
    where: MonitoringWhereUniqueInput
    create: XOR<MonitoringCreateWithoutUserInput, MonitoringUncheckedCreateWithoutUserInput>
  }

  export type MonitoringCreateManyUserInputEnvelope = {
    data: Enumerable<MonitoringCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type userThreadsCreateWithoutUserInput = {
    thread?: ThreadCreateNestedOneWithoutUserInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userThreadsUncheckedCreateWithoutUserInput = {
    id?: number
    threadId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userThreadsCreateOrConnectWithoutUserInput = {
    where: userThreadsWhereUniqueInput
    create: XOR<userThreadsCreateWithoutUserInput, userThreadsUncheckedCreateWithoutUserInput>
  }

  export type userThreadsCreateManyUserInputEnvelope = {
    data: Enumerable<userThreadsCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type reactionCreateWithoutUserInput = {
    react: ReactType
    thread?: ThreadCreateNestedOneWithoutReactionInput
    comment?: CommentCreateNestedOneWithoutReactionInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reactionUncheckedCreateWithoutUserInput = {
    id?: number
    react: ReactType
    threadId?: number | null
    commentId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reactionCreateOrConnectWithoutUserInput = {
    where: reactionWhereUniqueInput
    create: XOR<reactionCreateWithoutUserInput, reactionUncheckedCreateWithoutUserInput>
  }

  export type reactionCreateManyUserInputEnvelope = {
    data: Enumerable<reactionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    content: string
    thread?: ThreadCreateNestedOneWithoutCommentInput
    parent?: CommentCreateNestedOneWithoutChildrenInput
    children?: CommentCreateNestedManyWithoutParentInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reaction?: reactionCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    threadId?: number | null
    parentId?: number | null
    children?: CommentUncheckedCreateNestedManyWithoutParentInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reaction?: reactionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: Enumerable<CommentCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ThreadUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ThreadWhereUniqueInput
    update: XOR<ThreadUpdateWithoutAuthorInput, ThreadUncheckedUpdateWithoutAuthorInput>
    create: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput>
  }

  export type ThreadUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ThreadWhereUniqueInput
    data: XOR<ThreadUpdateWithoutAuthorInput, ThreadUncheckedUpdateWithoutAuthorInput>
  }

  export type ThreadUpdateManyWithWhereWithoutAuthorInput = {
    where: ThreadScalarWhereInput
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutThreadCreatedInput>
  }

  export type ThreadScalarWhereInput = {
    AND?: Enumerable<ThreadScalarWhereInput>
    OR?: Enumerable<ThreadScalarWhereInput>
    NOT?: Enumerable<ThreadScalarWhereInput>
    id?: IntFilter | number
    content?: StringFilter | string
    totalReact?: IntNullableFilter | number | null
    totalComment?: IntNullableFilter | number | null
    authorId?: IntNullableFilter | number | null
    privacy?: EnumThreadPrivacyFilter | ThreadPrivacy
    destination?: EnumDestinationThreadFilter | DestinationThread
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutSessionInput>
  }

  export type SessionScalarWhereInput = {
    AND?: Enumerable<SessionScalarWhereInput>
    OR?: Enumerable<SessionScalarWhereInput>
    NOT?: Enumerable<SessionScalarWhereInput>
    id?: IntFilter | number
    refreshToken?: StringFilter | string
    sign?: StringFilter | string
    userId?: IntFilter | number
    ip?: StringNullableFilter | string | null
    location?: StringNullableFilter | string | null
    device?: StringNullableFilter | string | null
    expireAt?: DateTimeFilter | Date | string
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type relationshipUpsertWithWhereUniqueWithoutUserInput = {
    where: relationshipWhereUniqueInput
    update: XOR<relationshipUpdateWithoutUserInput, relationshipUncheckedUpdateWithoutUserInput>
    create: XOR<relationshipCreateWithoutUserInput, relationshipUncheckedCreateWithoutUserInput>
  }

  export type relationshipUpdateWithWhereUniqueWithoutUserInput = {
    where: relationshipWhereUniqueInput
    data: XOR<relationshipUpdateWithoutUserInput, relationshipUncheckedUpdateWithoutUserInput>
  }

  export type relationshipUpdateManyWithWhereWithoutUserInput = {
    where: relationshipScalarWhereInput
    data: XOR<relationshipUpdateManyMutationInput, relationshipUncheckedUpdateManyWithoutUserInput>
  }

  export type relationshipScalarWhereInput = {
    AND?: Enumerable<relationshipScalarWhereInput>
    OR?: Enumerable<relationshipScalarWhereInput>
    NOT?: Enumerable<relationshipScalarWhereInput>
    id?: IntFilter | number
    content?: StringFilter | string
    userId?: IntNullableFilter | number | null
    friendId?: IntNullableFilter | number | null
    relationType?: EnumRelationTypeFilter | RelationType
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type relationshipUpsertWithWhereUniqueWithoutFriendInput = {
    where: relationshipWhereUniqueInput
    update: XOR<relationshipUpdateWithoutFriendInput, relationshipUncheckedUpdateWithoutFriendInput>
    create: XOR<relationshipCreateWithoutFriendInput, relationshipUncheckedCreateWithoutFriendInput>
  }

  export type relationshipUpdateWithWhereUniqueWithoutFriendInput = {
    where: relationshipWhereUniqueInput
    data: XOR<relationshipUpdateWithoutFriendInput, relationshipUncheckedUpdateWithoutFriendInput>
  }

  export type relationshipUpdateManyWithWhereWithoutFriendInput = {
    where: relationshipScalarWhereInput
    data: XOR<relationshipUpdateManyMutationInput, relationshipUncheckedUpdateManyWithoutRelationsInput>
  }

  export type MonitoringUpsertWithWhereUniqueWithoutUserInput = {
    where: MonitoringWhereUniqueInput
    update: XOR<MonitoringUpdateWithoutUserInput, MonitoringUncheckedUpdateWithoutUserInput>
    create: XOR<MonitoringCreateWithoutUserInput, MonitoringUncheckedCreateWithoutUserInput>
  }

  export type MonitoringUpdateWithWhereUniqueWithoutUserInput = {
    where: MonitoringWhereUniqueInput
    data: XOR<MonitoringUpdateWithoutUserInput, MonitoringUncheckedUpdateWithoutUserInput>
  }

  export type MonitoringUpdateManyWithWhereWithoutUserInput = {
    where: MonitoringScalarWhereInput
    data: XOR<MonitoringUpdateManyMutationInput, MonitoringUncheckedUpdateManyWithoutMonitoringInput>
  }

  export type MonitoringScalarWhereInput = {
    AND?: Enumerable<MonitoringScalarWhereInput>
    OR?: Enumerable<MonitoringScalarWhereInput>
    NOT?: Enumerable<MonitoringScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    type?: EnumLogTypeFilter | LogType
    detail?: JsonNullableFilter
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type userThreadsUpsertWithWhereUniqueWithoutUserInput = {
    where: userThreadsWhereUniqueInput
    update: XOR<userThreadsUpdateWithoutUserInput, userThreadsUncheckedUpdateWithoutUserInput>
    create: XOR<userThreadsCreateWithoutUserInput, userThreadsUncheckedCreateWithoutUserInput>
  }

  export type userThreadsUpdateWithWhereUniqueWithoutUserInput = {
    where: userThreadsWhereUniqueInput
    data: XOR<userThreadsUpdateWithoutUserInput, userThreadsUncheckedUpdateWithoutUserInput>
  }

  export type userThreadsUpdateManyWithWhereWithoutUserInput = {
    where: userThreadsScalarWhereInput
    data: XOR<userThreadsUpdateManyMutationInput, userThreadsUncheckedUpdateManyWithoutUserThreadsInput>
  }

  export type userThreadsScalarWhereInput = {
    AND?: Enumerable<userThreadsScalarWhereInput>
    OR?: Enumerable<userThreadsScalarWhereInput>
    NOT?: Enumerable<userThreadsScalarWhereInput>
    id?: IntFilter | number
    userId?: IntNullableFilter | number | null
    threadId?: IntNullableFilter | number | null
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type reactionUpsertWithWhereUniqueWithoutUserInput = {
    where: reactionWhereUniqueInput
    update: XOR<reactionUpdateWithoutUserInput, reactionUncheckedUpdateWithoutUserInput>
    create: XOR<reactionCreateWithoutUserInput, reactionUncheckedCreateWithoutUserInput>
  }

  export type reactionUpdateWithWhereUniqueWithoutUserInput = {
    where: reactionWhereUniqueInput
    data: XOR<reactionUpdateWithoutUserInput, reactionUncheckedUpdateWithoutUserInput>
  }

  export type reactionUpdateManyWithWhereWithoutUserInput = {
    where: reactionScalarWhereInput
    data: XOR<reactionUpdateManyMutationInput, reactionUncheckedUpdateManyWithoutReactionInput>
  }

  export type reactionScalarWhereInput = {
    AND?: Enumerable<reactionScalarWhereInput>
    OR?: Enumerable<reactionScalarWhereInput>
    NOT?: Enumerable<reactionScalarWhereInput>
    id?: IntFilter | number
    react?: EnumReactTypeFilter | ReactType
    threadId?: IntNullableFilter | number | null
    commentId?: IntNullableFilter | number | null
    userId?: IntNullableFilter | number | null
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentInput>
  }

  export type CommentScalarWhereInput = {
    AND?: Enumerable<CommentScalarWhereInput>
    OR?: Enumerable<CommentScalarWhereInput>
    NOT?: Enumerable<CommentScalarWhereInput>
    id?: IntFilter | number
    content?: StringFilter | string
    threadId?: IntNullableFilter | number | null
    userId?: IntNullableFilter | number | null
    parentId?: IntNullableFilter | number | null
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutUserInput = {
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    relations?: relationshipCreateNestedManyWithoutFriendInput
    monitoring?: MonitoringCreateNestedManyWithoutUserInput
    userThreads?: userThreadsCreateNestedManyWithoutUserInput
    reaction?: reactionCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserInput = {
    id?: number
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    relations?: relationshipUncheckedCreateNestedManyWithoutFriendInput
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutUserInput
    userThreads?: userThreadsUncheckedCreateNestedManyWithoutUserInput
    reaction?: reactionUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserInput, UserUncheckedCreateWithoutUserInput>
  }

  export type UserCreateWithoutRelationsInput = {
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    user?: relationshipCreateNestedManyWithoutUserInput
    monitoring?: MonitoringCreateNestedManyWithoutUserInput
    userThreads?: userThreadsCreateNestedManyWithoutUserInput
    reaction?: reactionCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRelationsInput = {
    id?: number
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    user?: relationshipUncheckedCreateNestedManyWithoutUserInput
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutUserInput
    userThreads?: userThreadsUncheckedCreateNestedManyWithoutUserInput
    reaction?: reactionUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRelationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRelationsInput, UserUncheckedCreateWithoutRelationsInput>
  }

  export type UserUpsertWithoutUserInput = {
    update: XOR<UserUpdateWithoutUserInput, UserUncheckedUpdateWithoutUserInput>
    create: XOR<UserCreateWithoutUserInput, UserUncheckedCreateWithoutUserInput>
  }

  export type UserUpdateWithoutUserInput = {
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    relations?: relationshipUpdateManyWithoutFriendNestedInput
    monitoring?: MonitoringUpdateManyWithoutUserNestedInput
    userThreads?: userThreadsUpdateManyWithoutUserNestedInput
    reaction?: reactionUpdateManyWithoutUserNestedInput
    Comment?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    relations?: relationshipUncheckedUpdateManyWithoutFriendNestedInput
    monitoring?: MonitoringUncheckedUpdateManyWithoutUserNestedInput
    userThreads?: userThreadsUncheckedUpdateManyWithoutUserNestedInput
    reaction?: reactionUncheckedUpdateManyWithoutUserNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutRelationsInput = {
    update: XOR<UserUpdateWithoutRelationsInput, UserUncheckedUpdateWithoutRelationsInput>
    create: XOR<UserCreateWithoutRelationsInput, UserUncheckedCreateWithoutRelationsInput>
  }

  export type UserUpdateWithoutRelationsInput = {
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    user?: relationshipUpdateManyWithoutUserNestedInput
    monitoring?: MonitoringUpdateManyWithoutUserNestedInput
    userThreads?: userThreadsUpdateManyWithoutUserNestedInput
    reaction?: reactionUpdateManyWithoutUserNestedInput
    Comment?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    user?: relationshipUncheckedUpdateManyWithoutUserNestedInput
    monitoring?: MonitoringUncheckedUpdateManyWithoutUserNestedInput
    userThreads?: userThreadsUncheckedUpdateManyWithoutUserNestedInput
    reaction?: reactionUncheckedUpdateManyWithoutUserNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserThreadsInput = {
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    user?: relationshipCreateNestedManyWithoutUserInput
    relations?: relationshipCreateNestedManyWithoutFriendInput
    monitoring?: MonitoringCreateNestedManyWithoutUserInput
    reaction?: reactionCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserThreadsInput = {
    id?: number
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    user?: relationshipUncheckedCreateNestedManyWithoutUserInput
    relations?: relationshipUncheckedCreateNestedManyWithoutFriendInput
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutUserInput
    reaction?: reactionUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserThreadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserThreadsInput, UserUncheckedCreateWithoutUserThreadsInput>
  }

  export type ThreadCreateWithoutUserInput = {
    content: string
    totalReact?: number | null
    totalComment?: number | null
    author?: UserCreateNestedOneWithoutThreadCreatedInput
    privacy?: ThreadPrivacy
    destination?: DestinationThread
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attachment?: threadAttachmentsCreateNestedManyWithoutThreadInput
    reaction?: reactionCreateNestedManyWithoutThreadInput
    Comment?: CommentCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    totalReact?: number | null
    totalComment?: number | null
    authorId?: number | null
    privacy?: ThreadPrivacy
    destination?: DestinationThread
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attachment?: threadAttachmentsUncheckedCreateNestedManyWithoutThreadInput
    reaction?: reactionUncheckedCreateNestedManyWithoutThreadInput
    Comment?: CommentUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadCreateOrConnectWithoutUserInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutUserInput, ThreadUncheckedCreateWithoutUserInput>
  }

  export type UserUpsertWithoutUserThreadsInput = {
    update: XOR<UserUpdateWithoutUserThreadsInput, UserUncheckedUpdateWithoutUserThreadsInput>
    create: XOR<UserCreateWithoutUserThreadsInput, UserUncheckedCreateWithoutUserThreadsInput>
  }

  export type UserUpdateWithoutUserThreadsInput = {
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    user?: relationshipUpdateManyWithoutUserNestedInput
    relations?: relationshipUpdateManyWithoutFriendNestedInput
    monitoring?: MonitoringUpdateManyWithoutUserNestedInput
    reaction?: reactionUpdateManyWithoutUserNestedInput
    Comment?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserThreadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    user?: relationshipUncheckedUpdateManyWithoutUserNestedInput
    relations?: relationshipUncheckedUpdateManyWithoutFriendNestedInput
    monitoring?: MonitoringUncheckedUpdateManyWithoutUserNestedInput
    reaction?: reactionUncheckedUpdateManyWithoutUserNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ThreadUpsertWithoutUserInput = {
    update: XOR<ThreadUpdateWithoutUserInput, ThreadUncheckedUpdateWithoutUserInput>
    create: XOR<ThreadCreateWithoutUserInput, ThreadUncheckedCreateWithoutUserInput>
  }

  export type ThreadUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    totalReact?: NullableIntFieldUpdateOperationsInput | number | null
    totalComment?: NullableIntFieldUpdateOperationsInput | number | null
    author?: UserUpdateOneWithoutThreadCreatedNestedInput
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachment?: threadAttachmentsUpdateManyWithoutThreadNestedInput
    reaction?: reactionUpdateManyWithoutThreadNestedInput
    Comment?: CommentUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    totalReact?: NullableIntFieldUpdateOperationsInput | number | null
    totalComment?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachment?: threadAttachmentsUncheckedUpdateManyWithoutThreadNestedInput
    reaction?: reactionUncheckedUpdateManyWithoutThreadNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type UserCreateWithoutThreadCreatedInput = {
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    user?: relationshipCreateNestedManyWithoutUserInput
    relations?: relationshipCreateNestedManyWithoutFriendInput
    monitoring?: MonitoringCreateNestedManyWithoutUserInput
    userThreads?: userThreadsCreateNestedManyWithoutUserInput
    reaction?: reactionCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutThreadCreatedInput = {
    id?: number
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    user?: relationshipUncheckedCreateNestedManyWithoutUserInput
    relations?: relationshipUncheckedCreateNestedManyWithoutFriendInput
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutUserInput
    userThreads?: userThreadsUncheckedCreateNestedManyWithoutUserInput
    reaction?: reactionUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutThreadCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutThreadCreatedInput, UserUncheckedCreateWithoutThreadCreatedInput>
  }

  export type userThreadsCreateWithoutThreadInput = {
    user?: UserCreateNestedOneWithoutUserThreadsInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userThreadsUncheckedCreateWithoutThreadInput = {
    id?: number
    userId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userThreadsCreateOrConnectWithoutThreadInput = {
    where: userThreadsWhereUniqueInput
    create: XOR<userThreadsCreateWithoutThreadInput, userThreadsUncheckedCreateWithoutThreadInput>
  }

  export type userThreadsCreateManyThreadInputEnvelope = {
    data: Enumerable<userThreadsCreateManyThreadInput>
    skipDuplicates?: boolean
  }

  export type threadAttachmentsCreateWithoutThreadInput = {
    link: string
    type: AttachmentType
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type threadAttachmentsUncheckedCreateWithoutThreadInput = {
    id?: number
    link: string
    type: AttachmentType
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type threadAttachmentsCreateOrConnectWithoutThreadInput = {
    where: threadAttachmentsWhereUniqueInput
    create: XOR<threadAttachmentsCreateWithoutThreadInput, threadAttachmentsUncheckedCreateWithoutThreadInput>
  }

  export type threadAttachmentsCreateManyThreadInputEnvelope = {
    data: Enumerable<threadAttachmentsCreateManyThreadInput>
    skipDuplicates?: boolean
  }

  export type reactionCreateWithoutThreadInput = {
    react: ReactType
    comment?: CommentCreateNestedOneWithoutReactionInput
    user?: UserCreateNestedOneWithoutReactionInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reactionUncheckedCreateWithoutThreadInput = {
    id?: number
    react: ReactType
    commentId?: number | null
    userId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reactionCreateOrConnectWithoutThreadInput = {
    where: reactionWhereUniqueInput
    create: XOR<reactionCreateWithoutThreadInput, reactionUncheckedCreateWithoutThreadInput>
  }

  export type reactionCreateManyThreadInputEnvelope = {
    data: Enumerable<reactionCreateManyThreadInput>
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutThreadInput = {
    content: string
    user?: UserCreateNestedOneWithoutCommentInput
    parent?: CommentCreateNestedOneWithoutChildrenInput
    children?: CommentCreateNestedManyWithoutParentInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reaction?: reactionCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutThreadInput = {
    id?: number
    content: string
    userId?: number | null
    parentId?: number | null
    children?: CommentUncheckedCreateNestedManyWithoutParentInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reaction?: reactionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutThreadInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutThreadInput, CommentUncheckedCreateWithoutThreadInput>
  }

  export type CommentCreateManyThreadInputEnvelope = {
    data: Enumerable<CommentCreateManyThreadInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutThreadCreatedInput = {
    update: XOR<UserUpdateWithoutThreadCreatedInput, UserUncheckedUpdateWithoutThreadCreatedInput>
    create: XOR<UserCreateWithoutThreadCreatedInput, UserUncheckedCreateWithoutThreadCreatedInput>
  }

  export type UserUpdateWithoutThreadCreatedInput = {
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    user?: relationshipUpdateManyWithoutUserNestedInput
    relations?: relationshipUpdateManyWithoutFriendNestedInput
    monitoring?: MonitoringUpdateManyWithoutUserNestedInput
    userThreads?: userThreadsUpdateManyWithoutUserNestedInput
    reaction?: reactionUpdateManyWithoutUserNestedInput
    Comment?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutThreadCreatedInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    user?: relationshipUncheckedUpdateManyWithoutUserNestedInput
    relations?: relationshipUncheckedUpdateManyWithoutFriendNestedInput
    monitoring?: MonitoringUncheckedUpdateManyWithoutUserNestedInput
    userThreads?: userThreadsUncheckedUpdateManyWithoutUserNestedInput
    reaction?: reactionUncheckedUpdateManyWithoutUserNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userThreadsUpsertWithWhereUniqueWithoutThreadInput = {
    where: userThreadsWhereUniqueInput
    update: XOR<userThreadsUpdateWithoutThreadInput, userThreadsUncheckedUpdateWithoutThreadInput>
    create: XOR<userThreadsCreateWithoutThreadInput, userThreadsUncheckedCreateWithoutThreadInput>
  }

  export type userThreadsUpdateWithWhereUniqueWithoutThreadInput = {
    where: userThreadsWhereUniqueInput
    data: XOR<userThreadsUpdateWithoutThreadInput, userThreadsUncheckedUpdateWithoutThreadInput>
  }

  export type userThreadsUpdateManyWithWhereWithoutThreadInput = {
    where: userThreadsScalarWhereInput
    data: XOR<userThreadsUpdateManyMutationInput, userThreadsUncheckedUpdateManyWithoutUserInput>
  }

  export type threadAttachmentsUpsertWithWhereUniqueWithoutThreadInput = {
    where: threadAttachmentsWhereUniqueInput
    update: XOR<threadAttachmentsUpdateWithoutThreadInput, threadAttachmentsUncheckedUpdateWithoutThreadInput>
    create: XOR<threadAttachmentsCreateWithoutThreadInput, threadAttachmentsUncheckedCreateWithoutThreadInput>
  }

  export type threadAttachmentsUpdateWithWhereUniqueWithoutThreadInput = {
    where: threadAttachmentsWhereUniqueInput
    data: XOR<threadAttachmentsUpdateWithoutThreadInput, threadAttachmentsUncheckedUpdateWithoutThreadInput>
  }

  export type threadAttachmentsUpdateManyWithWhereWithoutThreadInput = {
    where: threadAttachmentsScalarWhereInput
    data: XOR<threadAttachmentsUpdateManyMutationInput, threadAttachmentsUncheckedUpdateManyWithoutAttachmentInput>
  }

  export type threadAttachmentsScalarWhereInput = {
    AND?: Enumerable<threadAttachmentsScalarWhereInput>
    OR?: Enumerable<threadAttachmentsScalarWhereInput>
    NOT?: Enumerable<threadAttachmentsScalarWhereInput>
    id?: IntFilter | number
    link?: StringFilter | string
    type?: EnumAttachmentTypeFilter | AttachmentType
    threadId?: IntNullableFilter | number | null
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type reactionUpsertWithWhereUniqueWithoutThreadInput = {
    where: reactionWhereUniqueInput
    update: XOR<reactionUpdateWithoutThreadInput, reactionUncheckedUpdateWithoutThreadInput>
    create: XOR<reactionCreateWithoutThreadInput, reactionUncheckedCreateWithoutThreadInput>
  }

  export type reactionUpdateWithWhereUniqueWithoutThreadInput = {
    where: reactionWhereUniqueInput
    data: XOR<reactionUpdateWithoutThreadInput, reactionUncheckedUpdateWithoutThreadInput>
  }

  export type reactionUpdateManyWithWhereWithoutThreadInput = {
    where: reactionScalarWhereInput
    data: XOR<reactionUpdateManyMutationInput, reactionUncheckedUpdateManyWithoutReactionInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutThreadInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutThreadInput, CommentUncheckedUpdateWithoutThreadInput>
    create: XOR<CommentCreateWithoutThreadInput, CommentUncheckedCreateWithoutThreadInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutThreadInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutThreadInput, CommentUncheckedUpdateWithoutThreadInput>
  }

  export type CommentUpdateManyWithWhereWithoutThreadInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentInput>
  }

  export type ThreadCreateWithoutAttachmentInput = {
    content: string
    totalReact?: number | null
    totalComment?: number | null
    author?: UserCreateNestedOneWithoutThreadCreatedInput
    privacy?: ThreadPrivacy
    destination?: DestinationThread
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userThreadsCreateNestedManyWithoutThreadInput
    reaction?: reactionCreateNestedManyWithoutThreadInput
    Comment?: CommentCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateWithoutAttachmentInput = {
    id?: number
    content: string
    totalReact?: number | null
    totalComment?: number | null
    authorId?: number | null
    privacy?: ThreadPrivacy
    destination?: DestinationThread
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userThreadsUncheckedCreateNestedManyWithoutThreadInput
    reaction?: reactionUncheckedCreateNestedManyWithoutThreadInput
    Comment?: CommentUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadCreateOrConnectWithoutAttachmentInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutAttachmentInput, ThreadUncheckedCreateWithoutAttachmentInput>
  }

  export type ThreadUpsertWithoutAttachmentInput = {
    update: XOR<ThreadUpdateWithoutAttachmentInput, ThreadUncheckedUpdateWithoutAttachmentInput>
    create: XOR<ThreadCreateWithoutAttachmentInput, ThreadUncheckedCreateWithoutAttachmentInput>
  }

  export type ThreadUpdateWithoutAttachmentInput = {
    content?: StringFieldUpdateOperationsInput | string
    totalReact?: NullableIntFieldUpdateOperationsInput | number | null
    totalComment?: NullableIntFieldUpdateOperationsInput | number | null
    author?: UserUpdateOneWithoutThreadCreatedNestedInput
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userThreadsUpdateManyWithoutThreadNestedInput
    reaction?: reactionUpdateManyWithoutThreadNestedInput
    Comment?: CommentUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutAttachmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    totalReact?: NullableIntFieldUpdateOperationsInput | number | null
    totalComment?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userThreadsUncheckedUpdateManyWithoutThreadNestedInput
    reaction?: reactionUncheckedUpdateManyWithoutThreadNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ThreadCreateWithoutReactionInput = {
    content: string
    totalReact?: number | null
    totalComment?: number | null
    author?: UserCreateNestedOneWithoutThreadCreatedInput
    privacy?: ThreadPrivacy
    destination?: DestinationThread
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userThreadsCreateNestedManyWithoutThreadInput
    attachment?: threadAttachmentsCreateNestedManyWithoutThreadInput
    Comment?: CommentCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateWithoutReactionInput = {
    id?: number
    content: string
    totalReact?: number | null
    totalComment?: number | null
    authorId?: number | null
    privacy?: ThreadPrivacy
    destination?: DestinationThread
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userThreadsUncheckedCreateNestedManyWithoutThreadInput
    attachment?: threadAttachmentsUncheckedCreateNestedManyWithoutThreadInput
    Comment?: CommentUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadCreateOrConnectWithoutReactionInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutReactionInput, ThreadUncheckedCreateWithoutReactionInput>
  }

  export type CommentCreateWithoutReactionInput = {
    content: string
    thread?: ThreadCreateNestedOneWithoutCommentInput
    user?: UserCreateNestedOneWithoutCommentInput
    parent?: CommentCreateNestedOneWithoutChildrenInput
    children?: CommentCreateNestedManyWithoutParentInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUncheckedCreateWithoutReactionInput = {
    id?: number
    content: string
    threadId?: number | null
    userId?: number | null
    parentId?: number | null
    children?: CommentUncheckedCreateNestedManyWithoutParentInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutReactionInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutReactionInput, CommentUncheckedCreateWithoutReactionInput>
  }

  export type UserCreateWithoutReactionInput = {
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    user?: relationshipCreateNestedManyWithoutUserInput
    relations?: relationshipCreateNestedManyWithoutFriendInput
    monitoring?: MonitoringCreateNestedManyWithoutUserInput
    userThreads?: userThreadsCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReactionInput = {
    id?: number
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    user?: relationshipUncheckedCreateNestedManyWithoutUserInput
    relations?: relationshipUncheckedCreateNestedManyWithoutFriendInput
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutUserInput
    userThreads?: userThreadsUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReactionInput, UserUncheckedCreateWithoutReactionInput>
  }

  export type ThreadUpsertWithoutReactionInput = {
    update: XOR<ThreadUpdateWithoutReactionInput, ThreadUncheckedUpdateWithoutReactionInput>
    create: XOR<ThreadCreateWithoutReactionInput, ThreadUncheckedCreateWithoutReactionInput>
  }

  export type ThreadUpdateWithoutReactionInput = {
    content?: StringFieldUpdateOperationsInput | string
    totalReact?: NullableIntFieldUpdateOperationsInput | number | null
    totalComment?: NullableIntFieldUpdateOperationsInput | number | null
    author?: UserUpdateOneWithoutThreadCreatedNestedInput
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userThreadsUpdateManyWithoutThreadNestedInput
    attachment?: threadAttachmentsUpdateManyWithoutThreadNestedInput
    Comment?: CommentUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutReactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    totalReact?: NullableIntFieldUpdateOperationsInput | number | null
    totalComment?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userThreadsUncheckedUpdateManyWithoutThreadNestedInput
    attachment?: threadAttachmentsUncheckedUpdateManyWithoutThreadNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type CommentUpsertWithoutReactionInput = {
    update: XOR<CommentUpdateWithoutReactionInput, CommentUncheckedUpdateWithoutReactionInput>
    create: XOR<CommentCreateWithoutReactionInput, CommentUncheckedCreateWithoutReactionInput>
  }

  export type CommentUpdateWithoutReactionInput = {
    content?: StringFieldUpdateOperationsInput | string
    thread?: ThreadUpdateOneWithoutCommentNestedInput
    user?: UserUpdateOneWithoutCommentNestedInput
    parent?: CommentUpdateOneWithoutChildrenNestedInput
    children?: CommentUpdateManyWithoutParentNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutReactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    children?: CommentUncheckedUpdateManyWithoutParentNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutReactionInput = {
    update: XOR<UserUpdateWithoutReactionInput, UserUncheckedUpdateWithoutReactionInput>
    create: XOR<UserCreateWithoutReactionInput, UserUncheckedCreateWithoutReactionInput>
  }

  export type UserUpdateWithoutReactionInput = {
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    user?: relationshipUpdateManyWithoutUserNestedInput
    relations?: relationshipUpdateManyWithoutFriendNestedInput
    monitoring?: MonitoringUpdateManyWithoutUserNestedInput
    userThreads?: userThreadsUpdateManyWithoutUserNestedInput
    Comment?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    user?: relationshipUncheckedUpdateManyWithoutUserNestedInput
    relations?: relationshipUncheckedUpdateManyWithoutFriendNestedInput
    monitoring?: MonitoringUncheckedUpdateManyWithoutUserNestedInput
    userThreads?: userThreadsUncheckedUpdateManyWithoutUserNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ThreadCreateWithoutCommentInput = {
    content: string
    totalReact?: number | null
    totalComment?: number | null
    author?: UserCreateNestedOneWithoutThreadCreatedInput
    privacy?: ThreadPrivacy
    destination?: DestinationThread
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userThreadsCreateNestedManyWithoutThreadInput
    attachment?: threadAttachmentsCreateNestedManyWithoutThreadInput
    reaction?: reactionCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateWithoutCommentInput = {
    id?: number
    content: string
    totalReact?: number | null
    totalComment?: number | null
    authorId?: number | null
    privacy?: ThreadPrivacy
    destination?: DestinationThread
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: userThreadsUncheckedCreateNestedManyWithoutThreadInput
    attachment?: threadAttachmentsUncheckedCreateNestedManyWithoutThreadInput
    reaction?: reactionUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadCreateOrConnectWithoutCommentInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutCommentInput, ThreadUncheckedCreateWithoutCommentInput>
  }

  export type UserCreateWithoutCommentInput = {
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    user?: relationshipCreateNestedManyWithoutUserInput
    relations?: relationshipCreateNestedManyWithoutFriendInput
    monitoring?: MonitoringCreateNestedManyWithoutUserInput
    userThreads?: userThreadsCreateNestedManyWithoutUserInput
    reaction?: reactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentInput = {
    id?: number
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    user?: relationshipUncheckedCreateNestedManyWithoutUserInput
    relations?: relationshipUncheckedCreateNestedManyWithoutFriendInput
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutUserInput
    userThreads?: userThreadsUncheckedCreateNestedManyWithoutUserInput
    reaction?: reactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
  }

  export type CommentCreateWithoutChildrenInput = {
    content: string
    thread?: ThreadCreateNestedOneWithoutCommentInput
    user?: UserCreateNestedOneWithoutCommentInput
    parent?: CommentCreateNestedOneWithoutChildrenInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reaction?: reactionCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutChildrenInput = {
    id?: number
    content: string
    threadId?: number | null
    userId?: number | null
    parentId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reaction?: reactionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutChildrenInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutChildrenInput, CommentUncheckedCreateWithoutChildrenInput>
  }

  export type CommentCreateWithoutParentInput = {
    content: string
    thread?: ThreadCreateNestedOneWithoutCommentInput
    user?: UserCreateNestedOneWithoutCommentInput
    children?: CommentCreateNestedManyWithoutParentInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reaction?: reactionCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: number
    content: string
    threadId?: number | null
    userId?: number | null
    children?: CommentUncheckedCreateNestedManyWithoutParentInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reaction?: reactionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentCreateManyParentInputEnvelope = {
    data: Enumerable<CommentCreateManyParentInput>
    skipDuplicates?: boolean
  }

  export type reactionCreateWithoutCommentInput = {
    react: ReactType
    thread?: ThreadCreateNestedOneWithoutReactionInput
    user?: UserCreateNestedOneWithoutReactionInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reactionUncheckedCreateWithoutCommentInput = {
    id?: number
    react: ReactType
    threadId?: number | null
    userId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reactionCreateOrConnectWithoutCommentInput = {
    where: reactionWhereUniqueInput
    create: XOR<reactionCreateWithoutCommentInput, reactionUncheckedCreateWithoutCommentInput>
  }

  export type reactionCreateManyCommentInputEnvelope = {
    data: Enumerable<reactionCreateManyCommentInput>
    skipDuplicates?: boolean
  }

  export type ThreadUpsertWithoutCommentInput = {
    update: XOR<ThreadUpdateWithoutCommentInput, ThreadUncheckedUpdateWithoutCommentInput>
    create: XOR<ThreadCreateWithoutCommentInput, ThreadUncheckedCreateWithoutCommentInput>
  }

  export type ThreadUpdateWithoutCommentInput = {
    content?: StringFieldUpdateOperationsInput | string
    totalReact?: NullableIntFieldUpdateOperationsInput | number | null
    totalComment?: NullableIntFieldUpdateOperationsInput | number | null
    author?: UserUpdateOneWithoutThreadCreatedNestedInput
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userThreadsUpdateManyWithoutThreadNestedInput
    attachment?: threadAttachmentsUpdateManyWithoutThreadNestedInput
    reaction?: reactionUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    totalReact?: NullableIntFieldUpdateOperationsInput | number | null
    totalComment?: NullableIntFieldUpdateOperationsInput | number | null
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userThreadsUncheckedUpdateManyWithoutThreadNestedInput
    attachment?: threadAttachmentsUncheckedUpdateManyWithoutThreadNestedInput
    reaction?: reactionUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type UserUpsertWithoutCommentInput = {
    update: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>
    create: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
  }

  export type UserUpdateWithoutCommentInput = {
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    user?: relationshipUpdateManyWithoutUserNestedInput
    relations?: relationshipUpdateManyWithoutFriendNestedInput
    monitoring?: MonitoringUpdateManyWithoutUserNestedInput
    userThreads?: userThreadsUpdateManyWithoutUserNestedInput
    reaction?: reactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    user?: relationshipUncheckedUpdateManyWithoutUserNestedInput
    relations?: relationshipUncheckedUpdateManyWithoutFriendNestedInput
    monitoring?: MonitoringUncheckedUpdateManyWithoutUserNestedInput
    userThreads?: userThreadsUncheckedUpdateManyWithoutUserNestedInput
    reaction?: reactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithoutChildrenInput = {
    update: XOR<CommentUpdateWithoutChildrenInput, CommentUncheckedUpdateWithoutChildrenInput>
    create: XOR<CommentCreateWithoutChildrenInput, CommentUncheckedCreateWithoutChildrenInput>
  }

  export type CommentUpdateWithoutChildrenInput = {
    content?: StringFieldUpdateOperationsInput | string
    thread?: ThreadUpdateOneWithoutCommentNestedInput
    user?: UserUpdateOneWithoutCommentNestedInput
    parent?: CommentUpdateOneWithoutChildrenNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: reactionUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: reactionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
  }

  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutChildrenInput>
  }

  export type reactionUpsertWithWhereUniqueWithoutCommentInput = {
    where: reactionWhereUniqueInput
    update: XOR<reactionUpdateWithoutCommentInput, reactionUncheckedUpdateWithoutCommentInput>
    create: XOR<reactionCreateWithoutCommentInput, reactionUncheckedCreateWithoutCommentInput>
  }

  export type reactionUpdateWithWhereUniqueWithoutCommentInput = {
    where: reactionWhereUniqueInput
    data: XOR<reactionUpdateWithoutCommentInput, reactionUncheckedUpdateWithoutCommentInput>
  }

  export type reactionUpdateManyWithWhereWithoutCommentInput = {
    where: reactionScalarWhereInput
    data: XOR<reactionUpdateManyMutationInput, reactionUncheckedUpdateManyWithoutReactionInput>
  }

  export type UserCreateWithoutSessionInput = {
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: relationshipCreateNestedManyWithoutUserInput
    relations?: relationshipCreateNestedManyWithoutFriendInput
    monitoring?: MonitoringCreateNestedManyWithoutUserInput
    userThreads?: userThreadsCreateNestedManyWithoutUserInput
    reaction?: reactionCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: number
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: relationshipUncheckedCreateNestedManyWithoutUserInput
    relations?: relationshipUncheckedCreateNestedManyWithoutFriendInput
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutUserInput
    userThreads?: userThreadsUncheckedCreateNestedManyWithoutUserInput
    reaction?: reactionUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: relationshipUpdateManyWithoutUserNestedInput
    relations?: relationshipUpdateManyWithoutFriendNestedInput
    monitoring?: MonitoringUpdateManyWithoutUserNestedInput
    userThreads?: userThreadsUpdateManyWithoutUserNestedInput
    reaction?: reactionUpdateManyWithoutUserNestedInput
    Comment?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: relationshipUncheckedUpdateManyWithoutUserNestedInput
    relations?: relationshipUncheckedUpdateManyWithoutFriendNestedInput
    monitoring?: MonitoringUncheckedUpdateManyWithoutUserNestedInput
    userThreads?: userThreadsUncheckedUpdateManyWithoutUserNestedInput
    reaction?: reactionUncheckedUpdateManyWithoutUserNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMonitoringInput = {
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    user?: relationshipCreateNestedManyWithoutUserInput
    relations?: relationshipCreateNestedManyWithoutFriendInput
    userThreads?: userThreadsCreateNestedManyWithoutUserInput
    reaction?: reactionCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMonitoringInput = {
    id?: number
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    cover?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    user?: relationshipUncheckedCreateNestedManyWithoutUserInput
    relations?: relationshipUncheckedCreateNestedManyWithoutFriendInput
    userThreads?: userThreadsUncheckedCreateNestedManyWithoutUserInput
    reaction?: reactionUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMonitoringInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMonitoringInput, UserUncheckedCreateWithoutMonitoringInput>
  }

  export type UserUpsertWithoutMonitoringInput = {
    update: XOR<UserUpdateWithoutMonitoringInput, UserUncheckedUpdateWithoutMonitoringInput>
    create: XOR<UserCreateWithoutMonitoringInput, UserUncheckedCreateWithoutMonitoringInput>
  }

  export type UserUpdateWithoutMonitoringInput = {
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    user?: relationshipUpdateManyWithoutUserNestedInput
    relations?: relationshipUpdateManyWithoutFriendNestedInput
    userThreads?: userThreadsUpdateManyWithoutUserNestedInput
    reaction?: reactionUpdateManyWithoutUserNestedInput
    Comment?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMonitoringInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    surName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | Gender | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    user?: relationshipUncheckedUpdateManyWithoutUserNestedInput
    relations?: relationshipUncheckedUpdateManyWithoutFriendNestedInput
    userThreads?: userThreadsUncheckedUpdateManyWithoutUserNestedInput
    reaction?: reactionUncheckedUpdateManyWithoutUserNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ThreadCreateManyAuthorInput = {
    id?: number
    content: string
    totalReact?: number | null
    totalComment?: number | null
    privacy?: ThreadPrivacy
    destination?: DestinationThread
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: number
    refreshToken: string
    sign: string
    ip?: string | null
    location?: string | null
    device?: string | null
    expireAt: Date | string
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type relationshipCreateManyUserInput = {
    id?: number
    content: string
    friendId?: number | null
    relationType: RelationType
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type relationshipCreateManyFriendInput = {
    id?: number
    content: string
    userId?: number | null
    relationType: RelationType
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonitoringCreateManyUserInput = {
    id?: number
    type: LogType
    detail?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userThreadsCreateManyUserInput = {
    id?: number
    threadId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reactionCreateManyUserInput = {
    id?: number
    react: ReactType
    threadId?: number | null
    commentId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: number
    content: string
    threadId?: number | null
    parentId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ThreadUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string
    totalReact?: NullableIntFieldUpdateOperationsInput | number | null
    totalComment?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userThreadsUpdateManyWithoutThreadNestedInput
    attachment?: threadAttachmentsUpdateManyWithoutThreadNestedInput
    reaction?: reactionUpdateManyWithoutThreadNestedInput
    Comment?: CommentUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    totalReact?: NullableIntFieldUpdateOperationsInput | number | null
    totalComment?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userThreadsUncheckedUpdateManyWithoutThreadNestedInput
    attachment?: threadAttachmentsUncheckedUpdateManyWithoutThreadNestedInput
    reaction?: reactionUncheckedUpdateManyWithoutThreadNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutThreadCreatedInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    totalReact?: NullableIntFieldUpdateOperationsInput | number | null
    totalComment?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string
    sign?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    sign?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    sign?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type relationshipUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    friend?: UserUpdateOneWithoutRelationsNestedInput
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type relationshipUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    friendId?: NullableIntFieldUpdateOperationsInput | number | null
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type relationshipUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    friendId?: NullableIntFieldUpdateOperationsInput | number | null
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type relationshipUpdateWithoutFriendInput = {
    content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutUserNestedInput
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type relationshipUncheckedUpdateWithoutFriendInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type relationshipUncheckedUpdateManyWithoutRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    relationType?: EnumRelationTypeFieldUpdateOperationsInput | RelationType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringUpdateWithoutUserInput = {
    type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    detail?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    detail?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitoringUncheckedUpdateManyWithoutMonitoringInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumLogTypeFieldUpdateOperationsInput | LogType
    detail?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userThreadsUpdateWithoutUserInput = {
    thread?: ThreadUpdateOneWithoutUserNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userThreadsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userThreadsUncheckedUpdateManyWithoutUserThreadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reactionUpdateWithoutUserInput = {
    react?: EnumReactTypeFieldUpdateOperationsInput | ReactType
    thread?: ThreadUpdateOneWithoutReactionNestedInput
    comment?: CommentUpdateOneWithoutReactionNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    react?: EnumReactTypeFieldUpdateOperationsInput | ReactType
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reactionUncheckedUpdateManyWithoutReactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    react?: EnumReactTypeFieldUpdateOperationsInput | ReactType
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    thread?: ThreadUpdateOneWithoutCommentNestedInput
    parent?: CommentUpdateOneWithoutChildrenNestedInput
    children?: CommentUpdateManyWithoutParentNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: reactionUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    children?: CommentUncheckedUpdateManyWithoutParentNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: reactionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userThreadsCreateManyThreadInput = {
    id?: number
    userId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type threadAttachmentsCreateManyThreadInput = {
    id?: number
    link: string
    type: AttachmentType
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reactionCreateManyThreadInput = {
    id?: number
    react: ReactType
    commentId?: number | null
    userId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyThreadInput = {
    id?: number
    content: string
    userId?: number | null
    parentId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userThreadsUpdateWithoutThreadInput = {
    user?: UserUpdateOneWithoutUserThreadsNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userThreadsUncheckedUpdateWithoutThreadInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userThreadsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type threadAttachmentsUpdateWithoutThreadInput = {
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type threadAttachmentsUncheckedUpdateWithoutThreadInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type threadAttachmentsUncheckedUpdateManyWithoutAttachmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | AttachmentType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reactionUpdateWithoutThreadInput = {
    react?: EnumReactTypeFieldUpdateOperationsInput | ReactType
    comment?: CommentUpdateOneWithoutReactionNestedInput
    user?: UserUpdateOneWithoutReactionNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reactionUncheckedUpdateWithoutThreadInput = {
    id?: IntFieldUpdateOperationsInput | number
    react?: EnumReactTypeFieldUpdateOperationsInput | ReactType
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutThreadInput = {
    content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutCommentNestedInput
    parent?: CommentUpdateOneWithoutChildrenNestedInput
    children?: CommentUpdateManyWithoutParentNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: reactionUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutThreadInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    children?: CommentUncheckedUpdateManyWithoutParentNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: reactionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyParentInput = {
    id?: number
    content: string
    threadId?: number | null
    userId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type reactionCreateManyCommentInput = {
    id?: number
    react: ReactType
    threadId?: number | null
    userId?: number | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateWithoutParentInput = {
    content?: StringFieldUpdateOperationsInput | string
    thread?: ThreadUpdateOneWithoutCommentNestedInput
    user?: UserUpdateOneWithoutCommentNestedInput
    children?: CommentUpdateManyWithoutParentNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: reactionUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    children?: CommentUncheckedUpdateManyWithoutParentNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reaction?: reactionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reactionUpdateWithoutCommentInput = {
    react?: EnumReactTypeFieldUpdateOperationsInput | ReactType
    thread?: ThreadUpdateOneWithoutReactionNestedInput
    user?: UserUpdateOneWithoutReactionNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reactionUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    react?: EnumReactTypeFieldUpdateOperationsInput | ReactType
    threadId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}