# Simple test of CSSOM

## Development

```bash
# Setup yarn if you need
nodenv local 13.13.0
npm install -g yarn

# Install mkcert if you need
brew install mkcert

# Setup SSL if you need
mkdir .certificate && cd .certificate
mkcert localhost 127.0.0.1
cd ../

# Install dependencies
yarn

# Start server
yarn start
```
