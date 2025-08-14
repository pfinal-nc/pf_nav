import { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { siteConfig } from '@/config/site'
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: '使用条款 - AI 工具导航',
  description: 'AI 工具导航的使用条款，说明使用我们服务的条件和规则',
  keywords: ['使用条款', '服务条款', '用户协议', 'AI工具导航'],
}

export default function TermsPage() {
  return (
    <>
      <div data-wrapper='' className='border-grid flex flex-1 flex-col min-h-svh'>
        <SiteHeader />
        <main className='flex flex-1 flex-col'>
          {/* Hero Section */}
          <section className='bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 py-16'>
            <div className='container-wrapper'>
              <div className='mx-auto max-w-4xl text-center'>
                <div className='mb-6 flex justify-center'>
                  <div className='flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30'>
                    <FileText className='h-8 w-8 text-green-600 dark:text-green-400' />
                  </div>
                </div>
                <h1 className='mb-4 text-4xl font-bold text-gray-900 dark:text-white'>
                  使用条款
                </h1>
                <p className='text-lg text-gray-600 dark:text-gray-300'>
                  使用我们的服务前，请仔细阅读以下条款和条件
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
                    <Info className='h-5 w-5 text-blue-600 dark:text-blue-400' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>概述</h2>
                </div>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>
                    欢迎使用 AI 工具导航（以下简称"本网站"或"我们"）。本使用条款（以下简称"条款"）是您与我们之间就使用本网站服务达成的协议。
                  </p>
                  <p>
                    通过访问或使用本网站，您确认已阅读、理解并同意遵守这些条款。如果您不同意这些条款的任何部分，请不要使用我们的服务。
                  </p>
                </div>
              </div>

              {/* 服务描述 */}
              <div className='space-y-6'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30'>
                    <CheckCircle className='h-5 w-5 text-purple-600 dark:text-purple-400' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>服务描述</h2>
                </div>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>AI 工具导航提供以下服务：</p>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li>精选和整理全球优质 AI 工具资源</li>
                    <li>提供工具分类、搜索和推荐功能</li>
                    <li>分享 AI 工具使用经验和技巧</li>
                    <li>提供相关技术资讯和更新</li>
                  </ul>
                  <p>
                    我们致力于为用户提供准确、有用的信息，但不对第三方工具的功能、安全性或适用性做出保证。
                  </p>
                </div>
              </div>

              {/* 用户责任 */}
              <div className='space-y-6'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30'>
                    <AlertTriangle className='h-5 w-5 text-orange-600 dark:text-orange-400' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>用户责任</h2>
                </div>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>使用我们的服务时，您同意：</p>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li>遵守所有适用的法律法规</li>
                    <li>不从事任何可能损害网站或他人利益的活动</li>
                    <li>不尝试未经授权访问我们的系统或数据</li>
                    <li>不传播恶意软件、病毒或其他有害内容</li>
                    <li>尊重知识产权，不侵犯他人权利</li>
                    <li>对使用第三方工具的风险承担责任</li>
                  </ul>
                </div>
              </div>

              {/* 禁止行为 */}
              <div className='space-y-6'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30'>
                    <XCircle className='h-5 w-5 text-red-600 dark:text-red-400' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>禁止行为</h2>
                </div>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>您不得从事以下行为：</p>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li>使用自动化工具或脚本进行大规模访问</li>
                    <li>尝试破坏、禁用或限制网站功能</li>
                    <li>收集或存储其他用户的个人信息</li>
                    <li>发布虚假、误导性或有害信息</li>
                    <li>进行商业性垃圾邮件或营销活动</li>
                    <li>冒充他人或虚假陈述身份</li>
                    <li>违反任何第三方服务的使用条款</li>
                  </ul>
                </div>
              </div>

              {/* 知识产权 */}
              <div className='space-y-6'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30'>
                    <Scale className='h-5 w-5 text-indigo-600 dark:text-indigo-400' />
                  </div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>知识产权</h2>
                </div>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>本网站及其内容受知识产权法保护：</p>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li><strong>网站内容：</strong>包括但不限于文字、图片、设计、代码等</li>
                    <li><strong>商标：</strong>网站名称、标志等商标权</li>
                    <li><strong>版权：</strong>所有原创内容的版权</li>
                  </ul>
                  <p>
                    未经我们明确许可，您不得复制、分发、修改或创建衍生作品。
                    第三方工具的知识产权归各自所有者所有。
                  </p>
                </div>
              </div>

              {/* 免责声明 */}
              <div className='space-y-6'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>免责声明</h2>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>我们提供以下免责声明：</p>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li><strong>服务可用性：</strong>我们努力保持服务稳定，但不保证100%可用</li>
                    <li><strong>信息准确性：</strong>我们尽力确保信息准确，但不保证完全无误</li>
                    <li><strong>第三方工具：</strong>我们不对第三方工具的功能、安全性或适用性负责</li>
                    <li><strong>使用风险：</strong>您使用任何工具的风险由您自行承担</li>
                    <li><strong>数据损失：</strong>我们不承担因使用我们的服务而造成的任何数据损失</li>
                  </ul>
                </div>
              </div>

              {/* 责任限制 */}
              <div className='space-y-6'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>责任限制</h2>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>
                    在法律允许的最大范围内，我们对因使用或无法使用我们的服务而产生的任何直接、间接、偶然、特殊或后果性损害不承担责任。
                  </p>
                  <p>
                    我们的总责任不超过您为使用我们的服务而支付的金额（如果有的话），或人民币100元，以较高者为准。
                  </p>
                </div>
              </div>

              {/* 服务变更 */}
              <div className='space-y-6'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>服务变更</h2>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>我们保留以下权利：</p>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li>随时修改、暂停或终止服务</li>
                    <li>更改服务功能、界面或内容</li>
                    <li>更新这些条款</li>
                    <li>限制或拒绝特定用户访问</li>
                  </ul>
                  <p>
                    重大变更时，我们会通过网站公告或其他方式通知用户。
                    继续使用服务即表示您接受变更后的条款。
                  </p>
                </div>
              </div>

              {/* 终止 */}
              <div className='space-y-6'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>终止</h2>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>我们可能在以下情况下终止您的服务访问：</p>
                  <ul className='ml-6 space-y-2 list-disc'>
                    <li>您违反这些条款</li>
                    <li>您从事非法或有害活动</li>
                    <li>我们决定停止提供服务</li>
                    <li>法律要求终止</li>
                  </ul>
                  <p>
                    终止后，您访问服务的权利将立即停止，我们可能会删除您的相关数据。
                  </p>
                </div>
              </div>

              {/* 适用法律 */}
              <div className='space-y-6'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>适用法律</h2>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>
                    这些条款受中华人民共和国法律管辖。任何争议应通过友好协商解决，
                    协商不成的，应提交至我们所在地有管辖权的人民法院解决。
                  </p>
                </div>
              </div>

              {/* 条款更新 */}
              <div className='space-y-6'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>条款更新</h2>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>
                    我们可能会不时更新这些条款。重大变更时，我们会在网站上发布通知。
                    建议您定期查看这些条款以了解最新信息。
                  </p>
                  <p>
                    如果您不同意更新后的条款，请停止使用我们的服务。
                    继续使用服务即表示您接受更新后的条款。
                  </p>
                </div>
              </div>

              {/* 联系我们 */}
              <div className='space-y-6'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>联系我们</h2>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p>如果您对这些条款有任何疑问，请通过以下方式联系我们：</p>
                  <div className='ml-6 space-y-2'>
                    <p><strong>邮箱：</strong>terms@{siteConfig.url.replace('https://', '')}</p>
                    <p><strong>网站：</strong><a href={siteConfig.url} className='text-blue-600 hover:underline dark:text-blue-400'>{siteConfig.url}</a></p>
                    <p><strong>GitHub：</strong><a href={siteConfig.links.github} className='text-blue-600 hover:underline dark:text-blue-400'>{siteConfig.links.github}</a></p>
                  </div>
                </div>
              </div>

              {/* 确认 */}
              <div className='rounded-lg bg-green-50 dark:bg-green-900/20 p-6 border border-green-200 dark:border-green-800'>
                <div className='flex items-center gap-3 mb-4'>
                  <CheckCircle className='h-6 w-6 text-green-600 dark:text-green-400' />
                  <h3 className='text-lg font-semibold text-green-900 dark:text-green-100'>确认</h3>
                </div>
                <p className='text-green-800 dark:text-green-200'>
                  通过使用我们的服务，您确认已阅读、理解并同意遵守这些使用条款。
                  如果您代表组织使用我们的服务，您确认您有权代表该组织同意这些条款。
                </p>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
