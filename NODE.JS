import { createAllocTreeIx, createCreateTreeIx, PROGRAM_ID as BUBBLEGUM_ID } from '@metaplex-foundation/mpl-bubblegum';
import { Connection, Keypair, Transaction, clusterApiUrl, sendAndConfirmTransaction } from '@solana/web3.js';
import { createMintToInstruction, createInitializeMintInstruction } from '@solana/spl-token';

async function setup() {
  const conn = new Connection(clusterApiUrl('devnet'));
  const payer = Keypair.generate(); // airdrop devnet SOL
  // ... crear árbol con createCreateTreeIx, maxDepth=14, maxBufferSize=64
  // Guardar la dirección del árbol y treeAuthority para las cuentas del frontend.
}
setup();
