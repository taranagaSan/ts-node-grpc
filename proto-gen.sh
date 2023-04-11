#!/bin/bash

npx proto-loader-gen-types --enums=String --grpcLib=@grpc/grpc-js --outDir=proto/ proto/*.proto