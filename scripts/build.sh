#!/bin/sh
# The site is static: build/ is a plain copy of public/.
set -eu
cd "$(dirname "$0")/.."
rm -rf build
cp -r public build
echo "Built build/ from public/"
