import { pathToRoot, slugTag } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const TagList: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const tags = fileData.frontmatter?.tags
  const url = fileData.frontmatter?.url

  const baseDir = pathToRoot(fileData.slug!)

  return (
    <div class={displayClass}>
      {tags && tags.length > 0 && (
        <ul class={classNames(displayClass, "tags")}>
          {tags.map((tag) => {
            const linkDest = baseDir + `/tags/${slugTag(tag)}`
            return (
              <li key={tag}>
                <a href={linkDest} class="internal tag-link">
                  {tag}
                </a>
              </li>
            )
          })}
        </ul>
      )}
      {url && (
        <div class="url">
          <a href={url} target="_blank" class="external url-link">
            {url}
          </a>
        </div>
      )}
    </div>
  )
}

TagList.css = `
.tags {
  list-style: none;
  display: flex;
  padding-left: 0;
  gap: 0.4rem;
  margin: 1rem 0;
  flex-wrap: wrap;
  justify-self: end;
}

.section-li > .section > .tags {
  justify-content: flex-end;
}
  
.tags > li {
  display: inline-block;
  white-space: nowrap;
  margin: 0;
  overflow-wrap: normal;
}

a.internal.tag-link {
  border-radius: 8px;
  background-color: var(--highlight);
  padding: 0.2rem 0.4rem;
  margin: 0 0.1rem;
}
`

export default (() => TagList) satisfies QuartzComponentConstructor
