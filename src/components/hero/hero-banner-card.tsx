'use client';

import cn from 'classnames';
import Link from '@components/ui/link';
import useWindowSize from '@utils/use-window-size';
import { useTranslation } from 'src/app/i18n/client';
import HeroSearchBox from '@components/hero/hero-banner-search';

interface BannerProps {
  lang: string;
  banner?: any;
  className?: string;
  variant?: 'default' | 'slider' | 'medium' | 'antique';
}

function getImage(deviceWidth: number, imgObj: any) {
  return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
}

export default function HeroBannerCard({
  lang,
  banner,
  className = 'py-20 xy:pt-24',
  variant = 'default',
}: BannerProps) {
  const { t } = useTranslation(lang, 'common');
  const { width } = useWindowSize();
  const { title, description, image } = banner;
  const selectedImage = getImage(width!, image);
  return (
    <div
      className={cn(
        'w-full bg-no-repeat bg-cover bg-center flex items-center ',
        {
          'min-h-[420px] md:min-h-[460px] lg:min-h-[500px] xl:min-h-[550px]':
            variant === 'slider',
        },
        {
          'bg-fill-thumbnail': variant !== 'antique',
        },
        className,
      )}
      style={{
        backgroundImage: `url('${selectedImage.url}')`,
        backgroundPosition:
          variant === 'antique' ? 'left bottom -10px' : 'center center',
      }}
    >
      <div
        className={cn(
          'mx-auto h-full flex flex-col text-center px-6 xl:max-w-[750px] 2xl:max-w-[850px]',
          {
            'max-w-[480px] md:max-w-[550px]': variant === 'default' || 'slider',
            'max-w-[480px] md:max-w-[650px]': variant === 'medium',
            '2xl:max-w-[1005px]': variant === 'antique',
          },
        )}
      >
        <div className="text-center">
          <h2
            className={cn('text-3xl md:text-4xl font-manrope font-extrabold', {
              'leading-snug md:leading-tight xl:leading-[1.3em] mb-3 md:mb-4 xl:mb-3 -mt-2 xl:-mt-3 2xl:-mt-4':
                variant !== 'antique',
              'text-brand-tree-dark xl:text-5xl 2xl:text-[55px]':
                variant === 'default',
              'text-brand-tree-dark xl:text-[40px] 2xl:text-5xl 2xl:mb-4 2xl:pb-0.5':
                variant === 'medium',
              'text-brand-light xl:text-5xl 2xl:text-[55px]':
                variant === 'slider',
              'text-black mb-3 lg:text-5xl xl:text-6xl -tracking-[0.5px] xl:mb-7':
                variant === 'antique',
            })}
          >
            {t(title)}
          </h2>
          <p
            className={cn(
              'text-base md:text-[17px] xl:text-lg leading-7 md:leading-8 xl:leading-[1.92em] xl:px-16',
              {
                'text-brand-dark text-opacity-80 2xl:px-32':
                  variant === 'default',
                'text-brand-light 2xl:px-32': variant === 'slider',
                '2xl:px-24': variant === 'medium',
                'xl:text-xl text-[#282F3B]': variant === 'antique',
              },
            )}
          >
            {t(description)}
          </p>
          {variant !== 'antique' && banner.btnText && (
            <Link
              href={`${banner.btnUrl}`}
              className="h-[45px] mt-7 md:mt-8 text-sm inline-flex items-center justify-center transition duration-300 rounded px-6 py-2 font-semibold bg-brand-light text-brand-dark hover:text-brand-light hover:bg-brand"
            >
              {t(banner.btnText)}
            </Link>
          )}
          {banner.searchBox && (
            <div className="hidden lg:block max-w-[700px] mx-auto md:pt-1 lg:pt-3">
              <div className="lg:flex">
                <HeroSearchBox
                  style={variant}
                  button={{ text: banner.btnText }}
                  lang={lang}
                />
              </div>
              {banner?.formTips ? (
                <p className="text-[#282F3B] font-medium text-base mt-6 opacity-70">
                  {t(banner?.formTips)}
                </p>
              ) : (
                ''
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
