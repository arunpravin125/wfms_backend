
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model EmergencyContact
 * 
 */
export type EmergencyContact = $Result.DefaultSelection<Prisma.$EmergencyContactPayload>
/**
 * Model EmployeeSession
 * 
 */
export type EmployeeSession = $Result.DefaultSelection<Prisma.$EmployeeSessionPayload>
/**
 * Model FailedLoginAttempt
 * 
 */
export type FailedLoginAttempt = $Result.DefaultSelection<Prisma.$FailedLoginAttemptPayload>
/**
 * Model LoginOTP
 * 
 */
export type LoginOTP = $Result.DefaultSelection<Prisma.$LoginOTPPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emergencyContact`: Exposes CRUD operations for the **EmergencyContact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmergencyContacts
    * const emergencyContacts = await prisma.emergencyContact.findMany()
    * ```
    */
  get emergencyContact(): Prisma.EmergencyContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeSession`: Exposes CRUD operations for the **EmployeeSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeSessions
    * const employeeSessions = await prisma.employeeSession.findMany()
    * ```
    */
  get employeeSession(): Prisma.EmployeeSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.failedLoginAttempt`: Exposes CRUD operations for the **FailedLoginAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FailedLoginAttempts
    * const failedLoginAttempts = await prisma.failedLoginAttempt.findMany()
    * ```
    */
  get failedLoginAttempt(): Prisma.FailedLoginAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loginOTP`: Exposes CRUD operations for the **LoginOTP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoginOTPS
    * const loginOTPS = await prisma.loginOTP.findMany()
    * ```
    */
  get loginOTP(): Prisma.LoginOTPDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Employee: 'Employee',
    Education: 'Education',
    EmergencyContact: 'EmergencyContact',
    EmployeeSession: 'EmployeeSession',
    FailedLoginAttempt: 'FailedLoginAttempt',
    LoginOTP: 'LoginOTP'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "employee" | "education" | "emergencyContact" | "employeeSession" | "failedLoginAttempt" | "loginOTP"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      EmergencyContact: {
        payload: Prisma.$EmergencyContactPayload<ExtArgs>
        fields: Prisma.EmergencyContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmergencyContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmergencyContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          findFirst: {
            args: Prisma.EmergencyContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmergencyContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          findMany: {
            args: Prisma.EmergencyContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>[]
          }
          create: {
            args: Prisma.EmergencyContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          createMany: {
            args: Prisma.EmergencyContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmergencyContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>[]
          }
          delete: {
            args: Prisma.EmergencyContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          update: {
            args: Prisma.EmergencyContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          deleteMany: {
            args: Prisma.EmergencyContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmergencyContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmergencyContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>[]
          }
          upsert: {
            args: Prisma.EmergencyContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          aggregate: {
            args: Prisma.EmergencyContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmergencyContact>
          }
          groupBy: {
            args: Prisma.EmergencyContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmergencyContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmergencyContactCountArgs<ExtArgs>
            result: $Utils.Optional<EmergencyContactCountAggregateOutputType> | number
          }
        }
      }
      EmployeeSession: {
        payload: Prisma.$EmployeeSessionPayload<ExtArgs>
        fields: Prisma.EmployeeSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSessionPayload>
          }
          findFirst: {
            args: Prisma.EmployeeSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSessionPayload>
          }
          findMany: {
            args: Prisma.EmployeeSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSessionPayload>[]
          }
          create: {
            args: Prisma.EmployeeSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSessionPayload>
          }
          createMany: {
            args: Prisma.EmployeeSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSessionPayload>[]
          }
          delete: {
            args: Prisma.EmployeeSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSessionPayload>
          }
          update: {
            args: Prisma.EmployeeSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSessionPayload>
          }
          deleteMany: {
            args: Prisma.EmployeeSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSessionPayload>[]
          }
          upsert: {
            args: Prisma.EmployeeSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSessionPayload>
          }
          aggregate: {
            args: Prisma.EmployeeSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeSession>
          }
          groupBy: {
            args: Prisma.EmployeeSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeSessionCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeSessionCountAggregateOutputType> | number
          }
        }
      }
      FailedLoginAttempt: {
        payload: Prisma.$FailedLoginAttemptPayload<ExtArgs>
        fields: Prisma.FailedLoginAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FailedLoginAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedLoginAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FailedLoginAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedLoginAttemptPayload>
          }
          findFirst: {
            args: Prisma.FailedLoginAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedLoginAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FailedLoginAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedLoginAttemptPayload>
          }
          findMany: {
            args: Prisma.FailedLoginAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedLoginAttemptPayload>[]
          }
          create: {
            args: Prisma.FailedLoginAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedLoginAttemptPayload>
          }
          createMany: {
            args: Prisma.FailedLoginAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FailedLoginAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedLoginAttemptPayload>[]
          }
          delete: {
            args: Prisma.FailedLoginAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedLoginAttemptPayload>
          }
          update: {
            args: Prisma.FailedLoginAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedLoginAttemptPayload>
          }
          deleteMany: {
            args: Prisma.FailedLoginAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FailedLoginAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FailedLoginAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedLoginAttemptPayload>[]
          }
          upsert: {
            args: Prisma.FailedLoginAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedLoginAttemptPayload>
          }
          aggregate: {
            args: Prisma.FailedLoginAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFailedLoginAttempt>
          }
          groupBy: {
            args: Prisma.FailedLoginAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<FailedLoginAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.FailedLoginAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<FailedLoginAttemptCountAggregateOutputType> | number
          }
        }
      }
      LoginOTP: {
        payload: Prisma.$LoginOTPPayload<ExtArgs>
        fields: Prisma.LoginOTPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoginOTPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginOTPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoginOTPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginOTPPayload>
          }
          findFirst: {
            args: Prisma.LoginOTPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginOTPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoginOTPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginOTPPayload>
          }
          findMany: {
            args: Prisma.LoginOTPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginOTPPayload>[]
          }
          create: {
            args: Prisma.LoginOTPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginOTPPayload>
          }
          createMany: {
            args: Prisma.LoginOTPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoginOTPCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginOTPPayload>[]
          }
          delete: {
            args: Prisma.LoginOTPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginOTPPayload>
          }
          update: {
            args: Prisma.LoginOTPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginOTPPayload>
          }
          deleteMany: {
            args: Prisma.LoginOTPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoginOTPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoginOTPUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginOTPPayload>[]
          }
          upsert: {
            args: Prisma.LoginOTPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginOTPPayload>
          }
          aggregate: {
            args: Prisma.LoginOTPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoginOTP>
          }
          groupBy: {
            args: Prisma.LoginOTPGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoginOTPGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoginOTPCountArgs<ExtArgs>
            result: $Utils.Optional<LoginOTPCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    employee?: EmployeeOmit
    education?: EducationOmit
    emergencyContact?: EmergencyContactOmit
    employeeSession?: EmployeeSessionOmit
    failedLoginAttempt?: FailedLoginAttemptOmit
    loginOTP?: LoginOTPOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    children: number
    educations: number
    emergencyContacts: number
    sessions: number
    failedLogins: number
    loginOtps: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | EmployeeCountOutputTypeCountChildrenArgs
    educations?: boolean | EmployeeCountOutputTypeCountEducationsArgs
    emergencyContacts?: boolean | EmployeeCountOutputTypeCountEmergencyContactsArgs
    sessions?: boolean | EmployeeCountOutputTypeCountSessionsArgs
    failedLogins?: boolean | EmployeeCountOutputTypeCountFailedLoginsArgs
    loginOtps?: boolean | EmployeeCountOutputTypeCountLoginOtpsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountEducationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountEmergencyContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyContactWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeSessionWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountFailedLoginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FailedLoginAttemptWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountLoginOtpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginOTPWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
    level: number | null
    parentId: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
    level: number | null
    parentId: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    publicId: string | null
    username: string | null
    email: string | null
    phone: string | null
    firstName: string | null
    lastName: string | null
    passwordHash: string | null
    isActive: boolean | null
    isStaff: boolean | null
    isSuperuser: boolean | null
    role: string | null
    department: string | null
    level: number | null
    parentId: number | null
    dateOfBirth: Date | null
    gender: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    publicId: string | null
    username: string | null
    email: string | null
    phone: string | null
    firstName: string | null
    lastName: string | null
    passwordHash: string | null
    isActive: boolean | null
    isStaff: boolean | null
    isSuperuser: boolean | null
    role: string | null
    department: string | null
    level: number | null
    parentId: number | null
    dateOfBirth: Date | null
    gender: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    publicId: number
    username: number
    email: number
    phone: number
    firstName: number
    lastName: number
    passwordHash: number
    isActive: number
    isStaff: number
    isSuperuser: number
    role: number
    department: number
    level: number
    parentId: number
    dateOfBirth: number
    gender: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
    level?: true
    parentId?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
    level?: true
    parentId?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    publicId?: true
    username?: true
    email?: true
    phone?: true
    firstName?: true
    lastName?: true
    passwordHash?: true
    isActive?: true
    isStaff?: true
    isSuperuser?: true
    role?: true
    department?: true
    level?: true
    parentId?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    publicId?: true
    username?: true
    email?: true
    phone?: true
    firstName?: true
    lastName?: true
    passwordHash?: true
    isActive?: true
    isStaff?: true
    isSuperuser?: true
    role?: true
    department?: true
    level?: true
    parentId?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    publicId?: true
    username?: true
    email?: true
    phone?: true
    firstName?: true
    lastName?: true
    passwordHash?: true
    isActive?: true
    isStaff?: true
    isSuperuser?: true
    role?: true
    department?: true
    level?: true
    parentId?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: number
    publicId: string
    username: string
    email: string | null
    phone: string | null
    firstName: string | null
    lastName: string | null
    passwordHash: string
    isActive: boolean
    isStaff: boolean
    isSuperuser: boolean
    role: string | null
    department: string | null
    level: number
    parentId: number | null
    dateOfBirth: Date | null
    gender: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    firstName?: boolean
    lastName?: boolean
    passwordHash?: boolean
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: boolean
    department?: boolean
    level?: boolean
    parentId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Employee$parentArgs<ExtArgs>
    children?: boolean | Employee$childrenArgs<ExtArgs>
    educations?: boolean | Employee$educationsArgs<ExtArgs>
    emergencyContacts?: boolean | Employee$emergencyContactsArgs<ExtArgs>
    sessions?: boolean | Employee$sessionsArgs<ExtArgs>
    failedLogins?: boolean | Employee$failedLoginsArgs<ExtArgs>
    loginOtps?: boolean | Employee$loginOtpsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    firstName?: boolean
    lastName?: boolean
    passwordHash?: boolean
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: boolean
    department?: boolean
    level?: boolean
    parentId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Employee$parentArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    firstName?: boolean
    lastName?: boolean
    passwordHash?: boolean
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: boolean
    department?: boolean
    level?: boolean
    parentId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Employee$parentArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    publicId?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    firstName?: boolean
    lastName?: boolean
    passwordHash?: boolean
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: boolean
    department?: boolean
    level?: boolean
    parentId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicId" | "username" | "email" | "phone" | "firstName" | "lastName" | "passwordHash" | "isActive" | "isStaff" | "isSuperuser" | "role" | "department" | "level" | "parentId" | "dateOfBirth" | "gender" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Employee$parentArgs<ExtArgs>
    children?: boolean | Employee$childrenArgs<ExtArgs>
    educations?: boolean | Employee$educationsArgs<ExtArgs>
    emergencyContacts?: boolean | Employee$emergencyContactsArgs<ExtArgs>
    sessions?: boolean | Employee$sessionsArgs<ExtArgs>
    failedLogins?: boolean | Employee$failedLoginsArgs<ExtArgs>
    loginOtps?: boolean | Employee$loginOtpsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Employee$parentArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Employee$parentArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      parent: Prisma.$EmployeePayload<ExtArgs> | null
      children: Prisma.$EmployeePayload<ExtArgs>[]
      educations: Prisma.$EducationPayload<ExtArgs>[]
      emergencyContacts: Prisma.$EmergencyContactPayload<ExtArgs>[]
      sessions: Prisma.$EmployeeSessionPayload<ExtArgs>[]
      failedLogins: Prisma.$FailedLoginAttemptPayload<ExtArgs>[]
      loginOtps: Prisma.$LoginOTPPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      publicId: string
      username: string
      email: string | null
      phone: string | null
      firstName: string | null
      lastName: string | null
      passwordHash: string
      isActive: boolean
      isStaff: boolean
      isSuperuser: boolean
      role: string | null
      department: string | null
      level: number
      parentId: number | null
      dateOfBirth: Date | null
      gender: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Employee$parentArgs<ExtArgs> = {}>(args?: Subset<T, Employee$parentArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Employee$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Employee$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    educations<T extends Employee$educationsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$educationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emergencyContacts<T extends Employee$emergencyContactsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$emergencyContactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Employee$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    failedLogins<T extends Employee$failedLoginsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$failedLoginsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    loginOtps<T extends Employee$loginOtpsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$loginOtpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginOTPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'Int'>
    readonly publicId: FieldRef<"Employee", 'String'>
    readonly username: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly phone: FieldRef<"Employee", 'String'>
    readonly firstName: FieldRef<"Employee", 'String'>
    readonly lastName: FieldRef<"Employee", 'String'>
    readonly passwordHash: FieldRef<"Employee", 'String'>
    readonly isActive: FieldRef<"Employee", 'Boolean'>
    readonly isStaff: FieldRef<"Employee", 'Boolean'>
    readonly isSuperuser: FieldRef<"Employee", 'Boolean'>
    readonly role: FieldRef<"Employee", 'String'>
    readonly department: FieldRef<"Employee", 'String'>
    readonly level: FieldRef<"Employee", 'Int'>
    readonly parentId: FieldRef<"Employee", 'Int'>
    readonly dateOfBirth: FieldRef<"Employee", 'DateTime'>
    readonly gender: FieldRef<"Employee", 'String'>
    readonly address: FieldRef<"Employee", 'String'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.parent
   */
  export type Employee$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Employee.children
   */
  export type Employee$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee.educations
   */
  export type Employee$educationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    cursor?: EducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Employee.emergencyContacts
   */
  export type Employee$emergencyContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    where?: EmergencyContactWhereInput
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    cursor?: EmergencyContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * Employee.sessions
   */
  export type Employee$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSession
     */
    select?: EmployeeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSession
     */
    omit?: EmployeeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSessionInclude<ExtArgs> | null
    where?: EmployeeSessionWhereInput
    orderBy?: EmployeeSessionOrderByWithRelationInput | EmployeeSessionOrderByWithRelationInput[]
    cursor?: EmployeeSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeSessionScalarFieldEnum | EmployeeSessionScalarFieldEnum[]
  }

  /**
   * Employee.failedLogins
   */
  export type Employee$failedLoginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedLoginAttempt
     */
    select?: FailedLoginAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedLoginAttempt
     */
    omit?: FailedLoginAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailedLoginAttemptInclude<ExtArgs> | null
    where?: FailedLoginAttemptWhereInput
    orderBy?: FailedLoginAttemptOrderByWithRelationInput | FailedLoginAttemptOrderByWithRelationInput[]
    cursor?: FailedLoginAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FailedLoginAttemptScalarFieldEnum | FailedLoginAttemptScalarFieldEnum[]
  }

  /**
   * Employee.loginOtps
   */
  export type Employee$loginOtpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginOTP
     */
    select?: LoginOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginOTP
     */
    omit?: LoginOTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginOTPInclude<ExtArgs> | null
    where?: LoginOTPWhereInput
    orderBy?: LoginOTPOrderByWithRelationInput | LoginOTPOrderByWithRelationInput[]
    cursor?: LoginOTPWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoginOTPScalarFieldEnum | LoginOTPScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type EducationSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type EducationMinAggregateOutputType = {
    id: number | null
    employeeId: number | null
    degree: string | null
    university: string | null
    graduationYear: string | null
  }

  export type EducationMaxAggregateOutputType = {
    id: number | null
    employeeId: number | null
    degree: string | null
    university: string | null
    graduationYear: string | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    employeeId: number
    degree: number
    university: number
    graduationYear: number
    _all: number
  }


  export type EducationAvgAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type EducationSumAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type EducationMinAggregateInputType = {
    id?: true
    employeeId?: true
    degree?: true
    university?: true
    graduationYear?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    employeeId?: true
    degree?: true
    university?: true
    graduationYear?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    employeeId?: true
    degree?: true
    university?: true
    graduationYear?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EducationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EducationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _avg?: EducationAvgAggregateInputType
    _sum?: EducationSumAggregateInputType
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: number
    employeeId: number
    degree: string
    university: string
    graduationYear: string | null
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    degree?: boolean
    university?: boolean
    graduationYear?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    degree?: boolean
    university?: boolean
    graduationYear?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    degree?: boolean
    university?: boolean
    graduationYear?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectScalar = {
    id?: boolean
    employeeId?: boolean
    degree?: boolean
    university?: boolean
    graduationYear?: boolean
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "degree" | "university" | "graduationYear", ExtArgs["result"]["education"]>
  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type EducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type EducationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: number
      degree: string
      university: string
      graduationYear: string | null
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {EducationCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations and returns the data updated in the database.
     * @param {EducationUpdateManyAndReturnArgs} args - Arguments to update many Educations.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EducationUpdateManyAndReturnArgs>(args: SelectSubset<T, EducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
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
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Education model
   */
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'Int'>
    readonly employeeId: FieldRef<"Education", 'Int'>
    readonly degree: FieldRef<"Education", 'String'>
    readonly university: FieldRef<"Education", 'String'>
    readonly graduationYear: FieldRef<"Education", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Education createManyAndReturn
   */
  export type EducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education updateManyAndReturn
   */
  export type EducationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to delete.
     */
    limit?: number
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Model EmergencyContact
   */

  export type AggregateEmergencyContact = {
    _count: EmergencyContactCountAggregateOutputType | null
    _avg: EmergencyContactAvgAggregateOutputType | null
    _sum: EmergencyContactSumAggregateOutputType | null
    _min: EmergencyContactMinAggregateOutputType | null
    _max: EmergencyContactMaxAggregateOutputType | null
  }

  export type EmergencyContactAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type EmergencyContactSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type EmergencyContactMinAggregateOutputType = {
    id: number | null
    employeeId: number | null
    name: string | null
    phone: string | null
    address: string | null
  }

  export type EmergencyContactMaxAggregateOutputType = {
    id: number | null
    employeeId: number | null
    name: string | null
    phone: string | null
    address: string | null
  }

  export type EmergencyContactCountAggregateOutputType = {
    id: number
    employeeId: number
    name: number
    phone: number
    address: number
    _all: number
  }


  export type EmergencyContactAvgAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type EmergencyContactSumAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type EmergencyContactMinAggregateInputType = {
    id?: true
    employeeId?: true
    name?: true
    phone?: true
    address?: true
  }

  export type EmergencyContactMaxAggregateInputType = {
    id?: true
    employeeId?: true
    name?: true
    phone?: true
    address?: true
  }

  export type EmergencyContactCountAggregateInputType = {
    id?: true
    employeeId?: true
    name?: true
    phone?: true
    address?: true
    _all?: true
  }

  export type EmergencyContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyContact to aggregate.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmergencyContacts
    **/
    _count?: true | EmergencyContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmergencyContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmergencyContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmergencyContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmergencyContactMaxAggregateInputType
  }

  export type GetEmergencyContactAggregateType<T extends EmergencyContactAggregateArgs> = {
        [P in keyof T & keyof AggregateEmergencyContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmergencyContact[P]>
      : GetScalarType<T[P], AggregateEmergencyContact[P]>
  }




  export type EmergencyContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyContactWhereInput
    orderBy?: EmergencyContactOrderByWithAggregationInput | EmergencyContactOrderByWithAggregationInput[]
    by: EmergencyContactScalarFieldEnum[] | EmergencyContactScalarFieldEnum
    having?: EmergencyContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmergencyContactCountAggregateInputType | true
    _avg?: EmergencyContactAvgAggregateInputType
    _sum?: EmergencyContactSumAggregateInputType
    _min?: EmergencyContactMinAggregateInputType
    _max?: EmergencyContactMaxAggregateInputType
  }

  export type EmergencyContactGroupByOutputType = {
    id: number
    employeeId: number
    name: string
    phone: string
    address: string | null
    _count: EmergencyContactCountAggregateOutputType | null
    _avg: EmergencyContactAvgAggregateOutputType | null
    _sum: EmergencyContactSumAggregateOutputType | null
    _min: EmergencyContactMinAggregateOutputType | null
    _max: EmergencyContactMaxAggregateOutputType | null
  }

  type GetEmergencyContactGroupByPayload<T extends EmergencyContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmergencyContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmergencyContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmergencyContactGroupByOutputType[P]>
            : GetScalarType<T[P], EmergencyContactGroupByOutputType[P]>
        }
      >
    >


  export type EmergencyContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyContact"]>

  export type EmergencyContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyContact"]>

  export type EmergencyContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyContact"]>

  export type EmergencyContactSelectScalar = {
    id?: boolean
    employeeId?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
  }

  export type EmergencyContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "name" | "phone" | "address", ExtArgs["result"]["emergencyContact"]>
  export type EmergencyContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type EmergencyContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type EmergencyContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $EmergencyContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmergencyContact"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: number
      name: string
      phone: string
      address: string | null
    }, ExtArgs["result"]["emergencyContact"]>
    composites: {}
  }

  type EmergencyContactGetPayload<S extends boolean | null | undefined | EmergencyContactDefaultArgs> = $Result.GetResult<Prisma.$EmergencyContactPayload, S>

  type EmergencyContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmergencyContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmergencyContactCountAggregateInputType | true
    }

  export interface EmergencyContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmergencyContact'], meta: { name: 'EmergencyContact' } }
    /**
     * Find zero or one EmergencyContact that matches the filter.
     * @param {EmergencyContactFindUniqueArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmergencyContactFindUniqueArgs>(args: SelectSubset<T, EmergencyContactFindUniqueArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmergencyContact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmergencyContactFindUniqueOrThrowArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmergencyContactFindUniqueOrThrowArgs>(args: SelectSubset<T, EmergencyContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmergencyContact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactFindFirstArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmergencyContactFindFirstArgs>(args?: SelectSubset<T, EmergencyContactFindFirstArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmergencyContact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactFindFirstOrThrowArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmergencyContactFindFirstOrThrowArgs>(args?: SelectSubset<T, EmergencyContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmergencyContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmergencyContacts
     * const emergencyContacts = await prisma.emergencyContact.findMany()
     * 
     * // Get first 10 EmergencyContacts
     * const emergencyContacts = await prisma.emergencyContact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emergencyContactWithIdOnly = await prisma.emergencyContact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmergencyContactFindManyArgs>(args?: SelectSubset<T, EmergencyContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmergencyContact.
     * @param {EmergencyContactCreateArgs} args - Arguments to create a EmergencyContact.
     * @example
     * // Create one EmergencyContact
     * const EmergencyContact = await prisma.emergencyContact.create({
     *   data: {
     *     // ... data to create a EmergencyContact
     *   }
     * })
     * 
     */
    create<T extends EmergencyContactCreateArgs>(args: SelectSubset<T, EmergencyContactCreateArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmergencyContacts.
     * @param {EmergencyContactCreateManyArgs} args - Arguments to create many EmergencyContacts.
     * @example
     * // Create many EmergencyContacts
     * const emergencyContact = await prisma.emergencyContact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmergencyContactCreateManyArgs>(args?: SelectSubset<T, EmergencyContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmergencyContacts and returns the data saved in the database.
     * @param {EmergencyContactCreateManyAndReturnArgs} args - Arguments to create many EmergencyContacts.
     * @example
     * // Create many EmergencyContacts
     * const emergencyContact = await prisma.emergencyContact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmergencyContacts and only return the `id`
     * const emergencyContactWithIdOnly = await prisma.emergencyContact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmergencyContactCreateManyAndReturnArgs>(args?: SelectSubset<T, EmergencyContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmergencyContact.
     * @param {EmergencyContactDeleteArgs} args - Arguments to delete one EmergencyContact.
     * @example
     * // Delete one EmergencyContact
     * const EmergencyContact = await prisma.emergencyContact.delete({
     *   where: {
     *     // ... filter to delete one EmergencyContact
     *   }
     * })
     * 
     */
    delete<T extends EmergencyContactDeleteArgs>(args: SelectSubset<T, EmergencyContactDeleteArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmergencyContact.
     * @param {EmergencyContactUpdateArgs} args - Arguments to update one EmergencyContact.
     * @example
     * // Update one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmergencyContactUpdateArgs>(args: SelectSubset<T, EmergencyContactUpdateArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmergencyContacts.
     * @param {EmergencyContactDeleteManyArgs} args - Arguments to filter EmergencyContacts to delete.
     * @example
     * // Delete a few EmergencyContacts
     * const { count } = await prisma.emergencyContact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmergencyContactDeleteManyArgs>(args?: SelectSubset<T, EmergencyContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmergencyContacts
     * const emergencyContact = await prisma.emergencyContact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmergencyContactUpdateManyArgs>(args: SelectSubset<T, EmergencyContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyContacts and returns the data updated in the database.
     * @param {EmergencyContactUpdateManyAndReturnArgs} args - Arguments to update many EmergencyContacts.
     * @example
     * // Update many EmergencyContacts
     * const emergencyContact = await prisma.emergencyContact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmergencyContacts and only return the `id`
     * const emergencyContactWithIdOnly = await prisma.emergencyContact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmergencyContactUpdateManyAndReturnArgs>(args: SelectSubset<T, EmergencyContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmergencyContact.
     * @param {EmergencyContactUpsertArgs} args - Arguments to update or create a EmergencyContact.
     * @example
     * // Update or create a EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.upsert({
     *   create: {
     *     // ... data to create a EmergencyContact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmergencyContact we want to update
     *   }
     * })
     */
    upsert<T extends EmergencyContactUpsertArgs>(args: SelectSubset<T, EmergencyContactUpsertArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmergencyContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactCountArgs} args - Arguments to filter EmergencyContacts to count.
     * @example
     * // Count the number of EmergencyContacts
     * const count = await prisma.emergencyContact.count({
     *   where: {
     *     // ... the filter for the EmergencyContacts we want to count
     *   }
     * })
    **/
    count<T extends EmergencyContactCountArgs>(
      args?: Subset<T, EmergencyContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmergencyContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmergencyContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmergencyContactAggregateArgs>(args: Subset<T, EmergencyContactAggregateArgs>): Prisma.PrismaPromise<GetEmergencyContactAggregateType<T>>

    /**
     * Group by EmergencyContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactGroupByArgs} args - Group by arguments.
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
      T extends EmergencyContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmergencyContactGroupByArgs['orderBy'] }
        : { orderBy?: EmergencyContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EmergencyContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmergencyContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmergencyContact model
   */
  readonly fields: EmergencyContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmergencyContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmergencyContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmergencyContact model
   */
  interface EmergencyContactFieldRefs {
    readonly id: FieldRef<"EmergencyContact", 'Int'>
    readonly employeeId: FieldRef<"EmergencyContact", 'Int'>
    readonly name: FieldRef<"EmergencyContact", 'String'>
    readonly phone: FieldRef<"EmergencyContact", 'String'>
    readonly address: FieldRef<"EmergencyContact", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmergencyContact findUnique
   */
  export type EmergencyContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact findUniqueOrThrow
   */
  export type EmergencyContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact findFirst
   */
  export type EmergencyContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyContacts.
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyContacts.
     */
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * EmergencyContact findFirstOrThrow
   */
  export type EmergencyContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyContacts.
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyContacts.
     */
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * EmergencyContact findMany
   */
  export type EmergencyContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContacts to fetch.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmergencyContacts.
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * EmergencyContact create
   */
  export type EmergencyContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * The data needed to create a EmergencyContact.
     */
    data: XOR<EmergencyContactCreateInput, EmergencyContactUncheckedCreateInput>
  }

  /**
   * EmergencyContact createMany
   */
  export type EmergencyContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmergencyContacts.
     */
    data: EmergencyContactCreateManyInput | EmergencyContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmergencyContact createManyAndReturn
   */
  export type EmergencyContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * The data used to create many EmergencyContacts.
     */
    data: EmergencyContactCreateManyInput | EmergencyContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmergencyContact update
   */
  export type EmergencyContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * The data needed to update a EmergencyContact.
     */
    data: XOR<EmergencyContactUpdateInput, EmergencyContactUncheckedUpdateInput>
    /**
     * Choose, which EmergencyContact to update.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact updateMany
   */
  export type EmergencyContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmergencyContacts.
     */
    data: XOR<EmergencyContactUpdateManyMutationInput, EmergencyContactUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyContacts to update
     */
    where?: EmergencyContactWhereInput
    /**
     * Limit how many EmergencyContacts to update.
     */
    limit?: number
  }

  /**
   * EmergencyContact updateManyAndReturn
   */
  export type EmergencyContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * The data used to update EmergencyContacts.
     */
    data: XOR<EmergencyContactUpdateManyMutationInput, EmergencyContactUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyContacts to update
     */
    where?: EmergencyContactWhereInput
    /**
     * Limit how many EmergencyContacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmergencyContact upsert
   */
  export type EmergencyContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * The filter to search for the EmergencyContact to update in case it exists.
     */
    where: EmergencyContactWhereUniqueInput
    /**
     * In case the EmergencyContact found by the `where` argument doesn't exist, create a new EmergencyContact with this data.
     */
    create: XOR<EmergencyContactCreateInput, EmergencyContactUncheckedCreateInput>
    /**
     * In case the EmergencyContact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmergencyContactUpdateInput, EmergencyContactUncheckedUpdateInput>
  }

  /**
   * EmergencyContact delete
   */
  export type EmergencyContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter which EmergencyContact to delete.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact deleteMany
   */
  export type EmergencyContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyContacts to delete
     */
    where?: EmergencyContactWhereInput
    /**
     * Limit how many EmergencyContacts to delete.
     */
    limit?: number
  }

  /**
   * EmergencyContact without action
   */
  export type EmergencyContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
  }


  /**
   * Model EmployeeSession
   */

  export type AggregateEmployeeSession = {
    _count: EmployeeSessionCountAggregateOutputType | null
    _avg: EmployeeSessionAvgAggregateOutputType | null
    _sum: EmployeeSessionSumAggregateOutputType | null
    _min: EmployeeSessionMinAggregateOutputType | null
    _max: EmployeeSessionMaxAggregateOutputType | null
  }

  export type EmployeeSessionAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type EmployeeSessionSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type EmployeeSessionMinAggregateOutputType = {
    id: number | null
    sessionId: string | null
    employeeId: number | null
    refreshToken: string | null
    createdAt: Date | null
    expiresAt: Date | null
    isHibernated: boolean | null
    lastActive: Date | null
  }

  export type EmployeeSessionMaxAggregateOutputType = {
    id: number | null
    sessionId: string | null
    employeeId: number | null
    refreshToken: string | null
    createdAt: Date | null
    expiresAt: Date | null
    isHibernated: boolean | null
    lastActive: Date | null
  }

  export type EmployeeSessionCountAggregateOutputType = {
    id: number
    sessionId: number
    employeeId: number
    refreshToken: number
    createdAt: number
    expiresAt: number
    isHibernated: number
    lastActive: number
    _all: number
  }


  export type EmployeeSessionAvgAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type EmployeeSessionSumAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type EmployeeSessionMinAggregateInputType = {
    id?: true
    sessionId?: true
    employeeId?: true
    refreshToken?: true
    createdAt?: true
    expiresAt?: true
    isHibernated?: true
    lastActive?: true
  }

  export type EmployeeSessionMaxAggregateInputType = {
    id?: true
    sessionId?: true
    employeeId?: true
    refreshToken?: true
    createdAt?: true
    expiresAt?: true
    isHibernated?: true
    lastActive?: true
  }

  export type EmployeeSessionCountAggregateInputType = {
    id?: true
    sessionId?: true
    employeeId?: true
    refreshToken?: true
    createdAt?: true
    expiresAt?: true
    isHibernated?: true
    lastActive?: true
    _all?: true
  }

  export type EmployeeSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeSession to aggregate.
     */
    where?: EmployeeSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeSessions to fetch.
     */
    orderBy?: EmployeeSessionOrderByWithRelationInput | EmployeeSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeSessions
    **/
    _count?: true | EmployeeSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeSessionMaxAggregateInputType
  }

  export type GetEmployeeSessionAggregateType<T extends EmployeeSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeSession[P]>
      : GetScalarType<T[P], AggregateEmployeeSession[P]>
  }




  export type EmployeeSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeSessionWhereInput
    orderBy?: EmployeeSessionOrderByWithAggregationInput | EmployeeSessionOrderByWithAggregationInput[]
    by: EmployeeSessionScalarFieldEnum[] | EmployeeSessionScalarFieldEnum
    having?: EmployeeSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeSessionCountAggregateInputType | true
    _avg?: EmployeeSessionAvgAggregateInputType
    _sum?: EmployeeSessionSumAggregateInputType
    _min?: EmployeeSessionMinAggregateInputType
    _max?: EmployeeSessionMaxAggregateInputType
  }

  export type EmployeeSessionGroupByOutputType = {
    id: number
    sessionId: string
    employeeId: number
    refreshToken: string
    createdAt: Date
    expiresAt: Date | null
    isHibernated: boolean
    lastActive: Date
    _count: EmployeeSessionCountAggregateOutputType | null
    _avg: EmployeeSessionAvgAggregateOutputType | null
    _sum: EmployeeSessionSumAggregateOutputType | null
    _min: EmployeeSessionMinAggregateOutputType | null
    _max: EmployeeSessionMaxAggregateOutputType | null
  }

  type GetEmployeeSessionGroupByPayload<T extends EmployeeSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeSessionGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeSessionGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    employeeId?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isHibernated?: boolean
    lastActive?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeSession"]>

  export type EmployeeSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    employeeId?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isHibernated?: boolean
    lastActive?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeSession"]>

  export type EmployeeSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    employeeId?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isHibernated?: boolean
    lastActive?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeSession"]>

  export type EmployeeSessionSelectScalar = {
    id?: boolean
    sessionId?: boolean
    employeeId?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isHibernated?: boolean
    lastActive?: boolean
  }

  export type EmployeeSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "employeeId" | "refreshToken" | "createdAt" | "expiresAt" | "isHibernated" | "lastActive", ExtArgs["result"]["employeeSession"]>
  export type EmployeeSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type EmployeeSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type EmployeeSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $EmployeeSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeSession"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sessionId: string
      employeeId: number
      refreshToken: string
      createdAt: Date
      expiresAt: Date | null
      isHibernated: boolean
      lastActive: Date
    }, ExtArgs["result"]["employeeSession"]>
    composites: {}
  }

  type EmployeeSessionGetPayload<S extends boolean | null | undefined | EmployeeSessionDefaultArgs> = $Result.GetResult<Prisma.$EmployeeSessionPayload, S>

  type EmployeeSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeSessionCountAggregateInputType | true
    }

  export interface EmployeeSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeSession'], meta: { name: 'EmployeeSession' } }
    /**
     * Find zero or one EmployeeSession that matches the filter.
     * @param {EmployeeSessionFindUniqueArgs} args - Arguments to find a EmployeeSession
     * @example
     * // Get one EmployeeSession
     * const employeeSession = await prisma.employeeSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeSessionFindUniqueArgs>(args: SelectSubset<T, EmployeeSessionFindUniqueArgs<ExtArgs>>): Prisma__EmployeeSessionClient<$Result.GetResult<Prisma.$EmployeeSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployeeSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeSessionFindUniqueOrThrowArgs} args - Arguments to find a EmployeeSession
     * @example
     * // Get one EmployeeSession
     * const employeeSession = await prisma.employeeSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeSessionClient<$Result.GetResult<Prisma.$EmployeeSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSessionFindFirstArgs} args - Arguments to find a EmployeeSession
     * @example
     * // Get one EmployeeSession
     * const employeeSession = await prisma.employeeSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeSessionFindFirstArgs>(args?: SelectSubset<T, EmployeeSessionFindFirstArgs<ExtArgs>>): Prisma__EmployeeSessionClient<$Result.GetResult<Prisma.$EmployeeSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSessionFindFirstOrThrowArgs} args - Arguments to find a EmployeeSession
     * @example
     * // Get one EmployeeSession
     * const employeeSession = await prisma.employeeSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeSessionClient<$Result.GetResult<Prisma.$EmployeeSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployeeSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeSessions
     * const employeeSessions = await prisma.employeeSession.findMany()
     * 
     * // Get first 10 EmployeeSessions
     * const employeeSessions = await prisma.employeeSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeSessionWithIdOnly = await prisma.employeeSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeSessionFindManyArgs>(args?: SelectSubset<T, EmployeeSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployeeSession.
     * @param {EmployeeSessionCreateArgs} args - Arguments to create a EmployeeSession.
     * @example
     * // Create one EmployeeSession
     * const EmployeeSession = await prisma.employeeSession.create({
     *   data: {
     *     // ... data to create a EmployeeSession
     *   }
     * })
     * 
     */
    create<T extends EmployeeSessionCreateArgs>(args: SelectSubset<T, EmployeeSessionCreateArgs<ExtArgs>>): Prisma__EmployeeSessionClient<$Result.GetResult<Prisma.$EmployeeSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployeeSessions.
     * @param {EmployeeSessionCreateManyArgs} args - Arguments to create many EmployeeSessions.
     * @example
     * // Create many EmployeeSessions
     * const employeeSession = await prisma.employeeSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeSessionCreateManyArgs>(args?: SelectSubset<T, EmployeeSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeeSessions and returns the data saved in the database.
     * @param {EmployeeSessionCreateManyAndReturnArgs} args - Arguments to create many EmployeeSessions.
     * @example
     * // Create many EmployeeSessions
     * const employeeSession = await prisma.employeeSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeeSessions and only return the `id`
     * const employeeSessionWithIdOnly = await prisma.employeeSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmployeeSession.
     * @param {EmployeeSessionDeleteArgs} args - Arguments to delete one EmployeeSession.
     * @example
     * // Delete one EmployeeSession
     * const EmployeeSession = await prisma.employeeSession.delete({
     *   where: {
     *     // ... filter to delete one EmployeeSession
     *   }
     * })
     * 
     */
    delete<T extends EmployeeSessionDeleteArgs>(args: SelectSubset<T, EmployeeSessionDeleteArgs<ExtArgs>>): Prisma__EmployeeSessionClient<$Result.GetResult<Prisma.$EmployeeSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployeeSession.
     * @param {EmployeeSessionUpdateArgs} args - Arguments to update one EmployeeSession.
     * @example
     * // Update one EmployeeSession
     * const employeeSession = await prisma.employeeSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeSessionUpdateArgs>(args: SelectSubset<T, EmployeeSessionUpdateArgs<ExtArgs>>): Prisma__EmployeeSessionClient<$Result.GetResult<Prisma.$EmployeeSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployeeSessions.
     * @param {EmployeeSessionDeleteManyArgs} args - Arguments to filter EmployeeSessions to delete.
     * @example
     * // Delete a few EmployeeSessions
     * const { count } = await prisma.employeeSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeSessionDeleteManyArgs>(args?: SelectSubset<T, EmployeeSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeSessions
     * const employeeSession = await prisma.employeeSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeSessionUpdateManyArgs>(args: SelectSubset<T, EmployeeSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeSessions and returns the data updated in the database.
     * @param {EmployeeSessionUpdateManyAndReturnArgs} args - Arguments to update many EmployeeSessions.
     * @example
     * // Update many EmployeeSessions
     * const employeeSession = await prisma.employeeSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployeeSessions and only return the `id`
     * const employeeSessionWithIdOnly = await prisma.employeeSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmployeeSession.
     * @param {EmployeeSessionUpsertArgs} args - Arguments to update or create a EmployeeSession.
     * @example
     * // Update or create a EmployeeSession
     * const employeeSession = await prisma.employeeSession.upsert({
     *   create: {
     *     // ... data to create a EmployeeSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeSession we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeSessionUpsertArgs>(args: SelectSubset<T, EmployeeSessionUpsertArgs<ExtArgs>>): Prisma__EmployeeSessionClient<$Result.GetResult<Prisma.$EmployeeSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployeeSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSessionCountArgs} args - Arguments to filter EmployeeSessions to count.
     * @example
     * // Count the number of EmployeeSessions
     * const count = await prisma.employeeSession.count({
     *   where: {
     *     // ... the filter for the EmployeeSessions we want to count
     *   }
     * })
    **/
    count<T extends EmployeeSessionCountArgs>(
      args?: Subset<T, EmployeeSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeSessionAggregateArgs>(args: Subset<T, EmployeeSessionAggregateArgs>): Prisma.PrismaPromise<GetEmployeeSessionAggregateType<T>>

    /**
     * Group by EmployeeSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeSessionGroupByArgs} args - Group by arguments.
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
      T extends EmployeeSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeSessionGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EmployeeSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeSession model
   */
  readonly fields: EmployeeSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmployeeSession model
   */
  interface EmployeeSessionFieldRefs {
    readonly id: FieldRef<"EmployeeSession", 'Int'>
    readonly sessionId: FieldRef<"EmployeeSession", 'String'>
    readonly employeeId: FieldRef<"EmployeeSession", 'Int'>
    readonly refreshToken: FieldRef<"EmployeeSession", 'String'>
    readonly createdAt: FieldRef<"EmployeeSession", 'DateTime'>
    readonly expiresAt: FieldRef<"EmployeeSession", 'DateTime'>
    readonly isHibernated: FieldRef<"EmployeeSession", 'Boolean'>
    readonly lastActive: FieldRef<"EmployeeSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeSession findUnique
   */
  export type EmployeeSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSession
     */
    select?: EmployeeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSession
     */
    omit?: EmployeeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSessionInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeSession to fetch.
     */
    where: EmployeeSessionWhereUniqueInput
  }

  /**
   * EmployeeSession findUniqueOrThrow
   */
  export type EmployeeSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSession
     */
    select?: EmployeeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSession
     */
    omit?: EmployeeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSessionInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeSession to fetch.
     */
    where: EmployeeSessionWhereUniqueInput
  }

  /**
   * EmployeeSession findFirst
   */
  export type EmployeeSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSession
     */
    select?: EmployeeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSession
     */
    omit?: EmployeeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSessionInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeSession to fetch.
     */
    where?: EmployeeSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeSessions to fetch.
     */
    orderBy?: EmployeeSessionOrderByWithRelationInput | EmployeeSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeSessions.
     */
    cursor?: EmployeeSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeSessions.
     */
    distinct?: EmployeeSessionScalarFieldEnum | EmployeeSessionScalarFieldEnum[]
  }

  /**
   * EmployeeSession findFirstOrThrow
   */
  export type EmployeeSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSession
     */
    select?: EmployeeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSession
     */
    omit?: EmployeeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSessionInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeSession to fetch.
     */
    where?: EmployeeSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeSessions to fetch.
     */
    orderBy?: EmployeeSessionOrderByWithRelationInput | EmployeeSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeSessions.
     */
    cursor?: EmployeeSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeSessions.
     */
    distinct?: EmployeeSessionScalarFieldEnum | EmployeeSessionScalarFieldEnum[]
  }

  /**
   * EmployeeSession findMany
   */
  export type EmployeeSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSession
     */
    select?: EmployeeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSession
     */
    omit?: EmployeeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSessionInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeSessions to fetch.
     */
    where?: EmployeeSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeSessions to fetch.
     */
    orderBy?: EmployeeSessionOrderByWithRelationInput | EmployeeSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeSessions.
     */
    cursor?: EmployeeSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeSessions.
     */
    skip?: number
    distinct?: EmployeeSessionScalarFieldEnum | EmployeeSessionScalarFieldEnum[]
  }

  /**
   * EmployeeSession create
   */
  export type EmployeeSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSession
     */
    select?: EmployeeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSession
     */
    omit?: EmployeeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeeSession.
     */
    data: XOR<EmployeeSessionCreateInput, EmployeeSessionUncheckedCreateInput>
  }

  /**
   * EmployeeSession createMany
   */
  export type EmployeeSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeSessions.
     */
    data: EmployeeSessionCreateManyInput | EmployeeSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeSession createManyAndReturn
   */
  export type EmployeeSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSession
     */
    select?: EmployeeSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSession
     */
    omit?: EmployeeSessionOmit<ExtArgs> | null
    /**
     * The data used to create many EmployeeSessions.
     */
    data: EmployeeSessionCreateManyInput | EmployeeSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeSession update
   */
  export type EmployeeSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSession
     */
    select?: EmployeeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSession
     */
    omit?: EmployeeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeeSession.
     */
    data: XOR<EmployeeSessionUpdateInput, EmployeeSessionUncheckedUpdateInput>
    /**
     * Choose, which EmployeeSession to update.
     */
    where: EmployeeSessionWhereUniqueInput
  }

  /**
   * EmployeeSession updateMany
   */
  export type EmployeeSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeSessions.
     */
    data: XOR<EmployeeSessionUpdateManyMutationInput, EmployeeSessionUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeSessions to update
     */
    where?: EmployeeSessionWhereInput
    /**
     * Limit how many EmployeeSessions to update.
     */
    limit?: number
  }

  /**
   * EmployeeSession updateManyAndReturn
   */
  export type EmployeeSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSession
     */
    select?: EmployeeSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSession
     */
    omit?: EmployeeSessionOmit<ExtArgs> | null
    /**
     * The data used to update EmployeeSessions.
     */
    data: XOR<EmployeeSessionUpdateManyMutationInput, EmployeeSessionUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeSessions to update
     */
    where?: EmployeeSessionWhereInput
    /**
     * Limit how many EmployeeSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeSession upsert
   */
  export type EmployeeSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSession
     */
    select?: EmployeeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSession
     */
    omit?: EmployeeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeeSession to update in case it exists.
     */
    where: EmployeeSessionWhereUniqueInput
    /**
     * In case the EmployeeSession found by the `where` argument doesn't exist, create a new EmployeeSession with this data.
     */
    create: XOR<EmployeeSessionCreateInput, EmployeeSessionUncheckedCreateInput>
    /**
     * In case the EmployeeSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeSessionUpdateInput, EmployeeSessionUncheckedUpdateInput>
  }

  /**
   * EmployeeSession delete
   */
  export type EmployeeSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSession
     */
    select?: EmployeeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSession
     */
    omit?: EmployeeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSessionInclude<ExtArgs> | null
    /**
     * Filter which EmployeeSession to delete.
     */
    where: EmployeeSessionWhereUniqueInput
  }

  /**
   * EmployeeSession deleteMany
   */
  export type EmployeeSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeSessions to delete
     */
    where?: EmployeeSessionWhereInput
    /**
     * Limit how many EmployeeSessions to delete.
     */
    limit?: number
  }

  /**
   * EmployeeSession without action
   */
  export type EmployeeSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSession
     */
    select?: EmployeeSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSession
     */
    omit?: EmployeeSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeSessionInclude<ExtArgs> | null
  }


  /**
   * Model FailedLoginAttempt
   */

  export type AggregateFailedLoginAttempt = {
    _count: FailedLoginAttemptCountAggregateOutputType | null
    _avg: FailedLoginAttemptAvgAggregateOutputType | null
    _sum: FailedLoginAttemptSumAggregateOutputType | null
    _min: FailedLoginAttemptMinAggregateOutputType | null
    _max: FailedLoginAttemptMaxAggregateOutputType | null
  }

  export type FailedLoginAttemptAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type FailedLoginAttemptSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type FailedLoginAttemptMinAggregateOutputType = {
    id: number | null
    employeeId: number | null
    timestamp: Date | null
  }

  export type FailedLoginAttemptMaxAggregateOutputType = {
    id: number | null
    employeeId: number | null
    timestamp: Date | null
  }

  export type FailedLoginAttemptCountAggregateOutputType = {
    id: number
    employeeId: number
    timestamp: number
    _all: number
  }


  export type FailedLoginAttemptAvgAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type FailedLoginAttemptSumAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type FailedLoginAttemptMinAggregateInputType = {
    id?: true
    employeeId?: true
    timestamp?: true
  }

  export type FailedLoginAttemptMaxAggregateInputType = {
    id?: true
    employeeId?: true
    timestamp?: true
  }

  export type FailedLoginAttemptCountAggregateInputType = {
    id?: true
    employeeId?: true
    timestamp?: true
    _all?: true
  }

  export type FailedLoginAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FailedLoginAttempt to aggregate.
     */
    where?: FailedLoginAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailedLoginAttempts to fetch.
     */
    orderBy?: FailedLoginAttemptOrderByWithRelationInput | FailedLoginAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FailedLoginAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailedLoginAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailedLoginAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FailedLoginAttempts
    **/
    _count?: true | FailedLoginAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FailedLoginAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FailedLoginAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FailedLoginAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FailedLoginAttemptMaxAggregateInputType
  }

  export type GetFailedLoginAttemptAggregateType<T extends FailedLoginAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateFailedLoginAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFailedLoginAttempt[P]>
      : GetScalarType<T[P], AggregateFailedLoginAttempt[P]>
  }




  export type FailedLoginAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FailedLoginAttemptWhereInput
    orderBy?: FailedLoginAttemptOrderByWithAggregationInput | FailedLoginAttemptOrderByWithAggregationInput[]
    by: FailedLoginAttemptScalarFieldEnum[] | FailedLoginAttemptScalarFieldEnum
    having?: FailedLoginAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FailedLoginAttemptCountAggregateInputType | true
    _avg?: FailedLoginAttemptAvgAggregateInputType
    _sum?: FailedLoginAttemptSumAggregateInputType
    _min?: FailedLoginAttemptMinAggregateInputType
    _max?: FailedLoginAttemptMaxAggregateInputType
  }

  export type FailedLoginAttemptGroupByOutputType = {
    id: number
    employeeId: number
    timestamp: Date
    _count: FailedLoginAttemptCountAggregateOutputType | null
    _avg: FailedLoginAttemptAvgAggregateOutputType | null
    _sum: FailedLoginAttemptSumAggregateOutputType | null
    _min: FailedLoginAttemptMinAggregateOutputType | null
    _max: FailedLoginAttemptMaxAggregateOutputType | null
  }

  type GetFailedLoginAttemptGroupByPayload<T extends FailedLoginAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FailedLoginAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FailedLoginAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FailedLoginAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], FailedLoginAttemptGroupByOutputType[P]>
        }
      >
    >


  export type FailedLoginAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    timestamp?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["failedLoginAttempt"]>

  export type FailedLoginAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    timestamp?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["failedLoginAttempt"]>

  export type FailedLoginAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    timestamp?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["failedLoginAttempt"]>

  export type FailedLoginAttemptSelectScalar = {
    id?: boolean
    employeeId?: boolean
    timestamp?: boolean
  }

  export type FailedLoginAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "timestamp", ExtArgs["result"]["failedLoginAttempt"]>
  export type FailedLoginAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type FailedLoginAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type FailedLoginAttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $FailedLoginAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FailedLoginAttempt"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: number
      timestamp: Date
    }, ExtArgs["result"]["failedLoginAttempt"]>
    composites: {}
  }

  type FailedLoginAttemptGetPayload<S extends boolean | null | undefined | FailedLoginAttemptDefaultArgs> = $Result.GetResult<Prisma.$FailedLoginAttemptPayload, S>

  type FailedLoginAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FailedLoginAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FailedLoginAttemptCountAggregateInputType | true
    }

  export interface FailedLoginAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FailedLoginAttempt'], meta: { name: 'FailedLoginAttempt' } }
    /**
     * Find zero or one FailedLoginAttempt that matches the filter.
     * @param {FailedLoginAttemptFindUniqueArgs} args - Arguments to find a FailedLoginAttempt
     * @example
     * // Get one FailedLoginAttempt
     * const failedLoginAttempt = await prisma.failedLoginAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FailedLoginAttemptFindUniqueArgs>(args: SelectSubset<T, FailedLoginAttemptFindUniqueArgs<ExtArgs>>): Prisma__FailedLoginAttemptClient<$Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FailedLoginAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FailedLoginAttemptFindUniqueOrThrowArgs} args - Arguments to find a FailedLoginAttempt
     * @example
     * // Get one FailedLoginAttempt
     * const failedLoginAttempt = await prisma.failedLoginAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FailedLoginAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, FailedLoginAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FailedLoginAttemptClient<$Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FailedLoginAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedLoginAttemptFindFirstArgs} args - Arguments to find a FailedLoginAttempt
     * @example
     * // Get one FailedLoginAttempt
     * const failedLoginAttempt = await prisma.failedLoginAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FailedLoginAttemptFindFirstArgs>(args?: SelectSubset<T, FailedLoginAttemptFindFirstArgs<ExtArgs>>): Prisma__FailedLoginAttemptClient<$Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FailedLoginAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedLoginAttemptFindFirstOrThrowArgs} args - Arguments to find a FailedLoginAttempt
     * @example
     * // Get one FailedLoginAttempt
     * const failedLoginAttempt = await prisma.failedLoginAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FailedLoginAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, FailedLoginAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__FailedLoginAttemptClient<$Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FailedLoginAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedLoginAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FailedLoginAttempts
     * const failedLoginAttempts = await prisma.failedLoginAttempt.findMany()
     * 
     * // Get first 10 FailedLoginAttempts
     * const failedLoginAttempts = await prisma.failedLoginAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const failedLoginAttemptWithIdOnly = await prisma.failedLoginAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FailedLoginAttemptFindManyArgs>(args?: SelectSubset<T, FailedLoginAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FailedLoginAttempt.
     * @param {FailedLoginAttemptCreateArgs} args - Arguments to create a FailedLoginAttempt.
     * @example
     * // Create one FailedLoginAttempt
     * const FailedLoginAttempt = await prisma.failedLoginAttempt.create({
     *   data: {
     *     // ... data to create a FailedLoginAttempt
     *   }
     * })
     * 
     */
    create<T extends FailedLoginAttemptCreateArgs>(args: SelectSubset<T, FailedLoginAttemptCreateArgs<ExtArgs>>): Prisma__FailedLoginAttemptClient<$Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FailedLoginAttempts.
     * @param {FailedLoginAttemptCreateManyArgs} args - Arguments to create many FailedLoginAttempts.
     * @example
     * // Create many FailedLoginAttempts
     * const failedLoginAttempt = await prisma.failedLoginAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FailedLoginAttemptCreateManyArgs>(args?: SelectSubset<T, FailedLoginAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FailedLoginAttempts and returns the data saved in the database.
     * @param {FailedLoginAttemptCreateManyAndReturnArgs} args - Arguments to create many FailedLoginAttempts.
     * @example
     * // Create many FailedLoginAttempts
     * const failedLoginAttempt = await prisma.failedLoginAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FailedLoginAttempts and only return the `id`
     * const failedLoginAttemptWithIdOnly = await prisma.failedLoginAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FailedLoginAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, FailedLoginAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FailedLoginAttempt.
     * @param {FailedLoginAttemptDeleteArgs} args - Arguments to delete one FailedLoginAttempt.
     * @example
     * // Delete one FailedLoginAttempt
     * const FailedLoginAttempt = await prisma.failedLoginAttempt.delete({
     *   where: {
     *     // ... filter to delete one FailedLoginAttempt
     *   }
     * })
     * 
     */
    delete<T extends FailedLoginAttemptDeleteArgs>(args: SelectSubset<T, FailedLoginAttemptDeleteArgs<ExtArgs>>): Prisma__FailedLoginAttemptClient<$Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FailedLoginAttempt.
     * @param {FailedLoginAttemptUpdateArgs} args - Arguments to update one FailedLoginAttempt.
     * @example
     * // Update one FailedLoginAttempt
     * const failedLoginAttempt = await prisma.failedLoginAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FailedLoginAttemptUpdateArgs>(args: SelectSubset<T, FailedLoginAttemptUpdateArgs<ExtArgs>>): Prisma__FailedLoginAttemptClient<$Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FailedLoginAttempts.
     * @param {FailedLoginAttemptDeleteManyArgs} args - Arguments to filter FailedLoginAttempts to delete.
     * @example
     * // Delete a few FailedLoginAttempts
     * const { count } = await prisma.failedLoginAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FailedLoginAttemptDeleteManyArgs>(args?: SelectSubset<T, FailedLoginAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FailedLoginAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedLoginAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FailedLoginAttempts
     * const failedLoginAttempt = await prisma.failedLoginAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FailedLoginAttemptUpdateManyArgs>(args: SelectSubset<T, FailedLoginAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FailedLoginAttempts and returns the data updated in the database.
     * @param {FailedLoginAttemptUpdateManyAndReturnArgs} args - Arguments to update many FailedLoginAttempts.
     * @example
     * // Update many FailedLoginAttempts
     * const failedLoginAttempt = await prisma.failedLoginAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FailedLoginAttempts and only return the `id`
     * const failedLoginAttemptWithIdOnly = await prisma.failedLoginAttempt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FailedLoginAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, FailedLoginAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FailedLoginAttempt.
     * @param {FailedLoginAttemptUpsertArgs} args - Arguments to update or create a FailedLoginAttempt.
     * @example
     * // Update or create a FailedLoginAttempt
     * const failedLoginAttempt = await prisma.failedLoginAttempt.upsert({
     *   create: {
     *     // ... data to create a FailedLoginAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FailedLoginAttempt we want to update
     *   }
     * })
     */
    upsert<T extends FailedLoginAttemptUpsertArgs>(args: SelectSubset<T, FailedLoginAttemptUpsertArgs<ExtArgs>>): Prisma__FailedLoginAttemptClient<$Result.GetResult<Prisma.$FailedLoginAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FailedLoginAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedLoginAttemptCountArgs} args - Arguments to filter FailedLoginAttempts to count.
     * @example
     * // Count the number of FailedLoginAttempts
     * const count = await prisma.failedLoginAttempt.count({
     *   where: {
     *     // ... the filter for the FailedLoginAttempts we want to count
     *   }
     * })
    **/
    count<T extends FailedLoginAttemptCountArgs>(
      args?: Subset<T, FailedLoginAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FailedLoginAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FailedLoginAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedLoginAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FailedLoginAttemptAggregateArgs>(args: Subset<T, FailedLoginAttemptAggregateArgs>): Prisma.PrismaPromise<GetFailedLoginAttemptAggregateType<T>>

    /**
     * Group by FailedLoginAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedLoginAttemptGroupByArgs} args - Group by arguments.
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
      T extends FailedLoginAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FailedLoginAttemptGroupByArgs['orderBy'] }
        : { orderBy?: FailedLoginAttemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FailedLoginAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFailedLoginAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FailedLoginAttempt model
   */
  readonly fields: FailedLoginAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FailedLoginAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FailedLoginAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FailedLoginAttempt model
   */
  interface FailedLoginAttemptFieldRefs {
    readonly id: FieldRef<"FailedLoginAttempt", 'Int'>
    readonly employeeId: FieldRef<"FailedLoginAttempt", 'Int'>
    readonly timestamp: FieldRef<"FailedLoginAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FailedLoginAttempt findUnique
   */
  export type FailedLoginAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedLoginAttempt
     */
    select?: FailedLoginAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedLoginAttempt
     */
    omit?: FailedLoginAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailedLoginAttemptInclude<ExtArgs> | null
    /**
     * Filter, which FailedLoginAttempt to fetch.
     */
    where: FailedLoginAttemptWhereUniqueInput
  }

  /**
   * FailedLoginAttempt findUniqueOrThrow
   */
  export type FailedLoginAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedLoginAttempt
     */
    select?: FailedLoginAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedLoginAttempt
     */
    omit?: FailedLoginAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailedLoginAttemptInclude<ExtArgs> | null
    /**
     * Filter, which FailedLoginAttempt to fetch.
     */
    where: FailedLoginAttemptWhereUniqueInput
  }

  /**
   * FailedLoginAttempt findFirst
   */
  export type FailedLoginAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedLoginAttempt
     */
    select?: FailedLoginAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedLoginAttempt
     */
    omit?: FailedLoginAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailedLoginAttemptInclude<ExtArgs> | null
    /**
     * Filter, which FailedLoginAttempt to fetch.
     */
    where?: FailedLoginAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailedLoginAttempts to fetch.
     */
    orderBy?: FailedLoginAttemptOrderByWithRelationInput | FailedLoginAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FailedLoginAttempts.
     */
    cursor?: FailedLoginAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailedLoginAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailedLoginAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FailedLoginAttempts.
     */
    distinct?: FailedLoginAttemptScalarFieldEnum | FailedLoginAttemptScalarFieldEnum[]
  }

  /**
   * FailedLoginAttempt findFirstOrThrow
   */
  export type FailedLoginAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedLoginAttempt
     */
    select?: FailedLoginAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedLoginAttempt
     */
    omit?: FailedLoginAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailedLoginAttemptInclude<ExtArgs> | null
    /**
     * Filter, which FailedLoginAttempt to fetch.
     */
    where?: FailedLoginAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailedLoginAttempts to fetch.
     */
    orderBy?: FailedLoginAttemptOrderByWithRelationInput | FailedLoginAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FailedLoginAttempts.
     */
    cursor?: FailedLoginAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailedLoginAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailedLoginAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FailedLoginAttempts.
     */
    distinct?: FailedLoginAttemptScalarFieldEnum | FailedLoginAttemptScalarFieldEnum[]
  }

  /**
   * FailedLoginAttempt findMany
   */
  export type FailedLoginAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedLoginAttempt
     */
    select?: FailedLoginAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedLoginAttempt
     */
    omit?: FailedLoginAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailedLoginAttemptInclude<ExtArgs> | null
    /**
     * Filter, which FailedLoginAttempts to fetch.
     */
    where?: FailedLoginAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailedLoginAttempts to fetch.
     */
    orderBy?: FailedLoginAttemptOrderByWithRelationInput | FailedLoginAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FailedLoginAttempts.
     */
    cursor?: FailedLoginAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailedLoginAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailedLoginAttempts.
     */
    skip?: number
    distinct?: FailedLoginAttemptScalarFieldEnum | FailedLoginAttemptScalarFieldEnum[]
  }

  /**
   * FailedLoginAttempt create
   */
  export type FailedLoginAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedLoginAttempt
     */
    select?: FailedLoginAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedLoginAttempt
     */
    omit?: FailedLoginAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailedLoginAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a FailedLoginAttempt.
     */
    data: XOR<FailedLoginAttemptCreateInput, FailedLoginAttemptUncheckedCreateInput>
  }

  /**
   * FailedLoginAttempt createMany
   */
  export type FailedLoginAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FailedLoginAttempts.
     */
    data: FailedLoginAttemptCreateManyInput | FailedLoginAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FailedLoginAttempt createManyAndReturn
   */
  export type FailedLoginAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedLoginAttempt
     */
    select?: FailedLoginAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FailedLoginAttempt
     */
    omit?: FailedLoginAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many FailedLoginAttempts.
     */
    data: FailedLoginAttemptCreateManyInput | FailedLoginAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailedLoginAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FailedLoginAttempt update
   */
  export type FailedLoginAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedLoginAttempt
     */
    select?: FailedLoginAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedLoginAttempt
     */
    omit?: FailedLoginAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailedLoginAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a FailedLoginAttempt.
     */
    data: XOR<FailedLoginAttemptUpdateInput, FailedLoginAttemptUncheckedUpdateInput>
    /**
     * Choose, which FailedLoginAttempt to update.
     */
    where: FailedLoginAttemptWhereUniqueInput
  }

  /**
   * FailedLoginAttempt updateMany
   */
  export type FailedLoginAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FailedLoginAttempts.
     */
    data: XOR<FailedLoginAttemptUpdateManyMutationInput, FailedLoginAttemptUncheckedUpdateManyInput>
    /**
     * Filter which FailedLoginAttempts to update
     */
    where?: FailedLoginAttemptWhereInput
    /**
     * Limit how many FailedLoginAttempts to update.
     */
    limit?: number
  }

  /**
   * FailedLoginAttempt updateManyAndReturn
   */
  export type FailedLoginAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedLoginAttempt
     */
    select?: FailedLoginAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FailedLoginAttempt
     */
    omit?: FailedLoginAttemptOmit<ExtArgs> | null
    /**
     * The data used to update FailedLoginAttempts.
     */
    data: XOR<FailedLoginAttemptUpdateManyMutationInput, FailedLoginAttemptUncheckedUpdateManyInput>
    /**
     * Filter which FailedLoginAttempts to update
     */
    where?: FailedLoginAttemptWhereInput
    /**
     * Limit how many FailedLoginAttempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailedLoginAttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FailedLoginAttempt upsert
   */
  export type FailedLoginAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedLoginAttempt
     */
    select?: FailedLoginAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedLoginAttempt
     */
    omit?: FailedLoginAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailedLoginAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the FailedLoginAttempt to update in case it exists.
     */
    where: FailedLoginAttemptWhereUniqueInput
    /**
     * In case the FailedLoginAttempt found by the `where` argument doesn't exist, create a new FailedLoginAttempt with this data.
     */
    create: XOR<FailedLoginAttemptCreateInput, FailedLoginAttemptUncheckedCreateInput>
    /**
     * In case the FailedLoginAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FailedLoginAttemptUpdateInput, FailedLoginAttemptUncheckedUpdateInput>
  }

  /**
   * FailedLoginAttempt delete
   */
  export type FailedLoginAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedLoginAttempt
     */
    select?: FailedLoginAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedLoginAttempt
     */
    omit?: FailedLoginAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailedLoginAttemptInclude<ExtArgs> | null
    /**
     * Filter which FailedLoginAttempt to delete.
     */
    where: FailedLoginAttemptWhereUniqueInput
  }

  /**
   * FailedLoginAttempt deleteMany
   */
  export type FailedLoginAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FailedLoginAttempts to delete
     */
    where?: FailedLoginAttemptWhereInput
    /**
     * Limit how many FailedLoginAttempts to delete.
     */
    limit?: number
  }

  /**
   * FailedLoginAttempt without action
   */
  export type FailedLoginAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedLoginAttempt
     */
    select?: FailedLoginAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedLoginAttempt
     */
    omit?: FailedLoginAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FailedLoginAttemptInclude<ExtArgs> | null
  }


  /**
   * Model LoginOTP
   */

  export type AggregateLoginOTP = {
    _count: LoginOTPCountAggregateOutputType | null
    _avg: LoginOTPAvgAggregateOutputType | null
    _sum: LoginOTPSumAggregateOutputType | null
    _min: LoginOTPMinAggregateOutputType | null
    _max: LoginOTPMaxAggregateOutputType | null
  }

  export type LoginOTPAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LoginOTPSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LoginOTPMinAggregateOutputType = {
    id: number | null
    userId: number | null
    otp: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type LoginOTPMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    otp: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type LoginOTPCountAggregateOutputType = {
    id: number
    userId: number
    otp: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type LoginOTPAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LoginOTPSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LoginOTPMinAggregateInputType = {
    id?: true
    userId?: true
    otp?: true
    createdAt?: true
    expiresAt?: true
  }

  export type LoginOTPMaxAggregateInputType = {
    id?: true
    userId?: true
    otp?: true
    createdAt?: true
    expiresAt?: true
  }

  export type LoginOTPCountAggregateInputType = {
    id?: true
    userId?: true
    otp?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type LoginOTPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginOTP to aggregate.
     */
    where?: LoginOTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginOTPS to fetch.
     */
    orderBy?: LoginOTPOrderByWithRelationInput | LoginOTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoginOTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginOTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginOTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoginOTPS
    **/
    _count?: true | LoginOTPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoginOTPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoginOTPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginOTPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginOTPMaxAggregateInputType
  }

  export type GetLoginOTPAggregateType<T extends LoginOTPAggregateArgs> = {
        [P in keyof T & keyof AggregateLoginOTP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoginOTP[P]>
      : GetScalarType<T[P], AggregateLoginOTP[P]>
  }




  export type LoginOTPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginOTPWhereInput
    orderBy?: LoginOTPOrderByWithAggregationInput | LoginOTPOrderByWithAggregationInput[]
    by: LoginOTPScalarFieldEnum[] | LoginOTPScalarFieldEnum
    having?: LoginOTPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginOTPCountAggregateInputType | true
    _avg?: LoginOTPAvgAggregateInputType
    _sum?: LoginOTPSumAggregateInputType
    _min?: LoginOTPMinAggregateInputType
    _max?: LoginOTPMaxAggregateInputType
  }

  export type LoginOTPGroupByOutputType = {
    id: number
    userId: number
    otp: string
    createdAt: Date
    expiresAt: Date
    _count: LoginOTPCountAggregateOutputType | null
    _avg: LoginOTPAvgAggregateOutputType | null
    _sum: LoginOTPSumAggregateOutputType | null
    _min: LoginOTPMinAggregateOutputType | null
    _max: LoginOTPMaxAggregateOutputType | null
  }

  type GetLoginOTPGroupByPayload<T extends LoginOTPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginOTPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginOTPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginOTPGroupByOutputType[P]>
            : GetScalarType<T[P], LoginOTPGroupByOutputType[P]>
        }
      >
    >


  export type LoginOTPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otp?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loginOTP"]>

  export type LoginOTPSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otp?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loginOTP"]>

  export type LoginOTPSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otp?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loginOTP"]>

  export type LoginOTPSelectScalar = {
    id?: boolean
    userId?: boolean
    otp?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type LoginOTPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "otp" | "createdAt" | "expiresAt", ExtArgs["result"]["loginOTP"]>
  export type LoginOTPInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type LoginOTPIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type LoginOTPIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $LoginOTPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoginOTP"
    objects: {
      user: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      otp: string
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["loginOTP"]>
    composites: {}
  }

  type LoginOTPGetPayload<S extends boolean | null | undefined | LoginOTPDefaultArgs> = $Result.GetResult<Prisma.$LoginOTPPayload, S>

  type LoginOTPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoginOTPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoginOTPCountAggregateInputType | true
    }

  export interface LoginOTPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoginOTP'], meta: { name: 'LoginOTP' } }
    /**
     * Find zero or one LoginOTP that matches the filter.
     * @param {LoginOTPFindUniqueArgs} args - Arguments to find a LoginOTP
     * @example
     * // Get one LoginOTP
     * const loginOTP = await prisma.loginOTP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoginOTPFindUniqueArgs>(args: SelectSubset<T, LoginOTPFindUniqueArgs<ExtArgs>>): Prisma__LoginOTPClient<$Result.GetResult<Prisma.$LoginOTPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoginOTP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoginOTPFindUniqueOrThrowArgs} args - Arguments to find a LoginOTP
     * @example
     * // Get one LoginOTP
     * const loginOTP = await prisma.loginOTP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoginOTPFindUniqueOrThrowArgs>(args: SelectSubset<T, LoginOTPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoginOTPClient<$Result.GetResult<Prisma.$LoginOTPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoginOTP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginOTPFindFirstArgs} args - Arguments to find a LoginOTP
     * @example
     * // Get one LoginOTP
     * const loginOTP = await prisma.loginOTP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoginOTPFindFirstArgs>(args?: SelectSubset<T, LoginOTPFindFirstArgs<ExtArgs>>): Prisma__LoginOTPClient<$Result.GetResult<Prisma.$LoginOTPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoginOTP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginOTPFindFirstOrThrowArgs} args - Arguments to find a LoginOTP
     * @example
     * // Get one LoginOTP
     * const loginOTP = await prisma.loginOTP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoginOTPFindFirstOrThrowArgs>(args?: SelectSubset<T, LoginOTPFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoginOTPClient<$Result.GetResult<Prisma.$LoginOTPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoginOTPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginOTPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoginOTPS
     * const loginOTPS = await prisma.loginOTP.findMany()
     * 
     * // Get first 10 LoginOTPS
     * const loginOTPS = await prisma.loginOTP.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loginOTPWithIdOnly = await prisma.loginOTP.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoginOTPFindManyArgs>(args?: SelectSubset<T, LoginOTPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginOTPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoginOTP.
     * @param {LoginOTPCreateArgs} args - Arguments to create a LoginOTP.
     * @example
     * // Create one LoginOTP
     * const LoginOTP = await prisma.loginOTP.create({
     *   data: {
     *     // ... data to create a LoginOTP
     *   }
     * })
     * 
     */
    create<T extends LoginOTPCreateArgs>(args: SelectSubset<T, LoginOTPCreateArgs<ExtArgs>>): Prisma__LoginOTPClient<$Result.GetResult<Prisma.$LoginOTPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoginOTPS.
     * @param {LoginOTPCreateManyArgs} args - Arguments to create many LoginOTPS.
     * @example
     * // Create many LoginOTPS
     * const loginOTP = await prisma.loginOTP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoginOTPCreateManyArgs>(args?: SelectSubset<T, LoginOTPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoginOTPS and returns the data saved in the database.
     * @param {LoginOTPCreateManyAndReturnArgs} args - Arguments to create many LoginOTPS.
     * @example
     * // Create many LoginOTPS
     * const loginOTP = await prisma.loginOTP.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoginOTPS and only return the `id`
     * const loginOTPWithIdOnly = await prisma.loginOTP.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoginOTPCreateManyAndReturnArgs>(args?: SelectSubset<T, LoginOTPCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginOTPPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoginOTP.
     * @param {LoginOTPDeleteArgs} args - Arguments to delete one LoginOTP.
     * @example
     * // Delete one LoginOTP
     * const LoginOTP = await prisma.loginOTP.delete({
     *   where: {
     *     // ... filter to delete one LoginOTP
     *   }
     * })
     * 
     */
    delete<T extends LoginOTPDeleteArgs>(args: SelectSubset<T, LoginOTPDeleteArgs<ExtArgs>>): Prisma__LoginOTPClient<$Result.GetResult<Prisma.$LoginOTPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoginOTP.
     * @param {LoginOTPUpdateArgs} args - Arguments to update one LoginOTP.
     * @example
     * // Update one LoginOTP
     * const loginOTP = await prisma.loginOTP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoginOTPUpdateArgs>(args: SelectSubset<T, LoginOTPUpdateArgs<ExtArgs>>): Prisma__LoginOTPClient<$Result.GetResult<Prisma.$LoginOTPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoginOTPS.
     * @param {LoginOTPDeleteManyArgs} args - Arguments to filter LoginOTPS to delete.
     * @example
     * // Delete a few LoginOTPS
     * const { count } = await prisma.loginOTP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoginOTPDeleteManyArgs>(args?: SelectSubset<T, LoginOTPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoginOTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginOTPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoginOTPS
     * const loginOTP = await prisma.loginOTP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoginOTPUpdateManyArgs>(args: SelectSubset<T, LoginOTPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoginOTPS and returns the data updated in the database.
     * @param {LoginOTPUpdateManyAndReturnArgs} args - Arguments to update many LoginOTPS.
     * @example
     * // Update many LoginOTPS
     * const loginOTP = await prisma.loginOTP.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoginOTPS and only return the `id`
     * const loginOTPWithIdOnly = await prisma.loginOTP.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoginOTPUpdateManyAndReturnArgs>(args: SelectSubset<T, LoginOTPUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginOTPPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoginOTP.
     * @param {LoginOTPUpsertArgs} args - Arguments to update or create a LoginOTP.
     * @example
     * // Update or create a LoginOTP
     * const loginOTP = await prisma.loginOTP.upsert({
     *   create: {
     *     // ... data to create a LoginOTP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoginOTP we want to update
     *   }
     * })
     */
    upsert<T extends LoginOTPUpsertArgs>(args: SelectSubset<T, LoginOTPUpsertArgs<ExtArgs>>): Prisma__LoginOTPClient<$Result.GetResult<Prisma.$LoginOTPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoginOTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginOTPCountArgs} args - Arguments to filter LoginOTPS to count.
     * @example
     * // Count the number of LoginOTPS
     * const count = await prisma.loginOTP.count({
     *   where: {
     *     // ... the filter for the LoginOTPS we want to count
     *   }
     * })
    **/
    count<T extends LoginOTPCountArgs>(
      args?: Subset<T, LoginOTPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginOTPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoginOTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginOTPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoginOTPAggregateArgs>(args: Subset<T, LoginOTPAggregateArgs>): Prisma.PrismaPromise<GetLoginOTPAggregateType<T>>

    /**
     * Group by LoginOTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginOTPGroupByArgs} args - Group by arguments.
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
      T extends LoginOTPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoginOTPGroupByArgs['orderBy'] }
        : { orderBy?: LoginOTPGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LoginOTPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginOTPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoginOTP model
   */
  readonly fields: LoginOTPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoginOTP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoginOTPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoginOTP model
   */
  interface LoginOTPFieldRefs {
    readonly id: FieldRef<"LoginOTP", 'Int'>
    readonly userId: FieldRef<"LoginOTP", 'Int'>
    readonly otp: FieldRef<"LoginOTP", 'String'>
    readonly createdAt: FieldRef<"LoginOTP", 'DateTime'>
    readonly expiresAt: FieldRef<"LoginOTP", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoginOTP findUnique
   */
  export type LoginOTPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginOTP
     */
    select?: LoginOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginOTP
     */
    omit?: LoginOTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginOTPInclude<ExtArgs> | null
    /**
     * Filter, which LoginOTP to fetch.
     */
    where: LoginOTPWhereUniqueInput
  }

  /**
   * LoginOTP findUniqueOrThrow
   */
  export type LoginOTPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginOTP
     */
    select?: LoginOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginOTP
     */
    omit?: LoginOTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginOTPInclude<ExtArgs> | null
    /**
     * Filter, which LoginOTP to fetch.
     */
    where: LoginOTPWhereUniqueInput
  }

  /**
   * LoginOTP findFirst
   */
  export type LoginOTPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginOTP
     */
    select?: LoginOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginOTP
     */
    omit?: LoginOTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginOTPInclude<ExtArgs> | null
    /**
     * Filter, which LoginOTP to fetch.
     */
    where?: LoginOTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginOTPS to fetch.
     */
    orderBy?: LoginOTPOrderByWithRelationInput | LoginOTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginOTPS.
     */
    cursor?: LoginOTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginOTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginOTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginOTPS.
     */
    distinct?: LoginOTPScalarFieldEnum | LoginOTPScalarFieldEnum[]
  }

  /**
   * LoginOTP findFirstOrThrow
   */
  export type LoginOTPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginOTP
     */
    select?: LoginOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginOTP
     */
    omit?: LoginOTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginOTPInclude<ExtArgs> | null
    /**
     * Filter, which LoginOTP to fetch.
     */
    where?: LoginOTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginOTPS to fetch.
     */
    orderBy?: LoginOTPOrderByWithRelationInput | LoginOTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginOTPS.
     */
    cursor?: LoginOTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginOTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginOTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginOTPS.
     */
    distinct?: LoginOTPScalarFieldEnum | LoginOTPScalarFieldEnum[]
  }

  /**
   * LoginOTP findMany
   */
  export type LoginOTPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginOTP
     */
    select?: LoginOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginOTP
     */
    omit?: LoginOTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginOTPInclude<ExtArgs> | null
    /**
     * Filter, which LoginOTPS to fetch.
     */
    where?: LoginOTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginOTPS to fetch.
     */
    orderBy?: LoginOTPOrderByWithRelationInput | LoginOTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoginOTPS.
     */
    cursor?: LoginOTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginOTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginOTPS.
     */
    skip?: number
    distinct?: LoginOTPScalarFieldEnum | LoginOTPScalarFieldEnum[]
  }

  /**
   * LoginOTP create
   */
  export type LoginOTPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginOTP
     */
    select?: LoginOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginOTP
     */
    omit?: LoginOTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginOTPInclude<ExtArgs> | null
    /**
     * The data needed to create a LoginOTP.
     */
    data: XOR<LoginOTPCreateInput, LoginOTPUncheckedCreateInput>
  }

  /**
   * LoginOTP createMany
   */
  export type LoginOTPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoginOTPS.
     */
    data: LoginOTPCreateManyInput | LoginOTPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoginOTP createManyAndReturn
   */
  export type LoginOTPCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginOTP
     */
    select?: LoginOTPSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoginOTP
     */
    omit?: LoginOTPOmit<ExtArgs> | null
    /**
     * The data used to create many LoginOTPS.
     */
    data: LoginOTPCreateManyInput | LoginOTPCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginOTPIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoginOTP update
   */
  export type LoginOTPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginOTP
     */
    select?: LoginOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginOTP
     */
    omit?: LoginOTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginOTPInclude<ExtArgs> | null
    /**
     * The data needed to update a LoginOTP.
     */
    data: XOR<LoginOTPUpdateInput, LoginOTPUncheckedUpdateInput>
    /**
     * Choose, which LoginOTP to update.
     */
    where: LoginOTPWhereUniqueInput
  }

  /**
   * LoginOTP updateMany
   */
  export type LoginOTPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoginOTPS.
     */
    data: XOR<LoginOTPUpdateManyMutationInput, LoginOTPUncheckedUpdateManyInput>
    /**
     * Filter which LoginOTPS to update
     */
    where?: LoginOTPWhereInput
    /**
     * Limit how many LoginOTPS to update.
     */
    limit?: number
  }

  /**
   * LoginOTP updateManyAndReturn
   */
  export type LoginOTPUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginOTP
     */
    select?: LoginOTPSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoginOTP
     */
    omit?: LoginOTPOmit<ExtArgs> | null
    /**
     * The data used to update LoginOTPS.
     */
    data: XOR<LoginOTPUpdateManyMutationInput, LoginOTPUncheckedUpdateManyInput>
    /**
     * Filter which LoginOTPS to update
     */
    where?: LoginOTPWhereInput
    /**
     * Limit how many LoginOTPS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginOTPIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoginOTP upsert
   */
  export type LoginOTPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginOTP
     */
    select?: LoginOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginOTP
     */
    omit?: LoginOTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginOTPInclude<ExtArgs> | null
    /**
     * The filter to search for the LoginOTP to update in case it exists.
     */
    where: LoginOTPWhereUniqueInput
    /**
     * In case the LoginOTP found by the `where` argument doesn't exist, create a new LoginOTP with this data.
     */
    create: XOR<LoginOTPCreateInput, LoginOTPUncheckedCreateInput>
    /**
     * In case the LoginOTP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoginOTPUpdateInput, LoginOTPUncheckedUpdateInput>
  }

  /**
   * LoginOTP delete
   */
  export type LoginOTPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginOTP
     */
    select?: LoginOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginOTP
     */
    omit?: LoginOTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginOTPInclude<ExtArgs> | null
    /**
     * Filter which LoginOTP to delete.
     */
    where: LoginOTPWhereUniqueInput
  }

  /**
   * LoginOTP deleteMany
   */
  export type LoginOTPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginOTPS to delete
     */
    where?: LoginOTPWhereInput
    /**
     * Limit how many LoginOTPS to delete.
     */
    limit?: number
  }

  /**
   * LoginOTP without action
   */
  export type LoginOTPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginOTP
     */
    select?: LoginOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginOTP
     */
    omit?: LoginOTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginOTPInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    publicId: 'publicId',
    username: 'username',
    email: 'email',
    phone: 'phone',
    firstName: 'firstName',
    lastName: 'lastName',
    passwordHash: 'passwordHash',
    isActive: 'isActive',
    isStaff: 'isStaff',
    isSuperuser: 'isSuperuser',
    role: 'role',
    department: 'department',
    level: 'level',
    parentId: 'parentId',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    degree: 'degree',
    university: 'university',
    graduationYear: 'graduationYear'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const EmergencyContactScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    name: 'name',
    phone: 'phone',
    address: 'address'
  };

  export type EmergencyContactScalarFieldEnum = (typeof EmergencyContactScalarFieldEnum)[keyof typeof EmergencyContactScalarFieldEnum]


  export const EmployeeSessionScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    employeeId: 'employeeId',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    isHibernated: 'isHibernated',
    lastActive: 'lastActive'
  };

  export type EmployeeSessionScalarFieldEnum = (typeof EmployeeSessionScalarFieldEnum)[keyof typeof EmployeeSessionScalarFieldEnum]


  export const FailedLoginAttemptScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    timestamp: 'timestamp'
  };

  export type FailedLoginAttemptScalarFieldEnum = (typeof FailedLoginAttemptScalarFieldEnum)[keyof typeof FailedLoginAttemptScalarFieldEnum]


  export const LoginOTPScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    otp: 'otp',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type LoginOTPScalarFieldEnum = (typeof LoginOTPScalarFieldEnum)[keyof typeof LoginOTPScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: IntFilter<"Employee"> | number
    publicId?: StringFilter<"Employee"> | string
    username?: StringFilter<"Employee"> | string
    email?: StringNullableFilter<"Employee"> | string | null
    phone?: StringNullableFilter<"Employee"> | string | null
    firstName?: StringNullableFilter<"Employee"> | string | null
    lastName?: StringNullableFilter<"Employee"> | string | null
    passwordHash?: StringFilter<"Employee"> | string
    isActive?: BoolFilter<"Employee"> | boolean
    isStaff?: BoolFilter<"Employee"> | boolean
    isSuperuser?: BoolFilter<"Employee"> | boolean
    role?: StringNullableFilter<"Employee"> | string | null
    department?: StringNullableFilter<"Employee"> | string | null
    level?: IntFilter<"Employee"> | number
    parentId?: IntNullableFilter<"Employee"> | number | null
    dateOfBirth?: DateTimeNullableFilter<"Employee"> | Date | string | null
    gender?: StringNullableFilter<"Employee"> | string | null
    address?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    parent?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    children?: EmployeeListRelationFilter
    educations?: EducationListRelationFilter
    emergencyContacts?: EmergencyContactListRelationFilter
    sessions?: EmployeeSessionListRelationFilter
    failedLogins?: FailedLoginAttemptListRelationFilter
    loginOtps?: LoginOTPListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    publicId?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    isStaff?: SortOrder
    isSuperuser?: SortOrder
    role?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    level?: SortOrder
    parentId?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: EmployeeOrderByWithRelationInput
    children?: EmployeeOrderByRelationAggregateInput
    educations?: EducationOrderByRelationAggregateInput
    emergencyContacts?: EmergencyContactOrderByRelationAggregateInput
    sessions?: EmployeeSessionOrderByRelationAggregateInput
    failedLogins?: FailedLoginAttemptOrderByRelationAggregateInput
    loginOtps?: LoginOTPOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    publicId?: string
    username?: string
    email?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    phone?: StringNullableFilter<"Employee"> | string | null
    firstName?: StringNullableFilter<"Employee"> | string | null
    lastName?: StringNullableFilter<"Employee"> | string | null
    passwordHash?: StringFilter<"Employee"> | string
    isActive?: BoolFilter<"Employee"> | boolean
    isStaff?: BoolFilter<"Employee"> | boolean
    isSuperuser?: BoolFilter<"Employee"> | boolean
    role?: StringNullableFilter<"Employee"> | string | null
    department?: StringNullableFilter<"Employee"> | string | null
    level?: IntFilter<"Employee"> | number
    parentId?: IntNullableFilter<"Employee"> | number | null
    dateOfBirth?: DateTimeNullableFilter<"Employee"> | Date | string | null
    gender?: StringNullableFilter<"Employee"> | string | null
    address?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    parent?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    children?: EmployeeListRelationFilter
    educations?: EducationListRelationFilter
    emergencyContacts?: EmergencyContactListRelationFilter
    sessions?: EmployeeSessionListRelationFilter
    failedLogins?: FailedLoginAttemptListRelationFilter
    loginOtps?: LoginOTPListRelationFilter
  }, "id" | "publicId" | "username" | "email">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    publicId?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    isStaff?: SortOrder
    isSuperuser?: SortOrder
    role?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    level?: SortOrder
    parentId?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employee"> | number
    publicId?: StringWithAggregatesFilter<"Employee"> | string
    username?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    passwordHash?: StringWithAggregatesFilter<"Employee"> | string
    isActive?: BoolWithAggregatesFilter<"Employee"> | boolean
    isStaff?: BoolWithAggregatesFilter<"Employee"> | boolean
    isSuperuser?: BoolWithAggregatesFilter<"Employee"> | boolean
    role?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    department?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    level?: IntWithAggregatesFilter<"Employee"> | number
    parentId?: IntNullableWithAggregatesFilter<"Employee"> | number | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    address?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: IntFilter<"Education"> | number
    employeeId?: IntFilter<"Education"> | number
    degree?: StringFilter<"Education"> | string
    university?: StringFilter<"Education"> | string
    graduationYear?: StringNullableFilter<"Education"> | string | null
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    degree?: SortOrder
    university?: SortOrder
    graduationYear?: SortOrderInput | SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    employeeId?: IntFilter<"Education"> | number
    degree?: StringFilter<"Education"> | string
    university?: StringFilter<"Education"> | string
    graduationYear?: StringNullableFilter<"Education"> | string | null
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    degree?: SortOrder
    university?: SortOrder
    graduationYear?: SortOrderInput | SortOrder
    _count?: EducationCountOrderByAggregateInput
    _avg?: EducationAvgOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
    _sum?: EducationSumOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Education"> | number
    employeeId?: IntWithAggregatesFilter<"Education"> | number
    degree?: StringWithAggregatesFilter<"Education"> | string
    university?: StringWithAggregatesFilter<"Education"> | string
    graduationYear?: StringNullableWithAggregatesFilter<"Education"> | string | null
  }

  export type EmergencyContactWhereInput = {
    AND?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    OR?: EmergencyContactWhereInput[]
    NOT?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    id?: IntFilter<"EmergencyContact"> | number
    employeeId?: IntFilter<"EmergencyContact"> | number
    name?: StringFilter<"EmergencyContact"> | string
    phone?: StringFilter<"EmergencyContact"> | string
    address?: StringNullableFilter<"EmergencyContact"> | string | null
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type EmergencyContactOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type EmergencyContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    OR?: EmergencyContactWhereInput[]
    NOT?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    employeeId?: IntFilter<"EmergencyContact"> | number
    name?: StringFilter<"EmergencyContact"> | string
    phone?: StringFilter<"EmergencyContact"> | string
    address?: StringNullableFilter<"EmergencyContact"> | string | null
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type EmergencyContactOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    _count?: EmergencyContactCountOrderByAggregateInput
    _avg?: EmergencyContactAvgOrderByAggregateInput
    _max?: EmergencyContactMaxOrderByAggregateInput
    _min?: EmergencyContactMinOrderByAggregateInput
    _sum?: EmergencyContactSumOrderByAggregateInput
  }

  export type EmergencyContactScalarWhereWithAggregatesInput = {
    AND?: EmergencyContactScalarWhereWithAggregatesInput | EmergencyContactScalarWhereWithAggregatesInput[]
    OR?: EmergencyContactScalarWhereWithAggregatesInput[]
    NOT?: EmergencyContactScalarWhereWithAggregatesInput | EmergencyContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmergencyContact"> | number
    employeeId?: IntWithAggregatesFilter<"EmergencyContact"> | number
    name?: StringWithAggregatesFilter<"EmergencyContact"> | string
    phone?: StringWithAggregatesFilter<"EmergencyContact"> | string
    address?: StringNullableWithAggregatesFilter<"EmergencyContact"> | string | null
  }

  export type EmployeeSessionWhereInput = {
    AND?: EmployeeSessionWhereInput | EmployeeSessionWhereInput[]
    OR?: EmployeeSessionWhereInput[]
    NOT?: EmployeeSessionWhereInput | EmployeeSessionWhereInput[]
    id?: IntFilter<"EmployeeSession"> | number
    sessionId?: StringFilter<"EmployeeSession"> | string
    employeeId?: IntFilter<"EmployeeSession"> | number
    refreshToken?: StringFilter<"EmployeeSession"> | string
    createdAt?: DateTimeFilter<"EmployeeSession"> | Date | string
    expiresAt?: DateTimeNullableFilter<"EmployeeSession"> | Date | string | null
    isHibernated?: BoolFilter<"EmployeeSession"> | boolean
    lastActive?: DateTimeFilter<"EmployeeSession"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type EmployeeSessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    employeeId?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isHibernated?: SortOrder
    lastActive?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type EmployeeSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sessionId?: string
    refreshToken?: string
    AND?: EmployeeSessionWhereInput | EmployeeSessionWhereInput[]
    OR?: EmployeeSessionWhereInput[]
    NOT?: EmployeeSessionWhereInput | EmployeeSessionWhereInput[]
    employeeId?: IntFilter<"EmployeeSession"> | number
    createdAt?: DateTimeFilter<"EmployeeSession"> | Date | string
    expiresAt?: DateTimeNullableFilter<"EmployeeSession"> | Date | string | null
    isHibernated?: BoolFilter<"EmployeeSession"> | boolean
    lastActive?: DateTimeFilter<"EmployeeSession"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id" | "sessionId" | "refreshToken">

  export type EmployeeSessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    employeeId?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isHibernated?: SortOrder
    lastActive?: SortOrder
    _count?: EmployeeSessionCountOrderByAggregateInput
    _avg?: EmployeeSessionAvgOrderByAggregateInput
    _max?: EmployeeSessionMaxOrderByAggregateInput
    _min?: EmployeeSessionMinOrderByAggregateInput
    _sum?: EmployeeSessionSumOrderByAggregateInput
  }

  export type EmployeeSessionScalarWhereWithAggregatesInput = {
    AND?: EmployeeSessionScalarWhereWithAggregatesInput | EmployeeSessionScalarWhereWithAggregatesInput[]
    OR?: EmployeeSessionScalarWhereWithAggregatesInput[]
    NOT?: EmployeeSessionScalarWhereWithAggregatesInput | EmployeeSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmployeeSession"> | number
    sessionId?: StringWithAggregatesFilter<"EmployeeSession"> | string
    employeeId?: IntWithAggregatesFilter<"EmployeeSession"> | number
    refreshToken?: StringWithAggregatesFilter<"EmployeeSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EmployeeSession"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"EmployeeSession"> | Date | string | null
    isHibernated?: BoolWithAggregatesFilter<"EmployeeSession"> | boolean
    lastActive?: DateTimeWithAggregatesFilter<"EmployeeSession"> | Date | string
  }

  export type FailedLoginAttemptWhereInput = {
    AND?: FailedLoginAttemptWhereInput | FailedLoginAttemptWhereInput[]
    OR?: FailedLoginAttemptWhereInput[]
    NOT?: FailedLoginAttemptWhereInput | FailedLoginAttemptWhereInput[]
    id?: IntFilter<"FailedLoginAttempt"> | number
    employeeId?: IntFilter<"FailedLoginAttempt"> | number
    timestamp?: DateTimeFilter<"FailedLoginAttempt"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type FailedLoginAttemptOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    timestamp?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type FailedLoginAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FailedLoginAttemptWhereInput | FailedLoginAttemptWhereInput[]
    OR?: FailedLoginAttemptWhereInput[]
    NOT?: FailedLoginAttemptWhereInput | FailedLoginAttemptWhereInput[]
    employeeId?: IntFilter<"FailedLoginAttempt"> | number
    timestamp?: DateTimeFilter<"FailedLoginAttempt"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type FailedLoginAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    timestamp?: SortOrder
    _count?: FailedLoginAttemptCountOrderByAggregateInput
    _avg?: FailedLoginAttemptAvgOrderByAggregateInput
    _max?: FailedLoginAttemptMaxOrderByAggregateInput
    _min?: FailedLoginAttemptMinOrderByAggregateInput
    _sum?: FailedLoginAttemptSumOrderByAggregateInput
  }

  export type FailedLoginAttemptScalarWhereWithAggregatesInput = {
    AND?: FailedLoginAttemptScalarWhereWithAggregatesInput | FailedLoginAttemptScalarWhereWithAggregatesInput[]
    OR?: FailedLoginAttemptScalarWhereWithAggregatesInput[]
    NOT?: FailedLoginAttemptScalarWhereWithAggregatesInput | FailedLoginAttemptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FailedLoginAttempt"> | number
    employeeId?: IntWithAggregatesFilter<"FailedLoginAttempt"> | number
    timestamp?: DateTimeWithAggregatesFilter<"FailedLoginAttempt"> | Date | string
  }

  export type LoginOTPWhereInput = {
    AND?: LoginOTPWhereInput | LoginOTPWhereInput[]
    OR?: LoginOTPWhereInput[]
    NOT?: LoginOTPWhereInput | LoginOTPWhereInput[]
    id?: IntFilter<"LoginOTP"> | number
    userId?: IntFilter<"LoginOTP"> | number
    otp?: StringFilter<"LoginOTP"> | string
    createdAt?: DateTimeFilter<"LoginOTP"> | Date | string
    expiresAt?: DateTimeFilter<"LoginOTP"> | Date | string
    user?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type LoginOTPOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    user?: EmployeeOrderByWithRelationInput
  }

  export type LoginOTPWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LoginOTPWhereInput | LoginOTPWhereInput[]
    OR?: LoginOTPWhereInput[]
    NOT?: LoginOTPWhereInput | LoginOTPWhereInput[]
    userId?: IntFilter<"LoginOTP"> | number
    otp?: StringFilter<"LoginOTP"> | string
    createdAt?: DateTimeFilter<"LoginOTP"> | Date | string
    expiresAt?: DateTimeFilter<"LoginOTP"> | Date | string
    user?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type LoginOTPOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: LoginOTPCountOrderByAggregateInput
    _avg?: LoginOTPAvgOrderByAggregateInput
    _max?: LoginOTPMaxOrderByAggregateInput
    _min?: LoginOTPMinOrderByAggregateInput
    _sum?: LoginOTPSumOrderByAggregateInput
  }

  export type LoginOTPScalarWhereWithAggregatesInput = {
    AND?: LoginOTPScalarWhereWithAggregatesInput | LoginOTPScalarWhereWithAggregatesInput[]
    OR?: LoginOTPScalarWhereWithAggregatesInput[]
    NOT?: LoginOTPScalarWhereWithAggregatesInput | LoginOTPScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LoginOTP"> | number
    userId?: IntWithAggregatesFilter<"LoginOTP"> | number
    otp?: StringWithAggregatesFilter<"LoginOTP"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LoginOTP"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"LoginOTP"> | Date | string
  }

  export type EmployeeCreateInput = {
    publicId: string
    username: string
    email?: string | null
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    passwordHash: string
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: string | null
    department?: string | null
    level?: number
    dateOfBirth?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EmployeeCreateNestedOneWithoutChildrenInput
    children?: EmployeeCreateNestedManyWithoutParentInput
    educations?: EducationCreateNestedManyWithoutEmployeeInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutEmployeeInput
    sessions?: EmployeeSessionCreateNestedManyWithoutEmployeeInput
    failedLogins?: FailedLoginAttemptCreateNestedManyWithoutEmployeeInput
    loginOtps?: LoginOTPCreateNestedManyWithoutUserInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    publicId: string
    username: string
    email?: string | null
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    passwordHash: string
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: string | null
    department?: string | null
    level?: number
    parentId?: number | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: EmployeeUncheckedCreateNestedManyWithoutParentInput
    educations?: EducationUncheckedCreateNestedManyWithoutEmployeeInput
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutEmployeeInput
    sessions?: EmployeeSessionUncheckedCreateNestedManyWithoutEmployeeInput
    failedLogins?: FailedLoginAttemptUncheckedCreateNestedManyWithoutEmployeeInput
    loginOtps?: LoginOTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type EmployeeUpdateInput = {
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EmployeeUpdateOneWithoutChildrenNestedInput
    children?: EmployeeUpdateManyWithoutParentNestedInput
    educations?: EducationUpdateManyWithoutEmployeeNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutEmployeeNestedInput
    sessions?: EmployeeSessionUpdateManyWithoutEmployeeNestedInput
    failedLogins?: FailedLoginAttemptUpdateManyWithoutEmployeeNestedInput
    loginOtps?: LoginOTPUpdateManyWithoutUserNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: EmployeeUncheckedUpdateManyWithoutParentNestedInput
    educations?: EducationUncheckedUpdateManyWithoutEmployeeNestedInput
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutEmployeeNestedInput
    sessions?: EmployeeSessionUncheckedUpdateManyWithoutEmployeeNestedInput
    failedLogins?: FailedLoginAttemptUncheckedUpdateManyWithoutEmployeeNestedInput
    loginOtps?: LoginOTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: number
    publicId: string
    username: string
    email?: string | null
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    passwordHash: string
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: string | null
    department?: string | null
    level?: number
    parentId?: number | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationCreateInput = {
    degree: string
    university: string
    graduationYear?: string | null
    employee: EmployeeCreateNestedOneWithoutEducationsInput
  }

  export type EducationUncheckedCreateInput = {
    id?: number
    employeeId: number
    degree: string
    university: string
    graduationYear?: string | null
  }

  export type EducationUpdateInput = {
    degree?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneRequiredWithoutEducationsNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    degree?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationCreateManyInput = {
    id?: number
    employeeId: number
    degree: string
    university: string
    graduationYear?: string | null
  }

  export type EducationUpdateManyMutationInput = {
    degree?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    degree?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmergencyContactCreateInput = {
    name: string
    phone: string
    address?: string | null
    employee: EmployeeCreateNestedOneWithoutEmergencyContactsInput
  }

  export type EmergencyContactUncheckedCreateInput = {
    id?: number
    employeeId: number
    name: string
    phone: string
    address?: string | null
  }

  export type EmergencyContactUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneRequiredWithoutEmergencyContactsNestedInput
  }

  export type EmergencyContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmergencyContactCreateManyInput = {
    id?: number
    employeeId: number
    name: string
    phone: string
    address?: string | null
  }

  export type EmergencyContactUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmergencyContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeSessionCreateInput = {
    sessionId: string
    refreshToken: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    isHibernated?: boolean
    lastActive?: Date | string
    employee: EmployeeCreateNestedOneWithoutSessionsInput
  }

  export type EmployeeSessionUncheckedCreateInput = {
    id?: number
    sessionId: string
    employeeId: number
    refreshToken: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    isHibernated?: boolean
    lastActive?: Date | string
  }

  export type EmployeeSessionUpdateInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isHibernated?: BoolFieldUpdateOperationsInput | boolean
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type EmployeeSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: StringFieldUpdateOperationsInput | string
    employeeId?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isHibernated?: BoolFieldUpdateOperationsInput | boolean
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeSessionCreateManyInput = {
    id?: number
    sessionId: string
    employeeId: number
    refreshToken: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    isHibernated?: boolean
    lastActive?: Date | string
  }

  export type EmployeeSessionUpdateManyMutationInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isHibernated?: BoolFieldUpdateOperationsInput | boolean
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: StringFieldUpdateOperationsInput | string
    employeeId?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isHibernated?: BoolFieldUpdateOperationsInput | boolean
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FailedLoginAttemptCreateInput = {
    timestamp?: Date | string
    employee: EmployeeCreateNestedOneWithoutFailedLoginsInput
  }

  export type FailedLoginAttemptUncheckedCreateInput = {
    id?: number
    employeeId: number
    timestamp?: Date | string
  }

  export type FailedLoginAttemptUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutFailedLoginsNestedInput
  }

  export type FailedLoginAttemptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FailedLoginAttemptCreateManyInput = {
    id?: number
    employeeId: number
    timestamp?: Date | string
  }

  export type FailedLoginAttemptUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FailedLoginAttemptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginOTPCreateInput = {
    otp: string
    createdAt?: Date | string
    expiresAt: Date | string
    user: EmployeeCreateNestedOneWithoutLoginOtpsInput
  }

  export type LoginOTPUncheckedCreateInput = {
    id?: number
    userId: number
    otp: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type LoginOTPUpdateInput = {
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: EmployeeUpdateOneRequiredWithoutLoginOtpsNestedInput
  }

  export type LoginOTPUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginOTPCreateManyInput = {
    id?: number
    userId: number
    otp: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type LoginOTPUpdateManyMutationInput = {
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginOTPUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type EmergencyContactListRelationFilter = {
    every?: EmergencyContactWhereInput
    some?: EmergencyContactWhereInput
    none?: EmergencyContactWhereInput
  }

  export type EmployeeSessionListRelationFilter = {
    every?: EmployeeSessionWhereInput
    some?: EmployeeSessionWhereInput
    none?: EmployeeSessionWhereInput
  }

  export type FailedLoginAttemptListRelationFilter = {
    every?: FailedLoginAttemptWhereInput
    some?: FailedLoginAttemptWhereInput
    none?: FailedLoginAttemptWhereInput
  }

  export type LoginOTPListRelationFilter = {
    every?: LoginOTPWhereInput
    some?: LoginOTPWhereInput
    none?: LoginOTPWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmergencyContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FailedLoginAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoginOTPOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    isStaff?: SortOrder
    isSuperuser?: SortOrder
    role?: SortOrder
    department?: SortOrder
    level?: SortOrder
    parentId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    parentId?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    isStaff?: SortOrder
    isSuperuser?: SortOrder
    role?: SortOrder
    department?: SortOrder
    level?: SortOrder
    parentId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    isStaff?: SortOrder
    isSuperuser?: SortOrder
    role?: SortOrder
    department?: SortOrder
    level?: SortOrder
    parentId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    parentId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    degree?: SortOrder
    university?: SortOrder
    graduationYear?: SortOrder
  }

  export type EducationAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    degree?: SortOrder
    university?: SortOrder
    graduationYear?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    degree?: SortOrder
    university?: SortOrder
    graduationYear?: SortOrder
  }

  export type EducationSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type EmergencyContactCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
  }

  export type EmergencyContactAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type EmergencyContactMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
  }

  export type EmergencyContactMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
  }

  export type EmergencyContactSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type EmployeeSessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    employeeId?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isHibernated?: SortOrder
    lastActive?: SortOrder
  }

  export type EmployeeSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type EmployeeSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    employeeId?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isHibernated?: SortOrder
    lastActive?: SortOrder
  }

  export type EmployeeSessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    employeeId?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isHibernated?: SortOrder
    lastActive?: SortOrder
  }

  export type EmployeeSessionSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type FailedLoginAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    timestamp?: SortOrder
  }

  export type FailedLoginAttemptAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type FailedLoginAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    timestamp?: SortOrder
  }

  export type FailedLoginAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    timestamp?: SortOrder
  }

  export type FailedLoginAttemptSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type LoginOTPCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type LoginOTPAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LoginOTPMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type LoginOTPMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type LoginOTPSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EmployeeCreateNestedOneWithoutChildrenInput = {
    create?: XOR<EmployeeCreateWithoutChildrenInput, EmployeeUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutChildrenInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeCreateNestedManyWithoutParentInput = {
    create?: XOR<EmployeeCreateWithoutParentInput, EmployeeUncheckedCreateWithoutParentInput> | EmployeeCreateWithoutParentInput[] | EmployeeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutParentInput | EmployeeCreateOrConnectWithoutParentInput[]
    createMany?: EmployeeCreateManyParentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EducationCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EducationCreateWithoutEmployeeInput, EducationUncheckedCreateWithoutEmployeeInput> | EducationCreateWithoutEmployeeInput[] | EducationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutEmployeeInput | EducationCreateOrConnectWithoutEmployeeInput[]
    createMany?: EducationCreateManyEmployeeInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type EmergencyContactCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmergencyContactCreateWithoutEmployeeInput, EmergencyContactUncheckedCreateWithoutEmployeeInput> | EmergencyContactCreateWithoutEmployeeInput[] | EmergencyContactUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmergencyContactCreateOrConnectWithoutEmployeeInput | EmergencyContactCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmergencyContactCreateManyEmployeeInputEnvelope
    connect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
  }

  export type EmployeeSessionCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeSessionCreateWithoutEmployeeInput, EmployeeSessionUncheckedCreateWithoutEmployeeInput> | EmployeeSessionCreateWithoutEmployeeInput[] | EmployeeSessionUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeSessionCreateOrConnectWithoutEmployeeInput | EmployeeSessionCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeSessionCreateManyEmployeeInputEnvelope
    connect?: EmployeeSessionWhereUniqueInput | EmployeeSessionWhereUniqueInput[]
  }

  export type FailedLoginAttemptCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<FailedLoginAttemptCreateWithoutEmployeeInput, FailedLoginAttemptUncheckedCreateWithoutEmployeeInput> | FailedLoginAttemptCreateWithoutEmployeeInput[] | FailedLoginAttemptUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: FailedLoginAttemptCreateOrConnectWithoutEmployeeInput | FailedLoginAttemptCreateOrConnectWithoutEmployeeInput[]
    createMany?: FailedLoginAttemptCreateManyEmployeeInputEnvelope
    connect?: FailedLoginAttemptWhereUniqueInput | FailedLoginAttemptWhereUniqueInput[]
  }

  export type LoginOTPCreateNestedManyWithoutUserInput = {
    create?: XOR<LoginOTPCreateWithoutUserInput, LoginOTPUncheckedCreateWithoutUserInput> | LoginOTPCreateWithoutUserInput[] | LoginOTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginOTPCreateOrConnectWithoutUserInput | LoginOTPCreateOrConnectWithoutUserInput[]
    createMany?: LoginOTPCreateManyUserInputEnvelope
    connect?: LoginOTPWhereUniqueInput | LoginOTPWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<EmployeeCreateWithoutParentInput, EmployeeUncheckedCreateWithoutParentInput> | EmployeeCreateWithoutParentInput[] | EmployeeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutParentInput | EmployeeCreateOrConnectWithoutParentInput[]
    createMany?: EmployeeCreateManyParentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EducationUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EducationCreateWithoutEmployeeInput, EducationUncheckedCreateWithoutEmployeeInput> | EducationCreateWithoutEmployeeInput[] | EducationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutEmployeeInput | EducationCreateOrConnectWithoutEmployeeInput[]
    createMany?: EducationCreateManyEmployeeInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type EmergencyContactUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmergencyContactCreateWithoutEmployeeInput, EmergencyContactUncheckedCreateWithoutEmployeeInput> | EmergencyContactCreateWithoutEmployeeInput[] | EmergencyContactUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmergencyContactCreateOrConnectWithoutEmployeeInput | EmergencyContactCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmergencyContactCreateManyEmployeeInputEnvelope
    connect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
  }

  export type EmployeeSessionUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeSessionCreateWithoutEmployeeInput, EmployeeSessionUncheckedCreateWithoutEmployeeInput> | EmployeeSessionCreateWithoutEmployeeInput[] | EmployeeSessionUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeSessionCreateOrConnectWithoutEmployeeInput | EmployeeSessionCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeSessionCreateManyEmployeeInputEnvelope
    connect?: EmployeeSessionWhereUniqueInput | EmployeeSessionWhereUniqueInput[]
  }

  export type FailedLoginAttemptUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<FailedLoginAttemptCreateWithoutEmployeeInput, FailedLoginAttemptUncheckedCreateWithoutEmployeeInput> | FailedLoginAttemptCreateWithoutEmployeeInput[] | FailedLoginAttemptUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: FailedLoginAttemptCreateOrConnectWithoutEmployeeInput | FailedLoginAttemptCreateOrConnectWithoutEmployeeInput[]
    createMany?: FailedLoginAttemptCreateManyEmployeeInputEnvelope
    connect?: FailedLoginAttemptWhereUniqueInput | FailedLoginAttemptWhereUniqueInput[]
  }

  export type LoginOTPUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LoginOTPCreateWithoutUserInput, LoginOTPUncheckedCreateWithoutUserInput> | LoginOTPCreateWithoutUserInput[] | LoginOTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginOTPCreateOrConnectWithoutUserInput | LoginOTPCreateOrConnectWithoutUserInput[]
    createMany?: LoginOTPCreateManyUserInputEnvelope
    connect?: LoginOTPWhereUniqueInput | LoginOTPWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmployeeUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<EmployeeCreateWithoutChildrenInput, EmployeeUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutChildrenInput
    upsert?: EmployeeUpsertWithoutChildrenInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutChildrenInput, EmployeeUpdateWithoutChildrenInput>, EmployeeUncheckedUpdateWithoutChildrenInput>
  }

  export type EmployeeUpdateManyWithoutParentNestedInput = {
    create?: XOR<EmployeeCreateWithoutParentInput, EmployeeUncheckedCreateWithoutParentInput> | EmployeeCreateWithoutParentInput[] | EmployeeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutParentInput | EmployeeCreateOrConnectWithoutParentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutParentInput | EmployeeUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: EmployeeCreateManyParentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutParentInput | EmployeeUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutParentInput | EmployeeUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EducationUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EducationCreateWithoutEmployeeInput, EducationUncheckedCreateWithoutEmployeeInput> | EducationCreateWithoutEmployeeInput[] | EducationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutEmployeeInput | EducationCreateOrConnectWithoutEmployeeInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutEmployeeInput | EducationUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EducationCreateManyEmployeeInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutEmployeeInput | EducationUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutEmployeeInput | EducationUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type EmergencyContactUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmergencyContactCreateWithoutEmployeeInput, EmergencyContactUncheckedCreateWithoutEmployeeInput> | EmergencyContactCreateWithoutEmployeeInput[] | EmergencyContactUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmergencyContactCreateOrConnectWithoutEmployeeInput | EmergencyContactCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmergencyContactUpsertWithWhereUniqueWithoutEmployeeInput | EmergencyContactUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmergencyContactCreateManyEmployeeInputEnvelope
    set?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    disconnect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    delete?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    connect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    update?: EmergencyContactUpdateWithWhereUniqueWithoutEmployeeInput | EmergencyContactUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmergencyContactUpdateManyWithWhereWithoutEmployeeInput | EmergencyContactUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmergencyContactScalarWhereInput | EmergencyContactScalarWhereInput[]
  }

  export type EmployeeSessionUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeSessionCreateWithoutEmployeeInput, EmployeeSessionUncheckedCreateWithoutEmployeeInput> | EmployeeSessionCreateWithoutEmployeeInput[] | EmployeeSessionUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeSessionCreateOrConnectWithoutEmployeeInput | EmployeeSessionCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeSessionUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeSessionUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeSessionCreateManyEmployeeInputEnvelope
    set?: EmployeeSessionWhereUniqueInput | EmployeeSessionWhereUniqueInput[]
    disconnect?: EmployeeSessionWhereUniqueInput | EmployeeSessionWhereUniqueInput[]
    delete?: EmployeeSessionWhereUniqueInput | EmployeeSessionWhereUniqueInput[]
    connect?: EmployeeSessionWhereUniqueInput | EmployeeSessionWhereUniqueInput[]
    update?: EmployeeSessionUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeSessionUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeSessionUpdateManyWithWhereWithoutEmployeeInput | EmployeeSessionUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeSessionScalarWhereInput | EmployeeSessionScalarWhereInput[]
  }

  export type FailedLoginAttemptUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<FailedLoginAttemptCreateWithoutEmployeeInput, FailedLoginAttemptUncheckedCreateWithoutEmployeeInput> | FailedLoginAttemptCreateWithoutEmployeeInput[] | FailedLoginAttemptUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: FailedLoginAttemptCreateOrConnectWithoutEmployeeInput | FailedLoginAttemptCreateOrConnectWithoutEmployeeInput[]
    upsert?: FailedLoginAttemptUpsertWithWhereUniqueWithoutEmployeeInput | FailedLoginAttemptUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: FailedLoginAttemptCreateManyEmployeeInputEnvelope
    set?: FailedLoginAttemptWhereUniqueInput | FailedLoginAttemptWhereUniqueInput[]
    disconnect?: FailedLoginAttemptWhereUniqueInput | FailedLoginAttemptWhereUniqueInput[]
    delete?: FailedLoginAttemptWhereUniqueInput | FailedLoginAttemptWhereUniqueInput[]
    connect?: FailedLoginAttemptWhereUniqueInput | FailedLoginAttemptWhereUniqueInput[]
    update?: FailedLoginAttemptUpdateWithWhereUniqueWithoutEmployeeInput | FailedLoginAttemptUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: FailedLoginAttemptUpdateManyWithWhereWithoutEmployeeInput | FailedLoginAttemptUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: FailedLoginAttemptScalarWhereInput | FailedLoginAttemptScalarWhereInput[]
  }

  export type LoginOTPUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoginOTPCreateWithoutUserInput, LoginOTPUncheckedCreateWithoutUserInput> | LoginOTPCreateWithoutUserInput[] | LoginOTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginOTPCreateOrConnectWithoutUserInput | LoginOTPCreateOrConnectWithoutUserInput[]
    upsert?: LoginOTPUpsertWithWhereUniqueWithoutUserInput | LoginOTPUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoginOTPCreateManyUserInputEnvelope
    set?: LoginOTPWhereUniqueInput | LoginOTPWhereUniqueInput[]
    disconnect?: LoginOTPWhereUniqueInput | LoginOTPWhereUniqueInput[]
    delete?: LoginOTPWhereUniqueInput | LoginOTPWhereUniqueInput[]
    connect?: LoginOTPWhereUniqueInput | LoginOTPWhereUniqueInput[]
    update?: LoginOTPUpdateWithWhereUniqueWithoutUserInput | LoginOTPUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoginOTPUpdateManyWithWhereWithoutUserInput | LoginOTPUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoginOTPScalarWhereInput | LoginOTPScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeeUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<EmployeeCreateWithoutParentInput, EmployeeUncheckedCreateWithoutParentInput> | EmployeeCreateWithoutParentInput[] | EmployeeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutParentInput | EmployeeCreateOrConnectWithoutParentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutParentInput | EmployeeUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: EmployeeCreateManyParentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutParentInput | EmployeeUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutParentInput | EmployeeUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EducationUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EducationCreateWithoutEmployeeInput, EducationUncheckedCreateWithoutEmployeeInput> | EducationCreateWithoutEmployeeInput[] | EducationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutEmployeeInput | EducationCreateOrConnectWithoutEmployeeInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutEmployeeInput | EducationUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EducationCreateManyEmployeeInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutEmployeeInput | EducationUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutEmployeeInput | EducationUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type EmergencyContactUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmergencyContactCreateWithoutEmployeeInput, EmergencyContactUncheckedCreateWithoutEmployeeInput> | EmergencyContactCreateWithoutEmployeeInput[] | EmergencyContactUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmergencyContactCreateOrConnectWithoutEmployeeInput | EmergencyContactCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmergencyContactUpsertWithWhereUniqueWithoutEmployeeInput | EmergencyContactUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmergencyContactCreateManyEmployeeInputEnvelope
    set?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    disconnect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    delete?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    connect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    update?: EmergencyContactUpdateWithWhereUniqueWithoutEmployeeInput | EmergencyContactUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmergencyContactUpdateManyWithWhereWithoutEmployeeInput | EmergencyContactUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmergencyContactScalarWhereInput | EmergencyContactScalarWhereInput[]
  }

  export type EmployeeSessionUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeSessionCreateWithoutEmployeeInput, EmployeeSessionUncheckedCreateWithoutEmployeeInput> | EmployeeSessionCreateWithoutEmployeeInput[] | EmployeeSessionUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeSessionCreateOrConnectWithoutEmployeeInput | EmployeeSessionCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeSessionUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeSessionUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeSessionCreateManyEmployeeInputEnvelope
    set?: EmployeeSessionWhereUniqueInput | EmployeeSessionWhereUniqueInput[]
    disconnect?: EmployeeSessionWhereUniqueInput | EmployeeSessionWhereUniqueInput[]
    delete?: EmployeeSessionWhereUniqueInput | EmployeeSessionWhereUniqueInput[]
    connect?: EmployeeSessionWhereUniqueInput | EmployeeSessionWhereUniqueInput[]
    update?: EmployeeSessionUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeSessionUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeSessionUpdateManyWithWhereWithoutEmployeeInput | EmployeeSessionUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeSessionScalarWhereInput | EmployeeSessionScalarWhereInput[]
  }

  export type FailedLoginAttemptUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<FailedLoginAttemptCreateWithoutEmployeeInput, FailedLoginAttemptUncheckedCreateWithoutEmployeeInput> | FailedLoginAttemptCreateWithoutEmployeeInput[] | FailedLoginAttemptUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: FailedLoginAttemptCreateOrConnectWithoutEmployeeInput | FailedLoginAttemptCreateOrConnectWithoutEmployeeInput[]
    upsert?: FailedLoginAttemptUpsertWithWhereUniqueWithoutEmployeeInput | FailedLoginAttemptUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: FailedLoginAttemptCreateManyEmployeeInputEnvelope
    set?: FailedLoginAttemptWhereUniqueInput | FailedLoginAttemptWhereUniqueInput[]
    disconnect?: FailedLoginAttemptWhereUniqueInput | FailedLoginAttemptWhereUniqueInput[]
    delete?: FailedLoginAttemptWhereUniqueInput | FailedLoginAttemptWhereUniqueInput[]
    connect?: FailedLoginAttemptWhereUniqueInput | FailedLoginAttemptWhereUniqueInput[]
    update?: FailedLoginAttemptUpdateWithWhereUniqueWithoutEmployeeInput | FailedLoginAttemptUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: FailedLoginAttemptUpdateManyWithWhereWithoutEmployeeInput | FailedLoginAttemptUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: FailedLoginAttemptScalarWhereInput | FailedLoginAttemptScalarWhereInput[]
  }

  export type LoginOTPUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoginOTPCreateWithoutUserInput, LoginOTPUncheckedCreateWithoutUserInput> | LoginOTPCreateWithoutUserInput[] | LoginOTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginOTPCreateOrConnectWithoutUserInput | LoginOTPCreateOrConnectWithoutUserInput[]
    upsert?: LoginOTPUpsertWithWhereUniqueWithoutUserInput | LoginOTPUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoginOTPCreateManyUserInputEnvelope
    set?: LoginOTPWhereUniqueInput | LoginOTPWhereUniqueInput[]
    disconnect?: LoginOTPWhereUniqueInput | LoginOTPWhereUniqueInput[]
    delete?: LoginOTPWhereUniqueInput | LoginOTPWhereUniqueInput[]
    connect?: LoginOTPWhereUniqueInput | LoginOTPWhereUniqueInput[]
    update?: LoginOTPUpdateWithWhereUniqueWithoutUserInput | LoginOTPUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoginOTPUpdateManyWithWhereWithoutUserInput | LoginOTPUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoginOTPScalarWhereInput | LoginOTPScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutEducationsInput = {
    create?: XOR<EmployeeCreateWithoutEducationsInput, EmployeeUncheckedCreateWithoutEducationsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutEducationsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutEducationsNestedInput = {
    create?: XOR<EmployeeCreateWithoutEducationsInput, EmployeeUncheckedCreateWithoutEducationsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutEducationsInput
    upsert?: EmployeeUpsertWithoutEducationsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutEducationsInput, EmployeeUpdateWithoutEducationsInput>, EmployeeUncheckedUpdateWithoutEducationsInput>
  }

  export type EmployeeCreateNestedOneWithoutEmergencyContactsInput = {
    create?: XOR<EmployeeCreateWithoutEmergencyContactsInput, EmployeeUncheckedCreateWithoutEmergencyContactsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmergencyContactsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutEmergencyContactsNestedInput = {
    create?: XOR<EmployeeCreateWithoutEmergencyContactsInput, EmployeeUncheckedCreateWithoutEmergencyContactsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmergencyContactsInput
    upsert?: EmployeeUpsertWithoutEmergencyContactsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutEmergencyContactsInput, EmployeeUpdateWithoutEmergencyContactsInput>, EmployeeUncheckedUpdateWithoutEmergencyContactsInput>
  }

  export type EmployeeCreateNestedOneWithoutSessionsInput = {
    create?: XOR<EmployeeCreateWithoutSessionsInput, EmployeeUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSessionsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<EmployeeCreateWithoutSessionsInput, EmployeeUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSessionsInput
    upsert?: EmployeeUpsertWithoutSessionsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutSessionsInput, EmployeeUpdateWithoutSessionsInput>, EmployeeUncheckedUpdateWithoutSessionsInput>
  }

  export type EmployeeCreateNestedOneWithoutFailedLoginsInput = {
    create?: XOR<EmployeeCreateWithoutFailedLoginsInput, EmployeeUncheckedCreateWithoutFailedLoginsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutFailedLoginsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutFailedLoginsNestedInput = {
    create?: XOR<EmployeeCreateWithoutFailedLoginsInput, EmployeeUncheckedCreateWithoutFailedLoginsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutFailedLoginsInput
    upsert?: EmployeeUpsertWithoutFailedLoginsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutFailedLoginsInput, EmployeeUpdateWithoutFailedLoginsInput>, EmployeeUncheckedUpdateWithoutFailedLoginsInput>
  }

  export type EmployeeCreateNestedOneWithoutLoginOtpsInput = {
    create?: XOR<EmployeeCreateWithoutLoginOtpsInput, EmployeeUncheckedCreateWithoutLoginOtpsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutLoginOtpsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutLoginOtpsNestedInput = {
    create?: XOR<EmployeeCreateWithoutLoginOtpsInput, EmployeeUncheckedCreateWithoutLoginOtpsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutLoginOtpsInput
    upsert?: EmployeeUpsertWithoutLoginOtpsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutLoginOtpsInput, EmployeeUpdateWithoutLoginOtpsInput>, EmployeeUncheckedUpdateWithoutLoginOtpsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EmployeeCreateWithoutChildrenInput = {
    publicId: string
    username: string
    email?: string | null
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    passwordHash: string
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: string | null
    department?: string | null
    level?: number
    dateOfBirth?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EmployeeCreateNestedOneWithoutChildrenInput
    educations?: EducationCreateNestedManyWithoutEmployeeInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutEmployeeInput
    sessions?: EmployeeSessionCreateNestedManyWithoutEmployeeInput
    failedLogins?: FailedLoginAttemptCreateNestedManyWithoutEmployeeInput
    loginOtps?: LoginOTPCreateNestedManyWithoutUserInput
  }

  export type EmployeeUncheckedCreateWithoutChildrenInput = {
    id?: number
    publicId: string
    username: string
    email?: string | null
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    passwordHash: string
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: string | null
    department?: string | null
    level?: number
    parentId?: number | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    educations?: EducationUncheckedCreateNestedManyWithoutEmployeeInput
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutEmployeeInput
    sessions?: EmployeeSessionUncheckedCreateNestedManyWithoutEmployeeInput
    failedLogins?: FailedLoginAttemptUncheckedCreateNestedManyWithoutEmployeeInput
    loginOtps?: LoginOTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type EmployeeCreateOrConnectWithoutChildrenInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutChildrenInput, EmployeeUncheckedCreateWithoutChildrenInput>
  }

  export type EmployeeCreateWithoutParentInput = {
    publicId: string
    username: string
    email?: string | null
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    passwordHash: string
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: string | null
    department?: string | null
    level?: number
    dateOfBirth?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: EmployeeCreateNestedManyWithoutParentInput
    educations?: EducationCreateNestedManyWithoutEmployeeInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutEmployeeInput
    sessions?: EmployeeSessionCreateNestedManyWithoutEmployeeInput
    failedLogins?: FailedLoginAttemptCreateNestedManyWithoutEmployeeInput
    loginOtps?: LoginOTPCreateNestedManyWithoutUserInput
  }

  export type EmployeeUncheckedCreateWithoutParentInput = {
    id?: number
    publicId: string
    username: string
    email?: string | null
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    passwordHash: string
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: string | null
    department?: string | null
    level?: number
    dateOfBirth?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: EmployeeUncheckedCreateNestedManyWithoutParentInput
    educations?: EducationUncheckedCreateNestedManyWithoutEmployeeInput
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutEmployeeInput
    sessions?: EmployeeSessionUncheckedCreateNestedManyWithoutEmployeeInput
    failedLogins?: FailedLoginAttemptUncheckedCreateNestedManyWithoutEmployeeInput
    loginOtps?: LoginOTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type EmployeeCreateOrConnectWithoutParentInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutParentInput, EmployeeUncheckedCreateWithoutParentInput>
  }

  export type EmployeeCreateManyParentInputEnvelope = {
    data: EmployeeCreateManyParentInput | EmployeeCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type EducationCreateWithoutEmployeeInput = {
    degree: string
    university: string
    graduationYear?: string | null
  }

  export type EducationUncheckedCreateWithoutEmployeeInput = {
    id?: number
    degree: string
    university: string
    graduationYear?: string | null
  }

  export type EducationCreateOrConnectWithoutEmployeeInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutEmployeeInput, EducationUncheckedCreateWithoutEmployeeInput>
  }

  export type EducationCreateManyEmployeeInputEnvelope = {
    data: EducationCreateManyEmployeeInput | EducationCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type EmergencyContactCreateWithoutEmployeeInput = {
    name: string
    phone: string
    address?: string | null
  }

  export type EmergencyContactUncheckedCreateWithoutEmployeeInput = {
    id?: number
    name: string
    phone: string
    address?: string | null
  }

  export type EmergencyContactCreateOrConnectWithoutEmployeeInput = {
    where: EmergencyContactWhereUniqueInput
    create: XOR<EmergencyContactCreateWithoutEmployeeInput, EmergencyContactUncheckedCreateWithoutEmployeeInput>
  }

  export type EmergencyContactCreateManyEmployeeInputEnvelope = {
    data: EmergencyContactCreateManyEmployeeInput | EmergencyContactCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeSessionCreateWithoutEmployeeInput = {
    sessionId: string
    refreshToken: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    isHibernated?: boolean
    lastActive?: Date | string
  }

  export type EmployeeSessionUncheckedCreateWithoutEmployeeInput = {
    id?: number
    sessionId: string
    refreshToken: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    isHibernated?: boolean
    lastActive?: Date | string
  }

  export type EmployeeSessionCreateOrConnectWithoutEmployeeInput = {
    where: EmployeeSessionWhereUniqueInput
    create: XOR<EmployeeSessionCreateWithoutEmployeeInput, EmployeeSessionUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeSessionCreateManyEmployeeInputEnvelope = {
    data: EmployeeSessionCreateManyEmployeeInput | EmployeeSessionCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type FailedLoginAttemptCreateWithoutEmployeeInput = {
    timestamp?: Date | string
  }

  export type FailedLoginAttemptUncheckedCreateWithoutEmployeeInput = {
    id?: number
    timestamp?: Date | string
  }

  export type FailedLoginAttemptCreateOrConnectWithoutEmployeeInput = {
    where: FailedLoginAttemptWhereUniqueInput
    create: XOR<FailedLoginAttemptCreateWithoutEmployeeInput, FailedLoginAttemptUncheckedCreateWithoutEmployeeInput>
  }

  export type FailedLoginAttemptCreateManyEmployeeInputEnvelope = {
    data: FailedLoginAttemptCreateManyEmployeeInput | FailedLoginAttemptCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type LoginOTPCreateWithoutUserInput = {
    otp: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type LoginOTPUncheckedCreateWithoutUserInput = {
    id?: number
    otp: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type LoginOTPCreateOrConnectWithoutUserInput = {
    where: LoginOTPWhereUniqueInput
    create: XOR<LoginOTPCreateWithoutUserInput, LoginOTPUncheckedCreateWithoutUserInput>
  }

  export type LoginOTPCreateManyUserInputEnvelope = {
    data: LoginOTPCreateManyUserInput | LoginOTPCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutChildrenInput = {
    update: XOR<EmployeeUpdateWithoutChildrenInput, EmployeeUncheckedUpdateWithoutChildrenInput>
    create: XOR<EmployeeCreateWithoutChildrenInput, EmployeeUncheckedCreateWithoutChildrenInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutChildrenInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutChildrenInput, EmployeeUncheckedUpdateWithoutChildrenInput>
  }

  export type EmployeeUpdateWithoutChildrenInput = {
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EmployeeUpdateOneWithoutChildrenNestedInput
    educations?: EducationUpdateManyWithoutEmployeeNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutEmployeeNestedInput
    sessions?: EmployeeSessionUpdateManyWithoutEmployeeNestedInput
    failedLogins?: FailedLoginAttemptUpdateManyWithoutEmployeeNestedInput
    loginOtps?: LoginOTPUpdateManyWithoutUserNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educations?: EducationUncheckedUpdateManyWithoutEmployeeNestedInput
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutEmployeeNestedInput
    sessions?: EmployeeSessionUncheckedUpdateManyWithoutEmployeeNestedInput
    failedLogins?: FailedLoginAttemptUncheckedUpdateManyWithoutEmployeeNestedInput
    loginOtps?: LoginOTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EmployeeUpsertWithWhereUniqueWithoutParentInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutParentInput, EmployeeUncheckedUpdateWithoutParentInput>
    create: XOR<EmployeeCreateWithoutParentInput, EmployeeUncheckedCreateWithoutParentInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutParentInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutParentInput, EmployeeUncheckedUpdateWithoutParentInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutParentInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutParentInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: IntFilter<"Employee"> | number
    publicId?: StringFilter<"Employee"> | string
    username?: StringFilter<"Employee"> | string
    email?: StringNullableFilter<"Employee"> | string | null
    phone?: StringNullableFilter<"Employee"> | string | null
    firstName?: StringNullableFilter<"Employee"> | string | null
    lastName?: StringNullableFilter<"Employee"> | string | null
    passwordHash?: StringFilter<"Employee"> | string
    isActive?: BoolFilter<"Employee"> | boolean
    isStaff?: BoolFilter<"Employee"> | boolean
    isSuperuser?: BoolFilter<"Employee"> | boolean
    role?: StringNullableFilter<"Employee"> | string | null
    department?: StringNullableFilter<"Employee"> | string | null
    level?: IntFilter<"Employee"> | number
    parentId?: IntNullableFilter<"Employee"> | number | null
    dateOfBirth?: DateTimeNullableFilter<"Employee"> | Date | string | null
    gender?: StringNullableFilter<"Employee"> | string | null
    address?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
  }

  export type EducationUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutEmployeeInput, EducationUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EducationCreateWithoutEmployeeInput, EducationUncheckedCreateWithoutEmployeeInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutEmployeeInput, EducationUncheckedUpdateWithoutEmployeeInput>
  }

  export type EducationUpdateManyWithWhereWithoutEmployeeInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EducationScalarWhereInput = {
    AND?: EducationScalarWhereInput | EducationScalarWhereInput[]
    OR?: EducationScalarWhereInput[]
    NOT?: EducationScalarWhereInput | EducationScalarWhereInput[]
    id?: IntFilter<"Education"> | number
    employeeId?: IntFilter<"Education"> | number
    degree?: StringFilter<"Education"> | string
    university?: StringFilter<"Education"> | string
    graduationYear?: StringNullableFilter<"Education"> | string | null
  }

  export type EmergencyContactUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EmergencyContactWhereUniqueInput
    update: XOR<EmergencyContactUpdateWithoutEmployeeInput, EmergencyContactUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EmergencyContactCreateWithoutEmployeeInput, EmergencyContactUncheckedCreateWithoutEmployeeInput>
  }

  export type EmergencyContactUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EmergencyContactWhereUniqueInput
    data: XOR<EmergencyContactUpdateWithoutEmployeeInput, EmergencyContactUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmergencyContactUpdateManyWithWhereWithoutEmployeeInput = {
    where: EmergencyContactScalarWhereInput
    data: XOR<EmergencyContactUpdateManyMutationInput, EmergencyContactUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EmergencyContactScalarWhereInput = {
    AND?: EmergencyContactScalarWhereInput | EmergencyContactScalarWhereInput[]
    OR?: EmergencyContactScalarWhereInput[]
    NOT?: EmergencyContactScalarWhereInput | EmergencyContactScalarWhereInput[]
    id?: IntFilter<"EmergencyContact"> | number
    employeeId?: IntFilter<"EmergencyContact"> | number
    name?: StringFilter<"EmergencyContact"> | string
    phone?: StringFilter<"EmergencyContact"> | string
    address?: StringNullableFilter<"EmergencyContact"> | string | null
  }

  export type EmployeeSessionUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeSessionWhereUniqueInput
    update: XOR<EmployeeSessionUpdateWithoutEmployeeInput, EmployeeSessionUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EmployeeSessionCreateWithoutEmployeeInput, EmployeeSessionUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeSessionUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeSessionWhereUniqueInput
    data: XOR<EmployeeSessionUpdateWithoutEmployeeInput, EmployeeSessionUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeeSessionUpdateManyWithWhereWithoutEmployeeInput = {
    where: EmployeeSessionScalarWhereInput
    data: XOR<EmployeeSessionUpdateManyMutationInput, EmployeeSessionUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EmployeeSessionScalarWhereInput = {
    AND?: EmployeeSessionScalarWhereInput | EmployeeSessionScalarWhereInput[]
    OR?: EmployeeSessionScalarWhereInput[]
    NOT?: EmployeeSessionScalarWhereInput | EmployeeSessionScalarWhereInput[]
    id?: IntFilter<"EmployeeSession"> | number
    sessionId?: StringFilter<"EmployeeSession"> | string
    employeeId?: IntFilter<"EmployeeSession"> | number
    refreshToken?: StringFilter<"EmployeeSession"> | string
    createdAt?: DateTimeFilter<"EmployeeSession"> | Date | string
    expiresAt?: DateTimeNullableFilter<"EmployeeSession"> | Date | string | null
    isHibernated?: BoolFilter<"EmployeeSession"> | boolean
    lastActive?: DateTimeFilter<"EmployeeSession"> | Date | string
  }

  export type FailedLoginAttemptUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: FailedLoginAttemptWhereUniqueInput
    update: XOR<FailedLoginAttemptUpdateWithoutEmployeeInput, FailedLoginAttemptUncheckedUpdateWithoutEmployeeInput>
    create: XOR<FailedLoginAttemptCreateWithoutEmployeeInput, FailedLoginAttemptUncheckedCreateWithoutEmployeeInput>
  }

  export type FailedLoginAttemptUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: FailedLoginAttemptWhereUniqueInput
    data: XOR<FailedLoginAttemptUpdateWithoutEmployeeInput, FailedLoginAttemptUncheckedUpdateWithoutEmployeeInput>
  }

  export type FailedLoginAttemptUpdateManyWithWhereWithoutEmployeeInput = {
    where: FailedLoginAttemptScalarWhereInput
    data: XOR<FailedLoginAttemptUpdateManyMutationInput, FailedLoginAttemptUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type FailedLoginAttemptScalarWhereInput = {
    AND?: FailedLoginAttemptScalarWhereInput | FailedLoginAttemptScalarWhereInput[]
    OR?: FailedLoginAttemptScalarWhereInput[]
    NOT?: FailedLoginAttemptScalarWhereInput | FailedLoginAttemptScalarWhereInput[]
    id?: IntFilter<"FailedLoginAttempt"> | number
    employeeId?: IntFilter<"FailedLoginAttempt"> | number
    timestamp?: DateTimeFilter<"FailedLoginAttempt"> | Date | string
  }

  export type LoginOTPUpsertWithWhereUniqueWithoutUserInput = {
    where: LoginOTPWhereUniqueInput
    update: XOR<LoginOTPUpdateWithoutUserInput, LoginOTPUncheckedUpdateWithoutUserInput>
    create: XOR<LoginOTPCreateWithoutUserInput, LoginOTPUncheckedCreateWithoutUserInput>
  }

  export type LoginOTPUpdateWithWhereUniqueWithoutUserInput = {
    where: LoginOTPWhereUniqueInput
    data: XOR<LoginOTPUpdateWithoutUserInput, LoginOTPUncheckedUpdateWithoutUserInput>
  }

  export type LoginOTPUpdateManyWithWhereWithoutUserInput = {
    where: LoginOTPScalarWhereInput
    data: XOR<LoginOTPUpdateManyMutationInput, LoginOTPUncheckedUpdateManyWithoutUserInput>
  }

  export type LoginOTPScalarWhereInput = {
    AND?: LoginOTPScalarWhereInput | LoginOTPScalarWhereInput[]
    OR?: LoginOTPScalarWhereInput[]
    NOT?: LoginOTPScalarWhereInput | LoginOTPScalarWhereInput[]
    id?: IntFilter<"LoginOTP"> | number
    userId?: IntFilter<"LoginOTP"> | number
    otp?: StringFilter<"LoginOTP"> | string
    createdAt?: DateTimeFilter<"LoginOTP"> | Date | string
    expiresAt?: DateTimeFilter<"LoginOTP"> | Date | string
  }

  export type EmployeeCreateWithoutEducationsInput = {
    publicId: string
    username: string
    email?: string | null
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    passwordHash: string
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: string | null
    department?: string | null
    level?: number
    dateOfBirth?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EmployeeCreateNestedOneWithoutChildrenInput
    children?: EmployeeCreateNestedManyWithoutParentInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutEmployeeInput
    sessions?: EmployeeSessionCreateNestedManyWithoutEmployeeInput
    failedLogins?: FailedLoginAttemptCreateNestedManyWithoutEmployeeInput
    loginOtps?: LoginOTPCreateNestedManyWithoutUserInput
  }

  export type EmployeeUncheckedCreateWithoutEducationsInput = {
    id?: number
    publicId: string
    username: string
    email?: string | null
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    passwordHash: string
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: string | null
    department?: string | null
    level?: number
    parentId?: number | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: EmployeeUncheckedCreateNestedManyWithoutParentInput
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutEmployeeInput
    sessions?: EmployeeSessionUncheckedCreateNestedManyWithoutEmployeeInput
    failedLogins?: FailedLoginAttemptUncheckedCreateNestedManyWithoutEmployeeInput
    loginOtps?: LoginOTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type EmployeeCreateOrConnectWithoutEducationsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutEducationsInput, EmployeeUncheckedCreateWithoutEducationsInput>
  }

  export type EmployeeUpsertWithoutEducationsInput = {
    update: XOR<EmployeeUpdateWithoutEducationsInput, EmployeeUncheckedUpdateWithoutEducationsInput>
    create: XOR<EmployeeCreateWithoutEducationsInput, EmployeeUncheckedCreateWithoutEducationsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutEducationsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutEducationsInput, EmployeeUncheckedUpdateWithoutEducationsInput>
  }

  export type EmployeeUpdateWithoutEducationsInput = {
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EmployeeUpdateOneWithoutChildrenNestedInput
    children?: EmployeeUpdateManyWithoutParentNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutEmployeeNestedInput
    sessions?: EmployeeSessionUpdateManyWithoutEmployeeNestedInput
    failedLogins?: FailedLoginAttemptUpdateManyWithoutEmployeeNestedInput
    loginOtps?: LoginOTPUpdateManyWithoutUserNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutEducationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: EmployeeUncheckedUpdateManyWithoutParentNestedInput
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutEmployeeNestedInput
    sessions?: EmployeeSessionUncheckedUpdateManyWithoutEmployeeNestedInput
    failedLogins?: FailedLoginAttemptUncheckedUpdateManyWithoutEmployeeNestedInput
    loginOtps?: LoginOTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EmployeeCreateWithoutEmergencyContactsInput = {
    publicId: string
    username: string
    email?: string | null
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    passwordHash: string
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: string | null
    department?: string | null
    level?: number
    dateOfBirth?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EmployeeCreateNestedOneWithoutChildrenInput
    children?: EmployeeCreateNestedManyWithoutParentInput
    educations?: EducationCreateNestedManyWithoutEmployeeInput
    sessions?: EmployeeSessionCreateNestedManyWithoutEmployeeInput
    failedLogins?: FailedLoginAttemptCreateNestedManyWithoutEmployeeInput
    loginOtps?: LoginOTPCreateNestedManyWithoutUserInput
  }

  export type EmployeeUncheckedCreateWithoutEmergencyContactsInput = {
    id?: number
    publicId: string
    username: string
    email?: string | null
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    passwordHash: string
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: string | null
    department?: string | null
    level?: number
    parentId?: number | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: EmployeeUncheckedCreateNestedManyWithoutParentInput
    educations?: EducationUncheckedCreateNestedManyWithoutEmployeeInput
    sessions?: EmployeeSessionUncheckedCreateNestedManyWithoutEmployeeInput
    failedLogins?: FailedLoginAttemptUncheckedCreateNestedManyWithoutEmployeeInput
    loginOtps?: LoginOTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type EmployeeCreateOrConnectWithoutEmergencyContactsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutEmergencyContactsInput, EmployeeUncheckedCreateWithoutEmergencyContactsInput>
  }

  export type EmployeeUpsertWithoutEmergencyContactsInput = {
    update: XOR<EmployeeUpdateWithoutEmergencyContactsInput, EmployeeUncheckedUpdateWithoutEmergencyContactsInput>
    create: XOR<EmployeeCreateWithoutEmergencyContactsInput, EmployeeUncheckedCreateWithoutEmergencyContactsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutEmergencyContactsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutEmergencyContactsInput, EmployeeUncheckedUpdateWithoutEmergencyContactsInput>
  }

  export type EmployeeUpdateWithoutEmergencyContactsInput = {
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EmployeeUpdateOneWithoutChildrenNestedInput
    children?: EmployeeUpdateManyWithoutParentNestedInput
    educations?: EducationUpdateManyWithoutEmployeeNestedInput
    sessions?: EmployeeSessionUpdateManyWithoutEmployeeNestedInput
    failedLogins?: FailedLoginAttemptUpdateManyWithoutEmployeeNestedInput
    loginOtps?: LoginOTPUpdateManyWithoutUserNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutEmergencyContactsInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: EmployeeUncheckedUpdateManyWithoutParentNestedInput
    educations?: EducationUncheckedUpdateManyWithoutEmployeeNestedInput
    sessions?: EmployeeSessionUncheckedUpdateManyWithoutEmployeeNestedInput
    failedLogins?: FailedLoginAttemptUncheckedUpdateManyWithoutEmployeeNestedInput
    loginOtps?: LoginOTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EmployeeCreateWithoutSessionsInput = {
    publicId: string
    username: string
    email?: string | null
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    passwordHash: string
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: string | null
    department?: string | null
    level?: number
    dateOfBirth?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EmployeeCreateNestedOneWithoutChildrenInput
    children?: EmployeeCreateNestedManyWithoutParentInput
    educations?: EducationCreateNestedManyWithoutEmployeeInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutEmployeeInput
    failedLogins?: FailedLoginAttemptCreateNestedManyWithoutEmployeeInput
    loginOtps?: LoginOTPCreateNestedManyWithoutUserInput
  }

  export type EmployeeUncheckedCreateWithoutSessionsInput = {
    id?: number
    publicId: string
    username: string
    email?: string | null
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    passwordHash: string
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: string | null
    department?: string | null
    level?: number
    parentId?: number | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: EmployeeUncheckedCreateNestedManyWithoutParentInput
    educations?: EducationUncheckedCreateNestedManyWithoutEmployeeInput
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutEmployeeInput
    failedLogins?: FailedLoginAttemptUncheckedCreateNestedManyWithoutEmployeeInput
    loginOtps?: LoginOTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type EmployeeCreateOrConnectWithoutSessionsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutSessionsInput, EmployeeUncheckedCreateWithoutSessionsInput>
  }

  export type EmployeeUpsertWithoutSessionsInput = {
    update: XOR<EmployeeUpdateWithoutSessionsInput, EmployeeUncheckedUpdateWithoutSessionsInput>
    create: XOR<EmployeeCreateWithoutSessionsInput, EmployeeUncheckedCreateWithoutSessionsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutSessionsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutSessionsInput, EmployeeUncheckedUpdateWithoutSessionsInput>
  }

  export type EmployeeUpdateWithoutSessionsInput = {
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EmployeeUpdateOneWithoutChildrenNestedInput
    children?: EmployeeUpdateManyWithoutParentNestedInput
    educations?: EducationUpdateManyWithoutEmployeeNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutEmployeeNestedInput
    failedLogins?: FailedLoginAttemptUpdateManyWithoutEmployeeNestedInput
    loginOtps?: LoginOTPUpdateManyWithoutUserNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: EmployeeUncheckedUpdateManyWithoutParentNestedInput
    educations?: EducationUncheckedUpdateManyWithoutEmployeeNestedInput
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutEmployeeNestedInput
    failedLogins?: FailedLoginAttemptUncheckedUpdateManyWithoutEmployeeNestedInput
    loginOtps?: LoginOTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EmployeeCreateWithoutFailedLoginsInput = {
    publicId: string
    username: string
    email?: string | null
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    passwordHash: string
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: string | null
    department?: string | null
    level?: number
    dateOfBirth?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EmployeeCreateNestedOneWithoutChildrenInput
    children?: EmployeeCreateNestedManyWithoutParentInput
    educations?: EducationCreateNestedManyWithoutEmployeeInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutEmployeeInput
    sessions?: EmployeeSessionCreateNestedManyWithoutEmployeeInput
    loginOtps?: LoginOTPCreateNestedManyWithoutUserInput
  }

  export type EmployeeUncheckedCreateWithoutFailedLoginsInput = {
    id?: number
    publicId: string
    username: string
    email?: string | null
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    passwordHash: string
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: string | null
    department?: string | null
    level?: number
    parentId?: number | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: EmployeeUncheckedCreateNestedManyWithoutParentInput
    educations?: EducationUncheckedCreateNestedManyWithoutEmployeeInput
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutEmployeeInput
    sessions?: EmployeeSessionUncheckedCreateNestedManyWithoutEmployeeInput
    loginOtps?: LoginOTPUncheckedCreateNestedManyWithoutUserInput
  }

  export type EmployeeCreateOrConnectWithoutFailedLoginsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutFailedLoginsInput, EmployeeUncheckedCreateWithoutFailedLoginsInput>
  }

  export type EmployeeUpsertWithoutFailedLoginsInput = {
    update: XOR<EmployeeUpdateWithoutFailedLoginsInput, EmployeeUncheckedUpdateWithoutFailedLoginsInput>
    create: XOR<EmployeeCreateWithoutFailedLoginsInput, EmployeeUncheckedCreateWithoutFailedLoginsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutFailedLoginsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutFailedLoginsInput, EmployeeUncheckedUpdateWithoutFailedLoginsInput>
  }

  export type EmployeeUpdateWithoutFailedLoginsInput = {
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EmployeeUpdateOneWithoutChildrenNestedInput
    children?: EmployeeUpdateManyWithoutParentNestedInput
    educations?: EducationUpdateManyWithoutEmployeeNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutEmployeeNestedInput
    sessions?: EmployeeSessionUpdateManyWithoutEmployeeNestedInput
    loginOtps?: LoginOTPUpdateManyWithoutUserNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutFailedLoginsInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: EmployeeUncheckedUpdateManyWithoutParentNestedInput
    educations?: EducationUncheckedUpdateManyWithoutEmployeeNestedInput
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutEmployeeNestedInput
    sessions?: EmployeeSessionUncheckedUpdateManyWithoutEmployeeNestedInput
    loginOtps?: LoginOTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EmployeeCreateWithoutLoginOtpsInput = {
    publicId: string
    username: string
    email?: string | null
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    passwordHash: string
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: string | null
    department?: string | null
    level?: number
    dateOfBirth?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EmployeeCreateNestedOneWithoutChildrenInput
    children?: EmployeeCreateNestedManyWithoutParentInput
    educations?: EducationCreateNestedManyWithoutEmployeeInput
    emergencyContacts?: EmergencyContactCreateNestedManyWithoutEmployeeInput
    sessions?: EmployeeSessionCreateNestedManyWithoutEmployeeInput
    failedLogins?: FailedLoginAttemptCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutLoginOtpsInput = {
    id?: number
    publicId: string
    username: string
    email?: string | null
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    passwordHash: string
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: string | null
    department?: string | null
    level?: number
    parentId?: number | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: EmployeeUncheckedCreateNestedManyWithoutParentInput
    educations?: EducationUncheckedCreateNestedManyWithoutEmployeeInput
    emergencyContacts?: EmergencyContactUncheckedCreateNestedManyWithoutEmployeeInput
    sessions?: EmployeeSessionUncheckedCreateNestedManyWithoutEmployeeInput
    failedLogins?: FailedLoginAttemptUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutLoginOtpsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutLoginOtpsInput, EmployeeUncheckedCreateWithoutLoginOtpsInput>
  }

  export type EmployeeUpsertWithoutLoginOtpsInput = {
    update: XOR<EmployeeUpdateWithoutLoginOtpsInput, EmployeeUncheckedUpdateWithoutLoginOtpsInput>
    create: XOR<EmployeeCreateWithoutLoginOtpsInput, EmployeeUncheckedCreateWithoutLoginOtpsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutLoginOtpsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutLoginOtpsInput, EmployeeUncheckedUpdateWithoutLoginOtpsInput>
  }

  export type EmployeeUpdateWithoutLoginOtpsInput = {
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EmployeeUpdateOneWithoutChildrenNestedInput
    children?: EmployeeUpdateManyWithoutParentNestedInput
    educations?: EducationUpdateManyWithoutEmployeeNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutEmployeeNestedInput
    sessions?: EmployeeSessionUpdateManyWithoutEmployeeNestedInput
    failedLogins?: FailedLoginAttemptUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutLoginOtpsInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: EmployeeUncheckedUpdateManyWithoutParentNestedInput
    educations?: EducationUncheckedUpdateManyWithoutEmployeeNestedInput
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutEmployeeNestedInput
    sessions?: EmployeeSessionUncheckedUpdateManyWithoutEmployeeNestedInput
    failedLogins?: FailedLoginAttemptUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyParentInput = {
    id?: number
    publicId: string
    username: string
    email?: string | null
    phone?: string | null
    firstName?: string | null
    lastName?: string | null
    passwordHash: string
    isActive?: boolean
    isStaff?: boolean
    isSuperuser?: boolean
    role?: string | null
    department?: string | null
    level?: number
    dateOfBirth?: Date | string | null
    gender?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationCreateManyEmployeeInput = {
    id?: number
    degree: string
    university: string
    graduationYear?: string | null
  }

  export type EmergencyContactCreateManyEmployeeInput = {
    id?: number
    name: string
    phone: string
    address?: string | null
  }

  export type EmployeeSessionCreateManyEmployeeInput = {
    id?: number
    sessionId: string
    refreshToken: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    isHibernated?: boolean
    lastActive?: Date | string
  }

  export type FailedLoginAttemptCreateManyEmployeeInput = {
    id?: number
    timestamp?: Date | string
  }

  export type LoginOTPCreateManyUserInput = {
    id?: number
    otp: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type EmployeeUpdateWithoutParentInput = {
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: EmployeeUpdateManyWithoutParentNestedInput
    educations?: EducationUpdateManyWithoutEmployeeNestedInput
    emergencyContacts?: EmergencyContactUpdateManyWithoutEmployeeNestedInput
    sessions?: EmployeeSessionUpdateManyWithoutEmployeeNestedInput
    failedLogins?: FailedLoginAttemptUpdateManyWithoutEmployeeNestedInput
    loginOtps?: LoginOTPUpdateManyWithoutUserNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: EmployeeUncheckedUpdateManyWithoutParentNestedInput
    educations?: EducationUncheckedUpdateManyWithoutEmployeeNestedInput
    emergencyContacts?: EmergencyContactUncheckedUpdateManyWithoutEmployeeNestedInput
    sessions?: EmployeeSessionUncheckedUpdateManyWithoutEmployeeNestedInput
    failedLogins?: FailedLoginAttemptUncheckedUpdateManyWithoutEmployeeNestedInput
    loginOtps?: LoginOTPUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    isSuperuser?: BoolFieldUpdateOperationsInput | boolean
    role?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUpdateWithoutEmployeeInput = {
    degree?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    degree?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    degree?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmergencyContactUpdateWithoutEmployeeInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmergencyContactUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmergencyContactUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeSessionUpdateWithoutEmployeeInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isHibernated?: BoolFieldUpdateOperationsInput | boolean
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeSessionUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isHibernated?: BoolFieldUpdateOperationsInput | boolean
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeSessionUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isHibernated?: BoolFieldUpdateOperationsInput | boolean
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FailedLoginAttemptUpdateWithoutEmployeeInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FailedLoginAttemptUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FailedLoginAttemptUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginOTPUpdateWithoutUserInput = {
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginOTPUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginOTPUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
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