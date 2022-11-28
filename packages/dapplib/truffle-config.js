require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remember unusual harvest forest furnace gesture'; 
let testAccounts = [
"0x00aa9bf3e6878e1574db78e3fe0c4e5e61c06d4e3d6b2a511d74b913d5e77b4e",
"0x30180b47b9b79f619126ae81bb11ab95e92e6a7bd11dffac6cae6a56258fb1fa",
"0x93f165ff0dc0f5620af2a26c17420bf5645af3510d81441e4ec80d2f49369388",
"0x3f4bb8ad559efa3b6ac4da6aa84df612a87c5f458a425f2d58428c1136acabb1",
"0x35e47f1ba448aed6d8a3d6f2b02ec169fab79304ae3ca936eaacb80828125efe",
"0xf33869048abf5f5795673573b1c292725d92ac78f6cf1985db2eb4da5f52e668",
"0x570779120d45fce04fa129aef8507011c073e7a364c0256395f6cf8796e909d3",
"0x7538b324357fe4e19e295f7673435dc008bf1c37c45a869c1efe774445adda02",
"0xeb0164ea68e993aca96118a524094bc66b9d52c0df0fd14de32e38fe96de704a",
"0x8765c9d6640aa19bbbf9ba9cf043ffb11b7fcce3f3f30c2ed3fe4d9cb1dd60d4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


