import { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { classifyMaterial } from '../utils/classifier'; // función IA
import { createMintCreditTx } from '../utils/eko-program';
import { useEkoMobileWallet } from '../hooks/useMobileWallet';

export default function Scanner() {
  const webcamRef = useRef<Webcam>(null);
  const [material, setMaterial] = useState<string>('');
  const [txHash, setTxHash] = useState<string>('');
  const { signAndSendTransaction } = useEkoMobileWallet();

  const capture = async () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (!imageSrc) return;

    // 1. Clasificar material con IA local
    const { label, confidence } = await classifyMaterial(imageSrc);
    setMaterial(`${label} (${(confidence * 100).toFixed(1)}%)`);

    // 2. Crear hashes (simulando ZKP)
    const materialHash = keccak256(label);
    const zkProofHash = keccak256(materialHash + walletPubKey + Date.now());

    // 3. Construir transacción para mintear cNFT
    const tx = await createMintCreditTx(materialHash, zkProofHash, 15); // peso ejemplo

    // 4. Firmar y enviar
    const signature = await signAndSendTransaction(tx);
    setTxHash(signature);
  };

  return (
    <div>
      <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Registrar reciclaje</button>
      {material && <p>Material: {material}</p>}
      {txHash && <p>✅ cNFT creado: {txHash}</p>}
    </div>
  );
}
