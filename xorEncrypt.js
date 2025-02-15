/** your private crypto key */
export const cryptoKey = "tyler123"

/** xor encryption */
export function encryptText(text, key) {
   let result = '';
   for (let i = 0; i < text.length; i++) {
      result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
   }
   return result;
}