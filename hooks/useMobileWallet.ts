import { useWallet } from '@solana/wallet-adapter-react';
import { useMobileWallet } from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';
import { PublicKey, Transaction } from '@solana/web3.js';

// Hook que usa el Mobile Wallet Adapter cuando está disponible (dispositivo móvil)
export const useEkoMobileWallet = () => {
  const wallet = useWallet();
  const mobileWallet = useMobileWallet();

  const isMobile = typeof window !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent);

  const signAndSendTransaction = async (tx: Transaction) => {
    if (isMobile && mobileWallet) {
      const signedTx = await mobileWallet.signTransaction(tx);
      // Enviar usando conexión estándar
      const connection = new Connection('https://api.devnet.solana.com');
      const signature = await connection.sendRawTransaction(signedTx.serialize());
      return signature;
    } else {
      return wallet.sendTransaction(tx, connection);
    }
  };

  return { signAndSendTransaction, isMobile };
};
