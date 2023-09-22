const ec = new elliptic.ec("secp256k1");

const genKeyPairHex = () => {
  const privateKey = ec.genKeyPair();
  const publicKey = ec.keyFromPrivate(privateKey);

  return {
    privateKey: privateKey.getPrivate("hex"),
    publicKey: publicKey.getPublic().encode("hex"),
  };
};

const restoredPrivateKey = (key) => {
  const keyRestored = ec.keyFromPrivate(key, "hex");
  return keyRestored;
};

const restoredPublicKey = (key) => {
  const keyRestored = ec.keyFromPublic(key, "hex");
  return keyRestored.getPublic();
};

const sharedKey = (privateKey, friendPublicKey) => {
  const key1 = restoredPrivateKey(privateKey);
  const key2 = restoredPublicKey(friendPublicKey);
  const shared = key1.derive(key2);
  return shared.toString(16);
};

export { genKeyPairHex, sharedKey };
