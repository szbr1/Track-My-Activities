Great — I'll convert your full text into clean, beautifully structured Markdown (`.md`) format for you. Here it is:

---

````markdown
# 📄 Cryptography Notes  
**Last Modified:** March 7, 2025  

---

## 📏 Basic Bit and Byte Facts  

- **1 byte = 8 bits**  
- **1 Hex character = 4 bits**  
- **1 UTF-8 ASCII character = 8 bits**

---

## 📦 Buffer Encoding Conversions  

**Convert UTF-8 characters to binary:**  
```javascript
Buffer.from("some text", "utf-8");
````

**Convert HEX characters to binary:**

```javascript
Buffer.from("2347babab", "hex");
```

**Convert binary to HEX characters:**

```javascript
yourBuffer.toString("hex");
```

**Convert binary to UTF-8 characters:**

```javascript
yourBuffer.toString("utf-8");
```

---

## 📝 HEX to Binary Table

| HEX | Binary |
| :-- | :----- |
| 0   | 0000   |
| 1   | 0001   |
| 2   | 0010   |
| 3   | 0011   |
| 4   | 0100   |
| 5   | 0101   |
| 6   | 0110   |
| 7   | 0111   |
| 8   | 1000   |
| 9   | 1001   |
| a   | 1010   |
| b   | 1011   |
| c   | 1100   |
| d   | 1101   |
| e   | 1110   |
| f   | 1111   |

**Example:**
`4D 4B 6A` → `0100 1101 0100 1011 0110 1010`

---

## 📚 General Cryptography Concepts

* **Random:** Appears random to humans but is deterministic (e.g. `Math.random()`).
* **Cryptographically Secure Random:** Truly unpredictable for attackers (e.g. `crypto.randomBytes()` in Node.js).
* **Integrity:** Verifying data wasn’t modified.
* **Authentication:** Verifying identity.
* **Confidentiality:** Keeping data hidden from unauthorized parties.
* **Cleartext:** Unprotected data during transmission or storage.
* **Plaintext:** Original, unencrypted data.
* **Ciphertext:** Encrypted data.
* **Encryption:** Plaintext → Ciphertext.
* **Decryption:** Ciphertext → Plaintext.
* **Cipher:** Algorithm for encryption/decryption.
* **Cryptanalyst:** A person who attempts to break cryptography.
* **XOR (Exclusive OR):** Bitwise operation. Equal bits = 0, otherwise 1.
* **Entropy:** Measure of randomness in a system.
* **Padding:** Adds extra data to meet block size requirements.
* **NIST:** U.S. agency setting crypto standards (e.g. AES, SHA).
* **FIPS:** U.S. government security standards for cryptographic modules.
* **NSA:** U.S. cryptography and security agency.
* **Quantum Computing:** Future computing tech using qubits.
* **Brute-Force Attack:** Trying every possible combination.
* **Kerckhoffs’s Principle:** Security should rely only on secret keys, not on algorithm secrecy.
* **NONCE (Number Used Once):** Unique value used once (e.g., in AES-GCM).

---

## 🔐 Symmetric Encryption

* **Caesar Cipher:** Shifts letters by a fixed number.
* **OTP (One-time Pad):** Perfect encryption; mathematically unbreakable.
* **AES:** Symmetric encryption standard.

  * Always works with **128-bit blocks**
  * Key sizes: **128, 192, or 256 bits**
  * **Modes:**

    * **ECB:** Insecure.
    * **CBC:** 16-byte IV.
    * **CTR:** 16-byte IV.
    * **GCM:** 12-byte IV (best performance).
    * **XTS:** Disk encryption.
* **IV (Initialization Vector):** Random data to add randomness.
* **MAC (Message Authentication Code):** Verifies data integrity and authenticity.
* **ChaCha20:** Fast AES alternative, good for software implementations.

---

## 🧮 Hashing

* **Message:** Input to a hash function.
* **Digest:** Output of a hash function.
* **MD5:** Broken — avoid it.
* **SHA Family:**

  * SHA1 (broken),
  * SHA224, SHA256, SHA384, SHA512
  * SHA3 variants (secure)
* **SHA256:** Most widely used; 512-bit blocks.
* **Blake2b:** Faster, strong alternative.
* **Preimage Resistance:** Can’t find input from hash.
* **Second Preimage Resistance:** Can’t find different input with same hash.
* **Collision Resistance:** Hard to find two inputs with the same hash.
* **Avalanche Effect:** Small input change → huge output change.
* **Rainbow Tables:** Precomputed hash tables.
* **Pigeonhole Principle:** Infinite collisions in any hash function.
* **Birthday Paradox:** 23 people → 50% chance of shared birthday.
* **Length Extension Attack:** Vulnerability in some hashes (e.g. MD5, SHA1).

---

## 📏 MAC (Message Authentication Code)

* **HMAC:** Uses a secret key + hash function.
* **GHASH:** Used in AES-GCM mode.
* **AAD (Additional Authenticated Data):** Data authenticated but not encrypted.
* **Poly1305:** Used with ChaCha20 for MAC.

---

## 🔑 Key Derivation Functions (KDFs)

* **Salt:** Random data added to hash input.
* **PBKDF2:** Uses HMAC with multiple iterations.
* **Scrypt:** Memory-hard, slows down brute-force attacks.
* **HKDF:** Extract-and-expand key derivation.
* **Argon2:** Modern, memory-hard, winner of Password Hashing Competition.

---

## 📡 Asymmetric Encryption

*Section coming soon…*

---

> *End of Document*

````

---

## 📦 What I did:
- Added headings (`##`), sub-headings, and bullet points.
- Used code blocks (```javascript) for code.
- Made tables properly aligned in Markdown.
- Cleaned up long texts into digestible bullet points.
- Organized sections with horizontal lines `---` for clarity.

---

✅ You can copy-paste this `.md` text into any Markdown editor (like VS Code with markdown preview) and it will render beautifully.

Would you like me to make a downloadable `.md` file for this too?
````
