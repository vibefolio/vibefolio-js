import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Skeleton,
} from "../ui";

function AppMainBanner({ loading, gallery }) {
  return (
    <section className="w-full">
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full"
      >
        <CarouselContent className="w-full flex justify-start gap-6 -mx-100">
          {loading ? (
            <>
              <Skeleton className="min-w-[580px] w-[580px] h-80" />
              <Skeleton className="min-w-[580px] w-[580px] h-80" />
              <Skeleton className="min-w-[580px] w-[580px] h-80" />
              <Skeleton className="min-w-[580px] w-[580px] h-80" />
              <Skeleton className="min-w-[580px] w-[580px] h-80" />
            </>
          ) : (
            gallery.map((_, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-6 "
              >
                <Card className="w-[580px] min-w[580px] h-80  ">
                  <CardContent>
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))
          )}
        </CarouselContent>
        <CarouselPrevious className="mx-30 rounded-full hidden md:flex" />
        <CarouselNext className="mx-30 rounded-full" />
      </Carousel>
    </section>
  );
}

export { AppMainBanner };
