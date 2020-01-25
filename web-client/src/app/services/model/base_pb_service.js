// package: life.kylestauffer.snews
// file: base.proto

var base_pb = require("./base_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PostService = (function () {
  function PostService() {}
  PostService.serviceName = "life.kylestauffer.snews.PostService";
  return PostService;
}());

PostService.GetPosts = {
  methodName: "GetPosts",
  service: PostService,
  requestStream: false,
  responseStream: true,
  requestType: base_pb.GetPostsRequest,
  responseType: base_pb.GetPostsResponse
};

PostService.GetPost = {
  methodName: "GetPost",
  service: PostService,
  requestStream: false,
  responseStream: true,
  requestType: base_pb.GetPostRequest,
  responseType: base_pb.GetPostResponse
};

PostService.GetTopPosts = {
  methodName: "GetTopPosts",
  service: PostService,
  requestStream: false,
  responseStream: true,
  requestType: base_pb.GetTopPostsRequest,
  responseType: base_pb.GetTopPostsResponse
};

PostService.GetRecentPosts = {
  methodName: "GetRecentPosts",
  service: PostService,
  requestStream: false,
  responseStream: true,
  requestType: base_pb.GetRecentPostsRequest,
  responseType: base_pb.GetRecentPostsResponse
};

exports.PostService = PostService;

function PostServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PostServiceClient.prototype.getPosts = function getPosts(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(PostService.GetPosts, {
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

PostServiceClient.prototype.getPost = function getPost(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(PostService.GetPost, {
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

PostServiceClient.prototype.getTopPosts = function getTopPosts(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(PostService.GetTopPosts, {
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

PostServiceClient.prototype.getRecentPosts = function getRecentPosts(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(PostService.GetRecentPosts, {
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

exports.PostServiceClient = PostServiceClient;

var AuthorService = (function () {
  function AuthorService() {}
  AuthorService.serviceName = "life.kylestauffer.snews.AuthorService";
  return AuthorService;
}());

AuthorService.GetAuthors = {
  methodName: "GetAuthors",
  service: AuthorService,
  requestStream: false,
  responseStream: true,
  requestType: base_pb.GetAuthorsRequest,
  responseType: base_pb.GetAuthorsResponse
};

AuthorService.GetAuthor = {
  methodName: "GetAuthor",
  service: AuthorService,
  requestStream: false,
  responseStream: true,
  requestType: base_pb.GetAuthorRequest,
  responseType: base_pb.GetAuthorResponse
};

exports.AuthorService = AuthorService;

function AuthorServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuthorServiceClient.prototype.getAuthors = function getAuthors(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(AuthorService.GetAuthors, {
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

AuthorServiceClient.prototype.getAuthor = function getAuthor(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(AuthorService.GetAuthor, {
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

exports.AuthorServiceClient = AuthorServiceClient;

var SubscriptionService = (function () {
  function SubscriptionService() {}
  SubscriptionService.serviceName = "life.kylestauffer.snews.SubscriptionService";
  return SubscriptionService;
}());

SubscriptionService.Subscribe = {
  methodName: "Subscribe",
  service: SubscriptionService,
  requestStream: false,
  responseStream: true,
  requestType: base_pb.SubscriptionRequest,
  responseType: base_pb.SubscriptionResponse
};

SubscriptionService.GetSubscription = {
  methodName: "GetSubscription",
  service: SubscriptionService,
  requestStream: false,
  responseStream: true,
  requestType: base_pb.GetSubscriptionRequest,
  responseType: base_pb.SubscriptionResponse
};

exports.SubscriptionService = SubscriptionService;

function SubscriptionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SubscriptionServiceClient.prototype.subscribe = function subscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(SubscriptionService.Subscribe, {
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

SubscriptionServiceClient.prototype.getSubscription = function getSubscription(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(SubscriptionService.GetSubscription, {
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

exports.SubscriptionServiceClient = SubscriptionServiceClient;

var LoginService = (function () {
  function LoginService() {}
  LoginService.serviceName = "life.kylestauffer.snews.LoginService";
  return LoginService;
}());

LoginService.Login = {
  methodName: "Login",
  service: LoginService,
  requestStream: false,
  responseStream: true,
  requestType: base_pb.LoginRequest,
  responseType: base_pb.LoginResponse
};

LoginService.Register = {
  methodName: "Register",
  service: LoginService,
  requestStream: false,
  responseStream: true,
  requestType: base_pb.RegistrationRequest,
  responseType: base_pb.LoginResponse
};

LoginService.ValidateToken = {
  methodName: "ValidateToken",
  service: LoginService,
  requestStream: false,
  responseStream: true,
  requestType: base_pb.TokenValidationRequest,
  responseType: base_pb.TokenValidationResponse
};

exports.LoginService = LoginService;

function LoginServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LoginServiceClient.prototype.login = function login(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(LoginService.Login, {
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

LoginServiceClient.prototype.register = function register(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(LoginService.Register, {
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

LoginServiceClient.prototype.validateToken = function validateToken(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(LoginService.ValidateToken, {
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

exports.LoginServiceClient = LoginServiceClient;

