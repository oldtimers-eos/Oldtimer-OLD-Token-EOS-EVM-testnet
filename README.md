# Oldtimer (OLD) token on TRUST (EOS EVM) testnet

Deployment of Oldtimer (OLD) token (DAO compatible) on Trust (EOS EVM) testnet.

OldTimers Offer - A step towards decentralization of the classic vehicle market. (https://oldtimersoffer.com/)

## Usage

### Pre Requisites

Before running any command, you need to add MNEMONIC to `.env` file.

Then, proceed with installing dependencies:

```sh
yarn install
```

### Compile

Compile the smart contracts with Hardhat:

```sh
$ yarn compile
```

### Deploy

Deploy the contracts to TRUST (EOS EVM) testnet:

```sh
$ yarn deploy --network trustevm
```

