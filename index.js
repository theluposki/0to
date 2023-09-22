import { genKeyPairHex, sharedKey } from "./utils/KeyPair.js";
import { encrypt, decrypt } from "./utils/enc_dec.js";
import { alice, bob } from "./user.js";

console.log("🔑 Generate Keys: ", genKeyPairHex())

const sharedAlice = sharedKey(alice.keys.privateKey, bob.keys.publicKey);
const sharedBob = sharedKey(bob.keys.privateKey, alice.keys.publicKey);

console.log("🔑 Alice: ", sharedAlice);
console.log("🔑 Bob: ", sharedBob);
console.log("shared key must be equal? ", sharedAlice === sharedBob ? 'Sim 👌' : 'Não 😔');

const text = "Luposki 😀 =D ?° ç~";

const chipher = encrypt(text, sharedAlice);

console.log(chipher, " 🔒");

const dechipher = decrypt(chipher, sharedAlice);

console.log(dechipher, " 🔓");
