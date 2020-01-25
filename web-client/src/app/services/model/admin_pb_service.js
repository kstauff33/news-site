// package: life.kylestauffer.snews
// file: admin.proto

var admin_pb = require("./admin_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TagService = (function () {
  function TagService() {}
  TagService.serviceName = "life.kylestauffer.snews.TagService";
  return TagService;
}());

TagService.GetTags = {
  methodName: "GetTags",
  service: TagService,
  requestStream: false,
  responseStream: true,
  requestType: admin_pb.GetTagsRequest,
  responseType: admin_pb.GetTagsResponse
};

exports.TagService = TagService;

function TagServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TagServiceClient.prototype.getTags = function getTags(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TagService.GetTags, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.TagServiceClient = TagServiceClient;

var AdminPostService = (function () {
  function AdminPostService() {}
  AdminPostService.serviceName = "life.kylestauffer.snews.AdminPostService";
  return AdminPostService;
}());

AdminPostService.SavePost = {
  methodName: "SavePost",
  service: AdminPostService,
  requestStream: false,
  responseStream: true,
  requestType: admin_pb.SavePostRequest,
  responseType: admin_pb.SavePostResponse
};

AdminPostService.PublishPost = {
  methodName: "PublishPost",
  service: AdminPostService,
  requestStream: false,
  responseStream: true,
  requestType: admin_pb.SavePostRequest,
  responseType: admin_pb.SavePostResponse
};

AdminPostService.GetDraftPosts = {
  methodName: "GetDraftPosts",
  service: AdminPostService,
  requestStream: false,
  responseStream: true,
  requestType: admin_pb.GetDraftPostsRequest,
  responseType: admin_pb.GetDraftPostsResponse
};

AdminPostService.GetPostStats = {
  methodName: "GetPostStats",
  service: AdminPostService,
  requestStream: false,
  responseStream: true,
  requestType: admin_pb.GetPostStatsRequest,
  responseType: admin_pb.GetPostStatsResponse
};

exports.AdminPostService = AdminPostService;

function AdminPostServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AdminPostServiceClient.prototype.savePost = function savePost(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(AdminPostService.SavePost, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

AdminPostServiceClient.prototype.publishPost = function publishPost(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(AdminPostService.PublishPost, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

AdminPostServiceClient.prototype.getDraftPosts = function getDraftPosts(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(AdminPostService.GetDraftPosts, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

AdminPostServiceClient.prototype.getPostStats = function getPostStats(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(AdminPostService.GetPostStats, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.AdminPostServiceClient = AdminPostServiceClient;

var ImageService = (function () {
  function ImageService() {}
  ImageService.serviceName = "life.kylestauffer.snews.ImageService";
  return ImageService;
}());

ImageService.UploadImage = {
  methodName: "UploadImage",
  service: ImageService,
  requestStream: false,
  responseStream: true,
  requestType: admin_pb.UploadImageRequest,
  responseType: admin_pb.UploadImageResponse
};

exports.ImageService = ImageService;

function ImageServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ImageServiceClient.prototype.uploadImage = function uploadImage(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(ImageService.UploadImage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.ImageServiceClient = ImageServiceClient;

