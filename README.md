# Korfit - 외국인 취업 지원 플랫폼

> **외국인을 위한 한국 취업 로드맵과 채용 솔루션을 제공하는 종합 플랫폼**

## 📋 프로젝트 개요

Korfit는 한국에서 취업을 희망하는 외국인들을 위한 종합 취업 지원 플랫폼입니다. 10단계 역량 검증 시스템, AI 기반 취업 내비게이션, 포트폴리오 공유, 그리고 기업과 구직자를 연결하는 채용 시스템을 제공합니다.

### 주요 기능
- **사용자 관리**: 피고용인(Employee)과 고용인(Employer) 역할 기반 시스템
- **채용 공고**: 다단계 공고 등록 및 관리 시스템
- **리뷰 시스템**: 채용 후기 및 포트폴리오 공유
- **스터디**: 취업 역량 강화를 위한 스터디 참여
- **AI 코칭**: 개인 맞춤형 취업 가이드 제공

## 🛠 기술 스택

### Core Framework
- **Next.js 14** (App Router) - React 기반 풀스택 프레임워크
- **TypeScript** - 타입 안전성과 개발 생산성

### UI & Styling
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **Framer Motion** - 애니메이션 라이브러리
- **Custom Design System** - 재사용 가능한 컴포넌트 시스템

### State Management & Data
- **Zustand** - 경량 상태 관리 라이브러리
- **React Hook Form** - 폼 상태 관리
- **React Query** (예정) - 서버 상태 관리

### External Services
- **Daum 우편번호 API** - 주소 검색 서비스
- **RESTCountries API** - 국가 정보 조회
- **AWS S3** - 파일 업로드 및 저장

## 🏗 아키텍처 구조

### 레이어 분리 아키텍처
```
src/
├── app/                    # 페이지 라우팅 (Presentation Layer)
├── components/             # 재사용 가능한 UI 컴포넌트
│   ├── common/            # 공통 컴포넌트
│   ├── landing/           # 랜딩 페이지 컴포넌트
│   ├── recruit/           # 채용 관련 컴포넌트
│   ├── review/            # 리뷰 관련 컴포넌트
│   └── sign-up/          # 회원가입 관련 컴포넌트
├── store/                 # 상태 관리 (Application Layer)
├── lib/                   # API 통신 및 유틸리티 (Infrastructure Layer)
├── types/                 # 타입 정의 (Domain Layer)
└── assets/               # 정적 자원
```

### 도메인별 구조
- **Auth Domain**: 인증, 회원가입, 사용자 관리
- **Recruit Domain**: 채용 공고 생성, 조회, 관리
- **Review Domain**: 후기 작성, 포트폴리오 공유
- **Common Domain**: 공통 컴포넌트 및 유틸리티

## 🔐 API 연동 및 인증

### REST API 통신
```typescript
// 인증이 필요한 API 호출을 위한 공통 함수
export const authorizedFetch = async (input: RequestInfo, init: RequestInit = {}) => {
  const accessToken = Cookies.get('accessToken')
  // JWT 토큰 자동 갱신 로직 포함
}
```

### 인증 플로우
1. JWT Access Token + Refresh Token 방식
2. 토큰 만료 시 자동 갱신
3. 역할 기반 라우팅 및 권한 관리

### 주요 API 엔드포인트
- **Authentication**: `/api/v2/member/*`
- **Recruitment**: `/api/v2/recruit/*`
- **File Upload**: `/api/v1/file/upload`

## 🚀 설치 및 실행

### 환경 요구사항
- Node.js 18.x 이상
- npm 또는 yarn

### 설치
```bash
# 의존성 설치
npm install

# 환경변수 설정
cp .env.example .env.local
```

### 환경변수 설정
```env
NEXT_PUBLIC_BASE_URL=http://localhost:8080
NEXT_PUBLIC_API_VERSION=v2
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드 및 프로덕션 실행
```bash
npm run build
npm run start
```

## 📱 주요 페이지 구조

### 라우팅 구조
- `/` - 메인 페이지 (채용 공고 목록)
- `/login` - 로그인 페이지
- `/sign-up` - 회원가입 (다단계 폼)
- `/recruit-form` - 채용 공고 등록 (3단계 프로세스)
- `/review` - 채용 후기 목록
- `/review/[id]` - 후기 상세 페이지
- `/[recruitId]` - 채용 공고 상세 페이지

### 다단계 폼 시스템
```typescript
// 채용 공고 등록: 3단계 프로세스
// Step 1: 회사 정보
// Step 2: 공고 정보  
// Step 3: 상세 정보
```

## 🧩 컴포넌트 설계 패턴

### 컴포넌트 분류
- **Page Components**: 페이지별 컨테이너 컴포넌트
- **Feature Components**: 도메인별 기능 컴포넌트
- **Common Components**: 재사용 가능한 UI 컴포넌트
- **Form Components**: 폼 관련 특화 컴포넌트

### 상태 관리 패턴
```typescript
// Zustand를 활용한 도메인별 상태 분리
interface AuthStore {
  role: 'Employee' | 'Employer'
  employeeSignUp: EmployeeSignUpType
  setState: (params: SetAuthStoreType) => void
}

interface RecruitStore {
  recruitPostData: RecruitInputDataType
  s3CompanyLogoUrl: string | ArrayBuffer | null
  setState: (params: SetRecruitStoreType) => void
}
```

## 📋 개발 가이드라인

### 코딩 컨벤션
- **컴포넌트**: PascalCase (예: `RecruitCard`)
- **파일명**: PascalCase for components, camelCase for utilities
- **타입**: Interface 또는 Type alias 사용
- **상태**: Zustand store 패턴 준수

### 폴더 구조 원칙
- 도메인별 컴포넌트 분리
- 공통 컴포넌트와 도메인 컴포넌트 구분
- 타입 정의의 명확한 분리

### 성능 최적화
- Next.js Image 컴포넌트 활용
- 동적 임포트를 통한 코드 스플리팅
- 메모이제이션 패턴 적용

## 🔧 유지보수 가이드

### 새로운 기능 추가 시
1. 해당 도메인의 types 먼저 정의
2. API 통신 함수를 lib 폴더에 작성
3. Zustand store 설정
4. 컴포넌트 개발 및 페이지 연동

### 디버깅 및 로깅
- 개발 환경에서 상태 변화 로깅
- API 호출 결과 콘솔 출력
- 에러 바운더리 적용 (예정)

## 📄 라이선스

이 프로젝트는 [라이선스명]에 따라 라이선스가 부여됩니다.

## 🤝 기여 방법

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트 관련 문의사항이 있으시면 언제든 연락 주세요.

---

**Korfit Team** - 외국인의 성공적인 한국 취업을 위한 토탈 솔루션