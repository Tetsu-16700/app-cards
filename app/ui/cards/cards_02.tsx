function Card02() {
  return (
    <div className="w-full rounded-md overflow-hidden flex flex-col shadow-md">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="image-origin"
        />
        <span className="absolute bg-red-500 text-white font-semibold p-2 rounded-md top-2 right-2 text-sm">
          SALE
        </span>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-semibold">Product title</h1>
        <p className="text-sm font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
          ante vel eros fermentum faucibus sit amet euismod lorem.
        </p>
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold">$19.99</h1>
          <button className="bg-blue-500 text-white font-semibold rounded-md p-2">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card02;
