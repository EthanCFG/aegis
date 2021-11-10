//generates a token using speakasy package for 2FA

import { totp } from 'speakeasy'
interface SecretData {
   base32: string
}
const generateToken = (secret: SecretData) => {
  const token = totp({ secret: secret.base32, encoding: 'base32'})
  return token
}