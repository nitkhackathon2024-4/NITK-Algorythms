import { useState } from "react";
import { ShoppingCart, CreditCard, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";

// Mock data for demonstration
const orderItems = [
	{
		id: 1,
		name: "Premium Widget",
		price: 29.99,
		quantity: 2,
		image: "/path/to/widget-image.jpg",
	},
	{
		id: 2,
		name: "Deluxe Gadget",
		price: 49.99,
		quantity: 1,
		image: "/path/to/gadget-image.jpg",
	},
];

const billingDetails = {
	name: "John Doe",
	address: "123 Main St, Anytown, ST 12345",
	email: "john.doe@example.com",
};

const loadingStates = [
	{
		text: "Connecting to the Beckn Gateway",
	},
	{
		text: "Reaching out to the Beckn Vendor",
	},
	{
		text: "Registering Your Order",
	},
	{
		text: "Proceeding to Payment",
	},
];

export default function OrderConfirmPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [loading, setLoading] = useState(false);

	const subtotal = orderItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);
	const tax = subtotal * 0.08; // Assuming 8% tax rate
	const total = subtotal + tax;

	const handleCheckout = () => {
		setLoading(true);
		setIsLoading(true);

		// Show loader for 1600 milliseconds
		setTimeout(() => {
			setLoading(false); // Hide the loader after 1600 ms
		}, 2000);

		// Simulate loading with a timeout
		setTimeout(() => {
			const options = {
				key: "rzp_test_voFpIpG3NT7DSd", // Replace with your Razorpay key
				amount: total * 100, // Convert to paise for Razorpay
				currency: "INR",
				name: "Dave Pandit",
				description: "Test Transaction",
				image: "https://avatars.githubusercontent.com/u/145253619?v=4",
				order_id: "1234", // Replace with dynamic order ID from backend if needed
				callback_url: `http://localhost:8000/api/orders/paymentverification/${orderId}`, // Adjust as necessary
				prefill: {
					name: billingDetails.name,
					email: billingDetails.email,
					contact: "9000090000", // Adjust as necessary
				},
				notes: {
					address: "Razorpay Corporate Office",
				},
				theme: {
					color: "#3399cc",
				},
			};
			const razor = new window.Razorpay(options);
			razor.open();
		}, 400); // Initial delay for loading simulation
	};

	return (
		<>
			<div className="w-full h-[60vh] flex items-center justify-center">
				{/* Core Loader Modal */}
				{loading && (
					<Loader
						loadingStates={loadingStates}
						loading={loading}
						duration={500}
					/>
				)}
			</div>

			<div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-3xl font-bold text-center mb-8">Order Summary</h1>
					<div className="lg:flex lg:space-x-8">
						{/* Order Details Section */}
						<Card className="flex-1 mb-8 lg:mb-0">
							<CardHeader>
								<CardTitle className="text-xl font-semibold">
									Order Details
								</CardTitle>
								<CardDescription>
									Review your items and billing information
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-6">
									<div>
										<h3 className="text-lg font-medium flex items-center">
											<ShoppingCart className="mr-2 h-5 w-5" />
											Order Items
										</h3>
										<ul className="mt-2 divide-y divide-gray-200">
											{orderItems.map((item) => (
												<li
													key={item.id}
													className="py-4 flex justify-between items-center"
												>
													<div className="flex items-center space-x-4">
														<img
															src={item.image}
															alt={item.name}
															className="w-16 h-16 object-cover rounded"
														/>
														<div>
															<p className="text-sm font-medium text-gray-900">
																{item.name}
															</p>
															<p className="text-sm text-gray-500">
																Quantity: {item.quantity}
															</p>
														</div>
													</div>
													<p className="text-sm font-medium text-gray-900">
														${(item.price * item.quantity).toFixed(2)}
													</p>
												</li>
											))}
										</ul>
									</div>
									<Separator />
									<div>
										<h3 className="text-lg font-medium flex items-center">
											<CreditCard className="mr-2 h-5 w-5" />
											Billing Details
										</h3>
										<div className="mt-2 text-sm text-gray-500">
											<p>{billingDetails.name}</p>
											<p>{billingDetails.address}</p>
											<p>{billingDetails.email}</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Order Summary Section */}
						<Card className="flex-1">
							<CardHeader>
								<CardTitle className="text-xl font-semibold">
									Order Summary
								</CardTitle>
								<CardDescription>
									Review your total before proceeding to payment
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div className="flex justify-between">
										<span className="text-sm text-gray-600">Subtotal</span>
										<span className="text-sm font-medium text-gray-900">
											${subtotal.toFixed(2)}
										</span>
									</div>
									<div className="flex justify-between">
										<span className="text-sm text-gray-600">Tax</span>
										<span className="text-sm font-medium text-gray-900">
											${tax.toFixed(2)}
										</span>
									</div>
									<Separator />
									<div className="flex justify-between">
										<span className="text-base font-medium text-gray-900">
											Total
										</span>
										<span className="text-base font-medium text-gray-900">
											${total.toFixed(2)}
										</span>
									</div>
								</div>
							</CardContent>
							<CardFooter>
								<Button
									onClick={handleCheckout}
									disabled={isLoading}
									className="w-full"
								>
									{isLoading ? (
										"Processing..."
									) : (
										<>
											Proceed to Payment
											<ChevronRight className="ml-2 h-4 w-4" />
										</>
									)}
								</Button>
							</CardFooter>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
}
