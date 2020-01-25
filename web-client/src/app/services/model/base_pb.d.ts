// package: life.kylestauffer.snews
// file: base.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SimplePost extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getText(): string;
  setText(value: string): void;

  getTagline(): string;
  setTagline(value: string): void;

  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): Author | undefined;
  setAuthor(value?: Author): void;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): Image | undefined;
  setImage(value?: Image): void;

  clearTagsList(): void;
  getTagsList(): Array<Tag>;
  setTagsList(value: Array<Tag>): void;
  addTags(value?: Tag, index?: number): Tag;

  getAudiourl(): string;
  setAudiourl(value: string): void;

  clearContexturlsList(): void;
  getContexturlsList(): Array<string>;
  setContexturlsList(value: Array<string>): void;
  addContexturls(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimplePost.AsObject;
  static toObject(includeInstance: boolean, msg: SimplePost): SimplePost.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimplePost, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimplePost;
  static deserializeBinaryFromReader(message: SimplePost, reader: jspb.BinaryReader): SimplePost;
}

export namespace SimplePost {
  export type AsObject = {
    id: string,
    title: string,
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    text: string,
    tagline: string,
    author?: Author.AsObject,
    image?: Image.AsObject,
    tagsList: Array<Tag.AsObject>,
    audiourl: string,
    contexturlsList: Array<string>,
  }
}

export class Tag extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTag(): string;
  setTag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tag.AsObject;
  static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tag;
  static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
  export type AsObject = {
    id: string,
    tag: string,
  }
}

export class Image extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSmallurl(): string;
  setSmallurl(value: string): void;

  getMediumurl(): string;
  setMediumurl(value: string): void;

  getLargeurl(): string;
  setLargeurl(value: string): void;

  getAlttext(): string;
  setAlttext(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    id: string,
    smallurl: string,
    mediumurl: string,
    largeurl: string,
    alttext: string,
  }
}

export class Author extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): Image | undefined;
  setImage(value?: Image): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Author.AsObject;
  static toObject(includeInstance: boolean, msg: Author): Author.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Author, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Author;
  static deserializeBinaryFromReader(message: Author, reader: jspb.BinaryReader): Author;
}

export namespace Author {
  export type AsObject = {
    id: string,
    name: string,
    image?: Image.AsObject,
  }
}

export class Subscription extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getNews(): boolean;
  setNews(value: boolean): void;

  getOpinion(): boolean;
  setOpinion(value: boolean): void;

  getPodcasts(): boolean;
  setPodcasts(value: boolean): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subscription.AsObject;
  static toObject(includeInstance: boolean, msg: Subscription): Subscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Subscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subscription;
  static deserializeBinaryFromReader(message: Subscription, reader: jspb.BinaryReader): Subscription;
}

export namespace Subscription {
  export type AsObject = {
    id: string,
    news: boolean,
    opinion: boolean,
    podcasts: boolean,
    email: string,
  }
}

export class GetPostsRequest extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getPage(): number;
  setPage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostsRequest): GetPostsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostsRequest;
  static deserializeBinaryFromReader(message: GetPostsRequest, reader: jspb.BinaryReader): GetPostsRequest;
}

export namespace GetPostsRequest {
  export type AsObject = {
    type: string,
    page: number,
  }
}

export class GetPostsResponse extends jspb.Message {
  clearPostList(): void;
  getPostList(): Array<SimplePost>;
  setPostList(value: Array<SimplePost>): void;
  addPost(value?: SimplePost, index?: number): SimplePost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostsResponse): GetPostsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostsResponse;
  static deserializeBinaryFromReader(message: GetPostsResponse, reader: jspb.BinaryReader): GetPostsResponse;
}

export namespace GetPostsResponse {
  export type AsObject = {
    postList: Array<SimplePost.AsObject>,
  }
}

export class GetPostRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostRequest): GetPostRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostRequest;
  static deserializeBinaryFromReader(message: GetPostRequest, reader: jspb.BinaryReader): GetPostRequest;
}

export namespace GetPostRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetPostResponse extends jspb.Message {
  hasPost(): boolean;
  clearPost(): void;
  getPost(): SimplePost | undefined;
  setPost(value?: SimplePost): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostResponse): GetPostResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostResponse;
  static deserializeBinaryFromReader(message: GetPostResponse, reader: jspb.BinaryReader): GetPostResponse;
}

export namespace GetPostResponse {
  export type AsObject = {
    post?: SimplePost.AsObject,
  }
}

export class GetTopPostsRequest extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTopPostsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTopPostsRequest): GetTopPostsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTopPostsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTopPostsRequest;
  static deserializeBinaryFromReader(message: GetTopPostsRequest, reader: jspb.BinaryReader): GetTopPostsRequest;
}

export namespace GetTopPostsRequest {
  export type AsObject = {
    type: string,
  }
}

export class GetTopPostsResponse extends jspb.Message {
  clearPostList(): void;
  getPostList(): Array<SimplePost>;
  setPostList(value: Array<SimplePost>): void;
  addPost(value?: SimplePost, index?: number): SimplePost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTopPostsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTopPostsResponse): GetTopPostsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTopPostsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTopPostsResponse;
  static deserializeBinaryFromReader(message: GetTopPostsResponse, reader: jspb.BinaryReader): GetTopPostsResponse;
}

export namespace GetTopPostsResponse {
  export type AsObject = {
    postList: Array<SimplePost.AsObject>,
  }
}

export class GetRecentPostsRequest extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecentPostsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecentPostsRequest): GetRecentPostsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRecentPostsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecentPostsRequest;
  static deserializeBinaryFromReader(message: GetRecentPostsRequest, reader: jspb.BinaryReader): GetRecentPostsRequest;
}

export namespace GetRecentPostsRequest {
  export type AsObject = {
    type: string,
  }
}

export class GetRecentPostsResponse extends jspb.Message {
  clearPostList(): void;
  getPostList(): Array<SimplePost>;
  setPostList(value: Array<SimplePost>): void;
  addPost(value?: SimplePost, index?: number): SimplePost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecentPostsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecentPostsResponse): GetRecentPostsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRecentPostsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecentPostsResponse;
  static deserializeBinaryFromReader(message: GetRecentPostsResponse, reader: jspb.BinaryReader): GetRecentPostsResponse;
}

export namespace GetRecentPostsResponse {
  export type AsObject = {
    postList: Array<SimplePost.AsObject>,
  }
}

export class GetAuthorsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthorsRequest): GetAuthorsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthorsRequest;
  static deserializeBinaryFromReader(message: GetAuthorsRequest, reader: jspb.BinaryReader): GetAuthorsRequest;
}

export namespace GetAuthorsRequest {
  export type AsObject = {
    page: number,
  }
}

export class GetAuthorsResponse extends jspb.Message {
  clearAuthorsList(): void;
  getAuthorsList(): Array<Author>;
  setAuthorsList(value: Array<Author>): void;
  addAuthors(value?: Author, index?: number): Author;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthorsResponse): GetAuthorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthorsResponse;
  static deserializeBinaryFromReader(message: GetAuthorsResponse, reader: jspb.BinaryReader): GetAuthorsResponse;
}

export namespace GetAuthorsResponse {
  export type AsObject = {
    authorsList: Array<Author.AsObject>,
  }
}

export class GetAuthorRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthorRequest): GetAuthorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthorRequest;
  static deserializeBinaryFromReader(message: GetAuthorRequest, reader: jspb.BinaryReader): GetAuthorRequest;
}

export namespace GetAuthorRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetAuthorResponse extends jspb.Message {
  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): Author | undefined;
  setAuthor(value?: Author): void;

  clearPostsList(): void;
  getPostsList(): Array<SimplePost>;
  setPostsList(value: Array<SimplePost>): void;
  addPosts(value?: SimplePost, index?: number): SimplePost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAuthorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAuthorResponse): GetAuthorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAuthorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAuthorResponse;
  static deserializeBinaryFromReader(message: GetAuthorResponse, reader: jspb.BinaryReader): GetAuthorResponse;
}

export namespace GetAuthorResponse {
  export type AsObject = {
    author?: Author.AsObject,
    postsList: Array<SimplePost.AsObject>,
  }
}

export class SubscriptionRequest extends jspb.Message {
  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): Subscription | undefined;
  setSubscription(value?: Subscription): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionRequest): SubscriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionRequest;
  static deserializeBinaryFromReader(message: SubscriptionRequest, reader: jspb.BinaryReader): SubscriptionRequest;
}

export namespace SubscriptionRequest {
  export type AsObject = {
    subscription?: Subscription.AsObject,
  }
}

export class GetSubscriptionRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubscriptionRequest): GetSubscriptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubscriptionRequest;
  static deserializeBinaryFromReader(message: GetSubscriptionRequest, reader: jspb.BinaryReader): GetSubscriptionRequest;
}

export namespace GetSubscriptionRequest {
  export type AsObject = {
    id: string,
  }
}

export class SubscriptionResponse extends jspb.Message {
  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): Subscription | undefined;
  setSubscription(value?: Subscription): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionResponse): SubscriptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionResponse;
  static deserializeBinaryFromReader(message: SubscriptionResponse, reader: jspb.BinaryReader): SubscriptionResponse;
}

export namespace SubscriptionResponse {
  export type AsObject = {
    subscription?: Subscription.AsObject,
  }
}

export class LoginRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiration(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRole(): UserRoleMap[keyof UserRoleMap];
  setRole(value: UserRoleMap[keyof UserRoleMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    token: string,
    expiration?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    role: UserRoleMap[keyof UserRoleMap],
  }
}

export class RegistrationRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegistrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegistrationRequest): RegistrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegistrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegistrationRequest;
  static deserializeBinaryFromReader(message: RegistrationRequest, reader: jspb.BinaryReader): RegistrationRequest;
}

export namespace RegistrationRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class TokenValidationRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenValidationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenValidationRequest): TokenValidationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenValidationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenValidationRequest;
  static deserializeBinaryFromReader(message: TokenValidationRequest, reader: jspb.BinaryReader): TokenValidationRequest;
}

export namespace TokenValidationRequest {
  export type AsObject = {
    token: string,
  }
}

export class TokenValidationResponse extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): void;

  getRole(): UserRoleMap[keyof UserRoleMap];
  setRole(value: UserRoleMap[keyof UserRoleMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenValidationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenValidationResponse): TokenValidationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenValidationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenValidationResponse;
  static deserializeBinaryFromReader(message: TokenValidationResponse, reader: jspb.BinaryReader): TokenValidationResponse;
}

export namespace TokenValidationResponse {
  export type AsObject = {
    valid: boolean,
    role: UserRoleMap[keyof UserRoleMap],
  }
}

export interface PostTypeMap {
  HOME: 0;
  NEWS: 1;
  OPINION: 2;
  FEATURES: 3;
  LISTEN: 4;
  WATCH: 5;
  AUTHORS: 6;
  ANALYTICS: 7;
}

export const PostType: PostTypeMap;

export interface UserRoleMap {
  ANONYMOUS: 0;
  READER: 1;
  AUTHOR: 2;
  EDITOR: 3;
  ADMIN: 4;
  SUPERADMIN: 5;
}

export const UserRole: UserRoleMap;

