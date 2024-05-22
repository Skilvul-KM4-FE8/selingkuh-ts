// ../ui/drawer.tsx
import React, { ReactNode } from "react";
import { Dialog } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

interface DrawerContentProps {
  children: ReactNode;
}

interface DrawerHeaderProps {
  children: ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ open, onClose, children }) => {
  return (
    <Dialog open={open} onClose={onClose} className="fixed inset-0 z-50 flex">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-gray-800 p-6 w-64">{children}</div>
    </Dialog>
  );
};

export const DrawerContent: React.FC<DrawerContentProps> = ({ children }) => {
  return <div className="relative bg-gray-800 p-6 w-64">{children}</div>;
};

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({ children }) => {
  return <div className="flex justify-between items-center">{children}</div>;
};

export const DrawerCloseButton: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  return (
    <button onClick={onClose} className="text-white">
      <XIcon className="h-6 w-6" />
    </button>
  );
};
