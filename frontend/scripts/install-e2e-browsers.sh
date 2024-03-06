#!/bin/sh
set -e

cd "$(dirname "$0")/.."

# Install Chrome
echo "Installing Chrome"
curl -L -o /tmp/google-chrome-stable_current_amd64.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
apt install -y /tmp/google-chrome-stable_current_amd64.deb