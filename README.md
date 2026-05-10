# ♻️ EKO – Transforma residuos en créditos digitales verificables

![EKO Banner](https://via.placeholder.com/1200x400/22c55e/ffffff?text=EKO+-+Reciclar+para+ganar)  

**EKO** convierte cada acto de reciclaje en un **crédito digital verificable (cNFT)** usando inteligencia artificial y blockchain de Solana. Empresas compran estos créditos ESG con total trazabilidad, y los recicladores reciben pagos directos sin intermediarios.

🌍 **Problema real**: 350 millones de toneladas de plástico al año, <9% se recicla. 20 millones de recicladores informales sin acceso a banca.  
⚡ **Solución**: Escanea tu residuo con el móvil, una IA lo clasifica, se mintea un cNFT comprimido como prueba y el reciclador recibe criptoactivos al instante.

---

## 📽️ Demo en vivo

🔗 [Prueba la aplicación aquí](https://eko-demo.vercel.app) *(enlace de Vercel, actualiza con tu despliegue)*

📱 [Video de demostración en YouTube](https://youtu.be/tu_video_id) *(cambia por el video real de la app funcionando)*

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

## 📸 Capturas de pantalla

| Inicio | Escaneo de residuo | Crédito minteado |
|--------|-------------------|------------------|
| ![Home](public/screenshots/home.png) | ![Scanner](public/screenshots/scanner.png) | ![Mint](public/screenshots/mint.png) |

*(Crea estas imágenes y súbelas a `public/screenshots/`)*

---

## 🚀 Instalación rápida (para probar local)

1. Clona el repo:
   ```bash
   git clone https://github.com/Jhoncixx33/EKO.git
   cd EKO



