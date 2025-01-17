import Image from "next/image";
import { fetchSingleSlugProduct } from "@/utils/actions";
import { BreadCrumbs } from "@/components/single-product/BreadCrumbs";

interface Props {
  params: {
    slug: string;
  };
}

export default async function SingleProductPage({ params }: Props) {
  const { slug } = params;
  const product = await fetchSingleSlugProduct(slug);
  const { name, image, company, description, price } = product;

  return (
    <section>
      <BreadCrumbs name={name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        {/* <div className='relative h-full'>
          <Image
            src={image}
            alt={name}
            fill
            sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw'
            priority
            className='w-full rounded object-cover'
          />
        </div> */}
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            priority
            className="w-full h-full rounded object-contain"
          />
        </div>

        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name} </h1>
            <div className="flex items-center gap-x-2">
              {/* <FavoriteToggleButton productId={params.id} />
              <ShareButton name={product.name} productId={params.id} /> */}
            </div>
          </div>
          {/* <ProductRating productId={params.id} /> */}
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {/* {dollarsAmount} */}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          {/* <AddToCart productId={params.id} /> */}
        </div>
      </div>
      {/* <ProductReviews productId={params.id} /> */}

      {/* {reviewDoesNotExist && <SubmitReview productId={params.id} />} */}
    </section>
  );
}
