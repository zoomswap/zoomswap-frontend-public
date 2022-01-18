import contracts from './contracts'
import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  // {
  //   sousId: 0,
  //   tokenName: 'ZM',
  //   stakingTokenName: QuoteToken.MIMO,
  //   stakingTokenAddress: contracts.cake[4690],
  //   contractAddress: {
  //     4690: '0x45a91032F6f385fd4c67AcD1f16A51E1d3828303',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://exchange.zoomswap.io/',
  //   harvest: true,
  //   tokenPerBlock: '100',
  //   sortOrder: 1,
  //   isFinished: false,
  //   tokenDecimals: 18,
  // },
  // {
  //   sousId: 1,
  //   tokenName: 'TKN',
  //   stakingTokenName: QuoteToken.ZM,
  //   stakingTokenAddress: contracts.zoom[4689],
  //   contractAddress: {
  //     4690: '0x6e81cf8BeAB639713C973660ea36b9Ae7A9A64c8',
  //     4689: '0x7116e282E20b51E97D16F4F8330E6BF7a171bA58',
  //   },
  //   poolCategory: PoolCategory.COMMUNITY,
  //   projectLink: 'https://exchange.zoomswap.io/',
  //   harvest: true,
  //   tokenPerBlock: '1',
  //   sortOrder: 1,
  //   isFinished: false,
  //   tokenDecimals: 18,
  // },
  {
    sousId: 2,
    tokenName: 'GFT',
    stakingTokenName: QuoteToken.ZM,
    stakingTokenAddress: contracts.zoom[4689],
    contractAddress: {
      4690: '',
      4689: '0x17f30F4ff71a69BD7fCa87F6bf3d780A78B9e2f0',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://starcrazy.com/',
    harvest: true,
    tokenPerBlock: '0.000675154320987654',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 3,
    tokenName: 'METX',
    stakingTokenName: QuoteToken.ZM,
    stakingTokenAddress: contracts.zoom[4689],
    contractAddress: {
      4690: '',
      4689: '0xcBc92BC94d3aBA7F89FFBb4B676d5CB5d10726fe',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://www.metanyx.com/',
    harvest: true,
    tokenPerBlock: '6.028356481481482',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 4,
    tokenName: 'MCN',
    stakingTokenName: QuoteToken.ZM,
    stakingTokenAddress: contracts.zoom[4689],
    contractAddress: {
      4690: '',
      4689: '0xC59707f04BD4CcB2db701416170006AA115011Cc',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://mcn.ventures/',
    harvest: true,
    tokenPerBlock: '0.000137786596119929',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 5,
    tokenName: 'MCN',
    stakingTokenName: QuoteToken.ZM,
    stakingTokenAddress: contracts.zoom[4689],
    contractAddress: {
      4690: '',
      4689: '0x5d253d4DA5870CA28E8DdC89Be8C31B09468C2E6',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://mcn.ventures/',
    harvest: true,
    tokenPerBlock: '0.000887346',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 6,
    tokenName: 'CYC',
    stakingTokenName: QuoteToken.ZM,
    stakingTokenAddress: contracts.zoom[4689],
    contractAddress: {
      4690: '',
      4689: '0x84EB8b736D395398da52aDE5dC11b54872Ec6696',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://cyclone.xyz/',
    harvest: true,
    tokenPerBlock: '0.000050270061728395',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 7,
    poolName: 'GFT-Round 2',
    tokenName: 'GFT',
    stakingTokenName: QuoteToken.ZM,
    stakingTokenAddress: contracts.zoom[4689],
    contractAddress: {
      4690: '',
      4689: '0x365319F2a8afc1fCeDc887dff17A0B8a96F99c9E',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://starcrazy.com/',
    harvest: true,
    tokenPerBlock: '0.001118827160493827',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  // {
  //   sousId: 0,
  //   tokenName: 'CAKE',
  //   stakingTokenName: QuoteToken.ZM,
  //   stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   contractAddress: {
  //     97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
  //     56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://exchange.zoomswap.io/',
  //   harvest: true,
  //   tokenPerBlock: '10',
  //   sortOrder: 1,
  //   isFinished: false,
  //   tokenDecimals: 18,
  // },
  // {
  //   sousId: 1,
  //   tokenName: 'TWT',
  //   stakingTokenName: QuoteToken.SYRUP,
  //   stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
  //   contractAddress: {
  //     97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //     56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://trustwallet.com/',
  //   harvest: true,
  //   tokenPerBlock: '20',
  //   sortOrder: 999,
  //   isFinished: true,
  //   tokenDecimals: 18,
  // },
]

export default pools
