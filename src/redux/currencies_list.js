const currenciesList = [{
  currencyCode: 'AGLD', currencyName: 'Adventure Gold', icon: 'https://currencyfreaks.com/photos/flags/agld.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'FJD', currencyName: 'Fiji Dollar', icon: 'https://currencyfreaks.com/photos/flags/fjd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'FJ', countryName: 'Fiji',
}, {
  currencyCode: 'MXN', currencyName: 'Mexican Peso', icon: 'https://currencyfreaks.com/photos/flags/mxn.png', status: 'AVAILABLE', available_in_historical_data_from: '[1993, 1, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'MX', countryName: 'Mexico',
}, {
  currencyCode: 'SCR', currencyName: 'Seychelles Rupee', icon: 'https://currencyfreaks.com/photos/flags/scr.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'SC', countryName: 'Seychelles',
}, {
  currencyCode: 'CDF', currencyName: 'Congolese Franc', icon: 'https://currencyfreaks.com/photos/flags/cdf.png', status: 'AVAILABLE', available_in_historical_data_from: '[2009, 10, 27]', available_in_historical_data_till: '2022-10-14', countryCode: 'CD', countryName: 'Democratic Republic of the Congo',
}, {
  currencyCode: 'BBD', currencyName: 'Barbados Dollar', icon: 'https://currencyfreaks.com/photos/flags/bbd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'BB', countryName: 'Barbados',
}, {
  currencyCode: 'HNL', currencyName: 'Honduran Lempira', icon: 'https://currencyfreaks.com/photos/flags/hnl.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'HN', countryName: 'Honduras',
}, {
  currencyCode: 'UGX', currencyName: 'Uganda Shilling', icon: 'https://currencyfreaks.com/photos/flags/ugx.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'UG', countryName: 'Uganda',
}, {
  currencyCode: 'GLM', currencyName: 'Golem', icon: 'https://currencyfreaks.com/photos/flags/glm.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'NEAR', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/near.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 8, 31]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'AIOZ', currencyName: 'Aioz Network', icon: 'https://currencyfreaks.com/photos/flags/aioz.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'FARM', currencyName: 'Harvest Finance', icon: 'https://currencyfreaks.com/photos/flags/farm.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'SDG', currencyName: 'Sudanese Pound', icon: 'https://currencyfreaks.com/photos/flags/sdg.png', status: 'AVAILABLE', available_in_historical_data_from: '[1996, 5, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'SD', countryName: 'Sudan',
}, {
  currencyCode: 'IQD', currencyName: 'Iraqi Dinar', icon: 'https://currencyfreaks.com/photos/flags/iqd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'IQ', countryName: 'Iraq',
}, {
  currencyCode: 'GMD', currencyName: 'Gambian Dalasi', icon: 'https://currencyfreaks.com/photos/flags/gmd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'GM', countryName: 'Gambia',
}, {
  currencyCode: 'RBN', currencyName: 'Ribbon FInance', icon: 'https://currencyfreaks.com/photos/flags/rbn.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ZRX', currencyName: 'ZRX 0x', icon: 'https://currencyfreaks.com/photos/flags/zrx.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'BCH', currencyName: 'Bitcoin Cash', icon: 'https://currencyfreaks.com/photos/flags/bch.png', status: 'AVAILABLE', available_in_historical_data_from: '[2017, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'MYR', currencyName: 'Malaysian Ringgit', icon: 'https://currencyfreaks.com/photos/flags/myr.png', status: 'AVAILABLE', available_in_historical_data_from: '[1986, 4, 25]', available_in_historical_data_till: '2022-10-14', countryCode: 'MY', countryName: 'Malaysia',
}, {
  currencyCode: 'FKP', currencyName: 'Falkland Islands Pound', icon: 'https://currencyfreaks.com/photos/flags/fkp.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'FK', countryName: 'Falkland Islands',
}, {
  currencyCode: 'XOF', currencyName: 'CFA Franc BCEAO', icon: 'https://currencyfreaks.com/photos/flags/xof.png', status: 'AVAILABLE', available_in_historical_data_from: '[2009, 9, 28]', available_in_historical_data_till: '2022-10-14', countryCode: 'BF', countryName: 'Burkina Faso',
}, {
  currencyCode: 'GMT', currencyName: 'Stepn', icon: 'https://currencyfreaks.com/photos/flags/gmt.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 9]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'SEK', currencyName: 'Swedish Krona', icon: 'https://currencyfreaks.com/photos/flags/sek.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 28]', available_in_historical_data_till: '2022-10-14', countryCode: 'SE', countryName: 'Sweden',
}, {
  currencyCode: 'GNF', currencyName: 'Guinean Franc', icon: 'https://currencyfreaks.com/photos/flags/gnf.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'GN', countryName: 'Guinea',
}, {
  currencyCode: 'MZN', currencyName: 'Mozambique Metical', icon: 'https://currencyfreaks.com/photos/flags/mzn.png', status: 'AVAILABLE', available_in_historical_data_from: '[2006, 7, 3]', available_in_historical_data_till: '2022-10-14', countryCode: 'MZ', countryName: 'Mozambique',
}, {
  currencyCode: 'QAR', currencyName: 'Qatari Rial', icon: 'https://currencyfreaks.com/photos/flags/qar.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'QA', countryName: 'Qatar',
}, {
  currencyCode: 'IRR', currencyName: 'Iranian Rial', icon: 'https://currencyfreaks.com/photos/flags/irr.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'IR', countryName: 'Iran',
}, {
  currencyCode: 'GNO', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/gno.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 7, 20]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'GNT', currencyName: 'GreenTrust', icon: 'https://currencyfreaks.com/photos/flags/gnt.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'XPD', currencyName: 'Palladium', icon: 'https://currencyfreaks.com/photos/flags/xpd.png', status: 'AVAILABLE', available_in_historical_data_from: '[2020, 9, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'Metal', countryName: 'Global',
}, {
  currencyCode: 'THB', currencyName: 'Baht', icon: 'https://currencyfreaks.com/photos/flags/thb.png', status: 'AVAILABLE', available_in_historical_data_from: '[1985, 10, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'TH', countryName: 'Thailand',
}, {
  currencyCode: 'XPF', currencyName: 'CFP Franc', icon: 'https://currencyfreaks.com/photos/flags/xpf.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'NC', countryName: 'New Caledonia',
}, {
  currencyCode: 'ABT', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/abt.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 7, 20]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'BDT', currencyName: 'Bangladeshi Taka', icon: 'https://currencyfreaks.com/photos/flags/bdt.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'BD', countryName: 'Bangladesh',
}, {
  currencyCode: 'LYD', currencyName: 'Libyan Dinar', icon: 'https://currencyfreaks.com/photos/flags/lyd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 29]', available_in_historical_data_till: '2022-10-14', countryCode: 'LY', countryName: 'Libya',
}, {
  currencyCode: 'KWD', currencyName: 'Kuwaiti Dinar', icon: 'https://currencyfreaks.com/photos/flags/kwd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 29]', available_in_historical_data_till: '2022-10-14', countryCode: 'KW', countryName: 'Kuwait',
}, {
  currencyCode: 'DIA', currencyName: 'Dia', icon: 'https://currencyfreaks.com/photos/flags/dia.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'XPT', currencyName: 'Platinum', icon: 'https://currencyfreaks.com/photos/flags/xpt.png', status: 'AVAILABLE', available_in_historical_data_from: '[2020, 9, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'Metal', countryName: 'Global',
}, {
  currencyCode: 'ISK', currencyName: 'Iceland Krona', icon: 'https://currencyfreaks.com/photos/flags/isk.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'IS', countryName: 'Iceland',
}, {
  currencyCode: 'JUP', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/jup.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 22]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'ACH', currencyName: 'Alchemy Pay', icon: 'https://currencyfreaks.com/photos/flags/ach.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'MINA', currencyName: 'Mina', icon: 'https://currencyfreaks.com/photos/flags/mina.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'PAB', currencyName: 'Balboa', icon: 'https://currencyfreaks.com/photos/flags/pab.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'PA', countryName: 'Panama',
}, {
  currencyCode: 'SGD', currencyName: 'Singapore Dollar', icon: 'https://currencyfreaks.com/photos/flags/sgd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1985, 10, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'SG', countryName: 'Singapore',
}, {
  currencyCode: 'REN', currencyName: 'renBTC', icon: 'https://currencyfreaks.com/photos/flags/ren.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ELA', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/ela.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 21]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'REP', currencyName: 'Augur', icon: 'https://currencyfreaks.com/photos/flags/rep.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ADA', currencyName: 'Cardano', icon: 'https://currencyfreaks.com/photos/flags/ada.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'REQ', currencyName: 'Request', icon: 'https://currencyfreaks.com/photos/flags/req.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'STORJ', currencyName: 'Storj', icon: 'https://currencyfreaks.com/photos/flags/storj.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'CHF', currencyName: 'Swiss Franc', icon: 'https://currencyfreaks.com/photos/flags/chf.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 28]', available_in_historical_data_till: '2022-10-14', countryCode: 'CH', countryName: 'Switzerland',
}, {
  currencyCode: 'HRK', currencyName: 'Croatian Kuna', icon: 'https://currencyfreaks.com/photos/flags/hrk.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'HR', countryName: 'Croatia',
}, {
  currencyCode: 'RARI', currencyName: 'Rarible', icon: 'https://currencyfreaks.com/photos/flags/rari.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'DJF', currencyName: 'Djibouti Franc', icon: 'https://currencyfreaks.com/photos/flags/djf.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'DJ', countryName: 'Djibouti',
}, {
  currencyCode: 'RARE', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/rare.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 8, 1]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'PAX', currencyName: 'Paxos Standard Token', icon: 'https://currencyfreaks.com/photos/flags/pax.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 3, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'VND', currencyName: 'Vietnamese Dong', icon: 'https://currencyfreaks.com/photos/flags/vnd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'VN', countryName: 'Vietnam',
}, {
  currencyCode: 'CHZ', currencyName: 'Chiliz', icon: 'https://currencyfreaks.com/photos/flags/chz.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'KYD', currencyName: 'Cayman Islands Dollar', icon: 'https://currencyfreaks.com/photos/flags/kyd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'KY', countryName: 'Cayman Islands',
}, {
  currencyCode: 'XRP', currencyName: 'Ripple', icon: 'https://currencyfreaks.com/photos/flags/xrp.png', status: 'AVAILABLE', available_in_historical_data_from: '[2014, 8, 11]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'JASMY', currencyName: 'Jasmy', icon: 'https://currencyfreaks.com/photos/flags/jasmy.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'SHP', currencyName: 'Saint Helena Pound', icon: 'https://currencyfreaks.com/photos/flags/shp.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'SH', countryName: 'Saint Helena',
}, {
  currencyCode: 'INDEX', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/index.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 8]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'TJS', currencyName: 'Tajikistani Somoni', icon: 'https://currencyfreaks.com/photos/flags/tjs.png', status: 'AVAILABLE', available_in_historical_data_from: '[2011, 9, 12]', available_in_historical_data_till: '2022-10-14', countryCode: 'TJ', countryName: 'Tajikistan',
}, {
  currencyCode: 'AED', currencyName: 'UAE Dirham', icon: 'https://currencyfreaks.com/photos/flags/aed.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'AE', countryName: 'United Arab Emirates',
}, {
  currencyCode: 'FIDA', currencyName: 'Bonfida', icon: 'https://currencyfreaks.com/photos/flags/fida.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'SAND', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/sand.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 25]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'DKK', currencyName: 'Danish Krone', icon: 'https://currencyfreaks.com/photos/flags/dkk.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 28]', available_in_historical_data_till: '2022-10-14', countryCode: 'DK', countryName: 'Denmark',
}, {
  currencyCode: 'WCFG', currencyName: 'Wrapped Centrifuge', icon: 'https://currencyfreaks.com/photos/flags/wcfg.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ZWD', currencyName: 'Zimbabwe Dollar', icon: 'https://currencyfreaks.com/photos/flags/zwd.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 4, 25]', available_in_historical_data_till: '2022-10-14', countryCode: 'ZWE', countryName: 'Republic of Zimbabwe',
}, {
  currencyCode: 'OCEAN', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/ocean.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 9, 7]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'BGN', currencyName: 'Bulgarian Lev', icon: 'https://currencyfreaks.com/photos/flags/bgn.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 8, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'BG', countryName: 'Bulgaria',
}, {
  currencyCode: 'UMA', currencyName: 'Universal Market Access', icon: 'https://currencyfreaks.com/photos/flags/uma.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'FOX', currencyName: 'Shapeshift FOX Token', icon: 'https://currencyfreaks.com/photos/flags/fox.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ZWL', currencyName: 'Zimbabwean Dollar', icon: 'https://currencyfreaks.com/photos/flags/zwl.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 3, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'ZW', countryName: 'Zimbabwe',
}, {
  currencyCode: 'HTG', currencyName: 'Haitian Gourde', icon: 'https://currencyfreaks.com/photos/flags/htg.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'HT', countryName: 'Haiti',
}, {
  currencyCode: 'RGT', currencyName: 'Rari Governance Token', icon: 'https://currencyfreaks.com/photos/flags/rgt.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'BHD', currencyName: 'Bahraini Dinar', icon: 'https://currencyfreaks.com/photos/flags/bhd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'BH', countryName: 'Bahrain',
}, {
  currencyCode: 'ENJ', currencyName: 'Enjin Coin', icon: 'https://currencyfreaks.com/photos/flags/enj.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'COVAL', currencyName: 'COVAL', icon: 'https://currencyfreaks.com/photos/flags/coval.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'CGLD', currencyName: 'Celo Gold', icon: 'https://currencyfreaks.com/photos/flags/cgld.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'KZT', currencyName: 'Tenge', icon: 'https://currencyfreaks.com/photos/flags/kzt.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'KZ', countryName: 'Kazakhstan',
}, {
  currencyCode: 'YFII', currencyName: 'DFI.Money', icon: 'https://currencyfreaks.com/photos/flags/yfii.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'GRT', currencyName: 'The Graph', icon: 'https://currencyfreaks.com/photos/flags/grt.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'AFN', currencyName: 'Afghani', icon: 'https://currencyfreaks.com/photos/flags/afn.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'AF', countryName: 'Afghanistan',
}, {
  currencyCode: 'ENS', currencyName: 'Ethereum Name Service', icon: 'https://currencyfreaks.com/photos/flags/ens.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'UNI', currencyName: 'Uniswap', icon: 'https://currencyfreaks.com/photos/flags/uni.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'FX', currencyName: 'Function X', icon: 'https://currencyfreaks.com/photos/flags/fx.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ETH_m', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/eth_m.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 9, 6]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'XTS', currencyName: 'Xaviera Techno Solutions', icon: 'https://currencyfreaks.com/photos/flags/xts.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'HUF', currencyName: 'Forint', icon: 'https://currencyfreaks.com/photos/flags/huf.png', status: 'AVAILABLE', available_in_historical_data_from: '[1985, 10, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'HU', countryName: 'Hungary',
}, {
  currencyCode: 'BIF', currencyName: 'Burundian Franc', icon: 'https://currencyfreaks.com/photos/flags/bif.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'BI', countryName: 'Burundi',
}, {
  currencyCode: 'XTZ', currencyName: 'Tezos', icon: 'https://currencyfreaks.com/photos/flags/xtz.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'AURORA', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/aurora.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 8, 30]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'EOS', currencyName: 'EOS', icon: 'https://currencyfreaks.com/photos/flags/eos.png', status: 'AVAILABLE', available_in_historical_data_from: '[2017, 6, 26]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'GST', currencyName: 'Green Satoshi Token', icon: 'https://currencyfreaks.com/photos/flags/gst.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 9]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'FORT', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/fort.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 15]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'SWFTC', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/swftc.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 7, 20]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'BIT', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/bit.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 6]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'NAD', currencyName: 'Namibia Dollar', icon: 'https://currencyfreaks.com/photos/flags/nad.png', status: 'AVAILABLE', available_in_historical_data_from: '[2009, 9, 28]', available_in_historical_data_till: '2022-10-14', countryCode: 'NA', countryName: 'Namibia',
}, {
  currencyCode: 'SKL', currencyName: 'SKALE Network', icon: 'https://currencyfreaks.com/photos/flags/skl.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'GTC', currencyName: 'Gitcoin', icon: 'https://currencyfreaks.com/photos/flags/gtc.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'PEN', currencyName: 'Sol', icon: 'https://currencyfreaks.com/photos/flags/pen.png', status: 'AVAILABLE', available_in_historical_data_from: '[1991, 2, 4]', available_in_historical_data_till: '2022-10-14', countryCode: 'PE', countryName: 'Peru',
}, {
  currencyCode: 'WST', currencyName: 'Samoan Tālā', icon: 'https://currencyfreaks.com/photos/flags/wst.png', status: 'AVAILABLE', available_in_historical_data_from: '[2014, 12, 3]', available_in_historical_data_till: '2022-10-14', countryCode: 'WS', countryName: 'Samoa',
}, {
  currencyCode: 'SHPING', currencyName: 'Shping Coin', icon: 'https://currencyfreaks.com/photos/flags/shping.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'TMT', currencyName: 'Turkmenistan Manat', icon: 'https://currencyfreaks.com/photos/flags/tmt.png', status: 'AVAILABLE', available_in_historical_data_from: '[2010, 4, 9]', available_in_historical_data_till: '2022-10-14', countryCode: 'TM', countryName: 'Turkmenistan',
}, {
  currencyCode: 'CLF', currencyName: 'Chilean Unit of Account (UF)', icon: 'https://currencyfreaks.com/photos/flags/clf.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 3, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'CL', countryName: 'Chile',
}, {
  currencyCode: 'EUROC', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/euroc.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 8, 1]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'GTQ', currencyName: 'Guatemalan Quetzal', icon: 'https://currencyfreaks.com/photos/flags/gtq.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'GT', countryName: 'Guatemala',
}, {
  currencyCode: 'CLP', currencyName: 'Chilean Peso', icon: 'https://currencyfreaks.com/photos/flags/clp.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 29]', available_in_historical_data_till: '2022-10-14', countryCode: 'CL', countryName: 'Chile',
}, {
  currencyCode: 'DNT', currencyName: 'District0x', icon: 'https://currencyfreaks.com/photos/flags/dnt.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'TND', currencyName: 'Tunisian Dinar', icon: 'https://currencyfreaks.com/photos/flags/tnd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'TN', countryName: 'Tunisia',
}, {
  currencyCode: 'CLV', currencyName: 'Clover Finance', icon: 'https://currencyfreaks.com/photos/flags/clv.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'SLE', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/sle.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 7, 13]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'FLOW', currencyName: 'Flow', icon: 'https://currencyfreaks.com/photos/flags/flow.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'UPI', currencyName: 'Pawtocol', icon: 'https://currencyfreaks.com/photos/flags/upi.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'SLL', currencyName: 'Sierra Leonean Leone', icon: 'https://currencyfreaks.com/photos/flags/sll.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'SL', countryName: 'Sierra Leone',
}, {
  currencyCode: 'DOP', currencyName: 'Dominican Peso', icon: 'https://currencyfreaks.com/photos/flags/dop.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'DO', countryName: 'Dominican Republic',
}, {
  currencyCode: 'DOT', currencyName: 'Polkadot', icon: 'https://currencyfreaks.com/photos/flags/dot.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: '1INCH', currencyName: '1inch', icon: 'https://currencyfreaks.com/photos/flags/1inch.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'MAD', currencyName: 'Moroccan Dirham', icon: 'https://currencyfreaks.com/photos/flags/mad.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'EH', countryName: 'Western Sahara',
}, {
  currencyCode: 'TOP', currencyName: 'Tongan Paʻanga', icon: 'https://currencyfreaks.com/photos/flags/top.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'TO', countryName: 'Tonga',
}, {
  currencyCode: 'PGK', currencyName: 'Papua New Guinean Kina', icon: 'https://currencyfreaks.com/photos/flags/pgk.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'PG', countryName: 'Papua New Guinea',
}, {
  currencyCode: 'GYEN', currencyName: 'GYEN', icon: 'https://currencyfreaks.com/photos/flags/gyen.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'UNFI', currencyName: 'Unifi Protocol DAO', icon: 'https://currencyfreaks.com/photos/flags/unfi.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'CNH', currencyName: 'Chinese Yuan Renminbi', icon: 'https://currencyfreaks.com/photos/flags/cnh.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'CN', countryName: "People's Republic of China",
}, {
  currencyCode: 'NCT', currencyName: 'Polyswarm', icon: 'https://currencyfreaks.com/photos/flags/nct.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'WLUNA', currencyName: 'Wrapped LUNA', icon: 'https://currencyfreaks.com/photos/flags/wluna.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'POWR', currencyName: 'Powerledger', icon: 'https://currencyfreaks.com/photos/flags/powr.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ERN', currencyName: 'Eritrean Nakfa', icon: 'https://currencyfreaks.com/photos/flags/ern.png', status: 'AVAILABLE', available_in_historical_data_from: '[2011, 9, 12]', available_in_historical_data_till: '2022-10-14', countryCode: 'ER', countryName: 'Eritrea',
}, {
  currencyCode: 'RLC', currencyName: 'iExec RLC', icon: 'https://currencyfreaks.com/photos/flags/rlc.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'CNY', currencyName: 'Yuan Renminbi', icon: 'https://currencyfreaks.com/photos/flags/cny.png', status: 'AVAILABLE', available_in_historical_data_from: '[1985, 10, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'CN', countryName: 'China',
}, {
  currencyCode: 'ATOM', currencyName: 'Cosmos', icon: 'https://currencyfreaks.com/photos/flags/atom.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'QUICK', currencyName: 'QuickSwap', icon: 'https://currencyfreaks.com/photos/flags/quick.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'BLZ', currencyName: 'Bluzelle', icon: 'https://currencyfreaks.com/photos/flags/blz.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'BOBA', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/boba.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 29]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'TONE', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/tone.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 8, 1]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'BMD', currencyName: 'Bermudian Dollar', icon: 'https://currencyfreaks.com/photos/flags/bmd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'BM', countryName: 'Bermuda',
}, {
  currencyCode: 'SNT', currencyName: 'Status Network', icon: 'https://currencyfreaks.com/photos/flags/snt.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'PHP', currencyName: 'Philippine Piso', icon: 'https://currencyfreaks.com/photos/flags/php.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 29]', available_in_historical_data_till: '2022-10-14', countryCode: 'PH', countryName: 'Philippines',
}, {
  currencyCode: 'SNX', currencyName: 'Synthetix Network', icon: 'https://currencyfreaks.com/photos/flags/snx.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'RLY', currencyName: 'Rally', icon: 'https://currencyfreaks.com/photos/flags/rly.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'COP', currencyName: 'Colombian Peso', icon: 'https://currencyfreaks.com/photos/flags/cop.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 29]', available_in_historical_data_till: '2022-10-14', countryCode: 'CO', countryName: 'Colombia',
}, {
  currencyCode: 'USD', currencyName: 'US Dollar', icon: 'https://currencyfreaks.com/photos/flags/usd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 28]', available_in_historical_data_till: '2022-10-14', countryCode: 'AS', countryName: 'American Samoa',
}, {
  currencyCode: 'API3', currencyName: 'API3', icon: 'https://currencyfreaks.com/photos/flags/api3.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'HOPR', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/hopr.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 21]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'ROSE', currencyName: 'Oasis Network', icon: 'https://currencyfreaks.com/photos/flags/rose.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 4, 25]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'XYO', currencyName: 'XYO Network', icon: 'https://currencyfreaks.com/photos/flags/xyo.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'SOL', currencyName: 'Solana', icon: 'https://currencyfreaks.com/photos/flags/sol.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ETB', currencyName: 'Ethiopian Birr', icon: 'https://currencyfreaks.com/photos/flags/etb.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'ET', countryName: 'Ethiopia',
}, {
  currencyCode: 'ETC', currencyName: 'Ethereum Classic', icon: 'https://currencyfreaks.com/photos/flags/etc.png', status: 'AVAILABLE', available_in_historical_data_from: '[2016, 7, 25]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'SOS', currencyName: 'Somali Shilling', icon: 'https://currencyfreaks.com/photos/flags/sos.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'SO', countryName: 'Somalia',
}, {
  currencyCode: 'VUV', currencyName: 'Vanuatu Vatu', icon: 'https://currencyfreaks.com/photos/flags/vuv.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'LAK', currencyName: 'Lao Kip', icon: 'https://currencyfreaks.com/photos/flags/lak.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'LA', countryName: 'Laos',
}, {
  currencyCode: 'OGN', currencyName: 'Origin Token', icon: 'https://currencyfreaks.com/photos/flags/ogn.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'UST', currencyName: 'TerraUSD', icon: 'https://currencyfreaks.com/photos/flags/ust.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'CELR', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/celr.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 8, 15]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'ETH', currencyName: 'Ethereum', icon: 'https://currencyfreaks.com/photos/flags/eth.png', status: 'AVAILABLE', available_in_historical_data_from: '[2015, 8, 3]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'BND', currencyName: 'Brunei Dollar', icon: 'https://currencyfreaks.com/photos/flags/bnd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'BN', countryName: 'Brunei',
}, {
  currencyCode: 'AUCTION', currencyName: 'Bounce Token AUCTION', icon: 'https://currencyfreaks.com/photos/flags/auction.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'BADGER', currencyName: 'Badger DAO', icon: 'https://currencyfreaks.com/photos/flags/badger.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ALL', currencyName: 'Lek', icon: 'https://currencyfreaks.com/photos/flags/all.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'AL', countryName: 'Albania',
}, {
  currencyCode: 'HIGH', currencyName: 'Highstreet', icon: 'https://currencyfreaks.com/photos/flags/high.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'TRB', currencyName: 'Tellor', icon: 'https://currencyfreaks.com/photos/flags/trb.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'BNT', currencyName: 'Bancor Network', icon: 'https://currencyfreaks.com/photos/flags/bnt.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'GYD', currencyName: 'Guyana Dollar', icon: 'https://currencyfreaks.com/photos/flags/gyd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1985, 1, 28]', available_in_historical_data_till: '2022-10-14', countryCode: 'GY', countryName: 'Guyana',
}, {
  currencyCode: 'BOB', currencyName: 'Bolivian Boliviano', icon: 'https://currencyfreaks.com/photos/flags/bob.png', status: 'AVAILABLE', available_in_historical_data_from: '[1993, 9, 20]', available_in_historical_data_till: '2022-10-14', countryCode: 'BO', countryName: 'Bolivia',
}, {
  currencyCode: 'MDL', currencyName: 'Moldovan Leu', icon: 'https://currencyfreaks.com/photos/flags/mdl.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 8, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'MD', countryName: 'Moldova',
}, {
  currencyCode: 'TRU', currencyName: 'TrueFi', icon: 'https://currencyfreaks.com/photos/flags/tru.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'AMD', currencyName: 'Armenian Dram', icon: 'https://currencyfreaks.com/photos/flags/amd.png', status: 'AVAILABLE', available_in_historical_data_from: '[2009, 9, 28]', available_in_historical_data_till: '2022-10-14', countryCode: 'AM', countryName: 'Armenia',
}, {
  currencyCode: 'DREP', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/drep.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 22]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'TRY', currencyName: 'Turkish Lira', icon: 'https://currencyfreaks.com/photos/flags/try.png', status: 'AVAILABLE', available_in_historical_data_from: '[2006, 8, 24]', available_in_historical_data_till: '2022-10-14', countryCode: 'TR', countryName: 'Turkey',
}, {
  currencyCode: 'LBP', currencyName: 'Lebanese Pound', icon: 'https://currencyfreaks.com/photos/flags/lbp.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'LB', countryName: 'Lebanon',
}, {
  currencyCode: 'MDT', currencyName: 'Measurable Data Token', icon: 'https://currencyfreaks.com/photos/flags/mdt.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'AERGO', currencyName: 'Aergo', icon: 'https://currencyfreaks.com/photos/flags/aergo.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'EUR', currencyName: 'Euro', icon: 'https://currencyfreaks.com/photos/flags/eur.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 12, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'AD', countryName: 'Andorra',
}, {
  currencyCode: 'AMP', currencyName: 'Amp', icon: 'https://currencyfreaks.com/photos/flags/amp.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ORCA', currencyName: 'Orca', icon: 'https://currencyfreaks.com/photos/flags/orca.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'BUSD_m', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/busd_m.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 9, 6]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'RON', currencyName: 'Romanian Leu', icon: 'https://currencyfreaks.com/photos/flags/ron.png', status: 'AVAILABLE', available_in_historical_data_from: '[2008, 1, 25]', available_in_historical_data_till: '2022-10-14', countryCode: 'RO', countryName: 'Romania',
}, {
  currencyCode: 'NGN', currencyName: 'Nigerian Naira', icon: 'https://currencyfreaks.com/photos/flags/ngn.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 29]', available_in_historical_data_till: '2022-10-14', countryCode: 'NG', countryName: 'Nigeria',
}, {
  currencyCode: 'CRC', currencyName: 'Costa Rican Colon', icon: 'https://currencyfreaks.com/photos/flags/crc.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'CR', countryName: 'Costa Rica',
}, {
  currencyCode: 'PKR', currencyName: 'Pakistan Rupee', icon: 'https://currencyfreaks.com/photos/flags/pkr.png', status: 'AVAILABLE', available_in_historical_data_from: '[1985, 10, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'PK', countryName: 'Pakistan',
}, {
  currencyCode: 'ANG', currencyName: 'Netherlands Antillean Guilder', icon: 'https://currencyfreaks.com/photos/flags/ang.png', status: 'AVAILABLE', available_in_historical_data_from: '[1985, 10, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'CW', countryName: 'Curacao',
}, {
  currencyCode: 'SPELL', currencyName: 'Spell Token', icon: 'https://currencyfreaks.com/photos/flags/spell.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'PUNDIX', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/pundix.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 9, 19]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'LCX', currencyName: 'LCX', icon: 'https://currencyfreaks.com/photos/flags/lcx.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'CRO', currencyName: 'Crypto.com Chain', icon: 'https://currencyfreaks.com/photos/flags/cro.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'PLA', currencyName: 'PlayDapp', icon: 'https://currencyfreaks.com/photos/flags/pla.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'SRD', currencyName: 'Surinamese Dollar', icon: 'https://currencyfreaks.com/photos/flags/srd.png', status: 'AVAILABLE', available_in_historical_data_from: '[2005, 9, 6]', available_in_historical_data_till: '2022-10-14', countryCode: 'SR', countryName: 'Suriname',
}, {
  currencyCode: 'TTD', currencyName: 'Trinidad and Tobago Dollar', icon: 'https://currencyfreaks.com/photos/flags/ttd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1985, 10, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'TT', countryName: 'Trinidad and Tobago',
}, {
  currencyCode: 'CRV', currencyName: 'Curve DAO Token', icon: 'https://currencyfreaks.com/photos/flags/crv.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'NU', currencyName: 'Bhutanese Ngultrum', icon: 'https://currencyfreaks.com/photos/flags/nu.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'BT', countryName: 'Kingdom of Bhutan',
}, {
  currencyCode: 'AOA', currencyName: 'Angolan Kwanza', icon: 'https://currencyfreaks.com/photos/flags/aoa.png', status: 'AVAILABLE', available_in_historical_data_from: '[1995, 6, 29]', available_in_historical_data_till: '2022-10-14', countryCode: 'AO', countryName: 'Angola',
}, {
  currencyCode: 'PLN', currencyName: 'Zloty', icon: 'https://currencyfreaks.com/photos/flags/pln.png', status: 'AVAILABLE', available_in_historical_data_from: '[1985, 10, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'PL', countryName: 'Poland',
}, {
  currencyCode: 'QNT', currencyName: 'Quant', icon: 'https://currencyfreaks.com/photos/flags/qnt.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ALICE', currencyName: 'My Neighbor Alice', icon: 'https://currencyfreaks.com/photos/flags/alice.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'PLU', currencyName: 'Pluton', icon: 'https://currencyfreaks.com/photos/flags/plu.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'MUSD', currencyName: 'mStableUSD', icon: 'https://currencyfreaks.com/photos/flags/musd.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'MUSE', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/muse.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 22]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'OP', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/op.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 31]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'MGA', currencyName: 'Malagasy Ariary', icon: 'https://currencyfreaks.com/photos/flags/mga.png', status: 'AVAILABLE', available_in_historical_data_from: '[2009, 9, 28]', available_in_historical_data_till: '2022-10-14', countryCode: 'MG', countryName: 'Madagascar',
}, {
  currencyCode: 'SSP', currencyName: 'South Sudanese Pound', icon: 'https://currencyfreaks.com/photos/flags/ssp.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'SS', countryName: 'Republic of South Sudan',
}, {
  currencyCode: 'NIO', currencyName: 'Nicaraguan Córdoba', icon: 'https://currencyfreaks.com/photos/flags/nio.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'NI', countryName: 'Nicaragua',
}, {
  currencyCode: 'APE', currencyName: 'ApeCoin', icon: 'https://currencyfreaks.com/photos/flags/ape.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'USDC_m', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/usdc_m.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 9, 6]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'ETH2', currencyName: 'Ethereum 2.0', icon: 'https://currencyfreaks.com/photos/flags/eth2.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'BUSD', currencyName: 'Binance USD', icon: 'https://currencyfreaks.com/photos/flags/busd.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 3, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ARPA', currencyName: 'ARPA Chain', icon: 'https://currencyfreaks.com/photos/flags/arpa.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'BRL', currencyName: 'Brazilian Real', icon: 'https://currencyfreaks.com/photos/flags/brl.png', status: 'AVAILABLE', available_in_historical_data_from: '[1996, 4, 1]', available_in_historical_data_till: '2022-10-14', countryCode: 'BR', countryName: 'Brazil',
}, {
  currencyCode: 'MCO2', currencyName: 'Moss Carbon Credit', icon: 'https://currencyfreaks.com/photos/flags/mco2.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ALCX', currencyName: 'Alchemix', icon: 'https://currencyfreaks.com/photos/flags/alcx.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: '00', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/00.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 10, 11]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'MATIC', currencyName: 'MATIC Network Token', icon: 'https://currencyfreaks.com/photos/flags/matic.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'STD', currencyName: 'São Tomé and Príncipe Dobra', icon: 'https://currencyfreaks.com/photos/flags/std.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 8, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'CTX', currencyName: 'Cryptex Finance', icon: 'https://currencyfreaks.com/photos/flags/ctx.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'STG', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/stg.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 8, 3]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'PNG', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/png.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 10, 5]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'IOTX', currencyName: 'IoTeX', icon: 'https://currencyfreaks.com/photos/flags/iotx.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'SHIB', currencyName: 'Shiba Inu', icon: 'https://currencyfreaks.com/photos/flags/shib.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ZAR', currencyName: 'Rand', icon: 'https://currencyfreaks.com/photos/flags/zar.png', status: 'AVAILABLE', available_in_historical_data_from: '[1985, 10, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'ZA', countryName: 'South Africa',
}, {
  currencyCode: 'STN', currencyName: 'São Tomé and Príncipe Dobra', icon: 'https://currencyfreaks.com/photos/flags/stn.png', status: 'AVAILABLE', available_in_historical_data_from: '[2020, 12, 15]', available_in_historical_data_till: '2022-10-14', countryCode: 'ST', countryName: 'São Tomé and Príncipe',
}, {
  currencyCode: 'CUC', currencyName: 'Cuban Convertible Peso', icon: 'https://currencyfreaks.com/photos/flags/cuc.png', status: 'AVAILABLE', available_in_historical_data_from: '[2019, 2, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'CU', countryName: 'Cuba',
}, {
  currencyCode: 'BSD', currencyName: 'Bahamian Dollar', icon: 'https://currencyfreaks.com/photos/flags/bsd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'BS', countryName: 'Bahamas',
}, {
  currencyCode: 'STX', currencyName: 'Stacks', icon: 'https://currencyfreaks.com/photos/flags/stx.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'CUP', currencyName: 'Cuban Peso', icon: 'https://currencyfreaks.com/photos/flags/cup.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'CU', countryName: 'Cuba',
}, {
  currencyCode: 'TWD', currencyName: 'New Taiwan Dollar', icon: 'https://currencyfreaks.com/photos/flags/twd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1985, 10, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'TW', countryName: 'Taiwan',
}, {
  currencyCode: 'RSD', currencyName: 'Serbian Dinar', icon: 'https://currencyfreaks.com/photos/flags/rsd.png', status: 'AVAILABLE', available_in_historical_data_from: '[2004, 2, 27]', available_in_historical_data_till: '2022-10-14', countryCode: 'RS', countryName: 'Serbia',
}, {
  currencyCode: 'BSV', currencyName: 'Bitcoin SV', icon: 'https://currencyfreaks.com/photos/flags/bsv.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'OMG', currencyName: 'Omisego', icon: 'https://currencyfreaks.com/photos/flags/omg.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'BAND', currencyName: 'Band Protocol', icon: 'https://currencyfreaks.com/photos/flags/band.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'BTC', currencyName: 'Bitcoin', icon: 'https://currencyfreaks.com/photos/flags/btc.png', status: 'AVAILABLE', available_in_historical_data_from: '[2013, 1, 7]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'NKN', currencyName: 'NKN', icon: 'https://currencyfreaks.com/photos/flags/nkn.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'UYU', currencyName: 'Peso Uruguayo', icon: 'https://currencyfreaks.com/photos/flags/uyu.png', status: 'AVAILABLE', available_in_historical_data_from: '[1993, 3, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'UY', countryName: 'Uruguay',
}, {
  currencyCode: 'CVC', currencyName: 'Civic', icon: 'https://currencyfreaks.com/photos/flags/cvc.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'CVE', currencyName: 'Cabo Verde Escudo', icon: 'https://currencyfreaks.com/photos/flags/cve.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 8, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'CV', countryName: 'Cape Verde',
}, {
  currencyCode: 'OMR', currencyName: 'Rial Omani', icon: 'https://currencyfreaks.com/photos/flags/omr.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'OM', countryName: 'Oman',
}, {
  currencyCode: 'MIR', currencyName: 'Mirror Protocol', icon: 'https://currencyfreaks.com/photos/flags/mir.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'KES', currencyName: 'Kenyan Shilling', icon: 'https://currencyfreaks.com/photos/flags/kes.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'KE', countryName: 'Kenya',
}, {
  currencyCode: 'LOKA', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/loka.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 8, 3]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'BTN', currencyName: 'Bhutanese Ngultrum', icon: 'https://currencyfreaks.com/photos/flags/btn.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'BT', countryName: 'Bhutan',
}, {
  currencyCode: 'SVC', currencyName: 'Salvadoran Colón', icon: 'https://currencyfreaks.com/photos/flags/svc.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'SV', countryName: 'El Salvador',
}, {
  currencyCode: 'ARS', currencyName: 'Argentine Peso', icon: 'https://currencyfreaks.com/photos/flags/ars.png', status: 'AVAILABLE', available_in_historical_data_from: '[1992, 1, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'AR', countryName: 'Argentina',
}, {
  currencyCode: 'CVX', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/cvx.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 9, 7]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'ANKR', currencyName: 'Ankr Network', icon: 'https://currencyfreaks.com/photos/flags/ankr.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'SUSHI', currencyName: 'SushiSwap', icon: 'https://currencyfreaks.com/photos/flags/sushi.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ALGO', currencyName: 'Algorand', icon: 'https://currencyfreaks.com/photos/flags/algo.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'SYLO', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/sylo.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 7, 20]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'UZS', currencyName: 'Uzbekistan Sum', icon: 'https://currencyfreaks.com/photos/flags/uzs.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'UZ', countryName: 'Uzbekistan',
}, {
  currencyCode: 'WBTC', currencyName: 'Wrapped Bitcoin', icon: 'https://currencyfreaks.com/photos/flags/wbtc.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 3, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'DYP', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/dyp.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 21]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'ASM', currencyName: 'Assemble Protocol', icon: 'https://currencyfreaks.com/photos/flags/asm.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'RUB', currencyName: 'Russian Ruble', icon: 'https://currencyfreaks.com/photos/flags/rub.png', status: 'AVAILABLE', available_in_historical_data_from: '[1985, 10, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'RU', countryName: 'Russia',
}, {
  currencyCode: 'AST', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/ast.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 27]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'MANA', currencyName: 'Mana Coin Decentraland', icon: 'https://currencyfreaks.com/photos/flags/mana.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'MKD', currencyName: 'Macedonian Denar', icon: 'https://currencyfreaks.com/photos/flags/mkd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1995, 6, 1]', available_in_historical_data_till: '2022-10-14', countryCode: 'MK', countryName: 'Macedonia',
}, {
  currencyCode: 'ATA', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/ata.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 13]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'DZD', currencyName: 'Algerian Dinar', icon: 'https://currencyfreaks.com/photos/flags/dzd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'DZ', countryName: 'Algeria',
}, {
  currencyCode: 'QSP', currencyName: 'Quantstamp', icon: 'https://currencyfreaks.com/photos/flags/qsp.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'NMR', currencyName: 'Numeraire Network', icon: 'https://currencyfreaks.com/photos/flags/nmr.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'JEP', currencyName: 'Jersey Pound', icon: 'https://currencyfreaks.com/photos/flags/jep.png', status: 'AVAILABLE', available_in_historical_data_from: '[2019, 2, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'JE', countryName: 'Jersey',
}, {
  currencyCode: 'MKR', currencyName: 'Maker', icon: 'https://currencyfreaks.com/photos/flags/mkr.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'KGS', currencyName: 'Kyrgyzstani Som', icon: 'https://currencyfreaks.com/photos/flags/kgs.png', status: 'AVAILABLE', available_in_historical_data_from: '[2011, 9, 12]', available_in_historical_data_till: '2022-10-14', countryCode: 'KG', countryName: 'Kyrgyzstan',
}, {
  currencyCode: 'ICP', currencyName: 'Internet Computer', icon: 'https://currencyfreaks.com/photos/flags/icp.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ZEC', currencyName: 'ZCash', icon: 'https://currencyfreaks.com/photos/flags/zec.png', status: 'AVAILABLE', available_in_historical_data_from: '[2016, 10, 24]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'XAF', currencyName: 'Central African CFA franc', icon: 'https://currencyfreaks.com/photos/flags/xaf.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 29]', available_in_historical_data_till: '2022-10-14', countryCode: 'CF', countryName: 'Central African Republic',
}, {
  currencyCode: 'NEST', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/nest.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 7, 25]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'XAG', currencyName: 'Silver (troy ounce)', icon: 'https://currencyfreaks.com/photos/flags/xag.png', status: 'AVAILABLE', available_in_historical_data_from: '[2020, 4, 20]', available_in_historical_data_till: '2022-10-14', countryCode: 'Metal', countryName: 'Global',
}, {
  currencyCode: 'ZEN', currencyName: 'Horizen', icon: 'https://currencyfreaks.com/photos/flags/zen.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'DESO', currencyName: 'Decentralized Social', icon: 'https://currencyfreaks.com/photos/flags/deso.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'LOOM', currencyName: 'Loom Network', icon: 'https://currencyfreaks.com/photos/flags/loom.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'DOGE', currencyName: 'Dogecoin', icon: 'https://currencyfreaks.com/photos/flags/doge.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 3, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'HBAR', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/hbar.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 9, 12]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'PRO', currencyName: 'Propy', icon: 'https://currencyfreaks.com/photos/flags/pro.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'TZS', currencyName: 'Tanzanian Shilling', icon: 'https://currencyfreaks.com/photos/flags/tzs.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'TZ', countryName: 'Tanzania',
}, {
  currencyCode: 'XAU', currencyName: 'Gold (troy ounce)', icon: 'https://currencyfreaks.com/photos/flags/xau.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 29]', available_in_historical_data_till: '2022-10-14', countryCode: 'Metal', countryName: 'Global',
}, {
  currencyCode: 'MLN', currencyName: 'Enzyme', icon: 'https://currencyfreaks.com/photos/flags/mln.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'PRQ', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/prq.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 21]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'AUD', currencyName: 'Australian Dollar', icon: 'https://currencyfreaks.com/photos/flags/aud.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 28]', available_in_historical_data_till: '2022-10-14', countryCode: 'AU', countryName: 'Australia',
}, {
  currencyCode: 'KHR', currencyName: 'Riel', icon: 'https://currencyfreaks.com/photos/flags/khr.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'KH', countryName: 'Cambodia',
}, {
  currencyCode: 'IDR', currencyName: 'Indonesian Rupiah', icon: 'https://currencyfreaks.com/photos/flags/idr.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'ID', countryName: 'Indonesia',
}, {
  currencyCode: 'XBA', currencyName: 'XBank', icon: 'https://currencyfreaks.com/photos/flags/xba.png', status: 'DEPRECIATED', available_in_historical_data_from: '[2022, 4, 25]', available_in_historical_data_till: '[2022, 8, 21]', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'CTSI', currencyName: 'Cartesi', icon: 'https://currencyfreaks.com/photos/flags/ctsi.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'BWP', currencyName: 'Botswana Pula', icon: 'https://currencyfreaks.com/photos/flags/bwp.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'BW', countryName: 'Botswana',
}, {
  currencyCode: 'RWF', currencyName: 'Rwanda Franc', icon: 'https://currencyfreaks.com/photos/flags/rwf.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 29]', available_in_historical_data_till: '2022-10-14', countryCode: 'RW', countryName: 'Rwanda',
}, {
  currencyCode: 'C98', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/c98.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 6]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'SYN', currencyName: 'Synapse', icon: 'https://currencyfreaks.com/photos/flags/syn.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'MMK', currencyName: 'Burmese Kyat', icon: 'https://currencyfreaks.com/photos/flags/mmk.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'MM', countryName: 'Myanmar',
}, {
  currencyCode: 'NOK', currencyName: 'Norwegian Krone', icon: 'https://currencyfreaks.com/photos/flags/nok.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 28]', available_in_historical_data_till: '2022-10-14', countryCode: 'BV', countryName: 'Bouvet Island',
}, {
  currencyCode: 'SYP', currencyName: 'Syrian Pound', icon: 'https://currencyfreaks.com/photos/flags/syp.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'SY', countryName: 'Syria',
}, {
  currencyCode: 'CRPT', currencyName: 'Crypterium', icon: 'https://currencyfreaks.com/photos/flags/crpt.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'LKR', currencyName: 'Sri Lanka Rupee', icon: 'https://currencyfreaks.com/photos/flags/lkr.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'LK', countryName: 'Sri Lanka',
}, {
  currencyCode: 'GAL', currencyName: 'Project Galaxy', icon: 'https://currencyfreaks.com/photos/flags/gal.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 9]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'CZK', currencyName: 'Czech Koruna', icon: 'https://currencyfreaks.com/photos/flags/czk.png', status: 'AVAILABLE', available_in_historical_data_from: '[1985, 10, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'CZ', countryName: 'Czech Republic',
}, {
  currencyCode: 'XCD', currencyName: 'East Caribbean Dollar', icon: 'https://currencyfreaks.com/photos/flags/xcd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'AG', countryName: 'Antigua and Barbuda',
}, {
  currencyCode: 'AVT', currencyName: 'Aventus', icon: 'https://currencyfreaks.com/photos/flags/avt.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'XCN', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/xcn.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 27]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'SZL', currencyName: 'Swazi Lilangeni', icon: 'https://currencyfreaks.com/photos/flags/szl.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'SZ', countryName: 'Eswatini',
}, {
  currencyCode: 'YER', currencyName: 'Yemeni Rial', icon: 'https://currencyfreaks.com/photos/flags/yer.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'YE', countryName: 'Yemen',
}, {
  currencyCode: 'ORN', currencyName: 'Orion Protocol', icon: 'https://currencyfreaks.com/photos/flags/orn.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'MASK', currencyName: 'Mask Network', icon: 'https://currencyfreaks.com/photos/flags/mask.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'AWG', currencyName: 'Aruban Florin', icon: 'https://currencyfreaks.com/photos/flags/awg.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'AW', countryName: 'Aruba',
}, {
  currencyCode: 'NPR', currencyName: 'Nepalese Rupee', icon: 'https://currencyfreaks.com/photos/flags/npr.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'NP', countryName: 'Nepal',
}, {
  currencyCode: 'AAVE', currencyName: 'Aave', icon: 'https://currencyfreaks.com/photos/flags/aave.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'MNT', currencyName: 'Mongolian Tögrög', icon: 'https://currencyfreaks.com/photos/flags/mnt.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'MN', countryName: 'Mongolia',
}, {
  currencyCode: 'GBP', currencyName: 'Pound Sterling', icon: 'https://currencyfreaks.com/photos/flags/gbp.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 28]', available_in_historical_data_till: '2022-10-14', countryCode: 'GB', countryName: 'United Kingdom',
}, {
  currencyCode: 'BYN', currencyName: 'New Belarusian Ruble', icon: 'https://currencyfreaks.com/photos/flags/byn.png', status: 'AVAILABLE', available_in_historical_data_from: '[2016, 7, 1]', available_in_historical_data_till: '2022-10-14', countryCode: 'BY', countryName: 'Belarus',
}, {
  currencyCode: 'PERP', currencyName: 'Perpetual Protocol', icon: 'https://currencyfreaks.com/photos/flags/perp.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'BYR', currencyName: 'Belarusian Ruble', icon: 'https://currencyfreaks.com/photos/flags/byr.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 11, 30]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'GBX', currencyName: 'Penny Sterling', icon: 'https://currencyfreaks.com/photos/flags/gbx.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'UK', countryName: 'United Kingdom',
}, {
  currencyCode: 'BOND', currencyName: 'BarnBridge', icon: 'https://currencyfreaks.com/photos/flags/bond.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'YFI', currencyName: 'Yearn Finance', icon: 'https://currencyfreaks.com/photos/flags/yfi.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'XDR', currencyName: 'Special Drawing Rights', icon: 'https://currencyfreaks.com/photos/flags/xdr.png', status: 'AVAILABLE', available_in_historical_data_from: '[2020, 4, 20]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'LQTY', currencyName: 'Liquity', icon: 'https://currencyfreaks.com/photos/flags/lqty.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'TIME', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/time.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 22]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'BICO', currencyName: 'Biconomy', icon: 'https://currencyfreaks.com/photos/flags/bico.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'BZD', currencyName: 'Belize Dollar', icon: 'https://currencyfreaks.com/photos/flags/bzd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'BZ', countryName: 'Belize',
}, {
  currencyCode: 'MOP', currencyName: 'Macau Pataca', icon: 'https://currencyfreaks.com/photos/flags/mop.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'MO', countryName: 'Macao',
}, {
  currencyCode: 'MONA', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/mona.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 27]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'AXS', currencyName: 'Axie Infinity', icon: 'https://currencyfreaks.com/photos/flags/axs.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'TRAC', currencyName: 'OriginTrail', icon: 'https://currencyfreaks.com/photos/flags/trac.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'MPL', currencyName: 'Maple', icon: 'https://currencyfreaks.com/photos/flags/mpl.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'COMP', currencyName: 'Compound', icon: 'https://currencyfreaks.com/photos/flags/comp.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'WAMPL', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/wampl.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 8]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'OOKI', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/ooki.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 8, 29]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'DEXT', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/dext.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 22]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'FORTH', currencyName: 'Ampleforth Governance Token', icon: 'https://currencyfreaks.com/photos/flags/forth.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'KMF', currencyName: 'Comorian Franc', icon: 'https://currencyfreaks.com/photos/flags/kmf.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'KM', countryName: 'Comoros',
}, {
  currencyCode: 'SHIB_m', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/shib_m.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 9, 6]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'MATH', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/math.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 21]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'IDEX', currencyName: 'IDEX', icon: 'https://currencyfreaks.com/photos/flags/idex.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'MATIC_e', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/matic_e.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 9, 6]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'GEL', currencyName: 'Lari', icon: 'https://currencyfreaks.com/photos/flags/gel.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 8, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'GE', countryName: 'Georgia',
}, {
  currencyCode: 'AVAX', currencyName: 'Avalanche', icon: 'https://currencyfreaks.com/photos/flags/avax.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'AZN', currencyName: 'Azerbaijan Manat', icon: 'https://currencyfreaks.com/photos/flags/azn.png', status: 'AVAILABLE', available_in_historical_data_from: '[2011, 7, 15]', available_in_historical_data_till: '2022-10-14', countryCode: 'AZ', countryName: 'Azerbaijan',
}, {
  currencyCode: 'UAH', currencyName: 'Hryvnia', icon: 'https://currencyfreaks.com/photos/flags/uah.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 8, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'UA', countryName: 'Ukraine',
}, {
  currencyCode: 'KNC', currencyName: 'Kyber Network Crystals', icon: 'https://currencyfreaks.com/photos/flags/knc.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ALEPH', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/aleph.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 21]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'GFI', currencyName: 'Goldfinch', icon: 'https://currencyfreaks.com/photos/flags/gfi.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'MRO', currencyName: 'Mauritanian Ouguiya', icon: 'https://currencyfreaks.com/photos/flags/mro.png', status: 'DEPRECIATED', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '[2022, 6, 9]', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'LPT', currencyName: 'Livepeer (LPT)', icon: 'https://currencyfreaks.com/photos/flags/lpt.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'MRU', currencyName: 'Mauritanian Ouguiya', icon: 'https://currencyfreaks.com/photos/flags/mru.png', status: 'AVAILABLE', available_in_historical_data_from: '[2018, 1, 29]', available_in_historical_data_till: '2022-10-14', countryCode: 'MR', countryName: 'Mauritania',
}, {
  currencyCode: 'GODS', currencyName: 'Gods Unchained', icon: 'https://currencyfreaks.com/photos/flags/gods.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'PYG', currencyName: 'Paraguayan Guaraní', icon: 'https://currencyfreaks.com/photos/flags/pyg.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 29]', available_in_historical_data_till: '2022-10-14', countryCode: 'PY', countryName: 'Paraguay',
}, {
  currencyCode: 'JMD', currencyName: 'Jamaican Dollar', icon: 'https://currencyfreaks.com/photos/flags/jmd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'JM', countryName: 'Jamaica',
}, {
  currencyCode: 'BTRST', currencyName: 'Braintrust', icon: 'https://currencyfreaks.com/photos/flags/btrst.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'SUKU', currencyName: 'SUKU', icon: 'https://currencyfreaks.com/photos/flags/suku.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'DAI', currencyName: 'DAI', icon: 'https://currencyfreaks.com/photos/flags/dai.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 3, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'GGP', currencyName: 'Guernsey Pound', icon: 'https://currencyfreaks.com/photos/flags/ggp.png', status: 'AVAILABLE', available_in_historical_data_from: '[2019, 2, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'GG', countryName: 'Guernsey',
}, {
  currencyCode: 'DAR', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/dar.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 13]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'FET', currencyName: 'Fetch.ai', icon: 'https://currencyfreaks.com/photos/flags/fet.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'CBETH', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/cbeth.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 8, 24]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'VEF', currencyName: 'Venezuelan Bolívar Fuerte', icon: 'https://currencyfreaks.com/photos/flags/vef.png', status: 'AVAILABLE', available_in_historical_data_from: '[2008, 1, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'VE', countryName: 'Venezuela',
}, {
  currencyCode: 'LRC', currencyName: 'Loopring', icon: 'https://currencyfreaks.com/photos/flags/lrc.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'REPV2', currencyName: 'REPv2', icon: 'https://currencyfreaks.com/photos/flags/repv2.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'LRD', currencyName: 'Liberian Dollar', icon: 'https://currencyfreaks.com/photos/flags/lrd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'LR', countryName: 'Liberia',
}, {
  currencyCode: 'MTL', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/mtl.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 7, 20]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'VES', currencyName: 'Venezuelan Bolívar', icon: 'https://currencyfreaks.com/photos/flags/ves.png', status: 'AVAILABLE', available_in_historical_data_from: '[2018, 12, 13]', available_in_historical_data_till: '2022-10-14', countryCode: 'VE', countryName: 'Venezuela',
}, {
  currencyCode: 'ZMW', currencyName: 'Zambian Kwacha', icon: 'https://currencyfreaks.com/photos/flags/zmw.png', status: 'AVAILABLE', available_in_historical_data_from: '[2013, 1, 3]', available_in_historical_data_till: '2022-10-14', countryCode: 'ZM', countryName: 'Zambia',
}, {
  currencyCode: 'DAI_m', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/dai_m.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 9, 6]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'USDT', currencyName: 'Tether', icon: 'https://currencyfreaks.com/photos/flags/usdt.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'OXT', currencyName: 'Orchid Network', icon: 'https://currencyfreaks.com/photos/flags/oxt.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'DASH', currencyName: 'Digital Cash', icon: 'https://currencyfreaks.com/photos/flags/dash.png', status: 'AVAILABLE', available_in_historical_data_from: '[2014, 2, 3]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ILS', currencyName: 'New Israeli Sheqel', icon: 'https://currencyfreaks.com/photos/flags/ils.png', status: 'AVAILABLE', available_in_historical_data_from: '[1985, 10, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'IL', countryName: 'Israel',
}, {
  currencyCode: 'GHS', currencyName: 'Ghanaian Cedi', icon: 'https://currencyfreaks.com/photos/flags/ghs.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'GH', countryName: 'Ghana',
}, {
  currencyCode: 'KPW', currencyName: 'North Korean Won', icon: 'https://currencyfreaks.com/photos/flags/kpw.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'KP', countryName: 'North Korea',
}, {
  currencyCode: 'MEDIA', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/media.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 27]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'JOD', currencyName: 'Jordanian Dinar', icon: 'https://currencyfreaks.com/photos/flags/jod.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'JO', countryName: 'Jordan',
}, {
  currencyCode: 'GUSD', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/gusd.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 17]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'HKD', currencyName: 'Hong Kong Dollar', icon: 'https://currencyfreaks.com/photos/flags/hkd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1985, 10, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'HK', countryName: 'Hong Kong',
}, {
  currencyCode: 'LSL', currencyName: 'Lesotho Loti', icon: 'https://currencyfreaks.com/photos/flags/lsl.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'LS', countryName: 'Lesotho',
}, {
  currencyCode: 'KEEP', currencyName: 'Keep Network', icon: 'https://currencyfreaks.com/photos/flags/keep.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'CAD', currencyName: 'Canadian Dollar', icon: 'https://currencyfreaks.com/photos/flags/cad.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 28]', available_in_historical_data_till: '2022-10-14', countryCode: 'CA', countryName: 'Canada',
}, {
  currencyCode: 'MUR', currencyName: 'Mauritius Rupee', icon: 'https://currencyfreaks.com/photos/flags/mur.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'MU', countryName: 'Mauritius',
}, {
  currencyCode: 'IMP', currencyName: 'Manx pound', icon: 'https://currencyfreaks.com/photos/flags/imp.png', status: 'AVAILABLE', available_in_historical_data_from: '[2019, 2, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'IM', countryName: 'Isle of Man',
}, {
  currencyCode: 'GIP', currencyName: 'Gibraltar Pound', icon: 'https://currencyfreaks.com/photos/flags/gip.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'GI', countryName: 'Gibraltar',
}, {
  currencyCode: 'IMX', currencyName: 'Immutable X', icon: 'https://currencyfreaks.com/photos/flags/imx.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'LTC', currencyName: 'Litecoin', icon: 'https://currencyfreaks.com/photos/flags/ltc.png', status: 'AVAILABLE', available_in_historical_data_from: '[2013, 3, 25]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'USDC', currencyName: 'USDC', icon: 'https://currencyfreaks.com/photos/flags/usdc.png', status: 'AVAILABLE', available_in_historical_data_from: '[2020, 12, 15]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'METIS', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/metis.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 27]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'XMON', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/xmon.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 9, 19]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'INJ', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/inj.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 9, 19]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'KRL', currencyName: 'Kryll', icon: 'https://currencyfreaks.com/photos/flags/krl.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'SAR', currencyName: 'Saudi Riyal', icon: 'https://currencyfreaks.com/photos/flags/sar.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 29]', available_in_historical_data_till: '2022-10-14', countryCode: 'SA', countryName: 'Saudi Arabia',
}, {
  currencyCode: 'VGX', currencyName: 'Voyager Token', icon: 'https://currencyfreaks.com/photos/flags/vgx.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'MVR', currencyName: 'Maldivian Rufiyaa', icon: 'https://currencyfreaks.com/photos/flags/mvr.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'MV', countryName: 'Maldives',
}, {
  currencyCode: 'TRIBE', currencyName: 'Tribe', icon: 'https://currencyfreaks.com/photos/flags/tribe.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'INR', currencyName: 'Indian Rupee', icon: 'https://currencyfreaks.com/photos/flags/inr.png', status: 'AVAILABLE', available_in_historical_data_from: '[1985, 10, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'IN', countryName: 'India',
}, {
  currencyCode: 'INV', currencyName: 'Inverse Finance', icon: 'https://currencyfreaks.com/photos/flags/inv.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'POND', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/pond.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 13]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'KRW', currencyName: 'Won', icon: 'https://currencyfreaks.com/photos/flags/krw.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'KR', countryName: 'South Korea',
}, {
  currencyCode: 'JPY', currencyName: 'Yen', icon: 'https://currencyfreaks.com/photos/flags/jpy.png', status: 'AVAILABLE', available_in_historical_data_from: '[1984, 11, 28]', available_in_historical_data_till: '2022-10-14', countryCode: 'JP', countryName: 'Japan',
}, {
  currencyCode: 'SBD', currencyName: 'Solomon Islands Dollar', icon: 'https://currencyfreaks.com/photos/flags/sbd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 7, 31]', available_in_historical_data_till: '2022-10-14', countryCode: 'SB', countryName: 'Solomon Islands',
}, {
  currencyCode: 'WBTC_m', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/wbtc_m.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 9, 6]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'XLM', currencyName: 'Stellar', icon: 'https://currencyfreaks.com/photos/flags/xlm.png', status: 'AVAILABLE', available_in_historical_data_from: '[2014, 8, 11]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'DDX', currencyName: 'DerivaDAO', icon: 'https://currencyfreaks.com/photos/flags/ddx.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'LINK', currencyName: 'Chainlink', icon: 'https://currencyfreaks.com/photos/flags/link.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'MWK', currencyName: 'Malawi Kwacha', icon: 'https://currencyfreaks.com/photos/flags/mwk.png', status: 'AVAILABLE', available_in_historical_data_from: '[1989, 8, 18]', available_in_historical_data_till: '2022-10-14', countryCode: 'MW', countryName: 'Malawi',
}, {
  currencyCode: 'SUPER', currencyName: 'SuperFarm', icon: 'https://currencyfreaks.com/photos/flags/super.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'POLS', currencyName: 'Polkastarter', icon: 'https://currencyfreaks.com/photos/flags/pols.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'KSM', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/ksm.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 1]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'FIL', currencyName: 'Filecoin', icon: 'https://currencyfreaks.com/photos/flags/fil.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'POLY', currencyName: 'Polymath', icon: 'https://currencyfreaks.com/photos/flags/poly.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'RNDR', currencyName: 'Render Token', icon: 'https://currencyfreaks.com/photos/flags/rndr.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'BAL', currencyName: 'Balancer', icon: 'https://currencyfreaks.com/photos/flags/bal.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'BAM', currencyName: 'Bosnia and Herzegovina Convertible Mark', icon: 'https://currencyfreaks.com/photos/flags/bam.png', status: 'AVAILABLE', available_in_historical_data_from: '[1998, 10, 30]', available_in_historical_data_till: '2022-10-14', countryCode: 'BA', countryName: 'Bosnia and Herzegovina',
}, {
  currencyCode: 'GALA', currencyName: 'Gala', icon: 'https://currencyfreaks.com/photos/flags/gala.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'EGP', currencyName: 'Egyptian Pound', icon: 'https://currencyfreaks.com/photos/flags/egp.png', status: 'AVAILABLE', available_in_historical_data_from: '[1985, 1, 28]', available_in_historical_data_till: '2022-10-14', countryCode: 'EG', countryName: 'Egypt',
}, {
  currencyCode: 'FIS', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/fis.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 6, 13]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'RAD', currencyName: 'Radicle', icon: 'https://currencyfreaks.com/photos/flags/rad.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'BAT', currencyName: 'Basic Attention Token', icon: 'https://currencyfreaks.com/photos/flags/bat.png', status: 'AVAILABLE', available_in_historical_data_from: '[2021, 4, 5]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'MXC', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/mxc.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 8, 30]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}, {
  currencyCode: 'NZD', currencyName: 'New Zealand Dollar', icon: 'https://currencyfreaks.com/photos/flags/nzd.png', status: 'AVAILABLE', available_in_historical_data_from: '[1985, 10, 2]', available_in_historical_data_till: '2022-10-14', countryCode: 'CK', countryName: 'Cook Islands',
}, {
  currencyCode: 'RAI', currencyName: 'Rai Reflex Index', icon: 'https://currencyfreaks.com/photos/flags/rai.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'COTI', currencyName: 'COTI', icon: 'https://currencyfreaks.com/photos/flags/coti.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 5, 16]', available_in_historical_data_till: '2022-10-14', countryCode: 'Crypto', countryName: 'Global',
}, {
  currencyCode: 'ILV', currencyName: null, icon: 'https://currencyfreaks.com/photos/flags/ilv.png', status: 'AVAILABLE', available_in_historical_data_from: '[2022, 10, 12]', available_in_historical_data_till: '2022-10-14', countryCode: null, countryName: null,
}];

export default currenciesList;
