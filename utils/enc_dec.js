const encrypt = (plainText, sharedKey) => {
  const cipherText = CryptoJS.AES.encrypt(plainText, sharedKey);
  return cipherText.toString();
};

const decrypt = (cipherText, sharedKey) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, sharedKey);
  const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedText
}

export {
  encrypt,
  decrypt
}
