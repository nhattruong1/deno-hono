
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.8.0
 * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
 */
Prisma.prismaVersion = {
  client: "4.8.0",
  engine: "d6e67a83f971b175a593ccc12e15c4a757f93ffe"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.CommentScalarFieldEnum = makeEnum({
  id: 'id',
  content: 'content',
  threadId: 'threadId',
  userId: 'userId',
  parentId: 'parentId',
  isActive: 'isActive',
  isDelete: 'isDelete',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.MonitoringScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  type: 'type',
  detail: 'detail',
  isActive: 'isActive',
  isDelete: 'isDelete',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.ReactionScalarFieldEnum = makeEnum({
  id: 'id',
  react: 'react',
  threadId: 'threadId',
  commentId: 'commentId',
  userId: 'userId',
  isActive: 'isActive',
  isDelete: 'isDelete',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.RelationshipScalarFieldEnum = makeEnum({
  id: 'id',
  content: 'content',
  userId: 'userId',
  friendId: 'friendId',
  relationType: 'relationType',
  isActive: 'isActive',
  isDelete: 'isDelete',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SessionScalarFieldEnum = makeEnum({
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
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.ThreadAttachmentsScalarFieldEnum = makeEnum({
  id: 'id',
  link: 'link',
  type: 'type',
  threadId: 'threadId',
  isActive: 'isActive',
  isDelete: 'isDelete',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ThreadScalarFieldEnum = makeEnum({
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
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
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
});

exports.Prisma.UserThreadsScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  threadId: 'threadId',
  isActive: 'isActive',
  isDelete: 'isDelete',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});
exports.AttachmentType = makeEnum({
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  DOCUMENT: 'DOCUMENT',
  OTHER_FILE: 'OTHER_FILE'
});

exports.DestinationThread = makeEnum({
  GROUP: 'GROUP',
  PERSONAL: 'PERSONAL',
  FRIEND: 'FRIEND'
});

exports.Gender = makeEnum({
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  CUSTOM: 'CUSTOM'
});

exports.LogType = makeEnum({
  LOGIN: 'LOGIN',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
  LOGOUT: 'LOGOUT'
});

exports.ReactType = makeEnum({
  LIKE: 'LIKE',
  HAHA: 'HAHA',
  LOVE: 'LOVE',
  SAD: 'SAD',
  ANGRY: 'ANGRY',
  WOW: 'WOW'
});

exports.RelationType = makeEnum({
  FOLLOW: 'FOLLOW',
  FRIEND: 'FRIEND',
  BLOCK: 'BLOCK'
});

exports.ThreadPrivacy = makeEnum({
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  relationship: 'relationship',
  userThreads: 'userThreads',
  Thread: 'Thread',
  threadAttachments: 'threadAttachments',
  reaction: 'reaction',
  Comment: 'Comment',
  Session: 'Session',
  Monitoring: 'Monitoring'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
