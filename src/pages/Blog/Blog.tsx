import { EyeIcon, PencilIcon, PlusIcon, SearchIcon } from "lucide-react";
import "./Blog.scss";
import type { ReactElement } from "react";

/**
 * Displays a placeholder section for the blog page with a heading indicating that content is forthcoming.
 *
 * @returns A React element containing a heading and an empty container.
 */
function Blog(): ReactElement {
  const toolbarButtons = [
    {
      icon: "𝐁",
      title: "Bold",
      // action: () => execCommand("bold"),
      shortcut: "Ctrl+B",
    },
    {
      icon: "𝐼",
      title: "Italic",
      // action: () => execCommand("italic"),
      shortcut: "Ctrl+I",
    },
    {
      icon: "𝐔",
      title: "Underline",
      // action: () => execCommand("underline"),
      shortcut: "Ctrl+U",
    },
    {
      icon: "S̶",
      title: "Strikethrough",
      // action: () => execCommand("strikeThrough"),
    },
    { icon: "|", type: "separator" },
    {
      icon: "H1",
      title: "Heading 1",
      // action: () => insertHeading(1)
    },
    {
      icon: "H2",
      title: "Heading 2",
      // action: () => insertHeading(2)
    },
    {
      icon: "H3",
      title: "Heading 3",
      // action: () => insertHeading(3)
    },
    { icon: "|", type: "separator" },
    {
      icon: "⬅️",
      title: "Align Left",
      // action: () => execCommand("justifyLeft"),
    },
    {
      icon: "↔️",
      title: "Center",
      // action: () => execCommand("justifyCenter")
    },
    {
      icon: "➡️",
      title: "Align Right",
      // action: () => execCommand("justifyRight"),
    },
    { icon: "|", type: "separator" },
    {
      icon: "• •",
      title: "Bullet List",
      // action: () => execCommand("insertUnorderedList"),
    },
    {
      icon: "1.",
      title: "Numbered List",
      // action: () => execCommand("insertOrderedList"),
    },
    {
      icon: "⬅",
      title: "Decrease Indent",
      // action: () => execCommand("outdent"),
    },
    {
      icon: "➡",
      title: "Increase Indent",
      // action: () => execCommand("indent"),
    },
    { icon: "|", type: "separator" },
    {
      icon: "🔗",
      title: "Insert Link",
      // action: insertLink
    },
    {
      icon: "🖼️",
      title: "Insert Image",
      // action: insertImage
    },
    {
      icon: "📋",
      title: "Insert Table",
      // action: insertTable
    },
    {
      icon: "💭",
      title: "Insert Quote",
      // action: insertQuote
    },
    {
      icon: "💻",
      title: "Code Block",
      // action: insertCodeBlock
    },
  ];

  return (
    <section className="container">
      <h2 className="section-header-center">Coming Soon...</h2>
      <div className="section-body-center">
        <div className="blog-container">
          <div className="blog-settings">
            <div className="settings-header">
              <h3>Post Settings</h3>
            </div>
            <div className="settings-body">
              <label>
                <span>Title *</span>
                <input type="text" />
              </label>
              <label>
                <span>Category</span>
                <select>
                  <option>Test</option>
                  <option>Test</option>
                  <option>Test</option>
                  <option>Test</option>
                </select>
              </label>
              {/* <label> */}
              {/*   <span>Featured</span> */}
              {/*   <input type="checkbox" /> */}
              {/* </label> */}
              <label>
                <span>Tags</span>
                <div className="blog-settings__tags">
                  <input type="text" />
                  <button>
                    <PlusIcon />
                  </button>
                </div>
              </label>
              <label>
                <span>Excerpt</span>
                <textarea />
              </label>
            </div>
          </div>
          <div className="blog-editor">
            <div className="editor-head">
              <button>
                <PencilIcon />
              </button>
              <button>
                <EyeIcon />
              </button>
              <button>
                <SearchIcon />
              </button>
            </div>
            <div className="editor-body">
              <div className="editor-tools">
                {toolbarButtons.map(
                  (tool: any, index: number): ReactElement => {
                    return (
                      <button className="tool" key={index}>
                        {tool.icon}
                      </button>
                    );
                  },
                )}
                {/* Color Picker Section */}
                <div
                  style={{
                    width: "1px",
                    height: "24px",
                    background: "#d1d5db",
                    margin: "0 0.5rem",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    gap: "0.25rem",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    <label style={{ fontSize: "0.6rem", color: "#64748b" }}>
                      Text
                    </label>
                    <input
                      type="color"
                      title="Text Color"
                      style={{
                        width: "28px",
                        height: "28px",
                        border: "1px solid #d1d5db",
                        borderRadius: "4px",
                        cursor: "pointer",
                        padding: "0",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  <label style={{ fontSize: "0.6rem", color: "#64748b" }}>
                    BG
                  </label>
                  <input
                    type="color"
                    title="Background Color"
                    style={{
                      width: "28px",
                      height: "28px",
                      border: "1px solid #d1d5db",
                      borderRadius: "4px",
                      cursor: "pointer",
                      padding: "0",
                    }}
                  />
                </div>
              </div>
              <div className="editor-text">
                <textarea
                  placeholder="Start writing your blog post in Markdown..."
                  style={{
                    flex: 1,
                    padding: "2rem",
                    border: "none",
                    outline: "none",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    fontFamily: '"JetBrains Mono", "Courier New", monospace',
                    resize: "none",
                    background: "white",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
