# 🌱 Eko — Transformando reciclaje en activos digitales

**Equipo:** Shadow Garden  
**Categoría:** Social / Comunidad  
**Hub:** Santa Cruz, Bolivia  
**Hackathon:** Dev3pack Global 2026  

> *"Eko: cada reciclaje se vuelve un crédito digital verificado con IA, con recompensa justa en Solana y total trazabilidad."*

---

## 📌 El Problema

Cada año se generan 350 millones de toneladas de plástico. Menos del 9% se recicla realmente. Las empresas gastan miles de millones en créditos ESG sin trazabilidad, y 20 millones de recicladores viven en la informalidad.

---

## 💡 La Solución

Eko convierte cada acto de reciclaje en un **crédito digital verificable (cNFT)** usando IA y blockchain Solana. El usuario escanea un residuo con su teléfono, la IA clasifica el material, y se emite un cNFT comprimido como prueba del reciclaje. Las empresas compran estos créditos para sus reportes ESG, y los recicladores reciben micropagos directos.

---

## 🧠 Arquitectura Técnica
[Móvil] → (cámara + TensorFlow.js) → Clasifica material
↓
[ZK Proof simulada] → Hash del material + compromiso
↓
[Mobile Wallet Adapter] → Firma transacción
↓
[Anchor Program] → CPI a Metaplex Bubblegum → Mintea cNFT
↓
[Token-2022 TransferFee] → Pago automático al reciclador

text

---

## 🔧 Stack Tecnológico

| Capa | Tecnología |
|------|-----------| 
| **Blockchain** | Solana (Devnet) |
| **Smart Contract** | Anchor (Rust) |
| **NFTs** | Metaplex Bubblegum (cNFTs con State Compression) |
| **Frontend** | Next.js (PWA) + React |
| **IA** | TensorFlow.js (clasificación de residuos) |
| **Billetera** | Mobile Wallet Adapter (Phantom, Backpack) |
| **Privacidad** | Zero-Knowledge Proofs (simuladas en MVP) |

---

## 📁 Estructura del Proyecto
EKO/
├── programs/eko-credit/ # Smart Contract Anchor (Rust)
│ ├── src/lib.rs # Instrucción mint_credit
│ └── Cargo.toml # Dependencias (Bubblegum, SPL Compression)
├── components/
│ └── Scanner.tsx # Componente de cámara y captura
├── hooks/
│ └── useMobileWallet.ts # Integración Mobile Wallet Adapter
├── utils/
│ ├── classifier.ts # Modelo IA con TensorFlow.js
│ └── eko-program.ts # Cliente Anchor para el frontend
└── README.md

text

---

## 🚀 Demo en Vivo

![Demo](screenshots/demo.gif)

---

## 🏆 ¿Por Qué Eko Gana?

1. **Impacto social real:** Empodera a recicladores informales.
2. **Economía circular programable:** Token Extensions con TransferFee.
3. **Privacidad desde el diseño:** ZK Proofs.
4. **Escalabilidad masiva:** cNFTs — 1 millón de créditos < $10 en fees.
5. **Nacido en Bolivia, con visión global.**

---

## 👥 Equipo

**Shadow Garden** — Construyendo desde las sombras la luz de la economía circular.

---

## 📄 Licencia

MIT
✅ Prioridad #2: Generar Screenshots y Logo (15 min)
Screenshot 1: Tomen una captura del Scanner.tsx abierto en VS Code mostrando el flujo de captura.

Screenshot 2: Tomen una captura del lib.rs mostrando la instrucción mint_credit.

Screenshot 3: Si logran ejecutar algo localmente, tomen captura de la consola o del navegador con un mensaje de éxito.




