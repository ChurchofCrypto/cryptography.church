#!/bin/bash

# Configuration
BUCKET_NAME="cryptography.church"
BUILD_DIRECTORY="build"

# Build the React app
echo "Building React app..."
npm run build

# Sync build folder with S3 bucket
echo "Deploying to S3..."
aws s3 sync $BUILD_DIRECTORY s3://$BUCKET_NAME --delete

# Set proper cache headers
echo "Setting cache headers..."
aws s3 cp s3://$BUCKET_NAME s3://$BUCKET_NAME \
  --exclude "*" \
  --include "*.html" \
  --include "*.json" \
  --cache-control "no-cache" \
  --recursive \
  --metadata-directive REPLACE

aws s3 cp s3://$BUCKET_NAME s3://$BUCKET_NAME \
  --exclude "*" \
  --include "static/*" \
  --cache-control "public, max-age=31536000" \
  --recursive \
  --metadata-directive REPLACE

echo "Deployment complete!"