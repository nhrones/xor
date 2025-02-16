## XOR Encryption
A cryptographic algorithm that uses the XOR operation to secure data.    
It's a type of symmetric encryption, which means that the same key is used to both encrypt and decrypt data. 

```js
/** 
 * XOR Encryption 
 * This same function will encrypt plain-text,    
 * and will decrypt any previously encrypted text,    
 * so long as the same key is used in each call.
 */
function encryptText(text, key) {
   let result = '';
   for (let i = 0; i < text.length; i++) {
      result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
   }
   return result;
}
```
## How it works
  - The plaintext is combined with a secret key using the XOR operation. 
  - The result is encrypted data. 
  - To decrypt the data, the same key is used again to perform an XOR operation on the encrypted data. 

## Why it's effective
XOR encryption is a simple and effective way to protect sensitive information.    
It's also difficult to crack using brute-force methods. 

This repo is served with github pages as:    
## https://nhrones.github.io/xor/    
Click the above link to try it!