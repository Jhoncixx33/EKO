import { Program, AnchorProvider, Idl } from '@project-serum/anchor';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { keypairIdentity } from '@solana/wallet-adapter-react'; // si se usa wallet hook
import idl from '../idl/eko_credit.json'; // IDL generado

const PROGRAM_ID = new PublicKey('EkoCr3ditMintXXXXXXXXXXXXXXXXXXXXXXXXXX');
const BUBBLEGUM_PROGRAM_ID = new PublicKey('BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY');

export async function createMintCreditTx(
  materialHash: Uint8Array,
  zkProofHash: Uint8Array,
  weightGrams: number
) {
  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
  const provider = new AnchorProvider(connection, window.solana, {});
  const program = new Program(idl as Idl, PROGRAM_ID, provider);

  // Obtener cuentas del árbol (deben estar pre-creadas)
  const treeAuthority = new PublicKey('...');
  const merkleTree = new PublicKey('...');
  const leafOwner = provider.wallet.publicKey;
  const payer = provider.wallet.publicKey;

  const tx = await program.methods
    .mintCredit(
      [...materialHash],
      [...zkProofHash],
      weightGrams
    )
    .accounts({
      authority: provider.wallet.publicKey,
      treeAuthority,
      leafOwner,
      leafDelegate: leafOwner, // o null, pero Bubblegum requiere una cuenta
      merkleTree,
      payer,
      treeDelegate: treeAuthority,
      logWrapper: new PublicKey('noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV'),
      compressionProgram: new PublicKey('cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK'),
      bubblegumProgram: BUBBLEGUM_PROGRAM_ID,
      systemProgram: new PublicKey('11111111111111111111111111111111'),
    })
    .transaction();

  return tx;
}
