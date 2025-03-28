import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { formatCurrency } from "@/helpers/format-currency";

interface ProductProps {
  products: Product[];
}

const Products = ({ products }: ProductProps) => {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="spacy-y-3 px-3">
      {products.map((product) => (
        <Link
          href={`/${slug}/menu/${product.id}`}
          key={product.id}
          className="flex items-center justify-between gap-10 py-3 p-4 border-b"
        >
          <div>
            <h3 className="font-semibold text-sm">{product.name}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
            <p className="pt-3 text-sm text-semibold">
              {formatCurrency(product.price)}
            </p>
          </div>
          <div className="relative min-h-[85px] min-w-[100px]">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
