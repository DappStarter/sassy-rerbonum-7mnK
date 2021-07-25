require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture strong crawl sister evil hover problem equal gauge'; 
let testAccounts = [
"0x551ddadd0f6b82c1e644d44991fcfdf1ff9bd115b089ce5b423def3033e85232",
"0x384fa9f65620ce1db68aff47f2906902f7c39309cf8f23bd82e296a443f41520",
"0x5a685f5df324fd716d74cc0e729b3cc352da1609e82d2881b152c00dfb09fd0a",
"0x05669274bcbc931df348979d94159aa65b5f44d62e8f46a429e021e9340997ac",
"0x22c4ca07f03c85d2f023b482b0288eb72359e1442e158b13d782895bdb743ec5",
"0x61cbf9deff402e9e18f30be708a0999da897a9f55071671827f941d9b9ab83a8",
"0xa4f7c5c8ae58dade9d5eb2eef9fa7e2bb128b51d315668a16ef7665cf014973c",
"0x5763b04d622b232ce0b33ce0692e6eb94c15c7aeb15768f00349de8ed871e51c",
"0xa24ff9d4aafdfaf8b6f3382b39c6871eccd5fbb89faf9df5805fb19d71312de5",
"0x19600e73ea865dec8b1728ac812c16fc3c12572a642542c5b8748f5a648ec7df"
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
            gas: 3000000,
            gasPrice: 470000000000,
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


