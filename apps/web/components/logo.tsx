/*
 * @Author: pfinal liuxuzhu@smm.cn
 * @Date: 2025-06-27 16:29:46
 * @LastEditors: pfinal liuxuzhu@smm.cn
 * @LastEditTime: 2025-07-03 17:16:01
 * @FilePath: /m-nav/apps/web/components/logo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from 'next/image'
import logoImage from '@/assets/images/logo.png'

export const Logo = ({ className }: { className?: string }) => {
  return <Image src={logoImage} alt="Logo" className={className} />
}
