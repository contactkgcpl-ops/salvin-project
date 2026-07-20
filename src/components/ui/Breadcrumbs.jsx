import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Exclude breadcrumbs on home page
  if (pathnames.length === 0) {
    return null;
  }

  const breadcrumbList = [
    { name: 'Home', url: 'https://kmgprojects.in/' }
  ];

  let currentPath = '';
  pathnames.forEach((name) => {
    currentPath += `/${name}`;
    breadcrumbList.push({
      name: name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      url: `https://kmgprojects.in${currentPath}`
    });
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbList.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      
      <nav aria-label="breadcrumb" className="bg-gray-50 py-3 border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <ol className="flex items-center space-x-2 text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
            <li>
              <Link to="/" className="flex items-center hover:text-[#F47A20] transition-colors">
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
            </li>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              const formattedName = value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

              return (
                <React.Fragment key={to}>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
                  </li>
                  <li aria-current={isLast ? 'page' : undefined}>
                    {isLast ? (
                      <span className="font-semibold text-[#0B1F35]">{formattedName}</span>
                    ) : (
                      <Link to={to} className="hover:text-[#F47A20] transition-colors">
                        {formattedName}
                      </Link>
                    )}
                  </li>
                </React.Fragment>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
