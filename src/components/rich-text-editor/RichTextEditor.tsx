"use client";

import { useState } from "react";
import Image from "next/image";
import { useEditor, EditorContent } from "@tiptap/react";
import Link from "@tiptap/extension-link";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import { mergeAttributes } from "@tiptap/core";

import LinkModel from "./LinkModel";

interface TiptapProps {
  label: string;
  mandatory?: boolean;
  size?: "sm" | "md" | "lg";
}

const Tiptap = ({ label, mandatory = false, size = "md" }: TiptapProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [dataToPass, setDataToPass] = useState<object>({});

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ps-2",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc ps-2",
          },
        },
      }),
      Link.configure({
        HTMLAttributes: {
          rel: "noopener noreferrer",
          target: "_blank",
          class: "underline cursor-pointer",
        },
        openOnClick: false,
        autolink: false,
      }),
      Heading.extend({
        levels: [1, 2],
        renderHTML({ node, HTMLAttributes }: any) {
          const level = this.options.levels.includes(node.attrs.level)
            ? node.attrs.level
            : this.options.levels[0];
          const classes: { [index: number]: string } = {
            1: "text-5xl font-extrabold",
            2: "text-4xl font-extrabold",
          };
          return [
            `h${level}`,
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
              class: `${classes[level]}`,
            }),
            0,
          ];
        },
      }).configure({ levels: [1, 2] }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: `outline-none p-4 ${
          size === "sm"
            ? "min-h-[200px]"
            : size === "lg"
            ? "min-h-[300px]"
            : "min-h-[400px]"
        }`,
      },
    },
  });

  const insertEditLink = () => {
    if (editor?.isActive("link")) {
      const url = editor?.getAttributes("link").href;
      const link_title = editor?.getAttributes("link")?.title;

      editor
        ?.chain()
        .focus()
        .extendMarkRange("link")
        .selectNodeBackward()
        .selectNodeForward()
        .run();

      const from = editor?.state.selection.$from.pos;
      const to = editor?.state.selection.$to.pos;

      const text_to_display = editor?.state.doc.textBetween(
        Number(from),
        Number(to)
      );

      setDataToPass({ url, link_title, text_to_display });
    } else {
      if (editor?.state.selection.empty) {
        setDataToPass({});
      } else {
        const from = editor?.state.selection.$from.pos;
        const to = editor?.state.selection.$to.pos;

        const text_to_display = editor?.state.doc.textBetween(
          Number(from),
          Number(to)
        );

        setDataToPass({ text_to_display });
      }
    }
    setIsVisible(true);
  };

  const onLinkSave = (e: any) => {
    e.preventDefault();
    const url = e.target.url.value;
    const textToDisplay = e.target.text_to_display.value;
    const linkTitle = e.target.link_title.value;
    const hiddenFlag = e.target.hiddenFlag;

    if (!url.trim()) {
      e?.target?.reset();
      return editor?.chain().focus().unsetLink().run();
    }

    if (hiddenFlag) {
      editor
        ?.chain()
        .focus()
        .extendMarkRange("link", { title: linkTitle })
        .setLink({ href: url })
        .run();
    } else {
      editor
        ?.chain()
        .focus()
        .insertContent(textToDisplay || url)
        .setTextSelection({
          from: editor.state.selection.$from.pos,
          to: editor.state.selection.$from.pos + textToDisplay.length + 1,
        })
        .extendMarkRange("link", { title: linkTitle })
        .setLink({ href: url })
        .run();
    }

    e?.target?.reset();
    setIsVisible(false);
  };

  return (
    <>
      <label className="text-sm font-extrabold uppercase">
        {label}
        {mandatory && "*"}
      </label>

      <div className="bg-[#181818] rounded-md border border-solid border-stone-700 mb-3 mt-2">
        <div className="flex items-center gap-1 flex-wrap border-b border-solid border-stone-700 py-2">
          <button
            className="outline-none ms-2 rounded-sm hover:bg-white hover:text-black"
            onClick={() => editor?.chain().focus().undo().run()}
            disabled={!editor?.can().chain().focus().undo().run()}
            title="Undo"
          >
            <Image
              src="/assets/undo.png"
              alt="undo"
              className="w-8 aspect-square object-cover p-1 hover:invert disabled:cursor-not-allowed"
              width={60}
              height={60}
            />
          </button>

          <button
            className="outline-none rounded-sm hover:bg-white hover:text-black"
            onClick={() => editor?.chain().focus().redo().run()}
            disabled={!editor?.can().chain().focus().redo().run()}
            title="redo"
          >
            <Image
              src="/assets/redo.png"
              alt="redo"
              className="w-8 aspect-square object-cover p-1 hover:invert disabled:cursor-not-allowed"
              width={60}
              height={60}
            />
          </button>

          <span className="h-7 border-r border-solid border-stone-700 mx-2"></span>

          <button
            className={`outline-none rounded-sm hover:bg-white hover:text-black ${
              editor?.isActive("bold") ? "bg-white text-black" : ""
            }`}
            onClick={() => editor?.chain().focus().toggleBold().run()}
            title="Bold"
          >
            <span className="inline-block w-8 h-8 font-extrabold text-xl pt-[2px] disabled:cursor-not-allowed">
              B
            </span>
          </button>

          <button
            className={`outline-none rounded-sm hover:bg-white hover:text-black ${
              editor?.isActive("italic") ? "bg-white text-black" : ""
            }`}
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            title="Italic"
          >
            <span className="font-serif inline-block w-8 h-8 italic text-xl pt-[2px] disabled:cursor-not-allowed">
              I
            </span>
          </button>

          <span className="h-7 border-r border-solid border-stone-700 mx-2"></span>

          <button
            className={`outline-none rounded-sm hover:bg-white hover:text-black ${
              editor?.isActive("heading", { level: 1 })
                ? "bg-white text-black"
                : ""
            }`}
            onClick={() =>
              editor?.chain().focus().toggleHeading({ level: 1 }).run()
            }
            title="Heading 1"
          >
            <span className="inline-block w-9 h-8 text-lg pt-[2px] disabled:cursor-not-allowed">
              H1
            </span>
          </button>

          <button
            className={`outline-none rounded-sm hover:bg-white hover:text-black ${
              editor?.isActive("heading", { level: 2 })
                ? "bg-white text-black"
                : ""
            }`}
            onClick={() =>
              editor?.chain().focus().toggleHeading({ level: 2 }).run()
            }
            title="Heading 2"
          >
            <span className="inline-block w-9 h-8 text-lg pt-[2px] disabled:cursor-not-allowed">
              H2
            </span>
          </button>

          <span className="h-7 border-r border-solid border-stone-700 mx-2"></span>

          <button
            className={`outline-none rounded-sm hover:bg-white hover:text-black ${
              editor?.isActive("bulletList") ? "bg-white text-black" : ""
            }`}
            onClick={() => editor?.chain().focus().toggleBulletList().run()}
            title="bullet-list"
          >
            <Image
              src="/assets/bullet-list.png"
              alt="bullet-list"
              className={`w-8 aspect-square object-cover p-[5px] ${
                editor?.isActive("bulletList") ? "invert" : "hover:invert"
              }`}
              width={60}
              height={60}
            />
          </button>

          <button
            className={`outline-none rounded-sm hover:bg-white hover:text-black ${
              editor?.isActive("orderedList") ? "bg-white text-black" : ""
            }`}
            onClick={() => editor?.chain().focus().toggleOrderedList().run()}
            title="numbered-list"
          >
            <Image
              src="/assets/numbered-list.png"
              alt="numbered-list"
              className={`w-8 aspect-square object-cover ${
                editor?.isActive("orderedList") ? "invert" : "hover:invert"
              }`}
              width={60}
              height={60}
            />
          </button>

          <span className="h-7 border-r border-solid border-stone-700 mx-2"></span>

          {/* <button
            className="outline-none rounded-sm hover:bg-white hover:text-black"
            onClick={() => }
            disabled={!editor?.can().chain().focus().undo().run()}
            title="Undo"
          >
            <Image
              src="/assets/decrease-indent.png"
              alt="undo"
              className="w-8 aspect-square object-cover p-1 hover:invert disabled:cursor-not-allowed"
              width={60}
              height={60}
            />
          </button>

          <button
            className="outline-none rounded-sm hover:bg-white hover:text-black"
            onClick={() => editor?.chain().focus().redo().run()}
            disabled={!editor?.can().chain().focus().redo().run()}
            title="redo"
          >
            <Image
              src="/assets/increase-indent.png"
              alt="undo"
              className="w-8 aspect-square object-cover p-1 hover:invert disabled:cursor-not-allowed"
              width={60}
              height={60}
            />
          </button>

          <span className="h-7 border-r border-solid border-stone-700 mx-2"></span> */}

          <button
            className={`outline-none rounded-sm ${
              editor?.isActive("link") ? "bg-white text-black" : ""
            } hover:bg-white hover:text-black`}
            onClick={() => insertEditLink()}
            title="Insert/edit link"
          >
            <Image
              src="/assets/link.png"
              alt="link"
              className={`w-8 aspect-square object-cover p-[6px] ${
                editor?.isActive("link") ? "invert" : "hover:invert"
              } disabled:cursor-not-allowed`}
              width={60}
              height={60}
            />
          </button>
        </div>
        <EditorContent editor={editor} />
      </div>

      <LinkModel
        isVisible={isVisible}
        closeModel={() => setIsVisible(false)}
        onSave={onLinkSave}
        defaultData={dataToPass}
      />
    </>
  );
};

export default Tiptap;
