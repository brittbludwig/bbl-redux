import { Logos } from '../Logos';
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
    <div className="w-full bg-black/10 backdrop-blur-sm border border-white/20 rounded-lg text-base p-4">
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
              className="block mb-4 mt-1 text-white underline underline-offset-4 decoration-2 font-medium"
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