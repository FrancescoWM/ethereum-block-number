# Ethereum-gas Documentation

- npm install @cicciocoin/ethereum-block-number

CODE EXAMPLE : 

```Javascript
const blockNumber = require('@cicciocoin/ethereum-block-number');

blockNumber("YOUR_RPC_URL").then((blockNumber) => {
  console.log('Block number is :', blockNumber);
}).catch((error) => {
  console.error('Error:', error);
});