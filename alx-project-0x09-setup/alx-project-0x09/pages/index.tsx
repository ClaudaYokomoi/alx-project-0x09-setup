import ImageCard from "@/components/common/ImageCard";
import { ImageProps } from "@/interfaces";
import { useState } from "react";

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");  // State to store the input prompt
  const [imageUrl, setImageUrl] = useState<string>("");  // State to store the generated image URL
  const [generatedImages, setGeneratedImages] = useState<ImageProps[]>([]);  // State to track previously generated images
  const [isLoading, setIsLoading] = useState<boolean>(false);  // State to track loading state

  const handleGenerateImage = async () => {
    setIsLoading(true);  // Start loading
    console.log("Generating Images");

    // Simulate API call to generate an image (replace this with real API logic)
    setTimeout(() => {
      const newImageUrl = `https://via.placeholder.com/400?text=Image+for+${prompt}`;
      setImageUrl(newImageUrl);  // Set the generated image URL
      setGeneratedImages((prevImages) => [
        ...prevImages,
        { imageUrl: newImageUrl, prompt }
      ]);
      setIsLoading(false);  // End loading
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">Image Generation App</h1>
        <p className="text-lg text-gray-700 mb-4">
          Generate stunning images based on your prompts!
        </p>

        <div className="w-full max-w-md">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}  // Update prompt state as user types
            placeholder="Enter your prompt here..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <button
            onClick={handleGenerateImage}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            {isLoading ? "Loading..." : "Generate Image"}  {/* Display loading text when generating */}
          </button>
        </div>

        {generatedImages.length > 0 && (
          <div className="mt-6">
            {generatedImages.map((image, index) => (
              <ImageCard
                key={index}
                action={(imagePath) => setImageUrl(imagePath)}
                imageUrl={image.imageUrl}
                prompt={image.prompt}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
