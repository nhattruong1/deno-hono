
/**
 * Client
**/

import * as runtime from '.././runtime/index.d.ts';
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
  information: Prisma.JsonValue | null
  password: string
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
  authorId: number | null
  privacy: ThreadPrivacy
  destination: DestinationThread
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
   * `prisma.thread`: Exposes CRUD operations for the **Thread** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Threads
    * const threads = await prisma.thread.findMany()
    * ```
    */
  get thread(): Prisma.ThreadDelegate<GlobalReject>;

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
    Thread: 'Thread',
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
    monitoring: number
  }

  export type UserCountOutputTypeSelect = {
    threadCreated?: boolean
    session?: boolean
    monitoring?: boolean
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
    information?: boolean
    password?: boolean
    threadCreated?: boolean | UserThreadCreatedArgs
    isActive?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | UserSessionArgs
    monitoring?: boolean | UserMonitoringArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    threadCreated?: boolean | UserThreadCreatedArgs
    session?: boolean | UserSessionArgs
    monitoring?: boolean | UserMonitoringArgs
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
        P extends 'monitoring' ? Array < MonitoringGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'threadCreated' ? Array < ThreadGetPayload<S['select'][P]>>  :
        P extends 'session' ? Array < SessionGetPayload<S['select'][P]>>  :
        P extends 'monitoring' ? Array < MonitoringGetPayload<S['select'][P]>>  :
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

    monitoring<T extends UserMonitoringArgs= {}>(args?: Subset<T, UserMonitoringArgs>): PrismaPromise<Array<MonitoringGetPayload<T>>| Null>;

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
    authorId: number | null
  }

  export type ThreadSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type ThreadMinAggregateOutputType = {
    id: number | null
    content: string | null
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
    authorId?: true
  }

  export type ThreadSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type ThreadMinAggregateInputType = {
    id?: true
    content?: true
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
    authorId?: boolean
    author?: boolean | UserArgs
    privacy?: boolean
    destination?: boolean
    isActive?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type ThreadInclude = {
    author?: boolean | UserArgs
  } 

  export type ThreadGetPayload<S extends boolean | null | undefined | ThreadArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Thread :
    S extends undefined ? never :
    S extends { include: any } & (ThreadArgs | ThreadFindManyArgs)
    ? Thread  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'author' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (ThreadArgs | ThreadFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? UserGetPayload<S['select'][P]> | null :  P extends keyof Thread ? Thread[P] : never
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


  export const ThreadScalarFieldEnum: {
    id: 'id',
    content: 'content',
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
    information: 'information',
    password: 'password',
    isActive: 'isActive',
    isDelete: 'isDelete',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
    information?: JsonNullableFilter
    password?: StringFilter | string
    threadCreated?: ThreadListRelationFilter
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    session?: SessionListRelationFilter
    monitoring?: MonitoringListRelationFilter
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
    information?: SortOrder
    password?: SortOrder
    threadCreated?: ThreadOrderByRelationAggregateInput
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    session?: SessionOrderByRelationAggregateInput
    monitoring?: MonitoringOrderByRelationAggregateInput
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
    information?: JsonNullableWithAggregatesFilter
    password?: StringWithAggregatesFilter | string
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
    authorId?: IntNullableFilter | number | null
    author?: XOR<UserRelationFilter, UserWhereInput> | null
    privacy?: EnumThreadPrivacyFilter | ThreadPrivacy
    destination?: EnumDestinationThreadFilter | DestinationThread
    isActive?: BoolFilter | boolean
    isDelete?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ThreadOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
    privacy?: SortOrder
    destination?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ThreadWhereUniqueInput = {
    id?: number
  }

  export type ThreadOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
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
    authorId?: IntNullableWithAggregatesFilter | number | null
    privacy?: EnumThreadPrivacyWithAggregatesFilter | ThreadPrivacy
    destination?: EnumDestinationThreadWithAggregatesFilter | DestinationThread
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
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    monitoring?: MonitoringCreateNestedManyWithoutUserInput
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
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutUserInput
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
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    monitoring?: MonitoringUpdateManyWithoutUserNestedInput
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
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    monitoring?: MonitoringUncheckedUpdateManyWithoutUserNestedInput
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
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadCreateInput = {
    content: string
    author?: UserCreateNestedOneWithoutThreadCreatedInput
    privacy?: ThreadPrivacy
    destination?: DestinationThread
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ThreadUncheckedCreateInput = {
    id?: number
    content: string
    authorId?: number | null
    privacy?: ThreadPrivacy
    destination?: DestinationThread
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ThreadUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneWithoutThreadCreatedNestedInput
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadCreateManyInput = {
    id?: number
    content: string
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
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
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

  export type MonitoringListRelationFilter = {
    every?: MonitoringWhereInput
    some?: MonitoringWhereInput
    none?: MonitoringWhereInput
  }

  export type ThreadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonitoringOrderByRelationAggregateInput = {
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

  export type ThreadCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
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
    authorId?: SortOrder
  }

  export type ThreadMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
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
    authorId?: SortOrder
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

  export type MonitoringCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<MonitoringCreateWithoutUserInput>, Enumerable<MonitoringUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<MonitoringCreateOrConnectWithoutUserInput>
    createMany?: MonitoringCreateManyUserInputEnvelope
    connect?: Enumerable<MonitoringWhereUniqueInput>
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

  export type MonitoringUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<MonitoringCreateWithoutUserInput>, Enumerable<MonitoringUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<MonitoringCreateOrConnectWithoutUserInput>
    createMany?: MonitoringCreateManyUserInputEnvelope
    connect?: Enumerable<MonitoringWhereUniqueInput>
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

  export type UserCreateNestedOneWithoutThreadCreatedInput = {
    create?: XOR<UserCreateWithoutThreadCreatedInput, UserUncheckedCreateWithoutThreadCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadCreatedInput
    connect?: UserWhereUniqueInput
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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
    privacy?: ThreadPrivacy
    destination?: DestinationThread
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ThreadUncheckedCreateWithoutAuthorInput = {
    id?: number
    content: string
    privacy?: ThreadPrivacy
    destination?: DestinationThread
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
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

  export type UserCreateWithoutThreadCreatedInput = {
    userName?: string | null
    email: string
    firstName?: string | null
    surName?: string | null
    fullName?: string | null
    gender?: Gender | null
    birth?: Date | string | null
    avatar?: string | null
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    monitoring?: MonitoringCreateNestedManyWithoutUserInput
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
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutThreadCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutThreadCreatedInput, UserUncheckedCreateWithoutThreadCreatedInput>
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
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    monitoring?: MonitoringUpdateManyWithoutUserNestedInput
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
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    monitoring?: MonitoringUncheckedUpdateManyWithoutUserNestedInput
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
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    monitoring?: MonitoringCreateNestedManyWithoutUserInput
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
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    monitoring?: MonitoringUncheckedCreateNestedManyWithoutUserInput
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
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitoring?: MonitoringUpdateManyWithoutUserNestedInput
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
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitoring?: MonitoringUncheckedUpdateManyWithoutUserNestedInput
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
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
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
    information?: NullableJsonNullValueInput | InputJsonValue
    password: string
    threadCreated?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
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
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
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
    information?: NullableJsonNullValueInput | InputJsonValue
    password?: StringFieldUpdateOperationsInput | string
    threadCreated?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ThreadCreateManyAuthorInput = {
    id?: number
    content: string
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

  export type MonitoringCreateManyUserInput = {
    id?: number
    type: LogType
    detail?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ThreadUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    privacy?: EnumThreadPrivacyFieldUpdateOperationsInput | ThreadPrivacy
    destination?: EnumDestinationThreadFieldUpdateOperationsInput | DestinationThread
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadUncheckedUpdateManyWithoutThreadCreatedInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
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