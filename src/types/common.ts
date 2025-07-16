export interface ApiResponse<T> {
  message: string
  status: number
  success: boolean
  data?: T
}

export type CountryType = {
  name: {
    common: string // 일반적으로 사용하는 나라 이름
    official: string // 공식 나라 이름
    nativeName?: {
      [key: string]: {
        official: string
        common: string
      }
    }
  }
  tld?: string[] // 최상위 도메인 (예: ['.kr'])
  cca2: string // 2자리 국가 코드 (ISO 3166-1 alpha-2)
  ccn3?: string // 3자리 국가 코드 (ISO 3166-1 numeric)
  cca3: string // 3자리 국가 코드 (ISO 3166-1 alpha-3)
  cioc?: string // IOC 국가 코드
  independent?: boolean // 독립 여부
  status: string // 상태 (예: "officially-assigned")
  unMember: boolean // UN 회원국 여부
  currencies?: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  idd?: {
    root?: string // 국제 전화 접두어 (예: "+")
    suffixes?: string[] // 접미사
  }
  capital?: string[] // 수도
  altSpellings?: string[] // 다른 이름들
  region: string // 대륙 (예: "Asia")
  subregion?: string // 세부 대륙 (예: "Eastern Asia")
  languages?: {
    [key: string]: string // 언어 코드와 이름
  }
  translations?: {
    [key: string]: {
      official: string
      common: string
    }
  }
  latlng: [number, number] // 위도와 경도
  landlocked: boolean // 내륙국 여부
  borders?: string[] // 인접 국가 코드
  area: number // 면적 (제곱 킬로미터)
  flag: string // 깃발 이모지 (예: "🇰🇷")
  demonyms?: {
    [key: string]: {
      f: string // 여성형
      m: string // 남성형
    }
  }
  population: number // 인구
  fifa?: string // FIFA 국가 코드
  car: {
    signs: string[] // 차량 국가 코드
    side: string // 차량 운전 방향 ("left" or "right")
  }
  timezones: string[] // 시간대
  continents: string[] // 대륙
  flags: {
    png: string // PNG 이미지 URL
    svg: string // SVG 이미지 URL
    alt?: string // 깃발 대체 텍스트
  }
  coatOfArms?: {
    png?: string // 문장 PNG 이미지 URL
    svg?: string // 문장 SVG 이미지 URL
  }
  startOfWeek: string // 주 시작 요일 (예: "monday")
  capitalInfo?: {
    latlng?: [number, number] // 수도 위도와 경도
  }
  postalCode?: {
    format: string // 우편번호 형식
    regex?: string // 우편번호 정규식
  }
}
