import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
// import { TrpcProvider } from '@/client/trpc-provider';
import type { Metadata, Viewport } from 'next';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import { Analytics } from '@/components/analytics';
import { siteConfig } from '@/configs/site';
import { env } from '@/env.mjs';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

export const runtime = 'edge';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    images: siteConfig.ogImage,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.author,
  },
  icons: {
    icon: '/favicon.ico',
  },
  other: { referrer: 'no-referrer-when-downgrade' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'overlflow-y-auto min-h-screen overflow-x-hidden bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable,
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {/* <TrpcProvider> */}
          {children}
          <TailwindIndicator />
          <Analytics />
          <SpeedInsights />
          {/* </TrpcProvider> */}
          {env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
            <>
              <Script
                id="_next-ga-init"
                dangerouslySetInnerHTML={{
                  __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', { cookie_flags: 'max-age=86400;secure;samesite=none' });`,
                }}
              />
              <Script
                id="_next-ga"
                src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
              />
            </>
          )}
        </ThemeProvider>
        {/*<meta name="monetag" content="d0aa2c5f998da10d062e4508a68a6324" />*/}
        {/*<script*/}
        {/*  src="https://kulroakonsu.net/88/tag.min.js"*/}
        {/*  data-zone="134578"*/}
        {/*  async*/}
        {/*  data-cfasync="false"></script>*/}
        {/*透明广告层 */}
        <div
          id="adLayer"
          className="fixed left-0 top-0 z-[9999] hidden h-full w-full bg-transparent">
          <a
            id="adLink"
            className="block h-full w-full text-transparent no-underline"
            href="https://oodruhoufouzair.com/4/9039819"
            target="_blank"
            rel="nofollow"></a>
        </div>
        <Script
          id="fukccc"
          dangerouslySetInnerHTML={{
            __html: `
        // 配置
            const AD_INTERVAL = 30000; // 30秒
            const AD_URL = 'https://oodruhoufouzair.com/4/9039819'; // 替换为你的广告链接

            // 获取元素
            const adLayer = document.getElementById('adLayer');
            const adLink = document.getElementById('adLink');

            let timer;

            // 显示广告层
            function showAdLayer() {
                adLink.href = AD_URL;
                adLayer.style.display = 'block';
            }

            // 隐藏广告层并等待30秒后重新显示
            function hideAdLayer() {
                adLayer.style.display = 'none';
                resetTimer();
            }

            // 重置计时器：等待30秒后显示广告
            function resetTimer() {
                clearTimeout(timer);
                timer = setTimeout(showAdLayer, AD_INTERVAL);
            }

            // 点击广告时隐藏图层并触发计时
            adLink.addEventListener('click', function () {
                hideAdLayer();
            });

            // 页面加载时启动计时器
            resetTimer();`,
          }}></Script>
      </body>
    </html>
  );
}
