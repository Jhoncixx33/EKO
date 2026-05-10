# ♻️ EKO — Reciclar Verifica, la Blockchain Recompensa
(https://i.postimg.cc/T1y00QbM/LOGO-EKO.png)

<p align="center">
  <img src="/public/banner-eko.png" alt="https://i.postimg.cc/kgPsNQgr/Banner-EKO.png" width="100%" />
</p>

<h3 align="center">
  Transformamos cada botella reciclada en un <strong>crédito digital verificable</strong>.<br/>
  Sin intermediarios. Sin greenwashing. Solo impacto real.
</h3>

---

## 🌍 El Problema

Cada año, **2.000 millones de toneladas de residuos** terminan en vertederos o ecosistemas. El reciclaje informal es responsable del **60% del reciclaje global**, pero estos trabajadores carecen de:

- ❌ **Reconocimiento económico formal** (sin cuenta bancaria, sin historial crediticio)
- ❌ **Verificación confiable** para que las empresas compren créditos de reciclaje sin miedo al *greenwashing*
- ❌ **Acceso a tecnología** que funcione sin conexión en zonas marginadas

> **Problema real:** Las empresas ESG quieren compensar su huella, pero los sistemas de auditoría actuales son caros, lentos y fácilmente manipulables.

---

## ✅ Nuestra Solución

**EKO** convierte el acto de reciclar en un **cNFT (NFT comprimido)** sobre Solana, respaldado por inteligencia artificial que clasifica el residuo directamente en el teléfono del reciclador.

| Sin EKO | Con EKO |
|---------|---------|
| 🗑️ Reciclador no recibe pago justo por kilo | 💰 Pago directo en stablecoins vía Token-2022 |
| 📄 Auditoría manual de toneladas recicladas | 🔐 cNFT inmutable y verificable on-chain |
| ☁️ Dependencia de servidores y conexión 4G | 📱 IA en el navegador (funciona offline) |
| ❓ ¿El plástico realmente se recicló? | ✅ Prueba ZK simulada que garantiza la veracidad |

---

## 🧪 ¿Cómo funciona en 3 pasos?

1. **📸 Escanea** — Apuntas la cámara a una botella o envase.
2. **🤖 Clasifica** — La IA (TensorFlow.js) identifica el material: PET, vidrio, aluminio.
3. **⛓️ Verifica** — Se mintea un cNFT en Solana y el reciclador recibe su pago automático.

---

## 📈 Impacto Potencial (Proyección)

> Basado en una red piloto de 500 recicladores en Santa Cruz, Bolivia.

- ♻️ **15 toneladas/mes** de residuos trazados
- 💸 **Ingreso extra de $80/mes** por reciclador (30% sobre su ingreso actual)
- 🌳 **120 toneladas de CO₂ eq.** compensadas anualmente

---

## 🧠 ¿Por qué EKO es único?

- **ZK Proofs simuladas** para privacidad del reciclador (prueba real en la hoja de ruta).  
- **Token-2022 Transfer Fee**: cada pago automáticamente separa comisión para sostenibilidad.  
- **cNFTs con State Compression**: crear millones de créditos cuesta centavos.  
- **Enfoque en recicladores informales de Latinoamérica**, empezando por **Santa Cruz, Bolivia**.  
- **Doble impacto**: inclusión financiera + reducción de plástico medible.

---

## 🏗️ Arquitectura Técnica
[Usuario móvil] → cámara + TensorFlow.js (clasificación) →
Prueba de reciclaje → ZK Proof simulada →
Mobile Wallet Adapter firma transacción →
Anchor Program (Rust) mintea cNFT (Bubblegum) →
Token-2022 transfiere recompensa automática al reciclador.

**Stack:**  
- Blockchain: Solana (devnet)  
- Smart contracts: Anchor (Rust)  
- NFTs: Metaplex Bubblegum (cNFT)  
- Frontend: Next.js PWA + React  
- IA en navegador: TensorFlow.js  
- Wallet: Phantom / Backpack (Mobile Wallet Adapter)

---





