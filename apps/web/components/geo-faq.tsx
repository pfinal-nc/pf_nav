const faqs = [
  {
    q: 'What is AI Tools Directory？AI 工具导航是什么？',
    a: 'AI Tools Directory（nav.friday-go.icu）由 PFinalClub 维护，是一个免费的全球 AI 工具导航站，收录 ChatGPT、Claude、Midjourney、Cursor、Kling、DeepSeek 等对话、绘画、视频、编程与办公类工具，并持续更新。',
  },
  {
    q: '网站是否免费？',
    a: '浏览本站完全免费。各第三方工具本身可能提供免费版或付费版，请以官方站点说明为准。',
  },
  {
    q: '覆盖哪些分类？',
    a: '覆盖 AI 对话、AI 绘画、AI 视频、AI 音乐、AI 写作、AI 翻译、AI 编程、AI 办公、AI 平台、AI 数据分析、AI 设计等分类。',
  },
  {
    q: '2026 年有哪些值得关注的 AI 工具？',
    a: '对话：ChatGPT、Claude、Gemini、DeepSeek、Kimi；绘画：Midjourney、Flux、即梦；视频：Kling、Sora、Runway；编程：Cursor、Windsurf、v0、GitHub Copilot。完整列表见上方分类。',
  },
  {
    q: '如何提交新工具？',
    a: '可通过 GitHub（github.com/pfinal-nc）反馈。我们会审核质量与相关性后再决定是否收录。',
  },
]

export function GeoFaq() {
  return (
    <section
      id="faq"
      className="container-wrapper py-16"
      aria-labelledby="faq-title"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="faq-title"
          className="mb-3 text-center text-3xl font-bold text-gray-900 dark:text-white"
        >
          FAQ · 常见问题
        </h2>
        <p className="mb-10 text-center text-gray-600 dark:text-gray-400">
          Clear answers for search engines and generative AI assistants (SEO + GEO).
        </p>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-gray-200 bg-white p-5 open:shadow-sm dark:border-gray-800 dark:bg-gray-950"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <summary
                className="cursor-pointer list-none font-semibold text-gray-900 dark:text-white [&::-webkit-details-marker]:hidden"
                itemProp="name"
              >
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-gray-400 transition group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </span>
              </summary>
              <div
                className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
