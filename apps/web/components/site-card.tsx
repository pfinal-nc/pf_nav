import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@m-nav/ui/components/card';
import { Button } from '@m-nav/ui/components/button';
import { ArrowUpRightIcon } from 'lucide-react';

export function SiteCard({
  title,
  description,
  href,
  category,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  category: string;
  icon: string;
}) {
  return (
    <Card className='group hover:shadow-md transition-shadow rounded-sm shadow-none'>
      <CardHeader>
        <CardTitle className='flex items-center flex-row justify-between'>
          <div className='flex items-center flex-row gap-2'>
            <div className='w-5 h-5 bg-gray-300 rounded flex items-center justify-center text-xs font-bold text-gray-700'>
              {/* 如果 有图标 则显示图标 没有图标 则显示首字母 */}    
              {/* {title.charAt(0).toUpperCase()} */}
              {icon && <Image src={icon} alt={title} width={20} height={20} />}
              {!icon && <span className='text-xs font-bold text-gray-700'>{title.charAt(0).toUpperCase()}</span>}
            </div>
            <span>{title}</span>
          </div>

          <Link
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='block'
          >
            <Button
              variant='ghost'
              size='icon'
              className='opacity-0 group-hover:opacity-100 transition-opacity max-sm:opacity-100 max-sm:bg-accent'
            >
              <ArrowUpRightIcon className='w-4 h-4' />
            </Button>
          </Link>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
