#!/bin/bash

# Configuration
BUCKET_NAME="cryptography.church"
BUILD_DIRECTORY="build"

# Build the React app
echo "Building React app..."
pnpm run build

# Deploy to S3 with proper content types and caching
echo "Deploying to S3..."

# HTML files
aws s3 sync $BUILD_DIRECTORY s3://$BUCKET_NAME \
  --delete \
  --exclude "*" \
  --include "*.html" \
  --content-type "text/html" \
  --cache-control "max-age=1800" \
  --metadata-directive REPLACE

# JavaScript files
aws s3 sync $BUILD_DIRECTORY s3://$BUCKET_NAME \
  --exclude "*" \
  --include "*.js" \
  --content-type "application/javascript" \
  --cache-control "max-age=1800" \
  --metadata-directive REPLACE

# CSS files
aws s3 sync $BUILD_DIRECTORY s3://$BUCKET_NAME \
  --exclude "*" \
  --include "*.css" \
  --content-type "text/css" \
  --cache-control "max-age=1800" \
  --metadata-directive REPLACE

# Everything else
aws s3 sync $BUILD_DIRECTORY s3://$BUCKET_NAME \
  --delete \
  --exclude "*.html" \
  --exclude "*.js" \
  --exclude "*.css" \
  --cache-control "max-age=1800" \
  --metadata-directive REPLACE

echo "Deployment complete!"