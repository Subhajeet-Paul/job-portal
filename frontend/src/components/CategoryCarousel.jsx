import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'

const category = [
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
  "Fullstack Developer",
  "Mobile Developer",
  "Data Scientist",
]

const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="relative w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((item, index) => (
            <CarouselItem 
              key={index}  
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Button variant="outline" className="rounded-full">{item}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default CategoryCarousel
