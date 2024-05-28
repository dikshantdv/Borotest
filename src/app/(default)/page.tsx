import CollectionGrid from '@components/common/collection-grid';
import FeatureGrid from '@components/common/featured-grid';
import Container from '@components/ui/container';
import DownloadApps from '@components/common/download-apps';
import BestSellerProductFeed from '@components/product/feeds/best-seller-product-feed';
import FreshVegetablesProductFeed from '@components/product/feeds/fresh-vegetables-product-feed';
import CookiesProductFeed from '@components/product/feeds/cookies-product-feed';
import PopcornJerkyProductFeed from '@components/product/feeds/popcorn-jerky-product-feed';
import ChipsProductFeed from '@components/product/feeds/chips-product-feed';
import BannerGridTwo from '@components/common/banner-grid-two';
import { bannerGridTwo as banners } from '@framework/static/banner';
import { Metadata } from 'next';
import http from '@framework/utils/http';
import HeroCarouselBlock from '@components/hero/hero-carousel-block';
import { refinedSixHeroBanner as heroBanner } from '@framework/static/banner';
import ProductsCarousel from '@components/product/products-carousel';
import { ROUTES } from '@utils/routes';
import { LIMITS } from '@framework/utils/limits';

export const metadata: Metadata = {
  title: 'Classic',
};

async function getData() {
  const res = await http.get('api-public/lookup');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res.data;
}

export default async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  const data = await getData();
  console.log(data);

  const error = {};
  return (
    <>
      <Container>
        {/* <FeatureGrid lang={lang} /> */}
        <HeroCarouselBlock heroBanner={heroBanner} lang={lang} />
      </Container>
      {/* <BestSellerProductFeed lang={lang} /> */}
      <ProductsCarousel
        sectionHeading="Latest Products"
        categorySlug={ROUTES.PRODUCTS}
        products={data?.lastest_product}
        loading={false}
        error={error?.message}
        limit={LIMITS.BEST_SELLER_PRODUCTS_LIMITS}
        uniqueKey="best-sellers"
        lang={lang}
      />

      <ProductsCarousel
        sectionHeading="Most Liked Products"
        categorySlug={ROUTES.PRODUCTS}
        products={data?.most_liked}
        loading={false}
        error={error?.message}
        limit={LIMITS.BEST_SELLER_PRODUCTS_LIMITS}
        uniqueKey="best-sellers"
        lang={lang}
      />
      {/*  <FreshVegetablesProductFeed lang={lang} />
      <ChipsProductFeed lang={lang} />
      <CollectionGrid className="mb-12 lg:mb-14 xl:mb-16" lang={lang} />
      <CookiesProductFeed lang={lang} />
      <PopcornJerkyProductFeed lang={lang} /> */}
      <DownloadApps lang={lang} />
    </>
  );
}
