import { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { siteConfig } from '@/config/site'
import { Shield, Eye, Lock, Database, Globe, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: '隐私政策 - AI 工具导航',
  description: 'AI 工具导航的隐私政策，说明我们如何收集、使用和保护您的个人信息',
  keywords: ['隐私政策', '个人信息保护', '数据安全', 'AI工具导航'],
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
                  隐私政策
                </h1>
                <p className='text-lg text-gray-600 dark:text-gray-300'>
                  我们重视您的隐私，致力于保护您的个人信息安全
                </p>
                <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
                  最后更新：2024年1月1日
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
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>概述</h2>
                </div>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>
                    AI 工具导航（以下简称"我们"）致力于保护您的隐私。本隐私政策说明了我们如何收集、使用、存储和保护您的个人信息。
                    使用我们的服务即表示您同意本隐私政策中描述的数据处理方式。
                  </p>
                  <p>
                    我们承诺遵守相关法律法规，包括但不限于《中华人民共和国个人信息保护法》、《中华人民共和国网络安全法》等。
                  </p>
                </div>
              </div>

              {/* 信息收集 */}
              <div className='space-y-6'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30'>
                    <Database className='h-5 w-5 text-green-600 dark:text-green-400' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>我们收集的信息</h2>
                </div>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>1. 自动收集的信息</h3>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li><strong>访问日志：</strong>包括IP地址、浏览器类型、操作系统、访问时间等</li>
                    <li><strong>设备信息：</strong>设备类型、屏幕分辨率、语言设置等</li>
                    <li><strong>使用数据：</strong>页面访问、点击行为、停留时间等</li>
                    <li><strong>Cookie数据：</strong>用于改善用户体验和网站功能</li>
                  </ul>
                  
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>2. 您主动提供的信息</h3>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li><strong>搜索查询：</strong>您在搜索框中输入的内容</li>
                    <li><strong>反馈信息：</strong>您通过联系我们提供的反馈和建议</li>
                  </ul>
                </div>
              </div>

              {/* 信息使用 */}
              <div className='space-y-6'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30'>
                    <Globe className='h-5 w-5 text-purple-600 dark:text-purple-400' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>信息使用方式</h2>
                </div>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>我们使用收集的信息用于以下目的：</p>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li>提供和改进我们的服务</li>
                    <li>分析网站使用情况，优化用户体验</li>
                    <li>个性化搜索结果和推荐内容</li>
                    <li>检测和防止欺诈、滥用行为</li>
                    <li>遵守法律法规要求</li>
                    <li>与您沟通，回应您的反馈</li>
                  </ul>
                </div>
              </div>

              {/* 信息共享 */}
              <div className='space-y-6'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30'>
                    <Lock className='h-5 w-5 text-orange-600 dark:text-orange-400' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>信息共享</h2>
                </div>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>我们不会出售、出租或交易您的个人信息。仅在以下情况下，我们可能会共享您的信息：</p>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li><strong>服务提供商：</strong>与帮助我们运营网站的可信第三方服务商</li>
                    <li><strong>法律要求：</strong>根据法律法规或政府要求</li>
                    <li><strong>安全保护：</strong>保护我们的权利、财产或安全</li>
                    <li><strong>业务转让：</strong>在业务合并、收购或资产转让时</li>
                  </ul>
                </div>
              </div>

              {/* 数据安全 */}
              <div className='space-y-6'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30'>
                    <Shield className='h-5 w-5 text-red-600 dark:text-red-400' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>数据安全</h2>
                </div>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>我们采取适当的技术和组织措施来保护您的个人信息：</p>
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
