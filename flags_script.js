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

const POPULAR_PINS = ["India", "United States", "Brazil", "Turkey", "Argentina", "Botswana", "Japan", "Germany", "Mexico", "United Kingdom"];

// =============================================================================
// 2. CONFIGURATION & STATE
// =============================================================================
const gameConfig = {
  mode: "elimination",       // 'elimination' (center hole eliminates), 'qualifying', 'vortex'
  totalCountries: 201,       // 201 Countries (matches user request for all 201 nations!)
  spokeSpeed: 0.0075,        // Obstacle spokes rotation speed (counter-clockwise)
  centerGateSpeed: 0.018,    // Central hole gate rotation speed
  bounciness: 0.95,          // Elasticity of collisions
  gravity: 0.0,              // Zero downward gravity - floating dynamic air-hockey/vortex physics!
  speedMultiplier: 1.0,
  soundVolume: 0.85,
  musicVolume: 0.0,
  musicEnabled: false,
  soundEnabled: true,
  voiceAnnouncerEnabled: true,
  autoCycle: true,
  pinnedCountryName: null,
  isLandscape: false
};

const gameState = {
  running: true,             // Game runs automatically!
  cycle: 1,                  // Cycle 1 as shown in video frame_001.jpg
  timerCountdown: 4.0,       // 4s circle countdown
  timerMax: 4.0,
  timerInterval: null,
  flags: [],
  eliminatedList: [],
  centerState: "closed",     // "closed", "opening", "open"
  centerOpenProgress: 0,     // 0 (closed) to 1 (fully open)
  centerCooldown: 4.0,
  centerOpenDuration: 0,
  centerTrappedFlag: null,   // Flag currently trapped inside the center
  centerTrappedTime: 0,
  particles: [],
  spokesAngle: -Math.PI / 2, // 12 o'clock vertical spoke matching frame_001.jpg!
  centerGateAngle: 0,
  arenaRadius: 155,
  centerRadius: 36,          // Compact yellow center hole (matching screenshot 2)
  arenaCenter: { x: 200, y: 200 },
  roundFinished: false,
  likeCount: 48200
};

// =============================================================================
// 3. SOUND SYNTHESIZER (Web Audio API)
// =============================================================================
class SoundSynth {
  constructor() {
    this.ctx = null;
    this.lastSoundTime = 0;
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

  playCollision(force = 1) {
    if (!gameConfig.soundEnabled || !this.ctx) return;
    const now = performance.now();
    if (now - this.lastSoundTime < 32) return;
    this.lastSoundTime = now;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const freq = 380 + Math.random() * 320;
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.4, this.ctx.currentTime + 0.035);

      const vol = Math.min(0.22, 0.04 + force * 0.08) * gameConfig.soundVolume;
      gain.gain.setValueAtTime(vol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.045);
    } catch (e) {}
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
}

const audioSynth = new SoundSynth();

// =============================================================================
// 3.2. BACKGROUND MUSIC (Disabled / Removed)
// =============================================================================
class BackgroundMusic {
  constructor() {
    this.isPlaying = false;
  }
  play() {}
  pause() {}
  setVolume(vol) {}
}

const bgMusic = new BackgroundMusic();

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

  announceWinner(countryName) {
    if (!countryName) return;
    const spokenName = formatCountryForSpeech(countryName);
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

class FlagMarble {
  constructor(country, x, y, radius = 13.5) {
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
  }

  isPinned() {
    return gameConfig.pinnedCountryName &&
      this.country.name.toLowerCase() === gameConfig.pinnedCountryName.toLowerCase();
  }

  draw(ctx) {
    if (this.status === "eliminated" && this.opacity <= 0) return;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.scale, this.scale);
    ctx.globalAlpha = Math.max(0, Math.min(1, this.opacity));

    const r = this.radius;

    // Glowing aura if pinned
    if (this.isPinned()) {
      ctx.shadowColor = "#ffbe0b";
      ctx.shadowBlur = 16;
      ctx.strokeStyle = "#ffbe0b";
      ctx.lineWidth = 3;
    } else {
      ctx.shadowColor = "rgba(0, 0, 0, 0.6)";
      ctx.shadowBlur = 6;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
      ctx.lineWidth = 1;
    }

    // Circular clip path for 3D Marble Sphere
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.save();
    ctx.clip();

    // 1. Draw Flag Texture
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

    // 2. 3D Spherical Specular Highlight & Shading Overlay
    const sphereGrad = ctx.createRadialGradient(-r * 0.35, -r * 0.35, r * 0.1, 0, 0, r);
    sphereGrad.addColorStop(0, "rgba(255, 255, 255, 0.65)");
    sphereGrad.addColorStop(0.35, "rgba(255, 255, 255, 0.15)");
    sphereGrad.addColorStop(0.75, "rgba(0, 0, 0, 0.15)");
    sphereGrad.addColorStop(1, "rgba(0, 0, 0, 0.65)");
    ctx.fillStyle = sphereGrad;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore(); // unclip

    // 3. Crisp Border Ring
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.stroke();

    // Pinned Crown / Label
    if (this.isPinned() && this.status === "inside") {
      ctx.fillStyle = "#ffbe0b";
      ctx.font = "bold 9px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("⭐ " + this.country.name, 0, -r - 5);
    }

    ctx.restore();
  }
}

// Particle System
class Particle {
  constructor(x, y, color = "#00f0ff") {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 6;
    this.vy = (Math.random() - 0.5) * 6 - 1;
    this.color = color;
    this.size = 2.5 + Math.random() * 3.5;
    this.life = 1.0;
    this.decay = 0.025 + Math.random() * 0.03;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.06;
    this.life -= this.decay;
  }
  draw(ctx) {
    if (this.life <= 0) return;
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.life);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
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
    this.setupResize();
    this.initArena();
    this.setupTimer();
  }

  setupResize() {
    const resize = () => {
      const rect = this.container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      this.width = rect.width;
      this.height = rect.height;
      this.canvas.width = rect.width * dpr;
      this.canvas.height = rect.height * dpr;
      this.ctx.scale(dpr, dpr);

      gameState.arenaCenter = {
        x: this.width / 2,
        y: this.height / 2
      };

      // Arena radius snugly fitting container with margins for status text
      const minDim = Math.min(this.width, this.height);
      gameState.arenaRadius = Math.max(120, (minDim / 2) - 18);
      gameState.centerRadius = gameState.arenaRadius * 0.23; // Compact yellow center hole matching reference video
    };

    window.addEventListener("resize", resize);
    resize();
  }

  initArena() {
    gameState.flags = [];
    gameState.eliminatedList = [];
    gameState.particles = [];
    gameState.roundFinished = false;
    gameState.centerTrappedFlag = null;
    gameState.centerTrappedTime = 0;
    gameState.centerState = "closed";
    gameState.centerOpenProgress = 0;
    gameState.timerMax = 4.0;
    gameState.timerCountdown = 4.0;
    gameState.centerCooldown = 4.0;
    gameState.centerOpenDuration = 0;
    gameState.spokesAngle = -Math.PI / 2; // Vertical 12 o'clock spoke at match start (matches frame_001.jpg!)
    gameState.centerGateAngle = 0;

    // Clear the eliminated flags cemetery grid
    const grid = document.getElementById("eliminatedFlagsGrid");
    if (grid) grid.innerHTML = "";

    const targetCount = (gameConfig.totalCountries === "all" || !gameConfig.totalCountries)
      ? COUNTRIES_DB.length
      : Math.min(parseInt(gameConfig.totalCountries) || COUNTRIES_DB.length, COUNTRIES_DB.length);

    const shuffled = [...COUNTRIES_DB].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, targetCount);

    // If pinned country is chosen, ensure it's in the arena
    if (gameConfig.pinnedCountryName) {
      const found = selected.find(c => c.name.toLowerCase() === gameConfig.pinnedCountryName.toLowerCase());
      if (!found) {
        const pinSource = COUNTRIES_DB.find(c => c.name.toLowerCase() === gameConfig.pinnedCountryName.toLowerCase());
        if (pinSource) selected[0] = pinSource;
      }
    }

    const { x: cx, y: cy } = gameState.arenaCenter;
    const R = gameState.arenaRadius;
    const rInner = gameState.centerRadius;

    // Scale marble radius appropriately for 201 countries so they float and move cleanly
    let marbleRadius = 13.5;
    if (targetCount > 150) {
      marbleRadius = 7.5; // Perfectly sized for all 201 nations without congestion!
    } else if (targetCount > 90) {
      marbleRadius = 9.5;
    } else if (targetCount > 50) {
      marbleRadius = 12.0;
    } else {
      marbleRadius = 15.0;
    }

    // Spawn marbles between rInner + 8 and R - 10 in concentric golden spiral packing
    selected.forEach((country, idx) => {
      const phi = idx * 137.5 * (Math.PI / 180);
      const spawnMin = rInner + 8;
      const spawnMax = R - 10;
      const r = spawnMin + Math.sqrt((idx + 0.5) / targetCount) * (spawnMax - spawnMin);
      const x = cx + Math.cos(phi) * r;
      const y = cy + Math.sin(phi) * r;

      const marble = new FlagMarble(country, x, y, marbleRadius);
      // Dynamic initial velocities in all directions for floating air-hockey / vortex action
      marble.vx = (Math.random() - 0.5) * 2.4;
      marble.vy = (Math.random() - 0.5) * 2.4;
      gameState.flags.push(marble);
    });

    this.updateHUD();
    this.updateAnnouncerText("ALL ELIMINATED");
    this.updateTimerCircleUI();
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

  agitate(power = 3.5) {
    const { x: cx, y: cy } = gameState.arenaCenter;
    gameState.flags.forEach(f => {
      if (f.status === "inside") {
        const dx = f.x - cx;
        const dy = f.y - cy;
        const angle = Math.atan2(dy, dx);
        f.vx += Math.cos(angle + 1.2) * (Math.random() * power);
        f.vy += Math.sin(angle + 1.2) * (Math.random() * power);
      }
    });
    audioSynth.playCollision(1.5);
  }

  stepPhysics(dt) {
    const { x: cx, y: cy } = gameState.arenaCenter;
    const R = gameState.arenaRadius;
    const rInner = gameState.centerRadius;
    // Rotate obstacles counter-clockwise (CCW) smoothly matching reference video!
    gameState.spokesAngle = (gameState.spokesAngle - gameConfig.spokeSpeed * gameConfig.speedMultiplier) % (Math.PI * 2);

    const aliveFlags = gameState.flags.filter(f => f.status === "inside");

    // 4-SECOND TIMER COUNTDOWN & MINI-CIRCLE ELIMINATION
    if (!gameState.roundFinished && aliveFlags.length > 1) {
      gameState.timerCountdown -= dt * gameConfig.speedMultiplier;

      // When countdown is in final 0.8 seconds: Mini circle starts OPENING!
      if (gameState.timerCountdown <= 0.8 && gameState.timerCountdown > 0) {
        gameState.centerState = "open";
        gameState.centerOpenProgress = Math.min(1.0, (0.8 - gameState.timerCountdown) / 0.6);
      } else if (gameState.timerCountdown > 0.8) {
        gameState.centerState = "closed";
        gameState.centerOpenProgress = 0;
      }

      // AS SOON AS 4-SECOND TIMER HITS ZERO (0):
      if (gameState.timerCountdown <= 0) {
        gameState.centerState = "open";
        gameState.centerOpenProgress = 1.0;

        // Eliminate whichever country is currently inside or closest to the mini center circle!
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
        } else {
          gameState.timerCountdown = gameState.timerMax;
          gameState.centerState = "closed";
          gameState.centerOpenProgress = 0;
        }
      }
    }

    this.updateTimerCircleUI();

    const microShake = 0.08 * gameConfig.speedMultiplier;

    // 6 Spoke Dividers angles: 0, 60, 120, 180, 240, 300 deg + spokesAngle
    const spokeAngles = [0, Math.PI / 3, (2 * Math.PI) / 3, Math.PI, (4 * Math.PI) / 3, (5 * Math.PI) / 3];

    const spokeInnerR = R * 0.48; // Open corridor around center circle
    const spokeOuterR = R;        // Outer anchor
    const spokeThickness = 14;
    const omega = gameConfig.spokeSpeed * gameConfig.speedMultiplier;

    for (let i = 0; i < aliveFlags.length; i++) {
      const f1 = aliveFlags[i];
      if (f1.status !== "inside") continue;

      // Physics integration: Zero gravity floating dynamic motion matching video
      f1.x += f1.vx * gameConfig.speedMultiplier;
      f1.y += f1.vy * gameConfig.speedMultiplier;
      f1.vx *= 0.996;
      f1.vy *= 0.996;

      const dx = f1.x - cx;
      const dy = f1.y - cy;
      const dist = Math.hypot(dx, dy) || 1;

      // Gentle orbital circulation swirl (keeps balls floating smoothly across arena matching video)
      f1.vx += (-dy / dist) * 0.032 * gameConfig.speedMultiplier;
      f1.vy += (dx / dist) * 0.032 * gameConfig.speedMultiplier;

      // Liveliness check: prevent balls from ever stalling, clumping, or freezing
      const currentSpeed = Math.hypot(f1.vx, f1.vy);
      if (currentSpeed < 0.8) {
        const boostAngle = currentSpeed > 0.05 ? Math.atan2(f1.vy, f1.vx) : Math.random() * Math.PI * 2;
        f1.vx += Math.cos(boostAngle) * 0.65;
        f1.vy += Math.sin(boostAngle) * 0.65;
      } else if (currentSpeed > 7.5) {
        f1.vx = (f1.vx / currentSpeed) * 7.5;
        f1.vy = (f1.vy / currentSpeed) * 7.5;
      }

      // 1. OUTER CIRCLE WALL COLLISION
      if (dist + f1.radius >= R) {
        const nx = dx / dist;
        const ny = dy / dist;
        f1.x = cx + nx * (R - f1.radius - 1.5);
        f1.y = cy + ny * (R - f1.radius - 1.5);
        const dot = f1.vx * nx + f1.vy * ny;
        const bounceVel = Math.max(1.8, Math.abs(dot) * (1 + gameConfig.bounciness));
        f1.vx -= nx * bounceVel;
        f1.vy -= ny * bounceVel;
        audioSynth.playCollision(Math.min(1.5, Math.abs(dot)));
      }

      // 2. CENTER CIRCLE LOGIC:
      // When YELLOW (closed): Flag balls can freely pass over / roll through the center circle!
      // When RED (open): Balls CANNOT pass! Any ball that enters is sucked in & eliminated!
      if (gameState.centerState === "open" && gameState.centerOpenProgress >= 0.4) {
        // Gravitational vortex pull towards the red elimination hole
        if (dist < rInner * 1.8) {
          const suctionStrength = 0.45 * gameConfig.speedMultiplier;
          f1.vx -= (dx / dist) * suctionStrength;
          f1.vy -= (dy / dist) * suctionStrength;
        }

        // Did this ball enter the red elimination circle?
        if (dist <= rInner + f1.radius * 0.4) {
          this.handleCenterCapture(f1);
          continue; // Ball is eliminated, skip further collisions for it
        }
      }

      // 3. COLLISION WITH 6 PURPLE RADIAL SPOKES (Attached directly to the large outer circle!)
      spokeAngles.forEach(baseA => {
        const a = (baseA + gameState.spokesAngle) % (Math.PI * 2);
        // Spoke segment from (p1x, p1y) to (p2x, p2y)
        const p1x = cx + Math.cos(a) * spokeInnerR;
        const p1y = cy + Math.sin(a) * spokeInnerR;
        const p2x = cx + Math.cos(a) * spokeOuterR;
        const p2y = cy + Math.sin(a) * spokeOuterR;

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

          // Safety separation buffer: Immediately pop ball outside the spoke volume
          const separationBuffer = 2.5;
          f1.x = nearX + nx * (minDist + separationBuffer);
          f1.y = nearY + ny * (minDist + separationBuffer);

          // Linear velocity vector of this point on the CCW rotating spoke
          const rx = nearX - cx;
          const ry = nearY - cy;
          const spokeVx = ry * omega;
          const spokeVy = -rx * omega;

          // Relative normal velocity
          const relVx = f1.vx - spokeVx;
          const relVy = f1.vy - spokeVy;
          const relNorm = relVx * nx + relVy * ny;

          // Strong repulsion kick away from spoke surface (Pinball flipper dynamics)
          const spokeSpeedMag = Math.hypot(spokeVx, spokeVy);
          const bounceFactor = Math.max(0.95, gameConfig.bounciness);
          const bounceSpeed = Math.max(3.2, Math.abs(relNorm) * (1 + bounceFactor) + spokeSpeedMag * 1.4);

          // Fling the ball forward and outward away from the spoke
          f1.vx = spokeVx * 0.35 + nx * bounceSpeed + (Math.random() - 0.5) * 0.5;
          f1.vy = spokeVy * 0.35 + ny * bounceSpeed + (Math.random() - 0.5) * 0.5;

          // If wedged near outer wall, deflect inward towards center corridor
          if (dist > R - f1.radius - 14) {
            const radialUnitX = (nearX - cx) / (Math.hypot(nearX - cx, nearY - cy) || 1);
            const radialUnitY = (nearY - cy) / (Math.hypot(nearX - cx, nearY - cy) || 1);
            f1.vx -= radialUnitX * 2.5;
            f1.vy -= radialUnitY * 2.5;
            f1.x -= radialUnitX * 2.0;
            f1.y -= radialUnitY * 2.0;
          }

          audioSynth.playCollision(Math.min(2.0, bounceSpeed * 0.35));
        }
      });

      // 4. BALL-TO-BALL ELASTIC COLLISIONS
      for (let j = i + 1; j < aliveFlags.length; j++) {
        const f2 = aliveFlags[j];
        const cdx = f2.x - f1.x;
        const cdy = f2.y - f1.y;
        const minDist = f1.radius + f2.radius;
        const distSq = cdx * cdx + cdy * cdy;

        if (distSq < minDist * minDist && distSq > 0.0001) {
          const cdist = Math.sqrt(distSq);
          const nx = cdx / cdist;
          const ny = cdy / cdist;

          const overlap = 0.5 * (minDist - cdist) + 0.35;
          f1.x -= nx * overlap;
          f1.y -= ny * overlap;
          f2.x += nx * overlap;
          f2.y += ny * overlap;

          const kx = f1.vx - f2.vx;
          const ky = f1.vy - f2.vy;
          const dot = nx * kx + ny * ky;

          if (dot > 0) {
            const p = ((1 + gameConfig.bounciness) * dot) / (f1.mass + f2.mass);
            f1.vx -= p * f2.mass * nx;
            f1.vy -= p * f2.mass * ny;
            f2.vx += p * f1.mass * nx;
            f2.vy += p * f1.mass * ny;
            audioSynth.playCollision(Math.min(1.5, Math.abs(p)));
          }
        }
      }
    }

    // Process center trapped flag animation
    if (gameState.centerTrappedFlag) {
      const tf = gameState.centerTrappedFlag;
      // Pull toward exact arena center
      tf.x += (cx - tf.x) * 0.12;
      tf.y += (cy - tf.y) * 0.12;
      tf.scale = Math.min(1.4, tf.scale + 0.015);

      gameState.centerTrappedTime += dt;
      if (gameState.centerTrappedTime > 1.2) {
        // Shrink & eliminate
        tf.opacity -= 0.05;
        tf.scale -= 0.04;
        if (tf.opacity <= 0) {
          tf.status = "eliminated";
          gameState.centerTrappedFlag = null;
          gameState.centerTrappedTime = 0;
        }
      }
    }

    // Update particles
    for (let i = gameState.particles.length - 1; i >= 0; i--) {
      const p = gameState.particles[i];
      p.update();
      if (p.life <= 0) gameState.particles.splice(i, 1);
    }

    // Check round end
    this.checkRoundCompletion();
  }

  handleCenterCapture(flag) {
    // 1. Immediately SNAP the center CLOSED and reset the 4-second countdown!
    gameState.centerState = "closed";
    gameState.centerOpenProgress = 0;
    gameState.timerCountdown = gameState.timerMax; // Reset timer back to 4.0s!
    gameState.centerCooldown = gameState.timerMax;
    gameState.centerOpenDuration = 0;

    flag.status = "trapped_center";
    gameState.centerTrappedFlag = flag;
    gameState.centerTrappedTime = 0;
    gameState.eliminatedList.push(flag.country);

    // 2. Add eliminated country's mini flag to cemetery grid below arena
    this.addEliminatedFlagToGraveyard(flag.country);

    // 3. Blast country color particles
    const { x: cx, y: cy } = gameState.arenaCenter;
    for (let i = 0; i < 24; i++) {
      const col = (flag.country.colors && flag.country.colors.length)
        ? flag.country.colors[i % flag.country.colors.length]
        : "#ffbe0b";
      gameState.particles.push(new Particle(flag.x, flag.y, col));
    }

    // 4. Sound & Voice Announce: "[Country] is out!"
    audioSynth.init();
    audioSynth.playCenterElimination();
    voiceAnnouncer.announceEliminated(flag.country);
    this.showEliminationBadge(flag.country);
    this.updateAnnouncerText("ALL ELIMINATED");
    this.updateHUD();
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
    const alive = gameState.flags.filter(f => f.status === "inside").length;

    if (alive <= 1) {
      gameState.roundFinished = true;
      gameState.running = false;
      this.updatePlayPauseUI();
      audioSynth.playVictory();

      const winner = gameState.flags.find(f => f.status === "inside") || gameState.eliminatedList[gameState.eliminatedList.length - 1];
      this.triggerWinnerModal(winner ? (winner.country || winner) : null);
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
      voiceAnnouncer.announceWinner(winnerCountry.name);
      headline.textContent = "🏆 BATTLE ROYALE CHAMPION!";
      const code = (winnerCountry.code || "").toLowerCase();
      flagDisplay.innerHTML = `<img src="https://flagcdn.com/w160/${code}.png" alt="${winnerCountry.name}" style="width: 90px; height: 60px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.8); display: inline-block;">`;
      title.textContent = winnerCountry.name;
      summary.textContent = `The sole survivor out of ${gameState.flags.length} competing countries!`;
    }

    modal.classList.add("show");

    // Auto next cycle countdown: Automatically restarts match as soon as round ends!
    let count = 3;
    if (countdownSec) countdownSec.textContent = count;
    if (this._autoCycleInterval) clearInterval(this._autoCycleInterval);
    this._autoCycleInterval = setInterval(() => {
      count--;
      if (countdownSec) countdownSec.textContent = count;
      if (count <= 0) {
        clearInterval(this._autoCycleInterval);
        this._autoCycleInterval = null;
        this.advanceNextCycle();
      }
    }, 1000);
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

    this.initArena();
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

    // 3. DRAW COUNTRY FLAG MARBLES
    // 3. DRAW CENTRAL CIRCLE (YELLOW WHEN CLOSED, BRIGHT RED WHEN OPEN)
    // Rendered BEFORE marbles so balls visibly roll over the yellow circle!
    ctx.save();

    const openProgress = gameState.centerOpenProgress || 0;
    const isOpeningOrOpen = gameState.centerState === "open" || gameState.centerState === "opening";

    // Ring border color:
    // When Closed: Glowing Bright Yellow (#ffbe0b)
    // When Open (Elimination): Glowing Bright Red (#ff1133)
    let ringColor = "#ffbe0b";
    let glowColor = "rgba(255, 190, 11, 0.9)";
    if (openProgress > 0.15) {
      ringColor = "#ff1133";
      glowColor = "rgba(255, 17, 51, 1.0)";
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

    // B. When opening / open: Draw the RED central black hole void
    const voidRadius = rInner * 0.76 * openProgress;
    if (openProgress > 0.05) {
      // Dark red/black aperture gradient
      const voidGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, voidRadius);
      voidGrad.addColorStop(0, "#000000");
      voidGrad.addColorStop(0.7, "#1a0005");
      voidGrad.addColorStop(1, "#3d020d");

      ctx.fillStyle = voidGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, voidRadius, 0, Math.PI * 2);
      ctx.fill();

      // Glowing red event horizon ring
      ctx.strokeStyle = `rgba(255, 20, 50, ${0.5 + 0.5 * openProgress})`;
      ctx.lineWidth = 3;
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

    // 4. DRAW COUNTRY FLAG MARBLES (Drawn ON TOP of yellow circle so they roll over it!)
    gameState.flags.forEach(f => {
      if (f.status === "inside") f.draw(ctx);
    });

    // 5. IF A FLAG IS TRAPPED IN THE CENTER CHAMBER, DRAW IT SPOTLIGHTED IN THE VOID
    if (gameState.centerTrappedFlag) {
      gameState.centerTrappedFlag.draw(ctx);
    }

    // 5. DRAW OUTER NEON CYAN CIRCLE ARENA BORDER
    ctx.save();
    ctx.lineWidth = 4.5;
    ctx.shadowColor = "#00f0ff";
    ctx.shadowBlur = 18;
    ctx.strokeStyle = "#00f0ff";
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // 6. DRAW PARTICLES
    gameState.particles.forEach(p => p.draw(ctx));
  }

  updatePlayPauseUI() {
    const btn = document.getElementById("btnPlayPause");
    const icon = document.getElementById("playIcon");
    const label = document.getElementById("playLabel");
    if (!btn || !icon || !label) return;

    if (gameState.running) {
      btn.classList.add("playing");
      icon.textContent = "⏸";
      label.textContent = "PAUSE";
    } else {
      btn.classList.remove("playing");
      icon.textContent = "▶";
      label.textContent = "PLAY";
    }
  }
}

// =============================================================================
// 6. LIVE CHAT & ENGAGEMENT SIMULATOR
// =============================================================================
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

function initLiveChatTicker() {
  const display = document.getElementById("chatMessageDisplay");
  if (!display) return;
  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % CHAT_COMMENTS.length;
    display.textContent = `💬 ${CHAT_COMMENTS[idx]}`;
  }, 2800);
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
// 7. MAIN CONTROLLER & USER INTERACTION BINDINGS
// =============================================================================
let simulation = null;

document.addEventListener("DOMContentLoaded", () => {
  simulation = new ArenaSimulation();

  // Starfield in background
  initStarfield();

  // Animation Loop
  let lastTime = performance.now();
  function loop(currentTime) {
    const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
    lastTime = currentTime;

    if (gameState.running) {
      simulation.stepPhysics(dt);
    }
    simulation.render();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  // Global user gesture unlock for Web Audio, Speech Synthesis & 12s Music Loop
  const unlockAudioAndVoice = () => {
    audioSynth.init();
    voiceAnnouncer.unlock();
    bgMusic.play();
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
        bgMusic.play();
      } else {
        bgMusic.pause();
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
      bgMusic.pause();
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
        bgMusic.play();
        voiceAnnouncer.announceEliminated({ name: "India", code: "in" });
      } else {
        bgMusic.pause();
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
      setTimeout(() => simulation.setupResize(), 360);
    });
  }

  // Like Banner (Exact Match to Screenshot!)
  const btnLike = document.getElementById("btnLikeBanner");
  const likeBadge = document.getElementById("likeCounterBadge");
  if (btnLike) {
    btnLike.addEventListener("click", () => {
      audioSynth.init();
      gameState.likeCount += Math.floor(1 + Math.random() * 5);
      if (likeBadge) {
        likeBadge.textContent = `${(gameState.likeCount / 1000).toFixed(1)}K`;
      }
      const emojis = ["👍", "❤️", "🇮🇳", "🇧🇷", "🇹🇷", "🇺🇸", "🔥"];
      spawnFloatingEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    });
  }

  // Settings Drawer Toggle
  const btnSettings = document.getElementById("btnSettingsToggle");
  const btnOpenSettings = document.getElementById("btnOpenSettings");
  const btnCloseDrawer = document.getElementById("btnCloseDrawer");
  const drawer = document.getElementById("settingsDrawer");

  const toggleDrawer = () => {
    if (drawer) drawer.classList.toggle("open");
  };

  if (btnSettings) btnSettings.addEventListener("click", toggleDrawer);
  if (btnOpenSettings) btnOpenSettings.addEventListener("click", toggleDrawer);
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

      const autoCycleCheck = document.getElementById("autoCycleCheck");
      if (autoCycleCheck) gameConfig.autoCycle = autoCycleCheck.checked;

      const voiceCheck = document.getElementById("voiceAnnouncerCheck");
      if (voiceCheck) gameConfig.voiceAnnouncerEnabled = voiceCheck.checked;

      const musicCheck = document.getElementById("musicCheck");
      if (musicCheck) {
        gameConfig.musicEnabled = musicCheck.checked;
        if (!gameConfig.musicEnabled) {
          bgMusic.pause();
        } else if (gameConfig.soundEnabled && gameState.running) {
          bgMusic.play();
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

  // Live Chat Ticker
  initLiveChatTicker();

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
