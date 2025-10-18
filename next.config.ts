import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // WebP와 AVIF 우선 사용
    formats: ['image/avif', 'image/webp'],

    // 🔥 디바이스 크기 - 실제 사용되는 크기에 맞게
    deviceSizes: [375, 425, 768, 1024],

    // 🔥 이미지 크기 - 실제 사용되는 크기
    imageSizes: [50, 100, 188, 210, 335, 375, 600, 800],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coreforwork.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // 성능 최적화
  compress: true,

  // 정적 생성 시간 증가 허용 (더 나은 최적화)
  // 각 정적 페이지를 생성할 때 최대 120초(2분)까지 대기한다.
  // 만약 120초 이내에 완료되지 않으면 빌드를 실패처리한다.
  staticPageGenerationTimeout: 120,

  // 🔥 bfcache 지원
  experimental: {
    optimizePackageImports: ['@/components', '@/utils'],
  },

  // 🔥 Headers 설정 - bfcache 최적화
  async headers() {
    return [
      // 🔥 1. 폰트 - 매우 길게 (1년)
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
            // max-age=31536000 = 1년
            // immutable = 절대 변하지 않음
          },
        ],
      },

      // 🔥 2. 이미지 - 길게 (30일)
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
            // max-age=2592000 = 30일
            // stale-while-revalidate=86400 = 24시간 더 낡은 캐시 사용 가능
          },
        ],
      },

      // 🔥 3. SVG 로고 - 길게 (1년)
      {
        source: '/*.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },

      // 🔥 4. JavaScript/CSS - 중간 정도 (1년, 파일 해시 기반)
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
            // Next.js가 파일 해시로 관리하므로 안전함
          },
        ],
      },

      // 🔥 5. HTML 페이지 - 짧게 (1시간)
      {
        source: '/:path*',
        headers: [
          // bfcache 방해 제거
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
          // 보안 헤더
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ]
  },
}

export default nextConfig
