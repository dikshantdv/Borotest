import Image from '@components/ui/image';
import Link from '@components/ui/link';
import { ROUTES } from '@utils/routes';
import { searchProductPlaceholder } from '@assets/placeholders';

type SearchProductProps = {
  lang: string;
  item: any;
};

const SearchProduct: React.FC<SearchProductProps> = ({ lang, item }) => {
  return (
    <Link
      href={`${ROUTES.PRODUCT}/${item?.product_id}`}
      className="flex items-center justify-start w-full h-auto group"
    >
      <div className="relative flex w-12 h-12 overflow-hidden rounded-md cursor-pointer shrink-0 ltr:mr-4 rtl:ml-4">
        {/* <Image
          src={item?.image?.thumbnail ?? searchProductPlaceholder}
          width={48}
          height={48}
          loading="eager"
          alt={item.name || 'Product Image'}
          className="object-cover bg-fill-thumbnail"
          style={{ width: 'auto' }}
        /> */}
        <img
          src={item?.images?.[0]?.url ?? searchProductPlaceholder}
          width={48}
          height={48}
          loading="eager"
          alt={item.name || 'Product Image'}
          className="object-cover bg-fill-thumbnail"
          style={{ width: 'auto' }}
        />
      </div>
      <div className="flex flex-col w-full overflow-hidden">
        <h3 className="truncate text-brand-dark text-15px">{item.name}</h3>
      </div>
    </Link>
  );
};

export default SearchProduct;
