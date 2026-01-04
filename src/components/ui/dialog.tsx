import React, { ReactNode } from "react";

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({
  open = false,
  onOpenChange,
  children,
}) => {
  const handleClose = () => {
    if (onOpenChange) onOpenChange(false);
  };

  return (
    <>
      {children}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
            {React.Children.map(children, (child) => {
              // Add close function to DialogClose if exists
              if (React.isValidElement(child) && child.type === DialogClose) {
                return React.cloneElement(child, { onClick: handleClose });
              }
              return child;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export const DialogTrigger: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};

export const DialogContent: React.FC<{ children: ReactNode }> = ({
  children,
}) => <>{children}</>;

export const DialogHeader: React.FC<{ children: ReactNode }> = ({
  children,
}) => <div className="mb-4">{children}</div>;

export const DialogTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h2 className="text-2xl font-bold">{children}</h2>
);

export const DialogDescription: React.FC<{ children: ReactNode }> = ({
  children,
}) => <p className="text-gray-600">{children}</p>;

export const DialogClose: React.FC<{ children?: ReactNode; onClick?: () => void }> = ({
  children,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
  >
    {children || "✕"}
  </button>
);
