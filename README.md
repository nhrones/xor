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