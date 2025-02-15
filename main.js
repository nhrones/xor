
import { cryptoKey, encryptText } from "./xorEncrypt.js"
import { log } from "./utils.js"

const rawText = "Hello World!"

const encrypted = encryptText(rawText, cryptoKey)

log(`"${rawText}" encrypted = "${encrypted}"
   `)

const decrypted = encryptText(encrypted, cryptoKey)

log(`"${encrypted}" decrypted = "${decrypted}"
   `)

log(`
   NOTE: decryption is the same function call (xor-method)! Given the same key,
   it will simply reverse the value returned by the original encryption!`)