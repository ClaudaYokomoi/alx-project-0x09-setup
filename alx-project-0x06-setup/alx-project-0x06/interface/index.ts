// Extracted from pages/index.tsx
export interface PageRouteProps {
    pageRoute: string;
  }
  
  // Extracted from components/common/Button.tsx
  export interface ButtonProps {
    buttonLabel: string;
    buttonSize?: string;
    buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
    action?: () => void;
  }
  
  // Extracted from components/layouts/Layout.tsx
  export interface LayoutProps {
    children: React.ReactNode;
  }
  