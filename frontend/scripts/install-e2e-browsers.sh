#!/bin/sh
set -e

# Check if Chrome or Chromium is installed
CHROME_EXISTS=0
if [ -x "$(command -v google-chrome)" ]; then
    CHROME_EXISTS=1
elif [ -x "$(command -v chromium)" ]; then
    CHROME_EXISTS=1
fi

# Check if requesting installation
INSTALL=0
if [ "$1" = "--install" ]; then
    INSTALL=1
fi

if [ "$CHROME_EXISTS" = "1" ]; then
    echo "Chrome or Chromium is installed."
    exit 0
elif [ "$INSTALL" = "1" ]; then
    # Install Chrome
    echo "Installing Chrome"
    curl -L -o /tmp/google-chrome-stable_current_amd64.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
    apt install -y /tmp/google-chrome-stable_current_amd64.deb
else
    echo "=========================================================="
    echo ""
    printf "\033[1m\033[31mERROR:\033[0m\n"
    echo "Chrome or Chromium is not installed, so end-to-end tests cannot be run."
    echo "If you are using Debian, you can run the following command in the"
    echo "frontend directory to install browsers:"
    echo ""
    echo "    npm run test:e2e-install-browsers"
    echo ""
    echo "=========================================================="
    echo ""
    exit 1
fi