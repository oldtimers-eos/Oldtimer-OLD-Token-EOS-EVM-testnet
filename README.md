# Oldtimer (OLD) token on EOS EVM testnet

Deployment of Oldtimer (OLD) token (DAO compatible) on EOS EVM testnet.

OldTimers Offer - A step towards decentralization of the classic vehicle market. (https://oldtimersoffer.com/)

## Usage

### Pre Requisites

Before running any command, you need to add MNEMONIC to `.env` file.

Then, proceed with installing dependencies:

```sh
yarn install
```

### Customize

If you wish to create your own erc-20 token (DAO compatible) on EOS EVM testnet, please follow the instructions. 

In contracts folder you can find a OldtimerToken.sol document.

Open the document in your favorite code editor (our recommendation is Visual Studio Code).

On line 10 & 11, you can change name, symbol and total supply of your token.


### Compile

Compile the smart contract with Hardhat:

```sh
$ yarn compile
```

### Deploy

Deploy the contract to EOS EVM testnet:

```sh
$ yarn deploy --network eosevm
```

