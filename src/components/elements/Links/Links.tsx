import { Logos } from '../Logos';
import { ContentItem } from '$types';

interface LinkItem {
  url: string;
  title: string;
}

interface LinksProps {
  header?: string;
  content?: LinkItem[];
}

const Links = ({ header = '', content = [] }: LinksProps) => {
  const links = content as LinkItem[];
  const urls = links.map((item) => item.url);

  return (
    <div className="w-full bg-white/50 rounded-lg text-base p-4">
      {header && (
        <h2 className="text-2xl font-medium text-white mb-4">{header}</h2>
      )}
      <div className="flex flex-wrap">
        <div className="w-full md:w-9/12">
          {links.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="block mb-2 text-purple-900 hover:text-purple-700 transition-colors duration-200"
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="w-full md:w-3/12">
          <Logos links={urls} />
        </div>
      </div>
    </div>
  );
};

export default Links;