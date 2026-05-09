use anchor_lang::prelude::*;
use anchor_spl::token;
use mpl_bubblegum::{
    cpi::mint_v1,
    types::{MetadataArgs, TokenProgramVersion, TokenStandard, Creator},
};
use spl_account_compression::program::SplAccountCompression;
use spl_noop::instruction as noop_instruction;

declare_id!("EkoCr3ditMintXXXXXXXXXXXXXXXXXXXXXXXXXX"); // Reemplazar con tu program ID

#[program]
pub mod eko_credit {
    use super::*;

    /// Instrucción principal: acuña un Eko-Crédito como cNFT.
    /// Parámetros:
    /// - material_hash: keccak256 del tipo de material (ej. "PET")
    /// - zk_proof_hash: hash de la prueba de conocimiento cero (compromiso)
    /// - weight_grams: peso estimado del residuo
    pub fn mint_credit(
        ctx: Context<MintCredit>,
        material_hash: [u8; 32],
        zk_proof_hash: [u8; 32],
        weight_grams: u32,
    ) -> Result<()> {
        // Construir metadatos del cNFT
        let metadata = MetadataArgs {
            name: format!("Eko-Crédito-{}", &hex::encode(&material_hash[..4])),
            symbol: "EKO".to_string(),
            uri: "https://arweave.net/placeholder-metadata.json".to_string(), // Puede ser off-chain o generado dinámicamente
            creators: vec![Creator {
                address: ctx.accounts.authority.key(),
                verified: false,
                share: 100,
            }],
            seller_fee_basis_points: 0,
            primary_sale_happened: false,
            is_mutable: false,
            edition_nonce: Some(0),
            token_standard: Some(TokenStandard::NonFungible),
            collection: None,
            uses: None,
            token_program_version: TokenProgramVersion::Original,
        };

        // CPI para mintear el cNFT en el árbol de compresión
        let cpi_ctx = CpiContext::new(
            ctx.accounts.bubblegum_program.to_account_info(),
            mint_v1::MintV1 {
                tree_authority: ctx.accounts.tree_authority.to_account_info(),
                leaf_owner: ctx.accounts.leaf_owner.to_account_info(),
                leaf_delegate: ctx.accounts.leaf_delegate.to_account_info(),
                merkle_tree: ctx.accounts.merkle_tree.to_account_info(),
                payer: ctx.accounts.payer.to_account_info(),
                tree_delegate: ctx.accounts.tree_delegate.to_account_info(),
                log_wrapper: ctx.accounts.log_wrapper.to_account_info(),
                compression_program: ctx.accounts.compression_program.to_account_info(),
                system_program: ctx.accounts.system_program.to_account_info(),
            },
        );
        mint_v1(cpi_ctx, metadata);

        // Emitir un evento con los hashes para trazabilidad off-chain
        emit!(CreditMinted {
            authority: ctx.accounts.authority.key(),
            material_hash,
            zk_proof_hash,
            weight_grams,
        });

        Ok(())
    }
}

#[event]
pub struct CreditMinted {
    pub authority: Pubkey,
    pub material_hash: [u8; 32],
    pub zk_proof_hash: [u8; 32],
    pub weight_grams: u32,
}

#[derive(Accounts)]
pub struct MintCredit<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,
    /// CHECK: Verificado por el programa Bubblegum
    pub tree_authority: AccountInfo<'info>,
    /// CHECK: Cuenta del dueño de la hoja (puede ser la misma authority)
    pub leaf_owner: AccountInfo<'info>,
    /// CHECK: Delegado de la hoja, puede estar vacío
    pub leaf_delegate: AccountInfo<'info>,
    /// CHECK: Cuenta del árbol Merkle comprimido
    pub merkle_tree: AccountInfo<'info>,
    /// CHECK: Pagador de la tarifa (en general la misma authority)
    #[account(mut)]
    pub payer: Signer<'info>,
    /// CHECK: Delegado del árbol (puede ser el mismo que tree_authority)
    pub tree_delegate: AccountInfo<'info>,
    /// CHECK: Programa SPL Noop requerido por Bubblegum
    pub log_wrapper: AccountInfo<'info>,
    /// CHECK: Programa de compresión SPL
    pub compression_program: Program<'info, SplAccountCompression>,
    /// CHECK: Programa Bubblegum
    pub bubblegum_program: Program<'info, MplBubblegum>,
    pub system_program: Program<'info, System>,
}

// Alias para el programa Bubblegum
#[derive(Clone)]
struct MplBubblegum;
impl anchor_lang::Id for MplBubblegum {
    fn id() -> Pubkey {
        mpl_bubblegum::ID
    }
}
