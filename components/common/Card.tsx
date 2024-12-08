interface CardProps {
    title: string;
    description: string;
  }
  
  export const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
      <div className="border p-4 rounded-lg shadow-lg">
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
    )
  }
  