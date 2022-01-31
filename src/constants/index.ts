import EthereumLogo from '../assets/images/ethereum-logo.png'
import BinanceLogo from '../assets/svg/binance-logo.svg'
import MaticLogo from '../assets/images/matic-logo.png'
import RSKLogo from '../assets/images/rsk-logo.png'
import XDAILogo from '../assets/images/xdai-stake-logo.svg'

import { ChainId, JSBI, Percent, Token, WETH } from '@udotcash/u-exchange-sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

import { fortmatic, injected, portis, walletconnect, walletlink } from '../connectors'

export const ROUTER_ADDRESS = '0x757FC0D47aCd920340289C914AC72FaBD57B1b50'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export { PRELOADED_PROPOSALS } from './proposals'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
export const USDC = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C')
export const USDT = new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD')
export const COMP = new Token(ChainId.MAINNET, '0xc00e94Cb662C3520282E6f5717214004A7f26888', 18, 'COMP', 'Compound')
export const MKR = new Token(ChainId.MAINNET, '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2', 18, 'MKR', 'Maker')
export const AMPL = new Token(ChainId.MAINNET, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth')
export const WBTC = new Token(ChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped BTC')

// Block time here is slightly higher (~1s) than average in order to avoid ongoing proposals past the displayed time
export const AVERAGE_BLOCK_TIME_IN_SECS = 13
export const PROPOSAL_LENGTH_IN_BLOCKS = 40_320
export const PROPOSAL_LENGTH_IN_SECS = AVERAGE_BLOCK_TIME_IN_SECS * PROPOSAL_LENGTH_IN_BLOCKS

export const GOVERNANCE_ADDRESS = '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'

export const TIMELOCK_ADDRESS = '0x1a9C8182C09F50C8318d769245beA52c32BE35BC'

const UNI_ADDRESS = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
export const UNI: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.RSK]: new Token(ChainId.RSK, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.RSKTEST]: new Token(ChainId.RSKTEST, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.BINANCE]: new Token(ChainId.BINANCE, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.BINANCETEST]: new Token(ChainId.BINANCETEST, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.XDAI]: new Token(ChainId.XDAI, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.POLYGON]: new Token(ChainId.POLYGON, UNI_ADDRESS, 18, 'UNI', 'Uniswap')

}

const UCASH_Address = "0xeB0De4e9A7a89C4747597FDCBe1ec0a38a99eE89"
export const UCASH: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, "0x92e52a1a235d9a103d970901066ce910aacefd37", 8, 'UCASH', 'Universal Cash'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, "0xeB0De4e9A7a89C4747597FDCBe1ec0a38a99eE89", 18, 'UCASH', 'Universal Cash'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, UCASH_Address, 8, 'UCASH', 'Universal Cash'),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, UCASH_Address, 8, 'UCASH', 'Universal Cash'),
  [ChainId.RSK]: new Token(ChainId.RSK, UCASH_Address, 8, 'UCASH', 'Universal Cash'),
  [ChainId.RSKTEST]: new Token(ChainId.RSKTEST, UCASH_Address, 8, 'UCASH', 'Universal Cash'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, UCASH_Address, 8, 'UCASH', 'Universal Cash'),
  [ChainId.BINANCE]: new Token(ChainId.BINANCE, "0xb2535bc0cb30273b7b109eda98b348d4f4634e05", 8, 'UCASH', 'Universal Cash'),
  [ChainId.BINANCETEST]: new Token(ChainId.BINANCETEST, "0xb2535bc0cb30273b7b109eda98b348d4f4634e05", 8, 'UCASH', 'Universal Cash'),
  [ChainId.XDAI]: new Token(ChainId.XDAI, UCASH_Address, 8, 'UCASH', 'Universal Cash'),
  [ChainId.POLYGON]: new Token(ChainId.POLYGON, "0xe951e4c7b0b91447c1a0a46bfb46630682a3f229", 8, 'UCASH', 'Universal Cash')

}

export const COMMON_CONTRACT_NAMES: { [address: string]: string } = {
  [UNI_ADDRESS]: 'UNI',
  [GOVERNANCE_ADDRESS]: 'Governance',
  [TIMELOCK_ADDRESS]: 'Timelock'
}

// TODO: specify merkle distributor for mainnet
export const MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e'
}

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.ROPSTEN]: [WETH[ChainId.ROPSTEN]],
  [ChainId.RINKEBY]: [WETH[ChainId.RINKEBY]],
  [ChainId.GÖRLI]: [WETH[ChainId.GÖRLI]],
  [ChainId.KOVAN]: [WETH[ChainId.KOVAN]],
  [ChainId.RSK]: [WETH[ChainId.RSK]],
  [ChainId.RSKTEST]: [WETH[ChainId.RSKTEST]],
  [ChainId.BINANCE]: [WETH[ChainId.BINANCE]],
  [ChainId.BINANCETEST]: [WETH[ChainId.BINANCETEST]],
  [ChainId.XDAI]: [WETH[ChainId.XDAI]],
  [ChainId.POLYGON]: [WETH[ChainId.POLYGON]],
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT, COMP, MKR, WBTC]
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {
    [AMPL.address]: [DAI, WETH[ChainId.MAINNET]]
  }
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT, WBTC]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT, WBTC]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      new Token(ChainId.MAINNET, '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643', 8, 'cDAI', 'Compound Dai'),
      new Token(ChainId.MAINNET, '0x39AA39c021dfbaE8faC545936693aC917d5E7563', 8, 'cUSDC', 'Compound USD Coin')
    ],
    [USDC, USDT],
    [DAI, USDT]
  ]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5'
  },
  COINBASE_LINK: {
    name: 'Open in Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Open in Coinbase Wallet app.',
    href: 'https://go.cb-w.com/mtUDhEZPy1',
    color: '#315CF5',
    mobile: true,
    mobileOnly: true
  },
  FORTMATIC: {
    connector: fortmatic,
    name: 'Fortmatic',
    iconName: 'fortmaticIcon.png',
    description: 'Login using Fortmatic hosted wallet',
    href: null,
    color: '#6748FF',
    mobile: true
  },
  Portis: {
    connector: portis,
    name: 'Portis',
    iconName: 'portisIcon.png',
    description: 'Login using Portis hosted wallet',
    href: null,
    color: '#4A6C9B',
    mobile: true
  }
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// used for rewards deadlines
export const BIG_INT_SECONDS_IN_WEEK = JSBI.BigInt(60 * 60 * 24 * 7)

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000))

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = [
  '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
  '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b',
  '0x901bb9583b24D97e995513C6778dc6888AB6870e',
  '0xA7e5d5A720f06526557c513402f2e6B5fA20b008',
  '0x8576aCC5C05D6Ce88f4e49bf65BdF0C62F91353C'
]

export const SupportedChainId = ChainId

export const ALL_SUPPORTED_CHAIN_IDS: ChainId[] = [
  ChainId.MAINNET,
  ChainId.RINKEBY,
  ChainId.ROPSTEN,
  ChainId.GÖRLI,
  ChainId.RSK,
  ChainId.RSKTEST,
  ChainId.KOVAN,
  ChainId.BINANCE,
  ChainId.BINANCETEST,
  ChainId.XDAI,
  ChainId.POLYGON
]

export const L1_CHAIN_IDS = [
  [ChainId.MAINNET],
  [ChainId.RINKEBY],
  [ChainId.ROPSTEN],
  [ChainId.GÖRLI],
  [ChainId.RSK],
  [ChainId.RSKTEST],
  [ChainId.KOVAN],
  [ChainId.BINANCE],
  [ChainId.BINANCETEST],
  [ChainId.XDAI],
  [ChainId.POLYGON]
]

export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number]

export const L2_CHAIN_IDS = []

export interface ChainData {
  readonly blockWaitMsBeforeWarning?: number
  readonly docs?: string
  readonly explorer: string
  readonly infoLink?: string
  readonly label: string
  readonly logoUrl?: string
  readonly rpcUrls?: string[]
  readonly nativeCurrency: {
    name: string // 'Goerli ETH',
    symbol: string // 'gorETH',
    decimals: number //18,
  }
}

export type ChainInfo = { readonly [cId: number]: ChainData }

export const CHAIN_INFO: ChainInfo = {
  [ChainId.MAINNET]: {
    label: 'Ethereum',
    explorer: 'https://etherscan.io/',
    logoUrl: EthereumLogo,
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 }
  },
  [ChainId.RINKEBY]: {
    label: 'Rinkeby',
    explorer: 'https://rinkeby.etherscan.io/',
    nativeCurrency: { name: 'Rinkeby ETH', symbol: 'rinkETH', decimals: 18 }
  },
  [ChainId.ROPSTEN]: {
    label: 'Ropsten',
    explorer: 'https://ropsten.etherscan.io/',
    nativeCurrency: { name: 'Ropsten ETH', symbol: 'ropETH', decimals: 18 }
  },
  [ChainId.GÖRLI]: {
    label: 'Görli',
    explorer: 'https://goerli.etherscan.io/',
    nativeCurrency: { name: 'Görli ETH', symbol: 'görETH', decimals: 18 }
  },
  [ChainId.RSK]: {
    label: 'RSK',
    explorer: 'https://explorer.rsk.co/',
    nativeCurrency: { name: 'RBTC', symbol: 'RBTC', decimals: 18 },
    rpcUrls: ['https://public-node.rsk.co'],
    logoUrl: RSKLogo
  },
  [ChainId.RSKTEST]: {
    label: 'RSK Testnet',
    explorer: 'https://explorer.testnet.rsk.co/',
    nativeCurrency: { name: 'tRBTC', symbol: 'rRBTC', decimals: 18 },
    rpcUrls: ['https://public-node.testnet.rsk.co'],
    logoUrl: RSKLogo
  },
  [ChainId.KOVAN]: {
    label: 'Kovan',
    explorer: 'https://kovan.etherscan.io/',
    nativeCurrency: { name: 'Kovan ETH', symbol: 'kovETH', decimals: 18 }
  },
  [ChainId.BINANCE]: {
    label: 'BSC',
    logoUrl: BinanceLogo,
    explorer: 'https://bscscan.com/',
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 }
  },
  [ChainId.BINANCETEST]: {
    label: 'BSC Test',
    logoUrl: BinanceLogo,
    explorer: 'https://testnet.bscscan.com/',
    nativeCurrency: { name: 'Test BNB', symbol: 'BNB', decimals: 18 }
  },
  [ChainId.XDAI]: {
    label: 'xDai',
    explorer: 'https://blockscout.com/xdai/mainnet/',
    nativeCurrency: { name: 'xDai', symbol: 'xDAI', decimals: 18 },
    rpcUrls: ['https://rpc.xdaichain.com/'],
    logoUrl: XDAILogo
  },
  [ChainId.POLYGON]: {
    label: 'Polygon Mainnet',
    logoUrl: MaticLogo,
    rpcUrls: ['https://rpc-mainnet.matic.network'],
    explorer: 'https://explorer.matic.network/',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 }
  }
}
