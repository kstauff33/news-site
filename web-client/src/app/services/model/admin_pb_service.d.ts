// package: life.kylestauffer.snews
// file: admin.proto

import * as admin_pb from "./admin_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TagServiceGetTags = {
  readonly methodName: string;
  readonly service: typeof TagService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof admin_pb.GetTagsRequest;
  readonly responseType: typeof admin_pb.GetTagsResponse;
};

export class TagService {
  static readonly serviceName: string;
  static readonly GetTags: TagServiceGetTags;
}

type AdminPostServiceSavePost = {
  readonly methodName: string;
  readonly service: typeof AdminPostService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof admin_pb.SavePostRequest;
  readonly responseType: typeof admin_pb.SavePostResponse;
};

type AdminPostServicePublishPost = {
  readonly methodName: string;
  readonly service: typeof AdminPostService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof admin_pb.SavePostRequest;
  readonly responseType: typeof admin_pb.SavePostResponse;
};

type AdminPostServiceGetDraftPosts = {
  readonly methodName: string;
  readonly service: typeof AdminPostService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof admin_pb.GetDraftPostsRequest;
  readonly responseType: typeof admin_pb.GetDraftPostsResponse;
};

type AdminPostServiceGetPostStats = {
  readonly methodName: string;
  readonly service: typeof AdminPostService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof admin_pb.GetPostStatsRequest;
  readonly responseType: typeof admin_pb.GetPostStatsResponse;
};

export class AdminPostService {
  static readonly serviceName: string;
  static readonly SavePost: AdminPostServiceSavePost;
  static readonly PublishPost: AdminPostServicePublishPost;
  static readonly GetDraftPosts: AdminPostServiceGetDraftPosts;
  static readonly GetPostStats: AdminPostServiceGetPostStats;
}

type ImageServiceUploadImage = {
  readonly methodName: string;
  readonly service: typeof ImageService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof admin_pb.UploadImageRequest;
  readonly responseType: typeof admin_pb.UploadImageResponse;
};

export class ImageService {
  static readonly serviceName: string;
  static readonly UploadImage: ImageServiceUploadImage;
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

export class TagServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getTags(requestMessage: admin_pb.GetTagsRequest, metadata?: grpc.Metadata): ResponseStream<admin_pb.GetTagsResponse>;
}

export class AdminPostServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  savePost(requestMessage: admin_pb.SavePostRequest, metadata?: grpc.Metadata): ResponseStream<admin_pb.SavePostResponse>;
  publishPost(requestMessage: admin_pb.SavePostRequest, metadata?: grpc.Metadata): ResponseStream<admin_pb.SavePostResponse>;
  getDraftPosts(requestMessage: admin_pb.GetDraftPostsRequest, metadata?: grpc.Metadata): ResponseStream<admin_pb.GetDraftPostsResponse>;
  getPostStats(requestMessage: admin_pb.GetPostStatsRequest, metadata?: grpc.Metadata): ResponseStream<admin_pb.GetPostStatsResponse>;
}

export class ImageServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  uploadImage(requestMessage: admin_pb.UploadImageRequest, metadata?: grpc.Metadata): ResponseStream<admin_pb.UploadImageResponse>;
}

