import { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { siteConfig } from '@/config/site'
import { Shield, Eye, Lock, Database, Globe, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - AI Tools Directory',
  description: 'Privacy policy for AI Tools Directory, explaining how we collect, use and protect your personal information',
  keywords: ['privacy policy', 'personal information protection', 'data security', 'AI tools directory'],
}

export default function PrivacyPage() {
  return (
    <>
      <div data-wrapper='' className='border-grid flex flex-1 flex-col min-h-svh'>
        <SiteHeader />
        <main className='flex flex-1 flex-col'>
          {/* Hero Section */}
          <section className='bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 py-16'>
            <div className='container-wrapper'>
              <div className='mx-auto max-w-4xl text-center'>
                <div className='mb-6 flex justify-center'>
                  <div className='flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30'>
                    <Shield className='h-8 w-8 text-blue-600 dark:text-blue-400' />
                  </div>
                </div>
                <h1 className='mb-4 text-4xl font-bold text-gray-900 dark:text-white'>
                  Privacy Policy
                </h1>
                <p className='text-lg text-gray-600 dark:text-gray-300'>
                  We value your privacy and are committed to protecting your personal information
                </p>
                <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
                  Last updated: January 1, 2024
                </p>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className='container-wrapper py-16'>
            <div className='mx-auto max-w-4xl space-y-12'>
              {/* 概述 */}
              <div className='space-y-6'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30'>
                    <Eye className='h-5 w-5 text-blue-600 dark:text-blue-400' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Overview</h2>
                </div>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>
                    AI Tools Directory (hereinafter "we") is committed to protecting your privacy. This privacy policy explains how we collect, use, store and protect your personal information.
                    By using our services, you agree to the data processing methods described in this privacy policy.
                  </p>
                  <p>
                    We are committed to complying with relevant laws and regulations, including but not limited to the Personal Information Protection Law of the People's Republic of China, the Cybersecurity Law of the People's Republic of China, etc.
                  </p>
                </div>
              </div>

              {/* 信息收集 */}
              <div className='space-y-6'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30'>
                    <Database className='h-5 w-5 text-green-600 dark:text-green-400' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Information We Collect</h2>
                </div>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>1. Automatically Collected Information</h3>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li><strong>Access logs:</strong> Including IP address, browser type, operating system, access time, etc.</li>
                    <li><strong>Device information:</strong> Device type, screen resolution, language settings, etc.</li>
                    <li><strong>Usage data:</strong> Page visits, click behavior, dwell time, etc.</li>
                    <li><strong>Cookie data:</strong> Used to improve user experience and website functionality</li>
                  </ul>
                  
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>2. Information You Actively Provide</h3>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li><strong>Search queries:</strong> Content you enter in the search box</li>
                    <li><strong>Feedback information:</strong> Feedback and suggestions you provide through contact</li>
                  </ul>
                </div>
              </div>

              {/* 信息使用 */}
              <div className='space-y-6'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30'>
                    <Globe className='h-5 w-5 text-purple-600 dark:text-purple-400' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>How We Use Information</h2>
                </div>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>We use the collected information for the following purposes:</p>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li>Provide and improve our services</li>
                    <li>Analyze website usage to optimize user experience</li>
                    <li>Personalize search results and recommended content</li>
                    <li>Detect and prevent fraud and abuse</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Communicate with you and respond to your feedback</li>
                  </ul>
                </div>
              </div>

              {/* 信息共享 */}
              <div className='space-y-6'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30'>
                    <Lock className='h-5 w-5 text-orange-600 dark:text-orange-400' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Information Sharing</h2>
                </div>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>We do not sell, rent or trade your personal information. We may only share your information in the following circumstances:</p>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li><strong>Service providers:</strong> Trusted third-party service providers who help us operate the website</li>
                    <li><strong>Legal requirements:</strong> According to laws, regulations or government requirements</li>
                    <li><strong>Security protection:</strong> To protect our rights, property or security</li>
                    <li><strong>Business transfer:</strong> In case of business merger, acquisition or asset transfer</li>
                  </ul>
                </div>
              </div>

              {/* 数据安全 */}
              <div className='space-y-6'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30'>
                    <Shield className='h-5 w-5 text-red-600 dark:text-red-400' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Data Security</h2>
                </div>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>We take appropriate technical and organizational measures to protect your personal information:</p>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li>使用加密技术保护数据传输和存储</li>
                    <li>定期更新安全措施和系统</li>
                    <li>限制员工对个人信息的访问权限</li>
                    <li>定期进行安全审计和评估</li>
                  </ul>
                </div>
              </div>

              {/* Cookie 使用 */}
              <div className='space-y-6'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Cookie 使用</h2>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>我们使用 Cookie 来改善您的浏览体验：</p>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li><strong>必要 Cookie：</strong>网站基本功能所必需</li>
                    <li><strong>分析 Cookie：</strong>帮助我们了解网站使用情况</li>
                    <li><strong>偏好 Cookie：</strong>记住您的设置和偏好</li>
                  </ul>
                  <p>您可以通过浏览器设置管理 Cookie，但禁用某些 Cookie 可能影响网站功能。</p>
                </div>
              </div>

              {/* 第三方服务 */}
              <div className='space-y-6'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>第三方服务</h2>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>我们的网站可能包含第三方服务的链接或集成，包括：</p>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li>Google Analytics（网站分析）</li>
                    <li>社交媒体平台</li>
                    <li>外部工具和资源</li>
                  </ul>
                  <p>这些第三方服务有自己的隐私政策，我们建议您查看其隐私政策。</p>
                </div>
              </div>

              {/* 儿童隐私 */}
              <div className='space-y-6'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>儿童隐私</h2>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>
                    我们的服务不面向13岁以下的儿童。我们不会故意收集13岁以下儿童的个人信息。
                    如果您认为我们可能收集了儿童的个人信息，请立即联系我们。
                  </p>
                </div>
              </div>

              {/* 您的权利 */}
              <div className='space-y-6'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>您的权利</h2>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>根据相关法律法规，您享有以下权利：</p>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li><strong>访问权：</strong>了解我们是否处理您的个人信息</li>
                    <li><strong>更正权：</strong>要求更正不准确的个人信息</li>
                    <li><strong>删除权：</strong>要求删除您的个人信息</li>
                    <li><strong>限制权：</strong>要求限制处理您的个人信息</li>
                    <li><strong>可携带权：</strong>以结构化格式获取您的个人信息</li>
                  </ul>
                </div>
              </div>

              {/* 政策更新 */}
              <div className='space-y-6'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>政策更新</h2>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>
                    我们可能会不时更新本隐私政策。重大变更时，我们会在网站上发布通知。
                    建议您定期查看本政策以了解最新信息。
                  </p>
                </div>
              </div>

              {/* 联系我们 */}
              <div className='space-y-6'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30'>
                    <Mail className='h-5 w-5 text-indigo-600 dark:text-indigo-400' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>联系我们</h2>
                </div>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>如果您对本隐私政策有任何疑问或需要行使您的权利，请通过以下方式联系我们：</p>
                  <div className='ml-6 space-y-2'>
                    <p><strong>邮箱：</strong>privacy@{siteConfig.url.replace('https://', '')}</p>
                    <p><strong>网站：</strong><a href={siteConfig.url} className='text-blue-600 hover:underline dark:text-blue-400'>{siteConfig.url}</a></p>
                    <p><strong>GitHub：</strong><a href={siteConfig.links.github} className='text-blue-600 hover:underline dark:text-blue-400'>{siteConfig.links.github}</a></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
