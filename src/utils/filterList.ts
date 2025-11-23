import { ContractEnumType, JobCategoryType, JobRoleType, LanguageType, VisaType } from '@/types/recruit'

export const CONTRACT_LIST: { code: ContractEnumType; label: string }[] = [
  { code: 'INTERN', label: '인턴' },
  { code: 'NEWCOMER', label: '신입' },
  { code: 'EXPERIENCED', label: '경력' },
  { code: 'CONTRACT', label: '계약직' },
  { code: 'REGULAR', label: '정규직' },
]

export const VISA_LIST: { code: VisaType; label: string }[] = [
  { code: 'A1', label: 'A-1 외교' },
  { code: 'A2', label: 'A-2 공무' },
  { code: 'A3', label: 'A-3 협정' },
  { code: 'B1', label: 'B-1 사증면제' },
  { code: 'B2', label: 'B-2 관광통과' },
  { code: 'C1', label: 'C-1 일시취재' },
  { code: 'C3', label: 'C-3 단기방문' },
  { code: 'C4', label: 'C-4 문화예술' },
  { code: 'D2', label: 'D-2 유학' },
  { code: 'D3', label: 'D-3 기술연수' },
  { code: 'D4', label: 'D-4 일반연수' },
  { code: 'D5', label: 'D-5 취재' },
  { code: 'D6', label: 'D-6 종교' },
  { code: 'D7', label: 'D-7 주재' },
  { code: 'D8', label: 'D-8 기업투자' },
  { code: 'D9', label: 'D-9 무역경영' },
  { code: 'D10', label: 'D-10 구직' },
  { code: 'E1', label: 'E-1 교수' },
  { code: 'E2', label: 'E-2 회화지도' },
  { code: 'E3', label: 'E-3 연구' },
  { code: 'E4', label: 'E-4 기술지도' },
  { code: 'E5', label: 'E-5 전문직업' },
  { code: 'E6', label: 'E-6 예술흥행' },
  { code: 'E7', label: 'E-7 특정활동' },
  { code: 'E8', label: 'E-8 계절근로' },
  { code: 'E9', label: 'E-9 비전문취업' },
  { code: 'E10', label: 'E-10 선원취업' },
  { code: 'F1', label: 'F-1 방문동거' },
  { code: 'F2', label: 'F-2 거주' },
  { code: 'F3', label: 'F-3 동반' },
  { code: 'F4', label: 'F-4 재외동포' },
  { code: 'F5', label: 'F-5 영주' },
  { code: 'F6', label: 'F-6 결혼이민' },
  { code: 'G1', label: 'G-1 기타' },
  { code: 'H1', label: 'H-1 관광취업' },
  { code: 'H2', label: 'H-2 방문취업' },
  { code: 'F27', label: 'F-2-7 점수제 우수인재' },
] as const

export const WORK_REGIONS = [
  { code: 'SEOUL', label: '서울특별시', short: '서울' },
  { code: 'GYEONGGI', label: '경기도', short: '경기' },
  { code: 'INCHEON', label: '인천광역시', short: '인천' },
  { code: 'BUSAN', label: '부산광역시', short: '부산' },
  { code: 'DAEJEON', label: '대전광역시', short: '대전' },
  { code: 'DAEGU', label: '대구광역시', short: '대꾸' },
  { code: 'ULSAN', label: '울산광역시', short: '울산' },
  { code: 'GWANGJU', label: '광주광역시', short: '광주' },
  { code: 'GANGWON', label: '강원특별자치도', short: '강원특별자치도' },
  { code: 'SEJONG', label: '세종특별자치도', short: '세종특별자치도' },
  { code: 'CHUNGBUK', label: '충청북도', short: '충북' },
  { code: 'CHUNGNAM', label: '충청남도', short: '충남' },
  { code: 'GYEONGBUK', label: '경상북도', short: '경북' },
  { code: 'GYEONGNAM', label: '경상남도', short: '경남' },
  { code: 'JEJU', label: '제주특별자치도', short: '제주특별자치도' },
  { code: 'JEONBUK', label: '전라북도', short: '전북특별자치도' },
  { code: 'JEONNAM', label: '전라남도', short: '전남' },
] as const

export const LANGUAGE_LIST = [
  { code: 'ENGLISH', label: '영어' },
  { code: 'CHINESE', label: '중국어' },
  { code: 'HINDI', label: '힌디어' },
  { code: 'SPANISH', label: '스페인어' },
  { code: 'FRENCH', label: '프랑스어' },
  { code: 'ARABIC', label: '아랍어' },
  { code: 'BENGALI', label: '벵골어' },
  { code: 'PORTUGUESE', label: '포르투갈어' },
  { code: 'RUSSIAN', label: '러시아어' },
  { code: 'URDU', label: '우르두어' },
  { code: 'INDONESIAN', label: '인도네시아어' },
  { code: 'GERMAN', label: '독일어' },
  { code: 'JAPANESE', label: '일본어' },
  { code: 'SWAHILI', label: '스와힐리어' },
  { code: 'MARATHI', label: '마라티어' },
  { code: 'TELUGU', label: '텔루구어' },
  { code: 'TURKISH', label: '튀르키예어' },
  { code: 'TAMIL', label: '타밀어' },
  { code: 'VIETNAMESE', label: '베트남어' },
  { code: 'KOREAN', label: '한국어' },
  { code: 'ITALIAN', label: '이탈리아어' },
  { code: 'PERSIAN', label: '페르시아어' },
  { code: 'POLISH', label: '폴란드어' },
  { code: 'UKRAINIAN', label: '우크라이나어' },
] as const

export const JOB_CATEGORY_LIST: { code: JobCategoryType; label: string }[] = [
  { code: 'IT_DEVELOPMENT', label: 'IT/개발' },
  { code: 'BUSINESS_MANAGEMENT', label: '경영/비즈니스' },
  { code: 'MARKETING_ADVERTISING', label: '마케팅/광고' },
  { code: 'DESIGN', label: '디자인' },
  { code: 'SALES', label: '영업' },
  { code: 'CUSTOMER_SERVICE_RETAIL', label: '고객서비스/리테일' },
  { code: 'TRANSLATION_INTERPRETATION', label: '통/번역' },
  { code: 'MEDIA', label: '미디어' },
  { code: 'ENGINEERING_DESIGN', label: '엔지니어링/설계' },
  { code: 'HR', label: 'HR' },
  { code: 'GAME_PRODUCTION', label: '게임 제작' },
  { code: 'FINANCE', label: '금융' },
  { code: 'MANUFACTURING_PRODUCTION', label: '제조/생산' },
  { code: 'EDUCATION', label: '교육' },
  { code: 'HEALTHCARE_PHARMA_BIO', label: '의료/제약/바이오' },
  { code: 'LOGISTICS_TRADE', label: '물류/무역' },
  { code: 'FOOD_BEVERAGE', label: '식/음료' },
  { code: 'CONSTRUCTION_FACILITIES', label: '건설/시설' },
  { code: 'ENTERTAINMENT', label: '엔터테인먼트' },
]

export const IT_DEVELOPMENT_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'SOFTWARE_ENGINEER', label: '소프트웨어 엔지니어' },
  { code: 'WEB_DEVELOPER', label: '웹 개발자' },
  { code: 'BACKEND_DEVELOPER', label: '백엔드 개발자' },
  { code: 'FRONTEND_DEVELOPER', label: '프론트엔드 개발자' },
  { code: 'JAVA_DEVELOPER', label: '자바 개발자' },
  { code: 'C_CPP_DEVELOPER', label: 'C/C++ 개발자' },
  { code: 'PYTHON_DEVELOPER', label: '파이썬 개발자' },
  { code: 'MACHINE_LEARNING_ENGINEER', label: '머신러닝 엔지니어' },
  { code: 'DEVOPS_ENGINEER', label: 'DevOps / 시스템 관리자' },
  { code: 'DATA_ENGINEER', label: '데이터 엔지니어' },
  { code: 'NODEJS_DEVELOPER', label: 'Node.js 개발자' },
  { code: 'SYSTEM_NETWORK_ADMIN', label: '시스템/네트워크 관리자' },
  { code: 'ANDROID_DEVELOPER', label: '안드로이드 개발자' },
  { code: 'IOS_DEVELOPER', label: 'iOS 개발자' },
  { code: 'EMBEDDED_DEVELOPER', label: '임베디드 개발자' },
  { code: 'TECH_SUPPORT', label: '기술지원' },
  { code: 'QA_TEST_ENGINEER', label: 'QA / 테스트 엔지니어' },
  { code: 'DATA_SCIENTIST', label: '데이터 사이언티스트' },
  { code: 'SECURITY_ENGINEER', label: '보안 엔지니어' },
  { code: 'BIGDATA_ENGINEER', label: '빅데이터 엔지니어' },
  { code: 'HARDWARE_ENGINEER', label: '하드웨어 엔지니어' },
  { code: 'BLOCKCHAIN_ENGINEER', label: '블록체인 엔지니어' },
  { code: 'CROSS_PLATFORM_APP_DEVELOPER', label: '크로스플랫폼 앱 개발자' },
  { code: 'DBA', label: 'DBA' },
  { code: 'PHP_DEVELOPER', label: 'PHP 개발자' },
  { code: 'DOTNET_DEVELOPER', label: '.NET 개발자' },
  { code: 'GRAPHICS_ENGINEER', label: '그래픽스 엔지니어' },
  { code: 'AR_VR_ENGINEER', label: 'AR/VR 엔지니어' },
  { code: 'RUBY_ON_RAILS_DEVELOPER', label: '루비온레일즈 개발자' },
]

export const BUSINESS_MANAGEMENT_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'PM_PO', label: 'PM/PO' },
  { code: 'PROJECT_MANAGER', label: '프로젝트 매니저' },
  { code: 'STRATEGY_PLANNER', label: '전략 기획자' },
  { code: 'OPERATIONS_MANAGER', label: '운영 매니저' },
  { code: 'DATA_ANALYST', label: '데이터 분석가' },
  { code: 'BRAND_MANAGER', label: '브랜드 매니저' },
  { code: 'GLOBAL_BUSINESS_DEVELOPER', label: '해외 사업개발 / 기획자' },
  { code: 'CONSULTANT', label: '컨설턴트' },
  { code: 'PURCHASING_MANAGER', label: '구매담당' },
  { code: 'BUSINESS_INNOVATOR', label: '경영 혁신가' },
  { code: 'AGILE_COACH', label: '애자일코치' },
]

export const MARKETING_ADVERTISING_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'MARKETING_MANAGER', label: '마케팅 매니저' },
  { code: 'DIGITAL_MARKETER', label: '디지털 마케터' },
  { code: 'CONTENT_MARKETER', label: '콘텐츠 마케터' },
  { code: 'PERFORMANCE_MARKETER', label: '퍼포먼스 마케터' },
  { code: 'BRAND_MARKETER', label: '브랜드 마케터' },
  { code: 'GLOBAL_MARKETING_MANAGER', label: '글로벌 마케팅 매니저' },
  { code: 'SNS_MARKETER', label: 'SNS 마케터' },
  { code: 'PR_SPECIALIST', label: 'PR 전문가' },
  { code: 'GROWTH_HACKER', label: '그로스 해커' },
  { code: 'MARKETING_DIRECTOR', label: '마케팅 디렉터' },
  { code: 'MARKET_RESEARCHER', label: '마켓 리서치' },
]

export const DESIGN_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'UI_UX_DESIGNER', label: 'UI/UX 디자이너' },
  { code: 'WEB_DESIGNER', label: '웹 디자이너' },
  { code: 'GRAPHIC_DESIGNER', label: '그래픽 디자이너' },
  { code: 'SPACE_DESIGNER', label: '공간 디자이너' },
  { code: 'MOTION_DESIGNER', label: '영상/모션 디자이너' },
  { code: 'FASHION_DESIGNER', label: '패션 디자이너' },
  { code: 'ART_DIRECTOR', label: '아트 디렉터' },
  { code: 'INDUSTRIAL_DESIGNER', label: '산업 디자이너' },
  { code: 'FURNITURE_DESIGNER', label: '가구 디자이너' },
  { code: 'LANDSCAPE_DESIGNER', label: '조경 디자이너' },
]

export const SALE_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'INTERNATIONAL_SALES', label: '해외영업' },
  { code: 'TECHNICAL_SALES', label: '기술영업' },
  { code: 'SOLUTION_CONSULTANT', label: '솔루션 컨설턴트' },
  { code: 'MEDIA_SALES', label: '미디어 세일즈' },
  { code: 'CUSTOMER_SUCCESS_MANAGER', label: '고객성공매니저' },
  { code: 'SALES_ENGINEER', label: '세일즈 엔지니어' },
]

export const CUSTOMER_SERVICE_RETAIL_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'GLOBAL_CS_MANAGER', label: '글로벌 CS 매니저' },
  { code: 'RETAIL_MD', label: '리테일 MD' },
  { code: 'CUSTOMER_SUPPORT', label: '고객 지원/상담' },
  { code: 'FASHION_MD', label: '패션 MD' },
  { code: 'CRM_SPECIALIST', label: 'CRM 전문가' },
  { code: 'RECEPTIONIST', label: '리셉션' },
  { code: 'TRAVEL_AGENT', label: '여행 에이전트' },
  { code: 'FLIGHT_ATTENDANT', label: '승무원' },
  { code: 'STORE_CLERK', label: '매장점원' },
  { code: 'TOURISM_WORKER', label: '관광숙박업 종사자' },
]
export const TRANSLATION_INTERPRETATION_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'INTERPRETER', label: '통역사' },
  { code: 'TRANSLATOR', label: '번역가' },
  { code: 'LOCALIZATION_SPECIALIST', label: '로컬라이제이션 전문가' },
]
export const MEDIA_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'CONTENT_CREATOR', label: '콘텐츠 크리에이터' },
  { code: 'VIDEO_EDITOR', label: '영상 편집가' },
  { code: 'VIDEO_PRODUCER', label: '비디오 제작' },
  { code: 'WRITER', label: '작가' },
  { code: 'PHOTOGRAPHER', label: '사진작가' },
  { code: 'JOURNALIST', label: '저널리스트' },
  { code: 'CURATOR', label: '큐레이터' },
]
export const ENGINEERING_DESIGN_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'ELECTRICAL_ENGINEER', label: '전자 엔지니어' },
  { code: 'ROBOTICS_AUTOMATION_ENGINEER', label: '로봇/자동화' },
  { code: 'MECHANICAL_ENGINEER', label: '기계 엔지니어' },
  { code: 'CAD_3D_DESIGNER', label: 'CAD/3D 설계자' },
  { code: 'ELECTRIC_ENGINEER', label: '전기 엔지니어' },
  { code: 'CONTROL_ENGINEER', label: '제어 엔지니어' },
  { code: 'PRODUCT_ENGINEER', label: '제품 엔지니어' },
  { code: 'ELECTROMECHANICAL_ENGINEER', label: '전자기계 공학자' },
  { code: 'EQUIPMENT_ENGINEER', label: '장비 엔지니어' },
  { code: 'QA_ENGINEER', label: 'QA 엔지니어' },
  { code: 'INDUSTRIAL_ENGINEER', label: '산업 엔지니어' },
  { code: 'RF_ENGINEER', label: 'RF 엔지니어' },
  { code: 'CHEMICAL_ENGINEER', label: '화학공학 엔지니어' },
  { code: 'AEROSPACE_ENGINEER', label: '항공우주 엔지니어' },
  { code: 'IC_ENGINEER', label: 'I&C 엔지니어' },
  { code: 'MATERIAL_ENGINEER', label: '재료공학자' },
  { code: 'PLANT_ENGINEER', label: '플랜트 엔지니어' },
  { code: 'PLASTIC_ENGINEER', label: '플라스틱 엔지니어' },
  { code: 'QC_ENGINEER', label: 'QC 엔지니어' },
  { code: 'STRUCTURAL_ENGINEER', label: '구조공학 엔지니어' },
  { code: 'CONSTRUCTION_ENGINEER', label: '건설 엔지니어' },
  { code: 'CIVIL_ENGINEER', label: '토목 엔지니어' },
  { code: 'ENVIRONMENTAL_ENGINEER', label: '환경 엔지니어' },
  { code: 'PRODUCTION_ENGINEER', label: '생산공학 엔지니어' },
  { code: 'RND_RESEARCHER', label: 'R&D / 연구원' },
]

export const GAME_PRODUCTION_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'GAME_PLANNER', label: '게임 기획자' },
  { code: 'GAME_ARTIST', label: '게임 아티스트' },
  { code: 'GAME_CLIENT_DEVELOPER', label: '게임 클라이언트 개발자' },
  { code: 'UNITY_DEVELOPER', label: '유니티 개발자' },
  { code: 'GAME_GRAPHIC_DESIGNER', label: '게임 그래픽 디자이너' },
  { code: 'GAME_SERVER_DEVELOPER', label: '게임 서버 개발자' },
  { code: 'MOBILE_GAME_DEVELOPER', label: '모바일 게임 개발자' },
  { code: 'UNREAL_DEVELOPER', label: '언리얼 개발자' },
]

export const FINANCE_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'INVESTMENT_BANKER', label: '투자은행가' },
  { code: 'ASSET_MANAGER', label: '자산 운용가' },
  { code: 'FINANCIAL_ENGINEER', label: '금융공학자' },
]

export const MANUFACTURING_PRODUCTION_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'MACHINE_TECHNICIAN', label: '기계제작 기술자' },
  { code: 'MANUFACTURING_TEST_ENGINEER', label: '제조 테스트 엔지니어' },
  { code: 'MANUFACTURING_ENGINEER', label: '제조 엔지니어' },
  { code: 'MANUFACTURING_CHEMIST', label: '제조 화학자' },
  { code: 'SEMICONDUCTOR_DISPLAY_ENGINEER', label: '반도체/디스플레이 엔지니어' },
  { code: 'PRODUCTION_WORKER', label: '생산직 종사자' },
]

export const EDUCATION_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'INSTRUCTOR', label: '강사' },
  { code: 'LANGUAGE_EDUCATOR', label: '외국어교육' },
]

export const HEALTHCARE_PHARMA_BIO_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'BIOTECH_RESEARCHER', label: '생명공학 연구원' },
  { code: 'CLINICAL_RESEARCHER', label: '임상시험 연구원' },
  { code: 'MICROBIOLOGIST', label: '미생물학자' },
  { code: 'HOSPITAL_COORDINATOR', label: '병원 코디네이터' },
  { code: 'PHARMACEUTICAL_CHEMIST', label: '약학 분석 화학자' },
  { code: 'GENETIC_ENGINEER', label: '유전공학자' },
  { code: 'CAREGIVER', label: '요양보호사' },
]

export const LOGISTICS_TRADE_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'LOGISTICS_MANAGER', label: '물류담당' },
  { code: 'LOGISTICS_ANALYST', label: '물류 분석가' },
  { code: 'EXPORT_IMPORT_OFFICER', label: '수출입사무' },
  { code: 'TRADE_OFFICER', label: '무역사무' },
  { code: 'BUYER_MANAGER', label: '바이어관리/상담/개발' },
  { code: 'AIR_TRANSPORT_AGENT', label: '항공 운송' },
  { code: 'MARINE_TRANSPORT_AGENT', label: '해운/해양 운송' },
  { code: 'LOGISTICS_FIELD_WORKER', label: '물류 현장직 종사자' },
]

export const CONSTRUCTION_FACILITIES_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'ARCHITECT', label: '건축가' },
  { code: 'CONSTRUCTION_SUPERVISOR', label: '건축 감리자' },
  { code: 'MAINTENANCE_MANAGER', label: '유지보수 관리자' },
  { code: 'CONSTRUCTION_WORKER', label: '건설 현장직 종사자' },
  { code: 'WELDER', label: '용접공' },
  { code: 'CARPENTER', label: '목수' },
  { code: 'HEAVY_EQUIPMENT_TECHNICIAN', label: '중장비 기술자' },
]

export const ENTERTAINMENT_LIST: { code: JobRoleType; label: string }[] = [
  { code: 'MODEL', label: '모델' },
  { code: 'ACTOR', label: '배우' },
  { code: 'SHOW_HOST', label: '방송 진행자' },
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
  HR: [],
  GAME_PRODUCTION: GAME_PRODUCTION_LIST,
  FINANCE: FINANCE_LIST,
  MANUFACTURING_PRODUCTION: MANUFACTURING_PRODUCTION_LIST,
  EDUCATION: EDUCATION_LIST,
  HEALTHCARE_PHARMA_BIO: HEALTHCARE_PHARMA_BIO_LIST,
  LOGISTICS_TRADE: LOGISTICS_TRADE_LIST,
  FOOD_BEVERAGE: [],
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
      return '소프트웨어 엔지니어'
    case 'WEB_DEVELOPER':
      return '웹 개발자'
    case 'BACKEND_DEVELOPER':
      return '백엔드 개발자'
    case 'FRONTEND_DEVELOPER':
      return '프론트엔드 개발자'
    case 'JAVA_DEVELOPER':
      return '자바 개발자'
    case 'C_CPP_DEVELOPER':
      return 'C/C++ 개발자'
    case 'PYTHON_DEVELOPER':
      return '파이썬 개발자'
    case 'MACHINE_LEARNING_ENGINEER':
      return '머신러닝 엔지니어'
    case 'DEVOPS_ENGINEER':
      return 'DevOps / 시스템 관리자'
    case 'DATA_ENGINEER':
      return '데이터 엔지니어'
    case 'NODEJS_DEVELOPER':
      return 'Node.js 개발자'
    case 'SYSTEM_NETWORK_ADMIN':
      return '시스템/네트워크 관리자'
    case 'ANDROID_DEVELOPER':
      return '안드로이드 개발자'
    case 'IOS_DEVELOPER':
      return 'iOS 개발자'
    case 'EMBEDDED_DEVELOPER':
      return '임베디드 개발자'
    case 'TECH_SUPPORT':
      return '기술지원'
    case 'QA_TEST_ENGINEER':
      return 'QA / 테스트 엔지니어'
    case 'DATA_SCIENTIST':
      return '데이터 사이언티스트'
    case 'SECURITY_ENGINEER':
      return '보안 엔지니어'
    case 'BIGDATA_ENGINEER':
      return '빅데이터 엔지니어'
    case 'HARDWARE_ENGINEER':
      return '하드웨어 엔지니어'
    case 'BLOCKCHAIN_ENGINEER':
      return '블록체인 엔지니어'
    case 'CROSS_PLATFORM_APP_DEVELOPER':
      return '크로스플랫폼 앱 개발자'
    case 'DBA':
      return 'DBA'
    case 'PHP_DEVELOPER':
      return 'PHP 개발자'
    case 'DOTNET_DEVELOPER':
      return '.NET 개발자'
    case 'GRAPHICS_ENGINEER':
      return '그래픽스 엔지니어'
    case 'AR_VR_ENGINEER':
      return 'AR/VR 엔지니어'
    case 'RUBY_ON_RAILS_DEVELOPER':
      return '루비온레일즈 개발자'

    // 기획 / PM / 비즈니스
    case 'PM_PO':
      return 'PM/PO'
    case 'PROJECT_MANAGER':
      return '프로젝트 매니저'
    case 'STRATEGY_PLANNER':
      return '전략 기획자'
    case 'OPERATIONS_MANAGER':
      return '운영 매니저'
    case 'DATA_ANALYST':
      return '데이터 분석가'
    case 'BRAND_MANAGER':
      return '브랜드 매니저'
    case 'GLOBAL_BUSINESS_DEVELOPER':
      return '해외 사업개발 / 기획자'
    case 'CONSULTANT':
      return '컨설턴트'
    case 'PURCHASING_MANAGER':
      return '구매담당'
    case 'BUSINESS_INNOVATOR':
      return '경영 혁신가'
    case 'AGILE_COACH':
      return '애자일코치'

    // 마케팅
    case 'MARKETING_MANAGER':
      return '마케팅 매니저'
    case 'DIGITAL_MARKETER':
      return '디지털 마케터'
    case 'CONTENT_MARKETER':
      return '콘텐츠 마케터'
    case 'PERFORMANCE_MARKETER':
      return '퍼포먼스 마케터'
    case 'BRAND_MARKETER':
      return '브랜드 마케터'
    case 'GLOBAL_MARKETING_MANAGER':
      return '글로벌 마케팅 매니저'
    case 'SNS_MARKETER':
      return 'SNS 마케터'
    case 'PR_SPECIALIST':
      return 'PR 전문가'
    case 'GROWTH_HACKER':
      return '그로스 해커'
    case 'MARKETING_DIRECTOR':
      return '마케팅 디렉터'
    case 'MARKET_RESEARCHER':
      return '마켓 리서치'

    // 디자인
    case 'UI_UX_DESIGNER':
      return 'UI/UX 디자이너'
    case 'WEB_DESIGNER':
      return '웹 디자이너'
    case 'GRAPHIC_DESIGNER':
      return '그래픽 디자이너'
    case 'SPACE_DESIGNER':
      return '공간 디자이너'
    case 'MOTION_DESIGNER':
      return '영상/모션 디자이너'
    case 'FASHION_DESIGNER':
      return '패션 디자이너'
    case 'ART_DIRECTOR':
      return '아트 디렉터'
    case 'INDUSTRIAL_DESIGNER':
      return '산업 디자이너'
    case 'FURNITURE_DESIGNER':
      return '가구 디자이너'
    case 'LANDSCAPE_DESIGNER':
      return '조경 디자이너'

    // 영업 / CS / 유통
    case 'INTERNATIONAL_SALES':
      return '해외영업'
    case 'TECHNICAL_SALES':
      return '기술영업'
    case 'SOLUTION_CONSULTANT':
      return '솔루션 컨설턴트'
    case 'MEDIA_SALES':
      return '미디어 세일즈'
    case 'CUSTOMER_SUCCESS_MANAGER':
      return '고객성공매니저'
    case 'SALES_ENGINEER':
      return '세일즈 엔지니어'

    case 'GLOBAL_CS_MANAGER':
      return '글로벌 CS 매니저'
    case 'RETAIL_MD':
      return '리테일 MD'
    case 'CUSTOMER_SUPPORT':
      return '고객 지원/상담'
    case 'FASHION_MD':
      return '패션 MD'
    case 'CRM_SPECIALIST':
      return 'CRM 전문가'
    case 'RECEPTIONIST':
      return '리셉션'
    case 'TRAVEL_AGENT':
      return '여행 에이전트'
    case 'FLIGHT_ATTENDANT':
      return '승무원'
    case 'STORE_CLERK':
      return '매장점원'
    case 'TOURISM_WORKER':
      return '관광숙박업 종사자'

    // 콘텐츠 / 창작
    case 'INTERPRETER':
      return '통역사'
    case 'TRANSLATOR':
      return '번역가'
    case 'LOCALIZATION_SPECIALIST':
      return '로컬라이제이션 전문가'
    case 'CONTENT_CREATOR':
      return '콘텐츠 크리에이터'
    case 'VIDEO_EDITOR':
      return '영상 편집가'
    case 'VIDEO_PRODUCER':
      return '비디오 제작'
    case 'WRITER':
      return '작가'
    case 'PHOTOGRAPHER':
      return '사진작가'
    case 'JOURNALIST':
      return '저널리스트'
    case 'CURATOR':
      return '큐레이터'

    // 엔지니어링 / 제조
    case 'ELECTRICAL_ENGINEER':
      return '전자 엔지니어'
    case 'ROBOTICS_AUTOMATION_ENGINEER':
      return '로봇/자동화'
    case 'MECHANICAL_ENGINEER':
      return '기계 엔지니어'
    case 'CAD_3D_DESIGNER':
      return 'CAD/3D 설계자'
    case 'ELECTRIC_ENGINEER':
      return '전기 엔지니어'
    case 'CONTROL_ENGINEER':
      return '제어 엔지니어'
    case 'PRODUCT_ENGINEER':
      return '제품 엔지니어'
    case 'ELECTROMECHANICAL_ENGINEER':
      return '전자기계 공학자'
    case 'EQUIPMENT_ENGINEER':
      return '장비 엔지니어'
    case 'QA_ENGINEER':
      return 'QA 엔지니어'
    case 'INDUSTRIAL_ENGINEER':
      return '산업 엔지니어'
    case 'RF_ENGINEER':
      return 'RF 엔지니어'
    case 'CHEMICAL_ENGINEER':
      return '화학공학 엔지니어'
    case 'AEROSPACE_ENGINEER':
      return '항공우주 엔지니어'
    case 'IC_ENGINEER':
      return 'I&C 엔지니어'
    case 'MATERIAL_ENGINEER':
      return '재료공학자'
    case 'PLANT_ENGINEER':
      return '플랜트 엔지니어'
    case 'PLASTIC_ENGINEER':
      return '플라스틱 엔지니어'
    case 'QC_ENGINEER':
      return 'QC 엔지니어'
    case 'STRUCTURAL_ENGINEER':
      return '구조공학 엔지니어'
    case 'CONSTRUCTION_ENGINEER':
      return '건설 엔지니어'
    case 'CIVIL_ENGINEER':
      return '토목 엔지니어'
    case 'ENVIRONMENTAL_ENGINEER':
      return '환경 엔지니어'
    case 'PRODUCTION_ENGINEER':
      return '생산공학 엔지니어'
    case 'RND_RESEARCHER':
      return 'R&D / 연구원'

    // HR / 교육
    case 'GLOBAL_HR_MANAGER':
      return '글로벌 HR 매니저'
    case 'RECRUITER':
      return '리크루터'
    case 'HR_CONSULTANT':
      return 'HR 컨설턴트'
    case 'TECH_TRAINER':
      return '기술 교육'
    case 'INHOUSE_TRAINER':
      return '사내 강사'

    // 게임
    case 'GAME_PLANNER':
      return '게임 기획자'
    case 'GAME_ARTIST':
      return '게임 아티스트'
    case 'GAME_CLIENT_DEVELOPER':
      return '게임 클라이언트 개발자'
    case 'UNITY_DEVELOPER':
      return '유니티 개발자'
    case 'GAME_GRAPHIC_DESIGNER':
      return '게임 그래픽 디자이너'
    case 'GAME_SERVER_DEVELOPER':
      return '게임 서버 개발자'
    case 'MOBILE_GAME_DEVELOPER':
      return '모바일 게임 개발자'
    case 'UNREAL_DEVELOPER':
      return '언리얼 개발자'

    // 금융
    case 'INVESTMENT_BANKER':
      return '투자은행가'
    case 'ASSET_MANAGER':
      return '자산 운용가'
    case 'FINANCIAL_ENGINEER':
      return '금융공학자'

    // 제조/생산 기술직
    case 'MACHINE_TECHNICIAN':
      return '기계제작 기술자'
    case 'MANUFACTURING_TEST_ENGINEER':
      return '제조 테스트 엔지니어'
    case 'MANUFACTURING_ENGINEER':
      return '제조 엔지니어'
    case 'MANUFACTURING_CHEMIST':
      return '제조 화학자'
    case 'SEMICONDUCTOR_DISPLAY_ENGINEER':
      return '반도체/디스플레이 엔지니어'
    case 'PRODUCTION_WORKER':
      return '생산직 종사자'

    // 교육
    case 'INSTRUCTOR':
      return '강사'
    case 'LANGUAGE_EDUCATOR':
      return '외국어교육'

    // 헬스케어 / 바이오
    case 'BIOTECH_RESEARCHER':
      return '생명공학 연구원'
    case 'CLINICAL_RESEARCHER':
      return '임상시험 연구원'
    case 'MICROBIOLOGIST':
      return '미생물학자'
    case 'HOSPITAL_COORDINATOR':
      return '병원 코디네이터'
    case 'PHARMACEUTICAL_CHEMIST':
      return '약학 분석 화학자'
    case 'GENETIC_ENGINEER':
      return '유전공학자'
    case 'CAREGIVER':
      return '요양보호사'

    // 물류 / 무역
    case 'LOGISTICS_MANAGER':
      return '물류담당'
    case 'LOGISTICS_ANALYST':
      return '물류 분석가'
    case 'EXPORT_IMPORT_OFFICER':
      return '수출입사무'
    case 'TRADE_OFFICER':
      return '무역사무'
    case 'BUYER_MANAGER':
      return '바이어관리/상담/개발'
    case 'AIR_TRANSPORT_AGENT':
      return '항공 운송'
    case 'MARINE_TRANSPORT_AGENT':
      return '해운/해양 운송'
    case 'LOGISTICS_FIELD_WORKER':
      return '물류 현장직 종사자'

    // 식음료
    case 'FOOD_SERVICE_WORKER':
      return '외식업 종사자'
    case 'CHEF':
      return '요리사'
    case 'MENU_DEVELOPER':
      return '메뉴개발'
    case 'BARTENDER':
      return '바텐더'
    case 'SOMMELIER':
      return '소믈리에'
    case 'FOOD_STYLIST':
      return '푸드스타일리스트'

    // 건설/시설
    case 'ARCHITECT':
      return '건축가'
    case 'CONSTRUCTION_SUPERVISOR':
      return '건축 감리자'
    case 'MAINTENANCE_MANAGER':
      return '유지보수 관리자'
    case 'CONSTRUCTION_WORKER':
      return '건설 현장직 종사자'
    case 'WELDER':
      return '용접공'
    case 'CARPENTER':
      return '목수'
    case 'HEAVY_EQUIPMENT_TECHNICIAN':
      return '중장비 기술자'

    // 엔터테인먼트
    case 'MODEL':
      return '모델'
    case 'ACTOR':
      return '배우'
    case 'SHOW_HOST':
      return '방송 진행자'

    default:
      return ''
  }
}
export function getLanguageLabel(lang: LanguageType): string {
  switch (lang) {
    case 'ENGLISH':
      return '영어'
    case 'CHINESE':
      return '중국어'
    case 'HINDI':
      return '힌디어'
    case 'SPANISH':
      return '스페인어'
    case 'FRENCH':
      return '프랑스어'
    case 'ARABIC':
      return '아랍어'
    case 'BENGALI':
      return '벵골어'
    case 'PORTUGUESE':
      return '포르투갈어'
    case 'RUSSIAN':
      return '러시아어'
    case 'URDU':
      return '우르두어'
    case 'INDONESIAN':
      return '인도네시아어'
    case 'GERMAN':
      return '독일어'
    case 'JAPANESE':
      return '일본어'
    case 'SWAHILI':
      return '스와힐리어'
    case 'MARATHI':
      return '마라티어'
    case 'TELUGU':
      return '텔루구어'
    case 'TURKISH':
      return '튀르키예어'
    case 'TAMIL':
      return '타밀어'
    case 'VIETNAMESE':
      return '베트남어'
    case 'KOREAN':
      return '한국어'
    case 'ITALIAN':
      return '이탈리아어'
    case 'PERSIAN':
      return '페르시아어'
    case 'POLISH':
      return '폴란드어'
    case 'UKRAINIAN':
      return '우크라이나어'
    default:
      return ''
  }
}

export const getJobCategoryLabel = (code: string): string => {
  const category = JOB_CATEGORY_LIST.find((cat) => cat.code === code)
  return category?.label || '알 수 없음'
}

export const getVisaLabel = (code: string): string => {
  const visa = VISA_LIST.find((v) => v.code === code)
  return visa?.label || '알 수 없음'
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
