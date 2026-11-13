import { getArticleContent, getArticleMetadata } from "@/lib/articles"
import Layout from "@/components/layout"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = getArticleMetadata()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

const schema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames || []), "hr"],
  attributes: {
    ...defaultSchema.attributes,
    hr: [...(defaultSchema.attributes?.hr || []), "className", "style"],
  },
};

function expandBlankRunsToHr(md: string) {
  // Reemplaza 3+ líneas en blanco por un <hr> con margen proporcional.
  // Ej.: \n\n\n -> <hr style="margin:1rem 0"> ; \n\n\n\n\n -> 3rem, etc.
  return md.replace(/\n{3,}/g, (m) => {
    const extra = m.length - 2; // cuántas "líneas extra" querés ver
    const rem = Math.max(1, extra); // mínimo 1rem
    return `\n\n<hr class="md-gap" style="margin:${rem}rem 0;border:0" />\n\n`;
  });
}



export default function ArticlePage({ params }: ArticlePageProps) {
  const { content, metadata } = getArticleContent(params.slug)
  const prepared = expandBlankRunsToHr(content);

  return (
    <Layout>
      <article className="max-w-3xl mx-auto space-y-8 min-w-0">
        <header className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#073642] text-[#fdf6e3] text-sm">
              {metadata.category}
            </span>
            <time className="text-sm text-[#657b83]">
              {new Date(metadata.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          <h1 className="text-4xl font-bold">{metadata.title}</h1>
          <p className="text-lg text-[#657b83]">{metadata.description}</p>
        </header>

        <div className="prose prose-slate max-w-none break-words [&_pre]:overflow-x-auto prose-headings:font-bold prose-headings:text-[#073642] prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-p:text-[#657b83] prose-a:text-[#268bd2] prose-a:no-underline hover:prose-a:underline prose-code:text-[#dc322f] prose-code:bg-[#eee8d5] prose-code:px-1 prose-code:rounded">
          <Markdown 
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, [rehypeSanitize, schema]]}
            components={{
              // En mobile el scroll horizontal queda dentro de la tabla, no en la página.
              table: ({ children }) => (
                <div className="overflow-x-auto">
                  <table>{children}</table>
                </div>
              ),
            }}>
              {prepared}
            </Markdown>
        </div>
      </article>
    </Layout>
  )
}

