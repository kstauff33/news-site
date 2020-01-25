TIMESTAMP_PROTO_DIR="/usr/local/Cellar/protobuf/3.6.0/include/google/protobuf/timestamp.proto"

PROTOC_GEN_TS_PATH="/usr/local/Cellar/node/12.1.0/bin/protoc-gen-ts"
TS_OUT_DIR="../web-client/src/app/services/model/"
protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${TS_OUT_DIR}" \
    --ts_out="service=true:${TS_OUT_DIR}" \
    ./*.proto "${TIMESTAMP_PROTO_DIR}"
    

# DART_OUT_DIR="../fclient/lib/model/"
# protoc \
#     --dart_out="grpc:${DART_OUT_DIR}" \
#     ./*.proto "${TIMESTAMP_PROTO_DIR}"
    
    