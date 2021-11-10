//code to generate the secret used in 2FA using speakeasy package from article of 2FA

import { generateSecret } from 'speakeasy'
interface TwoFactorEntity {
  userId: number
  secret: string
  enabled: boolean // default value is false
}
const generateUserSecret = 
(userRepo: Respository, twoFactor: TwoFactorEntity) => {
const secret = generateSecret()
   twoFactor.secret = secret.base32
   userRepo.save(twoFactor)
   return secret
}