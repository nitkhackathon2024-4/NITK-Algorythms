import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Star, Percent } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProductCard from "../components/ProductCard";

export default function SuggestedPage() {
	const categories = [
		"Electronics",
		"Fashion",
		"Home & Garden",
		"Sports",
		"Beauty",
		"Toys",
		"Automotive",
		"Books",
	];

	const featuredProducts = [
		{
			name: "Smart Watch",
			price: 199.99,
			image: "/placeholder.svg", // Ensure this path is correct
		},
		{
			name: "Wireless Earbuds",
			price: 89.99,
			image: "/placeholder.svg",
		},
		{
			name: "4K TV",
			price: 599.99,
			image: "/placeholder.svg",
		},
		{
			name: "Laptop",
			price: 999.99,
			image: "/placeholder.svg",
		},
	];

	const platforms = ["Amazon", "eBay", "Etsy", "Walmart", "Target"];

	const suggestedProducts = [
		{
			name: "Coffee Maker",
			price: 49.99,
			image: "/placeholder.svg",
		},
		{
			name: "Fitness Tracker",
			price: 79.99,
			image: "/placeholder.svg",
		},
		{
			name: "Bluetooth Speaker",
			price: 39.99,
			image: "/placeholder.svg",
		},
		{
			name: "Tablet",
			price: 299.99,
			image: "/placeholder.svg",
		},
		{
			name: "Digital Camera",
			price: 249.99,
			image: "/placeholder.svg",
		},
		{
			name: "Gaming Console",
			price: 399.99,
			image: "/placeholder.svg",
		},
	];

	const suggestedCategories = [
		"Smartphones",
		"Laptops",
		"Headphones",
		"Smart Home",
		"Wearables",
	];

	const deals = [
		{
			name: "50% off Electronics",
			price: "From $49.99",
			image: "/placeholder.svg",
		},
		{
			name: "Buy 2 Get 1 Free on Books",
			price: "From $9.99",
			image: "/placeholder.svg",
		},
		{
			name: "Free Shipping on orders over $50",
			price: "Min. purchase $50",
			image: "/placeholder.svg",
		},
	];

	return (
		<div className="container mx-auto">
			{/* Categories ScrollView */}
			<section className="mb-12 w-full">
				<ScrollArea className="w-full whitespace-nowrap rounded-md border border-border">
					<div className="flex w-max space-x-4 p-4">
						{categories.map((category, index) => (
							<Button key={index} variant="outline" className="flex-shrink-0">
								{category}
							</Button>
						))}
					</div>
					<ScrollBar orientation="horizontal" />
				</ScrollArea>
			</section>

			{/* Featured Products Carousel */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-4">Featured Products</h2>
				<Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
					<CarouselContent>
						{featuredProducts.map((product, index) => (
							<CarouselItem key={index}>
								<ProductCard product={product} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious>
						<ChevronLeft />
					</CarouselPrevious>
					<CarouselNext>
						<ChevronRight />
					</CarouselNext>
				</Carousel>
			</section>

			{/* Platforms */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-4">Shop by Platform</h2>
				<div className="flex flex-wrap gap-4">
					{platforms.map((platform, index) => (
						<Button key={index} variant="outline">
							{platform}
						</Button>
					))}
				</div>
			</section>

			{/* Suggested Products */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-4">Suggested for You</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
					{suggestedProducts.map((product, index) => (
						<ProductCard key={index} product={product} />
					))}
				</div>
			</section>

			{/* Suggested Categories */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-4">Explore Categories</h2>
				<div className="flex flex-wrap gap-4">
					{suggestedCategories.map((category, index) => (
						<Button key={index} variant="secondary">
							{category}
						</Button>
					))}
				</div>
			</section>

			{/* Deals */}
			<section>
				<h2 className="text-2xl font-bold mb-4">Today's Deals</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{deals.map((deal, index) => (
						<ProductCard key={index} product={deal} />
					))}
				</div>
			</section>
		</div>
	);
}