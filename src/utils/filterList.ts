import { ContractEnumType, JobCategoryType, JobRoleType, LanguageType, VisaType } from '@/types/recruit'
import { CountryType } from '@/types/filter'

export const CONTRACT_LIST: { code: ContractEnumType; label: string }[] = [
  { code: 'INTERN', label: 'filter.contractTypeFilter.content.INTERN' },
  { code: 'NEWCOMER', label: 'filter.contractTypeFilter.content.NEWCOMER' },
  { code: 'EXPERIENCED', label: 'filter.contractTypeFilter.content.EXPERIENCED' },
  { code: 'CONTRACT', label: 'filter.contractTypeFilter.content.CONTRACT' },
  { code: 'REGULAR', label: 'filter.contractTypeFilter.content.REGULAR' },
]

export const NATIONALITY_LIST: { code: CountryType; label: string }[] = [
  { code: 'GHANA', label: 'Ghana (가나)' },
  { code: 'GABON', label: 'Gabon (가봉)' },
  { code: 'GUYANA', label: 'Guyana (가이아나)' },
  { code: 'GAMBIA', label: 'Gambia (감비아)' },
  { code: 'GUATEMALA', label: 'Guatemala (과테말라)' },
  { code: 'GRENADA', label: 'Grenada (그레나다)' },
  { code: 'GREECE', label: 'Greece (그리스)' },
  { code: 'GUINEA', label: 'Guinea (기니)' },
  { code: 'GUINEA_BISSAU', label: 'Guinea-Bissau (기니비사우)' },
  { code: 'NAMIBIA', label: 'Namibia (나미비아)' },
  { code: 'NAURU', label: 'Nauru (나우루)' },
  { code: 'NIGERIA', label: 'Nigeria (나이지리아)' },
  { code: 'REPUBLIC_OF_SOUTH_SUDAN', label: 'Republic Of South Sudan (남수단)' },
  { code: 'SOUTH_AFRICA', label: 'South Africa (남아프리카 공화국)' },
  { code: 'REPUBLIC_OF_SOUTH_OSSETIA', label: 'Republic Of South Ossetia (남오세티야)' },
  { code: 'NETHERLANDS', label: 'Netherlands (네덜란드)' },
  { code: 'NEPAL', label: 'Nepal (네팔)' },
  { code: 'NORWAY', label: 'Norway (노르웨이)' },
  { code: 'NEW_ZEALAND', label: 'New Zealand (뉴질랜드)' },
  { code: 'NIGER', label: 'Niger (니제르)' },
  { code: 'NICARAGUA', label: 'Nicaragua (니카라과)' },
  { code: 'KOREA_REPUBLIC_OF', label: 'Korea, Republic Of (대한민국)' },
  { code: 'TAIWAN', label: 'Taiwan (대만)' },
  { code: 'DENMARK', label: 'Denmark (덴마크)' },
  { code: 'DOMINICAN_REPUBLIC', label: 'Dominican Republic (도미니카 공화국)' },
  { code: 'DOMINICA', label: 'Dominica (도미니카 연방)' },
  { code: 'GERMANY', label: 'Germany (독일)' },
  { code: 'EAST_TIMOR', label: 'East Timor (동티모르)' },
  { code: 'LAO_PEOPLE_DEMOCRATIC_REPUBLIC', label: 'Lao People’s Democratic Republic (라오스)' },
  { code: 'LIBERIA', label: 'Liberia (라이베리아)' },
  { code: 'LATVIA', label: 'Latvia (라트비아)' },
  { code: 'RUSSIAN_FEDERATION', label: 'Russian Federation (러시아)' },
  { code: 'LEBANON', label: 'Lebanon (레바논)' },
  { code: 'LESOTHO', label: 'Lesotho (레소토)' },
  { code: 'ROMANIA', label: 'Romania (루마니아)' },
  { code: 'LUXEMBOURG', label: 'Luxembourg (룩셈부르크)' },
  { code: 'RWANDA', label: 'Rwanda (르완다)' },
  { code: 'LIBYAN_ARAB_JAMAHIRIYA', label: 'Libyan Arab Jamahiriya (리비아)' },
  { code: 'REPUBLIC_OF_LITHUANIA', label: 'Republic of Lithuania (리투아니아)' },
  { code: 'LIECHTENSTEIN', label: 'Liechtenstein (리히텐슈타인)' },
  { code: 'MADAGASCAR', label: 'Madagascar (마다가스카르)' },
  { code: 'MARSHALL_ISLANDS', label: 'Marshall Islands (마셜 제도)' },
  { code: 'MALAWI', label: 'Malawi (말라위)' },
  { code: 'MALAYSIA', label: 'Malaysia (말레이시아)' },
  { code: 'MALI', label: 'Mali (말리)' },
  { code: 'MEXICO', label: 'Mexico (멕시코)' },
  { code: 'MONACO', label: 'Monaco (모나코)' },
  { code: 'MOROCCO', label: 'Morocco (모로코)' },
  { code: 'MAURITIUS', label: 'Mauritius (모리셔스)' },
  { code: 'MAURITANIA', label: 'Mauritania (모리타니)' },
  { code: 'MOZAMBIQUE', label: 'Mozambique (모잠비크)' },
  { code: 'MONTENEGRO', label: 'Montenegro (몬테네그로)' },
  { code: 'MOLDOVA', label: 'Moldova (몰도바)' },
  { code: 'MALDIVES', label: 'Maldives (몰디브)' },
  { code: 'MALTA', label: 'Malta (몰타)' },
  { code: 'MONGOLIA', label: 'Mongolia (몽골)' },
  { code: 'UNITED_STATES', label: 'United States (미국)' },
  { code: 'MYANMAR', label: 'Myanmar (미얀마)' },
  { code: 'FEDERATED_STATES_OF_MICRONESIA', label: 'Federated States of Micronesia (미크로네시아 연방)' },
  { code: 'VANUATU', label: 'Vanuatu (바누아투)' },
  { code: 'BAHRAIN', label: 'Bahrain (바레인)' },
  { code: 'BARBADOS', label: 'Barbados (바베이도스)' },
  { code: 'VATICAN_CITY', label: 'Vatican City (바티칸)' },
  { code: 'BAHAMAS', label: 'Bahamas (바하마)' },
  { code: 'BANGLADESH', label: 'Bangladesh (방글라데시)' },
  { code: 'BENIN', label: 'Benin (베냉)' },
  { code: 'VENEZUELA', label: 'Venezuela (베네수엘라)' },
  { code: 'VIETNAM', label: 'Vietnam (베트남)' },
  { code: 'BELGIUM', label: 'Belgium (벨기에)' },
  { code: 'BELARUS', label: 'Belarus (벨라루스)' },
  { code: 'BELIZE', label: 'Belize (벨리즈)' },
  { code: 'BOSNIA_AND_HERZEGOVINA', label: 'Bosnia and Herzegovina (보스니아 헤르체고비나)' },
  { code: 'BOTSWANA', label: 'Botswana (보츠와나)' },
  { code: 'BOLIVIA', label: 'Bolivia (볼리비아)' },
  { code: 'BURUNDI', label: 'Burundi (부룬디)' },
  { code: 'BURKINA_FASO', label: 'Burkina Faso (부르키나파소)' },
  { code: 'BHUTAN', label: 'Bhutan (부탄)' },
  { code: 'NORTH_MACEDONIA', label: 'North Macedonia (북마케도니아)' },
  { code: 'NORTHERN_CYPRUS', label: 'Northern Cyprus (북키프로스)' },
  { code: 'NORTH_KOREA', label: 'North Korea (북한)' },
  { code: 'BULGARIA', label: 'Bulgaria (불가리아)' },
  { code: 'BRAZIL', label: 'Brazil (브라질)' },
  { code: 'BRUNEI', label: 'Brunei (브루나이)' },
  { code: 'SAMOA', label: 'Samoa (사모아)' },
  { code: 'SAUDI_ARABIA', label: 'Saudi Arabia (사우디아라비아)' },
  { code: 'SAN_MARINO', label: 'San Marino (산마리노)' },
  { code: 'SAO_TOME_AND_PRINCIPE', label: 'São Tomé and Príncipe (상투메 프린시페)' },
  { code: 'WESTERN_SAHARA', label: 'Western Sahara (서사하라)' },
  { code: 'SENEGAL', label: 'Senegal (세네갈)' },
  { code: 'SERBIA', label: 'Serbia (세르비아)' },
  { code: 'SEYCHELLES', label: 'Seychelles (세이셸)' },
  { code: 'SAINT_LUCIA', label: 'Saint Lucia (세인트루시아)' },
  { code: 'SAINT_VINCENT_AND_THE_GRENADINES', label: 'Saint Vincent and the Grenadines (세인트빈센트 그레나딘)' },
  { code: 'SAINT_KITTS_AND_NEVIS', label: 'Saint Kitts and Nevis (세인트키츠 네비스)' },
  { code: 'SOMALIA', label: 'Somalia (소말리아)' },
  { code: 'SOMALILAND', label: 'Somaliland (소말릴란드)' },
  { code: 'SOLOMON_ISLANDS', label: 'Solomon Islands (솔로몬 제도)' },
  { code: 'SUDAN', label: 'Sudan (수단)' },
  { code: 'SURINAME', label: 'Suriname (수리남)' },
  { code: 'SRI_LANKA', label: 'Sri Lanka (스리랑카)' },
  { code: 'SWEDEN', label: 'Sweden (스웨덴)' },
  { code: 'SWITZERLAND', label: 'Switzerland (스위스)' },
  { code: 'SPAIN', label: 'Spain (스페인)' },
  { code: 'SLOVAKIA', label: 'Slovakia (슬로바키아)' },
  { code: 'SLOVENIA', label: 'Slovenia (슬로베니아)' },
  { code: 'SYRIA', label: 'Syria (시리아)' },
  { code: 'SIERRA_LEONE', label: 'Sierra Leone (시에라리온)' },
  { code: 'SINGAPORE', label: 'Singapore (싱가포르)' },
  { code: 'UNITED_ARAB_EMIRATES', label: 'United Arab Emirates (아랍에미리트)' },
  { code: 'ARMENIA', label: 'Armenia (아르메니아)' },
  { code: 'ARGENTINA', label: 'Argentina (아르헨티나)' },
  { code: 'ARTSAKH', label: 'Artsakh (아르차흐)' },
  { code: 'ICELAND', label: 'Iceland (아이슬란드)' },
  { code: 'HAITI', label: 'Haiti (아이티)' },
  { code: 'IRELAND', label: 'Ireland (아일랜드)' },
  { code: 'AZERBAIJAN', label: 'Azerbaijan (아제르바이잔)' },
  { code: 'AFGHANISTAN', label: 'Afghanistan (아프가니스탄)' },
  { code: 'ANDORRA', label: 'Andorra (안도라)' },
  { code: 'ALBANIA', label: 'Albania (알바니아)' },
  { code: 'ALGERIA', label: 'Algeria (알제리)' },
  { code: 'ABKHAZIA', label: 'Abkhazia (압하지야)' },
  { code: 'ANGOLA', label: 'Angola (앙골라)' },
  { code: 'ANTIGUA_AND_BARBUDA', label: 'Antigua and Barbuda (앤티가 바부다)' },
  { code: 'ERITREA', label: 'Eritrea (에리트레아)' },
  { code: 'ESWATINI', label: 'Eswatini (에스와티니)' },
  { code: 'ESTONIA', label: 'Estonia (에스토니아)' },
  { code: 'ECUADOR', label: 'Ecuador (에콰도르)' },
  { code: 'ETHIOPIA', label: 'Ethiopia (에티오피아)' },
  { code: 'EL_SALVADOR', label: 'El Salvador (엘살바도르)' },
  { code: 'UNITED_KINGDOM', label: 'United Kingdom (영국)' },
  { code: 'YEMEN', label: 'Yemen (예멘)' },
  { code: 'OMAN', label: 'Oman (오만)' },
  { code: 'AUSTRIA', label: 'Austria (오스트리아)' },
  { code: 'HONDURAS', label: 'Honduras (온두라스)' },
  { code: 'JORDAN', label: 'Jordan (요르단)' },
  { code: 'UGANDA', label: 'Uganda (우간다)' },
  { code: 'URUGUAY', label: 'Uruguay (우루과이)' },
  { code: 'UZBEKISTAN', label: 'Uzbekistan (우즈베키스탄)' },
  { code: 'UKRAINE', label: 'Ukraine (우크라이나)' },
  { code: 'IRAQ', label: 'Iraq (이라크)' },
  { code: 'IRAN', label: 'Iran (이란)' },
  { code: 'ISRAEL', label: 'Israel (이스라엘)' },
  { code: 'EGYPT', label: 'Egypt (이집트)' },
  { code: 'ITALY', label: 'Italy (이탈리아)' },
  { code: 'INDIA', label: 'India (인도)' },
  { code: 'INDONESIA', label: 'Indonesia (인도네시아)' },
  { code: 'JAPAN', label: 'Japan (일본)' },
  { code: 'JAMAICA', label: 'Jamaica (자메이카)' },
  { code: 'ZAMBIA', label: 'Zambia (잠비아)' },
  { code: 'EQUATORIAL_GUINEA', label: 'Equatorial Guinea (적도 기니)' },
  { code: 'GEORGIA', label: 'Georgia (조지아)' },
  { code: 'CHINA', label: 'China (중국)' },
  { code: 'CENTRAL_AFRICAN_REPUBLIC', label: 'Central African Republic (중앙아프리카 공화국)' },
  { code: 'DJIBOUTI', label: 'Djibouti (지부티)' },
  { code: 'ZIMBABWE', label: 'Zimbabwe (짐바브웨)' },
  { code: 'CHAD', label: 'Chad (차드)' },
  { code: 'CZECH_REPUBLIC', label: 'Czech Republic (체코)' },
  { code: 'CHILE', label: 'Chile (칠레)' },
  { code: 'CAMEROON', label: 'Cameroon (카메룬)' },
  { code: 'CABO_VERDE', label: 'Cabo Verde (카보베르데)' },
  { code: 'KAZAKHSTAN', label: 'Kazakhstan (카자흐스탄)' },
  { code: 'QATAR', label: 'Qatar (카타르)' },
  { code: 'CAMBODIA', label: 'Cambodia (캄보디아)' },
  { code: 'CANADA', label: 'Canada (캐나다)' },
  { code: 'KENYA', label: 'Kenya (케냐)' },
  { code: 'COMOROS', label: 'Comoros (코모로)' },
  { code: 'KOSOVO', label: 'Kosovo (코소보)' },
  { code: 'COSTA_RICA', label: 'Costa Rica (코스타리카)' },
  { code: 'COTE_DIVOIRE', label: 'Côte d’Ivoire (코트디부아르)' },
  { code: 'COLOMBIA', label: 'Colombia (콜롬비아)' },
  { code: 'REPUBLIC_OF_THE_CONGO', label: 'Republic of the Congo (콩고 공화국)' },
  { code: 'DEMOCRATIC_REPUBLIC_OF_THE_CONGO', label: 'Democratic Republic of the Congo (콩고 민주 공화국)' },
  { code: 'CUBA', label: 'Cuba (쿠바)' },
  { code: 'KUWAIT', label: 'Kuwait (쿠웨이트)' },
  { code: 'CROATIA', label: 'Croatia (크로아티아)' },
  { code: 'KYRGYZSTAN', label: 'Kyrgyzstan (키르기스스탄)' },
  { code: 'KIRIBATI', label: 'Kiribati (키리바시)' },
  { code: 'CYPRUS', label: 'Cyprus (키프로스)' },
  { code: 'TAJIKISTAN', label: 'Tajikistan (타지키스탄)' },
  { code: 'TANZANIA', label: 'Tanzania (탄자니아)' },
  { code: 'THAILAND', label: 'Thailand (태국)' },
  { code: 'TOGO', label: 'Togo (토고)' },
  { code: 'TONGA', label: 'Tonga (통가)' },
  { code: 'TURKMENISTAN', label: 'Turkmenistan (투르크메니스탄)' },
  { code: 'TUVALU', label: 'Tuvalu (투발루)' },
  { code: 'TUNISIA', label: 'Tunisia (튀니지)' },
  { code: 'TURKIYE', label: 'Türkiye (튀르키예)' },
  { code: 'TRANSNISTRIA', label: 'Transnistria (트란스니스트리아)' },
  { code: 'TRINIDAD_AND_TOBAGO', label: 'Trinidad and Tobago (트리니다드 토바고)' },
  { code: 'PANAMA', label: 'Panama (파나마)' },
  { code: 'PARAGUAY', label: 'Paraguay (파라과이)' },
  { code: 'PAKISTAN', label: 'Pakistan (파키스탄)' },
  { code: 'PAPUA_NEW_GUINEA', label: 'Papua New Guinea (파푸아 뉴기니아)' },
  { code: 'PALAU', label: 'Palau (팔라우)' },
  { code: 'PALESTINE', label: 'Palestine (팔레스타인)' },
  { code: 'PERU', label: 'Peru (페루)' },
  { code: 'PORTUGAL', label: 'Portugal (포르투갈)' },
  { code: 'POLAND', label: 'Poland (폴란드)' },
  { code: 'FRANCE', label: 'France (프랑스)' },
  { code: 'FIJI', label: 'Fiji (피지)' },
  { code: 'FINLAND', label: 'Finland (핀란드)' },
  { code: 'PHILIPPINES', label: 'Philippines (필리핀)' },
  { code: 'HUNGARY', label: 'Hungary (헝가리)' },
  { code: 'AUSTRALIA', label: 'Australia (호주)' },
  { code: 'HONG_KONG', label: 'Hong Kong (홍콩)' },
  { code: 'MACAU', label: 'Macau (마카오)' },
]
export const VISA_LIST: { code: VisaType; i18nKey: string }[] = [
  { code: 'A1', i18nKey: 'filter.visaFilter.content.A1' },
  { code: 'A2', i18nKey: 'filter.visaFilter.content.A2' },
  { code: 'A3', i18nKey: 'filter.visaFilter.content.A3' },
  { code: 'B1', i18nKey: 'filter.visaFilter.content.B1' },
  { code: 'B2', i18nKey: 'filter.visaFilter.content.B2' },
  { code: 'C1', i18nKey: 'filter.visaFilter.content.C1' },
  { code: 'C3', i18nKey: 'filter.visaFilter.content.C3' },
  { code: 'C4', i18nKey: 'filter.visaFilter.content.C4' },
  { code: 'D2', i18nKey: 'filter.visaFilter.content.D2' },
  { code: 'D3', i18nKey: 'filter.visaFilter.content.D3' },
  { code: 'D4', i18nKey: 'filter.visaFilter.content.D4' },
  { code: 'D5', i18nKey: 'filter.visaFilter.content.D5' },
  { code: 'D6', i18nKey: 'filter.visaFilter.content.D6' },
  { code: 'D7', i18nKey: 'filter.visaFilter.content.D7' },
  { code: 'D8', i18nKey: 'filter.visaFilter.content.D8' },
  { code: 'D9', i18nKey: 'filter.visaFilter.content.D9' },
  { code: 'D10', i18nKey: 'filter.visaFilter.content.D10' },
  { code: 'E1', i18nKey: 'filter.visaFilter.content.E1' },
  { code: 'E2', i18nKey: 'filter.visaFilter.content.E2' },
  { code: 'E3', i18nKey: 'filter.visaFilter.content.E3' },
  { code: 'E4', i18nKey: 'filter.visaFilter.content.E4' },
  { code: 'E5', i18nKey: 'filter.visaFilter.content.E5' },
  { code: 'E6', i18nKey: 'filter.visaFilter.content.E6' },
  { code: 'E7', i18nKey: 'filter.visaFilter.content.E7' },
  { code: 'E8', i18nKey: 'filter.visaFilter.content.E8' },
  { code: 'E9', i18nKey: 'filter.visaFilter.content.E9' },
  { code: 'E10', i18nKey: 'filter.visaFilter.content.E10' },
  { code: 'F1', i18nKey: 'filter.visaFilter.content.F1' },
  { code: 'F2', i18nKey: 'filter.visaFilter.content.F2' },
  { code: 'F3', i18nKey: 'filter.visaFilter.content.F3' },
  { code: 'F4', i18nKey: 'filter.visaFilter.content.F4' },
  { code: 'F5', i18nKey: 'filter.visaFilter.content.F5' },
  { code: 'F6', i18nKey: 'filter.visaFilter.content.F6' },
  { code: 'G1', i18nKey: 'filter.visaFilter.content.G1' },
  { code: 'H1', i18nKey: 'filter.visaFilter.content.H1' },
  { code: 'H2', i18nKey: 'filter.visaFilter.content.H2' },
  { code: 'F27', i18nKey: 'filter.visaFilter.content.F27' },
] as const

export const WORK_REGIONS = [
  { code: 'SEOUL', label: 'filter.regionFilter.content.SEOUL', short: '서울' },
  { code: 'GYEONGGI', label: 'filter.regionFilter.content.GYEONGGI', short: '경기' },
  { code: 'INCHEON', label: 'filter.regionFilter.content.INCHEON', short: '인천' },
  { code: 'BUSAN', label: 'filter.regionFilter.content.BUSAN', short: '부산' },
  { code: 'DAEJEON', label: 'filter.regionFilter.content.DAEJEON', short: '대전' },
  { code: 'DAEGU', label: 'filter.regionFilter.content.DAEGU', short: '대꾸' },
  { code: 'ULSAN', label: 'filter.regionFilter.content.ULSAN', short: '울산' },
  { code: 'GWANGJU', label: 'filter.regionFilter.content.GWANGJU', short: '광주' },
  { code: 'GANGWON', label: 'filter.regionFilter.content.GANGWON', short: '강원특별자치도' },
  { code: 'SEJONG', label: 'filter.regionFilter.content.SEJONG', short: '세종특별자치도' },
  { code: 'CHUNGBUK', label: 'filter.regionFilter.content.CHUNGBUK', short: '충북' },
  { code: 'CHUNGNAM', label: 'filter.regionFilter.content.CHUNGNAM', short: '충남' },
  { code: 'GYEONGBUK', label: 'filter.regionFilter.content.GYEONGBUK', short: '경북' },
  { code: 'GYEONGNAM', label: 'filter.regionFilter.content.GYEONGNAM', short: '경남' },
  { code: 'JEJU', label: 'filter.regionFilter.content.JEJU', short: '제주특별자치도' },
  { code: 'JEONBUK', label: 'filter.regionFilter.content.JEONBUK', short: '전북특별자치도' },
  { code: 'JEONNAM', label: 'filter.regionFilter.content.JEONNAM', short: '전남' },
] as const

export const LANGUAGE_LIST = [
  { code: 'ENGLISH', label: 'filter.requiredLanguageFilter.content.ENGLISH' },
  { code: 'CHINESE', label: 'filter.requiredLanguageFilter.content.CHINESE' },
  { code: 'HINDI', label: 'filter.requiredLanguageFilter.content.HINDI' },
  { code: 'SPANISH', label: 'filter.requiredLanguageFilter.content.SPANISH' },
  { code: 'FRENCH', label: 'filter.requiredLanguageFilter.content.FRENCH' },
  { code: 'ARABIC', label: 'filter.requiredLanguageFilter.content.ARABIC' },
  { code: 'BENGALI', label: 'filter.requiredLanguageFilter.content.BENGALI' },
  { code: 'PORTUGUESE', label: 'filter.requiredLanguageFilter.content.PORTUGUESE' },
  { code: 'RUSSIAN', label: 'filter.requiredLanguageFilter.content.RUSSIAN' },
  { code: 'URDU', label: 'filter.requiredLanguageFilter.content.URDU' },
  { code: 'INDONESIAN', label: 'filter.requiredLanguageFilter.content.INDONESIAN' },
  { code: 'GERMAN', label: 'filter.requiredLanguageFilter.content.GERMAN' },
  { code: 'JAPANESE', label: 'filter.requiredLanguageFilter.content.JAPANESE' },
  { code: 'SWAHILI', label: 'filter.requiredLanguageFilter.content.SWAHILI' },
  { code: 'MARATHI', label: 'filter.requiredLanguageFilter.content.MARATHI' },
  { code: 'TELUGU', label: 'filter.requiredLanguageFilter.content.TELUGU' },
  { code: 'TURKISH', label: 'filter.requiredLanguageFilter.content.TURKISH' },
  { code: 'TAMIL', label: 'filter.requiredLanguageFilter.content.TAMIL' },
  { code: 'VIETNAMESE', label: 'filter.requiredLanguageFilter.content.VIETNAMESE' },
  { code: 'KOREAN', label: 'filter.requiredLanguageFilter.content.KOREAN' },
  { code: 'ITALIAN', label: 'filter.requiredLanguageFilter.content.ITALIAN' },
  { code: 'PERSIAN', label: 'filter.requiredLanguageFilter.content.PERSIAN' },
  { code: 'POLISH', label: 'filter.requiredLanguageFilter.content.POLISH' },
  { code: 'UKRAINIAN', label: 'filter.requiredLanguageFilter.content.UKRAINIAN' },
] as const

export const JOB_CATEGORY_LIST: { code: JobCategoryType; label: string }[] = [
  { code: 'IT_DEVELOPMENT', label: 'filter.jobRoleFilter.category.JOB_1.title' },
  { code: 'BUSINESS_MANAGEMENT', label: 'filter.jobRoleFilter.category.JOB_2.title' },
  { code: 'MARKETING_ADVERTISING', label: 'filter.jobRoleFilter.category.JOB_3.title' },
  { code: 'DESIGN', label: 'filter.jobRoleFilter.category.JOB_4.title' },
  { code: 'SALES', label: 'filter.jobRoleFilter.category.JOB_5.title' },
  { code: 'CUSTOMER_SERVICE_RETAIL', label: 'filter.jobRoleFilter.category.JOB_6.title' },
  { code: 'TRANSLATION_INTERPRETATION', label: 'filter.jobRoleFilter.category.JOB_7.title' },
  { code: 'MEDIA', label: 'filter.jobRoleFilter.category.JOB_8.title' },
  { code: 'ENGINEERING_DESIGN', label: 'filter.jobRoleFilter.category.JOB_9.title' },
  { code: 'HR', label: 'filter.jobRoleFilter.category.JOB_10.title' },
  { code: 'GAME_PRODUCTION', label: 'filter.jobRoleFilter.category.JOB_11.title' },
  { code: 'FINANCE', label: 'filter.jobRoleFilter.category.JOB_12.title' },
  { code: 'MANUFACTURING_PRODUCTION', label: 'filter.jobRoleFilter.category.JOB_13.title' },
  { code: 'EDUCATION', label: 'filter.jobRoleFilter.category.JOB_14.title' },
  { code: 'HEALTHCARE_PHARMA_BIO', label: 'filter.jobRoleFilter.category.JOB_15.title' },
  { code: 'LOGISTICS_TRADE', label: 'filter.jobRoleFilter.category.JOB_16.title' },
  { code: 'FOOD_BEVERAGE', label: 'filter.jobRoleFilter.category.JOB_17.title' },
  { code: 'CONSTRUCTION_FACILITIES', label: 'filter.jobRoleFilter.category.JOB_18.title' },
  { code: 'ENTERTAINMENT', label: 'filter.jobRoleFilter.category.JOB_19.title' },
]

export const IT_DEVELOPMENT_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'SOFTWARE_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_1.SOFTWARE_ENGINEER' },
  { code: 'WEB_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_1.WEB_DEVELOPER' },
  { code: 'BACKEND_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_1.BACKEND_DEVELOPER' },
  { code: 'FRONTEND_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_1.FRONTEND_DEVELOPER' },
  { code: 'JAVA_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_1.JAVA_DEVELOPER' },
  { code: 'C_CPP_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_1.C_CPP_DEVELOPER' },
  { code: 'PYTHON_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_1.PYTHON_DEVELOPER' },
  { code: 'MACHINE_LEARNING_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_1.MACHINE_LEARNING_ENGINEER' },
  { code: 'DEVOPS_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_1.DEVOPS_ENGINEER' },
  { code: 'DATA_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_1.DATA_ENGINEER' },
  { code: 'NODEJS_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_1.NODEJS_DEVELOPER' },
  { code: 'SYSTEM_NETWORK_ADMIN', label: 'filter.jobRoleFilter.category.JOB_1.SYSTEM_NETWORK_ADMIN' },
  { code: 'ANDROID_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_1.ANDROID_DEVELOPER' },
  { code: 'IOS_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_1.IOS_DEVELOPER' },
  { code: 'EMBEDDED_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_1.EMBEDDED_DEVELOPER' },
  { code: 'TECH_SUPPORT', label: 'filter.jobRoleFilter.category.JOB_1.TECH_SUPPORT' },
  { code: 'QA_TEST_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_1.QA_TEST_ENGINEER' },
  { code: 'DATA_SCIENTIST', label: 'filter.jobRoleFilter.category.JOB_1.DATA_SCIENTIST' },
  { code: 'SECURITY_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_1.SECURITY_ENGINEER' },
  { code: 'BIGDATA_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_1.BIGDATA_ENGINEER' },
  { code: 'HARDWARE_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_1.HARDWARE_ENGINEER' },
  { code: 'BLOCKCHAIN_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_1.BLOCKCHAIN_ENGINEER' },
  { code: 'CROSS_PLATFORM_APP_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_1.CROSS_PLATFORM_APP_DEVELOPER' },
  { code: 'DBA', label: 'filter.jobRoleFilter.category.JOB_1.DBA' },
  { code: 'PHP_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_1.PHP_DEVELOPER' },
  { code: 'DOTNET_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_1.DOTNET_DEVELOPER' },
  { code: 'GRAPHICS_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_1.GRAPHICS_ENGINEER' },
  { code: 'AR_VR_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_1.AR_VR_ENGINEER' },
  { code: 'RUBY_ON_RAILS_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_1.RUBY_ON_RAILS_DEVELOPER' },
]

export const BUSINESS_MANAGEMENT_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'PM_PO', label: 'filter.jobRoleFilter.category.JOB_2.PM_PO' },
  { code: 'PROJECT_MANAGER', label: 'filter.jobRoleFilter.category.JOB_2.PROJECT_MANAGER' },
  { code: 'STRATEGY_PLANNER', label: 'filter.jobRoleFilter.category.JOB_2.STRATEGY_PLANNER' },
  { code: 'OPERATIONS_MANAGER', label: 'filter.jobRoleFilter.category.JOB_2.OPERATIONS_MANAGER' },
  { code: 'DATA_ANALYST', label: 'filter.jobRoleFilter.category.JOB_2.DATA_ANALYST' },
  { code: 'BRAND_MANAGER', label: 'filter.jobRoleFilter.category.JOB_2.BRAND_MANAGER' },
  { code: 'GLOBAL_BUSINESS_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_2.GLOBAL_BUSINESS_DEVELOPER' },
  { code: 'CONSULTANT', label: 'filter.jobRoleFilter.category.JOB_2.CONSULTANT' },
  { code: 'PURCHASING_MANAGER', label: 'filter.jobRoleFilter.category.JOB_2.PURCHASING_MANAGER' },
  { code: 'BUSINESS_INNOVATOR', label: 'filter.jobRoleFilter.category.JOB_2.BUSINESS_INNOVATOR' },
  { code: 'AGILE_COACH', label: 'filter.jobRoleFilter.category.JOB_2.AGILE_COACH' },
]

export const MARKETING_ADVERTISING_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'MARKETING_MANAGER', label: 'filter.jobRoleFilter.category.JOB_3.MARKETING_MANAGER' },
  { code: 'DIGITAL_MARKETER', label: 'filter.jobRoleFilter.category.JOB_3.DIGITAL_MARKETER' },
  { code: 'CONTENT_MARKETER', label: 'filter.jobRoleFilter.category.JOB_3.CONTENT_MARKETER' },
  { code: 'PERFORMANCE_MARKETER', label: 'filter.jobRoleFilter.category.JOB_3.PERFORMANCE_MARKETER' },
  { code: 'BRAND_MARKETER', label: 'filter.jobRoleFilter.category.JOB_3.BRAND_MARKETER' },
  { code: 'GLOBAL_MARKETING_MANAGER', label: 'filter.jobRoleFilter.category.JOB_3.GLOBAL_MARKETING_MANAGER' },
  { code: 'SNS_MARKETER', label: 'filter.jobRoleFilter.category.JOB_3.SNS_MARKETER' },
  { code: 'PR_SPECIALIST', label: 'filter.jobRoleFilter.category.JOB_3.PR_SPECIALIST' },
  { code: 'GROWTH_HACKER', label: 'filter.jobRoleFilter.category.JOB_3.GROWTH_HACKER' },
  { code: 'MARKETING_DIRECTOR', label: 'filter.jobRoleFilter.category.JOB_3.MARKETING_DIRECTOR' },
  { code: 'MARKET_RESEARCHER', label: 'filter.jobRoleFilter.category.JOB_3.MARKET_RESEARCHER' },
]

export const DESIGN_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'UI_UX_DESIGNER', label: 'filter.jobRoleFilter.category.JOB_4.UI_UX_DESIGNER' },
  { code: 'WEB_DESIGNER', label: 'filter.jobRoleFilter.category.JOB_4.WEB_DESIGNER' },
  { code: 'GRAPHIC_DESIGNER', label: 'filter.jobRoleFilter.category.JOB_4.GRAPHIC_DESIGNER' },
  { code: 'SPACE_DESIGNER', label: 'filter.jobRoleFilter.category.JOB_4.SPACE_DESIGNER' },
  { code: 'MOTION_DESIGNER', label: 'filter.jobRoleFilter.category.JOB_4.MOTION_DESIGNER' },
  { code: 'FASHION_DESIGNER', label: 'filter.jobRoleFilter.category.JOB_4.FASHION_DESIGNER' },
  { code: 'ART_DIRECTOR', label: 'filter.jobRoleFilter.category.JOB_4.ART_DIRECTOR' },
  { code: 'INDUSTRIAL_DESIGNER', label: 'filter.jobRoleFilter.category.JOB_4.INDUSTRIAL_DESIGNER' },
  { code: 'FURNITURE_DESIGNER', label: 'filter.jobRoleFilter.category.JOB_4.FURNITURE_DESIGNER' },
  { code: 'LANDSCAPE_DESIGNER', label: 'filter.jobRoleFilter.category.JOB_4.LANDSCAPE_DESIGNER' },
]

export const SALE_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'INTERNATIONAL_SALES', label: 'filter.jobRoleFilter.category.JOB_5.INTERNATIONAL_SALES' },
  { code: 'TECHNICAL_SALES', label: 'filter.jobRoleFilter.category.JOB_5.TECHNICAL_SALES' },
  { code: 'SOLUTION_CONSULTANT', label: 'filter.jobRoleFilter.category.JOB_5.SOLUTION_CONSULTANT' },
  { code: 'MEDIA_SALES', label: 'filter.jobRoleFilter.category.JOB_5.MEDIA_SALES' },
  { code: 'CUSTOMER_SUCCESS_MANAGER', label: 'filter.jobRoleFilter.category.JOB_5.CUSTOMER_SUCCESS_MANAGER' },
  { code: 'SALES_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_5.SALES_ENGINEER' },
]
export const CUSTOMER_SERVICE_RETAIL_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'GLOBAL_CS_MANAGER', label: 'filter.jobRoleFilter.category.JOB_6.GLOBAL_CS_MANAGER' },
  { code: 'RETAIL_MD', label: 'filter.jobRoleFilter.category.JOB_6.RETAIL_MD' },
  { code: 'CUSTOMER_SUPPORT', label: 'filter.jobRoleFilter.category.JOB_6.CUSTOMER_SUPPORT' },
  { code: 'FASHION_MD', label: 'filter.jobRoleFilter.category.JOB_6.FASHION_MD' },
  { code: 'CRM_SPECIALIST', label: 'filter.jobRoleFilter.category.JOB_6.CRM_SPECIALIST' },
  { code: 'RECEPTIONIST', label: 'filter.jobRoleFilter.category.JOB_6.RECEPTIONIST' },
  { code: 'TRAVEL_AGENT', label: 'filter.jobRoleFilter.category.JOB_6.TRAVEL_AGENT' },
  { code: 'FLIGHT_ATTENDANT', label: 'filter.jobRoleFilter.category.JOB_6.FLIGHT_ATTENDANT' },
  { code: 'STORE_CLERK', label: 'filter.jobRoleFilter.category.JOB_6.STORE_CLERK' },
  { code: 'TOURISM_WORKER', label: 'filter.jobRoleFilter.category.JOB_6.TOURISM_WORKER' },
]

export const TRANSLATION_INTERPRETATION_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'INTERPRETER', label: 'filter.jobRoleFilter.category.JOB_7.INTERPRETER' },
  { code: 'TRANSLATOR', label: 'filter.jobRoleFilter.category.JOB_7.TRANSLATOR' },
  { code: 'LOCALIZATION_SPECIALIST', label: 'filter.jobRoleFilter.category.JOB_7.LOCALIZATION_SPECIALIST' },
]
export const MEDIA_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'CONTENT_CREATOR', label: 'filter.jobRoleFilter.category.JOB_8.CONTENT_CREATOR' },
  { code: 'VIDEO_EDITOR', label: 'filter.jobRoleFilter.category.JOB_8.VIDEO_EDITOR' },
  { code: 'VIDEO_PRODUCER', label: 'filter.jobRoleFilter.category.JOB_8.VIDEO_PRODUCER' },
  { code: 'WRITER', label: 'filter.jobRoleFilter.category.JOB_8.WRITER' },
  { code: 'PHOTOGRAPHER', label: 'filter.jobRoleFilter.category.JOB_8.PHOTOGRAPHER' },
  { code: 'JOURNALIST', label: 'filter.jobRoleFilter.category.JOB_8.JOURNALIST' },
  { code: 'CURATOR', label: 'filter.jobRoleFilter.category.JOB_8.CURATOR' },
]
export const ENGINEERING_DESIGN_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'ELECTRICAL_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.ELECTRICAL_ENGINEER' },
  { code: 'ROBOTICS_AUTOMATION_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.ROBOTICS_AUTOMATION_ENGINEER' },
  { code: 'MECHANICAL_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.MECHANICAL_ENGINEER' },
  { code: 'CAD_3D_DESIGNER', label: 'filter.jobRoleFilter.category.JOB_9.CAD_3D_DESIGNER' },
  { code: 'ELECTRIC_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.ELECTRIC_ENGINEER' },
  { code: 'CONTROL_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.CONTROL_ENGINEER' },
  { code: 'PRODUCT_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.PRODUCT_ENGINEER' },
  { code: 'ELECTROMECHANICAL_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.ELECTROMECHANICAL_ENGINEER' },
  { code: 'EQUIPMENT_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.EQUIPMENT_ENGINEER' },
  { code: 'QA_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.QA_ENGINEER' },
  { code: 'INDUSTRIAL_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.INDUSTRIAL_ENGINEER' },
  { code: 'RF_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.RF_ENGINEER' },
  { code: 'CHEMICAL_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.CHEMICAL_ENGINEER' },
  { code: 'AEROSPACE_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.AEROSPACE_ENGINEER' },
  { code: 'IC_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.IC_ENGINEER' },
  { code: 'MATERIAL_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.MATERIAL_ENGINEER' },
  { code: 'PLANT_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.PLANT_ENGINEER' },
  { code: 'PLASTIC_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.PLASTIC_ENGINEER' },
  { code: 'QC_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.QC_ENGINEER' },
  { code: 'STRUCTURAL_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.STRUCTURAL_ENGINEER' },
  { code: 'CONSTRUCTION_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.CONSTRUCTION_ENGINEER' },
  { code: 'CIVIL_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.CIVIL_ENGINEER' },
  { code: 'ENVIRONMENTAL_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.ENVIRONMENTAL_ENGINEER' },
  { code: 'PRODUCTION_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_9.PRODUCTION_ENGINEER' },
  { code: 'RND_RESEARCHER', label: 'filter.jobRoleFilter.category.JOB_9.RND_RESEARCHER' },
]

export const HR_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'GLOBAL_HR_MANAGER', label: 'filter.jobRoleFilter.category.JOB_10.GLOBAL_HR_MANAGER' },
  { code: 'RECRUITER', label: 'filter.jobRoleFilter.category.JOB_10.RECRUITER' },
  { code: 'HR_CONSULTANT', label: 'filter.jobRoleFilter.category.JOB_10.HR_CONSULTANT' },
  { code: 'TECH_TRAINER', label: 'filter.jobRoleFilter.category.JOB_10.TECH_TRAINER' },
  { code: 'INHOUSE_TRAINER', label: 'filter.jobRoleFilter.category.JOB_10.INHOUSE_TRAINER' },
]

export const GAME_PRODUCTION_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'GAME_PLANNER', label: 'filter.jobRoleFilter.category.JOB_11.GAME_PLANNER' },
  { code: 'GAME_ARTIST', label: 'filter.jobRoleFilter.category.JOB_11.GAME_ARTIST' },
  { code: 'GAME_CLIENT_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_11.GAME_CLIENT_DEVELOPER' },
  { code: 'UNITY_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_11.UNITY_DEVELOPER' },
  { code: 'GAME_GRAPHIC_DESIGNER', label: 'filter.jobRoleFilter.category.JOB_11.GAME_GRAPHIC_DESIGNER' },
  { code: 'GAME_SERVER_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_11.GAME_SERVER_DEVELOPER' },
  { code: 'MOBILE_GAME_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_11.MOBILE_GAME_DEVELOPER' },
  { code: 'UNREAL_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_11.UNREAL_DEVELOPER' },
]

export const FINANCE_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'INVESTMENT_BANKER', label: 'filter.jobRoleFilter.category.JOB_12.INVESTMENT_BANKER' },
  { code: 'ASSET_MANAGER', label: 'filter.jobRoleFilter.category.JOB_12.ASSET_MANAGER' },
  { code: 'FINANCIAL_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_12.FINANCIAL_ENGINEER' },
]

export const MANUFACTURING_PRODUCTION_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'MACHINE_TECHNICIAN', label: 'filter.jobRoleFilter.category.JOB_13.MACHINE_TECHNICIAN' },
  { code: 'MANUFACTURING_TEST_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_13.MANUFACTURING_TEST_ENGINEER' },
  { code: 'MANUFACTURING_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_13.MANUFACTURING_ENGINEER' },
  { code: 'MANUFACTURING_CHEMIST', label: 'filter.jobRoleFilter.category.JOB_13.MANUFACTURING_CHEMIST' },
  {
    code: 'SEMICONDUCTOR_DISPLAY_ENGINEER',
    label: 'filter.jobRoleFilter.category.JOB_13.SEMICONDUCTOR_DISPLAY_ENGINEER',
  },
  { code: 'PRODUCTION_WORKER', label: 'filter.jobRoleFilter.category.JOB_13.PRODUCTION_WORKER' },
]

export const EDUCATION_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'INSTRUCTOR', label: 'filter.jobRoleFilter.category.JOB_14.INSTRUCTOR' },
  { code: 'LANGUAGE_EDUCATOR', label: 'filter.jobRoleFilter.category.JOB_14.LANGUAGE_EDUCATOR' },
]

export const HEALTHCARE_PHARMA_BIO_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'BIOTECH_RESEARCHER', label: 'filter.jobRoleFilter.category.JOB_15.BIOTECH_RESEARCHER' },
  { code: 'CLINICAL_RESEARCHER', label: 'filter.jobRoleFilter.category.JOB_15.CLINICAL_RESEARCHER' },
  { code: 'MICROBIOLOGIST', label: 'filter.jobRoleFilter.category.JOB_15.MICROBIOLOGIST' },
  { code: 'HOSPITAL_COORDINATOR', label: 'filter.jobRoleFilter.category.JOB_15.HOSPITAL_COORDINATOR' },
  { code: 'PHARMACEUTICAL_CHEMIST', label: 'filter.jobRoleFilter.category.JOB_15.PHARMACEUTICAL_CHEMIST' },
  { code: 'GENETIC_ENGINEER', label: 'filter.jobRoleFilter.category.JOB_15.GENETIC_ENGINEER' },
  { code: 'CAREGIVER', label: 'filter.jobRoleFilter.category.JOB_15.CAREGIVER' },
]

export const LOGISTICS_TRADE_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'LOGISTICS_MANAGER', label: 'filter.jobRoleFilter.category.JOB_16.LOGISTICS_MANAGER' },
  { code: 'LOGISTICS_ANALYST', label: 'filter.jobRoleFilter.category.JOB_16.LOGISTICS_ANALYST' },
  { code: 'EXPORT_IMPORT_OFFICER', label: 'filter.jobRoleFilter.category.JOB_16.EXPORT_IMPORT_OFFICER' },
  { code: 'TRADE_OFFICER', label: 'filter.jobRoleFilter.category.JOB_16.TRADE_OFFICER' },
  { code: 'BUYER_MANAGER', label: 'filter.jobRoleFilter.category.JOB_16.BUYER_MANAGER' },
  { code: 'AIR_TRANSPORT_AGENT', label: 'filter.jobRoleFilter.category.JOB_16.AIR_TRANSPORT_AGENT' },
  { code: 'MARINE_TRANSPORT_AGENT', label: 'filter.jobRoleFilter.category.JOB_16.MARINE_TRANSPORT_AGENT' },
  { code: 'LOGISTICS_FIELD_WORKER', label: 'filter.jobRoleFilter.category.JOB_16.LOGISTICS_FIELD_WORKER' },
]

export const FOOD_SERVICE_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'FOOD_SERVICE_WORKER', label: 'filter.jobRoleFilter.category.JOB_17.FOOD_SERVICE_WORKER' },
  { code: 'CHEF', label: 'filter.jobRoleFilter.category.JOB_17.CHEF' },
  { code: 'MENU_DEVELOPER', label: 'filter.jobRoleFilter.category.JOB_17.MENU_DEVELOPER' },
  { code: 'BARTENDER', label: 'filter.jobRoleFilter.category.JOB_17.BARTENDER' },
  { code: 'SOMMELIER', label: 'filter.jobRoleFilter.category.JOB_17.SOMMELIER' },
  { code: 'FOOD_STYLIST', label: 'filter.jobRoleFilter.category.JOB_17.FOOD_STYLIST' },
]

export const CONSTRUCTION_FACILITIES_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'ARCHITECT', label: 'filter.jobRoleFilter.category.JOB_18.ARCHITECT' },
  { code: 'CONSTRUCTION_SUPERVISOR', label: 'filter.jobRoleFilter.category.JOB_18.CONSTRUCTION_SUPERVISOR' },
  { code: 'MAINTENANCE_MANAGER', label: 'filter.jobRoleFilter.category.JOB_18.MAINTENANCE_MANAGER' },
  { code: 'CONSTRUCTION_WORKER', label: 'filter.jobRoleFilter.category.JOB_18.CONSTRUCTION_WORKER' },
  { code: 'WELDER', label: 'filter.jobRoleFilter.category.JOB_18.WELDER' },
  { code: 'CARPENTER', label: 'filter.jobRoleFilter.category.JOB_18.CARPENTER' },
  { code: 'HEAVY_EQUIPMENT_TECHNICIAN', label: 'filter.jobRoleFilter.category.JOB_18.HEAVY_EQUIPMENT_TECHNICIAN' },
]

export const ENTERTAINMENT_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'MODEL', label: 'filter.jobRoleFilter.category.JOB_19.MODEL' },
  { code: 'ACTOR', label: 'filter.jobRoleFilter.category.JOB_19.ACTOR' },
  { code: 'SHOW_HOST', label: 'filter.jobRoleFilter.category.JOB_19.SHOW_HOST' },
]

type SubCategoryMap = {
  [K in JobCategoryType]?: typeof IT_DEVELOPMENT_LIST
}

export const SUB_CATEGORY_MAP: SubCategoryMap = {
  IT_DEVELOPMENT: IT_DEVELOPMENT_LIST,
  BUSINESS_MANAGEMENT: BUSINESS_MANAGEMENT_LIST,
  MARKETING_ADVERTISING: MARKETING_ADVERTISING_LIST,
  DESIGN: DESIGN_LIST,
  SALES: SALE_LIST,
  CUSTOMER_SERVICE_RETAIL: CUSTOMER_SERVICE_RETAIL_LIST,
  TRANSLATION_INTERPRETATION: TRANSLATION_INTERPRETATION_LIST,
  MEDIA: MEDIA_LIST,
  ENGINEERING_DESIGN: ENGINEERING_DESIGN_LIST,
  HR: HR_LIST,
  GAME_PRODUCTION: GAME_PRODUCTION_LIST,
  FINANCE: FINANCE_LIST,
  MANUFACTURING_PRODUCTION: MANUFACTURING_PRODUCTION_LIST,
  EDUCATION: EDUCATION_LIST,
  HEALTHCARE_PHARMA_BIO: HEALTHCARE_PHARMA_BIO_LIST,
  LOGISTICS_TRADE: LOGISTICS_TRADE_LIST,
  FOOD_BEVERAGE: FOOD_SERVICE_LIST,
  CONSTRUCTION_FACILITIES: CONSTRUCTION_FACILITIES_LIST,
  ENTERTAINMENT: ENTERTAINMENT_LIST,
}

export const getJobRoleList = (category: JobCategoryType | undefined) => {
  if (!category) return []
  return SUB_CATEGORY_MAP[category] || []
}

export const getJobRoleLabel = (jobRole: JobRoleType) => {
  switch (jobRole) {
    // IT / 개발
    case 'SOFTWARE_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_1.SOFTWARE_ENGINEER'
    case 'WEB_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_1.WEB_DEVELOPER'
    case 'BACKEND_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_1.BACKEND_DEVELOPER'
    case 'FRONTEND_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_1.FRONTEND_DEVELOPER'
    case 'JAVA_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_1.JAVA_DEVELOPER'
    case 'C_CPP_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_1.C_CPP_DEVELOPER'
    case 'PYTHON_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_1.PYTHON_DEVELOPER'
    case 'MACHINE_LEARNING_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_1.MACHINE_LEARNING_ENGINEER'
    case 'DEVOPS_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_1.DEVOPS_ENGINEER'
    case 'DATA_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_1.DATA_ENGINEER'
    case 'NODEJS_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_1.NODEJS_DEVELOPER'
    case 'SYSTEM_NETWORK_ADMIN':
      return 'filter.jobRoleFilter.category.JOB_1.SYSTEM_NETWORK_ADMIN'
    case 'ANDROID_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_1.ANDROID_DEVELOPER'
    case 'IOS_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_1.IOS_DEVELOPER'
    case 'EMBEDDED_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_1.EMBEDDED_DEVELOPER'
    case 'TECH_SUPPORT':
      return 'filter.jobRoleFilter.category.JOB_1.TECH_SUPPORT'
    case 'QA_TEST_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_1.QA_TEST_ENGINEER'
    case 'DATA_SCIENTIST':
      return 'filter.jobRoleFilter.category.JOB_1.DATA_SCIENTIST'
    case 'SECURITY_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_1.SECURITY_ENGINEER'
    case 'BIGDATA_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_1.BIGDATA_ENGINEER'
    case 'HARDWARE_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_1.HARDWARE_ENGINEER'
    case 'BLOCKCHAIN_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_1.BLOCKCHAIN_ENGINEER'
    case 'CROSS_PLATFORM_APP_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_1.CROSS_PLATFORM_APP_DEVELOPER'
    case 'DBA':
      return 'filter.jobRoleFilter.category.JOB_1.DBA'
    case 'PHP_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_1.PHP_DEVELOPER'
    case 'DOTNET_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_1.DOTNET_DEVELOPER'
    case 'GRAPHICS_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_1.GRAPHICS_ENGINEER'
    case 'AR_VR_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_1.AR_VR_ENGINEER'
    case 'RUBY_ON_RAILS_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_1.RUBY_ON_RAILS_DEVELOPER'

    // 기획 / PM / 비즈니스
    case 'PM_PO':
      return 'filter.jobRoleFilter.category.JOB_2.PM_PO'
    case 'PROJECT_MANAGER':
      return 'filter.jobRoleFilter.category.JOB_2.PROJECT_MANAGER'
    case 'STRATEGY_PLANNER':
      return 'filter.jobRoleFilter.category.JOB_2.STRATEGY_PLANNER'
    case 'OPERATIONS_MANAGER':
      return 'filter.jobRoleFilter.category.JOB_2.OPERATIONS_MANAGER'
    case 'DATA_ANALYST':
      return 'filter.jobRoleFilter.category.JOB_2.DATA_ANALYST'
    case 'BRAND_MANAGER':
      return 'filter.jobRoleFilter.category.JOB_2.BRAND_MANAGER'
    case 'GLOBAL_BUSINESS_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_2.GLOBAL_BUSINESS_DEVELOPER'
    case 'CONSULTANT':
      return 'filter.jobRoleFilter.category.JOB_2.CONSULTANT'
    case 'PURCHASING_MANAGER':
      return 'filter.jobRoleFilter.category.JOB_2.PURCHASING_MANAGER'
    case 'BUSINESS_INNOVATOR':
      return 'filter.jobRoleFilter.category.JOB_2.BUSINESS_INNOVATOR'
    case 'AGILE_COACH':
      return 'filter.jobRoleFilter.category.JOB_2.AGILE_COACH'

    // 마케팅
    case 'MARKETING_MANAGER':
      return 'filter.jobRoleFilter.category.JOB_3.MARKETING_MANAGER'
    case 'DIGITAL_MARKETER':
      return 'filter.jobRoleFilter.category.JOB_3.DIGITAL_MARKETER'
    case 'CONTENT_MARKETER':
      return 'filter.jobRoleFilter.category.JOB_3.CONTENT_MARKETER'
    case 'PERFORMANCE_MARKETER':
      return 'filter.jobRoleFilter.category.JOB_3.PERFORMANCE_MARKETER'
    case 'BRAND_MARKETER':
      return 'filter.jobRoleFilter.category.JOB_3.BRAND_MARKETER'
    case 'GLOBAL_MARKETING_MANAGER':
      return 'filter.jobRoleFilter.category.JOB_3.GLOBAL_MARKETING_MANAGER'
    case 'SNS_MARKETER':
      return 'filter.jobRoleFilter.category.JOB_3.SNS_MARKETER'
    case 'PR_SPECIALIST':
      return 'filter.jobRoleFilter.category.JOB_3.PR_SPECIALIST'
    case 'GROWTH_HACKER':
      return 'filter.jobRoleFilter.category.JOB_3.GROWTH_HACKER'
    case 'MARKETING_DIRECTOR':
      return 'filter.jobRoleFilter.category.JOB_3.MARKETING_DIRECTOR'
    case 'MARKET_RESEARCHER':
      return 'filter.jobRoleFilter.category.JOB_3.MARKET_RESEARCHER'

    // 디자인
    case 'UI_UX_DESIGNER':
      return 'filter.jobRoleFilter.category.JOB_4.UI_UX_DESIGNER'
    case 'WEB_DESIGNER':
      return 'filter.jobRoleFilter.category.JOB_4.WEB_DESIGNER'
    case 'GRAPHIC_DESIGNER':
      return 'filter.jobRoleFilter.category.JOB_4.GRAPHIC_DESIGNER'
    case 'SPACE_DESIGNER':
      return 'filter.jobRoleFilter.category.JOB_4.SPACE_DESIGNER'
    case 'MOTION_DESIGNER':
      return 'filter.jobRoleFilter.category.JOB_4.MOTION_DESIGNER'
    case 'FASHION_DESIGNER':
      return 'filter.jobRoleFilter.category.JOB_4.FASHION_DESIGNER'
    case 'ART_DIRECTOR':
      return 'filter.jobRoleFilter.category.JOB_4.ART_DIRECTOR'
    case 'INDUSTRIAL_DESIGNER':
      return 'filter.jobRoleFilter.category.JOB_4.INDUSTRIAL_DESIGNER'
    case 'FURNITURE_DESIGNER':
      return 'filter.jobRoleFilter.category.JOB_4.FURNITURE_DESIGNER'
    case 'LANDSCAPE_DESIGNER':
      return 'filter.jobRoleFilter.category.JOB_4.LANDSCAPE_DESIGNER'

    // 영업 / CS / 유통
    case 'INTERNATIONAL_SALES':
      return 'filter.jobRoleFilter.category.JOB_5.INTERNATIONAL_SALES'
    case 'TECHNICAL_SALES':
      return 'filter.jobRoleFilter.category.JOB_5.TECHNICAL_SALES'
    case 'SOLUTION_CONSULTANT':
      return 'filter.jobRoleFilter.category.JOB_5.SOLUTION_CONSULTANT'
    case 'MEDIA_SALES':
      return 'filter.jobRoleFilter.category.JOB_5.MEDIA_SALES'
    case 'CUSTOMER_SUCCESS_MANAGER':
      return 'filter.jobRoleFilter.category.JOB_5.CUSTOMER_SUCCESS_MANAGER'
    case 'SALES_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_5.SALES_ENGINEER'

    case 'GLOBAL_CS_MANAGER':
      return 'filter.jobRoleFilter.category.JOB_6.GLOBAL_CS_MANAGER'
    case 'RETAIL_MD':
      return 'filter.jobRoleFilter.category.JOB_6.RETAIL_MD'
    case 'CUSTOMER_SUPPORT':
      return 'filter.jobRoleFilter.category.JOB_6.CUSTOMER_SUPPORT'
    case 'FASHION_MD':
      return 'filter.jobRoleFilter.category.JOB_6.FASHION_MD'
    case 'CRM_SPECIALIST':
      return 'filter.jobRoleFilter.category.JOB_6.CRM_SPECIALIST'
    case 'RECEPTIONIST':
      return 'filter.jobRoleFilter.category.JOB_6.RECEPTIONIST'
    case 'TRAVEL_AGENT':
      return 'filter.jobRoleFilter.category.JOB_6.TRAVEL_AGENT'
    case 'FLIGHT_ATTENDANT':
      return 'filter.jobRoleFilter.category.JOB_6.FLIGHT_ATTENDANT'
    case 'STORE_CLERK':
      return 'filter.jobRoleFilter.category.JOB_6.STORE_CLERK'
    case 'TOURISM_WORKER':
      return 'filter.jobRoleFilter.category.JOB_6.TOURISM_WORKER'

    // 7. 통/번역
    case 'INTERPRETER':
      return 'filter.jobRoleFilter.category.JOB_7.INTERPRETER'
    case 'TRANSLATOR':
      return 'filter.jobRoleFilter.category.JOB_7.TRANSLATOR'
    case 'LOCALIZATION_SPECIALIST':
      return 'filter.jobRoleFilter.category.JOB_7.LOCALIZATION_SPECIALIST'

    // 8. 미디어
    case 'CONTENT_CREATOR':
      return 'filter.jobRoleFilter.category.JOB_8.CONTENT_CREATOR'
    case 'VIDEO_EDITOR':
      return 'filter.jobRoleFilter.category.JOB_8.VIDEO_EDITOR'
    case 'VIDEO_PRODUCER':
      return 'filter.jobRoleFilter.category.JOB_8.VIDEO_PRODUCER'
    case 'WRITER':
      return 'filter.jobRoleFilter.category.JOB_8.WRITER'
    case 'PHOTOGRAPHER':
      return 'filter.jobRoleFilter.category.JOB_8.PHOTOGRAPHER'
    case 'JOURNALIST':
      return 'filter.jobRoleFilter.category.JOB_8.JOURNALIST'
    case 'CURATOR':
      return 'filter.jobRoleFilter.category.JOB_8.CURATOR'

    // 9. 엔지니어링 / 설계
    case 'ELECTRICAL_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.ELECTRICAL_ENGINEER'
    case 'ROBOTICS_AUTOMATION_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.ROBOTICS_AUTOMATION_ENGINEER'
    case 'MECHANICAL_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.MECHANICAL_ENGINEER'
    case 'CAD_3D_DESIGNER':
      return 'filter.jobRoleFilter.category.JOB_9.CAD_3D_DESIGNER'
    case 'ELECTRIC_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.ELECTRIC_ENGINEER'
    case 'CONTROL_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.CONTROL_ENGINEER'
    case 'PRODUCT_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.PRODUCT_ENGINEER'
    case 'ELECTROMECHANICAL_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.ELECTROMECHANICAL_ENGINEER'
    case 'EQUIPMENT_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.EQUIPMENT_ENGINEER'
    case 'QA_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.QA_ENGINEER'
    case 'INDUSTRIAL_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.INDUSTRIAL_ENGINEER'
    case 'RF_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.RF_ENGINEER'
    case 'CHEMICAL_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.CHEMICAL_ENGINEER'
    case 'AEROSPACE_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.AEROSPACE_ENGINEER'
    case 'IC_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.IC_ENGINEER'
    case 'MATERIAL_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.MATERIAL_ENGINEER'
    case 'PLANT_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.PLANT_ENGINEER'
    case 'PLASTIC_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.PLASTIC_ENGINEER'
    case 'QC_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.QC_ENGINEER'
    case 'STRUCTURAL_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.STRUCTURAL_ENGINEER'
    case 'CONSTRUCTION_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.CONSTRUCTION_ENGINEER'
    case 'CIVIL_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.CIVIL_ENGINEER'
    case 'ENVIRONMENTAL_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.ENVIRONMENTAL_ENGINEER'
    case 'PRODUCTION_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_9.PRODUCTION_ENGINEER'
    case 'RND_RESEARCHER':
      return 'filter.jobRoleFilter.category.JOB_9.RND_RESEARCHER'

    // 10. HR / 교육
    case 'GLOBAL_HR_MANAGER':
      return 'filter.jobRoleFilter.category.JOB_10.GLOBAL_HR_MANAGER'
    case 'RECRUITER':
      return 'filter.jobRoleFilter.category.JOB_10.RECRUITER'
    case 'HR_CONSULTANT':
      return 'filter.jobRoleFilter.category.JOB_10.HR_CONSULTANT'
    case 'TECH_TRAINER':
      return 'filter.jobRoleFilter.category.JOB_10.TECH_TRAINER'
    case 'INHOUSE_TRAINER':
      return 'filter.jobRoleFilter.category.JOB_10.INHOUSE_TRAINER'

    // 11. 게임 제작
    case 'GAME_PLANNER':
      return 'filter.jobRoleFilter.category.JOB_11.GAME_PLANNER'
    case 'GAME_ARTIST':
      return 'filter.jobRoleFilter.category.JOB_11.GAME_ARTIST'
    case 'GAME_CLIENT_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_11.GAME_CLIENT_DEVELOPER'
    case 'UNITY_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_11.UNITY_DEVELOPER'
    case 'GAME_GRAPHIC_DESIGNER':
      return 'filter.jobRoleFilter.category.JOB_11.GAME_GRAPHIC_DESIGNER'
    case 'GAME_SERVER_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_11.GAME_SERVER_DEVELOPER'
    case 'MOBILE_GAME_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_11.MOBILE_GAME_DEVELOPER'
    case 'UNREAL_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_11.UNREAL_DEVELOPER'

    // 12. 금융
    case 'INVESTMENT_BANKER':
      return 'filter.jobRoleFilter.category.JOB_12.INVESTMENT_BANKER'
    case 'ASSET_MANAGER':
      return 'filter.jobRoleFilter.category.JOB_12.ASSET_MANAGER'
    case 'FINANCIAL_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_12.FINANCIAL_ENGINEER'

    // 13. 제조/생산
    case 'MACHINE_TECHNICIAN':
      return 'filter.jobRoleFilter.category.JOB_13.MACHINE_TECHNICIAN'
    case 'MANUFACTURING_TEST_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_13.MANUFACTURING_TEST_ENGINEER'
    case 'MANUFACTURING_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_13.MANUFACTURING_ENGINEER'
    case 'MANUFACTURING_CHEMIST':
      return 'filter.jobRoleFilter.category.JOB_13.MANUFACTURING_CHEMIST'
    case 'SEMICONDUCTOR_DISPLAY_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_13.SEMICONDUCTOR_DISPLAY_ENGINEER'
    case 'PRODUCTION_WORKER':
      return 'filter.jobRoleFilter.category.JOB_13.PRODUCTION_WORKER'

    // 14. 교육
    case 'INSTRUCTOR':
      return 'filter.jobRoleFilter.category.JOB_14.INSTRUCTOR'
    case 'LANGUAGE_EDUCATOR':
      return 'filter.jobRoleFilter.category.JOB_14.LANGUAGE_EDUCATOR'

    // 15. 의료/제약/바이오
    case 'BIOTECH_RESEARCHER':
      return 'filter.jobRoleFilter.category.JOB_15.BIOTECH_RESEARCHER'
    case 'CLINICAL_RESEARCHER':
      return 'filter.jobRoleFilter.category.JOB_15.CLINICAL_RESEARCHER'
    case 'MICROBIOLOGIST':
      return 'filter.jobRoleFilter.category.JOB_15.MICROBIOLOGIST'
    case 'HOSPITAL_COORDINATOR':
      return 'filter.jobRoleFilter.category.JOB_15.HOSPITAL_COORDINATOR'
    case 'PHARMACEUTICAL_CHEMIST':
      return 'filter.jobRoleFilter.category.JOB_15.PHARMACEUTICAL_CHEMIST'
    case 'GENETIC_ENGINEER':
      return 'filter.jobRoleFilter.category.JOB_15.GENETIC_ENGINEER'
    case 'CAREGIVER':
      return 'filter.jobRoleFilter.category.JOB_15.CAREGIVER'

    // 16. 물류 / 무역
    case 'LOGISTICS_MANAGER':
      return 'filter.jobRoleFilter.category.JOB_16.LOGISTICS_MANAGER'
    case 'LOGISTICS_ANALYST':
      return 'filter.jobRoleFilter.category.JOB_16.LOGISTICS_ANALYST'
    case 'EXPORT_IMPORT_OFFICER':
      return 'filter.jobRoleFilter.category.JOB_16.EXPORT_IMPORT_OFFICER'
    case 'TRADE_OFFICER':
      return 'filter.jobRoleFilter.category.JOB_16.TRADE_OFFICER'
    case 'BUYER_MANAGER':
      return 'filter.jobRoleFilter.category.JOB_16.BUYER_MANAGER'
    case 'AIR_TRANSPORT_AGENT':
      return 'filter.jobRoleFilter.category.JOB_16.AIR_TRANSPORT_AGENT'
    case 'MARINE_TRANSPORT_AGENT':
      return 'filter.jobRoleFilter.category.JOB_16.MARINE_TRANSPORT_AGENT'
    case 'LOGISTICS_FIELD_WORKER':
      return 'filter.jobRoleFilter.category.JOB_16.LOGISTICS_FIELD_WORKER'

    // 17. 외식/푸드 서비스
    case 'FOOD_SERVICE_WORKER':
      return 'filter.jobRoleFilter.category.JOB_17.FOOD_SERVICE_WORKER'
    case 'CHEF':
      return 'filter.jobRoleFilter.category.JOB_17.CHEF'
    case 'MENU_DEVELOPER':
      return 'filter.jobRoleFilter.category.JOB_17.MENU_DEVELOPER'
    case 'BARTENDER':
      return 'filter.jobRoleFilter.category.JOB_17.BARTENDER'
    case 'SOMMELIER':
      return 'filter.jobRoleFilter.category.JOB_17.SOMMELIER'
    case 'FOOD_STYLIST':
      return 'filter.jobRoleFilter.category.JOB_17.FOOD_STYLIST'

    // 18. 건설/시설
    case 'ARCHITECT':
      return 'filter.jobRoleFilter.category.JOB_18.ARCHITECT'
    case 'CONSTRUCTION_SUPERVISOR':
      return 'filter.jobRoleFilter.category.JOB_18.CONSTRUCTION_SUPERVISOR'
    case 'MAINTENANCE_MANAGER':
      return 'filter.jobRoleFilter.category.JOB_18.MAINTENANCE_MANAGER'
    case 'CONSTRUCTION_WORKER':
      return 'filter.jobRoleFilter.category.JOB_18.CONSTRUCTION_WORKER'
    case 'WELDER':
      return 'filter.jobRoleFilter.category.JOB_18.WELDER'
    case 'CARPENTER':
      return 'filter.jobRoleFilter.category.JOB_18.CARPENTER'
    case 'HEAVY_EQUIPMENT_TECHNICIAN':
      return 'filter.jobRoleFilter.category.JOB_18.HEAVY_EQUIPMENT_TECHNICIAN'

    // 19. 엔터테인먼트
    case 'MODEL':
      return 'filter.jobRoleFilter.category.JOB_19.MODEL'
    case 'ACTOR':
      return 'filter.jobRoleFilter.category.JOB_19.ACTOR'
    case 'SHOW_HOST':
      return 'filter.jobRoleFilter.category.JOB_19.SHOW_HOST'

    default:
      return 'filter.jobRoleFilter.category.JOB_19.unknown'
  }
}
export function getLanguageLabel(lang: LanguageType): string {
  switch (lang) {
    case 'ENGLISH':
      return 'filter.requiredLanguageFilter.content.ENGLISH'
    case 'CHINESE':
      return 'filter.requiredLanguageFilter.content.CHINESE'
    case 'HINDI':
      return 'filter.requiredLanguageFilter.content.HINDI'
    case 'SPANISH':
      return 'filter.requiredLanguageFilter.content.SPANISH'
    case 'FRENCH':
      return 'filter.requiredLanguageFilter.content.FRENCH'
    case 'ARABIC':
      return 'filter.requiredLanguageFilter.content.ARABIC'
    case 'BENGALI':
      return 'filter.requiredLanguageFilter.content.BENGALI'
    case 'PORTUGUESE':
      return 'filter.requiredLanguageFilter.content.PORTUGUESE'
    case 'RUSSIAN':
      return 'filter.requiredLanguageFilter.content.RUSSIAN'
    case 'URDU':
      return 'filter.requiredLanguageFilter.content.URDU'
    case 'INDONESIAN':
      return 'filter.requiredLanguageFilter.content.INDONESIAN'
    case 'GERMAN':
      return 'filter.requiredLanguageFilter.content.GERMAN'
    case 'JAPANESE':
      return 'filter.requiredLanguageFilter.content.JAPANESE'
    case 'SWAHILI':
      return 'filter.requiredLanguageFilter.content.SWAHILI'
    case 'MARATHI':
      return 'filter.requiredLanguageFilter.content.MARATHI'
    case 'TELUGU':
      return 'filter.requiredLanguageFilter.content.TELUGU'
    case 'TURKISH':
      return 'filter.requiredLanguageFilter.content.TURKISH'
    case 'TAMIL':
      return 'filter.requiredLanguageFilter.content.TAMIL'
    case 'VIETNAMESE':
      return 'filter.requiredLanguageFilter.content.VIETNAMESE'
    case 'KOREAN':
      return 'filter.requiredLanguageFilter.content.KOREAN'
    case 'ITALIAN':
      return 'filter.requiredLanguageFilter.content.ITALIAN'
    case 'PERSIAN':
      return 'filter.requiredLanguageFilter.content.PERSIAN'
    case 'POLISH':
      return 'filter.requiredLanguageFilter.content.POLISH'
    case 'UKRAINIAN':
      return 'filter.requiredLanguageFilter.content.UKRAINIAN'
    default:
      return ''
  }
}

export const getJobCategoryLabel = (code: string): string => {
  const category = JOB_CATEGORY_LIST.find((cat) => cat.code === code)
  return category?.label || 'filter.unknown'
}

export const getVisaLabel = (code: string): string => {
  const visa = VISA_LIST.find((v) => v.code === code)
  return visa?.i18nKey || 'filter.unknown'
}

export const getRegionLabel = (code: string): string => {
  const visa = WORK_REGIONS.find((v) => v.code === code)
  return visa?.label || '알 수 없음'
}

export const getSelectedCategoriesFromRoles = (selectedJobRoles: JobRoleType[] | undefined): JobCategoryType[] => {
  if (!selectedJobRoles || selectedJobRoles.length === 0) return []

  const selectedCategories = new Set<JobCategoryType>()

  selectedJobRoles.forEach((role) => {
    Object.entries(SUB_CATEGORY_MAP).forEach(([category, roles]) => {
      if (roles.some((r) => r.code === role)) {
        selectedCategories.add(category as JobCategoryType)
      }
    })
  })

  return Array.from(selectedCategories)
}
