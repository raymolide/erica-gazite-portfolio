 import * as LucideIcons from 'lucide-react';

export const getLucideIconByName = (name: string) => {
  const Icon = LucideIcons[name as keyof typeof LucideIcons];
  return Icon ?? null;
};
