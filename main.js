
import { cryptoKey, encryptText } from "./xorEncrypt.js"
import { log } from "./utils.js"

const rawText = "Hello World!"

const encrypted = encryptText(rawText, cryptoKey)

log(`"${rawText}" encrypted = "${encrypted}"
   `)

// create a Base64-encoded ASCII string from a binary string
const base64 = btoa(encrypted)
log(`XOR encrypted to base64 = "${base64}", this is best for internet transport`)

const decrypted = encryptText(encrypted, cryptoKey)

// decode a string of data which has been encoded using Base64 encoding
log(`from base64 back to XOR = ${atob(base64)}`)

log(`"XOR ${encrypted}" decrypted = "${decrypted}"
   `)

log(`
   NOTE: decryption is the same function call (xor-method)! Given the same key,
   it will simply reverse the value returned by the original encryption!`)