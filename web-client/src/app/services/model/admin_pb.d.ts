// package: life.kylestauffer.snews
// file: admin.proto

import * as jspb from "google-protobuf";
import * as base_pb from "./base_pb";

export class GetTagsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTagsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTagsRequest): GetTagsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTagsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTagsRequest;
  static deserializeBinaryFromReader(message: GetTagsRequest, reader: jspb.BinaryReader): GetTagsRequest;
}

export namespace GetTagsRequest {
  export type AsObject = {
  }
}

export class GetTagsResponse extends jspb.Message {
  clearTagsList(): void;
  getTagsList(): Array<base_pb.Tag>;
  setTagsList(value: Array<base_pb.Tag>): void;
  addTags(value?: base_pb.Tag, index?: number): base_pb.Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTagsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTagsResponse): GetTagsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTagsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTagsResponse;
  static deserializeBinaryFromReader(message: GetTagsResponse, reader: jspb.BinaryReader): GetTagsResponse;
}

export namespace GetTagsResponse {
  export type AsObject = {
    tagsList: Array<base_pb.Tag.AsObject>,
  }
}

export class SavePostRequest extends jspb.Message {
  hasPost(): boolean;
  clearPost(): void;
  getPost(): base_pb.SimplePost | undefined;
  setPost(value?: base_pb.SimplePost): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SavePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SavePostRequest): SavePostRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SavePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SavePostRequest;
  static deserializeBinaryFromReader(message: SavePostRequest, reader: jspb.BinaryReader): SavePostRequest;
}

export namespace SavePostRequest {
  export type AsObject = {
    post?: base_pb.SimplePost.AsObject,
  }
}

export class SavePostResponse extends jspb.Message {
  hasPost(): boolean;
  clearPost(): void;
  getPost(): base_pb.SimplePost | undefined;
  setPost(value?: base_pb.SimplePost): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SavePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SavePostResponse): SavePostResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SavePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SavePostResponse;
  static deserializeBinaryFromReader(message: SavePostResponse, reader: jspb.BinaryReader): SavePostResponse;
}

export namespace SavePostResponse {
  export type AsObject = {
    post?: base_pb.SimplePost.AsObject,
  }
}

export class GetDraftPostsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDraftPostsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDraftPostsRequest): GetDraftPostsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDraftPostsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDraftPostsRequest;
  static deserializeBinaryFromReader(message: GetDraftPostsRequest, reader: jspb.BinaryReader): GetDraftPostsRequest;
}

export namespace GetDraftPostsRequest {
  export type AsObject = {
    page: number,
  }
}

export class GetDraftPostsResponse extends jspb.Message {
  clearPostsList(): void;
  getPostsList(): Array<base_pb.SimplePost>;
  setPostsList(value: Array<base_pb.SimplePost>): void;
  addPosts(value?: base_pb.SimplePost, index?: number): base_pb.SimplePost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDraftPostsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDraftPostsResponse): GetDraftPostsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDraftPostsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDraftPostsResponse;
  static deserializeBinaryFromReader(message: GetDraftPostsResponse, reader: jspb.BinaryReader): GetDraftPostsResponse;
}

export namespace GetDraftPostsResponse {
  export type AsObject = {
    postsList: Array<base_pb.SimplePost.AsObject>,
  }
}

export class GetPostStatsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostStatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostStatsRequest): GetPostStatsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostStatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostStatsRequest;
  static deserializeBinaryFromReader(message: GetPostStatsRequest, reader: jspb.BinaryReader): GetPostStatsRequest;
}

export namespace GetPostStatsRequest {
  export type AsObject = {
  }
}

export class GetPostStatsResponse extends jspb.Message {
  getAveragewc(): string;
  setAveragewc(value: string): void;

  getAveragetaglinewc(): string;
  setAveragetaglinewc(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostStatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostStatsResponse): GetPostStatsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostStatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostStatsResponse;
  static deserializeBinaryFromReader(message: GetPostStatsResponse, reader: jspb.BinaryReader): GetPostStatsResponse;
}

export namespace GetPostStatsResponse {
  export type AsObject = {
    averagewc: string,
    averagetaglinewc: string,
  }
}

export class UploadImageRequest extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getFiletype(): string;
  setFiletype(value: string): void;

  getAlttext(): string;
  setAlttext(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadImageRequest): UploadImageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadImageRequest;
  static deserializeBinaryFromReader(message: UploadImageRequest, reader: jspb.BinaryReader): UploadImageRequest;
}

export namespace UploadImageRequest {
  export type AsObject = {
    data: Uint8Array | string,
    filetype: string,
    alttext: string,
  }
}

export class UploadImageResponse extends jspb.Message {
  hasImage(): boolean;
  clearImage(): void;
  getImage(): base_pb.Image | undefined;
  setImage(value?: base_pb.Image): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadImageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadImageResponse): UploadImageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadImageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadImageResponse;
  static deserializeBinaryFromReader(message: UploadImageResponse, reader: jspb.BinaryReader): UploadImageResponse;
}

export namespace UploadImageResponse {
  export type AsObject = {
    image?: base_pb.Image.AsObject,
  }
}

