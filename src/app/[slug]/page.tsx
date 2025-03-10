import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestauranPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestauranPageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({
    where: { slug },
  });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      {/*LOGO E TITULO*/}
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt="Imagem do restaurante"
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      <div className="space-y-1 pt-24 text-center">
        <h3 className="text-2xl.font-semibold">Seja bem-vindo!</h3>
        <p className="opacity-55">
          Selecione a forma de entrega dos seus utensílios. Cuidamos de cada
          detalhe para tornar sua festa especial.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-1 pt-14">
        <ConsumptionMethodOption
          slug={slug}
          option="WITHDRAW"
          buttonText="Para retirar"
          imageAlt="Para retirar"
          imageUrl="/withdraw.png"
        />
        <ConsumptionMethodOption
          slug={slug}
          option="DELIVERY"
          buttonText="Para entregar"
          imageAlt="Para entregar"
          imageUrl="/delivery.png"
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
