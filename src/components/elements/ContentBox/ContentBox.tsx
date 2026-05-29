import { LinkItem } from "$types";

type ContentItem = string | Record<string, string>;

interface ContentBoxProps {
  header?: string;
  content?: ContentItem[] | LinkItem[];
}

const ContentBox = ({ header = '', content = [] }: ContentBoxProps) => {
  const strings = content.filter((item) => typeof item === 'string');
  const objects = content.filter((item) => typeof item === 'object');

  return (
    <div className="w-full max-w-lg bg-black/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 shadow-lg">
      {header && (
        <h2 className="text-3xl font-medium text-white mb-6 tracking-tight leading-snug">
          {header}
        </h2>
      )}

      {strings.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {strings.map((item, index) => (
            <span key={index} className="text-white/80 text-base leading-relaxed px-2 py-1">
              {item as string}
            </span>
          ))}
        </div>
      )}

      {objects.map((item, index) => (
        <span key={index} className="flex flex-wrap items-baseline gap-2 mb-3">
          {Object.values(item as Record<string, string>).map((entry, i) => (
            <span
              key={i}
              className={i === 0
                ? 'text-white/50 text-sm font-semibold uppercase tracking-widest'
                : 'text-white font-medium'
              }
            >
              {entry}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default ContentBox;