import React from 'react';
import { Home, User, Briefcase, Video, Code, Smartphone, FileText } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; path?: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const getIcon = (label: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'الرئيسية': <Home className="w-4 h-4" />,
      'عني': <User className="w-4 h-4" />,
      'مشاريعي': <Briefcase className="w-4 h-4" />,
      'الفيديوهات': <Video className="w-4 h-4" />,
      'البرمجة': <Code className="w-4 h-4" />,
      'التطبيقات': <Smartphone className="w-4 h-4" />,
      'المقالات': <FileText className="w-4 h-4" />,
    };
    return iconMap[label] || null;
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && <span className="text-gray-400">/</span>}
            {item.path ? (
              <a
                href={item.path}
                className="flex items-center gap-1 hover:text-primary transition-colors"
                itemProp="item"
              >
                {getIcon(item.label)}
                <span itemProp="name">{item.label}</span>
              </a>
            ) : (
              <span className="flex items-center gap-1 text-gray-800 font-medium">
                {getIcon(item.label)}
                <span itemProp="name">{item.label}</span>
              </span>
            )}
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
