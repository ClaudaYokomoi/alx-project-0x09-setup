interface ButtonProps {
    label: string;
  }
  
  export const Button: React.FC<ButtonProps> = ({ label }) => {
    return (
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        {label}
      </button>
    )
  }
  