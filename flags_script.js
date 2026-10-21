/**
 * FLAGS WAR ARENA - LIVE BATTLE ROYALE SIMULATION ENGINE
 * Matches YouTube Live / Shorts Country Elimination Arenas
 */

// =============================================================================
// 1. COMPREHENSIVE WORLD COUNTRIES DATABASE (195+ Countries)
// =============================================================================
const COUNTRIES_DB = [
  {
    "name": "Afghanistan",
    "code": "af",
    "flag": "🇦🇫",
    "colors": [
      "#000000",
      "#d32011",
      "#007a36"
    ]
  },
  {
    "name": "Albania",
    "code": "al",
    "flag": "🇦🇱",
    "colors": [
      "#e41e20",
      "#000000"
    ]
  },
  {
    "name": "Algeria",
    "code": "dz",
    "flag": "🇩🇿",
    "colors": [
      "#006233",
      "#ffffff",
      "#d21034"
    ]
  },
  {
    "name": "Andorra",
    "code": "ad",
    "flag": "🇦🇩",
    "colors": [
      "#0018a8",
      "#fedd00",
      "#d52b1e"
    ]
  },
  {
    "name": "Angola",
    "code": "ao",
    "flag": "🇦🇴",
    "colors": [
      "#cc092f",
      "#000000",
      "#ffcb05"
    ]
  },
  {
    "name": "Antigua & Barbuda",
    "code": "ag",
    "flag": "🇦🇬",
    "colors": [
      "#ce1126",
      "#000000",
      "#ffffff",
      "#0072c6",
      "#fcd116"
    ]
  },
  {
    "name": "Argentina",
    "code": "ar",
    "flag": "🇦🇷",
    "colors": [
      "#75aadb",
      "#ffffff",
      "#ffb81c"
    ]
  },
  {
    "name": "Armenia",
    "code": "am",
    "flag": "🇦🇲",
    "colors": [
      "#d90012",
      "#0033a0",
      "#f2a800"
    ]
  },
  {
    "name": "Australia",
    "code": "au",
    "flag": "🇦🇺",
    "colors": [
      "#00008b",
      "#ffffff",
      "#ff0000"
    ]
  },
  {
    "name": "Austria",
    "code": "at",
    "flag": "🇦🇹",
    "colors": [
      "#ed2939",
      "#ffffff"
    ]
  },
  {
    "name": "Azerbaijan",
    "code": "az",
    "flag": "🇦🇿",
    "colors": [
      "#00b5e2",
      "#ef3340",
      "#509e2f"
    ]
  },
  {
    "name": "Bahamas",
    "code": "bs",
    "flag": "🇧🇸",
    "colors": [
      "#00abc9",
      "#fae042",
      "#000000"
    ]
  },
  {
    "name": "Bahrain",
    "code": "bh",
    "flag": "🇧🇭",
    "colors": [
      "#ffffff",
      "#ce1126"
    ]
  },
  {
    "name": "Bangladesh",
    "code": "bd",
    "flag": "🇧🇩",
    "colors": [
      "#006a4e",
      "#f42a41"
    ]
  },
  {
    "name": "Barbados",
    "code": "bb",
    "flag": "🇧🇧",
    "colors": [
      "#00267f",
      "#ffc72c",
      "#000000"
    ]
  },
  {
    "name": "Belarus",
    "code": "by",
    "flag": "🇧🇾",
    "colors": [
      "#c8313e",
      "#00965e",
      "#ffffff"
    ]
  },
  {
    "name": "Belgium",
    "code": "be",
    "flag": "🇧🇪",
    "colors": [
      "#000000",
      "#ffd90c",
      "#ed2939"
    ]
  },
  {
    "name": "Belize",
    "code": "bz",
    "flag": "🇧🇿",
    "colors": [
      "#003f87",
      "#ce1126",
      "#ffffff"
    ]
  },
  {
    "name": "Benin",
    "code": "bj",
    "flag": "🇧🇯",
    "colors": [
      "#008751",
      "#fcd116",
      "#e8112d"
    ]
  },
  {
    "name": "Bhutan",
    "code": "bt",
    "flag": "🇧🇹",
    "colors": [
      "#ffb800",
      "#ff4e12",
      "#ffffff"
    ]
  },
  {
    "name": "Bolivia",
    "code": "bo",
    "flag": "🇧🇴",
    "colors": [
      "#d52b1e",
      "#f9e300",
      "#007934"
    ]
  },
  {
    "name": "Bosnia & Herzegovina",
    "code": "ba",
    "flag": "🇧🇦",
    "colors": [
      "#002395",
      "#fecb00",
      "#ffffff"
    ]
  },
  {
    "name": "Botswana",
    "code": "bw",
    "flag": "🇧🇼",
    "colors": [
      "#75aadb",
      "#ffffff",
      "#000000"
    ]
  },
  {
    "name": "Brazil",
    "code": "br",
    "flag": "🇧🇷",
    "colors": [
      "#009739",
      "#fedd00",
      "#002776"
    ]
  },
  {
    "name": "Brunei",
    "code": "bn",
    "flag": "🇧🇳",
    "colors": [
      "#f7e017",
      "#ffffff",
      "#000000",
      "#cc0000"
    ]
  },
  {
    "name": "Bulgaria",
    "code": "bg",
    "flag": "🇧🇬",
    "colors": [
      "#ffffff",
      "#00966e",
      "#d62612"
    ]
  },
  {
    "name": "Burkina Faso",
    "code": "bf",
    "flag": "🇧🇫",
    "colors": [
      "#de0000",
      "#009e49",
      "#fcd116"
    ]
  },
  {
    "name": "Burundi",
    "code": "bi",
    "flag": "🇧🇮",
    "colors": [
      "#1eb53a",
      "#ce1126",
      "#ffffff"
    ]
  },
  {
    "name": "Cabo Verde",
    "code": "cv",
    "flag": "🇨🇻",
    "colors": [
      "#003893",
      "#ffffff",
      "#cf142b",
      "#ffcc00"
    ]
  },
  {
    "name": "Cambodia",
    "code": "kh",
    "flag": "🇰🇭",
    "colors": [
      "#032ea1",
      "#e00025",
      "#ffffff"
    ]
  },
  {
    "name": "Cameroon",
    "code": "cm",
    "flag": "🇨🇲",
    "colors": [
      "#007a5e",
      "#ce1126",
      "#fcd116"
    ]
  },
  {
    "name": "Canada",
    "code": "ca",
    "flag": "🇨🇦",
    "colors": [
      "#d80621",
      "#ffffff"
    ]
  },
  {
    "name": "Central African Rep.",
    "code": "cf",
    "flag": "🇨🇫",
    "colors": [
      "#003082",
      "#ffffff",
      "#289728",
      "#ffce00",
      "#d21034"
    ]
  },
  {
    "name": "Chad",
    "code": "td",
    "flag": "🇹🇩",
    "colors": [
      "#00205b",
      "#ffcd00",
      "#c8102e"
    ]
  },
  {
    "name": "Chile",
    "code": "cl",
    "flag": "🇨🇱",
    "colors": [
      "#ffffff",
      "#d52b1e",
      "#0039a6"
    ]
  },
  {
    "name": "China",
    "code": "cn",
    "flag": "🇨🇳",
    "colors": [
      "#de2910",
      "#ffde00"
    ]
  },
  {
    "name": "Colombia",
    "code": "co",
    "flag": "🇨🇴",
    "colors": [
      "#fcd116",
      "#003893",
      "#ce1126"
    ]
  },
  {
    "name": "Comoros",
    "code": "km",
    "flag": "🇰🇲",
    "colors": [
      "#ffd100",
      "#ffffff",
      "#ce1126",
      "#3a75c4",
      "#3d8544"
    ]
  },
  {
    "name": "Congo (Rep.)",
    "code": "cg",
    "flag": "🇨🇬",
    "colors": [
      "#009543",
      "#fbde4a",
      "#dc241f"
    ]
  },
  {
    "name": "DR Congo",
    "code": "cd",
    "flag": "🇨🇩",
    "colors": [
      "#007fff",
      "#ce1126",
      "#fcd116"
    ]
  },
  {
    "name": "Costa Rica",
    "code": "cr",
    "flag": "🇨🇷",
    "colors": [
      "#002b7f",
      "#ffffff",
      "#ce1126"
    ]
  },
  {
    "name": "Croatia",
    "code": "hr",
    "flag": "🇭🇷",
    "colors": [
      "#ff0000",
      "#ffffff",
      "#171796"
    ]
  },
  {
    "name": "Cuba",
    "code": "cu",
    "flag": "🇨🇺",
    "colors": [
      "#002a8f",
      "#ffffff",
      "#cf142b"
    ]
  },
  {
    "name": "Cyprus",
    "code": "cy",
    "flag": "🇨🇾",
    "colors": [
      "#ffffff",
      "#d57800",
      "#4e5b31"
    ]
  },
  {
    "name": "Czech Republic",
    "code": "cz",
    "flag": "🇨🇿",
    "colors": [
      "#ffffff",
      "#d7141a",
      "#11457e"
    ]
  },
  {
    "name": "Denmark",
    "code": "dk",
    "flag": "🇩🇰",
    "colors": [
      "#c8102e",
      "#ffffff"
    ]
  },
  {
    "name": "Djibouti",
    "code": "dj",
    "flag": "🇩🇯",
    "colors": [
      "#6ab2e7",
      "#12ad2b",
      "#ffffff",
      "#d7141a"
    ]
  },
  {
    "name": "Dominica",
    "code": "dm",
    "flag": "🇩🇲",
    "colors": [
      "#006b3f",
      "#fcd116",
      "#000000",
      "#ffffff",
      "#d21034"
    ]
  },
  {
    "name": "Dominican Republic",
    "code": "do",
    "flag": "🇩🇴",
    "colors": [
      "#002f6c",
      "#ce1126",
      "#ffffff"
    ]
  },
  {
    "name": "Ecuador",
    "code": "ec",
    "flag": "🇪🇨",
    "colors": [
      "#ffdd00",
      "#034ea2",
      "#ed1c24"
    ]
  },
  {
    "name": "Egypt",
    "code": "eg",
    "flag": "🇪🇬",
    "colors": [
      "#c8102e",
      "#ffffff",
      "#000000"
    ]
  },
  {
    "name": "El Salvador",
    "code": "sv",
    "flag": "🇸🇻",
    "colors": [
      "#0f47af",
      "#ffffff"
    ]
  },
  {
    "name": "Equatorial Guinea",
    "code": "gq",
    "flag": "🇬🇶",
    "colors": [
      "#3e9a00",
      "#ffffff",
      "#e32118",
      "#0073ce"
    ]
  },
  {
    "name": "Eritrea",
    "code": "er",
    "flag": "🇪🇷",
    "colors": [
      "#12ad2b",
      "#eb1a23",
      "#0099cc",
      "#ffc726"
    ]
  },
  {
    "name": "Estonia",
    "code": "ee",
    "flag": "🇪🇪",
    "colors": [
      "#0072ce",
      "#000000",
      "#ffffff"
    ]
  },
  {
    "name": "Eswatini",
    "code": "sz",
    "flag": "🇸🇿",
    "colors": [
      "#4770ff",
      "#ffd900",
      "#b10c0c",
      "#ffffff",
      "#000000"
    ]
  },
  {
    "name": "Ethiopia",
    "code": "et",
    "flag": "🇪🇹",
    "colors": [
      "#078930",
      "#fcdd09",
      "#da121a",
      "#0f47af"
    ]
  },
  {
    "name": "Fiji",
    "code": "fj",
    "flag": "🇫🇯",
    "colors": [
      "#68bfe5",
      "#c8102e",
      "#ffffff"
    ]
  },
  {
    "name": "Finland",
    "code": "fi",
    "flag": "🇫🇮",
    "colors": [
      "#ffffff",
      "#002f6c"
    ]
  },
  {
    "name": "France",
    "code": "fr",
    "flag": "🇫🇷",
    "colors": [
      "#002395",
      "#ffffff",
      "#ed2939"
    ]
  },
  {
    "name": "Gabon",
    "code": "ga",
    "flag": "🇬🇦",
    "colors": [
      "#009e60",
      "#fcd116",
      "#3a75c4"
    ]
  },
  {
    "name": "Gambia",
    "code": "gm",
    "flag": "🇬🇲",
    "colors": [
      "#ce1126",
      "#003893",
      "#1eb53a",
      "#ffffff"
    ]
  },
  {
    "name": "Georgia",
    "code": "ge",
    "flag": "🇬🇪",
    "colors": [
      "#ffffff",
      "#ff0000"
    ]
  },
  {
    "name": "Germany",
    "code": "de",
    "flag": "🇩🇪",
    "colors": [
      "#000000",
      "#dd0000",
      "#ffce00"
    ]
  },
  {
    "name": "Ghana",
    "code": "gh",
    "flag": "🇬🇭",
    "colors": [
      "#cf0921",
      "#fcd20e",
      "#006b3f",
      "#000000"
    ]
  },
  {
    "name": "Greece",
    "code": "gr",
    "flag": "🇬🇷",
    "colors": [
      "#0d5eaf",
      "#ffffff"
    ]
  },
  {
    "name": "Grenada",
    "code": "gd",
    "flag": "🇬🇩",
    "colors": [
      "#ce1126",
      "#007a3d",
      "#fcd116"
    ]
  },
  {
    "name": "Guatemala",
    "code": "gt",
    "flag": "🇬🇹",
    "colors": [
      "#4997d0",
      "#ffffff"
    ]
  },
  {
    "name": "Guinea",
    "code": "gn",
    "flag": "🇬🇳",
    "colors": [
      "#ce1126",
      "#fcd116",
      "#009460"
    ]
  },
  {
    "name": "Guinea-Bissau",
    "code": "gw",
    "flag": "🇬🇼",
    "colors": [
      "#ce1126",
      "#fcd116",
      "#009e49",
      "#000000"
    ]
  },
  {
    "name": "Guyana",
    "code": "gy",
    "flag": "🇬🇾",
    "colors": [
      "#009e49",
      "#fcd116",
      "#ce1126",
      "#000000"
    ]
  },
  {
    "name": "Haiti",
    "code": "ht",
    "flag": "🇭🇹",
    "colors": [
      "#00209f",
      "#d21034"
    ]
  },
  {
    "name": "Honduras",
    "code": "hn",
    "flag": "🇭🇳",
    "colors": [
      "#0073cf",
      "#ffffff"
    ]
  },
  {
    "name": "Hungary",
    "code": "hu",
    "flag": "🇭🇺",
    "colors": [
      "#ce2939",
      "#ffffff",
      "#477050"
    ]
  },
  {
    "name": "Iceland",
    "code": "is",
    "flag": "🇮🇸",
    "colors": [
      "#02529c",
      "#ffffff",
      "#dc1e35"
    ]
  },
  {
    "name": "India",
    "code": "in",
    "flag": "🇮🇳",
    "colors": [
      "#ff9933",
      "#ffffff",
      "#128807"
    ]
  },
  {
    "name": "Indonesia",
    "code": "id",
    "flag": "🇮🇩",
    "colors": [
      "#ce1126",
      "#ffffff"
    ]
  },
  {
    "name": "Iran",
    "code": "ir",
    "flag": "🇮🇷",
    "colors": [
      "#239f40",
      "#ffffff",
      "#da0000"
    ]
  },
  {
    "name": "Iraq",
    "code": "iq",
    "flag": "🇮🇶",
    "colors": [
      "#ce1126",
      "#ffffff",
      "#000000",
      "#007a3d"
    ]
  },
  {
    "name": "Ireland",
    "code": "ie",
    "flag": "🇮🇪",
    "colors": [
      "#169b62",
      "#ffffff",
      "#ff883e"
    ]
  },
  {
    "name": "Israel",
    "code": "il",
    "flag": "🇮🇱",
    "colors": [
      "#ffffff",
      "#0038b8"
    ]
  },
  {
    "name": "Italy",
    "code": "it",
    "flag": "🇮🇹",
    "colors": [
      "#009246",
      "#ffffff",
      "#ce2b37"
    ]
  },
  {
    "name": "Ivory Coast",
    "code": "ci",
    "flag": "🇨🇮",
    "colors": [
      "#f77f00",
      "#ffffff",
      "#009e60"
    ]
  },
  {
    "name": "Jamaica",
    "code": "jm",
    "flag": "🇯🇲",
    "colors": [
      "#009b3a",
      "#fed100",
      "#000000"
    ]
  },
  {
    "name": "Japan",
    "code": "jp",
    "flag": "🇯🇵",
    "colors": [
      "#ffffff",
      "#bc002d"
    ]
  },
  {
    "name": "Jordan",
    "code": "jo",
    "flag": "🇯🇴",
    "colors": [
      "#000000",
      "#ffffff",
      "#007a3d",
      "#ce1126"
    ]
  },
  {
    "name": "Kazakhstan",
    "code": "kz",
    "flag": "🇰🇿",
    "colors": [
      "#00afca",
      "#fec50c"
    ]
  },
  {
    "name": "Kenya",
    "code": "ke",
    "flag": "🇰🇪",
    "colors": [
      "#000000",
      "#bb0000",
      "#006600",
      "#ffffff"
    ]
  },
  {
    "name": "Kiribati",
    "code": "ki",
    "flag": "🇰🇮",
    "colors": [
      "#d92b27",
      "#00247d",
      "#ffffff",
      "#f9d616"
    ]
  },
  {
    "name": "Kuwait",
    "code": "kw",
    "flag": "🇰🇼",
    "colors": [
      "#007a3d",
      "#ffffff",
      "#ce1126",
      "#000000"
    ]
  },
  {
    "name": "Kyrgyzstan",
    "code": "kg",
    "flag": "🇰🇬",
    "colors": [
      "#e8112d",
      "#ffed00"
    ]
  },
  {
    "name": "Laos",
    "code": "la",
    "flag": "🇱🇦",
    "colors": [
      "#ce1126",
      "#002868",
      "#ffffff"
    ]
  },
  {
    "name": "Latvia",
    "code": "lv",
    "flag": "🇱🇻",
    "colors": [
      "#9e3039",
      "#ffffff"
    ]
  },
  {
    "name": "Lebanon",
    "code": "lb",
    "flag": "🇱🇧",
    "colors": [
      "#ed1c24",
      "#ffffff",
      "#00a651"
    ]
  },
  {
    "name": "Lesotho",
    "code": "ls",
    "flag": "🇱🇸",
    "colors": [
      "#00209f",
      "#ffffff",
      "#009543"
    ]
  },
  {
    "name": "Liberia",
    "code": "lr",
    "flag": "🇱🇷",
    "colors": [
      "#bf0a30",
      "#ffffff",
      "#002868"
    ]
  },
  {
    "name": "Libya",
    "code": "ly",
    "flag": "🇱🇾",
    "colors": [
      "#e70013",
      "#000000",
      "#239e46",
      "#ffffff"
    ]
  },
  {
    "name": "Liechtenstein",
    "code": "li",
    "flag": "🇱🇮",
    "colors": [
      "#002b7f",
      "#ce1126",
      "#ffd100"
    ]
  },
  {
    "name": "Lithuania",
    "code": "lt",
    "flag": "🇱🇹",
    "colors": [
      "#fdb913",
      "#006a44",
      "#c1272d"
    ]
  },
  {
    "name": "Luxembourg",
    "code": "lu",
    "flag": "🇱🇺",
    "colors": [
      "#ea141d",
      "#ffffff",
      "#00a1de"
    ]
  },
  {
    "name": "Madagascar",
    "code": "mg",
    "flag": "🇲🇬",
    "colors": [
      "#ffffff",
      "#fc3d32",
      "#007e3a"
    ]
  },
  {
    "name": "Malawi",
    "code": "mw",
    "flag": "🇲🇼",
    "colors": [
      "#000000",
      "#ce1126",
      "#007a3d"
    ]
  },
  {
    "name": "Malaysia",
    "code": "my",
    "flag": "🇲🇾",
    "colors": [
      "#cc0000",
      "#ffffff",
      "#000066",
      "#ffcc00"
    ]
  },
  {
    "name": "Maldives",
    "code": "mv",
    "flag": "🇲🇻",
    "colors": [
      "#d21034",
      "#007e3a",
      "#ffffff"
    ]
  },
  {
    "name": "Mali",
    "code": "ml",
    "flag": "🇲🇱",
    "colors": [
      "#14b53a",
      "#fcd116",
      "#ce1126"
    ]
  },
  {
    "name": "Malta",
    "code": "mt",
    "flag": "🇲🇹",
    "colors": [
      "#ffffff",
      "#c8102e"
    ]
  },
  {
    "name": "Marshall Islands",
    "code": "mh",
    "flag": "🇲🇭",
    "colors": [
      "#003893",
      "#e56717",
      "#ffffff"
    ]
  },
  {
    "name": "Mauritania",
    "code": "mr",
    "flag": "🇲🇷",
    "colors": [
      "#006233",
      "#d01c1f",
      "#ffd700"
    ]
  },
  {
    "name": "Mauritius",
    "code": "mu",
    "flag": "🇲🇺",
    "colors": [
      "#ea2839",
      "#1a2061",
      "#ffd500",
      "#00a14b"
    ]
  },
  {
    "name": "Mexico",
    "code": "mx",
    "flag": "🇲🇽",
    "colors": [
      "#006847",
      "#ffffff",
      "#ce1126"
    ]
  },
  {
    "name": "Micronesia",
    "code": "fm",
    "flag": "🇫🇲",
    "colors": [
      "#6ba3d6",
      "#ffffff"
    ]
  },
  {
    "name": "Moldova",
    "code": "md",
    "flag": "🇲🇩",
    "colors": [
      "#0033a0",
      "#ffd100",
      "#cc092f"
    ]
  },
  {
    "name": "Monaco",
    "code": "mc",
    "flag": "🇲🇨",
    "colors": [
      "#ce1126",
      "#ffffff"
    ]
  },
  {
    "name": "Mongolia",
    "code": "mn",
    "flag": "🇲🇳",
    "colors": [
      "#e4002b",
      "#0047ab",
      "#ffd100"
    ]
  },
  {
    "name": "Montenegro",
    "code": "me",
    "flag": "🇲🇪",
    "colors": [
      "#c40308",
      "#d4af37"
    ]
  },
  {
    "name": "Morocco",
    "code": "ma",
    "flag": "🇲🇦",
    "colors": [
      "#c1272d",
      "#006233"
    ]
  },
  {
    "name": "Mozambique",
    "code": "mz",
    "flag": "🇲🇿",
    "colors": [
      "#006600",
      "#000000",
      "#ffff00",
      "#ffffff",
      "#d21034"
    ]
  },
  {
    "name": "Myanmar",
    "code": "mm",
    "flag": "🇲🇲",
    "colors": [
      "#fecb00",
      "#34b233",
      "#ea2839",
      "#ffffff"
    ]
  },
  {
    "name": "Namibia",
    "code": "na",
    "flag": "🇳🇦",
    "colors": [
      "#003580",
      "#d21034",
      "#009543",
      "#ffce00",
      "#ffffff"
    ]
  },
  {
    "name": "Nauru",
    "code": "nr",
    "flag": "🇳🇷",
    "colors": [
      "#002b7f",
      "#ffc72c",
      "#ffffff"
    ]
  },
  {
    "name": "Nepal",
    "code": "np",
    "flag": "🇳🇵",
    "colors": [
      "#dc143c",
      "#003893",
      "#ffffff"
    ]
  },
  {
    "name": "Netherlands",
    "code": "nl",
    "flag": "🇳🇱",
    "colors": [
      "#ae1c28",
      "#ffffff",
      "#21468b"
    ]
  },
  {
    "name": "New Zealand",
    "code": "nz",
    "flag": "🇳🇿",
    "colors": [
      "#00247d",
      "#ffffff",
      "#cc142b"
    ]
  },
  {
    "name": "Nicaragua",
    "code": "ni",
    "flag": "🇳🇮",
    "colors": [
      "#0067c6",
      "#ffffff"
    ]
  },
  {
    "name": "Niger",
    "code": "ne",
    "flag": "🇳🇪",
    "colors": [
      "#e05206",
      "#ffffff",
      "#0db02b"
    ]
  },
  {
    "name": "Nigeria",
    "code": "ng",
    "flag": "🇳🇬",
    "colors": [
      "#008751",
      "#ffffff"
    ]
  },
  {
    "name": "North Korea",
    "code": "kp",
    "flag": "🇰🇵",
    "colors": [
      "#024fa2",
      "#ed1b2e",
      "#ffffff"
    ]
  },
  {
    "name": "North Macedonia",
    "code": "mk",
    "flag": "🇲🇰",
    "colors": [
      "#d20000",
      "#ffe600"
    ]
  },
  {
    "name": "Norway",
    "code": "no",
    "flag": "🇳🇴",
    "colors": [
      "#ba0c2f",
      "#ffffff",
      "#00205b"
    ]
  },
  {
    "name": "Oman",
    "code": "om",
    "flag": "🇴🇲",
    "colors": [
      "#db161d",
      "#ffffff",
      "#008000"
    ]
  },
  {
    "name": "Pakistan",
    "code": "pk",
    "flag": "🇵🇰",
    "colors": [
      "#01411c",
      "#ffffff"
    ]
  },
  {
    "name": "Palau",
    "code": "pw",
    "flag": "🇵🇼",
    "colors": [
      "#4aadd6",
      "#ffde00"
    ]
  },
  {
    "name": "Palestine",
    "code": "ps",
    "flag": "🇵🇸",
    "colors": [
      "#000000",
      "#ffffff",
      "#007a3d",
      "#e4312b"
    ]
  },
  {
    "name": "Panama",
    "code": "pa",
    "flag": "🇵🇦",
    "colors": [
      "#ffffff",
      "#da121a",
      "#072357"
    ]
  },
  {
    "name": "Papua New Guinea",
    "code": "pg",
    "flag": "🇵🇬",
    "colors": [
      "#ce1126",
      "#000000",
      "#fcd116",
      "#ffffff"
    ]
  },
  {
    "name": "Paraguay",
    "code": "py",
    "flag": "🇵🇾",
    "colors": [
      "#d52b1e",
      "#ffffff",
      "#0038a8"
    ]
  },
  {
    "name": "Peru",
    "code": "pe",
    "flag": "🇵🇪",
    "colors": [
      "#d91023",
      "#ffffff"
    ]
  },
  {
    "name": "Philippines",
    "code": "ph",
    "flag": "🇵🇭",
    "colors": [
      "#0038a8",
      "#ce1126",
      "#ffffff",
      "#fcd116"
    ]
  },
  {
    "name": "Poland",
    "code": "pl",
    "flag": "🇵🇱",
    "colors": [
      "#ffffff",
      "#dc143c"
    ]
  },
  {
    "name": "Portugal",
    "code": "pt",
    "flag": "🇵🇹",
    "colors": [
      "#006600",
      "#ff0000",
      "#ffff00"
    ]
  },
  {
    "name": "Qatar",
    "code": "qa",
    "flag": "🇶🇦",
    "colors": [
      "#ffffff",
      "#8d1b3d"
    ]
  },
  {
    "name": "Romania",
    "code": "ro",
    "flag": "🇷🇴",
    "colors": [
      "#002b7f",
      "#fcd116",
      "#ce1126"
    ]
  },
  {
    "name": "Russia",
    "code": "ru",
    "flag": "🇷🇺",
    "colors": [
      "#ffffff",
      "#0039a6",
      "#d52b1e"
    ]
  },
  {
    "name": "Rwanda",
    "code": "rw",
    "flag": "🇷🇼",
    "colors": [
      "#00a1de",
      "#fad201",
      "#20603d"
    ]
  },
  {
    "name": "Saint Kitts & Nevis",
    "code": "kn",
    "flag": "🇰🇳",
    "colors": [
      "#009e49",
      "#ce1126",
      "#000000",
      "#fcd116",
      "#ffffff"
    ]
  },
  {
    "name": "Saint Lucia",
    "code": "lc",
    "flag": "🇱🇨",
    "colors": [
      "#65cfff",
      "#000000",
      "#ffffff",
      "#ffce00"
    ]
  },
  {
    "name": "St. Vincent & Grenadines",
    "code": "vc",
    "flag": "🇻🇨",
    "colors": [
      "#00247d",
      "#ffcc00",
      "#009e49"
    ]
  },
  {
    "name": "Samoa",
    "code": "ws",
    "flag": "🇼🇸",
    "colors": [
      "#ce1126",
      "#002b7f",
      "#ffffff"
    ]
  },
  {
    "name": "San Marino",
    "code": "sm",
    "flag": "🇸🇲",
    "colors": [
      "#ffffff",
      "#5eb6e4"
    ]
  },
  {
    "name": "Sao Tome & Principe",
    "code": "st",
    "flag": "🇸🇹",
    "colors": [
      "#12ad2b",
      "#ffce00",
      "#d21034",
      "#000000"
    ]
  },
  {
    "name": "Saudi Arabia",
    "code": "sa",
    "flag": "🇸🇦",
    "colors": [
      "#165d31",
      "#ffffff"
    ]
  },
  {
    "name": "Senegal",
    "code": "sn",
    "flag": "🇸🇳",
    "colors": [
      "#00853f",
      "#fdef42",
      "#e31b23"
    ]
  },
  {
    "name": "Serbia",
    "code": "rs",
    "flag": "🇷🇸",
    "colors": [
      "#c6363c",
      "#0c4076",
      "#ffffff"
    ]
  },
  {
    "name": "Seychelles",
    "code": "sc",
    "flag": "🇸🇨",
    "colors": [
      "#003d88",
      "#fcd856",
      "#d62828",
      "#ffffff",
      "#007a3d"
    ]
  },
  {
    "name": "Sierra Leone",
    "code": "sl",
    "flag": "🇸🇱",
    "colors": [
      "#1eb53a",
      "#ffffff",
      "#0072ce"
    ]
  },
  {
    "name": "Singapore",
    "code": "sg",
    "flag": "🇸🇬",
    "colors": [
      "#ed2939",
      "#ffffff"
    ]
  },
  {
    "name": "Slovakia",
    "code": "sk",
    "flag": "🇸🇰",
    "colors": [
      "#ffffff",
      "#0b4ea2",
      "#ee1c25"
    ]
  },
  {
    "name": "Slovenia",
    "code": "si",
    "flag": "🇸🇮",
    "colors": [
      "#ffffff",
      "#005ce6",
      "#ed1c24"
    ]
  },
  {
    "name": "Solomon Islands",
    "code": "sb",
    "flag": "🇸🇧",
    "colors": [
      "#0051ba",
      "#215b33",
      "#fcd116",
      "#ffffff"
    ]
  },
  {
    "name": "Somalia",
    "code": "so",
    "flag": "🇸🇴",
    "colors": [
      "#4189dd",
      "#ffffff"
    ]
  },
  {
    "name": "South Africa",
    "code": "za",
    "flag": "🇿🇦",
    "colors": [
      "#007749",
      "#ffb612",
      "#001489",
      "#de3831"
    ]
  },
  {
    "name": "South Korea",
    "code": "kr",
    "flag": "🇰🇷",
    "colors": [
      "#ffffff",
      "#cd2e3a",
      "#0047a0"
    ]
  },
  {
    "name": "South Sudan",
    "code": "ss",
    "flag": "🇸🇸",
    "colors": [
      "#000000",
      "#da121a",
      "#078930",
      "#0f47af",
      "#fcdd09"
    ]
  },
  {
    "name": "Spain",
    "code": "es",
    "flag": "🇪🇸",
    "colors": [
      "#aa151b",
      "#f1bf00"
    ]
  },
  {
    "name": "Sri Lanka",
    "code": "lk",
    "flag": "🇱🇰",
    "colors": [
      "#ffbe29",
      "#8d153a",
      "#ff7900",
      "#00534e"
    ]
  },
  {
    "name": "Sudan",
    "code": "sd",
    "flag": "🇸🇩",
    "colors": [
      "#d21034",
      "#ffffff",
      "#000000",
      "#007229"
    ]
  },
  {
    "name": "Suriname",
    "code": "sr",
    "flag": "🇸🇷",
    "colors": [
      "#377e3f",
      "#b40a2d",
      "#ffffff",
      "#ecc81d"
    ]
  },
  {
    "name": "Sweden",
    "code": "se",
    "flag": "🇸🇪",
    "colors": [
      "#006aa7",
      "#fecc00"
    ]
  },
  {
    "name": "Switzerland",
    "code": "ch",
    "flag": "🇨🇭",
    "colors": [
      "#d52b1e",
      "#ffffff"
    ]
  },
  {
    "name": "Syria",
    "code": "sy",
    "flag": "🇸🇾",
    "colors": [
      "#ce1126",
      "#ffffff",
      "#000000",
      "#007a3d"
    ]
  },
  {
    "name": "Taiwan",
    "code": "tw",
    "flag": "🇹🇼",
    "colors": [
      "#fe0000",
      "#000095",
      "#ffffff"
    ]
  },
  {
    "name": "Tajikistan",
    "code": "tj",
    "flag": "🇹🇯",
    "colors": [
      "#cc0000",
      "#ffffff",
      "#006600"
    ]
  },
  {
    "name": "Tanzania",
    "code": "tz",
    "flag": "🇹🇿",
    "colors": [
      "#1eb53a",
      "#00a3dd",
      "#000000",
      "#fcd116"
    ]
  },
  {
    "name": "Thailand",
    "code": "th",
    "flag": "🇹🇭",
    "colors": [
      "#a51931",
      "#f4f5f8",
      "#2d2a4a"
    ]
  },
  {
    "name": "Timor-Leste",
    "code": "tl",
    "flag": "🇹🇱",
    "colors": [
      "#dc241f",
      "#ffc726",
      "#000000",
      "#ffffff"
    ]
  },
  {
    "name": "Togo",
    "code": "tg",
    "flag": "🇹🇬",
    "colors": [
      "#006a4e",
      "#ffce00",
      "#d21034",
      "#ffffff"
    ]
  },
  {
    "name": "Tonga",
    "code": "to",
    "flag": "🇹🇴",
    "colors": [
      "#c10000",
      "#ffffff"
    ]
  },
  {
    "name": "Trinidad & Tobago",
    "code": "tt",
    "flag": "🇹🇹",
    "colors": [
      "#da121a",
      "#ffffff",
      "#000000"
    ]
  },
  {
    "name": "Tunisia",
    "code": "tn",
    "flag": "🇹🇳",
    "colors": [
      "#e70013",
      "#ffffff"
    ]
  },
  {
    "name": "Turkey",
    "code": "tr",
    "flag": "🇹🇷",
    "colors": [
      "#e30a17",
      "#ffffff"
    ]
  },
  {
    "name": "Turkmenistan",
    "code": "tm",
    "flag": "🇹🇲",
    "colors": [
      "#2e9947",
      "#d22630",
      "#ffffff"
    ]
  },
  {
    "name": "Tuvalu",
    "code": "tv",
    "flag": "🇹🇻",
    "colors": [
      "#5b97c8",
      "#c8102e",
      "#ffffff",
      "#ffd100"
    ]
  },
  {
    "name": "Uganda",
    "code": "ug",
    "flag": "🇺🇬",
    "colors": [
      "#000000",
      "#fcdc04",
      "#d90000"
    ]
  },
  {
    "name": "Ukraine",
    "code": "ua",
    "flag": "🇺🇦",
    "colors": [
      "#005bbb",
      "#ffd500"
    ]
  },
  {
    "name": "United Arab Emirates",
    "code": "ae",
    "flag": "🇦🇪",
    "colors": [
      "#00732f",
      "#ffffff",
      "#000000",
      "#ff0000"
    ]
  },
  {
    "name": "United Kingdom",
    "code": "gb",
    "flag": "🇬🇧",
    "colors": [
      "#012169",
      "#ffffff",
      "#c8102e"
    ]
  },
  {
    "name": "United States",
    "code": "us",
    "flag": "🇺🇸",
    "colors": [
      "#b22234",
      "#ffffff",
      "#3c3b6e"
    ]
  },
  {
    "name": "Uruguay",
    "code": "uy",
    "flag": "🇺🇾",
    "colors": [
      "#ffffff",
      "#0038a8",
      "#fcd116"
    ]
  },
  {
    "name": "Uzbekistan",
    "code": "uz",
    "flag": "🇺🇿",
    "colors": [
      "#0099b5",
      "#ce1126",
      "#ffffff",
      "#1eb53a"
    ]
  },
  {
    "name": "Vanuatu",
    "code": "vu",
    "flag": "🇻🇺",
    "colors": [
      "#d21034",
      "#009543",
      "#000000",
      "#fdce12"
    ]
  },
  {
    "name": "Vatican City",
    "code": "va",
    "flag": "🇻🇦",
    "colors": [
      "#ffe000",
      "#ffffff"
    ]
  },
  {
    "name": "Venezuela",
    "code": "ve",
    "flag": "🇻🇪",
    "colors": [
      "#fce300",
      "#00247d",
      "#cf142b"
    ]
  },
  {
    "name": "Vietnam",
    "code": "vn",
    "flag": "🇻🇳",
    "colors": [
      "#da251d",
      "#ffff00"
    ]
  },
  {
    "name": "Yemen",
    "code": "ye",
    "flag": "🇾🇪",
    "colors": [
      "#ce1126",
      "#ffffff",
      "#000000"
    ]
  },
  {
    "name": "Zambia",
    "code": "zm",
    "flag": "🇿🇲",
    "colors": [
      "#198a00",
      "#de2010",
      "#000000",
      "#ef7d00"
    ]
  },
  {
    "name": "Zimbabwe",
    "code": "zw",
    "flag": "🇿🇼",
    "colors": [
      "#006400",
      "#ffd700",
      "#d40000",
      "#000000",
      "#ffffff"
    ]
  },
  {
    "name": "England",
    "code": "gb-eng",
    "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "colors": [
      "#ffffff",
      "#ce1126"
    ]
  },
  {
    "name": "Scotland",
    "code": "gb-sct",
    "flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    "colors": [
      "#005eb8",
      "#ffffff"
    ]
  },
  {
    "name": "Wales",
    "code": "gb-wls",
    "flag": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    "colors": [
      "#ffffff",
      "#00ab39",
      "#d4351c"
    ]
  },
  {
    "name": "Puerto Rico",
    "code": "pr",
    "flag": "🇵🇷",
    "colors": [
      "#ed0000",
      "#ffffff",
      "#0050f0"
    ]
  },
  {
    "name": "Hong Kong",
    "code": "hk",
    "flag": "🇭🇰",
    "colors": [
      "#de2910",
      "#ffffff"
    ]
  }
];

// Top 10 Most Powerful Nations in the World (Guaranteed in every match/round)
const TOP_POWERFUL_CODES = ["us", "cn", "ru", "in", "gb", "de", "fr", "jp", "br", "tr"];

const POPULAR_PINS = ["India", "United States", "China", "Russia", "United Kingdom", "Germany", "France", "Japan", "Brazil", "Turkey"];

// Continents Database Mapping (100% of 201 countries accurately mapped to 5 continents)
const ASIA_CODES = new Set(["af","am","az","bh","bd","bt","bn","kh","cn","cy","ge","in","id","ir","iq","il","jp","jo","kz","kw","kg","la","lb","my","mv","mn","mm","np","kp","om","pk","ps","ph","qa","sa","sg","kr","lk","sy","tw","tj","th","tl","tr","tm","ae","uz","vn","ye","hk"]);
const EUROPE_CODES = new Set(["al","ad","at","by","be","ba","bg","hr","cz","dk","ee","fi","fr","de","gr","hu","is","ie","it","xk","lv","li","lt","lu","mt","md","mc","me","nl","mk","no","pl","pt","ro","ru","sm","rs","sk","si","es","se","ch","ua","gb","va","gb-eng","gb-sct","gb-wls"]);
const AMERICAS_CODES = new Set(["ag","ar","bs","bb","bz","bo","br","ca","cl","co","cr","cu","dm","do","ec","sv","gd","gt","gy","ht","hn","jm","mx","ni","pa","py","pe","kn","lc","vc","sr","tt","us","uy","ve","pr"]);
const AFRICA_CODES = new Set(["dz","ao","bj","bw","bf","bi","cv","cm","cf","td","km","cg","cd","ci","dj","eg","gq","er","sz","et","ga","gm","gh","gn","gw","ke","ls","lr","ly","mg","mw","ml","mr","mu","ma","mz","na","ne","ng","rw","st","sn","sc","sl","so","za","ss","sd","tz","tg","tn","ug","zm","zw"]);
const OCEANIA_CODES = new Set(["au","fj","ki","mh","fm","nr","nz","pw","pg","ws","sb","to","tv","vu"]);

// Fisher–Yates shuffle: unbiased random ordering for country rosters.
function shuffleArray(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getCountryContinent(country) {
  if (!country) return "Asia";
  const code = (country.code || "").toLowerCase();
  if (ASIA_CODES.has(code)) return "Asia";
  if (EUROPE_CODES.has(code)) return "Europe";
  if (AMERICAS_CODES.has(code)) return "Americas";
  if (AFRICA_CODES.has(code)) return "Africa";
  if (OCEANIA_CODES.has(code)) return "Oceania";
  return "Asia";
}

// =============================================================================
// 2. CONFIGURATION & STATE
// =============================================================================
const gameConfig = {
  mode: "elimination",       // 'elimination' (center hole eliminates), 'qualifying', 'vortex'
  totalCountries: 67,        // 67 Countries (Random 1/3rd of 201 nations - Spacious & Fast dynamic motion)
  spokeSpeed: 0.005,         // Obstacle spokes rotation speed (counter-clockwise, smooth & steady)
  centerGateSpeed: 0.012,    // Central hole gate rotation speed
  bounciness: 0.88,          // Elasticity of collisions
  gravity: 0.06,             // Downward gravity acceleration; adjustable from the settings drawer.
  speedMultiplier: 0.85,     // Relaxed, clear viewing speed
  soundVolume: 0.75,
  soundEnabled: true,
  voiceAnnouncerEnabled: true,
  fakeChatEnabled: true,     // Fake live comments overlay (viewers can disable in settings)
  liveClusterEnabled: true,   // Master toggle for the live caster, elimination board, and chat cluster
  autoCycle: true,
  pinnedCountryName: null,
  isLandscape: false
};

// =============================================================================
// 2B. SURVIVAL GAUNTLET 4-STAGE CONFIGURATION
// =============================================================================
const GAUNTLET_STAGES = [
  {
    stage: 1,
    name: "THE FILTER",
    subtitle: "67 Nations enter • Top 32 advance!",
    targetSurvivors: 32,
    startingCount: 67,
    themeColor: "#00f0ff",
    themeGlow: "rgba(0, 240, 255, 0.6)",
    spokeSpeedMultiplier: 1.0,
    dualBlades: false,
    radiusScale: 1.0,
    vortexBoost: 1.0
  },
  {
    stage: 2,
    name: "MEAT GRINDER",
    subtitle: "Dual Counter-Rotating Blades • Top 12 advance!",
    targetSurvivors: 12,
    startingCount: 32,
    themeColor: "#ff4d00",
    themeGlow: "rgba(255, 77, 0, 0.7)",
    spokeSpeedMultiplier: 1.25,
    dualBlades: true,
    radiusScale: 1.0,
    vortexBoost: 1.25
  },
  {
    stage: 3,
    name: "TOXIC SHRINK",
    subtitle: "Arena Shrunk 30% • Top 4 advance!",
    targetSurvivors: 4,
    startingCount: 12,
    themeColor: "#00ff88",
    themeGlow: "rgba(0, 255, 136, 0.75)",
    spokeSpeedMultiplier: 1.45,
    dualBlades: true,
    radiusScale: 0.72,
    vortexBoost: 1.6
  },
  {
    stage: 4,
    name: "GRAND FINAL",
    subtitle: "Final 4 Championship • 1 Supreme Victor!",
    targetSurvivors: 1,
    startingCount: 4,
    themeColor: "#ffbe0b",
    themeGlow: "rgba(255, 190, 11, 0.85)",
    spokeSpeedMultiplier: 1.75,
    dualBlades: true,
    radiusScale: 0.86,
    vortexBoost: 1.85
  }
];

const gameState = {
  running: true,             // Game runs automatically!
  cycle: 1,                  // Cycle 1 as shown in video frame_001.jpg
  gameMode: "elimination",   // "elimination" (Classic Battle Royale) or "gauntlet" (Survival Gauntlet)
  gauntlet: {
    active: false,
    stageIndex: 0,           // 0 to 3 for Stages 1 to 4
    transitioning: false,
    innerSpokesAngle: 0,
    qualifiedRoster: []
  },
  timerCountdown: 4.0,       // 4s circle countdown
  timerMax: 4.0,
  timerInterval: null,
  flags: [],
  eliminatedList: [],
  eliminationFeed: [],       // Live elimination board entries {name, code, order, survived}
  simTime: 0,                // Simulated match time (seconds of physics time)
  continentCounts: { Asia: 0, Europe: 0, Americas: 0, Africa: 0, Oceania: 0 },
  wipedContinents: new Set(),
  continentalShowdownAnnounced: false,
  lastCommentaryTime: 0,
  lastNearMissTime: 0,
  centerState: "closed",     // "closed", "opening", "open"
  centerOpenProgress: 0,     // 0 (closed) to 1 (fully open)
  centerCooldown: 4.0,
  centerOpenDuration: 0,
  centerTrappedFlag: null,   // Flag currently trapped inside the center
  centerTrappedTime: 0,
  particles: [],
  shockwaves: [],
  spokesAngle: -Math.PI / 2, // 12 o'clock vertical spoke matching frame_001.jpg!
  centerGateAngle: 0,
  arenaRadius: 155,
  centerRadius: 36,          // Compact yellow center hole (matching screenshot 2)
  arenaCenter: { x: 200, y: 200 },
  roundFinished: false,
  likeCount: 48200,         // Simulated demo counter; not real platform likes
  viewers: 12840,           // Simulated demo counter; not connected to YouTube Analytics
  hypeTarget: null,         // Persistent hype voting target (marble ref)
  pendingDoubleElim: false, // Drama engine: quick strike follow-up elims
  hypeShieldAnnounced: false
};

// =============================================================================
// 3. SOUND SYNTHESIZER (Web Audio API)
// =============================================================================
class SoundSynth {
  constructor() {
    this.ctx = null;
    this.lastSoundTime = 0;
    this._lastTickTime = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Crisp acoustic billiard ball click
  playBilliardClack(force = 1) {
    if (!gameConfig.soundEnabled || !this.ctx) return;
    const now = performance.now();
    if (now - this.lastSoundTime < 24) return;
    this.lastSoundTime = now;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const freq = 680 + Math.random() * 420;
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.35, this.ctx.currentTime + 0.022);

      const vol = Math.min(0.26, 0.05 + force * 0.10) * gameConfig.soundVolume;
      gain.gain.setValueAtTime(vol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.025);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.028);
    } catch (e) {}
  }

  // Metallic spoke strike thud
  playSpokeHit(force = 1) {
    if (!gameConfig.soundEnabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      const freq = 240 + Math.random() * 140;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.4, this.ctx.currentTime + 0.045);

      const vol = Math.min(0.32, 0.08 + force * 0.14) * gameConfig.soundVolume;
      gain.gain.setValueAtTime(vol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.055);
    } catch (e) {}
  }

  // Interactive shockwave bass burst
  playShockwave() {
    if (!gameConfig.soundEnabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(140, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(36, this.ctx.currentTime + 0.22);

      gain.gain.setValueAtTime(0.30 * gameConfig.soundVolume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.24);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch (e) {}
  }

  // Danger countdown hazard tick
  playHazardTick(urgency = 0.5) {
    if (!gameConfig.soundEnabled || !this.ctx) return;
    const now = performance.now();
    if (now - this._lastTickTime < 180) return;
    this._lastTickTime = now;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      const freq = 820 + urgency * 480;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.12 * gameConfig.soundVolume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.028);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.032);
    } catch (e) {}
  }

  // Country pinned chirp
  playPinSuccess() {
    if (!gameConfig.soundEnabled || !this.ctx) return;
    try {
      [587.33, 880].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.06);

        gain.gain.setValueAtTime(0.18 * gameConfig.soundVolume, this.ctx.currentTime + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.06 + 0.12);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + i * 0.06);
        osc.stop(this.ctx.currentTime + i * 0.06 + 0.14);
      });
    } catch (e) {}
  }

  playCollision(force = 1) {
    this.playBilliardClack(force);
  }

  // Ball drops into center elimination hole!
  playCenterElimination() {
    if (!gameConfig.soundEnabled || !this.ctx) return;
    try {
      // Sub bass boom + zap
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.28);

      gain.gain.setValueAtTime(0.28 * gameConfig.soundVolume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.32);
    } catch (e) {}
  }

  playVictory() {
    if (!gameConfig.soundEnabled || !this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);

        const vol = 0.22 * gameConfig.soundVolume;
        gain.gain.setValueAtTime(0.001, this.ctx.currentTime + idx * 0.08);
        gain.gain.linearRampToValueAtTime(vol, this.ctx.currentTime + idx * 0.08 + 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + idx * 0.08 + 1.1);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.08);
        osc.stop(this.ctx.currentTime + idx * 0.08 + 1.15);
      });
    } catch (e) {}
  }

  // Deep cinematic war gong / tribal sub-bass when a continent loses all countries
  playContinentWipeout() {
    if (!gameConfig.soundEnabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(130, now);
      osc.frequency.exponentialRampToValueAtTime(32, now + 0.85);

      gain.gain.setValueAtTime(0.40 * gameConfig.soundVolume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.95);

      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = "sawtooth";
      osc2.frequency.setValueAtTime(65, now);
      osc2.frequency.exponentialRampToValueAtTime(26, now + 0.95);
      gain2.gain.setValueAtTime(0.26 * gameConfig.soundVolume, now);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.0);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start();
      osc2.stop(now + 1.05);
    } catch (e) {}
  }

  // Dynamic frequency sweep whoosh for narrow clutch escapes
  playNearMissWhoosh() {
    if (!gameConfig.soundEnabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(860, now + 0.08);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.2);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.20 * gameConfig.soundVolume, now + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.24);
    } catch (e) {}
  }

  // Celebratory multi-tone brass fanfare when top 5 is reached or round finishes
  playCrowdHypeCheer() {
    if (!gameConfig.soundEnabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      [440, 554.37, 659.25, 880].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.04);
        gain.gain.setValueAtTime(0.18 * gameConfig.soundVolume, now + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.45);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.04);
        osc.stop(now + idx * 0.04 + 0.5);
      });
    } catch (e) {}
  }

  // Gauntlet Stage Cleared Fanfare
  playStageClearFanfare() {
    if (!gameConfig.soundEnabled || !this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        const startTime = this.ctx.currentTime + idx * 0.09;
        osc.frequency.setValueAtTime(freq, startTime);
        const vol = 0.24 * gameConfig.soundVolume;
        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.linearRampToValueAtTime(vol, startTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.55);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.6);
      });
    } catch (e) {}
  }

  // Gauntlet Stage Alert Warhorn / Sci-Fi Siren
  playStageStartAlert() {
    if (!gameConfig.soundEnabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(640, this.ctx.currentTime + 0.18);
      osc.frequency.exponentialRampToValueAtTime(280, this.ctx.currentTime + 0.45);
      gain.gain.setValueAtTime(0.20 * gameConfig.soundVolume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.48);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.5);
    } catch (e) {}
  }
}

const audioSynth = new SoundSynth();

// =============================================================================

// =============================================================================
// 3.5. VOICE ANNOUNCER ("Country is out!")
// Powered by HTML5 Web Speech Synthesis API (100% Offline, Zero Latency)
// =============================================================================
function formatCountryForSpeech(name) {
  if (!name) return "";
  return name
    .replace(/&/g, " and ")
    .replace(/\bDR Congo\b/gi, "Democratic Republic of the Congo")
    .replace(/\bSt\./gi, "Saint")
    .replace(/\bU\.S\./gi, "United States")
    .replace(/\bU\.K\./gi, "United Kingdom")
    .trim();
}

class VoiceAnnouncer {
  constructor() {
    this.synth = typeof window !== "undefined" && window.speechSynthesis ? window.speechSynthesis : null;
    this.voice = null;
    this.rate = 1.12; // Natural, energetic commentator speed
    this.pitch = 1.0;
    this.activeUtterance = null;
    this.unlocked = false;
    this.initVoices();
    this.startWatchdog();
  }

  initVoices() {
    if (!this.synth) return;
    try {
      const load = () => {
        try {
          const voices = this.synth.getVoices() || [];
          if (!voices || !voices.length) return;
          // Prefer high-quality English voice
          const preferred = voices.find(v => v.lang && v.lang.startsWith("en") &&
            (v.name.includes("Natural") || v.name.includes("Online") || v.name.includes("Google") || v.name.includes("Samantha") || v.name.includes("David") || v.name.includes("Zira") || v.name.includes("Mark") || v.name.includes("George")));
          this.voice = preferred || voices.find(v => v.lang && v.lang.startsWith("en")) || voices[0] || null;
        } catch (e) {}
      };
      load();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = load;
      }
    } catch (e) {}
  }

  startWatchdog() {
    // Chrome bugfix: Chrome silently pauses speech synthesis in the background. Keep it awake!
    if (typeof window !== "undefined") {
      setInterval(() => {
        if (this.synth && this.synth.paused) {
          try { this.synth.resume(); } catch (e) {}
        }
      }, 1000);
    }
  }

  unlock() {
    this.unlocked = true;
    if (!this.synth) return;
    try {
      if (this.synth.paused) {
        this.synth.resume();
      }
      this.initVoices();
    } catch (e) {}
  }

  speak(text) {
    if (!gameConfig.soundEnabled || !gameConfig.voiceAnnouncerEnabled) return;
    if (!this.synth) {
      console.warn("SpeechSynthesis not supported on this browser.");
      return;
    }

    try {
      // 1. Cancel previous speech to prevent queue freeze/lag
      this.synth.cancel();

      // 2. Unpause if browser held it
      if (this.synth.paused) {
        this.synth.resume();
      }

      // 3. Create fresh utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      if (this.voice) {
        utterance.voice = this.voice;
      }
      utterance.volume = Math.min(1.0, 1.0 * gameConfig.soundVolume);
      utterance.rate = this.rate;
      utterance.pitch = this.pitch;

      // 4. Retain reference on window object to prevent Chrome V8 Garbage Collection bug!
      window._activeSpeechUtterances = window._activeSpeechUtterances || [];
      window._activeSpeechUtterances.push(utterance);
      this.activeUtterance = utterance;

      const cleanup = () => {
        if (window._activeSpeechUtterances) {
          const idx = window._activeSpeechUtterances.indexOf(utterance);
          if (idx !== -1) window._activeSpeechUtterances.splice(idx, 1);
        }
        if (this.activeUtterance === utterance) {
          this.activeUtterance = null;
        }
      };

      utterance.onend = () => {
        cleanup();
      };

      utterance.onerror = (e) => {
        cleanup();
        if (this.synth && this.synth.paused) {
          try { this.synth.resume(); } catch (err) {}
        }
      };

      // 5. Fire speech
      this.synth.speak(utterance);

      // 6. Chrome quick-start kick
      setTimeout(() => {
        if (this.synth && this.synth.paused) {
          try { this.synth.resume(); } catch (err) {}
        }
      }, 30);
    } catch (err) {
      console.error("VoiceAnnouncer speak error:", err);
    }
  }

  playCountryVoice(country) {
    if (!country || !gameConfig.soundEnabled || !gameConfig.voiceAnnouncerEnabled) return false;
    const countryName = typeof country === "object" ? country.name : country;
    let code = typeof country === "object" ? (country.code || "").toLowerCase() : "";

    if (!code) {
      const found = COUNTRIES_DB.find(c => c.name.toLowerCase() === countryName.toLowerCase());
      if (found) code = found.code.toLowerCase();
    }

    if (code) {
      try {
        if (this.currentAudio) {
          try {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
          } catch (e) {}
        }
        const audio = new Audio(`assets/voices/${code}.mp3`);
        audio.volume = Math.min(1.0, 1.0 * gameConfig.soundVolume);
        this.currentAudio = audio;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            console.warn(`Voice file ${code}.mp3 playback fallback:`, err);
            const spokenName = formatCountryForSpeech(countryName);
            this.speak(`${spokenName} is out!`);
          });
        }
        return true;
      } catch (err) {
        console.warn("Audio play error:", err);
      }
    }
    return false;
  }

  announceEliminated(country) {
    if (!country) return;
    // 1. Try to play authentic recorded voice audio clip first!
    const played = this.playCountryVoice(country);
    if (!played) {
      const countryName = typeof country === "object" ? country.name : country;
      const spokenName = formatCountryForSpeech(countryName);
      this.speak(`${spokenName} is out!`);
    }
  }

  updateCasterTicker(text) {
    const ticker = document.getElementById("liveCasterTicker");
    const textEl = document.getElementById("casterSpeechText");
    if (textEl) {
      textEl.textContent = text;
    }
    if (ticker) {
      ticker.classList.remove("speaking");
      void ticker.offsetWidth;
      ticker.classList.add("speaking");

      if (this._tickerTimer) clearTimeout(this._tickerTimer);
      this._tickerTimer = setTimeout(() => {
        ticker.classList.remove("speaking");
      }, 2600);
    }
  }

  speakCaster(text, force = false) {
    if (!text) return;
    const now = performance.now();
    if (!force && now - (this._lastCasterTime || 0) < 2500) {
      return;
    }
    this._lastCasterTime = now;

    // Always update the on-screen live caster subtitle HUD
    this.updateCasterTicker(text);

    // Speak audio
    this.speak(text);
  }

  announceWinner(countryName) {
    if (!countryName) return;
    const spokenName = formatCountryForSpeech(countryName);
    this.updateCasterTicker(`UNSTOPPABLE! ${spokenName} IS THE SUPREME CHAMPION! 🏆`);
    this.speak(`${spokenName} is the champion!`);
  }
}

const voiceAnnouncer = new VoiceAnnouncer();

// =============================================================================
// 4. FLAG IMAGES & 3D SPHERICAL MARBLE CLASS
// =============================================================================
const flagCache = new Map();

function getFlagImage(countryCode) {
  const code = (countryCode || "").toLowerCase().trim();
  if (!code) return null;
  if (flagCache.has(code)) return flagCache.get(code);

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = `https://flagcdn.com/w80/${code}.png`;
  flagCache.set(code, img);
  return img;
}

// =============================================================================
// 3B. MARBLE SPRITE FACTORY (pre-baked overlay sprites)
// Removes ~2 gradient creations + 2-3 shadowed strokes per marble per frame —
// the single biggest render win for 100-201 marble matches.
// =============================================================================
const marbleSpriteCache = new Map();

function getShadeSprite(radius) {
  const r = Math.round(radius * 2) / 2;
  const key = "shade-" + r;
  let spr = marbleSpriteCache.get(key);
  if (spr) return spr;

  const pad = 2;
  const size = Math.ceil((r + pad) * 2);
  spr = document.createElement("canvas");
  spr.width = size;
  spr.height = size;
  const g = spr.getContext("2d");
  const grad = g.createRadialGradient(size / 2 - r * 0.35, size / 2 - r * 0.35, r * 0.08, size / 2, size / 2, r);
  grad.addColorStop(0, "rgba(255, 255, 255, 0.70)");
  grad.addColorStop(0.35, "rgba(255, 255, 255, 0.18)");
  grad.addColorStop(0.75, "rgba(0, 0, 0, 0.15)");
  grad.addColorStop(1, "rgba(0, 0, 0, 0.65)");
  g.fillStyle = grad;
  g.beginPath();
  g.arc(size / 2, size / 2, r, 0, Math.PI * 2);
  g.fill();

  marbleSpriteCache.set(key, spr);
  return spr;
}

function getTrailSprite(pinned) {
  const key = pinned ? "trail-gold" : "trail-cyan";
  let spr = marbleSpriteCache.get(key);
  if (spr) return spr;

  const w = 64;
  const h = 18;
  spr = document.createElement("canvas");
  spr.width = w;
  spr.height = h;
  const g = spr.getContext("2d");
  const grad = g.createLinearGradient(0, 0, w, 0);
  grad.addColorStop(0, "rgba(0, 0, 0, 0)");
  grad.addColorStop(1, pinned ? "rgba(255, 190, 11, 0.65)" : "rgba(0, 240, 255, 0.5)");
  g.fillStyle = grad;
  g.beginPath();
  if (g.roundRect) g.roundRect(0, 0, w, h, h / 2);
  else g.rect(0, 0, w, h);
  g.fill();

  marbleSpriteCache.set(key, spr);
  return spr;
}

function getRingSprite(radius, pinned) {
  const r = Math.round(radius * 2) / 2;
  const key = "ring-" + r + (pinned ? "-p" : "");
  let spr = marbleSpriteCache.get(key);
  if (spr) return spr;

  const blur = pinned ? 18 : 6;
  const pad = blur + 2;
  const size = Math.ceil((r + pad) * 2);
  spr = document.createElement("canvas");
  spr.width = size;
  spr.height = size;
  const g = spr.getContext("2d");
  g.shadowColor = pinned ? "#ffbe0b" : "rgba(0, 0, 0, 0.6)";
  g.shadowBlur = blur;
  g.strokeStyle = pinned ? "#ffbe0b" : "rgba(255, 255, 255, 0.4)";
  g.lineWidth = pinned ? 3.5 : 1;
  g.beginPath();
  g.arc(size / 2, size / 2, r, 0, Math.PI * 2);
  g.stroke();

  marbleSpriteCache.set(key, spr);
  return spr;
}

class FlagMarble {
  constructor(country, x, y, radius = 14.0) {
    this.country = country;
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.radius = radius;
    this.mass = 1;
    this.status = "inside"; // 'inside', 'trapped_center', 'eliminated'
    this.scale = 1.0;
    this.opacity = 1.0;
    this.angle = Math.random() * Math.PI * 2;
    this.vAngle = (Math.random() - 0.5) * 0.04;
    this.img = getFlagImage(country.code);
    this.shield = false;      // Luck Shield (armed by viewer hype voting)
    this.hypeCharge = 0;      // Viewer taps charged toward this marble
  }

  isPinned() {
    return gameConfig.pinnedCountryName &&
      this.country.name.toLowerCase() === gameConfig.pinnedCountryName.toLowerCase();
  }

  draw(ctx) {
    if (this.status === "eliminated" && this.opacity <= 0) return;

    // Dynamic speed trail for fast moving marbles (pre-baked sprite: zero per-frame gradients)
    const speed = Math.hypot(this.vx, this.vy);
    if (speed > 2.6 && this.status === "inside") {
      const trailAngle = Math.atan2(this.vy, this.vx);
      const trailLen = Math.min(speed * 3.4, this.radius * 2.8);
      const trailH = Math.max(10, this.radius * 1.2);
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, this.opacity)) * 0.9;
      ctx.translate(this.x, this.y);
      ctx.rotate(trailAngle);
      ctx.drawImage(getTrailSprite(this.isPinned()), -trailLen, -trailH / 2, trailLen, trailH);
      ctx.restore();
    }

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.scale, this.scale);
    ctx.globalAlpha = Math.max(0, Math.min(1, this.opacity));

    const r = this.radius;

    // Pre-baked overlay sprites (cached per radius: no per-frame gradient/shadow creation)
    const ringSpr = getRingSprite(r, this.isPinned());
    const shadeSpr = getShadeSprite(r);

    // Circular clip path for 3D Marble Sphere
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.save();
    ctx.clip();

    // 1. Draw Flag Texture with physical rolling marble rotation
    ctx.save();
    ctx.rotate(this.angle);
    const img = this.img || getFlagImage(this.country.code);
    if (img && img.complete && img.naturalWidth > 0) {
      ctx.drawImage(img, -r * 1.35, -r * 1.35, r * 2.7, r * 2.7);
    } else {
      // Fallback colors
      const colors = this.country.colors || ["#0055aa", "#ffffff"];
      const stripeH = (r * 2) / colors.length;
      colors.forEach((col, idx) => {
        ctx.fillStyle = col;
        ctx.fillRect(-r, -r + idx * stripeH, r * 2, stripeH + 0.5);
      });
    }
    ctx.restore();

    // 2. 3D Spherical Specular Highlight & Shading Overlay (pre-baked sprite, light stays top-left!)
    ctx.drawImage(shadeSpr, -shadeSpr.width / 2, -shadeSpr.height / 2);

    ctx.restore(); // unclip

    // 3. Crisp Border Ring (pre-baked glow sprite)
    ctx.drawImage(ringSpr, -ringSpr.width / 2, -ringSpr.height / 2);

    // Luck Shield aura (armed by viewer hype voting)
    if (this.shield && this.status === "inside") {
      ctx.save();
      ctx.setLineDash([6, 5]);
      ctx.lineDashOffset = -performance.now() * 0.04;
      ctx.strokeStyle = "rgba(0, 255, 136, 0.95)";
      ctx.shadowColor = "#00ff88";
      ctx.shadowBlur = 10;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(0, 0, r + 7, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // Pinned Golden Halo & Crown
    if (this.isPinned() && this.status === "inside") {
      ctx.save();
      const pulse = 1 + Math.sin(performance.now() * 0.008) * 0.08;
      ctx.strokeStyle = "#ffbe0b";
      ctx.shadowColor = "#ffbe0b";
      ctx.shadowBlur = 14;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(0, 0, (r + 4) * pulse, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = "#ffe600";
      ctx.font = "bold 10px 'Outfit', sans-serif";
      ctx.textAlign = "center";
      ctx.shadowColor = "rgba(0,0,0,0.9)";
      ctx.shadowBlur = 4;
      ctx.fillText("⭐ " + this.country.name.toUpperCase(), 0, -r - 7);
      ctx.restore();
    }

    ctx.restore();
  }
}

// Particle System
class Particle {
  constructor(x, y, color = "#00f0ff", speed = 2.5) {
    this.x = x;
    this.y = y;
    const a = Math.random() * Math.PI * 2;
    const s = (Math.random() * 0.7 + 0.3) * speed * 2.2;
    this.vx = Math.cos(a) * s;
    this.vy = Math.sin(a) * s;
    this.color = color;
    this.size = 2.0 + Math.random() * 3.5;
    this.life = 1.0;
    this.decay = 0.03 + Math.random() * 0.035;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.96;
    this.vy *= 0.96;
    this.life -= this.decay;
  }
  draw(ctx) {
    if (this.life <= 0) return;
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.life);
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 6;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * this.life, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// Interactive Shockwave Waveform Ring
class Shockwave {
  constructor(x, y, color = "#00f0ff", maxRadius = 95) {
    this.x = x;
    this.y = y;
    this.radius = 8;
    this.maxRadius = maxRadius;
    this.alpha = 1.0;
    this.life = 1.0;
    this.color = color;
  }
  update() {
    this.radius += 5.6;
    this.alpha = Math.max(0, 1 - (this.radius / this.maxRadius));
    this.life = this.alpha;
  }
  draw(ctx) {
    if (this.alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.strokeStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 14;

    // Outer primary shockwave ring
    ctx.lineWidth = 3.6 * this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();

    // Inner secondary echo ring
    if (this.radius > 16) {
      ctx.lineWidth = 1.8 * this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius - 12, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();
  }
}

// =============================================================================
// 5. ARENA SIMULATION & SPOKE OBSTACLE PHYSICS ENGINE
// =============================================================================
class ArenaSimulation {
  constructor() {
    this.canvas = document.getElementById("battleCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.container = document.getElementById("arenaContainer");
    this._spatialGridHead = null;
    this._spatialGridNext = null;
    this.setupResize();
    this.setupCanvasInteraction();
    this.setupAgitateButton();
    this.initArena();
    this.setupTimer();
  }

  setupCanvasInteraction() {
    if (!this.canvas) return;

    const handleAction = (clientX, clientY) => {
      audioSynth.init();
      const rect = this.canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // 1. Check if user clicked directly on any alive country flag marble
      let clickedFlag = null;
      const aliveFlags = gameState.flags.filter(f => f.status === "inside");
      for (let i = aliveFlags.length - 1; i >= 0; i--) {
        const f = aliveFlags[i];
        const dist = Math.hypot(f.x - x, f.y - y);
        if (dist <= f.radius * 1.6) {
          clickedFlag = f;
          break;
        }
      }

      if (clickedFlag) {
        // Pin & track country directly!
        gameConfig.pinnedCountryName = clickedFlag.country.name;
        this.updatePinnedCountryUI(clickedFlag.country);
        this.showToast(`⭐ TRACKING: ${clickedFlag.country.name.toUpperCase()}`, "highlight");
        audioSynth.playPinSuccess();

        // Spawn golden burst around selected marble
        for (let i = 0; i < 16; i++) {
          gameState.particles.push(new Particle(clickedFlag.x, clickedFlag.y, "#ffbe0b", 3.0));
        }
        return;
      }

      // 2. Otherwise: Interactive Physical Shockwave Ripple!
      this.triggerShockwave(x, y);
    };

    this.canvas.addEventListener("mousedown", (e) => {
      handleAction(e.clientX, e.clientY);
    });

    this.canvas.addEventListener("touchstart", (e) => {
      if (e.touches && e.touches[0]) {
        e.preventDefault();
        handleAction(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: false });
  }

  setupAgitateButton() {
    const btn = document.getElementById("btnAgitate");
    if (btn) {
      btn.addEventListener("click", () => {
        audioSynth.init();
        this.agitate(5.5);
        this.triggerScreenShake();
        this.showToast("⚡ ARENA JOLTED! ⚡", "highlight");
      });
    }
  }

  triggerShockwave(x, y, force = 4.2) {
    audioSynth.playShockwave();
    this.triggerScreenShake();

    // Add shockwave ring animation
    gameState.shockwaves.push(new Shockwave(x, y, "#00f0ff", 90));

    // Repel nearby alive marbles with real physical momentum
    const aliveFlags = gameState.flags.filter(f => f.status === "inside");
    aliveFlags.forEach(f => {
      const dx = f.x - x;
      const dy = f.y - y;
      const dist = Math.hypot(dx, dy) || 1;
      if (dist < 115) {
        const power = (1 - dist / 115) * force;
        f.vx += (dx / dist) * power * 2.4;
        f.vy += (dy / dist) * power * 2.4;
        f.angle += (Math.random() - 0.5) * 0.8;
      }
    });

    // Spawn 12 spark particles
    for (let i = 0; i < 12; i++) {
      gameState.particles.push(new Particle(x, y, i % 2 === 0 ? "#00f0ff" : "#ffe600", 2.8));
    }
  }

  triggerScreenShake() {
    if (!this.container) return;
    this.container.classList.remove("screen-shake");
    void this.container.offsetWidth;
    this.container.classList.add("screen-shake");
    setTimeout(() => {
      if (this.container) this.container.classList.remove("screen-shake");
    }, 240);
  }

  showToast(msg, type = "normal") {
    const overlay = document.getElementById("arenaToastOverlay");
    if (!overlay) return;

    // Prune so at most 2 toasts are ever displayed simultaneously
    while (overlay.children.length >= 2) {
      overlay.removeChild(overlay.firstChild);
    }

    const toast = document.createElement("div");
    toast.className = `arena-toast ${type}`;
    toast.textContent = msg;
    overlay.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 1800);
  }

  updatePinnedCountryUI(country) {
    const bar = document.getElementById("pinnedCountryBar");
    const flagEl = document.getElementById("pinnedFlagIcon");
    const nameEl = document.getElementById("pinnedCountryName");
    const statusEl = document.getElementById("pinnedCountryStatus");
    if (!bar || !country) return;

    bar.style.display = "flex";
    if (flagEl) flagEl.textContent = country.flag || "🏳️";
    if (nameEl) nameEl.textContent = country.name;
    if (statusEl) {
      statusEl.textContent = "IN ARENA (Alive)";
      statusEl.style.color = "#00ff88";
    }
  }

  setupResize() {
    this.handleResize();
    window.addEventListener("resize", () => this.handleResize());
  }

  handleResize() {
    const rect = this.container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = Math.round(rect.width * dpr);
    this.canvas.height = Math.round(rect.height * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const oldCenter = { ...gameState.arenaCenter };
    const oldR = gameState.arenaRadius;

    const wrapper = document.getElementById("gameWrapper");
    const isLandscape = gameConfig.isLandscape || (wrapper && wrapper.classList.contains("landscape-mode"));

    if (isLandscape) {
      const minDim = Math.min(this.width, this.height);
      gameState.arenaRadius = Math.max(120, (minDim / 2) - 16);
      gameState.arenaCenter = {
        x: this.width / 2,
        y: this.height / 2
      };
    } else {
      // Shorts / Portrait: Dynamically maximize circle to perfectly fit available flex space
      const maxRByWidth = (this.width / 2) - 12;
      const maxRByHeight = (this.height / 2) - 8;
      gameState.arenaRadius = Math.max(95, Math.min(maxRByWidth, maxRByHeight));
      gameState.arenaCenter = {
        x: this.width / 2,
        y: this.height / 2
      };
    }

    this.baseArenaRadius = gameState.arenaRadius;
    if (gameState.gameMode === "gauntlet") {
      const stage = GAUNTLET_STAGES[gameState.gauntlet.stageIndex] || GAUNTLET_STAGES[0];
      gameState.arenaRadius = Math.round(this.baseArenaRadius * (stage.radiusScale || 1.0));
    }

    gameState.centerRadius = gameState.arenaRadius * 0.23; // Compact yellow center hole matching reference video

    // If game is active and marbles exist, smoothly map marbles to new arena coordinates
    if (gameState.flags && gameState.flags.length > 0 && oldR > 0) {
      const scale = gameState.arenaRadius / oldR;
      gameState.flags.forEach(f => {
        if (f.status === "inside") {
          const relX = f.x - oldCenter.x;
          const relY = f.y - oldCenter.y;
          f.x = gameState.arenaCenter.x + relX * scale;
          f.y = gameState.arenaCenter.y + relY * scale;
        }
      });
    }
  }

  initArena() {
    if (gameState.gameMode === "gauntlet") {
      this.setupGauntletStage(gameState.gauntlet.stageIndex || 0);
      return;
    }

    gameState.flags = [];
    gameState.eliminatedList = [];
    gameState.simTime = 0;
    gameState.eliminationFeed = [];
    updateElimFeed();
    gameState.particles = [];
    gameState.centerGateAngle = 0;

    this._hitTop10 = false;
    this._hitTop5 = false;
    this._hitTop2 = false;

    // Reset header prompt question
    const pq = document.getElementById("promptQuestion");
    if (pq) pq.innerHTML = '<span class="pq-white">WHERE ARE</span> <span class="pq-yellow">YOU FROM?</span>';

    // Clear the eliminated flags cemetery grid
    const grid = document.getElementById("eliminatedFlagsGrid");
    if (grid) grid.innerHTML = "";

    const targetCount = (gameConfig.totalCountries === "all")
      ? COUNTRIES_DB.length
      : Math.min(parseInt(gameConfig.totalCountries) || 67, COUNTRIES_DB.length);

    // Top 10 Most Powerful Nations in the World are always guaranteed in every round!
    const powerfulSet = new Set(TOP_POWERFUL_CODES.map(c => c.toLowerCase()));
    const top10Powers = COUNTRIES_DB.filter(c => powerfulSet.has((c.code || "").toLowerCase()));
    const otherPool = COUNTRIES_DB.filter(c => !powerfulSet.has((c.code || "").toLowerCase()));

    // Randomize the remaining nations
    const shuffledOthers = shuffleArray(otherPool);

    // Assemble selected roster: always includes top 10 powers + random challenger nations
    let selected = [];
    if (targetCount >= top10Powers.length) {
      const needed = targetCount - top10Powers.length;
      selected = [...top10Powers, ...shuffledOthers.slice(0, needed)];
    } else {
      selected = [...top10Powers].slice(0, targetCount);
    }

    // If pinned country is chosen, ensure it's also in the arena
    if (gameConfig.pinnedCountryName) {
      const isAlreadyIn = selected.some(c => c.name.toLowerCase() === gameConfig.pinnedCountryName.toLowerCase());
      if (!isAlreadyIn) {
        const pinSource = COUNTRIES_DB.find(c => c.name.toLowerCase() === gameConfig.pinnedCountryName.toLowerCase());
        if (pinSource) {
          const replaceIdx = selected.findIndex(c => !powerfulSet.has((c.code || "").toLowerCase()));
          if (replaceIdx !== -1) {
            selected[replaceIdx] = pinSource;
          } else {
            selected[selected.length - 1] = pinSource;
          }
        }
      }
    }

    // Shuffle final selected roster so the top 10 powers are evenly distributed across the arena
    selected = shuffleArray(selected);

    const { x: cx, y: cy } = gameState.arenaCenter;
    const R = gameState.arenaRadius;
    const rInner = gameState.centerRadius;

    // Scale marble radius appropriately for a balanced ball size (with mobile visibility boost)
    const isMobileView = (window.innerWidth <= 768) || (window.innerHeight > window.innerWidth);
    const mobileBoost = isMobileView ? 1.20 : 1.0;
    const scaleFactor = Math.max(0.85, R / 200) * mobileBoost;

    let baseRadius = 13.0;
    if (targetCount > 150) {
      baseRadius = 10.5;
    } else if (targetCount > 90) {
      baseRadius = 12.0;
    } else if (targetCount > 50) {
      baseRadius = 14.0; // Clear, recognizable flag ball size
    } else {
      baseRadius = 16.0;
    }

    const marbleRadius = baseRadius * scaleFactor;

    // Spawn marbles between rInner + marbleRadius + 4 and R - marbleRadius - 4 in concentric golden spiral packing
    selected.forEach((country, idx) => {
      const phi = idx * 137.5 * (Math.PI / 180);
      const spawnMin = rInner + marbleRadius + 4;
      const spawnMax = R - marbleRadius - 4;
      const r = spawnMin + Math.sqrt((idx + 0.5) / targetCount) * (spawnMax - spawnMin);
      const x = cx + Math.cos(phi) * r;
      const y = cy + Math.sin(phi) * r;

      const marble = new FlagMarble(country, x, y, marbleRadius);
      // Gentle initial velocities in all directions for floating air-hockey / vortex action
      marble.vx = (Math.random() - 0.5) * 1.4;
      marble.vy = (Math.random() - 0.5) * 1.4;
      gameState.flags.push(marble);
    });

    // Initialize Continental Wars regional counts
    this.initContinentTracker();

    // Esports commentary match start
    voiceAnnouncer.speakCaster(`Round ${gameState.cycle} is LIVE! 67 nations enter, 5 continents clash!`, true);

    this.updateHUD();
    this.updateAnnouncerText("ALL ELIMINATED");
    this.updateTimerCircleUI();
  }

  setupGauntletStage(stageIndex = 0) {
    gameState.gauntlet.stageIndex = stageIndex;
    const stage = GAUNTLET_STAGES[stageIndex] || GAUNTLET_STAGES[0];

    gameState.flags = [];
    gameState.eliminatedList = [];
    gameState.particles = [];
    gameState.shockwaves = [];
    gameState.roundFinished = false;
    gameState.centerTrappedFlag = null;
    gameState.centerTrappedTime = 0;
    gameState.centerState = "closed";
    gameState.centerOpenProgress = 0;
    gameState.timerMax = 4.0;
    gameState.timerCountdown = 4.0;
    gameState.centerCooldown = 4.0;
    gameState.centerOpenDuration = 0;
    gameState.simTime = 0;
    gameState.eliminationFeed = [];
    updateElimFeed();
    gameState.spokesAngle = -Math.PI / 2;
    gameState.centerGateAngle = 0;
    gameState.gauntlet.innerSpokesAngle = 0;
    gameState.gauntlet.transitioning = false;

    this._hitTop10 = false;
    this._hitTop5 = false;
    this._hitTop2 = false;

    // Reset prompt question
    const pq = document.getElementById("promptQuestion");
    if (pq) {
      pq.innerHTML = `<span class="pq-yellow">STAGE ${stage.stage}:</span> <span class="pq-white">${stage.name}</span>`;
    }

    // Clear eliminated cemetery grid
    const grid = document.getElementById("eliminatedFlagsGrid");
    if (grid) grid.innerHTML = "";

    // Adjust arena radius based on stage scale (e.g. Stage 3 Toxic Shrink contracts by 28-30%)
    if (this.baseArenaRadius) {
      gameState.arenaRadius = Math.round(this.baseArenaRadius * (stage.radiusScale || 1.0));
      gameState.centerRadius = gameState.arenaRadius * 0.23;
    }

    const { x: cx, y: cy } = gameState.arenaCenter;
    const R = gameState.arenaRadius;
    const rInner = gameState.centerRadius;

    // Determine roster for this stage
    let selected = [];
    if (stageIndex === 0 || !gameState.gauntlet.qualifiedRoster || gameState.gauntlet.qualifiedRoster.length === 0) {
      const powerfulSet = new Set(TOP_POWERFUL_CODES.map(c => c.toLowerCase()));
      const top10Powers = COUNTRIES_DB.filter(c => powerfulSet.has((c.code || "").toLowerCase()));
      const otherPool = COUNTRIES_DB.filter(c => !powerfulSet.has((c.code || "").toLowerCase()));
      const shuffledOthers = shuffleArray(otherPool);
      const needed = Math.max(0, stage.startingCount - top10Powers.length);
      selected = [...top10Powers, ...shuffledOthers.slice(0, needed)];
      if (gameConfig.pinnedCountryName) {
        const isAlreadyIn = selected.some(c => c.name.toLowerCase() === gameConfig.pinnedCountryName.toLowerCase());
        if (!isAlreadyIn) {
          const pinSource = COUNTRIES_DB.find(c => c.name.toLowerCase() === gameConfig.pinnedCountryName.toLowerCase());
          if (pinSource) selected[selected.length - 1] = pinSource;
        }
      }
      selected = shuffleArray(selected);
    } else {
      selected = shuffleArray(gameState.gauntlet.qualifiedRoster);
    }

    // Dynamic ball sizing with mobile visibility boost
    const isMobileView = (window.innerWidth <= 768) || (window.innerHeight > window.innerWidth);
    const mobileBoost = isMobileView ? 1.20 : 1.0;
    const scaleFactor = Math.max(0.85, R / 200) * mobileBoost;
    let baseRadius = 13.0;
    if (selected.length > 50) baseRadius = 14.0;
    else if (selected.length > 20) baseRadius = 15.5;
    else if (selected.length > 8) baseRadius = 17.0;
    else baseRadius = 19.5; // Final 4 Grand Final: larger, dramatic golden marbles!

    const marbleRadius = baseRadius * scaleFactor;

    selected.forEach((country, idx) => {
      const phi = idx * 137.5 * (Math.PI / 180);
      const spawnMin = rInner + marbleRadius + 6;
      const spawnMax = R - marbleRadius - 6;
      const r = spawnMin + Math.sqrt((idx + 0.5) / Math.max(1, selected.length)) * (spawnMax - spawnMin);
      const x = cx + Math.cos(phi) * r;
      const y = cy + Math.sin(phi) * r;

      const marble = new FlagMarble(country, x, y, marbleRadius);
      marble.vx = (Math.random() - 0.5) * 1.5;
      marble.vy = (Math.random() - 0.5) * 1.5;
      gameState.flags.push(marble);
    });

    this.initContinentTracker();
    this.updateGauntletHUD();

    audioSynth.playStageStartAlert();
    voiceAnnouncer.speakCaster(`Stage ${stage.stage} is LIVE! ${stage.name}: ${stage.subtitle}`, true);
    this.showToast(`🔥 STAGE ${stage.stage}: ${stage.name} IS LIVE!`, "highlight");

    this.updateHUD();
    this.updateAnnouncerText(`STAGE ${stage.stage}: ${stage.name}`);
    this.updateTimerCircleUI();
  }

  updateGauntletHUD() {
    const stageBar = document.getElementById("gauntletStageBar");
    if (!stageBar) return;
    if (gameState.gameMode !== "gauntlet") {
      stageBar.style.display = "none";
      return;
    }
    stageBar.style.display = "flex";

    const currentIdx = gameState.gauntlet.stageIndex;
    for (let i = 1; i <= 4; i++) {
      const step = document.getElementById(`gStep${i}`);
      if (!step) continue;
      const stepIdx = i - 1;
      step.classList.remove("active", "cleared");
      if (stepIdx < currentIdx) {
        step.classList.add("cleared");
      } else if (stepIdx === currentIdx) {
        step.classList.add("active");
      }
    }
  }

  onGauntletStageCleared(survivors) {
    if (gameState.gauntlet.transitioning) return;
    gameState.gauntlet.transitioning = true;
    gameState.running = false;

    audioSynth.init();
    audioSynth.playStageClearFanfare();
    this.triggerScreenShake(8);

    const currentStageIndex = gameState.gauntlet.stageIndex;
    const currentStage = GAUNTLET_STAGES[currentStageIndex];
    const nextStage = GAUNTLET_STAGES[currentStageIndex + 1];

    const qualifiedCountries = survivors.map(f => f.country);
    gameState.gauntlet.qualifiedRoster = qualifiedCountries;

    // Fireworks
    const { x: cx, y: cy } = gameState.arenaCenter;
    for (let i = 0; i < 40; i++) {
      gameState.particles.push(new Particle(cx, cy, i % 2 === 0 ? currentStage.themeColor : "#ffe600", 3.5));
    }

    voiceAnnouncer.speakCaster(`Stage ${currentStage.stage} cleared! ${qualifiedCountries.length} nations advance to Stage ${nextStage.stage}, ${nextStage.name}!`, true);

    const overlay = document.getElementById("stageTransitionOverlay");
    const ribbon = document.getElementById("stageRibbonText");
    const headline = document.getElementById("stageHeadlineText");
    const subheadline = document.getElementById("stageSubheadlineText");
    const rosterEl = document.getElementById("stageAdvancingRoster");
    const countdownEl = document.getElementById("stageCountdownSec");

    if (ribbon) ribbon.textContent = `STAGE ${currentStage.stage} COMPLETE!`;
    if (headline) headline.textContent = `🎉 STAGE ${currentStage.stage} CLEARED!`;
    if (subheadline) subheadline.textContent = `${qualifiedCountries.length} Nations Advance to Stage ${nextStage.stage}: ${nextStage.name}!`;

    if (rosterEl) {
      rosterEl.innerHTML = "";
      qualifiedCountries.slice(0, 32).forEach(c => {
        const code = (c.code || "").toLowerCase();
        const img = document.createElement("img");
        img.className = "stage-advancing-flag";
        img.title = c.name;
        img.alt = c.name;
        if (code) {
          img.src = `https://flagcdn.com/w40/${code}.png`;
        } else {
          img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'/>";
        }
        rosterEl.appendChild(img);
      });
    }

    if (overlay) {
      overlay.style.display = "flex";
      overlay.classList.add("show");
    }

    let count = 3;
    if (countdownEl) countdownEl.textContent = count;
    if (this._stageCountdownInterval) clearInterval(this._stageCountdownInterval);
    const stageTargetTime = Date.now() + 3000;
    this._stageCountdownInterval = setInterval(() => {
      const remainingMs = stageTargetTime - Date.now();
      const currentCount = Math.max(0, Math.ceil(remainingMs / 1000));
      if (countdownEl) countdownEl.textContent = currentCount;
      if (remainingMs <= 0) {
        clearInterval(this._stageCountdownInterval);
        this._stageCountdownInterval = null;
        if (overlay) {
          overlay.classList.remove("show");
          overlay.style.display = "none";
        }
        this.advanceGauntletStage();
      }
    }, 200);
  }

  advanceGauntletStage() {
    gameState.gauntlet.stageIndex++;
    if (gameState.gauntlet.stageIndex >= GAUNTLET_STAGES.length) {
      gameState.gauntlet.stageIndex = 0;
    }
    this.setupGauntletStage(gameState.gauntlet.stageIndex);
    gameState.gauntlet.transitioning = false;
    gameState.running = true;
    this.updatePlayPauseUI();
  }

  setBattleMode(mode) {
    if (mode === gameState.gameMode && mode === "gauntlet" && gameState.gauntlet.active) return;
    gameState.gameMode = mode;
    gameState.gauntlet.active = (mode === "gauntlet");

    const badgeToggle = document.getElementById("btnModeBadgeToggle");
    const badgeIcon = document.getElementById("modeBadgeIcon");
    const badgeText = document.getElementById("modeBadgeText");

    if (mode === "gauntlet") {
      if (badgeToggle) badgeToggle.classList.add("gauntlet-active");
      if (badgeIcon) badgeIcon.textContent = "🏆";
      if (badgeText) badgeText.textContent = "SURVIVAL GAUNTLET";
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("mode", "gauntlet");
        window.history.replaceState({}, "", url.toString());
      } catch (e) {}
    } else {
      if (badgeToggle) badgeToggle.classList.remove("gauntlet-active");
      if (badgeIcon) badgeIcon.textContent = "🔥";
      if (badgeText) badgeText.textContent = "BATTLE ROYALE";
      try {
        const url = new URL(window.location.href);
        url.searchParams.delete("mode");
        window.history.replaceState({}, "", url.toString());
      } catch (e) {}
    }

    const hubGauntlet = document.getElementById("hubBtnGauntlet");
    document.querySelectorAll(".hub-nav .hub-btn").forEach(btn => btn.classList.remove("active"));
    if (mode === "gauntlet" && hubGauntlet) {
      hubGauntlet.classList.add("active");
    } else {
      const firstHub = document.querySelector(".hub-nav .hub-btn:not(.gauntlet-hub-btn)");
      if (firstHub) firstHub.classList.add("active");
    }

    document.querySelectorAll(".mode-card").forEach(card => {
      card.classList.toggle("active", card.dataset.mode === mode);
    });

    if (mode === "gauntlet") {
      gameState.gauntlet.stageIndex = 0;
      gameState.gauntlet.qualifiedRoster = [];
      gameState.gauntlet.transitioning = false;
      this.setupGauntletStage(0);
    } else {
      const stageBar = document.getElementById("gauntletStageBar");
      if (stageBar) stageBar.style.display = "none";
      if (this.baseArenaRadius) {
        gameState.arenaRadius = this.baseArenaRadius;
        gameState.centerRadius = gameState.arenaRadius * 0.23;
      }
      this.initArena();
    }

    gameState.running = true;
    this.updatePlayPauseUI();
  }

  initContinentTracker() {
    gameState.continentCounts = { Asia: 0, Europe: 0, Americas: 0, Africa: 0, Oceania: 0 };
    gameState.wipedContinents = new Set();
    gameState.continentalShowdownAnnounced = false;

    // Count countries per continent in active roster
    gameState.flags.forEach(f => {
      const cont = getCountryContinent(f.country);
      f.country.continent = cont;
      gameState.continentCounts[cont] = (gameState.continentCounts[cont] || 0) + 1;
    });

    this.updateContinentUI();
  }

  updateContinentUI(updatedContinent) {
    const contKeys = ["Asia", "Europe", "Americas", "Africa", "Oceania"];
    contKeys.forEach(cont => {
      const count = gameState.continentCounts[cont] || 0;
      const countEl = document.getElementById(`contCount${cont}`);
      const pillEl = document.getElementById(`contPill${cont}`);
      if (countEl) {
        countEl.textContent = count;
      }
      if (pillEl) {
        if (cont === updatedContinent) {
          pillEl.classList.remove("count-pop");
          void pillEl.offsetWidth;
          pillEl.classList.add("count-pop");
        }
        if (count === 0) {
          pillEl.classList.add("wiped-out");
          pillEl.classList.remove("danger-last");
        } else if (count === 1) {
          pillEl.classList.add("danger-last");
          pillEl.classList.remove("wiped-out");
        } else {
          pillEl.classList.remove("wiped-out", "danger-last");
        }
      }
    });
  }

  setupTimer() {
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);
    gameState.timerInterval = null;
    gameState.timerMax = 4.0;
    gameState.timerCountdown = 4.0;
    this.updateTimerCircleUI();
  }

  updateTimerCircleUI() {
    const arc = document.getElementById("timerProgressArc");
    const num = document.getElementById("timerDisplayNum");
    const widget = document.getElementById("timerCircleWidget");
    if (!arc || !num) return;

    // When timer hits 0 or during opening capture: Turns into glowing pink "!" (Exact match to seq_003.jpg!)
    if (gameState.timerCountdown <= 0.08 || (gameState.centerState === "open" && gameState.centerOpenProgress >= 0.7)) {
      if (widget) widget.classList.add("alert-mode");
      num.textContent = "!";
      arc.style.strokeDashoffset = "0";
    } else {
      if (widget) widget.classList.remove("alert-mode");
      const displayNum = Math.max(1, Math.ceil(gameState.timerCountdown));
      num.textContent = displayNum;
      // 2 * PI * 18 = 113.1
      const totalCirc = 113.1;
      const fraction = Math.max(0, Math.min(1, gameState.timerCountdown / gameState.timerMax));
      arc.style.strokeDashoffset = totalCirc * (1 - fraction);
    }
  }

  agitate(power = 4.5) {
    const { x: cx, y: cy } = gameState.arenaCenter;
    gameState.flags.forEach(f => {
      if (f.status === "inside") {
        const dx = f.x - cx;
        const dy = f.y - cy;
        const angle = Math.atan2(dy, dx);
        f.vx += Math.cos(angle + 1.2) * (Math.random() * power);
        f.vy += Math.sin(angle + 1.2) * (Math.random() * power);
        f.angle += (Math.random() - 0.5) * 0.8;
      }
    });
    audioSynth.playSpokeHit(1.5);
  }

  resolveMarbleCollision(f1, f2) {
    const cdx = f2.x - f1.x;
    const cdy = f2.y - f1.y;
    const minDist = f1.radius + f2.radius;
    const distSq = cdx * cdx + cdy * cdy;

    if (distSq < minDist * minDist && distSq > 0.0001) {
      const cdist = Math.sqrt(distSq);
      const nx = cdx / cdist;
      const ny = cdy / cdist;

      const overlap = 0.5 * (minDist - cdist) + 0.3;
      f1.x -= nx * overlap;
      f1.y -= ny * overlap;
      f2.x += nx * overlap;
      f2.y += ny * overlap;

      const kx = f1.vx - f2.vx;
      const ky = f1.vy - f2.vy;
      const dot = nx * kx + ny * ky;

      if (dot > 0) {
        const restitution = 0.92 + gameConfig.bounciness * 0.15;
        const impulse = ((1 + restitution) * dot) / (f1.mass + f2.mass);
        f1.vx -= impulse * f2.mass * nx;
        f1.vy -= impulse * f2.mass * ny;
        f2.vx += impulse * f1.mass * nx;
        f2.vy += impulse * f1.mass * ny;

        // Transfer spin from glancing impacts
        const tangentX = -ny;
        const tangentY = nx;
        const tangentVel = kx * tangentX + ky * tangentY;
        f1.angle += tangentVel * 0.02;
        f2.angle -= tangentVel * 0.02;

        if (impulse > 1.2) {
          audioSynth.playBilliardClack(Math.min(1.5, impulse * 0.5));
        }
      }
    }
  }

  handleMarbleCollisions(aliveFlags, cx, cy, R) {
    const n = aliveFlags.length;
    if (n < 2) return;

    // Direct check for very small player counts
    if (n <= 4) {
      for (let i = 0; i < n; i++) {
        const f1 = aliveFlags[i];
        for (let j = i + 1; j < n; j++) {
          this.resolveMarbleCollision(f1, aliveFlags[j]);
        }
      }
      return;
    }

    // Determine cell size based on current max marble diameter
    let maxR = 13.0;
    for (let i = 0; i < n; i++) {
      if (aliveFlags[i].radius > maxR) maxR = aliveFlags[i].radius;
    }
    const cellSize = Math.max(24, Math.ceil(maxR * 2 + 2));

    const minX = cx - R - 10;
    const minY = cy - R - 10;
    const span = (R + 10) * 2;
    const cols = Math.max(1, Math.ceil(span / cellSize));
    const rows = Math.max(1, Math.ceil(span / cellSize));
    const totalCells = cols * rows;

    if (!this._spatialGridHead || this._spatialGridHead.length < totalCells) {
      this._spatialGridHead = new Int32Array(totalCells);
    }
    if (!this._spatialGridNext || this._spatialGridNext.length < n) {
      this._spatialGridNext = new Int32Array(Math.max(256, n + 32));
    }

    const head = this._spatialGridHead;
    const next = this._spatialGridNext;
    head.fill(-1, 0, totalCells);

    // 1. Hash all alive marbles into spatial grid cells
    for (let i = 0; i < n; i++) {
      const f = aliveFlags[i];
      let col = Math.floor((f.x - minX) / cellSize);
      let row = Math.floor((f.y - minY) / cellSize);
      if (col < 0) col = 0; else if (col >= cols) col = cols - 1;
      if (row < 0) row = 0; else if (row >= rows) row = rows - 1;
      const cellIdx = row * cols + col;
      next[i] = head[cellIdx];
      head[cellIdx] = i;
    }

    // 4 directional neighbor cell offsets: [Right, Down-Left, Down, Down-Right]
    // Guarantees every adjacent cell pair is checked exactly once without duplicate checks
    const neighborOffsets = [[1, 0], [-1, 1], [0, 1], [1, 1]];

    // 2. Resolve collisions within cells and across adjacent cells
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const cellIdx = row * cols + col;
        const pFirst = head[cellIdx];
        if (pFirst === -1) continue;

        // Internal cell pairs
        let p1 = pFirst;
        while (p1 !== -1) {
          const f1 = aliveFlags[p1];
          let p2 = next[p1];
          while (p2 !== -1) {
            this.resolveMarbleCollision(f1, aliveFlags[p2]);
            p2 = next[p2];
          }
          p1 = next[p1];
        }

        // 4 Adjacent neighbor cells
        for (let o = 0; o < 4; o++) {
          const nCol = col + neighborOffsets[o][0];
          const nRow = row + neighborOffsets[o][1];
          if (nCol < 0 || nCol >= cols || nRow < 0 || nRow >= rows) continue;
          const pNeighbor = head[nRow * cols + nCol];
          if (pNeighbor === -1) continue;

          let a = pFirst;
          while (a !== -1) {
            const f1 = aliveFlags[a];
            let b = pNeighbor;
            while (b !== -1) {
              this.resolveMarbleCollision(f1, aliveFlags[b]);
              b = next[b];
            }
            a = next[a];
          }
        }
      }
    }
  }

  stepPhysics(dt) {
    const { x: cx, y: cy } = gameState.arenaCenter;
    const R = gameState.arenaRadius;
    const rInner = gameState.centerRadius;

    // Frame-rate normalized time scaling (anchored to 60fps baseline, supports 60Hz, 120Hz, 144Hz, 165Hz)
    const timeScale = Math.max(0.2, Math.min(dt * 60, 2.0)) * gameConfig.speedMultiplier * 0.75;

    // Accumulate simulated match time (drives survival-time stats on the elimination board)
    gameState.simTime = (gameState.simTime || 0) + dt;

    // Rotate obstacles counter-clockwise (CCW) smoothly
    let currentSpokeSpeed = gameConfig.spokeSpeed;
    if (gameState.gameMode === "gauntlet") {
      const gStage = GAUNTLET_STAGES[gameState.gauntlet.stageIndex];
      if (gStage) currentSpokeSpeed *= (gStage.spokeSpeedMultiplier || 1.0);
    }
    if (gameState.gameMode === "gauntlet") {
      const gStage = GAUNTLET_STAGES[gameState.gauntlet.stageIndex];
      if (gStage && gStage.dualBlades) {
        const innerSpeed = currentSpokeSpeed * 1.55;
        gameState.gauntlet.innerSpokesAngle = ((gameState.gauntlet.innerSpokesAngle || 0) + innerSpeed * timeScale) % (Math.PI * 2);
      }
    }

    // Precompute inner counter-rotating blade endpoints ONCE per frame (Gauntlet Stage 2+)
    let innerBlades = null;
    if (gameState.gameMode === "gauntlet") {
      const gStageInner = GAUNTLET_STAGES[gameState.gauntlet.stageIndex];
      if (gStageInner && gStageInner.dualBlades) {
        const ibInnerR = rInner * 1.05;
        const ibOuterR = R * 0.52;
        innerBlades = [];
        const ibAngles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
        for (let ib = 0; ib < ibAngles.length; ib++) {
          const a = (ibAngles[ib] + (gameState.gauntlet.innerSpokesAngle || 0)) % (Math.PI * 2);
          const cosA = Math.cos(a);
          const sinA = Math.sin(a);
          innerBlades.push([cx + cosA * ibInnerR, cy + sinA * ibInnerR, cx + cosA * ibOuterR, cy + sinA * ibOuterR]);
        }
      }
    }

    // Reusable scratch buffer (avoids a fresh array allocation every physics substep)
    const aliveFlags = this._aliveScratch || (this._aliveScratch = []);
    aliveFlags.length = 0;
    for (let afi = 0; afi < gameState.flags.length; afi++) {
      if (gameState.flags[afi].status === "inside") aliveFlags.push(gameState.flags[afi]);
    }

    // High-Stakes Milestones
    if (aliveFlags.length <= 5) {
      currentSpokeSpeed *= 1.25; // Accelerate spokes for high-tension climax!
    }

    if (aliveFlags.length === 10 && !this._hitTop10) {
      this._hitTop10 = true;
      this.showToast("🔥 TOP 10 SURVIVORS REMAINING! 🔥", "highlight");
      this.triggerScreenShake();
      pushChat("FINAL 10!! 🍿👀");
      const pq = document.getElementById("promptQuestion");
      if (pq) pq.innerHTML = '<span class="pq-yellow">TOP 10</span> <span class="pq-white">SURVIVORS!</span>';
    } else if (aliveFlags.length === 5 && !this._hitTop5) {
      this._hitTop5 = true;
      this.showToast("⚡ FINAL 5 CONTENDERS! ⚡", "highlight");
      this.triggerScreenShake();
      pushChat("FINAL 5 😭🔥");
      const pq = document.getElementById("promptQuestion");
      if (pq) pq.innerHTML = '<span class="pq-yellow">FINAL 5</span> <span class="pq-white">CHAMPIONS!</span>';
    } else if (aliveFlags.length === 2 && !this._hitTop2) {
      this._hitTop2 = true;
      this.showToast("⚔️ THE FINAL 1v1 DUEL! ⚔️", "duel");
      this.triggerScreenShake();
      pushChat("THE DUEL 🍿🔥(popcorn time)");
      const pq = document.getElementById("promptQuestion");
      if (pq) pq.innerHTML = '<span class="pq-yellow">⚡ FINAL</span> <span class="pq-white">1v1 DUEL ⚡</span>';
    }

    gameState.spokesAngle = (gameState.spokesAngle - currentSpokeSpeed * timeScale) % (Math.PI * 2);

    // (Inner counter-rotating blades are updated & precomputed earlier in this step)

    // DRAMA PACING ENGINE: elimination rhythm tightens early, slows for the finale
    gameState.timerMax = (aliveFlags.length <= 10) ? 6.5
      : (aliveFlags.length <= 25) ? 4.6
      : (aliveFlags.length >= 45) ? 3.2
      : 4.0;

    // 4-SECOND TIMER COUNTDOWN & MINI-CIRCLE ELIMINATION
    if (!gameState.roundFinished && aliveFlags.length > 1) {
      gameState.timerCountdown -= dt * gameConfig.speedMultiplier;

      // When countdown is in final 1.4 seconds: Mini circle starts OPENING & vortex activates!
      if (gameState.timerCountdown <= 1.4 && gameState.timerCountdown > 0) {
        gameState.centerState = "open";
        gameState.centerOpenProgress = Math.min(1.0, (1.4 - gameState.timerCountdown) / 0.9);
        audioSynth.playHazardTick(1.0 - gameState.timerCountdown / 1.4);
      } else if (gameState.timerCountdown > 1.4 && !gameState.centerTrappedFlag) {
        gameState.centerState = "closed";
        gameState.centerOpenProgress = 0;
      }

      // AS SOON AS 4-SECOND TIMER HITS ZERO (0):
      if (gameState.timerCountdown <= 0 && !gameState.centerTrappedFlag) {
        gameState.centerState = "open";
        gameState.centerOpenProgress = 1.0;

        // Pull in whichever country is currently inside or closest to the center void!
        let targetFlag = null;
        let minDistance = Infinity;

        for (let i = 0; i < aliveFlags.length; i++) {
          const f = aliveFlags[i];
          const dist = Math.hypot(f.x - cx, f.y - cy);
          if (dist < minDistance) {
            minDistance = dist;
            targetFlag = f;
          }
        }

        if (targetFlag) {
          this.handleCenterCapture(targetFlag);
        }
      }
    }

    this.updateTimerCircleUI();

    // 6 Spoke Dividers angles: 0, 60, 120, 180, 240, 300 deg + spokesAngle
    const spokeAngles = [0, Math.PI / 3, (2 * Math.PI) / 3, Math.PI, (4 * Math.PI) / 3, (5 * Math.PI) / 3];

    const spokeInnerR = R * 0.48; // Open corridor around center circle
    const spokeOuterR = R;        // Outer anchor
    const spokeThickness = 14;
    const omega = currentSpokeSpeed * timeScale;

    // Precompute spoke endpoints ONCE per frame (shared by all marbles instead of per-marble recomputation)
    const outerSpokes = [];
    for (let os = 0; os < spokeAngles.length; os++) {
      const a = (spokeAngles[os] + gameState.spokesAngle) % (Math.PI * 2);
      const cosA = Math.cos(a);
      const sinA = Math.sin(a);
      outerSpokes.push([cx + cosA * spokeInnerR, cy + sinA * spokeInnerR, cx + cosA * spokeOuterR, cy + sinA * spokeOuterR]);
    }

    for (let i = 0; i < aliveFlags.length; i++) {
      const f1 = aliveFlags[i];
      if (f1.status !== "inside") continue;

      // Apply configurable downward gravity before integrating the flag position.
      // The 0.08 scale keeps the default gentle and the maximum setting clearly noticeable.
      f1.vy += gameConfig.gravity * 0.08 * timeScale;
      f1.x += f1.vx * timeScale;
      f1.y += f1.vy * timeScale;
      
      // Update rolling marble angular spin from velocity
      f1.angle += (f1.vx * 0.045 + f1.vy * 0.035) * timeScale;

      // Realistic inertia air damping
      f1.vx *= Math.pow(0.994, timeScale);
      f1.vy *= Math.pow(0.994, timeScale);

      const dx = f1.x - cx;
      const dy = f1.y - cy;
      const dist = Math.hypot(dx, dy) || 1;

      // Gentle orbital circulation swirl (keeps balls floating smoothly across arena)
      f1.vx += (-dy / dist) * 0.022 * timeScale;
      f1.vy += (dx / dist) * 0.022 * timeScale;

      // Natural speed bounds: lively, responsive, without feeling sluggish or runaway
      const currentSpeed = Math.hypot(f1.vx, f1.vy);
      if (currentSpeed < 0.6) {
        const boostAngle = currentSpeed > 0.05 ? Math.atan2(f1.vy, f1.vx) : Math.random() * Math.PI * 2;
        f1.vx += Math.cos(boostAngle) * 0.45;
        f1.vy += Math.sin(boostAngle) * 0.45;
      } else if (currentSpeed > 7.0) {
        f1.vx = (f1.vx / currentSpeed) * 7.0;
        f1.vy = (f1.vy / currentSpeed) * 7.0;
      }

      // 1. OUTER CIRCLE WALL COLLISION
      if (dist + f1.radius >= R) {
        const nx = dx / dist;
        const ny = dy / dist;
        f1.x = cx + nx * (R - f1.radius - 1.5);
        f1.y = cy + ny * (R - f1.radius - 1.5);
        const dot = f1.vx * nx + f1.vy * ny;
        const bounceVel = Math.max(1.4, Math.abs(dot) * (0.85 + gameConfig.bounciness * 0.25));
        f1.vx -= nx * bounceVel;
        f1.vy -= ny * bounceVel;
        f1.angle += (Math.random() - 0.5) * 0.4;
        audioSynth.playBilliardClack(Math.min(1.5, Math.abs(dot)));
      }

      // 2. CENTER CIRCLE LOGIC:
      // When YELLOW (closed): Flag balls can freely pass over / roll through the center circle!
      // When RED (open): Gravitational vortex actively sucks nearby marbles in!
      if (gameState.centerState === "open" && gameState.centerOpenProgress >= 0.25) {
        const vortexBoost = (gameState.gameMode === "gauntlet")
          ? (GAUNTLET_STAGES[gameState.gauntlet.stageIndex]?.vortexBoost || 1.0)
          : 1.0;
        const vortexRadius = rInner * (1.6 + 0.8 * gameState.centerOpenProgress) * (vortexBoost > 1.3 ? 1.15 : 1.0);
        if (dist < vortexRadius) {
          const suctionPower = (0.42 + 0.55 * gameState.centerOpenProgress) * vortexBoost * timeScale;
          f1.vx -= (dx / dist) * suctionPower;
          f1.vy -= (dy / dist) * suctionPower;

          // Swirl spin around the center
          f1.vx += (-dy / dist) * (0.24 * gameState.centerOpenProgress * vortexBoost) * timeScale;
          f1.vy += (dx / dist) * (0.24 * gameState.centerOpenProgress * vortexBoost) * timeScale;
        }

        // Near-Miss Dramatic Escape Detection (Prioritized for Pinned Country or High-Stakes Endgame)
        const isPinnedBall = f1.isPinned();
        const nowMs = performance.now();
        const canToast = isPinnedBall || (aliveFlags.length <= 25 && nowMs - (this._lastEscapeToastTime || 0) > 4000);

        if (dist < rInner + 14 && (f1.vx * dx + f1.vy * dy) > 1.2 && !f1._escapedToast) {
          f1._escapedToast = true;
          setTimeout(() => { f1._escapedToast = false; }, 3000);
          audioSynth.playNearMissWhoosh();
          if (canToast) {
            this._lastEscapeToastTime = nowMs;
            const toastLabel = isPinnedBall
              ? `🔥 YOUR COUNTRY (${f1.country.name.toUpperCase()}) NARROW ESCAPE! 😱`
              : `🔥 ${f1.country.name.toUpperCase()} NARROW ESCAPE! 😱`;
            this.showToast(toastLabel, "highlight");
            voiceAnnouncer.speakCaster(`Insane clutch escape by ${f1.country.name}! Millimeters from elimination!`);
          }
          for (let k = 0; k < 6; k++) {
            gameState.particles.push(new Particle(f1.x, f1.y, "#ffbe0b", 2.0));
          }
          pushChat("OOOOH 😱 THAT WAS SO CLOSE");
        }

        // Did this ball enter the red elimination circle?
        if (dist <= rInner + f1.radius * 0.35 && !gameState.centerTrappedFlag) {
          this.handleCenterCapture(f1);
          continue; // Ball is now trapped, skip further collisions
        }
      }

      // 3. COLLISION WITH 6 PURPLE RADIAL SPOKES (endpoints precomputed once per frame)
      for (let si = 0; si < outerSpokes.length; si++) {
        const p1x = outerSpokes[si][0];
        const p1y = outerSpokes[si][1];
        const p2x = outerSpokes[si][2];
        const p2y = outerSpokes[si][3];

        // Closest point on segment to ball
        const segDx = p2x - p1x;
        const segDy = p2y - p1y;
        const segLenSq = segDx * segDx + segDy * segDy;
        const t = Math.max(0, Math.min(1, ((f1.x - p1x) * segDx + (f1.y - p1y) * segDy) / segLenSq));
        const nearX = p1x + t * segDx;
        const nearY = p1y + t * segDy;

        const cdx = f1.x - nearX;
        const cdy = f1.y - nearY;
        let cdist = Math.hypot(cdx, cdy);
        const minDist = f1.radius + spokeThickness / 2;

        if (cdist < minDist) {
          let nx, ny;
          if (cdist > 0.0001) {
            nx = cdx / cdist;
            ny = cdy / cdist;
          } else {
            const segLen = Math.sqrt(segLenSq) || 1;
            nx = -segDy / segLen;
            ny = segDx / segLen;
          }

          // Safety separation buffer
          f1.x = nearX + nx * (minDist + 2.0);
          f1.y = nearY + ny * (minDist + 2.0);

          // Linear velocity vector of this point on the CCW rotating spoke
          const rx = nearX - cx;
          const ry = nearY - cy;
          const spokeVx = ry * omega;
          const spokeVy = -rx * omega;

          // Relative velocity
          const relVx = f1.vx - spokeVx;
          const relVy = f1.vy - spokeVy;
          const relNorm = relVx * nx + relVy * ny;

          // High-energy pinball flipper physics:
          // Spoke imparts its rotational tangential velocity to the marble!
          const spokeKick = Math.hypot(spokeVx, spokeVy) * 1.35;
          const bounceFactor = 1.1 + gameConfig.bounciness * 0.3;
          const bounceSpeed = Math.max(2.4, Math.abs(relNorm) * bounceFactor + spokeKick);

          // Fling the ball forward along the rotation vector + outward normal
          f1.vx = spokeVx * 0.6 + nx * bounceSpeed + (Math.random() - 0.5) * 0.4;
          f1.vy = spokeVy * 0.6 + ny * bounceSpeed + (Math.random() - 0.5) * 0.4;
          f1.angle += (Math.random() > 0.5 ? 1 : -1) * 0.4;

          // If wedged near outer wall, deflect inward towards center corridor
          if (dist > R - f1.radius - 12) {
            const rDist = Math.hypot(nearX - cx, nearY - cy) || 1;
            const radialUnitX = (nearX - cx) / rDist;
            const radialUnitY = (nearY - cy) / rDist;
            f1.vx -= radialUnitX * 1.8;
            f1.vy -= radialUnitY * 1.8;
            f1.x -= radialUnitX * 1.5;
            f1.y -= radialUnitY * 1.5;
          }

          // Emit 2-4 bright spoke sparks at impact
          if (bounceSpeed > 3.0) {
            for (let k = 0; k < 3; k++) {
              gameState.particles.push(new Particle(nearX, nearY, "#a28fed", 2.2));
            }
          }

          audioSynth.playSpokeHit(Math.min(2.0, bounceSpeed * 0.28));
        }
      }

      // 3B. COLLISION WITH INNER COUNTER-ROTATING BLADES (endpoints precomputed once per frame)
      if (innerBlades) {
        const innerSpokeThickness = 12;
        const innerOmega = -currentSpokeSpeed * 1.55 * timeScale; // CW rotation

        for (let bi = 0; bi < innerBlades.length; bi++) {
          const p1x = innerBlades[bi][0];
          const p1y = innerBlades[bi][1];
          const p2x = innerBlades[bi][2];
          const p2y = innerBlades[bi][3];

            const segDx = p2x - p1x;
            const segDy = p2y - p1y;
            const segLenSq = segDx * segDx + segDy * segDy;
            const t = Math.max(0, Math.min(1, ((f1.x - p1x) * segDx + (f1.y - p1y) * segDy) / segLenSq));
            const nearX = p1x + t * segDx;
            const nearY = p1y + t * segDy;

            const cdx = f1.x - nearX;
            const cdy = f1.y - nearY;
            let cdist = Math.hypot(cdx, cdy);
            const minDist = f1.radius + innerSpokeThickness / 2;

            if (cdist < minDist) {
              let nx, ny;
              if (cdist > 0.0001) {
                nx = cdx / cdist;
                ny = cdy / cdist;
              } else {
                const segLen = Math.sqrt(segLenSq) || 1;
                nx = -segDy / segLen;
                ny = segDx / segLen;
              }

              // Safety separation buffer
              f1.x = nearX + nx * (minDist + 2.0);
              f1.y = nearY + ny * (minDist + 2.0);

              const rx = nearX - cx;
              const ry = nearY - cy;
              const spokeVx = ry * innerOmega;
              const spokeVy = -rx * innerOmega;

              const relVx = f1.vx - spokeVx;
              const relVy = f1.vy - spokeVy;
              const relNorm = relVx * nx + relVy * ny;

              const spokeKick = Math.hypot(spokeVx, spokeVy) * 1.4;
              const bounceFactor = 1.15 + gameConfig.bounciness * 0.3;
              const bounceSpeed = Math.max(2.6, Math.abs(relNorm) * bounceFactor + spokeKick);

              f1.vx = spokeVx * 0.65 + nx * bounceSpeed + (Math.random() - 0.5) * 0.4;
              f1.vy = spokeVy * 0.65 + ny * bounceSpeed + (Math.random() - 0.5) * 0.4;
              f1.angle += (Math.random() > 0.5 ? 1 : -1) * 0.5;

              // Fiery orange/crimson sparks on blade collision
              const sparkCol = ((GAUNTLET_STAGES[gameState.gauntlet.stageIndex] || {}).stage === 3) ? "#00ff88" : "#ff4d00";
              for (let k = 0; k < 3; k++) {
                gameState.particles.push(new Particle(nearX, nearY, sparkCol, 2.4));
              }

              audioSynth.playSpokeHit(Math.min(2.2, bounceSpeed * 0.32));
            }
          }
        }

    }

    // 4. BALL-TO-BALL ELASTIC COLLISIONS (O(N) Spatial Grid Optimization)
    this.handleMarbleCollisions(aliveFlags, cx, cy, R);

    // Process center trapped flag animation: Dramatic cosmic suction spiral!
    if (gameState.centerTrappedFlag) {
      const tf = gameState.centerTrappedFlag;
      
      // Pull toward exact center with acceleration
      const pullSpeed = 0.16 * timeScale;
      tf.x += (cx - tf.x) * pullSpeed;
      tf.y += (cy - tf.y) * pullSpeed;
      
      // Accelerated spiral spin
      tf.angle += 0.35 * timeScale;
      
      // Shrink and fade into the black hole void
      tf.scale = Math.max(0.01, tf.scale - 0.05 * timeScale);
      tf.opacity = Math.max(0, tf.opacity - 0.04 * timeScale);

      // Dark-matter void particles
      if (Math.random() < 0.5) {
        gameState.particles.push(new Particle(tf.x, tf.y, "#ff1133", 1.8));
      }

      gameState.centerTrappedTime += dt;
      if (tf.scale <= 0.06 || tf.opacity <= 0.04 || gameState.centerTrappedTime > 0.9) {
        tf.status = "eliminated";
        gameState.centerTrappedFlag = null;
        gameState.centerTrappedTime = 0;
        
        // Iris snap center closed & reset timer!
        gameState.centerState = "closed";
        gameState.centerOpenProgress = 0;
        if (gameState.pendingDoubleElim) {
          // DOUBLE KILL: rapid-fire follow-up strike!
          gameState.pendingDoubleElim = false;
          gameState.timerCountdown = 1.6;
          this.showToast("⚡ DOUBLE KILL EN ROUTE! ⚡", "highlight");
          voiceAnnouncer.speakCaster("DOUBLE KILL! Back-to-back eliminations! This is carnage!");
        } else {
          gameState.timerCountdown = gameState.timerMax;
        }

        // Snap closure burst
        for (let i = 0; i < 16; i++) {
          gameState.particles.push(new Particle(cx, cy, "#ffbe0b", 2.4));
        }
      }
    }

    // Update particles
    for (let i = gameState.particles.length - 1; i >= 0; i--) {
      const p = gameState.particles[i];
      p.update();
      if (p.life <= 0) gameState.particles.splice(i, 1);
    }

    // Update shockwaves
    if (gameState.shockwaves) {
      for (let i = gameState.shockwaves.length - 1; i >= 0; i--) {
        const sw = gameState.shockwaves[i];
        sw.update();
        if (sw.life <= 0) gameState.shockwaves.splice(i, 1);
      }
    }

    // Check round end
    this.checkRoundCompletion();
  }

  handleCenterCapture(flag) {
    if (gameState.centerTrappedFlag) return;

    // LUCK SHIELD: viewers' hype spared this marble ONCE — fling it back out!
    if (flag.shield) {
      flag.shield = false;
      flag.hypeCharge = 0;
      const { x: scx, y: scy } = gameState.arenaCenter;
      const sdx = flag.x - scx;
      const sdy = flag.y - scy;
      const sdist = Math.hypot(sdx, sdy) || 1;
      const blastR = gameState.centerRadius + flag.radius + 10;
      flag.x = scx + (sdx / sdist) * blastR;
      flag.y = scy + (sdy / sdist) * blastR;
      flag.vx = (sdx / sdist) * 6.5;
      flag.vy = (sdy / sdist) * 6.5;
      gameState.centerState = "closed";
      gameState.centerOpenProgress = 0;
      gameState.timerCountdown = gameState.timerMax;
      audioSynth.init();
      audioSynth.playPinSuccess();
      this.triggerScreenShake();
      for (let p = 0; p < 18; p++) {
        gameState.particles.push(new Particle(flag.x, flag.y, "#00ff88", 3.0));
      }
      this.showToast(`🛡️ ${flag.country.name.toUpperCase()} SAVED BY THE LUCK SHIELD!`, "highlight");
      voiceAnnouncer.speakCaster(`UNBELIEVABLE! The viewers' luck shield just saved ${flag.country.name} from certain doom!`, true);
      pushChat(`🛡️ THE SHIELD SAVE! ${flag.country.name} LIVES!`, flag.country.code);
      likeBurst(25);
      return;
    }

    flag.status = "trapped_center";
    gameState.centerTrappedFlag = flag;
    gameState.centerTrappedTime = 0;
    gameState.eliminatedList.push(flag.country);

    // Live elimination board entry (rank + survival time)
    gameState.eliminationFeed.push({
      name: flag.country.name,
      code: flag.country.code,
      order: gameState.eliminatedList.length,
      survived: Math.max(0.1, gameState.simTime || 0),
      champion: false
    });
    updateElimFeed();

    // Simulated demo-counter bursts on elimination (not real platform analytics)
    viewerBurst(Math.floor(120 + Math.random() * 220));
    likeBurst(Math.floor(15 + Math.random() * 35));
    pushChat(pickTemplate(CHAT_ELIM_LINES, flag.country.name), flag.country.code);
    if (Math.random() < 0.5) pushChat("the arena is SHAKING rn 😨");

    // DOUBLE KILL setup: crowded arenas sometimes get a snappy follow-up strike
    const aliveAfter = gameState.flags.filter(f => f.status === "inside").length;
    gameState.pendingDoubleElim = (aliveAfter >= 40) && (Math.random() < 0.4);
    if (gameState.pendingDoubleElim) {
      pushChat("DOUBLE KILL incoming 👀", "");
    }

    // Keep center hole open during capture!
    gameState.centerState = "open";
    gameState.centerOpenProgress = 1.0;

    // 2. Add eliminated country's mini flag to cemetery grid below arena
    this.addEliminatedFlagToGraveyard(flag.country);

    // 3. Blast country color particles
    for (let i = 0; i < 28; i++) {
      const col = (flag.country.colors && flag.country.colors.length)
        ? flag.country.colors[i % flag.country.colors.length]
        : "#ff1133";
      gameState.particles.push(new Particle(flag.x, flag.y, col, 3.2));
    }

    // 4. Sound & Voice Announce & Screen Shake
    audioSynth.init();
    audioSynth.playCenterElimination();
    this.triggerScreenShake();
    voiceAnnouncer.announceEliminated(flag.country);
    this.showEliminationBadge(flag.country);
    this.showToast(`💥 ${flag.country.name.toUpperCase()} ELIMINATED!`, "eliminated");
    this.updateAnnouncerText("ALL ELIMINATED");
    this.updateHUD();

    // 5. Continental Wars tracking & Wipeout Detection
    const cont = flag.country.continent || getCountryContinent(flag.country);
    if (gameState.continentCounts[cont] > 0) {
      gameState.continentCounts[cont]--;
      this.updateContinentUI(cont);
    }

    if (gameState.continentCounts[cont] === 0 && !gameState.wipedContinents.has(cont)) {
      gameState.wipedContinents.add(cont);
      audioSynth.playContinentWipeout();
      this.showToast(`💀 ${cont.toUpperCase()} HAS BEEN COMPLETELY WIPED OUT!`, "eliminated");
      voiceAnnouncer.speakCaster(`Disaster! ${cont} has been completely wiped out of the world war!`, true);
    }

    // 6. Continental Showdown check (When only 2 continents survive!)
    const activeContinents = Object.keys(gameState.continentCounts).filter(c => gameState.continentCounts[c] > 0);
    if (activeContinents.length === 2 && !gameState.continentalShowdownAnnounced) {
      gameState.continentalShowdownAnnounced = true;
      const [c1, c2] = activeContinents;
      this.showToast(`⚔️ CONTINENTAL SHOWDOWN: ${c1.toUpperCase()} vs ${c2.toUpperCase()}!`, "highlight");
      voiceAnnouncer.speakCaster(`Continental showdown! ${c1} versus ${c2}!`, true);
    }

    // 7. World Superpower Elimination callout
    const code = (flag.country.code || "").toLowerCase();
    if (TOP_POWERFUL_CODES.includes(code)) {
      voiceAnnouncer.speakCaster(`Down goes ${flag.country.name}! A world superpower has fallen!`);
    }

    // 8. Match Milestones (Top 10, Final 5, Grand Final 1v1)
    const aliveTotal = gameState.flags.length - gameState.eliminatedList.length;
    if (aliveTotal === 10 && !this._hitTop10) {
      this._hitTop10 = true;
      this.showToast("⚡ TOP 10 SURVIVORS REMAIN! ⚡", "highlight");
      voiceAnnouncer.speakCaster("Top 10 nations remain! Every single bounce is life or death!", true);
    } else if (aliveTotal === 5 && !this._hitTop5) {
      this._hitTop5 = true;
      audioSynth.playCrowdHypeCheer();
      this.showToast("🔥 FINAL 5 SHOWDOWN! 🔥", "highlight");
      voiceAnnouncer.speakCaster("Final 5 countries! The arena tension is off the charts!", true);
    } else if (aliveTotal === 2 && !this._hitTop2) {
      this._hitTop2 = true;
      const survivors = gameState.flags.filter(f => f.status === "inside");
      if (survivors.length === 2) {
        const n1 = survivors[0].country.name;
        const n2 = survivors[1].country.name;
        this.showToast(`⚔️ 1v1 FINAL DUEL: ${n1.toUpperCase()} vs ${n2.toUpperCase()}! ⚔️`, "duel");
        voiceAnnouncer.speakCaster(`THE GRAND FINAL DUEL! ${n1} versus ${n2}! Who takes the crown?!`, true);
      }
    }

    // Check if pinned country was eliminated
    if (gameConfig.pinnedCountryName && flag.country.name.toLowerCase() === gameConfig.pinnedCountryName.toLowerCase()) {
      const statusEl = document.getElementById("pinnedCountryStatus");
      if (statusEl) {
        statusEl.textContent = `ELIMINATED (#${gameState.flags.length - gameState.eliminatedList.length + 1})`;
        statusEl.style.color = "#ff2a5f";
      }
      this.showToast(`⚠️ YOUR TRACKED COUNTRY (${flag.country.name.toUpperCase()}) WAS ELIMINATED!`, "duel");
    }

    // Gauntlet Stage Progression Check
    if (gameState.gameMode === "gauntlet" && !gameState.gauntlet.transitioning) {
      const currentStage = GAUNTLET_STAGES[gameState.gauntlet.stageIndex];
      const aliveRemaining = gameState.flags.filter(f => f.status === "inside" && f !== flag);
      if (gameState.gauntlet.stageIndex < 3 && aliveRemaining.length <= currentStage.targetSurvivors) {
        this.onGauntletStageCleared(aliveRemaining);
        return;
      }
    }
  }

  addEliminatedFlagToGraveyard(country) {
    const grid = document.getElementById("eliminatedFlagsGrid");
    if (!grid || !country) return;

    const item = document.createElement("div");
    item.className = "cemetery-flag-item";
    item.title = country.name;

    const code = (country.code || "").toLowerCase();
    if (code) {
      item.innerHTML = `<img src="https://flagcdn.com/w40/${code}.png" alt="${country.name}" onerror="this.outerHTML='<span style=\\'font-size:11px\\'>${country.flag || '🏳️'}</span>'">`;
    } else {
      item.innerHTML = `<span style="font-size:11px">${country.flag || '🏳️'}</span>`;
    }
    grid.appendChild(item);
    grid.scrollTop = grid.scrollHeight;
  }

  showEliminationBadge(country) {
    const badge = document.getElementById("eliminatedCornerBadge");
    const nameEl = document.getElementById("badgeCountryName");
    const imgEl = document.getElementById("badgeFlagImg");
    const emojiEl = document.getElementById("badgeFlagEmoji");
    if (!badge || !nameEl) return;

    const code = (country.code || "").toLowerCase();
    nameEl.textContent = country.name.toUpperCase();
    if (imgEl) {
      if (code) {
        imgEl.src = `https://flagcdn.com/w80/${code}.png`;
        imgEl.style.display = "block";
        if (emojiEl) emojiEl.textContent = "";
      } else {
        imgEl.style.display = "none";
        if (emojiEl) emojiEl.textContent = country.flag || "🏳️";
      }
    }

    badge.style.display = "flex";
    badge.classList.remove("active");
    void badge.offsetWidth;
    badge.classList.add("active");

    if (this._badgeTimer) clearTimeout(this._badgeTimer);
    this._badgeTimer = setTimeout(() => {
      badge.style.display = "none";
    }, 1850);
  }

  showCenterSpotlight(country) {
    this.showEliminationBadge(country);
  }

  updateAnnouncerText(text) {
    const el = document.getElementById("statusHeadline");
    if (el) el.textContent = text;
  }

  updateHUD() {
    const total = gameState.flags.length;
    const eliminated = gameState.eliminatedList.length;
    const remaining = total - eliminated;

    const totalEl = document.getElementById("statTotalCountries");
    const remainEl = document.getElementById("statRemainingCountries");
    const barFill = document.getElementById("eliminationBarFill");
    const barLabel = document.getElementById("eliminationBarLabel");

    if (totalEl) totalEl.textContent = total;
    if (remainEl) remainEl.textContent = remaining;
    if (barLabel) barLabel.textContent = `${eliminated} / ${total} ELIMINATED`;
    if (barFill) {
      const pct = (eliminated / (total || 1)) * 100;
      barFill.style.width = `${pct}%`;
    }
  }

  checkRoundCompletion() {
    if (gameState.roundFinished) return;
    const aliveFlags = gameState.flags.filter(f => f.status === "inside");

    if (aliveFlags.length <= 1) {
      gameState.roundFinished = true;
      audioSynth.init();
      audioSynth.playVictory();
      this.triggerScreenShake(12);

      const winner = aliveFlags[0] || gameState.eliminatedList[gameState.eliminatedList.length - 1];
      const winnerCountry = winner ? (winner.country || winner) : null;

      if (winnerCountry) {
        const cont = winnerCountry.continent || getCountryContinent(winnerCountry);
        if (gameState.gameMode === "gauntlet") {
          this.showToast(`👑 ${winnerCountry.name.toUpperCase()} IS THE SURVIVAL GAUNTLET CHAMPION! 🏆`, "highlight");
          voiceAnnouncer.speakCaster(`IMMORTAL! ${winnerCountry.name} has survived all 4 brutal stages of the Survival Gauntlet! Supreme Champion!`, true);
        } else {
          this.showToast(`👑 ${winnerCountry.name.toUpperCase()} (${cont.toUpperCase()}) IS THE SUPREME CHAMPION! 🏆`, "highlight");
          voiceAnnouncer.speakCaster(`UNSTOPPABLE! ${winnerCountry.name} conquers the world! Absolute champion!`, true);
        }
        audioSynth.playCrowdHypeCheer();
      }

      // Record champion on the elimination board + victory viewer surge
      if (winnerCountry) {
        gameState.eliminationFeed.push({
          name: winnerCountry.name,
          code: winnerCountry.code,
          order: "W",
          survived: Math.max(0.1, gameState.simTime || 0),
          champion: true
        });
        updateElimFeed();
        viewerBurst(Math.floor(500 + Math.random() * 400));
        likeBurst(Math.floor(60 + Math.random() * 60));
        pushChat(`👑 GOATED. ${winnerCountry.name} takes the WORLD! 👑`, winnerCountry.code);
        pushChat("confetti is MY favorite part 🎊");
      }

      // Spawn glorious gold & cyan victory confetti fireworks
      const { x: cx, y: cy } = gameState.arenaCenter;
      const winX = winner ? winner.x : cx;
      const winY = winner ? winner.y : cy;
      for (let i = 0; i < 48; i++) {
        gameState.particles.push(new Particle(winX, winY, i % 2 === 0 ? "#ffbe0b" : "#00f0ff", 3.8));
      }

      // Smooth celebration window before popping the winner modal
      setTimeout(() => {
        gameState.running = false;
        this.updatePlayPauseUI();
        this.triggerWinnerModal(winnerCountry);
      }, 1800);
    }
  }

  triggerWinnerModal(winnerCountry) {
    const modal = document.getElementById("winnerModal");
    const headline = document.getElementById("winnerHeadline");
    const flagDisplay = document.getElementById("winnerFlagDisplay");
    const title = document.getElementById("winnerCountryTitle");
    const summary = document.getElementById("winnerSummary");
    const countdownSec = document.getElementById("cycleCountdownSec");

    if (!modal) return;

    if (winnerCountry) {
      if (gameState.gameMode === "gauntlet") {
        voiceAnnouncer.speakCaster(`THE SURVIVAL GAUNTLET IS CONQUERED! ${winnerCountry.name} TAKES THE CROWN!`, true);
        headline.textContent = "🏆 GAUNTLET SUPREME CHAMPION!";
        const code = (winnerCountry.code || "").toLowerCase();
        flagDisplay.innerHTML = `<img src="https://flagcdn.com/w160/${code}.png" alt="${winnerCountry.name}" style="width: 90px; height: 60px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.8); display: inline-block;">`;
        title.textContent = winnerCountry.name;
        summary.textContent = `Sole surviving nation after conquering The Filter, Meat Grinder, Toxic Shrink, and the Grand Final!`;
      } else {
        voiceAnnouncer.announceWinner(winnerCountry.name);
        headline.textContent = "🏆 BATTLE ROYALE CHAMPION!";
        const code = (winnerCountry.code || "").toLowerCase();
        flagDisplay.innerHTML = `<img src="https://flagcdn.com/w160/${code}.png" alt="${winnerCountry.name}" style="width: 90px; height: 60px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.8); display: inline-block;">`;
        title.textContent = winnerCountry.name;
        summary.textContent = `The sole survivor out of ${gameState.flags.length} competing countries!`;
      }
    }

    // CYCLE RECAP: MVP stats from the elimination board
    const recapBox = document.getElementById("winnerRecapBox");
    if (recapBox) {
      const feed = gameState.eliminationFeed || [];
      const elims = feed.filter(e => !e.champion);
      const champ = feed.find(e => e.champion);
      const fastest = elims.length ? elims.reduce((a, b) => (a.survived <= b.survived ? a : b)) : null;
      const longest = elims.length ? elims.reduce((a, b) => (a.survived >= b.survived ? a : b)) : null;
      let recapHtml = '<div class="recap-title">📊 CYCLE RECAP</div>';
      if (champ) {
        recapHtml += `<div class="recap-row">🥇 Champion: <b>${champ.name}</b> survived <b>${formatSurvivalTime(champ.survived)}</b></div>`;
      }
      if (longest) {
        recapHtml += `<div class="recap-row">⏳ Last to fall: <b>${longest.name}</b> (${formatSurvivalTime(longest.survived)})</div>`;
      }
      if (fastest) {
        recapHtml += `<div class="recap-row">💀 Fastest kill: <b>${fastest.name}</b> (#${fastest.order}, ${formatSurvivalTime(fastest.survived)})</div>`;
      }
      recapBox.innerHTML = recapHtml;
    }

    modal.classList.add("show");

    // Auto next cycle countdown (drift-free timestamp based)
    const cycleTargetTime = Date.now() + 3000;
    if (countdownSec) countdownSec.textContent = "3";
    if (this._autoCycleInterval) clearInterval(this._autoCycleInterval);
    this._autoCycleInterval = setInterval(() => {
      const remainingMs = cycleTargetTime - Date.now();
      const currentCount = Math.max(0, Math.ceil(remainingMs / 1000));
      if (countdownSec) countdownSec.textContent = currentCount;
      if (remainingMs <= 0) {
        clearInterval(this._autoCycleInterval);
        this._autoCycleInterval = null;
        this.advanceNextCycle();
      }
    }, 200);
  }

  advanceNextCycle() {
    if (this._autoCycleInterval) {
      clearInterval(this._autoCycleInterval);
      this._autoCycleInterval = null;
    }
    const modal = document.getElementById("winnerModal");
    if (modal) modal.classList.remove("show");

    gameState.cycle++;
    const cycleVal = document.getElementById("cycleCountVal");
    if (cycleVal) cycleVal.textContent = gameState.cycle;

    if (gameState.gameMode === "gauntlet") {
      gameState.gauntlet.stageIndex = 0;
      gameState.gauntlet.qualifiedRoster = [];
      gameState.gauntlet.transitioning = false;
      this.setupGauntletStage(0);
    } else {
      this.initArena();
    }
    gameState.roundFinished = false;
    gameState.running = true;
    this.updatePlayPauseUI();
  }

  render() {
    const { ctx, width, height } = this;
    ctx.clearRect(0, 0, width, height);

    const { x: cx, y: cy } = gameState.arenaCenter;
    const R = gameState.arenaRadius;
    const rInner = gameState.centerRadius;

    // 1. ARENA SHADOW & INNER GLOW
    const innerGrad = ctx.createRadialGradient(cx, cy, rInner * 0.5, cx, cy, R);
    innerGrad.addColorStop(0, "rgba(5, 12, 30, 0.4)");
    innerGrad.addColorStop(0.7, "rgba(3, 8, 22, 0.82)");
    innerGrad.addColorStop(1, "rgba(2, 6, 16, 0.95)");
    ctx.fillStyle = innerGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fill();

    // 2. 6 PURPLE RADIAL SPOKE OBSTACLES (Attached directly to the large outer circle!)
    const spokeAngles = [0, Math.PI / 3, (2 * Math.PI) / 3, Math.PI, (4 * Math.PI) / 3, (5 * Math.PI) / 3];
    const spokeInnerR = R * 0.50; // Open corridor around center circle!
    const spokeOuterR = R;        // Attached directly to the large outer circle!
    const spokeThickness = 14;

    ctx.save();
    // Clip to outer arena circle so outer ends anchor cleanly and flush against the cyan boundary
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.clip();

    spokeAngles.forEach(baseA => {
      const a = (baseA + gameState.spokesAngle) % (Math.PI * 2);
      const p1x = cx + Math.cos(a) * spokeInnerR;
      const p1y = cy + Math.sin(a) * spokeInnerR;
      const p2x = cx + Math.cos(a) * (spokeOuterR + 4);
      const p2y = cy + Math.sin(a) * (spokeOuterR + 4);

      // Glow
      ctx.shadowColor = "rgba(142, 117, 255, 0.65)";
      ctx.shadowBlur = 10;
      ctx.strokeStyle = "#7a63b8";
      ctx.lineWidth = spokeThickness;
      ctx.lineCap = "round";

      ctx.beginPath();
      ctx.moveTo(p1x, p1y);
      ctx.lineTo(p2x, p2y);
      ctx.stroke();

      // Inner highlight line for 3D bevel look
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "#a28fed";
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(p1x, p1y);
      ctx.lineTo(p2x, p2y);
      ctx.stroke();
    });
    ctx.restore();

    // 2B. DUAL COUNTER-ROTATING BLADES (Gauntlet Stage 2+)
    if (gameState.gameMode === "gauntlet") {
      const gStage = GAUNTLET_STAGES[gameState.gauntlet.stageIndex];
      if (gStage && gStage.dualBlades) {
        const innerAngles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
        const innerSpokeInnerR = rInner * 1.05;
        const innerSpokeOuterR = R * 0.52;
        const innerSpokeThickness = 12;

        ctx.save();
        innerAngles.forEach(baseA => {
          const a = (baseA + (gameState.gauntlet.innerSpokesAngle || 0)) % (Math.PI * 2);
          const p1x = cx + Math.cos(a) * innerSpokeInnerR;
          const p1y = cy + Math.sin(a) * innerSpokeInnerR;
          const p2x = cx + Math.cos(a) * innerSpokeOuterR;
          const p2y = cy + Math.sin(a) * innerSpokeOuterR;

          // Hazard Glow
          const bladeCol = (gStage.stage === 3) ? "#00ff88" : (gStage.stage === 4 ? "#ffbe0b" : "#ff4d00");
          const bladeCore = (gStage.stage === 3) ? "#a3ffcd" : (gStage.stage === 4 ? "#ffffff" : "#ffd60a");

          ctx.shadowColor = bladeCol;
          ctx.shadowBlur = 12;
          ctx.strokeStyle = bladeCol;
          ctx.lineWidth = innerSpokeThickness;
          ctx.lineCap = "round";

          ctx.beginPath();
          ctx.moveTo(p1x, p1y);
          ctx.lineTo(p2x, p2y);
          ctx.stroke();

          // Sharp 3D Bevel Core
          ctx.shadowBlur = 0;
          ctx.strokeStyle = bladeCore;
          ctx.lineWidth = 3.0;
          ctx.beginPath();
          ctx.moveTo(p1x, p1y);
          ctx.lineTo(p2x, p2y);
          ctx.stroke();
        });
        ctx.restore();
      }
    }

    // 3. DRAW CENTRAL CIRCLE (YELLOW WHEN CLOSED, BRIGHT RED WHEN OPEN)
    // Rendered BEFORE marbles so balls visibly roll over the yellow circle!
    ctx.save();

    const openProgress = gameState.centerOpenProgress || 0;
    const isOpeningOrOpen = gameState.centerState === "open" || gameState.centerState === "opening";

    // Ring border color:
    // When Closed: Glowing Bright Yellow (#ffbe0b)
    // When Danger Countdown Imminent (<= 2.2s): Pulsing warning flash
    // When Open (Elimination): Glowing Bright Red (#ff1133)
    let ringColor = "#ffbe0b";
    let glowColor = "rgba(255, 190, 11, 0.9)";
    if (openProgress > 0.15) {
      ringColor = "#ff1133";
      glowColor = "rgba(255, 17, 51, 1.0)";
    } else if (gameState.timerCountdown <= 2.2 && !gameState.roundFinished) {
      const flash = Math.sin(performance.now() * 0.022) > 0;
      ringColor = flash ? "#ff1133" : "#ffbe0b";
      glowColor = flash ? "rgba(255, 17, 51, 1.0)" : "rgba(255, 190, 11, 0.9)";
    }

    // A. Solid 8-wedge alternating purple segmented background disc
    const numSlices = 8;
    const sliceAngle = (Math.PI * 2) / numSlices;
    for (let s = 0; s < numSlices; s++) {
      const startA = s * sliceAngle;
      const endA = (s + 1) * sliceAngle;
      ctx.fillStyle = s % 2 === 0 ? "#53488d" : "#413673";
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, rInner - 1, startA, endA);
      ctx.closePath();
      ctx.fill();
    }

    // B. When opening / open: Draw the RED central black hole void + Cosmic Swirling Arms
    const voidRadius = rInner * 0.78 * openProgress;
    if (openProgress > 0.05) {
      // Dark red/black aperture gradient
      const voidGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, voidRadius);
      voidGrad.addColorStop(0, "#000000");
      voidGrad.addColorStop(0.65, "#1a0005");
      voidGrad.addColorStop(1, "#45020e");

      ctx.fillStyle = voidGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, voidRadius, 0, Math.PI * 2);
      ctx.fill();

      // Cosmic Singularity Swirling Plasma Spiral Arms
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, voidRadius, 0, Math.PI * 2);
      ctx.clip();
      const vortexTime = performance.now() * 0.005;
      for (let arm = 0; arm < 4; arm++) {
        const baseArmAngle = vortexTime + (arm * Math.PI) / 2;
        ctx.strokeStyle = arm % 2 === 0 ? "rgba(255, 30, 70, 0.75)" : "rgba(255, 160, 20, 0.65)";
        ctx.lineWidth = 3.6 * openProgress;
        ctx.beginPath();
        for (let st = 0; st <= 22; st++) {
          const rFrac = st / 22;
          const rCur = rFrac * voidRadius;
          const aCur = baseArmAngle + rFrac * 1.9;
          const px = cx + Math.cos(aCur) * rCur;
          const py = cy + Math.sin(aCur) * rCur;
          if (st === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
      ctx.restore();

      // Glowing red event horizon ring
      ctx.strokeStyle = `rgba(255, 20, 50, ${0.6 + 0.4 * openProgress})`;
      ctx.lineWidth = 3.5;
      ctx.shadowColor = "#ff1133";
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(cx, cy, voidRadius, 0, Math.PI * 2);
      ctx.stroke();
    }

    // C. Glowing circular outer ring border (Yellow when closed, Bright Red when open)
    ctx.lineWidth = 5.0;
    ctx.strokeStyle = ringColor;
    ctx.shadowColor = glowColor;
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.arc(cx, cy, rInner, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();

    // 4. DRAW SHOCKWAVES
    if (gameState.shockwaves) {
      gameState.shockwaves.forEach(sw => sw.draw(ctx));
    }

    // 5. DRAW COUNTRY FLAG MARBLES (Drawn ON TOP of yellow circle so they roll over it!)
    const activeMarbles = [];
    const isGrandFinalStage = gameState.gameMode === "gauntlet" && gameState.gauntlet.stageIndex === 3;

    gameState.flags.forEach(f => {
      if (f.status === "inside") {
        if (isGrandFinalStage) {
          ctx.save();
          const pulse = 1 + 0.14 * Math.sin(performance.now() * 0.008 + f.x);
          const auraR = f.radius * 1.5 * pulse;
          const auraGrad = ctx.createRadialGradient(f.x, f.y, f.radius * 0.7, f.x, f.y, auraR);
          auraGrad.addColorStop(0, "rgba(255, 230, 0, 0.45)");
          auraGrad.addColorStop(0.7, "rgba(255, 180, 0, 0.2)");
          auraGrad.addColorStop(1, "rgba(255, 230, 0, 0)");
          ctx.fillStyle = auraGrad;
          ctx.beginPath();
          ctx.arc(f.x, f.y, auraR, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = "#ffe600";
          ctx.lineWidth = 2.5;
          ctx.shadowColor = "#ffe600";
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(f.x, f.y, f.radius + 2, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        f.draw(ctx);
        activeMarbles.push(f);
      }
    });

    // 5B. DANGER ZONE indicator: pulsing red marker on the marble closest to the center void
    if (activeMarbles.length > 2 && gameState.centerState !== "open" && !gameState.roundFinished) {
      let danger = null;
      let dmin = Infinity;
      for (let dji = 0; dji < activeMarbles.length; dji++) {
        const dm = Math.hypot(activeMarbles[dji].x - cx, activeMarbles[dji].y - cy);
        if (dm < dmin) { dmin = dm; danger = activeMarbles[dji]; }
      }
      if (danger) {
        ctx.save();
        const dzPulse = 1 + Math.sin(performance.now() * 0.012) * 0.18;
        ctx.strokeStyle = "rgba(255, 42, 95, 0.9)";
        ctx.shadowColor = "#ff2a5f";
        ctx.shadowBlur = 10;
        ctx.lineWidth = 2.2;
        ctx.setLineDash([5, 5]);
        ctx.lineDashOffset = -performance.now() * 0.05;
        ctx.beginPath();
        ctx.arc(danger.x, danger.y, (danger.radius + 9) * dzPulse, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.font = "900 12px 'Outfit', sans-serif";
        ctx.fillStyle = "#ff2a5f";
        ctx.textAlign = "center";
        ctx.fillText("☠", danger.x, danger.y - danger.radius - 14);
        ctx.restore();

        if (dmin < rInner * 1.9 && performance.now() - (this._lastDangerCaster || 0) > 9000) {
          this._lastDangerCaster = performance.now();
          voiceAnnouncer.speakCaster(`${danger.country.name} is walking on thin ice, right above the elimination zone!`);
        }
      }
    }

    // 6. IF A FLAG IS TRAPPED IN THE CENTER CHAMBER, DRAW IT SPOTLIGHTED IN THE VOID
    if (gameState.centerTrappedFlag) {
      gameState.centerTrappedFlag.draw(ctx);
    }

    // 7. FINAL 2 DUEL MODE (1v1 Sudden Death Dramatic Electric Lightning)
    if (activeMarbles.length === 2 && !gameState.roundFinished) {
      const [m1, m2] = activeMarbles;
      ctx.save();
      const segs = 14;
      const arcDx = (m2.x - m1.x) / segs;
      const arcDy = (m2.y - m1.y) / segs;
      const perpX = -(m2.y - m1.y);
      const perpY = (m2.x - m1.x);
      const perpLen = Math.hypot(perpX, perpY) || 1;
      const normPerpX = perpX / perpLen;
      const normPerpY = perpY / perpLen;

      // Cyan neon outer lightning bolt
      ctx.strokeStyle = "rgba(0, 240, 255, 0.9)";
      ctx.shadowColor = "#00f0ff";
      ctx.shadowBlur = 14;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(m1.x, m1.y);
      for (let s = 1; s < segs; s++) {
        const jitter = (Math.random() - 0.5) * 22;
        ctx.lineTo(m1.x + arcDx * s + normPerpX * jitter, m1.y + arcDy * s + normPerpY * jitter);
      }
      ctx.lineTo(m2.x, m2.y);
      ctx.stroke();

      // White hot core lightning
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(m1.x, m1.y);
      for (let s = 1; s < segs; s++) {
        const jitter = (Math.random() - 0.5) * 12;
        ctx.lineTo(m1.x + arcDx * s + normPerpX * jitter, m1.y + arcDy * s + normPerpY * jitter);
      }
      ctx.lineTo(m2.x, m2.y);
      ctx.stroke();

      // Dramatic "⚡ 1v1 FINAL DUEL ⚡" Floating Badge
      const midX = (m1.x + m2.x) / 2;
      const midY = Math.max(cy - R * 0.72, (m1.y + m2.y) / 2 - 28);
      ctx.font = "900 13px 'Outfit', sans-serif";
      ctx.fillStyle = "#ffe600";
      ctx.shadowColor = "rgba(0,0,0,0.95)";
      ctx.shadowBlur = 8;
      ctx.textAlign = "center";
      ctx.fillText("⚡ 1v1 FINAL DUEL ⚡", midX, midY);
      ctx.restore();
    }

    // 8. PROMINENT PINNED COUNTRY BEACON (Holographic targeting marker on top)
    if (gameConfig.pinnedCountryName) {
      const pinnedMarble = activeMarbles.find(
        m => m.country && m.country.name.toLowerCase() === gameConfig.pinnedCountryName.toLowerCase()
      );
      if (pinnedMarble) {
        ctx.save();
        const pulse = 1 + Math.sin(performance.now() * 0.009) * 0.12;
        const pr = (pinnedMarble.radius + 6) * pulse;
        ctx.strokeStyle = "#ffd700";
        ctx.shadowColor = "#ffbe0b";
        ctx.shadowBlur = 18;
        ctx.lineWidth = 3.0;
        ctx.beginPath();
        ctx.arc(pinnedMarble.x, pinnedMarble.y, pr, 0, Math.PI * 2);
        ctx.stroke();

        // Pulsing down-pointer triangle
        const arrowY = pinnedMarble.y - pinnedMarble.radius - 12 - Math.sin(performance.now() * 0.009) * 4;
        ctx.fillStyle = "#ffd700";
        ctx.beginPath();
        ctx.moveTo(pinnedMarble.x - 6, arrowY - 6);
        ctx.lineTo(pinnedMarble.x + 6, arrowY - 6);
        ctx.lineTo(pinnedMarble.x, arrowY);
        ctx.closePath();
        ctx.fill();

        // Pin label tag
        ctx.font = "900 11px 'Outfit', sans-serif";
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "rgba(0,0,0,0.95)";
        ctx.shadowBlur = 6;
        ctx.textAlign = "center";
        ctx.fillText(`⭐ ${pinnedMarble.country.name.toUpperCase()}`, pinnedMarble.x, arrowY - 9);
        ctx.restore();
      }
    }

    // 9. DRAW OUTER NEON CIRCLE ARENA BORDER (Stage-adaptive in Gauntlet, or Cyan -> Gold for Top 10 -> Strobe for Duel)
    ctx.save();
    let borderCol = "#00f0ff";
    let borderGlow = 18;
    if (gameState.gameMode === "gauntlet") {
      const gStage = GAUNTLET_STAGES[gameState.gauntlet.stageIndex] || GAUNTLET_STAGES[0];
      borderCol = gStage.themeColor;
      borderGlow = 22;
      if (activeMarbles.length <= 2) {
        const flash = Math.sin(performance.now() * 0.015) > 0;
        borderCol = flash ? "#ff0055" : gStage.themeColor;
        borderGlow = 28;
      }
    } else if (activeMarbles.length <= 2) {
      const flash = Math.sin(performance.now() * 0.012) > 0;
      borderCol = flash ? "#ff0055" : "#00f0ff";
      borderGlow = 26;
    } else if (activeMarbles.length <= 10) {
      borderCol = "#ffd700";
      borderGlow = 22;
    }
    ctx.lineWidth = 4.5;
    ctx.shadowColor = borderCol;
    ctx.shadowBlur = borderGlow;
    ctx.strokeStyle = borderCol;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // 10. DRAW PARTICLES
    gameState.particles.forEach(p => p.draw(ctx));
  }

  updatePlayPauseUI() {
    const btn = document.getElementById("btnPlayPause");
    const icon = document.getElementById("playIcon");
    if (!btn || !icon) return;

    const action = gameState.running ? "Pause" : "Play";
    btn.classList.toggle("playing", gameState.running);
    icon.textContent = gameState.running ? "⏸" : "▶";
    btn.setAttribute("aria-label", action + " simulation");
    btn.title = action + " simulation";
  }
}

// =============================================================================
// 6. LIVE CHAT & ENGAGEMENT SIMULATOR
// =============================================================================
// =============================================================================
// 6B. LIVE ELIMINATION BOARD (survival-time leaderboard)
// =============================================================================
function formatSurvivalTime(secs) {
  if (secs == null) return "-";
  if (secs < 60) return secs.toFixed(1) + "s";
  const m = Math.floor(secs / 60);
  const s = Math.round(secs % 60);
  return `${m}m ${s}s`;
}

function updateElimFeed() {
  const rows = document.getElementById("efRows");
  const cyc = document.getElementById("efCycleNum");
  if (cyc) cyc.textContent = "#" + gameState.cycle;
  if (!rows) return;

  const list = gameState.eliminationFeed || [];
  if (!list.length) {
    rows.innerHTML = '<div class="ef-empty">No eliminations yet…</div>';
    return;
  }

  // Newest 6 entries, newest on top
  rows.innerHTML = list.slice(-6).reverse().map(e => {
    const code = (e.code || "").toLowerCase();
    const icon = e.champion
      ? '<span class="ef-flag ef-champ-icon">🏆</span>'
      : `<img class="ef-flag" src="https://flagcdn.com/w20/${code}.png" alt="">`;
    return `<div class="ef-row${e.champion ? " ef-champ" : ""}">`
      + `<span class="ef-pos">${e.order}</span>`
      + icon
      + `<span class="ef-name">${e.name}</span>`
      + `<span class="ef-time">${formatSurvivalTime(e.survived)}</span>`
      + `</div>`;
  }).join("");
}

const CHAT_COMMENTS = [
  "India will win! 🇮🇳🔥",
  "USA all the way! 🇺🇸🏆",
  "Brasil número 1! 🇧🇷✨",
  "Türkiye let's go! 🇹🇷💪",
  "Argentina champions! 🇦🇷⭐",
  "Japan holding strong! 🇯🇵⚡",
  "Germany defence is real! 🇩🇪🛡️",
  "Botswana is dodging everyone! 🇧🇼😲",
  "Mexico viva la patria! 🇲🇽🎉",
  "Drop a like for your country! 👍❤️"
];

// =============================================================================
// 6C. SIMULATED DEMO ENGAGEMENT ENGINE (demo counters/chat; not real platform analytics)
// =============================================================================
const CHAT_NAMES = [
  "marbleKing88", "Rohit_94", "streamfan77", "LunaTV", "xX_Diego_Xx",
  "Emre_can", "okada_hiro", "brazilfan2k", "Nadia_A", "tacoTuesday",
  "kevin_zero", "Zain_nz", "Pingas_Master", "VeraP", "gamergranny",
  "shiro_neko", "Pablo_J", "Ayesha_k", "luke0101", "kimchi_boi"
];

const CHAT_ELIM_LINES = [
  "NO WAY {name}!! 💀", "{name} fans in shambles 💔", "RIP {name} 🕯️",
  "goodbye {name} 😢", "{name} got CAUGHT lackin 😭", "who let {name} near the hole 😭🙏"
];

const CHAT_HYPE_LINES = [
  "LET'S GOO {name} 🚀", "{name} is HIM 🔥", "protect {name} 🙏",
  "{name} championship run loading ✨", "{name} knew the assignment 😤"
];

const CHAT_AMBIENT_LINES = [
  "WHO WILL WIN?? 🤔", "i bet 500 coins on the final 2 👀", "this arena is INSANE today",
  "first time here, this is addictive", "sing us a song caster 🎵", "pull up the continental stats 📊",
  "my dad just asked why i'm watching marbles", "the vortex doesn't miss 🌀", " Pixel can we get slow-mo?",
  "WHO ELSE IS FROM {name}?", "{name} speedrun any% no shield"
];

function nameColor(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
  return `hsl(${h}, 78%, 64%)`;
}

function fmtCompactNum(n) {
  if (n == null) return "0";
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return String(Math.round(n));
}

function pickTemplate(pool, name) {
  const line = pool[Math.floor(Math.random() * pool.length)];
  return line.replace("{name}", name);
}

function randomAliveCountryName() {
  const alive = gameState.flags.filter(f => f.status === "inside");
  if (!alive.length) return "nobody";
  return alive[Math.floor(Math.random() * alive.length)].country.name;
}

function updateLikeBadge() {
  const badge = document.getElementById("likeCounterBadge");
  if (badge) badge.textContent = "DEMO " + fmtCompactNum(gameState.likeCount);
}

function updateViewerPill() {
  const el = document.getElementById("statViewerCount");
  if (el) el.textContent = fmtCompactNum(gameState.viewers);
}

function viewerBurst(n) {
  gameState.viewers = Math.max(8000, (gameState.viewers || 12840) + n);
  updateViewerPill();
}

function likeBurst(n) {
  gameState.likeCount += n;
  updateLikeBadge();
}

function pushChat(text, code = "", author = null) {
  if (gameConfig.fakeChatEnabled === false || gameConfig.liveClusterEnabled === false) return; // Respect overlay toggles
  const stack = document.getElementById("liveChatStack");
  if (!stack || !text) return;
  const who = author || CHAT_NAMES[Math.floor(Math.random() * CHAT_NAMES.length)];
  const row = document.createElement("div");
  row.className = "chat-msg";
  const flagImg = code
    ? `<img class="chat-flag" src="https://flagcdn.com/w20/${String(code).toLowerCase()}.png" alt="" onerror="this.style.display='none'">`
    : "";
  row.innerHTML = `<span class="chat-avatar" style="background:${nameColor(who)}">${who.charAt(0).toUpperCase()}</span>`
    + `<span class="chat-content"><span class="chat-name" style="color:${nameColor(who)}">${who}</span> ${flagImg}${text}</span>`;
  stack.appendChild(row);
  while (stack.children.length > 7) stack.removeChild(stack.firstChild);
}

function startEngagementTicker() {
  if (startEngagementTicker._timer) return;
  startEngagementTicker._timer = setInterval(() => {
    gameState.viewers = Math.max(8000, (gameState.viewers || 12840) + Math.floor(-45 + Math.random() * 205));
    gameState.likeCount += Math.floor(1 + Math.random() * 4);
    updateViewerPill();
    updateLikeBadge();
    if (gameConfig.fakeChatEnabled !== false && gameConfig.liveClusterEnabled !== false && Math.random() < 0.5) {
      pushChat(pickTemplate(CHAT_AMBIENT_LINES, randomAliveCountryName()));
    }
  }, 2000);
}

function updateHypeUI(target) {
  const fill = document.getElementById("hypeFill");
  const label = document.getElementById("hypeLabel");
  if (!fill || !label) return;
  if (!target || target.shield) {
    fill.style.width = "0%";
    label.textContent = "TAP ×10 = LUCK SHIELD 🛡️";
    return;
  }
  const pct = Math.min(100, (target.hypeCharge || 0) * 10);
  fill.style.width = pct + "%";
  label.textContent = `ROOTING FOR ${target.country.name.toUpperCase()} (${target.hypeCharge || 0}/10)`;
}

function spawnFloatingEmoji(emoji = "👍") {
  const container = document.getElementById("floatingEmojisContainer");
  if (!container) return;

  const el = document.createElement("div");
  el.className = "floating-emoji";
  el.textContent = emoji;
  el.style.left = `${30 + Math.random() * 40}%`;
  el.style.bottom = "80px";
  container.appendChild(el);

  setTimeout(() => {
    if (el.parentNode) el.parentNode.removeChild(el);
  }, 2400);
}

// =============================================================================
// 7. BACKGROUND UNTHROTTLED ENGINE & MAIN CONTROLLER
// =============================================================================
class BackgroundRunner {
  constructor(simulation) {
    this.simulation = simulation;
    this.worker = null;
    this.fallbackInterval = null;
    this.lastTime = performance.now();
    this.isRunning = true;
    this.initWorker();
    this.bindEvents();
  }

  initWorker() {
    // Dedicated Web Worker running on a separate OS thread
    // Chromium and all modern browsers DO NOT throttle Web Worker timers to 1s in background tabs!
    const workerBlobCode = `
      let timer = null;
      self.onmessage = function(e) {
        if (e.data === "start") {
          if (!timer) {
            timer = setInterval(function() {
              self.postMessage("tick");
            }, 1000 / 60); // 60Hz ticker (~16.6ms)
          }
        } else if (e.data === "stop") {
          if (timer) {
            clearInterval(timer);
            timer = null;
          }
        }
      };
    `;
    try {
      const blob = new Blob([workerBlobCode], { type: "application/javascript" });
      const workerUrl = URL.createObjectURL(blob);
      this.worker = new Worker(workerUrl);
      this.worker.onmessage = (e) => {
        if (e.data === "tick" && this.isRunning && gameState.running) {
          // When the document is hidden (user switched to another Chrome tab or another app):
          // The Web Worker steps physics continuously so the match never stops!
          if (document.hidden) {
            this.stepBackground();
          }
        }
      };
      this.worker.postMessage("start");
    } catch (err) {
      console.warn("Inline Web Worker unavailable, using fallback interval:", err);
      this.worker = null;
    }

    // Secondary fallback interval (if Web Workers are restricted by policy)
    this.fallbackInterval = setInterval(() => {
      if (document.hidden && this.isRunning && gameState.running) {
        this.stepBackground();
      }
    }, 40); // 25Hz fallback
  }

  stepBackground() {
    const now = performance.now();
    let dt = (now - this.lastTime) / 1000;
    this.lastTime = now;

    // Minimum 4ms to prevent double-stepping within same frame
    if (dt < 0.004) return;
    // Cap any single tick at 0.5s to prevent runaway spikes
    if (dt > 0.5) dt = 0.5;

    this.stepSafe(dt);
  }

  stepSafe(dt) {
    if (!this.simulation || !gameState.running) return;
    const maxSubStep = 1 / 60; // 0.01667s per slice for rock-solid collision stability
    let remaining = dt;
    let steps = 0;
    while (remaining > 0.0005 && steps < 120) {
      const step = Math.min(remaining, maxSubStep);
      this.simulation.stepPhysics(step);
      remaining -= step;
      steps++;
    }
  }

  bindEvents() {
    // When switching between Chrome tabs or minimizing window
    document.addEventListener("visibilitychange", () => {
      const now = performance.now();
      if (!document.hidden) {
        // Tab is now ACTIVE and visible again!
        const elapsed = (now - this.lastTime) / 1000;
        this.lastTime = now;
        if (elapsed > 0.02 && gameState.running) {
          this.stepSafe(Math.min(elapsed, 2.0));
        }
        // Force immediate render so user sees fresh arena instantly
        if (this.simulation) {
          this.simulation.render();
        }
      } else {
        // Tab went into background
        this.lastTime = now;
      }
    });

    // Window focus/blur handles switching between apps (e.g. Chrome to VS Code / Finder / Notepad)
    window.addEventListener("focus", () => {
      const now = performance.now();
      const elapsed = (now - this.lastTime) / 1000;
      this.lastTime = now;
      if (elapsed > 0.02 && gameState.running) {
        this.stepSafe(Math.min(elapsed, 2.0));
      }
      if (this.simulation) {
        this.simulation.render();
      }
    });

    window.addEventListener("blur", () => {
      this.lastTime = performance.now();
    });
  }

  sync() {
    this.lastTime = performance.now();
  }
}

let simulation = null;
let bgRunner = null;

document.addEventListener("DOMContentLoaded", () => {
  simulation = new ArenaSimulation();
  window.simulation = simulation;

  bgRunner = new BackgroundRunner(simulation);
  window.bgRunner = bgRunner;

  // Starfield in background
  initStarfield();

  // Simulated demo engagement: demo counters and ambient chat (not real platform analytics)
  startEngagementTicker();
  updateViewerPill();
  updateLikeBadge();
  updateHypeUI(null);

  // Animation Loop: Handles high-refresh display rendering when tab is visible
  let lastTime = performance.now();
  function loop(currentTime) {
    if (!document.hidden) {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.06);
      if (gameState.running && dt > 0.002) {
        bgRunner.stepSafe(dt);
        bgRunner.sync();
      }
      simulation.render();
    }
    lastTime = currentTime;
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  // Global user gesture unlock for Web Audio and Speech Synthesis
  const unlockAudioAndVoice = () => {
    audioSynth.init();
    voiceAnnouncer.unlock();
    const banner = document.getElementById("soundUnlockBanner");
    if (banner && banner.style.display !== "none") {
      banner.style.opacity = "0";
      setTimeout(() => { banner.style.display = "none"; }, 300);
    }
  };

  window.addEventListener("pointerdown", unlockAudioAndVoice, { passive: true });
  window.addEventListener("click", unlockAudioAndVoice, { passive: true });
  window.addEventListener("keydown", unlockAudioAndVoice, { passive: true });

  const soundBanner = document.getElementById("soundUnlockBanner");
  if (soundBanner) {
    soundBanner.addEventListener("click", (e) => {
      e.stopPropagation();
      unlockAudioAndVoice();
      voiceAnnouncer.announceEliminated({ name: "India", code: "in" });
    });
  }

  // Play / Pause
  const btnPlay = document.getElementById("btnPlayPause");
  if (btnPlay) {
    btnPlay.addEventListener("click", () => {
      unlockAudioAndVoice();
      gameState.running = !gameState.running;
      simulation.updatePlayPauseUI();
      if (gameState.running) {
          } else {
      }
    });
  }

  // Agitate / Shake
  const btnAgitate = document.getElementById("btnAgitate");
  if (btnAgitate) {
    btnAgitate.addEventListener("click", () => {
      unlockAudioAndVoice();
      simulation.agitate(4.5);
    });
  }

  // Reset
  const btnReset = document.getElementById("btnReset");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      simulation.initArena();
      gameState.running = false;
      simulation.updatePlayPauseUI();
    });
  }

  // Speed Stepper
  document.querySelectorAll(".speed-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".speed-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      gameConfig.speedMultiplier = parseFloat(btn.dataset.speed) || 1.0;
    });
  });

  // Sound Toggle & Live Voice Test
  const btnSound = document.getElementById("btnSoundToggle");
  if (btnSound) {
    btnSound.addEventListener("click", (e) => {
      e.stopPropagation();
      unlockAudioAndVoice();
      gameConfig.soundEnabled = !gameConfig.soundEnabled;
      btnSound.textContent = gameConfig.soundEnabled ? "🔊" : "🔇";
      if (gameConfig.soundEnabled) {
            voiceAnnouncer.announceEliminated({ name: "India", code: "in" });
      } else {
      }
    });
  }

  // Aspect Ratio Toggle (9:16 Shorts vs 16:9 Landscape)
  const btnAspect = document.getElementById("btnAspectRatio");
  const wrapper = document.getElementById("gameWrapper");
  if (btnAspect && wrapper) {
    btnAspect.addEventListener("click", () => {
      gameConfig.isLandscape = !gameConfig.isLandscape;
      if (gameConfig.isLandscape) {
        wrapper.classList.remove("shorts-mode");
        wrapper.classList.add("landscape-mode");
        btnAspect.textContent = "🖥️ 16:9";
      } else {
        wrapper.classList.remove("landscape-mode");
        wrapper.classList.add("shorts-mode");
        btnAspect.textContent = "📱 9:16";
      }
      setTimeout(() => simulation.handleResize(), 360);
    });
  }

  // Like Banner + HYPE VOTING (taps charge a Luck Shield for a country!)
  const btnLike = document.getElementById("btnLikeBanner");
  if (btnLike) {
    btnLike.addEventListener("click", () => {
      audioSynth.init();
      gameState.likeCount += Math.floor(1 + Math.random() * 5);
      updateLikeBadge();
      const emojis = ["👍", "❤️", "🇮🇳", "🇧🇷", "🇹🇷", "🇺🇸", "🔥"];
      spawnFloatingEmoji(emojis[Math.floor(Math.random() * emojis.length)]);

      // HYPE VOTE: 10 taps arm a Luck Shield for one country (persistent target!)
      const aliveM = gameState.flags.filter(f => f.status === "inside");
      if (!aliveM.length) { gameState.hypeTarget = null; updateHypeUI(null); return; }
      let target = null;
      // Reuse the same target between taps until it's shielded or eliminated
      if (gameState.hypeTarget && gameState.hypeTarget.status === "inside" && !gameState.hypeTarget.shield) {
        target = aliveM.find(f => f === gameState.hypeTarget) || null;
      }
      if (!target) {
        if (gameConfig.pinnedCountryName) {
          target = aliveM.find(f => f.country.name.toLowerCase() === gameConfig.pinnedCountryName.toLowerCase());
        }
        if (!target) target = aliveM[Math.floor(Math.random() * aliveM.length)];
        gameState.hypeTarget = target;
        pushChat(`rooting for ${target.country.name} now 🫡`, target.country.code);
      }

      if (target.shield) {
        updateHypeUI(target);
        return;
      }
      target.hypeCharge = (target.hypeCharge || 0) + 1;
      updateHypeUI(target);

      if (target.hypeCharge >= 10) {
        target.shield = true;
        target.hypeCharge = 0;
        gameState.hypeTarget = null;
        likeBurst(12);
        audioSynth.playPinSuccess();
        for (let p = 0; p < 12; p++) {
          gameState.particles.push(new Particle(target.x, target.y, "#00ff88", 2.4));
        }
        spawnFloatingEmoji("🛡️");
        simulation.showToast(`🛡️ LUCK SHIELD ARMED FOR ${target.country.name.toUpperCase()}!`, "highlight");
        voiceAnnouncer.speakCaster(`The viewers have armed a LUCK SHIELD for ${target.country.name}! The next elimination will be blocked for them!`, true);
        pushChat(`🛡️ LUCK SHIELD armed for ${target.country.name}!!`, target.country.code);
        pushChat("the shield meta is BACK", "", CHAT_NAMES[0]);
        updateHypeUI(null);
      }
    });
  }

  // Continental Wars interactive pills (Cheer / Highlight)
  const contKeys = ["Asia", "Europe", "Americas", "Africa", "Oceania"];
  const contIcons = { Asia: "🌏", Europe: "🌍", Americas: "🌎", Africa: "🌍", Oceania: "🌊" };
  contKeys.forEach(cont => {
    const pill = document.getElementById(`contPill${cont}`);
    if (pill) {
      pill.addEventListener("click", () => {
        audioSynth.init();
        audioSynth.playPinSuccess();
        const alive = gameState.continentCounts[cont] || 0;
        const icon = contIcons[cont] || "🏳️";
        simulation.showToast(`${icon} ${cont.toUpperCase()}: ${alive} NATIONS FIGHTING!`, "highlight");
        voiceAnnouncer.speakCaster(`${cont} has ${alive} nations defending their continent!`);
        // Pulse particles for that continent's alive balls
        gameState.flags.forEach(f => {
          if (f.status === "inside" && f.country.continent === cont) {
            f.angle += (Math.random() - 0.5) * 0.6;
            for (let p = 0; p < 2; p++) {
              gameState.particles.push(new Particle(f.x, f.y, "#00f0ff", 1.8));
            }
          }
        });
      });
    }
  });

  // Settings Drawer Toggle
  const btnSettings = document.getElementById("btnSettingsToggle");
  const btnCloseDrawer = document.getElementById("btnCloseDrawer");
  const drawer = document.getElementById("settingsDrawer");

  const toggleDrawer = () => {
    if (drawer) drawer.classList.toggle("open");
  };

  if (btnSettings) btnSettings.addEventListener("click", toggleDrawer);
  if (btnCloseDrawer) btnCloseDrawer.addEventListener("click", toggleDrawer);

  // Real-time music volume feedback
  const musicVolInput = document.getElementById("musicVolumeInput");
  const musicVolVal = document.getElementById("musicVolumeVal");
  if (musicVolInput) {
    musicVolInput.addEventListener("input", () => {
      const v = parseFloat(musicVolInput.value) || 0;
      if (musicVolVal) musicVolVal.textContent = `${Math.round(v * 100)}%`;
      bgMusic.setVolume(v);
    });
  }

  // Real-time sound volume feedback
  const soundVolInput = document.getElementById("soundVolumeInput");
  const soundVolVal = document.getElementById("soundVolumeVal");
  if (soundVolInput) {
    soundVolInput.addEventListener("input", () => {
      const v = parseFloat(soundVolInput.value) || 0;
      if (soundVolVal) soundVolVal.textContent = `${Math.round(v * 100)}%`;
      gameConfig.soundVolume = v;
    });
  }

  // Gravity slider feedback (the setting is applied when the user presses Apply & Restart).
  const gravityInput = document.getElementById("gravityInput");
  const gravityVal = document.getElementById("gravityVal");
  if (gravityInput) {
    const refreshGravityLabel = () => {
      if (gravityVal) gravityVal.textContent = Number(gravityInput.value).toFixed(2);
    };
    gravityInput.addEventListener("input", refreshGravityLabel);
    refreshGravityLabel();
  }

  // Live HUD cluster can be toggled without restarting the arena.
  const liveClusterCheck = document.getElementById("liveClusterCheck");
  const applyLiveClusterVisibility = (enabled) => {
    gameConfig.liveClusterEnabled = enabled;
    const clusterElements = ["liveCasterTicker", "elimFeedPanel"];
    clusterElements.forEach((id) => {
      const element = document.getElementById(id);
      if (element) element.style.display = enabled ? "" : "none";
    });
    const chatStack = document.getElementById("liveChatStack");
    if (chatStack) chatStack.style.display = (enabled && gameConfig.fakeChatEnabled !== false) ? "" : "none";
  };
  if (liveClusterCheck) {
    liveClusterCheck.checked = gameConfig.liveClusterEnabled !== false;
    liveClusterCheck.addEventListener("change", () => applyLiveClusterVisibility(liveClusterCheck.checked));
  }

  // Settings Apply
  const btnApply = document.getElementById("btnApplySettings");
  if (btnApply) {
    btnApply.addEventListener("click", () => {
      const countSel = document.getElementById("flagCountSelect");
      if (countSel) {
        gameConfig.totalCountries = countSel.value === "all" ? "all" : parseInt(countSel.value) || COUNTRIES_DB.length;
      }

      const spokeSpeedInput = document.getElementById("spokeSpeedInput");
      if (spokeSpeedInput) gameConfig.spokeSpeed = 0.009 * (parseFloat(spokeSpeedInput.value) || 1.0);

      const centerGateSpeedInput = document.getElementById("centerGateSpeedInput");
      if (centerGateSpeedInput) gameConfig.centerGateSpeed = 0.015 * (parseFloat(centerGateSpeedInput.value) || 1.2);

      const bouncinessInput = document.getElementById("bouncinessInput");
      if (bouncinessInput) gameConfig.bounciness = parseFloat(bouncinessInput.value) || 0.92;

      // Preserve an explicit 0 value so gravity can be disabled completely.
      const gravitySettingInput = document.getElementById("gravityInput");
      if (gravitySettingInput) {
        const parsedGravity = parseFloat(gravitySettingInput.value);
        gameConfig.gravity = Number.isFinite(parsedGravity) ? Math.max(0, Math.min(0.3, parsedGravity)) : 0.06;
      }

      const autoCycleCheck = document.getElementById("autoCycleCheck");
      if (autoCycleCheck) gameConfig.autoCycle = autoCycleCheck.checked;

      const voiceCheck = document.getElementById("voiceAnnouncerCheck");
      if (voiceCheck) gameConfig.voiceAnnouncerEnabled = voiceCheck.checked;

      // Live HUD cluster master toggle (caster ticker, elimination board, and chat).
      const liveClusterSetting = document.getElementById("liveClusterCheck");
      if (liveClusterSetting) applyLiveClusterVisibility(liveClusterSetting.checked);

      // Fake live comments toggle (applies instantly to the chat overlay)
      const fakeChatCheck = document.getElementById("fakeChatCheck");
      if (fakeChatCheck) {
        gameConfig.fakeChatEnabled = fakeChatCheck.checked;
        const chatStack = document.getElementById("liveChatStack");
        if (chatStack) chatStack.style.display = (fakeChatCheck.checked && gameConfig.liveClusterEnabled !== false) ? "" : "none";
      }

      const musicCheck = document.getElementById("musicCheck");
      if (musicCheck) {
        gameConfig.musicEnabled = musicCheck.checked;
        if (!gameConfig.musicEnabled) {
          } else if (gameConfig.soundEnabled && gameState.running) {
              }
      }

      if (musicVolInput) {
        bgMusic.setVolume(parseFloat(musicVolInput.value) || 0.15);
      }

      if (soundVolInput) {
        gameConfig.soundVolume = parseFloat(soundVolInput.value) || 0.75;
      }

      simulation.initArena();
      gameState.running = true;
      simulation.updatePlayPauseUI();
      if (drawer) drawer.classList.remove("open");
    });
  }

  // Country Search & Quick Chips
  initCountrySearch();

  // Next Round / Replay buttons
  const btnNext = document.getElementById("btnNextRound");
  if (btnNext) btnNext.addEventListener("click", () => simulation.advanceNextCycle());

  const btnReplay = document.getElementById("btnPlayAgain");
  if (btnReplay) {
    btnReplay.addEventListener("click", () => {
      const modal = document.getElementById("winnerModal");
      if (modal) modal.classList.remove("show");
      simulation.initArena();
      gameState.running = true;
      simulation.updatePlayPauseUI();
    });
  }

  // Fullscreen
  const btnFull = document.getElementById("btnFullscreen");
  if (btnFull) {
    btnFull.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });
  }

  // URL Mode Check & Auto Mode Setup
  const urlMode = new URLSearchParams(window.location.search).get("mode");
  if (urlMode === "gauntlet") {
    simulation.setBattleMode("gauntlet");
  }

  // Header Mode badge toggle
  const btnModeToggle = document.getElementById("btnModeBadgeToggle");
  if (btnModeToggle) {
    btnModeToggle.addEventListener("click", () => {
      audioSynth.init();
      audioSynth.playPinSuccess();
      const nextMode = (gameState.gameMode === "gauntlet") ? "elimination" : "gauntlet";
      simulation.setBattleMode(nextMode);
    });
  }

  // Hub Gauntlet Button
  const hubGauntletBtn = document.getElementById("hubBtnGauntlet");
  if (hubGauntletBtn) {
    hubGauntletBtn.addEventListener("click", (e) => {
      e.preventDefault();
      audioSynth.init();
      audioSynth.playPinSuccess();
      simulation.setBattleMode("gauntlet");
    });
  }

  // Settings Drawer Mode Selector Cards
  document.querySelectorAll(".mode-card").forEach(card => {
    card.addEventListener("click", () => {
      audioSynth.init();
      audioSynth.playPinSuccess();
      const targetMode = card.dataset.mode;
      if (targetMode === "gauntlet" || targetMode === "elimination") {
        simulation.setBattleMode(targetMode);
      } else {
        simulation.showToast("⚡ Coming Soon!", "highlight");
      }
    });
  });

  // Auto start simulation
  setTimeout(() => {
    gameState.running = true;
    simulation.updatePlayPauseUI();
  }, 600);
});

// Setup Starfield Canvas
function initStarfield() {
  const canvas = document.getElementById("starfieldCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  for (let i = 0; i < 90; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 0.5 + Math.random() * 1.5,
      alpha: 0.2 + Math.random() * 0.7,
      vAlpha: (Math.random() - 0.5) * 0.015
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.alpha += s.vAlpha;
      if (s.alpha <= 0.1 || s.alpha >= 0.9) s.vAlpha = -s.vAlpha;
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, s.alpha)})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// Country Search & Quick Pinning
function initCountrySearch() {
  const chipsContainer = document.getElementById("quickCountryChips");
  const searchInput = document.getElementById("countrySearchInput");
  const clearBtn = document.getElementById("btnClearPin");
  const pinnedBar = document.getElementById("pinnedCountryBar");
  const pinnedFlag = document.getElementById("pinnedFlagIcon");
  const pinnedName = document.getElementById("pinnedCountryName");

  function pinCountry(countryName) {
    gameConfig.pinnedCountryName = countryName;
    const country = COUNTRIES_DB.find(c => c.name.toLowerCase() === countryName.toLowerCase());
    if (country && pinnedBar) {
      pinnedFlag.textContent = country.flag;
      pinnedName.textContent = country.name;
      pinnedBar.style.display = "flex";
      simulation.initArena();
      gameState.running = true;
      simulation.updatePlayPauseUI();
    }
  }

  if (chipsContainer) {
    POPULAR_PINS.forEach(name => {
      const c = COUNTRIES_DB.find(item => item.name === name);
      if (!c) return;
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip-btn";
      chip.textContent = `${c.flag} ${c.name}`;
      chip.addEventListener("click", () => pinCountry(c.name));
      chipsContainer.appendChild(chip);
    });
  }

  if (searchInput) {
    searchInput.addEventListener("keydown", e => {
      if (e.key === "Enter" && searchInput.value.trim()) {
        pinCountry(searchInput.value.trim());
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      gameConfig.pinnedCountryName = null;
      if (pinnedBar) pinnedBar.style.display = "none";
      if (searchInput) searchInput.value = "";
    });
  }
}

// Global collision benchmark runner for 67, 100, and max roster (201)
window.runCollisionBenchmark = function(iterations = 400) {
  const counts = [67, 100, COUNTRIES_DB.length];
  const sim = window.simulation;
  if (!sim) {
    console.error("Simulation not ready yet");
    return;
  }
  const cx = gameState.arenaCenter.x || 200;
  const cy = gameState.arenaCenter.y || 200;
  const R = gameState.arenaRadius || 180;
  const summary = {};

  counts.forEach(count => {
    const testFlags = [];
    const radius = count > 150 ? 9.8 : (count > 90 ? 11.5 : 13.0);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 25 + Math.sqrt((i + 0.5) / count) * (R - 35);
      const m = new FlagMarble(COUNTRIES_DB[i % COUNTRIES_DB.length], cx + Math.cos(angle) * r, cy + Math.sin(angle) * r, radius);
      m.vx = (Math.random() - 0.5) * 1.5;
      m.vy = (Math.random() - 0.5) * 1.5;
      testFlags.push(m);
    }

    // 1. Measure Brute Force O(N^2)
    const t0 = performance.now();
    for (let iter = 0; iter < iterations; iter++) {
      for (let i = 0; i < count; i++) {
        const f1 = testFlags[i];
        for (let j = i + 1; j < count; j++) {
          sim.resolveMarbleCollision(f1, testFlags[j]);
        }
      }
    }
    const t1 = performance.now();
    const bruteMs = (t1 - t0) / iterations;

    // 2. Measure Spatial Grid O(N)
    const t2 = performance.now();
    for (let iter = 0; iter < iterations; iter++) {
      sim.handleMarbleCollisions(testFlags, cx, cy, R);
    }
    const t3 = performance.now();
    const gridMs = (t3 - t2) / iterations;

    const brutePairs = (count * (count - 1)) / 2;
    summary[`${count}_countries`] = {
      Roster: count,
      PotentialPairs: brutePairs,
      BruteForceTime: `${bruteMs.toFixed(4)} ms`,
      SpatialGridTime: `${gridMs.toFixed(4)} ms`,
      Speedup: `${(bruteMs / Math.max(0.0001, gridMs)).toFixed(2)}x faster`
    };
  });

  console.table(summary);
  return summary;
};
