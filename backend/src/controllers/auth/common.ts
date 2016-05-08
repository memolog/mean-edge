const cryptico = require('cryptico-js')
import {RSA_Key} from '../../env';

export function sendPublicKey (req, res, next){
  res.json({
    publicKey: cryptico.publicKeyString(RSA_Key)
  })
}
