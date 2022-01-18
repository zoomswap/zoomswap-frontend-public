import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'ZM/IOTX',
    migrateType: 'zoomLP',
    showBorder: true,
    risk: 0,
    lpAddresses: {
      4689: '0x3396D2EC0dd33e6a86bd201208aec8415B0b2991',
      4690: '',
    },
    tokenSymbol: 'ZM',
    tokenAddresses: contracts.zoom,
    quoteTokenSymbol: QuoteToken.IOTX,
    quoteTokenAdresses: contracts.wiotx,
  },
  {
    pid: 1,
    lpSymbol: 'ZM/BUSD-bsc',
    migrateType: 'zoomLP',
    showBorder: true,
    risk: 5,
    lpAddresses: {
      4689: '0x594d07abe1369c8dd72d6fd05eaccd633e6f5540',
      4690: '0xC737bc85406328021fbaD60a96527300b8E6Ea99',
    },
    tokenSymbol: 'ZM',
    tokenAddresses: contracts.zoom,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 21,
    lpSymbol: 'CYC/ZM',
    migrateType: 'zoomLP',
    showBorder: true,
    isNew: true,
    risk: 0,
    lpAddresses: {
      4689: '0xa5849555ea46390612e674c58749f9b9c4c3523b',
      4690: '',
    },
    tokenSymbol: 'CYC',
    tokenAddresses: contracts.cyc,
    quoteTokenSymbol: QuoteToken.ZM,
    quoteTokenAdresses: contracts.zoom,
  },
  {
    pid: 19,
    lpSymbol: 'WBTC/IOTX',
    migrateType: 'LP',
    showBorder: false,
    isNew: false,
    risk: 5,
    lpAddresses: {
      4689: '0x2217b9e27a11f20b681b4dd72153f3b37127a2f3',
      4690: '',
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: contracts.wbtc,
    quoteTokenSymbol: QuoteToken.IOTX,
    quoteTokenAdresses: contracts.wiotx,
  },
  {
    pid: 17,
    lpSymbol: 'MCN/IOTX',
    migrateType: 'LP',
    risk: 5,
    lpAddresses: {
      4689: '0x5bf28ee36e4a1efe5f7d7052a5fc099f9df9c802',
      4690: '',
    },
    tokenSymbol: 'MCN',
    tokenAddresses: contracts.mcn,
    quoteTokenSymbol: QuoteToken.IOTX,
    quoteTokenAdresses: contracts.wiotx,
  },
  {
    pid: 13,
    lpSymbol: 'GFS/IOTX',
    migrateType: 'LP',
    risk: 5,
    lpAddresses: {
      4689: '0x19f3cb6a4452532793d1605c8736d4a94f48752c',
      4690: '',
    },
    tokenSymbol: 'GFS',
    tokenAddresses: contracts.gfs,
    quoteTokenSymbol: QuoteToken.IOTX,
    quoteTokenAdresses: contracts.wiotx,
  },
  {
    pid: 14,
    lpSymbol: 'METX/IOTX',
    migrateType: 'LP',
    risk: 5,
    lpAddresses: {
      4689: '0xb96dbb14cfceb62bbb6b0533f902723bfa80dc8c',
      4690: '',
    },
    tokenSymbol: 'METX',
    tokenAddresses: contracts.metx,
    quoteTokenSymbol: QuoteToken.IOTX,
    quoteTokenAdresses: contracts.wiotx,
  },
  {
    pid: 2,
    lpSymbol: 'ioETH/IOTX',
    migrateType: 'LP',
    risk: 5,
    lpAddresses: {
      4689: '0x543f4e80a0c2e226008f65f96964235523d16329',
      4690: '',
    },
    tokenSymbol: 'ioETH',
    tokenAddresses: contracts.ioETH,
    quoteTokenSymbol: QuoteToken.IOTX,
    quoteTokenAdresses: contracts.wiotx,
  },
  {
    pid: 3,
    lpSymbol: 'ioBUSD/IOTX',
    migrateType: 'LP',
    risk: 5,
    lpAddresses: {
      4689: '0x2a7775e754ca239c54030d7d804c7cb49cb38567',
      4690: '',
    },
    tokenSymbol: 'iotx',
    tokenAddresses: contracts.wiotx,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.ioBUSD,
  },
  {
    pid: 4,
    lpSymbol: 'BNB/IOTX',
    migrateType: 'LP',

    risk: 5,
    lpAddresses: {
      4689: '0xa1313c9e020df867d90afb72a19882f5dd81a3f9',
      4690: '',
    },
    tokenSymbol: 'BNB-bsc',
    tokenAddresses: contracts.bnb,
    quoteTokenSymbol: QuoteToken.IOTX,
    quoteTokenAdresses: contracts.wiotx,
  },
  {
    pid: 5,
    lpSymbol: 'ioUSDC/IOTX',
    migrateType: 'LP',

    risk: 5,
    lpAddresses: {
      4689: '0x68bf247e1f763cb157b2b5f1b927dff4522723d5',
      4690: '',
    },
    tokenSymbol: 'ioUSDC',
    tokenAddresses: contracts.ioUSDC,
    quoteTokenSymbol: QuoteToken.IOTX,
    quoteTokenAdresses: contracts.wiotx,
  },
  {
    pid: 9,
    lpSymbol: 'ioUSDT/IOTX',
    migrateType: 'LP',

    risk: 5,
    lpAddresses: {
      4689: '0xe82b7054471d3f5cc825c50350da3bca64f7be4e',
      4690: '',
    },
    tokenSymbol: 'ioUSDT',
    tokenAddresses: contracts.ioUSDT,
    quoteTokenSymbol: QuoteToken.IOTX,
    quoteTokenAdresses: contracts.wiotx,
  },
  {
    pid: 11,
    lpSymbol: 'BUSD-bsc/IOTX',
    migrateType: 'LP',

    risk: 5,
    lpAddresses: {
      4689: '0x6bdefe87c4b18726002d3505b3251c89c8004c6a',
      4690: '',
    },
    tokenSymbol: 'iotx',
    tokenAddresses: contracts.wiotx,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts['BUSD-bsc'],
  },
  {
    pid: 10,
    lpSymbol: 'ioUSDT/BUSD-bsc',
    migrateType: 'LP',

    risk: 5,
    lpAddresses: {
      4689: '0x903a4d3be1623fc1ff1cd2b6fc7fb02a4b1846e1',
      4690: '',
    },
    tokenSymbol: 'ioUSDT',
    tokenAddresses: contracts.ioUSDT,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts['BUSD-bsc'],
  },
  {
    pid: 7,
    lpSymbol: 'VITA/IOTX',
    migrateType: 'LP',

    risk: 5,
    lpAddresses: {
      4689: '0xC019B1861F5B9D8e07aa47e30eA1291Bd7087D30',
      4690: '',
    },
    tokenSymbol: 'VITA',
    tokenAddresses: contracts.vita,
    quoteTokenSymbol: QuoteToken.IOTX,
    quoteTokenAdresses: contracts.wiotx,
  },
  {
    pid: 8,
    lpSymbol: 'CYC/IOTX',
    migrateType: 'LP',
    risk: 5,
    lpAddresses: {
      4689: '0x1381b170681074fedaf1c4e35be1880bc4e85c4a',
      4690: '',
    },
    tokenSymbol: 'CYC',
    tokenAddresses: contracts.cyc,
    quoteTokenSymbol: QuoteToken.IOTX,
    quoteTokenAdresses: contracts.wiotx,
  },
  {
    pid: 12,
    risk: 3,
    isTokenOnly: true,
    migrateType: 'zoomOnly',
    lpSymbol: 'ZM',
    lpAddresses: {
      4689: '0x594d07abe1369c8dd72d6fd05eaccd633e6f5540',
      4690: '',
    },
    tokenSymbol: 'ZM',
    tokenAddresses: contracts.zoom,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16,
    lpSymbol: 'GFT/IOTX',
    migrateType: 'LP',

    risk: 5,
    lpAddresses: {
      4689: '0x53bdd401a871bd0f84e94619edcc0c24489d4aab',
      4690: '',
    },
    tokenSymbol: 'GFT',
    tokenAddresses: contracts.gft,
    quoteTokenSymbol: QuoteToken.IOTX,
    quoteTokenAdresses: contracts.wiotx,
  },
  {
    pid: 18,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WIOTX',
    migrateType: 'LP',
    lpAddresses: {
      4689: '0xa00744882684c3e4747faefd68d283ea44099d03',
      4690: '',
    },
    tokenSymbol: 'WIOTX',
    tokenAddresses: contracts.wiotx,
    quoteTokenSymbol: QuoteToken.IOTX,
    quoteTokenAdresses: contracts.wiotx,
  },
  // {
  //   pid: 4,
  //   lpSymbol: 'BNB-bsc/IOTX',
  //   risk: 5,
  //   lpAddresses: {
  //     4689: '0xa1313c9e020df867d90afb72a19882f5dd81a3f9',
  //     4690: '',
  //   },
  //   tokenSymbol: 'BNB-bsc',
  //   tokenAddresses: contracts.wbnb,
  //   quoteTokenSymbol: QuoteToken.WIOTX,
  //   quoteTokenAdresses: contracts.wiotx,
  // }
]

export default farms