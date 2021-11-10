//verifies token for 2FA

import { totp } from 'speakeasy'
const verifyToken = (userToken: string, serverSecret: string) => {
    const verified = totp.verify({ 
         secret: serverSecret, 
         encoding: 'base32',
         token: userToken
        })
return verified
}
const enableTwoFactor = (
      verified: boolean,
      repo: Respository, 
      twoFactor: TwoFactorEntity) => {
if (!twoFactor.enabled) {
        twoFactor.enabled = verified
     }
repo.save(twoFactor)
}