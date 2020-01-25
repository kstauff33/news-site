// package: life.kylestauffer.snews
// file: base.proto

import * as base_pb from "./base_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PostServiceGetPosts = {
  readonly methodName: string;
  readonly service: typeof PostService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof base_pb.GetPostsRequest;
  readonly responseType: typeof base_pb.GetPostsResponse;
};

type PostServiceGetPost = {
  readonly methodName: string;
  readonly service: typeof PostService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof base_pb.GetPostRequest;
  readonly responseType: typeof base_pb.GetPostResponse;
};

type PostServiceGetTopPosts = {
  readonly methodName: string;
  readonly service: typeof PostService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof base_pb.GetTopPostsRequest;
  readonly responseType: typeof base_pb.GetTopPostsResponse;
};

type PostServiceGetRecentPosts = {
  readonly methodName: string;
  readonly service: typeof PostService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof base_pb.GetRecentPostsRequest;
  readonly responseType: typeof base_pb.GetRecentPostsResponse;
};

export class PostService {
  static readonly serviceName: string;
  static readonly GetPosts: PostServiceGetPosts;
  static readonly GetPost: PostServiceGetPost;
  static readonly GetTopPosts: PostServiceGetTopPosts;
  static readonly GetRecentPosts: PostServiceGetRecentPosts;
}

type AuthorServiceGetAuthors = {
  readonly methodName: string;
  readonly service: typeof AuthorService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof base_pb.GetAuthorsRequest;
  readonly responseType: typeof base_pb.GetAuthorsResponse;
};

type AuthorServiceGetAuthor = {
  readonly methodName: string;
  readonly service: typeof AuthorService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof base_pb.GetAuthorRequest;
  readonly responseType: typeof base_pb.GetAuthorResponse;
};

export class AuthorService {
  static readonly serviceName: string;
  static readonly GetAuthors: AuthorServiceGetAuthors;
  static readonly GetAuthor: AuthorServiceGetAuthor;
}

type SubscriptionServiceSubscribe = {
  readonly methodName: string;
  readonly service: typeof SubscriptionService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof base_pb.SubscriptionRequest;
  readonly responseType: typeof base_pb.SubscriptionResponse;
};

type SubscriptionServiceGetSubscription = {
  readonly methodName: string;
  readonly service: typeof SubscriptionService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof base_pb.GetSubscriptionRequest;
  readonly responseType: typeof base_pb.SubscriptionResponse;
};

export class SubscriptionService {
  static readonly serviceName: string;
  static readonly Subscribe: SubscriptionServiceSubscribe;
  static readonly GetSubscription: SubscriptionServiceGetSubscription;
}

type LoginServiceLogin = {
  readonly methodName: string;
  readonly service: typeof LoginService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof base_pb.LoginRequest;
  readonly responseType: typeof base_pb.LoginResponse;
};

type LoginServiceRegister = {
  readonly methodName: string;
  readonly service: typeof LoginService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof base_pb.RegistrationRequest;
  readonly responseType: typeof base_pb.LoginResponse;
};

type LoginServiceValidateToken = {
  readonly methodName: string;
  readonly service: typeof LoginService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof base_pb.TokenValidationRequest;
  readonly responseType: typeof base_pb.TokenValidationResponse;
};

export class LoginService {
  static readonly serviceName: string;
  static readonly Login: LoginServiceLogin;
  static readonly Register: LoginServiceRegister;
  static readonly ValidateToken: LoginServiceValidateToken;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class PostServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getPosts(requestMessage: base_pb.GetPostsRequest, metadata?: grpc.Metadata): ResponseStream<base_pb.GetPostsResponse>;
  getPost(requestMessage: base_pb.GetPostRequest, metadata?: grpc.Metadata): ResponseStream<base_pb.GetPostResponse>;
  getTopPosts(requestMessage: base_pb.GetTopPostsRequest, metadata?: grpc.Metadata): ResponseStream<base_pb.GetTopPostsResponse>;
  getRecentPosts(requestMessage: base_pb.GetRecentPostsRequest, metadata?: grpc.Metadata): ResponseStream<base_pb.GetRecentPostsResponse>;
}

export class AuthorServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAuthors(requestMessage: base_pb.GetAuthorsRequest, metadata?: grpc.Metadata): ResponseStream<base_pb.GetAuthorsResponse>;
  getAuthor(requestMessage: base_pb.GetAuthorRequest, metadata?: grpc.Metadata): ResponseStream<base_pb.GetAuthorResponse>;
}

export class SubscriptionServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  subscribe(requestMessage: base_pb.SubscriptionRequest, metadata?: grpc.Metadata): ResponseStream<base_pb.SubscriptionResponse>;
  getSubscription(requestMessage: base_pb.GetSubscriptionRequest, metadata?: grpc.Metadata): ResponseStream<base_pb.SubscriptionResponse>;
}

export class LoginServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  login(requestMessage: base_pb.LoginRequest, metadata?: grpc.Metadata): ResponseStream<base_pb.LoginResponse>;
  register(requestMessage: base_pb.RegistrationRequest, metadata?: grpc.Metadata): ResponseStream<base_pb.LoginResponse>;
  validateToken(requestMessage: base_pb.TokenValidationRequest, metadata?: grpc.Metadata): ResponseStream<base_pb.TokenValidationResponse>;
}

